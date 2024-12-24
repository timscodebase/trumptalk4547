import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts(limit: number) {
    let posts: Post[] = [];

    const paths = import.meta.glob('/src/posts/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>
            const post = { ...metadata, slug } satisfies Post
            post.published && post.featured && posts.push(post)
        }
    }

    posts = posts.sort(
        (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
    );

    console.log('All Posts: ', posts);

    posts = posts.slice(0, limit);

    console.log('5 Posts: ', posts);

    return posts;
}

export async function GET(event) {
    const limit = event.url.searchParams.get('limit') || '5';
    const posts = await getPosts(parseInt(limit));

    // Set Cache-Control header
    const headers = {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600' // Cache for 1 hour on both client and CDN
    };

    return json(posts, {
        headers
    });
}