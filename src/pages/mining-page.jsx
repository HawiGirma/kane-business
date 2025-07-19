import { Link } from "react-router-dom";
import { Check, Star, Pickaxe, Shield, Zap, Truck } from "lucide-react";

export default function MiningPage() {
  const categories = [
    {
      name: "Surface Mining",
      items: [
        "Open-pit mining operations",
        "Strip mining solutions",
        "Quarry development",
        "Placer mining",
        "Mountain top removal",
      ],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Underground Mining",
      items: [
        "Shaft mining systems",
        "Tunnel construction",
        "Room and pillar mining",
        "Longwall mining",
        "Cut and fill operations",
      ],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Equipment & Machinery",
      items: [
        "Heavy mining equipment",
        "Excavators and bulldozers",
        "Drilling machinery",
        "Conveyor systems",
        "Processing equipment",
      ],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Environmental Solutions",
      items: [
        "Land rehabilitation",
        "Water treatment systems",
        "Dust control measures",
        "Waste management",
        "Ecosystem restoration",
      ],
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const features = [
    {
      icon: Pickaxe,
      title: "Advanced Technology",
      desc: "State-of-the-art mining equipment and techniques",
    },
    {
      icon: Shield,
      title: "Safety First",
      desc: "Comprehensive safety protocols and training programs",
    },
    {
      icon: Zap,
      title: "Efficient Operations",
      desc: "Optimized processes for maximum productivity",
    },
    {
      icon: Truck,
      title: "Logistics Support",
      desc: "Complete transportation and supply chain management",
    },
  ];

  const miningTypes = [
    {
      name: "Coal Mining",
      description: "Comprehensive coal extraction and processing services",
      applications: [
        "Power Generation",
        "Steel Production",
        "Cement Manufacturing",
        "Industrial Fuel",
      ],
    },
    {
      name: "Metal Mining",
      description: "Extraction of precious and base metals",
      applications: [
        "Gold & Silver",
        "Copper & Iron",
        "Aluminum & Zinc",
        "Rare Earth Elements",
      ],
    },
    {
      name: "Aggregate Mining",
      description: "Construction materials and industrial minerals",
      applications: [
        "Sand & Gravel",
        "Limestone",
        "Granite",
        "Construction Materials",
      ],
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
              Mining Operations
            </span>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional Mining Operations
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive mining solutions with cutting-edge technology,
                environmental responsibility, and safety-first approach. From
                exploration to extraction and site rehabilitation.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-[#552910] text-[#552910]" />
                  <span className="text-gray-700">25+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-[#552910]" />
                  <span className="text-gray-700">
                    Environmental Compliance
                  </span>
                </div>
              </div>
              <button className="bg-[#552910] text-white px-8 py-3 rounded-full font-medium hover:bg-[#552910]/90 transition-colors">
                Get Consultation
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Mining operations"
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

          {/* Mining Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Mining Specializations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {miningTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                      Applications:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {type.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="bg-[#552910]/10 text-[#552910] px-3 py-1 rounded-full text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Mining Services
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

          {/* Safety & Environmental */}
          <div className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Safety & Environmental Commitment
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Safety Protocols
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Comprehensive safety training</li>
                  <li>• Regular equipment inspections</li>
                  <li>• Emergency response procedures</li>
                  <li>• Personal protective equipment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Environmental Standards
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Environmental impact assessments</li>
                  <li>• Water and air quality monitoring</li>
                  <li>• Waste minimization programs</li>
                  <li>• Biodiversity conservation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Rehabilitation
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Land restoration planning</li>
                  <li>• Soil remediation</li>
                  <li>• Vegetation restoration</li>
                  <li>• Long-term monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Mining Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Exploration",
                  desc: "Geological surveys and resource assessment",
                },
                {
                  step: "2",
                  title: "Planning",
                  desc: "Mine design and environmental permits",
                },
                {
                  step: "3",
                  title: "Extraction",
                  desc: "Safe and efficient mining operations",
                },
                {
                  step: "4",
                  title: "Rehabilitation",
                  desc: "Site restoration and monitoring",
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
              Ready to Start Your Mining Project?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with us for safe, efficient, and environmentally
              responsible mining operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#552910] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Request Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#552910] transition-colors">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
