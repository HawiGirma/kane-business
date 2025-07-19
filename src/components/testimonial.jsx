"use client";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      timeAgo: "1 week ago",
      rating: 5,
      text: "The custom dining table we ordered exceeded our expectations. The craftsmanship is exceptional, and the wood finishing is absolutely beautiful. The team was professional throughout the entire process.",
    },
    {
      id: 2,
      name: "David Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      timeAgo: "10 days ago",
      rating: 5,
      text: "We installed their public seating solutions in our park, and the feedback from visitors has been overwhelmingly positive. Durable, comfortable, and aesthetically pleasing. Highly recommended!",
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      timeAgo: "2 weeks ago",
      rating: 5,
      text: "Visited their showroom for public toilet solutions. The team was incredibly knowledgeable and helped us find the perfect fit for our shopping center. Installation was smooth and professional.",
    },
    {
      id: 4,
      name: "James Wilson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      timeAgo: "3 weeks ago",
      rating: 5,
      text: "Their mining operations are top-notch with excellent safety standards and environmental responsibility. Professional team that delivers results while caring for the community.",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      timeAgo: "1 month ago",
      rating: 5,
      text: "Amazing custom office furniture that perfectly fits our workspace. The attention to detail and quality craftsmanship is evident in every piece. Highly professional team.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Read reviews,
            <br />
            work with confidence.
          </h2>

          {/* Rating Display */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-gray-900">4.8/5</span>
              <Star className="w-6 h-6 fill-[#552910] text-[#552910]" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#552910] font-semibold">Trustpilot</span>
              <span className="text-gray-600">Based on 1,240 reviews</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Left Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start">
              <Quote className="w-16 h-16 text-gray-300 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What our customers are saying
              </h3>
              <div className="flex space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#552910] text-[#552910]"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover w-[50px] h-[50px]"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.timeAgo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
