import React, { useState } from 'react'
import ServiceCard from './ServiceCard'
import CalculatorModal from '../Calculator/CalculatorModal'

const ServicesSection = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 1,
      title: 'Asphalt Shingles',
      subtitle: 'Architectural',
      type: 'Asphalt roof',
      price: '$',
      priceLevel: 'most affordable',
      slope: 'Best on roof slopes 3/12 and above',
      lifetime: '15-50 years',
      maintenance: 'Annual inspections, minor repairs as needed',
      features: [
        'Traditional appearance',
        'Wide range of colors and textures',
        'Cost-effective',
        'Easy and fast to install'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      ctaText: 'CALCULATE COST',
      ctaType: 'calculator',
      basePrice: 5.50
    },
    {
      id: 2,
      title: 'Metal Roofing',
      subtitle: 'Standing Seam',
      type: 'Metal roof',
      price: '$$$',
      priceLevel: 'moderate investment',
      slope: 'Works well on roof slopes 3/12 and above',
      lifetime: '40-70 years',
      maintenance: 'Minimal upkeep, occasional cleaning and inspection recommended',
      features: [
        'Sleek, modern industrial look',
        'Available in standing seam or corrugated styles',
        'Excellent durability against wind and fire',
        'Energy efficient'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
      ctaText: 'CALCULATE COST',
      ctaType: 'calculator',
      basePrice: 8.50
    },
    {
      id: 3,
      title: 'Flat Roof',
      subtitle: 'TPO & PVC',
      type: 'Single Ply Membrane',
      price: '$$',
      priceLevel: 'premium option',
      slope: 'Best for low slopes 3/12 and below and flat roofs',
      lifetime: '20-30 years',
      maintenance: 'Regular inspections, membrane maintenance',
      features: [
        'Commercial-grade materials',
        'Energy efficient white membrane',
        'Seamless installation',
        'Excellent UV resistance'
      ],
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop',
      ctaText: 'CALCULATE COST',
      ctaType: 'calculator',
      basePrice: 10.50
    },
    {
      id: 4,
      title: 'Brava Roofing',
      subtitle: 'Composite Slate',
      type: 'Composite slate',
      price: '$$$$',
      priceLevel: 'luxury option',
      slope: 'Suitable for roof slopes 3/12 and above',
      lifetime: '50+ years',
      maintenance: 'Minimal maintenance, occasional inspections',
      features: [
        'Natural stone or wood appearance',
        'Eco-friendly composite material',
        'Extremely cozzy and durable',
        'Lightweight compared to natural materials'
      ],
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
      ctaText: 'CALCULATE COST',
      ctaType: 'calculator',
      basePrice: 16.50
    }
  ]

  const handleCTAClick = (service) => {
    setSelectedService(service)
    setIsCalculatorOpen(true)
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Roof Replacement Types
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our estimators will help you choose the ideal roofing type that fits your home and budget.
            We offer 4 options for your roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onCTAClick={() => handleCTAClick(service)}
            />
          ))}
        </div>
      </div>

      {/* Calculator Modal */}
      <CalculatorModal 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)}
        selectedService={selectedService}
      />
    </section>
  )
}

export default ServicesSection
