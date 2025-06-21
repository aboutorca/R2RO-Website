import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronRight,
  Wrench,
  Home,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Award,
  Users,
  Menu,
  X,
} from "lucide-react";

const R2ROWebsite = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    problem: "",
    preferredTime: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Network error");
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        problem: "",
        preferredTime: "",
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (_) {
      alert("Sorry, something went wrong. Please call us at (360) 824-2667.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#333333]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button onClick={() => (window.location.href = "/")}>
                <img
                  src="/images/R2RO Logo (Final).svg"
                  alt="R2RO Repair"
                  className="h-14 w-auto"
                />
              </button>
            </div>
            <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <button
                onClick={() => (window.location.href = "/services")}
                className="font-semibold text-lg lg:text-xl text-[#315B40] hover:text-[#D1A255] transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => (window.location.href = "/about")}
                className="font-semibold text-lg lg:text-xl text-[#315B40] hover:text-[#D1A255] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => (window.location.href = "/testimonials")}
                className="font-semibold text-lg lg:text-xl text-[#315B40] hover:text-[#D1A255] transition-colors"
              >
                Testimonials
              </button>
              <Button
                className="bg-[#8FAABF] hover:bg-[#D1A255] text-[#F5F3EE] font-semibold px-6 py-2 rounded-lg transition-colors"
                onClick={() =>
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Now
              </Button>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <Button
                className="bg-[#8FAABF] hover:bg-[#D1A255] text-[#F5F3EE] font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                onClick={() =>
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
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
                  window.location.href = "/services";
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left font-semibold text-[#315B40] hover:text-[#D1A255] transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => {
                  window.location.href = "/about";
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left font-semibold text-[#315B40] hover:text-[#D1A255] transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => {
                  window.location.href = "/testimonials";
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
      <section className="relative bg-gradient-to-br from-[#315B40] to-[#8FAABF] text-white py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                One call, one fix. Reliable home repair for busy families.
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-100">
                From squeaky doors to appliance breakdowns, R2RO keeps your PNW
                home running.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-[#D1A255] hover:bg-[#315B40] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
                  onClick={() =>
                    document
                      .getElementById("booking")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Book a Technician
                </Button>
                <button
                  className="text-[#F5F3EE] hover:text-[#D1A255] font-semibold underline underline-offset-4 transition-colors"
                  onClick={() => (window.location.href = "/services")}
                >
                  See how we can help{" "}
                  <ChevronRight className="inline w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                  alt="Happy homeowner in kitchen"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#315B40] mb-4">
              Complete Home Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional, reliable solutions for all your home maintenance
              needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-[#F5F3EE] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#315B40] rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#315B40] mb-4">
                Appliance Repair
              </h3>
              <p className="text-gray-600">
                Fast, expert repair for washers, dryers, dishwashers, and more.
                We fix it right the first time.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-[#F5F3EE] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#315B40] rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#315B40] mb-4">
                General Handyman
              </h3>
              <p className="text-gray-600">
                From leaky faucets to squeaky doors, we handle all those small
                projects that make a big difference.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-[#F5F3EE] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#315B40] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#315B40] mb-4">
                Preventive Maintenance
              </h3>
              <p className="text-gray-600">
                Regular check-ups and maintenance to prevent costly repairs and
                keep your home running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#315B40] mb-4">
              Why Families Trust R2RO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Husband-approved, wife-recommended. We understand busy families
              need reliable service they can count on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8FAABF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#315B40] mb-2">
                On-Time Guarantee
              </h3>
              <p className="text-gray-600 text-sm">
                We respect your schedule and arrive when promised
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8FAABF] rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#315B40] mb-2">
                Up-Front Pricing
              </h3>
              <p className="text-gray-600 text-sm">
                No surprises - you know the cost before we start
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8FAABF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#315B40] mb-2">
                Licensed & Insured
              </h3>
              <p className="text-gray-600 text-sm">
                Fully bonded and insured for your peace of mind
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8FAABF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#315B40] mb-2">
                5-Star Local Reviews
              </h3>
              <p className="text-gray-600 text-sm">
                Trusted by hundreds of PNW families
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#315B40] mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F3EE] p-8 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#D1A255] fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">
                &quot;R2RO showed up on time and fixed our washer in one visit.
                No runaround, no upsells - just honest, quality work.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#8FAABF] rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#315B40]">Emily K.</p>
                  <p className="text-gray-600 text-sm">Beaverton</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F5F3EE] p-8 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#D1A255] fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">
                &quot;I finally found a handyman I can trust around my kids and
                pets. Professional, clean, and respectful of our home.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#8FAABF] rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#315B40]">Sara L.</p>
                  <p className="text-gray-600 text-sm">Vancouver</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F5F3EE] p-8 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#D1A255] fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">
                &quot;Transparent pricing and no upsells. They explained
                everything clearly and left our kitchen spotless. Five
                stars!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#8FAABF] rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#315B40]">Nicole M.</p>
                  <p className="text-gray-600 text-sm">Portland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call-out Strip */}
      <section className="bg-[#D1A255] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Need same-day repair?
            </h3>
            <p className="text-xl text-white">
              Call{" "}
              <a
                href="tel:(360) 824-2667"
                className="font-bold underline hover:no-underline"
              >
                (360) 824-2667
              </a>{" "}
              — we answer 7 am - 7 pm
            </p>
          </div>
        </div>
      </section>
      {/* Booking Form */}
      <section id="booking" className="py-20 bg-[#F5F3EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#315B40] mb-4">
              Book Your Service Today
            </h2>
            <p className="text-xl text-gray-600">
              Get started with a quick form — we'll call you back as soon as possible
            </p>
          </div>

          {showSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8 text-center">
              <p className="font-semibold">
                Thank you! We'll contact you as soon as possible to schedule your
                service.
              </p>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#315B40]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#315B40] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FAABF] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#315B40] mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FAABF] focus:border-transparent"
                    placeholder="(360) 824-2667"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#315B40] mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FAABF] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold text-[#315B40] mb-2"
                >
                  Service Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FAABF] focus:border-transparent"
                  placeholder="123 Main St, Portland, OR 97201"
                />
              </div>

              <div>
                <label
                  htmlFor="problem"
                  className="block text-sm font-semibold text-[#315B40] mb-2"
                >
                  Problem Description *
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FAABF] focus:border-transparent"
                  placeholder="Please describe the issue you're experiencing..."
                />
              </div>

              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-sm font-semibold text-[#315B40] mb-2"
                >
                  Preferred Date/Time
                </label>
                <input
                  type="text"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FAABF] focus:border-transparent"
                  placeholder="e.g., Tomorrow afternoon, Next Tuesday morning"
                />
              </div>

              <Button
                type="submit" disabled={loading}
                className="w-full bg-[#D1A255] hover:bg-[#315B40] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Submit Service Request
              </Button>
            </form>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#315B40] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#315B40] hover:text-[#D1A255]">
                What appliance brands do you service?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                We service all major appliance brands including Whirlpool, GE,
                Samsung, LG, Maytag, Frigidaire, and more. Our technicians are
                trained on both newer models and older units.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#315B40] hover:text-[#D1A255]">
                Do you charge trip fees or diagnostic fees?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                No hidden fees! Our diagnostic fee is waived when you proceed
                with the repair. We provide upfront, flat-rate pricing so you
                know exactly what you'll pay before we start.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#315B40] hover:text-[#D1A255]">
                How quickly can you come out for service?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                We offer same-day and next-day service for most repairs.
                Emergency calls are available 7 days a week. We'll always give
                you a specific time window and call ahead.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#315B40] hover:text-[#D1A255]">
                What areas do you serve?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                We serve the greater Portland metro area including Beaverton,
                Lake Oswego, Tigard, Milwaukie, and parts of Southwest
                Washington including Vancouver and Camas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#315B40] hover:text-[#D1A255]">
                Do you offer warranties on your work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Yes! All repairs come with a 90-day warranty on parts and labor.
                We stand behind our work and will return at no charge if the
                same issue occurs within the warranty period.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
                className="h-18 lg:h-24 w-auto mb-6"
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
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-[#D1A255] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-[#D1A255] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/testimonials"
                    className="text-gray-300 hover:text-[#D1A255] transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="/#booking"
                    className="text-gray-300 hover:text-[#D1A255] transition-colors"
                  >
                    Book Service
                  </a>
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
                  <span className="text-gray-300">Serving NW Washington</span>
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

export default R2ROWebsite;
