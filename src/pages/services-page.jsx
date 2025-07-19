import { Link } from "react-router-dom";
import {
  Sofa,
  Building2,
  Armchair,
  Palette,
  Pickaxe,
  ArrowRight,
} from "lucide-react";
export default function ServicesPage() {
  const services = [
    {
      icon: Sofa,
      title: "Custom Furniture",
      description:
        "Bespoke furniture pieces crafted to your exact specifications",
      link: "/services/custom-furniture",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Building2,
      title: "Public Toilet Solutions",
      description: "Durable and hygienic public restroom facilities",
      link: "/services/public-toilets",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Armchair,
      title: "Public Seating",
      description: "Comfortable seating solutions for public spaces",
      link: "/services/public-seating",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Palette,
      title: "Wood Finishing Materials",
      description: "Premium stains, sealers, and protective coatings",
      link: "/services/wood-finishing",
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Pickaxe,
      title: "Mining Operations",
      description:
        "Professional mining services with environmental responsibility",
      link: "/services/mining",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive furniture, infrastructure, and mining solutions
              tailored to meet your specific needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#552910] rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <button className="bg-[#552910] text-white px-6 py-3 rounded-full font-medium hover:bg-[#552910]/90 transition-colors inline-flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={450}
                    className="rounded-2xl object-cover w-full h-[450px]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 bg-[#552910] rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your furniture, infrastructure, and
              mining needs. Our team is ready to bring your vision to life.
            </p>
            <Link to="/contact">
              <button className="bg-white text-[#552910] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
