const pricingTiers = [
  {
    name: "Standard",
    price: "Free",
    subtitle: "On orders over $25",
    features: [
      "Free delivery on orders $25+",
      "Standard delivery time",
      "Customer support",
      "Order tracking"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "$4.99",
    subtitle: "Per month",
    features: [
      "Free delivery on all orders",
      "Priority delivery",
      "24/7 premium support", 
      "Exclusive restaurant deals",
      "Early access to new features"
    ],
    popular: true
  },
  {
    name: "Express", 
    price: "$2.99",
    subtitle: "Per delivery",
    features: [
      "Express delivery (15 min)",
      "Any order amount",
      "Real-time GPS tracking",
      "Priority customer support"
    ],
    popular: false
  }
];

export function PricingSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the delivery option that works best for you. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-sm border-2 p-6 lg:p-8 ${
              tier.popular ? 'border-orange-600 scale-105' : 'border-gray-100'
            }`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="mb-1">
                  <span className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {tier.subtitle}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                tier.popular 
                  ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                {tier.name === 'Premium' ? 'Start Free Trial' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            All plans include our core features: real-time tracking, customer support, and secure payments. 
            Cancel Premium subscription anytime.
          </p>
        </div>
      </div>
    </section>
  );
}