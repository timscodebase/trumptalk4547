import type { PageLoad } from './$types'
import { fail } from '@sveltejs/kit'
import nodemailer from 'nodemailer'
import { SECRET_GMAIL_USERNAME, SECRET_GMAIL_PASSWORD } from '$env/static/private'

export const load = (async () => {
	return {}
}) satisfies PageLoad

/** @type {import('./$types').Actions} */
export const actions = {
	contact: async ({ cookies, request, url }) => {
		try {
			const data = await request.formData()
			const name = data.get('name')
			const email = data.get('email')
			const message = data.get('message')

			if (!name) {
				return fail(400, { name, missing: true })
			}

			if (!email) {
				return fail(400, { email, missing: true })
			}

			if (!message) {
				return fail(400, { message, missing: true })
			}

			const transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com.com',
				port: 465,
				secure: true,
				auth: {
					user: 'trumptalk4547',
					pass: 'WSX2345xcvb9!!'
				}
			})

			const mail_options = {
				from: `"${name}" <${email}>`,
				to: email,
				subject: 'Thanks for reaching out to Trump Talk 45/47',
				text: message
			}

			const info = await transporter.sendMail(mail_options)

			return {
				status: 200,
				body: {
					message: 'Email sent successfully',
					messageId: info.messageId
				}
			}
		} catch (error: any) {
			return fail(500, {
				error: `Internal server error ${error.message}`
			})
		}
	}
}
