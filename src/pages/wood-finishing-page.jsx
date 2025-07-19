import { Link } from "react-router-dom";
import { Check, Star, Palette, Shield, Leaf, Droplets } from "lucide-react";

export default function WoodFinishingPage() {
  const categories = [
    {
      name: "Interior Finishes",
      items: [
        "Polyurethane coatings",
        "Lacquer finishes",
        "Oil-based stains",
        "Water-based sealers",
        "Specialty textures",
      ],
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Exterior Protection",
      items: [
        "Weather-resistant stains",
        "UV protection coatings",
        "Marine-grade finishes",
        "Deck treatments",
        "Fence preservatives",
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Eco-Friendly Options",
      items: [
        "Low-VOC formulations",
        "Natural oil finishes",
        "Plant-based stains",
        "Non-toxic sealers",
        "Sustainable coatings",
      ],
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Commercial Grade",
      items: [
        "High-traffic coatings",
        "Industrial strength",
        "Fire-retardant finishes",
        "Anti-slip treatments",
        "Heavy-duty protection",
      ],
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const features = [
    {
      icon: Palette,
      title: "Color Matching",
      desc: "Custom color matching and blending services",
    },
    {
      icon: Shield,
      title: "Long-Lasting",
      desc: "Superior protection for years of durability",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      desc: "Environmentally responsible formulations",
    },
    {
      icon: Droplets,
      title: "Easy Application",
      desc: "Professional application techniques and tools",
    },
  ];

  const finishTypes = [
    {
      name: "Stains",
      description: "Enhance wood grain while adding color",
      colors: ["Natural", "Honey", "Walnut", "Ebony", "Cherry", "Mahogany"],
    },
    {
      name: "Clear Coats",
      description: "Protect while maintaining natural appearance",
      colors: ["Satin", "Semi-Gloss", "High-Gloss", "Matte", "Eggshell"],
    },
    {
      name: "Paints",
      description: "Solid color coverage with protection",
      colors: ["White", "Black", "Gray", "Custom Colors"],
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
              Wood Finishing Materials
            </span>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Premium Wood Finishing Materials
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Protect and enhance the natural beauty of wood with our
                comprehensive range of high-quality stains, sealers, and
                protective coatings for both interior and exterior applications.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-[#552910] text-[#552910]" />
                  <span className="text-gray-700">100+ Finish Options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-[#552910]" />
                  <span className="text-gray-700">
                    Professional Application
                  </span>
                </div>
              </div>
              <button className="bg-[#552910] text-white px-8 py-3 rounded-full font-medium hover:bg-[#552910]/90 transition-colors">
                Browse Products
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Wood finishing samples"
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

          {/* Finish Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Types of Finishes
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {finishTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                      Available Options:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {type.colors.map((color, colorIndex) => (
                        <span
                          key={colorIndex}
                          className="bg-[#552910]/10 text-[#552910] px-3 py-1 rounded-full text-sm"
                        >
                          {color}
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
              Product Categories
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

          {/* Application Services */}
          <div className="bg-white rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Professional Application Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Surface Preparation
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sanding and smoothing</li>
                  <li>• Cleaning and degreasing</li>
                  <li>• Repair and filling</li>
                  <li>• Primer application</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Application Methods
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Brush application</li>
                  <li>• Spray finishing</li>
                  <li>• Roller techniques</li>
                  <li>• Dip coating</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Quality Control
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Color matching verification</li>
                  <li>• Coverage inspection</li>
                  <li>• Finish quality check</li>
                  <li>• Final protection coating</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#552910] rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Enhance Your Wood?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Discover our complete range of wood finishing materials and
              professional application services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#552910] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Get Color Samples
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#552910] transition-colors">
                Schedule Application
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
