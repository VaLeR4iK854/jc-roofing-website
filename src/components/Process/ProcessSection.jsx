import React from 'react'

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Consultation',
      shortDesc: "Let's talk.",
      description: 'And we\'ll listen. Whether you prefer email, phone or text, we\'re here to answer your questions. When it\'s convenient for you.',
      details: [
        'Free initial consultation',
        'Discuss your roofing goals',
        'Review timeline and budget',
        'Answer all your questions'
      ]
    },
    {
      id: 2,
      title: 'Estimation',  
      shortDesc: "Let's meet.",
      description: 'We\'ll visit with you at your home, carefully explain options, show you the materials and assemble a detailed quote for you to decide.',
      details: [
        'Comprehensive roof inspection',
        'Detailed written estimate', 
        'Material recommendations',
        'Timeline and scope clarification'
      ]
    },
    {
      id: 3,
      title: 'Financing',
      shortDesc: "Don't break the bank.",
      description: 'Our partners offer financing options, helping add value to your home without breaking the bank.',
      details: [
        '0% financing available',
        'Multiple payment options',
        'Insurance claim assistance', 
        'Transparent pricing'
      ]
    },
    {
      id: 4,
      title: 'Installation',
      shortDesc: "We'll get to work.",
      description: 'Let\'s build your dream. With expert installers and best materials, you can trust JC Roofing to build quality in your home.',
      details: [
        'Licensed and insured team',
        'Quality materials and tools',
        'Clean and efficient work',
        'Final inspection and cleanup'
      ]
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-max">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block bg-gray-200 text-text-secondary text-sm font-medium px-4 py-2 rounded-full mb-6">
            PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 max-w-2xl">
            Let's Protect Your Home
            <br />
            <span className="text-accent">In 4 Simple Steps</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Process Steps */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Large Number */}
                  <div className="text-6xl md:text-7xl font-bold text-accent opacity-20 absolute -top-4 -left-2">
                    0{step.id}.
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 pt-8">
                    <h3 className="text-xl font-bold text-text-primary mb-3">
                      {step.title}
                    </h3>
                    
                    <div className="mb-3">
                      <span className="text-text-primary font-semibold">{step.shortDesc}</span>
                      <span className="text-text-secondary ml-1">{step.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <button 
                onClick={scrollToContact}
                className="bg-accent hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                GET STARTED
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative">
            <div className="bg-accent rounded-lg p-8 text-white text-center">
              <div className="mb-6">
                <svg className="w-24 h-24 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">JC ROOFING</h3>
              <p className="text-lg mb-6">Professional Roofing Services</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold">150+</div>
                  <div className="opacity-80">Projects Complete</div>
                </div>
                <div>
                  <div className="font-semibold">15+</div>
                  <div className="opacity-80">Years Experience</div>
                </div>
                <div>
                  <div className="font-semibold">98%</div>
                  <div className="opacity-80">Customer Satisfaction</div>
                </div>
                <div>
                  <div className="font-semibold">24/7</div>
                  <div className="opacity-80">Emergency Service</div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-accent opacity-10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection