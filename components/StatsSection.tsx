const stats = [
  {
    number: "50K+",
    label: "Happy Customers",
    description: "Satisfied users ordering daily"
  },
  {
    number: "2,000+",
    label: "Partner Restaurants",
    description: "Local and chain restaurants"
  },
  {
    number: "100K+",
    label: "Orders Delivered",
    description: "Successfully completed orders"
  },
  {
    number: "15 min",
    label: "Average Delivery",
    description: "From kitchen to your door"
  }
];

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-orange-100 mb-1">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-orange-200 hidden sm:block">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}