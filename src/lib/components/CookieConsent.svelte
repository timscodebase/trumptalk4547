<script>
	import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'

	function initAnalytics() {
		// do something with segment.io or google analytics etc
	}
</script>

<GdprBanner cookieName="foo" description="bar" on:analytics={initAnalytics} />
