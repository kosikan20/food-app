import Image from 'next/image';

const screenshots = [
  {
    title: 'Browse Restaurants',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=600&fit=crop&crop=center',
  },
  {
    title: 'Menu Selection',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=600&fit=crop&crop=center',
  },
  {
    title: 'Order Tracking',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=600&fit=crop&crop=center',
  },
];

export function AppShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Simple. Fast. Delicious.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how easy it is to order your favorite food with our intuitive
            app interface.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-48 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    <Image
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover rounded-2xl"
                      width={300}
                      height={600}
                    />
                  </div>
                </div>
                <h3 className="text-lg text-gray-900">{screenshot.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
