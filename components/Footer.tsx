export function Footer() {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Support: ['Help Center', 'Safety', 'Contact Us', 'Terms of Service'],
    Restaurants: ['Partner with Us', 'Restaurant Portal', 'Delivery Areas', 'Pricing']
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl text-orange-400">
              FoodieApp
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your favorite restaurants, delivered fast. Fresh, delicious food at your doorstep.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-700 transition-colors">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-700 transition-colors">
                <span className="text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-700 transition-colors">
                <span className="text-sm">i</span>
              </div>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg mb-4 text-white">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 FoodieApp. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}