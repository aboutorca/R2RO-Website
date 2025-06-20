import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Star,
  Users,
  Quote,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Set page title on mount
  useEffect(() => {
    document.title = "Testimonials | R2RO";
  }, []);

  // Placeholder reviews - in a real implementation, these would come from Google Business API
  const placeholderReviews = [
    {
      id: 1,
      author_name: "Emily K.",
      author_url: "#",
      profile_photo_url:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      rating: 5,
      relative_time_description: "2 weeks ago",
      text: "R2RO showed up on time and fixed our washer in one visit. No runaround, no upsells - just honest, quality work. Mike was professional and explained everything clearly. Highly recommend!",
      time: Date.now() - 1209600000, // 2 weeks ago
    },
    {
      id: 2,
      author_name: "Sara L.",
      author_url: "#",
      profile_photo_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=sara",
      rating: 5,
      relative_time_description: "1 month ago",
      text: "I finally found a handyman I can trust around my kids and pets. Professional, clean, and respectful of our home. They even cleaned up better than when they arrived!",
      time: Date.now() - 2592000000, // 1 month ago
    },
    {
      id: 3,
      author_name: "Nicole M.",
      author_url: "#",
      profile_photo_url:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=nicole",
      rating: 5,
      relative_time_description: "3 weeks ago",
      text: "Transparent pricing and no upsells. They explained everything clearly and left our kitchen spotless. The repair has been working perfectly. Five stars!",
      time: Date.now() - 1814400000, // 3 weeks ago
    },
    {
      id: 4,
      author_name: "James R.",
      author_url: "#",
      profile_photo_url:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      relative_time_description: "1 week ago",
      text: "Same-day service when our dishwasher broke right before hosting family dinner. R2RO saved the day! Quick, efficient, and reasonably priced.",
      time: Date.now() - 604800000, // 1 week ago
    },
    {
      id: 5,
      author_name: "Maria G.",
      author_url: "#",
      profile_photo_url:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
      rating: 5,
      relative_time_description: "2 months ago",
      text: "David did an amazing job painting our living room. Attention to detail was incredible, and he helped us choose the perfect color. Will definitely use R2RO again.",
      time: Date.now() - 5184000000, // 2 months ago
    },
    {
      id: 6,
      author_name: "Tom W.",
      author_url: "#",
      profile_photo_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=tom",
      rating: 5,
      relative_time_description: "3 months ago",
      text: "Fixed multiple issues around our house in one visit. From leaky faucets to squeaky doors, everything works perfectly now. Great value and service.",
      time: Date.now() - 7776000000, // 3 months ago
    },
  ];

  useEffect(() => {
    // Simulate API call to Google Business Reviews
    // In a real implementation, you would integrate with Google My Business API
    const fetchReviews = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setReviews(placeholderReviews);
      setLoading(false);
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-[#D1A255] fill-current" : "text-gray-300"}`}
      />
    ));
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum: number, review: any) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "5.0";

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
                  className="h-16 lg:h-20 w-auto"
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
              <button
                onClick={() => navigate("/about")}
                className="font-semibold text-[#315B40] hover:text-[#D1A255] transition-colors"
              >
                About
              </button>
              <span className="font-semibold text-[#D1A255]">Testimonials</span>
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
                  navigate("/about");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left font-semibold text-[#315B40] hover:text-[#D1A255] transition-colors py-2"
              >
                About
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
              Customer Testimonials
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
              See what our satisfied customers have to say about our service
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex">{renderStars(5)}</div>
              <span className="text-2xl font-bold">{averageRating}</span>
              <span className="text-lg text-gray-200">
                ({reviews.length} reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Google Business Integration Notice */}
      <section className="py-8 bg-[#D1A255]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-white">
            <ExternalLink className="w-5 h-5 mr-2" />
            <span className="font-semibold">
              Reviews automatically synced from Google Business
            </span>
            <span className="ml-2 text-sm opacity-90">
              (Updates every 24 hours)
            </span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#315B40] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading latest reviews...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review: any) => (
                <div
                  key={review.id}
                  className="bg-[#F5F3EE] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#315B40]">
                        {review.author_name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {review.relative_time_description}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">{renderStars(review.rating)}</div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[#D1A255] opacity-50" />
                    <p className="text-gray-700 italic pl-4">
                      &quot;{review.text}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-20 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#315B40] mb-4">
              Review Summary
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-[#D1A255] mb-2">
                {averageRating}
              </div>
              <div className="flex justify-center mb-2">{renderStars(5)}</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-[#D1A255] mb-2">
                {reviews.length}
              </div>
              <div className="text-gray-600">Total Reviews</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-[#D1A255] mb-2">98%</div>
              <div className="text-gray-600">5-Star Reviews</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-[#D1A255] mb-2">100%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
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
              &copy; 2024 R2RO Repair. All rights reserved. Licensed, bonded,
              and insured.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;
