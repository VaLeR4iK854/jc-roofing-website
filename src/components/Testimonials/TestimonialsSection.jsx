import React, { useState } from 'react'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Placeholder testimonials (will be replaced with actual videos)
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Downtown Area',
      project: 'Architectural Shingle Replacement',
      rating: 5,
      text: 'JC Roofing exceeded our expectations. The team was professional, efficient, and the quality of work is outstanding. Our new roof looks amazing and we have complete peace of mind.',
      video: '/api/placeholder/400/300', // Placeholder for video
      image: '/api/placeholder/80/80' // Customer photo
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Suburban District',
      project: 'Metal Roof Installation',
      rating: 5,
      text: 'From consultation to completion, JC Roofing delivered exceptional service. The metal roof installation was flawless and they cleaned up everything perfectly. Highly recommend!',
      video: '/api/placeholder/400/300',
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Lisa Martinez',
      location: 'Heritage Neighborhood',
      project: 'Roof Repair & Maintenance',
      rating: 5,
      text: 'Quick response, fair pricing, and excellent workmanship. They fixed our roof leak promptly and even provided additional maintenance tips. Great customer service!',
      video: '/api/placeholder/400/300',
      image: '/api/placeholder/80/80'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="section-padding bg-page-bg">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Hear directly from our satisfied customers 
            about their experience with JC Roofing & Exterior Services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Video Section */}
              <div className="relative bg-gray-900">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  {/* Placeholder for video */}
                  <div className="text-center text-white p-8">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-6 4h8M7 7h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" />
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Video Testimonial</p>
                    <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-text-primary">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Project Type */}
                <div className="bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {testimonials[currentTestimonial].project}
                </div>

                {/* Testimonial Text */}
                <p className="text-text-secondary leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </p>

                {/* Navigation Dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-accent' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-text-primary rounded-full p-3 shadow-lg transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-text-primary rounded-full p-3 shadow-lg transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
