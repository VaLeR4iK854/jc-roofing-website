import React, { useState, useEffect } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import PricingResults from './PricingResults'
import LeadCaptureForm from '../Forms/LeadCaptureForm'

const CalculatorModal = ({ isOpen, onClose, selectedService }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [calculatorData, setCalculatorData] = useState({
    walkability: null,
    homeSize: null,
    slopeMarkup: 0,
    squareFootage: 0
  })
  const [showLeadForm, setShowLeadForm] = useState(false)

  // Close modal on ESC key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    setCurrentStep(1)
    setCalculatorData({
      walkability: null,
      homeSize: null,
      slopeMarkup: 0,
      squareFootage: 0
    })
    setShowLeadForm(false)
    onClose()
  }

  const handleWalkabilitySelect = (walkability, markup) => {
    setCalculatorData(prev => ({
      ...prev,
      walkability,
      slopeMarkup: markup
    }))
    setCurrentStep(2)
  }

  const handleHomeSizeSelect = (homeSize, squareFootage) => {
    setCalculatorData(prev => ({
      ...prev,
      homeSize,
      squareFootage
    }))
    setCurrentStep(3)
  }

  const handleGetQuote = () => {
    setShowLeadForm(true)
  }

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      if (currentStep === 3) {
        setShowLeadForm(false)
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-85 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-accent to-blue-600 text-white p-6 rounded-t-2xl z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-1">
                Roof Cost Calculator
              </h2>
              {selectedService && (
                <p className="text-blue-100 text-sm">
                  Calculating estimate for {selectedService.title}
                </p>
              )}
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:bg-white hover:bg-opacity-20 transition-all p-2 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress Indicator */}
          {!showLeadForm && (
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm text-blue-100 mb-3">
                <span className="font-semibold">Step {currentStep} of 2</span>
                <span>{Math.round((currentStep / 2) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-blue-700 bg-opacity-30 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-white h-3 rounded-full transition-all duration-500 ease-out shadow-lg"
                  style={{ width: `${(currentStep / 2) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          {showLeadForm ? (
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Get Your Detailed Quote
              </h3>
              <p className="text-text-secondary mb-6">
                Based on your selections, we'll provide you with a comprehensive quote 
                including materials, labor, and timeline.
              </p>
              <LeadCaptureForm inline={true} />
            </div>
          ) : (
            <>
              {currentStep === 1 && (
                <StepOne onSelect={handleWalkabilitySelect} />
              )}
              
              {currentStep === 2 && (
                <StepTwo onSelect={handleHomeSizeSelect} />
              )}
              
              {currentStep === 3 && (
                <PricingResults 
                  calculatorData={calculatorData}
                  selectedService={selectedService}
                  onGetQuote={handleGetQuote}
                />
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!showLeadForm && (
          <div className="sticky bottom-0 bg-gradient-to-t from-gray-50 to-white border-t border-gray-200 p-6 rounded-b-2xl">
            <div className="flex justify-between items-center">
              <button
                onClick={currentStep === 1 ? handleClose : handleBackStep}
                className="flex items-center space-x-2 px-6 py-3 text-text-secondary hover:text-text-primary hover:bg-gray-100 rounded-lg transition-all font-semibold"
              >
                {currentStep > 1 && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                )}
                <span>{currentStep === 1 ? 'Cancel' : 'Back'}</span>
              </button>
              
              {currentStep === 3 && (
                <button
                  onClick={handleGetQuote}
                  className="btn-primary flex items-center space-x-2 text-lg shadow-lg hover:shadow-xl"
                >
                  <span>Get Detailed Quote</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CalculatorModal
