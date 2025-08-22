import Image from 'next/image';

const restaurants = [
  {
    name: 'Bella Italia',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '25-35 min',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center',
    featured: true,
  },
  {
    name: 'Dragon Palace',
    cuisine: 'Chinese',
    rating: 4.7,
    deliveryTime: '20-30 min',
    image:
      'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&h=300&fit=crop&crop=center',
    featured: false,
  },
  {
    name: 'Burger Express',
    cuisine: 'American',
    rating: 4.6,
    deliveryTime: '15-25 min',
    image:
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center',
    featured: true,
  },
  {
    name: 'Sushi Zen',
    cuisine: 'Japanese',
    rating: 4.9,
    deliveryTime: '30-40 min',
    image:
      'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&crop=center',
    featured: false,
  },
  {
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.5,
    deliveryTime: '20-30 min',
    image:
      'https://images.unsplash.com/photo-1661685452870-e89b6e8c14fa?w=400&auto=format&fit=crop&q=center',
    featured: true,
  },
  {
    name: 'Curry House',
    cuisine: 'Indian',
    rating: 4.7,
    deliveryTime: '25-35 min',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
    featured: false,
  },
];

export function PopularRestaurantsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
            Popular restaurants
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most loved restaurants in your area. From local
            favorites to popular chains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={300}
                />
                {restaurant.featured && (
                  <div className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  {restaurant.rating}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {restaurant.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {restaurant.cuisine} Cuisine
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    🕒 {restaurant.deliveryTime}
                  </span>
                  <span className="text-green-600 font-medium">
                    Free delivery
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 rounded-lg transition-colors">
            View All Restaurants
          </button>
        </div>
      </div>
    </section>
  );
}
