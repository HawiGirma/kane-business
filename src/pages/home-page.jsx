"use client";
import {
  Star,
  ArrowRight,
  Users,
  Building,
  Package,
  Sofa,
  Pickaxe,
} from "lucide-react";
import { useEffect } from "react";
import image from "../assets/bin.jpg";
import sofa from "../assets/sofa.jpg";
import sofa1 from "../assets/sofa-3.jpg";
import Testimonials from "../components/testimonial";

export default function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in-up">
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="mb-16 scroll-animate">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8 max-w-2xl">
              Premium Furniture, Infrastructure & Mining Solutions
            </h1>

            <div className="relative mb-8">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern furniture showroom"
                width={1000}
                height={500}
                className="rounded-2xl object-cover w-full h-[500px]"
              />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 bg-gray-900 text-white p-4 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Sofa className="w-5 h-5 text-[#552910]" />
                  <span className="text-sm font-medium">Premium Services</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-2xl font-bold">4.9</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#552910] text-[#552910]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Since 2010 Circle */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-[#552910] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center">
                  Since
                  <br />
                  2010
                </span>
              </div>
            </div>

            <button className="bg-[#552910] text-white px-8 py-3 rounded-full font-medium hover:bg-[#552910]/90 transition-colors mb-16">
              Discover More
            </button>
          </div>

          {/* Commitment Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16 scroll-animate">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                Committed to Delivering Premium Solutions with Innovation,
                Quality Craftsmanship, and Environmental Responsibility
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We specialize in creating exceptional furniture, public
                infrastructure, mining operations, and wood finishing materials
                that combine functionality with aesthetic appeal, serving both
                residential and commercial clients with unmatched quality.
              </p>
            </div>

            <div className="relative">
              <img
                src={sofa1}
                alt="Wood craftsmanship workshop"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full h-[400px]"
              />
              <div className="absolute top-4 left-4 w-12 h-12 bg-[#552910] rounded-full flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-16 scroll-animate">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Sofa className="w-6 h-6 text-[#552910]" />
                <span className="text-4xl font-bold text-gray-900">2K+</span>
              </div>
              <p className="text-gray-600 font-medium">Furniture Projects</p>
              <p className="text-gray-500 text-sm mt-1">
                Custom furniture pieces delivered
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Building className="w-6 h-6 text-[#552910]" />
                <span className="text-4xl font-bold text-gray-900">500+</span>
              </div>
              <p className="text-gray-600 font-medium">Public Installations</p>
              <p className="text-gray-500 text-sm mt-1">
                Public toilets and seating solutions
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Pickaxe className="w-6 h-6 text-[#552910]" />
                <span className="text-4xl font-bold text-gray-900">50+</span>
              </div>
              <p className="text-gray-600 font-medium">Mining Projects</p>
              <p className="text-gray-500 text-sm mt-1">
                Successful mining operations
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="w-6 h-6 text-[#552910]" />
                <span className="text-4xl font-bold text-gray-900">15+</span>
              </div>
              <p className="text-gray-600 font-medium">Years Experience</p>
              <p className="text-gray-500 text-sm mt-1">
                Proven expertise across industries
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Package className="w-6 h-6 text-[#552910]" />
                <span className="text-4xl font-bold text-gray-900">100+</span>
              </div>
              <p className="text-gray-600 font-medium">Wood Finishes</p>
              <p className="text-gray-500 text-sm mt-1">
                Premium finishing materials available
              </p>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="relative scroll-animate">
            <img
              src={sofa}
              alt="Mining operations"
              width={1000}
              height={400}
              className="rounded-2xl object-cover w-full h-[400px]"
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <Testimonials />
      </main>
    </div>
  );
}
