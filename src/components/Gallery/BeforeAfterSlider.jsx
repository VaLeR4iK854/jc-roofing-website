import React, { useState, useRef, useEffect } from 'react'

const BeforeAfterSlider = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    
    // Ограничиваем значение между 10 и 90 процентов
    const clampedPercentage = Math.min(Math.max(percentage, 10), 90)
    setSliderPosition(clampedPercentage)
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    
    const clampedPercentage = Math.min(Math.max(percentage, 10), 90)
    setSliderPosition(clampedPercentage)
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e)
    const handleGlobalMouseUp = () => handleMouseUp()
    const handleGlobalTouchMove = (e) => handleTouchMove(e)
    const handleGlobalTouchEnd = () => handleMouseUp()

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)
      document.addEventListener('touchmove', handleGlobalTouchMove)
      document.addEventListener('touchend', handleGlobalTouchEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
      document.removeEventListener('touchmove', handleGlobalTouchMove)
      document.removeEventListener('touchend', handleGlobalTouchEnd)
    }
  }, [isDragging])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">{title}</h3>
      
      <div 
        ref={containerRef}
        className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-xl cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* After Image (Right side - показывается справа от слайдера) */}
        <div className="absolute inset-0">
          <img 
            src={afterImage} 
            alt="After renovation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
            AFTER
          </div>
        </div>

        {/* Before Image (Left side - показывается слева от слайдера) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before renovation" 
            className="w-full h-full object-cover"
            style={{ width: `${100 * (100 / sliderPosition)}%` }}
          />
          <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
            BEFORE
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize flex items-center justify-center"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider Line */}
          <div className="absolute w-1 h-full bg-white"></div>
          
          {/* Slider Button */}
          <div className="relative w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-300 hover:border-accent transition-colors">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg text-sm">
          ← Drag to compare →
        </div>
      </div>
    </div>
  )
}

export default BeforeAfterSlider
