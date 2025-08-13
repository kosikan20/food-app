import Image from 'next/image';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-gray-900">
                Your favorite restaurants,
                <span className="text-orange-600"> delivered fast</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                Discover amazing food from local restaurants and get it
                delivered to your door in minutes. Fresh, fast, and delicious.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
              >
                Download App
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-gray-300"
              >
                View Menu
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-gray-600 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>2,000+ Restaurants</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>30min Average Delivery</span>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative z-10 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=800&fit=crop&crop=center"
                alt="Restaurant app interface"
                className="w-full rounded-2xl sm:rounded-3xl shadow-2xl"
                width={400}
                height={600}
              />
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 sm:w-72 sm:h-72 bg-orange-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 sm:w-64 sm:h-64 bg-red-100 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
