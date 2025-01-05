import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json()) // Modern replacement for bodyParser.json()

// Email transporter configuration
const transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: process.env.EMAIL_USER, // Your Gmail address
		pass: process.env.EMAIL_PASS // Your Gmail password or app-specific password
	}
})

// Email route
app.post('/api/send-email', async (req, res) => {
	const { name, email, message } = req.body

	if (!name || !email || !message) {
		return res.status(400).json({ error: 'All fields are required' })
	}

	try {
		await transporter.sendMail({
			from: email,
			to: 'trumptalk4547@gmail.com',
			subject: `Message from ${name}`,
			text: message
		})
		res.status(200).json({ success: true })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Failed to send email' })
	}
})

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
