'use client'
import React, { useState } from 'react'
import InputField from './common/InputField'
import TextAreaField from './common/TextAreaField'
import SubmitButton from './common/SubmitButton'
import emailjs from 'emailjs-com'

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        }

        emailjs.send(
            'service_c0hbju8',
            'template_kx5fbpd',
            templateParams,
            'z2TiL3K_2XMh7twbS'
        )
            .then(() => {
                setIsSubmitting(false)
                setIsSuccess(true)
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                })
            })
            .catch(() => {
                setError('Something went wrong, please try again.')
                setIsSubmitting(false)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-indigo-500">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <InputField
                        label="Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextAreaField
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {isSuccess && <p className="text-green-500 text-center">Message sent successfully!</p>}
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <SubmitButton label={isSubmitting ? 'Sending...' : 'Send Message'} disabled={isSubmitting} />
                </form>
            </div>
        </div>
    )
}

export default ContactForm
