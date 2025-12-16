import React from 'react'
import VideoBackground from './VideoBackground'
import LeadCaptureForm from '../Forms/LeadCaptureForm'

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <VideoBackground />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container-max text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Roofing Services 
            <span className="block text-accent">You Can Trust</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto">
            We specialize in providing high-quality roofing solutions for your home. 
            Licensed bonded insured
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <LeadCaptureForm 
              triggerText="Get Started" 
              className="btn-primary text-lg px-8 py-4"
            />
            <button 
              onClick={scrollToServices}
              className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-text-primary"
            >
              Calculate My Cost
            </button>
          </div>
          
          {/* Stats Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">1500+</div>
              <div className="text-gray-300">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">175,000+</div>
              <div className="text-gray-300">Square Feet Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
