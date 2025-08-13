const steps = [
  {
    step: "01",
    title: "Choose Restaurant",
    description: "Browse through hundreds of restaurants and cuisines in your area. Filter by rating, delivery time, or food type.",
    icon: "🍽️"
  },
  {
    step: "02", 
    title: "Select Your Food",
    description: "Browse the menu, customize your order, and add items to your cart. Special dietary options clearly marked.",
    icon: "🛒"
  },
  {
    step: "03",
    title: "Place Order",
    description: "Secure checkout with multiple payment options. Track your order in real-time from preparation to delivery.",
    icon: "📱"
  },
  {
    step: "04",
    title: "Enjoy Your Meal", 
    description: "Receive fresh, hot food at your doorstep. Rate your experience and earn rewards for future orders.",
    icon: "🎉"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Ordering food has never been easier. Just four simple steps to delicious meals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl sm:text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-orange-200 transform -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}