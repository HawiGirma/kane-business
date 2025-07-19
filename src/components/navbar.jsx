"use client";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#552910] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Kane Business
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Service", path: "/services" },
              { label: "Blog", path: "/blog" },
            ].map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className={`font-medium transition-colors ${
                  isActive(path)
                    ? "text-[#552910] border-b-2 border-[#552910] pb-1"
                    : "text-gray-600 hover:text-[#552910]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Link to="/contact" className="hidden md:block">
            <button className="bg-[#552910] text-white px-6 py-2 rounded-full font-medium hover:bg-[#552910]/90 transition-colors">
              Contact us
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <nav className="flex flex-col space-y-4">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Service", path: "/services" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className={`font-medium transition-colors ${
                    isActive(path) ? "text-[#552910]" : "text-gray-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
