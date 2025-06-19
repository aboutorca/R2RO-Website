import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Award,
  Users,
  Clock,
  Shield,
  Heart,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Mike Rodriguez",
      role: "Founder & Lead Technician",
      experience: "15+ years",
      specialty: "Appliance Repair & Electrical",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    },
    {
      name: "Sarah Chen",
      role: "Operations Manager",
      experience: "8+ years",
      specialty: "Customer Service & Scheduling",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      name: "David Thompson",
      role: "Senior Handyman",
      experience: "12+ years",
      specialty: "General Repairs & Painting",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Family First",
      description:
        "We understand the importance of a safe, comfortable home for your family. Every repair is done with your loved ones in mind.",
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Trust & Integrity",
      description:
        "Honest pricing, reliable service, and transparent communication. We build relationships, not just fix problems.",
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Quality Craftsmanship",
      description:
        "We take pride in our work and stand behind every repair with comprehensive warranties and follow-up service.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Community Focus",
      description:
        "As a local Pacific Northwest business, we're invested in our community and committed to supporting our neighbors.",
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
              <button
                onClick={() => navigate("/services")}
                className="font-semibold text-[#315B40] hover:text-[#D1A255] transition-colors"
              >
                Services
              </button>
              <span className="font-semibold text-[#D1A255]">About</span>
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
                  navigate("/services");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left font-semibold text-[#315B40] hover:text-[#D1A255] transition-colors py-2"
              >
                Services
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
              About R2RO Repair
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto">
              Your trusted local home repair experts, serving Pacific Northwest
              families since 2015
            </p>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#315B40] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                R2RO Repair was founded in 2024 by Arturo Montoya, a passionate
                problem-solver who spent years fixing appliances in his own home
                before deciding to turn that skill into a calling. After
                completing professional appliance technician certification, he
                launched the family business with one simple belief: everyone
                deserves reliable repair service.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as uncertainty about local demand quickly became a
                clear mission. More and more homeowners were choosing to repair
                rather than replace their appliances, seeking quality service
                they could trust.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve families throughout NW Washington,
                helping them save money and extend the life of their appliances
                with honest pricing, skilled craftsmanship, and the personal
                touch that only a family business can provide.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80"
                alt="R2RO team at work"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#D1A255] text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Happy Families</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="py-20 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#315B40] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from the smallest repair
              to the largest project
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#315B40] rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#315B40] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#315B40] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals who care about your home as much as you
              do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center bg-[#F5F3EE] p-8 rounded-2xl shadow-sm"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-[#8FAABF]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#315B40] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#D1A255] font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Experience:</strong> {member.experience}
                </p>
                <p className="text-gray-600">
                  <strong>Specialty:</strong> {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us Stats */}
      <section className="py-20 bg-[#315B40] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Families Choose R2RO
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#D1A255] mb-2">98%</div>
              <div className="text-lg">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#D1A255] mb-2">500+</div>
              <div className="text-lg">Families Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#D1A255] mb-2">24hr</div>
              <div className="text-lg">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#D1A255] mb-2">9yrs</div>
              <div className="text-lg">Serving the Community</div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#315B40] mb-6">
            Ready to Experience the R2RO Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of satisfied families who trust us with their home
            repairs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#D1A255] hover:bg-[#315B40] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              onClick={() => navigate("/#booking")}
            >
              Book Your Service
            </Button>
            <Button
              variant="outline"
              className="border-[#315B40] text-[#315B40] hover:bg-[#315B40] hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              onClick={() => navigate("/testimonials")}
            >
              Read Our Reviews
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
                  className="text-gray-300 hover:text-white transition-colors"
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
                    Serving Portland Metro
                    <br />& SW Washington
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 R2RO Repair. All rights reserved. Licensed, bonded, and
              insured.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
