import React from 'react'
import LeadCaptureForm from '../Forms/LeadCaptureForm'

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-accent text-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Estimate</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ready to get started on your roofing project? Fill out our contact form 
              and we'll get back to you within 24 hours with a detailed estimate and 
              schedule for your free consultation.
            </p>
            
            {/* Business Hours */}
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h4 className="font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Only</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-600">
                  <p className="text-accent font-semibold">24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>

            {/* Call Button */}
            <a 
              href="tel:+1-555-ROOFING" 
              className="flex items-center justify-center space-x-3 w-full bg-white text-accent hover:bg-gray-100 font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg">Call (555) ROOFING</span>
            </a>
          </div>

          <div>
            <LeadCaptureForm inline={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
