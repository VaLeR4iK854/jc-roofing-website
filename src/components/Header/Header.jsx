import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="JC Roofing & Exterior Services" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-text-primary hover:text-accent transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-text-primary hover:text-accent transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-text-primary hover:text-accent transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="tel:+1-555-ROOFING" 
              className="text-text-primary hover:text-accent transition-colors duration-300 font-semibold"
            >
              (555) ROOFING
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Get Free Estimate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-text-primary hover:text-accent transition-colors duration-300 font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-text-primary hover:text-accent transition-colors duration-300 font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-text-primary hover:text-accent transition-colors duration-300 font-medium text-left"
              >
                Contact
              </button>
              <a 
                href="tel:+1-555-ROOFING" 
                className="text-text-primary hover:text-accent transition-colors duration-300 font-semibold"
              >
                (555) ROOFING
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full"
              >
                Get Free Estimate
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
