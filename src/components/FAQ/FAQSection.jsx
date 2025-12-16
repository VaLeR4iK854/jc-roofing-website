import React, { useState } from 'react'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'How much does a new roof cost?',
      answer: 'The cost of a new roof depends on several factors including the size of your home, materials chosen, and roof complexity. We provide free detailed estimates to give you accurate pricing for your specific project. You can check our calculator to get an estimate.'
    },
    {
      id: 2,
      question: 'How long does roof installation take?',
      answer: 'Most residential roof installations take 1-3 days depending on the size and complexity of your roof. Weather conditions can affect the timeline. We always provide a detailed schedule during your consultation and keep you informed of any changes. Our team works efficiently while maintaining the highest quality standards.'
    },
    {
      id: 3,
      question: 'What materials do you recommend?',
      answer: 'We recommend materials based on your budget, home style, and local climate. Architectural shingles offer great value and durability for most homes. Metal roofing provides superior longevity and energy efficiency. For flat roofs, we recommend TPO or PVC membranes. During our consultation, we\'ll assess your specific needs and recommend the best options.'
    },
    {
      id: 4,
      question: 'Do you provide warranties?',
      answer: 'Yes! We offer comprehensive warranties on both materials and workmanship. Material warranties range from 15-50+ years depending on the product. Our workmanship warranty covers installation for 5-10 years. We also assist with manufacturer warranty claims and provide detailed warranty documentation for all projects.'
    },
    {
      id: 5,
      question: 'How do I know if I need roof replacement vs repair?',
      answer: 'Signs you may need replacement include: multiple leaks, missing shingles, granule loss, sagging, or a roof over 20-25 years old. Minor issues like a few damaged shingles or small leaks can often be repaired. During our free inspection, we\'ll assess your roof\'s condition and provide honest recommendations for repair vs replacement.'
    },
    {
      id: 6,
      question: 'Are you licensed, bonded and insured?',
      answer: 'Yes, we are fully licensed, bonded and insured for your protection. We carry comprehensive general liability and workers compensation insurance. Our team consists of trained professionals with proper certifications. We can provide proof of insurance and licensing upon request.'
    },
    {
      id: 7,
      question: 'What happens if it rains during installation?',
      answer: 'We monitor weather closely and will temporarily secure your roof if rain is expected. We use tarps and other protective measures to prevent water damage. If severe weather is forecasted, we may postpone work to ensure safety and quality. Your home\'s protection is always our top priority.'
    }
  ]

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get answers to common questions about roofing services, materials, and our process. 
            Don't see your question? Contact us for personalized answers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 transform transition-transform duration-300 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-5 bg-form-bg">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
