import { useState } from "react";

const faqs = [
  {
    question: "How does delivery work?",
    answer: "Once you place an order, our partner restaurant prepares your food and one of our delivery drivers picks it up and brings it straight to your door. You can track the entire process in real-time through our app."
  },
  {
    question: "What are the delivery fees?",
    answer: "Delivery fees vary by distance and demand, typically ranging from $1.99-$4.99. Orders over $25 qualify for free standard delivery. Premium subscribers get free delivery on all orders."
  },
  {
    question: "How long does delivery take?",
    answer: "Most deliveries arrive within 25-35 minutes. Express delivery (available for $2.99 extra) typically takes 15-20 minutes. Delivery times may vary during peak hours or bad weather."
  },
  {
    question: "Can I track my order?", 
    answer: "Yes! You can track your order in real-time from the moment it's confirmed until it arrives at your door. You'll receive notifications at each step of the process."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, PayPal, Apple Pay, Google Pay, and cash on delivery in select areas. All transactions are secure and encrypted."
  },
  {
    question: "What if there's an issue with my order?",
    answer: "If there's any issue with your order, contact our 24/7 customer support through the app or website. We'll work quickly to resolve any problems and ensure you're satisfied."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to know about our food delivery service
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className={`text-gray-500 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ↓
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}