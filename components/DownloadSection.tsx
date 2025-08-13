import { Button } from "./ui/button";

export function DownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl text-white mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Download our app today and get your first delivery free. Available on iOS and Android.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg flex items-center gap-3">
            <span className="text-2xl">📱</span>
            Download for iOS
          </Button>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg flex items-center gap-3">
            <span className="text-2xl">🤖</span>
            Download for Android
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-8 text-orange-100 text-sm">
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Free Download</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>No Hidden Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>First Delivery Free</span>
          </div>
        </div>
      </div>
    </section>
  );
}