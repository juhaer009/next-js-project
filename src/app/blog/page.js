export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
      author: "John Smith",
      date: "January 15, 2024",
      category: "Web Development",
      readTime: "5 min read",
      image: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Building Scalable Mobile Apps with React Native",
      excerpt: "Learn best practices for creating mobile applications that can grow with your business needs.",
      author: "Alice Davis",
      date: "January 10, 2024",
      category: "Mobile Development",
      readTime: "7 min read",
      image: "from-green-400 to-green-600"
    },
    {
      id: 3,
      title: "UI/UX Design Principles for Better User Engagement",
      excerpt: "Discover key design principles that can significantly improve user experience and engagement rates.",
      author: "Robert Wilson",
      date: "January 5, 2024",
      category: "Design",
      readTime: "6 min read",
      image: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      title: "Optimizing Performance in Next.js Applications",
      excerpt: "Advanced techniques for improving load times and user experience in Next.js applications.",
      author: "John Smith",
      date: "December 28, 2023",
      category: "Performance",
      readTime: "8 min read",
      image: "from-orange-400 to-orange-600"
    },
    {
      id: 5,
      title: "The Rise of AI in Software Development",
      excerpt: "How artificial intelligence is transforming the way we build and maintain software applications.",
      author: "Alice Davis",
      date: "December 20, 2023",
      category: "AI & Technology",
      readTime: "10 min read",
      image: "from-pink-400 to-pink-600"
    },
    {
      id: 6,
      title: "Security Best Practices for Modern Web Apps",
      excerpt: "Essential security measures every developer should implement to protect user data and applications.",
      author: "Robert Wilson",
      date: "December 15, 2023",
      category: "Security",
      readTime: "9 min read",
      image: "from-red-400 to-red-600"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Design", "Performance", "AI & Technology", "Security"];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Insights, tutorials, and industry trends from our team of experts.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-blue-100 px-4 py-2 rounded-full inline-block mb-4">
                  <span className="text-blue-600 font-semibold text-sm">Featured Post</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  The Future of Web Development: Trends to Watch in 2024
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Explore the latest trends shaping the web development landscape, from AI integration 
                  to progressive web apps. Learn how these technologies will impact your projects.
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <span>By John Smith</span>
                  <span className="mx-2">•</span>
                  <span>January 15, 2024</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Read Full Article
                </button>
              </div>
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg h-64 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold">Web Development Trends</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className={`h-48 bg-gradient-to-r ${post.image} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <h4 className="text-lg font-semibold">{post.category}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mb-3">
                    <span className="text-gray-600 text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>By {post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter and never miss our latest articles and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Topics</h2>
            <p className="text-lg text-gray-600">Explore articles by topic</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Next.js", "JavaScript", "TypeScript", "Node.js", "Python",
              "UI/UX", "Mobile Development", "API Design", "Database", "DevOps", "Security"
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-700 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Latest Articles</h2>
              <div className="space-y-6">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className={`w-20 h-20 bg-gradient-to-r ${post.image} rounded-lg flex-shrink-0 flex items-center justify-center`}>
                        <span className="text-white text-2xl">📄</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {post.excerpt.substring(0, 100)}...
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">About the Authors</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      JS
                    </div>
                    <div>
                      <h4 className="font-semibold">John Smith</h4>
                      <p className="text-sm text-gray-600">CEO & Lead Developer</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Passionate about modern web technologies and sharing knowledge with the community.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      AD
                    </div>
                    <div>
                      <h4 className="font-semibold">Alice Davis</h4>
                      <p className="text-sm text-gray-600">CTO & Tech Writer</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Expert in system architecture and emerging technologies in software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}