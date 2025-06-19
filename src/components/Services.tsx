import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Home,
  Paintbrush,
  Hammer,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Appliance Repair",
      icon: <Wrench className="w-8 h-8 text-white" />,
      description:
        "Expert repair services for all major appliances including washers, dryers, dishwashers, refrigerators, and more. We fix it right the first time.",
      features: [
        "Same-day service available",
        "All major brands serviced",
        "90-day warranty on repairs",
        "Upfront pricing",
      ],
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      ],
    },
    {
      title: "Home Painting",
      icon: <Paintbrush className="w-8 h-8 text-white" />,
      description:
        "Professional interior and exterior painting services to refresh and protect your home. Quality materials and expert craftsmanship guaranteed.",
      features: [
        "Interior & exterior painting",
        "Premium paint brands",
        "Color consultation included",
        "Clean, professional finish",
      ],
      images: [
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80",
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80",
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&q=80",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&q=80",
      ],
    },
    {
      title: "General Home Repair",
      icon: <Hammer className="w-8 h-8 text-white" />,
      description:
        "From leaky faucets to squeaky doors, we handle all those small projects that make a big difference in your home's comfort and functionality.",
      features: [
        "Plumbing repairs",
        "Electrical work",
        "Door & window fixes",
        "Drywall & flooring",
      ],
      images: [
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80",
        "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
        "https://images.unsplash.com/photo-1609132718484-cc90df3417f8?w=400&q=80",
      ],
    },
    {
      title: "Preventive Maintenance",
      icon: <Home className="w-8 h-8 text-white" />,
      description:
        "Regular maintenance services to prevent costly repairs and keep your home systems running efficiently year-round.",
      features: [
        "HVAC maintenance",
        "Seasonal inspections",
        "Preventive care plans",
        "Emergency priority service",
      ],
      images: [
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#333333]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button onClick={() => navigate("/")}>
                <img
                  src="/images/R2RO Logo (Final).svg"
                  alt="R2RO Repair"
                  className="h-14 w-auto"
                />
              </button>
            </div>
            <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <button
                onClick={() => navigate("/")}
                className="font-semibold text-[#315B40] hover:text-[#D1A255] transition-colors"
              >
                Home
              </button>
              <span className="font-semibold text-[#D1A255]">Services</span>
              <button
                onClick={() => navigate("/about")}
                className="font-semibold text-[#315B40] hover:text-[#D1A255] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => navigate("/testimonials")}
                className="font-semibold text-[#315B40] hover:text-[#D1A255] transition-colors"
              >
                Testimonials
              </button>
              <Button
                className="bg-[#8FAABF] hover:bg-[#D1A255] text-[#F5F3EE] font-semibold px-6 py-2 rounded-lg transition-colors"
                onClick={() => navigate("/#booking")}
              >
                Book Now
              </Button>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <Button
                className="bg-[#8FAABF] hover:bg-[#D1A255] text-[#F5F3EE] font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                onClick={() => navigate("/#booking")}
              >
                Book Now
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#315B40] hover:text-[#D1A255]"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => {
                  navigate("/");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left font-semibold text-[#315B40] hover:text-[#D1A255] transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate("/about");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left font-semibold text-[#315B40] hover:text-[#D1A255] transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate("/testimonials");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left font-semibold text-[#315B40] hover:text-[#D1A255] transition-colors py-2"
              >
                Testimonials
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#315B40] to-[#8FAABF] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white hover:text-[#D1A255] p-0 mr-4"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              Back to Home
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto">
              Professional, reliable solutions for all your home maintenance and
              repair needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-[#F5F3EE]"}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#315B40] rounded-full flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#315B40]">
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#D1A255] rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="bg-[#D1A255] hover:bg-[#315B40] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  onClick={() => navigate("/#booking")}
                >
                  Book This Service
                </Button>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="grid grid-cols-2 gap-4">
                  {service.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="aspect-square overflow-hidden rounded-xl shadow-lg"
                    >
                      <img
                        src={image}
                        alt={`${service.title} ${imageIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="bg-[#315B40] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today for a free estimate on any of our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#D1A255] hover:bg-white hover:text-[#315B40] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              onClick={() => navigate("/#booking")}
            >
              Book Service Now
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#315B40] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              onClick={() => window.open("tel:(360) 824-2667")}
            >
              Call (360) 824-2667
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#315B40] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img
                src="/images/R2RO Logo (Final).svg"
                alt="R2RO Repair"
                className="h-12 w-auto mb-6"
              />
              <p className="text-gray-300 mb-6 max-w-md">
                Reliable home repair and appliance service for busy Pacific
                Northwest families. Licensed, insured, and trusted by hundreds
                of local homeowners.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D1A255] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="tel:(360) 824-2667"
                  className="text-gray-300 hover:text-[#D1A255] transition-colors"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => navigate("/services")}
                    className="text-gray-300 hover:text-[#D1A255] transition-colors block w-full text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/about")}
                    className="text-gray-300 hover:text-[#D1A255] transition-colors block w-full text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/testimonials")}
                    className="text-gray-300 hover:text-[#D1A255] transition-colors block w-full text-left"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/#booking")}
                    className="text-gray-300 hover:text-[#D1A255] transition-colors block w-full text-left"
                  >
                    Book Service
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-[#D1A255]" />
                  <a
                    href="tel:(360) 824-2667"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    (360) 824-2667
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-[#D1A255]" />
                  <a
                    href="mailto:info@r2rorepair.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@r2rorepair.com
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#D1A255] mt-0.5" />
                  <span className="text-gray-300">
                    NW Washington
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 R2RO Repair. All rights reserved. Licensed, bonded, and
              insured.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
