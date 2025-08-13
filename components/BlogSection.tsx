import Image from 'next/image';

const blogPosts = [
  {
    title: '10 Must-Try Local Restaurants This Month',
    excerpt:
      'Discover hidden gems and popular spots that are trending in your neighborhood this month.',
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=250&fit=crop&crop=center',
    category: 'Food Guide',
    readTime: '5 min read',
    date: 'Dec 15, 2024',
  },
  {
    title: 'Healthy Eating Made Easy with Delivery',
    excerpt:
      'Tips and tricks for maintaining a healthy diet while enjoying the convenience of food delivery.',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop&crop=center',
    category: 'Health',
    readTime: '7 min read',
    date: 'Dec 12, 2024',
  },
  {
    title: 'New Express Delivery Feature Launched',
    excerpt:
      'Get your favorite meals delivered in under 15 minutes with our new express delivery service.',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&crop=center',
    category: 'Updates',
    readTime: '3 min read',
    date: 'Dec 10, 2024',
  },
];

export function BlogSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
            Latest news & updates
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest food trends, restaurant features, and
            platform updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={250}
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-6 py-3 rounded-lg transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
