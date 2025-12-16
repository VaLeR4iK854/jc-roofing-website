import React from 'react'

const ServiceCard = ({ service, onCTAClick }) => {
  const getPriceColor = (price) => {
    const colors = {
      '$': 'text-green-600',
      '$$': 'text-yellow-600', 
      '$$$': 'text-orange-600',
      '$$$$': 'text-red-600'
    }
    return colors[price] || 'text-accent'
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
      {/* Image */}
      <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 shadow-lg">
          <span className={`text-sm font-bold ${getPriceColor(service.price)}`}>
            {service.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-text-primary mb-1">
            {service.title}
          </h3>
          <p className="text-accent text-sm font-semibold">
            {service.subtitle}
          </p>
        </div>

        {/* Key Info */}
        <div className="mb-3 text-center">
          <div className="text-sm text-text-secondary mb-1">{service.type}</div>
          <div className="text-green-600 text-sm font-semibold mb-1">{service.lifetime}</div>
          <div className="text-xs text-text-secondary">{service.slope}</div>
        </div>

        {/* Top Features */}
        <div className="mb-4 flex-1">
          <ul className="space-y-1">
            {service.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 text-xs text-text-primary">
                <svg className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button
          onClick={onCTAClick}
          className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-accent hover:bg-blue-600 text-white text-sm mt-auto"
        >
          {service.ctaText}
        </button>
      </div>
    </div>
  )
}

export default ServiceCard