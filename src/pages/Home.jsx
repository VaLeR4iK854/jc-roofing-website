import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero/HeroSection'
import ServicesSection from '../components/Services/ServicesSection'
import ProcessSection from '../components/Process/ProcessSection'
import GallerySection from '../components/Gallery/GallerySection'
import TestimonialsSection from '../components/Testimonials/TestimonialsSection'
import FAQSection from '../components/FAQ/FAQSection'
import ContactSection from '../components/Contact/ContactSection'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-page-bg">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
