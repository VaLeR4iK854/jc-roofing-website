import React, { useState } from 'react'

const StepOne = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const walkabilityOptions = [
    {
      id: 'walkable',
      title: 'Walkable',
      description: 'Easy to walk on, safe footing',
      markup: 0,
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      id: 'slightly-walkable',
      title: 'Slightly Walkable',
      description: 'Moderate slope, requires caution',
      markup: 10,
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      id: 'too-steep',
      title: 'Too Steep to Walk',
      description: 'Steep slope, special equipment needed',
      markup: 20,
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )
    }
  ]

  const handleSelect = (option) => {
    setSelectedOption(option.id)
    // Auto-advance after selection with a slight delay for visual feedback
    setTimeout(() => {
      onSelect(option.title, option.markup)
    }, 200)
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent bg-opacity-10 rounded-full mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-text-primary mb-3">
          Identify your roof slope
        </h3>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          How steep is your roof? This helps us determine the complexity and size of your project
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {walkabilityOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option)}
            className={`group relative p-8 border-2 rounded-2xl transition-all duration-300 text-left hover:shadow-2xl hover:-translate-y-1 ${
              selectedOption === option.id
                ? 'border-accent bg-gradient-to-br from-accent/10 to-accent/5 shadow-xl scale-105'
                : 'border-gray-200 hover:border-accent bg-white'
            }`}
          >
            {selectedOption === option.id && (
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className={`p-4 rounded-2xl transition-all duration-300 ${
                selectedOption === option.id 
                  ? 'bg-accent bg-opacity-15 shadow-lg' 
                  : 'bg-gray-50 group-hover:bg-accent group-hover:bg-opacity-10'
              }`}>
                {option.icon}
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-text-primary mb-2">
                  {option.title}
                </h4>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {option.description}
                </p>
                
                <div className="text-center">
                  {option.markup === 0 ? (
                    <span className="inline-flex items-center bg-green-100 text-green-700 text-sm font-bold px-4 py-2 rounded-full shadow-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      No extra cost
                    </span>
                  ) : (
                    <span className="inline-flex items-center bg-yellow-100 text-yellow-700 text-sm font-bold px-4 py-2 rounded-full shadow-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      +{option.markup}% cost
                    </span>
                  )}
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
            <h4 className="font-bold text-text-primary mb-2 text-lg">Why does slope matter?</h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Steeper roofs require additional safety equipment, specialized techniques, and more time to complete safely - 
              This affects both labor costs and project timeline
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne
