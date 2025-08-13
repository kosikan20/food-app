import Image from 'next/image';

const features = [
  {
    title: 'Quick Ordering',
    description:
      'Browse menus and place orders in just a few taps. Our streamlined interface makes ordering food effortless.',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center',
    icon: '🍽️',
  },
  {
    title: 'Fast Delivery',
    description:
      'Get your food delivered hot and fresh. Track your order in real-time from kitchen to your doorstep.',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center',
    icon: '🚀',
  },
  {
    title: 'Local Favorites',
    description:
      'Discover hidden gems and popular restaurants in your neighborhood. Support local businesses.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center',
    icon: '❤️',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Why choose our app?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make food ordering simple, fast, and enjoyable. Here's what makes
            us different.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
