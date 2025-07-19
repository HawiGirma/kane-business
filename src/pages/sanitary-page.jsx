import { Link } from "react-router-dom";
import { Check, Star, Shield, Wrench, Leaf } from "lucide-react";

export default function SanitaryPage() {
  const categories = [
    {
      name: "Standard Public Restrooms",
      items: [
        "Single-unit facilities",
        "Multi-stall configurations",
        "Family-friendly designs",
        "Accessible layouts",
        "Vandal-resistant features",
      ],
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Premium Facilities",
      items: [
        "Luxury finishes",
        "Climate control systems",
        "Advanced ventilation",
        "Smart technology integration",
        "Premium fixtures",
      ],
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Portable Solutions",
      items: [
        "Event restrooms",
        "Construction site facilities",
        "Temporary installations",
        "Mobile units",
        "Quick setup options",
      ],
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Specialized Designs",
      items: [
        "Beach & park facilities",
        "Highway rest stops",
        "Shopping center restrooms",
        "School facilities",
        "Healthcare facilities",
      ],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Durable Materials",
      desc: "Weather-resistant and vandal-proof construction",
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      desc: "Designed for simple cleaning and upkeep",
    },
    {
      icon: Check,
      title: "ADA Compliant",
      desc: "Fully accessible designs meeting all regulations",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      desc: "Sustainable materials and water-saving fixtures",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link
              to="/services"
              className="hover:text-[#552910] transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-[#552910] font-medium">
              Public Toilet Solutions
            </span>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Public Toilet Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Durable, hygienic, and aesthetically pleasing public restroom
                facilities designed to withstand heavy use while maintaining the
                highest standards of cleanliness and accessibility.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-[#552910] text-[#552910]" />
                  <span className="text-gray-700">500+ Installations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-[#552910]" />
                  <span className="text-gray-700">10-Year Warranty</span>
                </div>
              </div>
              <button className="bg-[#552910] text-white px-8 py-3 rounded-full font-medium hover:bg-[#552910]/90 transition-colors">
                Request Quote
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Public toilet facility"
                width={700}
                height={500}
                className="rounded-2xl object-cover w-full h-[500px]"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-[#552910] rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Toilet Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={500}
                    height={300}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {category.name}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center space-x-2"
                        >
                          <Check className="w-4 h-4 text-[#552910] flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Technical Specifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Materials
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Stainless steel fixtures</li>
                  <li>• Anti-bacterial surfaces</li>
                  <li>• Slip-resistant flooring</li>
                  <li>• Corrosion-resistant hardware</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Features
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Automatic lighting systems</li>
                  <li>• Ventilation controls</li>
                  <li>• Water-saving fixtures</li>
                  <li>• Emergency call systems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Compliance
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• ADA accessibility standards</li>
                  <li>• Building code compliance</li>
                  <li>• Health department approved</li>
                  <li>• Environmental certifications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#552910] rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Public Restroom Solutions?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us for a consultation and custom quote for your public
              facility needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#552910] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Get Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#552910] transition-colors">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
