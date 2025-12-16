import React, { useState } from 'react'

const LeadCaptureForm = ({ triggerText = "Get Started", className = "btn-primary", inline = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        setIsOpen(false)
        setIsSuccess(false)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        })
      }, 2000)
    }, 1000)
  }

  const closeModal = () => {
    setIsOpen(false)
    setIsSuccess(false)
  }

  if (inline) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="px-4 py-3 bg-form-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="px-4 py-3 bg-form-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address*"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-form-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number*"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-form-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
        />
        <textarea
          name="message"
          placeholder="Brief Message/Project Details"
          value={formData.message}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 bg-form-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary resize-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Get Free Estimate'}
        </button>
        <p className="text-xs text-gray-600 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    )
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        {triggerText}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Thank You!</h3>
                <p className="text-text-secondary">We'll contact you within 24 hours with your free estimate.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-text-primary mb-6">Get Your Free Estimate</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name*"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-form-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-4 py-3 bg-form-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-form-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-form-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
                  />
                  <textarea
                    name="message"
                    placeholder="Brief Message/Project Details"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-form-bg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary resize-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Free Estimate'}
                  </button>
                  <p className="text-xs text-gray-600 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default LeadCaptureForm
