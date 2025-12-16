import React, { useState } from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Real before/after roofing projects
  const projects = [
    {
      id: 1,
      title: 'Asphalt Shingle Roof Replacement',
      location: 'Residential Home, Suburbia',
      before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&crop=center',
      description: 'Complete architectural shingle replacement with upgraded ventilation system and new gutters. Transformed this aging roof into a beautiful, durable surface.',
      details: {
        duration: '3 days',
        materials: 'Architectural Shingles, Ridge Vent, Gutters',
        size: '2,400 sq ft'
      }
    },
    {
      id: 2,
      title: 'Metal Roof Installation',
      location: 'Modern Family Home',
      before: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&h=400&fit=crop&crop=center',
      after: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center',
      description: 'Standing seam metal roof installation over old asphalt shingles. Enhanced energy efficiency and modern aesthetic appeal.',
      details: {
        duration: '4 days',
        materials: 'Standing Seam Metal, Insulation',
        size: '1,800 sq ft'
      }
    },
    {
      id: 3,
      title: 'Tile Roof Restoration',
      location: 'Mediterranean Style Home',
      before: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop&crop=center',
      after: 'https://images.unsplash.com/photo-1516156008625-3a99312b8e02?w=600&h=400&fit=crop&crop=center',
      description: 'Clay tile roof restoration with broken tile replacement and complete underlayment renewal. Restored Mediterranean elegance.',
      details: {
        duration: '5 days',
        materials: 'Clay Tiles, Synthetic Underlayment',
        size: '3,200 sq ft'
      }
    },
    {
      id: 4,
      title: 'Slate Roof Repair & Restoration',
      location: 'Historic Colonial Home',
      before: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop&crop=center',
      after: 'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=600&h=400&fit=crop&crop=center',
      description: 'Slate roof restoration with damaged slate replacement and copper flashing repair. Preserved historic character with modern weatherproofing.',
      details: {
        duration: '6 days',
        materials: 'Natural Slate, Copper Flashing',
        size: '2,800 sq ft'
      }
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Our Work Gallery
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See the quality and transformation of our roofing projects. 
            Each project represents our commitment to excellence and customer satisfaction.
          </p>
        </div>

        {/* Interactive Before/After Slider */}
        <div className="mb-12">
          <BeforeAfterSlider
            beforeImage={projects[currentSlide].before}
            afterImage={projects[currentSlide].after}
            title={projects[currentSlide].title}
          />
        </div>

        {/* Project Info */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="text-accent font-semibold mb-3 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {projects[currentSlide].location}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {projects[currentSlide].description}
              </p>
            </div>
            
            <div className="bg-form-bg rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-3">Project Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Duration:</span>
                  <span className="text-text-primary font-medium">{projects[currentSlide].details.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Size:</span>
                  <span className="text-text-primary font-medium">{projects[currentSlide].details.size}</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <span className="text-text-secondary block mb-1">Materials Used:</span>
                  <span className="text-text-primary font-medium">{projects[currentSlide].details.materials}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white hover:bg-gray-100 text-text-primary rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="bg-white hover:bg-gray-100 text-text-primary rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-accent w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Ready to Transform Your Roof?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Join our satisfied customers and get a roof that will protect and beautify your home for decades to come.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default GallerySection