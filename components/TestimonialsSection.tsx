const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Lover",
    content: "This app has completely changed how I order food. The delivery is always fast and the food arrives hot. Love the variety of restaurants!",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Busy Professional", 
    content: "Perfect for my busy schedule. I can order lunch between meetings and it's always ready when I need it. The app is so easy to use.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "College Student",
    content: "Great prices and amazing food quality. The student discounts are a lifesaver. Plus, I discovered so many new restaurants through the app.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            What our customers say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of happy customers who love our service
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="text-gray-900 mb-1">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}