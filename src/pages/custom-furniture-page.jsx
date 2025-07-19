import { Link } from "react-router-dom";
import { Check, Star } from "lucide-react";

export default function CustomFurniturePage() {
  const categories = [
    {
      name: "Residential Furniture",
      items: [
        "Dining Tables",
        "Chairs & Seating",
        "Bedroom Sets",
        "Living Room Furniture",
        "Storage Solutions",
      ],
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Commercial Furniture",
      items: [
        "Office Desks",
        "Conference Tables",
        "Reception Furniture",
        "Waiting Area Seating",
        "Executive Suites",
      ],
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Restaurant & Hospitality",
      items: [
        "Restaurant Tables",
        "Bar Stools",
        "Booth Seating",
        "Hotel Furniture",
        "Outdoor Dining Sets",
      ],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Custom Storage",
      items: [
        "Built-in Wardrobes",
        "Kitchen Cabinets",
        "Bookshelves",
        "Display Units",
        "Modular Storage",
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const features = [
    "Premium hardwood materials",
    "Custom design consultation",
    "3D visualization before production",
    "Professional installation service",
    "5-year craftsmanship warranty",
    "Sustainable sourcing practices",
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
            <span className="text-[#552910] font-medium">Custom Furniture</span>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Custom Furniture Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your space with bespoke furniture pieces crafted to
                your exact specifications. From concept to completion, we bring
                your vision to life with exceptional craftsmanship.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-[#552910] text-[#552910]" />
                  <span className="text-gray-700">4.9/5 Customer Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-[#552910]" />
                  <span className="text-gray-700">
                    Free Design Consultation
                  </span>
                </div>
              </div>
              <button className="bg-[#552910] text-white px-8 py-3 rounded-full font-medium hover:bg-[#552910]/90 transition-colors">
                Get Quote
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Custom furniture showcase"
                width={700}
                height={500}
                className="rounded-2xl object-cover w-full h-[500px]"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Furniture Categories
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

          {/* Features */}
          <div className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Why Choose Our Custom Furniture?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#552910] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Design Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Consultation",
                  desc: "Discuss your vision and requirements",
                },
                {
                  step: "2",
                  title: "Design",
                  desc: "Create detailed plans and 3D visualizations",
                },
                {
                  step: "3",
                  title: "Crafting",
                  desc: "Expert craftsmen bring your design to life",
                },
                {
                  step: "4",
                  title: "Installation",
                  desc: "Professional delivery and setup",
                },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#552910] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#552910] rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Dream Furniture?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              discuss your project and create something truly unique for your
              space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#552910] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#552910] transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
