import React from 'react'

const PricingResults = ({ calculatorData, selectedService, onGetQuote }) => {
  // Base pricing per sq ft for selected service
  const basePrice = selectedService?.basePrice || 5.50
  const basePricing = {
    affordable: basePrice,
    popular: basePrice + 1.00,
    premium: basePrice + 2.50
  }

  // Calculate final prices using the formula from specification:
  // Final Price = (Home Square Footage + (Home Square Footage × Slope Percentage)) × Price Per Sq Ft
  const calculatePrice = (basePricePerSqFt) => {
    const slopeMarkupDecimal = calculatorData.slopeMarkup / 100
    const adjustedSquareFootage = calculatorData.squareFootage + (calculatorData.squareFootage * slopeMarkupDecimal)
    return adjustedSquareFootage * basePricePerSqFt
  }

  const pricingTiers = [
    {
      id: 'affordable',
      name: 'Affordable Package',
      price: calculatePrice(basePricing.affordable),
      pricePerSqFt: basePricing.affordable,
      features: [
        `Quality ${selectedService?.title?.toLowerCase() || 'roofing materials'}`,
        'Standard installation',
        'Basic warranty coverage',
        'Professional cleanup'
      ],
      popular: false,
      color: 'border-gray-300',
      bgColor: 'bg-white'
    },
    {
      id: 'popular',
      name: 'Popular Package',
      price: calculatePrice(basePricing.popular),
      pricePerSqFt: basePricing.popular,
      features: [
        `Premium ${selectedService?.title?.toLowerCase() || 'roofing materials'}`,
        'Enhanced installation process',
        'Extended warranty coverage',
        'Upgraded ventilation system',
        'Complete cleanup & inspection'
      ],
      popular: true,
      color: 'border-accent',
      bgColor: 'bg-accent bg-opacity-5'
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: calculatePrice(basePricing.premium),
      pricePerSqFt: basePricing.premium,
      features: [
        `Top-tier ${selectedService?.title?.toLowerCase() || 'roofing materials'}`,
        'Master craftsman installation',
        'Lifetime warranty options',
        'Premium ventilation & insulation',
        'Gutter system upgrade available',
        'White-glove service & cleanup'
      ],
      popular: false,
      color: 'border-yellow-400',
      bgColor: 'bg-yellow-50'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-text-primary mb-3">
          Your {selectedService?.title || 'Roofing'} Estimate
        </h3>
        <p className="text-lg text-text-secondary mb-6">
          Based on your selections: <span className="font-bold text-accent">{calculatorData.walkability}</span> roof, 
          <span className="font-bold text-accent"> {calculatorData.homeSize}</span>
        </p>
        
        {/* Calculation breakdown */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 text-sm max-w-2xl mx-auto shadow-sm">
          <div className="flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h4 className="font-bold text-text-primary text-base">Calculation Details</h4>
          </div>
          <div className="text-text-secondary space-y-2">
            <div className="flex justify-between items-center">
              <span>Base roof area:</span>
              <span className="font-semibold">{calculatorData.squareFootage.toLocaleString()} sq ft</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Slope adjustment (+{calculatorData.slopeMarkup}%):</span>
              <span className="font-semibold">+{(calculatorData.squareFootage * calculatorData.slopeMarkup / 100).toLocaleString()} sq ft</span>
            </div>
            <div className="flex justify-between items-center font-bold text-text-primary border-t-2 border-blue-200 pt-2 mt-2 text-base">
              <span>Total area:</span>
              <span className="text-accent">{(calculatorData.squareFootage + (calculatorData.squareFootage * calculatorData.slopeMarkup / 100)).toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
              tier.popular 
                ? 'border-accent shadow-xl scale-105 bg-white' 
                : `${tier.color} ${tier.bgColor}`
            }`}
          >
            {tier.popular && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-blue-600 text-white text-center py-3 text-sm font-bold tracking-wide shadow-lg">
                ⭐ MOST POPULAR
              </div>
            )}
            
            <div className={`p-7 ${tier.popular ? 'pt-14' : ''}`}>
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-text-primary mb-3">
                  {tier.name}
                </h4>
                
                <div className="mb-4">
                  <div className="text-4xl font-black text-accent mb-2 tracking-tight">
                    ${tier.price.toLocaleString()}
                  </div>
                  <div className="inline-block bg-accent bg-opacity-10 text-accent text-xs font-bold px-3 py-1.5 rounded-full">
                    ${tier.pricePerSqFt}/sq ft + slope
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8 min-h-[160px]">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 text-sm">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text-primary leading-snug flex-1">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onGetQuote}
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl text-base ${
                  tier.popular
                    ? 'bg-gradient-to-r from-accent to-blue-600 hover:from-blue-600 hover:to-accent text-white transform hover:scale-105'
                    : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                }`}
              >
                {tier.popular ? 'Choose Popular Package' : 'Select Package'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-6 mt-10 shadow-sm">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-text-primary mb-3 text-lg">Important Notes</h4>
            <ul className="text-sm text-text-secondary space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold">•</span>
                <span>Prices are estimates based on standard conditions</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold">•</span>
                <span>Final pricing may vary based on specific roof conditions, accessibility, and local factors</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold">•</span>
                <span>All packages include materials, labor, permits, and cleanup</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold">•</span>
                <span className="font-semibold text-accent">Free detailed inspection and quote available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingResults
