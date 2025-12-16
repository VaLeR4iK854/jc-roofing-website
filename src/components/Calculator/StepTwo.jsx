import React, { useState } from 'react'

const StepTwo = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const homeSizeOptions = [
    {
      id: 'small',
      title: '500 - 1,000 Sq. Ft.',
      description: 'Small home or cottage',
      squareFootage: 500,
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'medium',
      title: '1,000-1,250 Sq. Ft.',
      description: 'Average family home',
      squareFootage: 1375,
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'large',
      title: '1,250-1,500 Sq. Ft.',
      description: 'Large family home',
      squareFootage: 2125,
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      id: 'extra-large',
      title: '1,500 - 1,750 Sq. Ft.',
      description: 'Large estate or multi-story',
      squareFootage: 3000,
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  ]

  const handleSelect = (option) => {
    setSelectedOption(option.id)
    // Auto-advance after selection with a slight delay for visual feedback
    setTimeout(() => {
      onSelect(option.title, option.squareFootage)
    }, 200)
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent bg-opacity-10 rounded-full mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-text-primary mb-3">
          1st floor Size (with a garage if any)
        </h3>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Select the size range that best matches your 1st floor size - We'll use this to estimate the roof area and material requirements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {homeSizeOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option)}
            className={`group relative p-7 border-2 rounded-2xl transition-all duration-300 text-left hover:shadow-2xl hover:-translate-y-1 ${
              selectedOption === option.id
                ? 'border-accent bg-gradient-to-br from-accent/10 to-accent/5 shadow-xl scale-105'
                : 'border-gray-200 hover:border-accent bg-white'
            }`}
          >
            {selectedOption === option.id && (
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg z-10">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
            
            <div className="flex items-start space-x-5">
              <div className={`p-4 rounded-2xl flex-shrink-0 transition-all duration-300 ${
                selectedOption === option.id 
                  ? 'bg-accent bg-opacity-15 shadow-lg' 
                  : 'bg-gray-50 group-hover:bg-accent group-hover:bg-opacity-10'
              }`}>
                {option.icon}
              </div>
              
              <div className="flex-1">
                <h4 className="text-lg font-bold text-text-primary mb-2">
                  {option.title}
                </h4>
                <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                  {option.description}
                </p>
                <div className="inline-flex items-center bg-accent bg-opacity-10 text-accent text-sm font-bold px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  ~{option.squareFootage.toLocaleString()} sq ft
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mt-8 shadow-sm">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-text-primary mb-2 text-lg">How we calculate roof area</h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Roof area is typically 1.2-1.4x larger than 1st floor square footage due to overhangs, dormers, and roof pitch - 
              Our estimates include a standard 10% waste factor for materials
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepTwo
