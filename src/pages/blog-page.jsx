import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Sustainable Wood Finishing: The Future of Furniture",
      excerpt:
        "Explore eco-friendly wood finishing techniques that protect both your furniture and the environment.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Sustainability",
    },
    {
      id: 2,
      title: "Designing Public Spaces: Best Practices for Seating Solutions",
      excerpt:
        "Learn how thoughtful seating design can transform public spaces and enhance community interaction.",
      author: "Michael Chen",
      date: "March 10, 2024",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Design",
    },
    {
      id: 3,
      title: "The Art of Custom Furniture: From Concept to Creation",
      excerpt:
        "Take a behind-the-scenes look at our custom furniture creation process and craftsmanship techniques.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Craftsmanship",
    },
    {
      id: 4,
      title: "Modern Public Toilet Design: Balancing Function and Aesthetics",
      excerpt:
        "How contemporary design principles are revolutionizing public restroom facilities.",
      author: "Sarah Johnson",
      date: "February 28, 2024",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Architecture",
    },
    {
      id: 5,
      title: "Wood Species Guide: Choosing the Right Material for Your Project",
      excerpt:
        "A comprehensive guide to selecting the perfect wood species for different furniture applications.",
      author: "Michael Chen",
      date: "February 20, 2024",
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Materials",
    },
    {
      id: 6,
      title: "Maintenance Tips for Public Furniture: Ensuring Longevity",
      excerpt:
        "Essential maintenance practices to keep public furniture looking great and functioning properly.",
      author: "Emily Rodriguez",
      date: "February 15, 2024",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Maintenance",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and stories from the world of furniture design,
            public infrastructure, and wood craftsmanship.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2">
              <div>
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-[#552910] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">Featured</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 text-[#552910] font-medium hover:text-[#552910]/80">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#552910]/10 text-[#552910] px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="text-[#552910] hover:text-[#552910]/80">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-[#552910] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights on
            furniture design, craftsmanship tips, and industry trends.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-full border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#552910] px-6 py-3 rounded-r-full font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
