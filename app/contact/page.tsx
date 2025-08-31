"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Star, ArrowRight, Users, Award, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [status, setStatus] = useState<string | null>(null);


  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset after 3 seconds
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', company: '', email: '',phone: '', message: '' });
      } else {
        setStatus('Something went wrong. Try again.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  const services = [
    { 
      title: 'Custom Polymer Solutions', 
      icon: Zap,
      description: 'Tailored polymer formulations designed to meet your specific performance requirements and industry standards.'
    },
    { 
      title: 'Material Testing & Analysis', 
      icon: Award,
      description: 'Comprehensive testing services including mechanical, thermal, and chemical analysis for quality assurance.'
    },
    { 
      title: 'Product Development', 
      icon: Users,
      description: 'End-to-end product development from concept to manufacturing, leveraging our polymer expertise.'
    },
    { 
      title: 'Manufacturing Support', 
      icon: ArrowRight,
      description: 'Technical support and optimization for polymer manufacturing processes and quality control.'
    }
  ];

  const testimonials = [
    {
      text: "PolymerTech delivered exceptional results for our automotive components. Their expertise in high-performance polymers is unmatched.",
      author: "Sarah Chen",
      company: "AutoTech Industries",
      rating: 5
    },
    {
      text: "Fast turnaround, excellent quality, and outstanding technical support. They've become our go-to polymer partner.",
      author: "Michael Rodriguez",
      company: "Aerospace Dynamics",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
    <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl hover:bg-slate-700 transition-all duration-300 group cursor-pointer h-full flex flex-col">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <service.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{service.title}</h3>
      <p className="text-slate-300 leading-relaxed flex-grow text-sm sm:text-base">
        {service.description}
      </p>
      <div className="flex items-center mt-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-200">
        <span className="text-sm font-medium">Learn more</span>
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      
      {/* Hero Section */}
      <section className="pt-10 sm:pt-25 pb-12 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent block sm:inline"> Polymer Project?</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Connect with our expert team today. We specialize in high-performance polymer solutions 
              that drive innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a href="tel:+1-555-0123" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Call Now: (555) 012-3456</span>
              </a>
              <a href="#contact-form" className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Send Message</span>
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16 px-4">
            <div className="text-center bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">24hr</div>
              <div className="text-gray-600 text-sm sm:text-base">Response Time</div>
            </div>
            <div className="text-center bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm sm:text-base">Projects Delivered</div>
            </div>
            <div className="text-center bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">15yr</div>
              <div className="text-gray-600 text-sm sm:text-base">Industry Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-base sm:text-lg text-gray-600">Multiple ways to reach our expert team</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Phone */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Speak directly with our experts</p>
              <a href="tel:+1-555-0123" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 text-sm sm:text-base">
                (555) 012-3456
              </a>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">Mon-Fri 8AM-6PM EST</p>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 sm:p-8 rounded-2xl text-center hover:from-orange-100 hover:to-orange-200 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Get detailed project quotes</p>
              <a href="mailto:info@polymertech.com" className="text-orange-600 font-semibold hover:text-orange-800 transition-colors duration-200 text-sm sm:text-base break-all">
                info@polymertech.com
              </a>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">24-hour response guarantee</p>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-8 rounded-2xl text-center hover:from-slate-100 hover:to-slate-200 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Schedule a facility tour</p>
              <p className="text-slate-600 font-semibold text-sm sm:text-base">
                1234 Innovation Drive<br />
                Tech Valley, CA 94025
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">By appointment only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 bg-slate-900" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-base sm:text-lg text-slate-300">Comprehensive polymer solutions for your industry</p>
          </div>

          {isMobile ? (
            /* Mobile Slider */
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {services.map((service, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <ServiceCard service={service} index={index} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-opacity-30 transition-all duration-200"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-opacity-30 transition-all duration-200"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-orange-400 w-6' : 'bg-slate-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Desktop Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-20 bg-white" id="contact-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Your Project Today</h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">Tell us about your polymer needs and we'll provide a detailed consultation</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm sm:text-base"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm sm:text-base"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm sm:text-base"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={isMobile ? 4 : 6}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50 focus:bg-white text-sm sm:text-base"
                    placeholder="Please describe your project requirements, including polymer type, application, performance specifications, and any technical constraints..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base px-4">
                  Thank you for reaching out. Our polymer experts will review your requirements and respond within 24 hours.
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  For urgent matters, please call us directly at (555) 012-3456
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-base sm:text-lg text-gray-600">See what our clients say about working with us</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Additional Info */}
      <section className="py-12 sm:py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready When You Are</h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 text-blue-100">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base"><strong className="text-white">Business Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex items-start space-x-3 text-blue-100">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base"><strong className="text-white">Emergency Support:</strong> 24/7 for critical projects</span>
                </div>
                <div className="flex items-start space-x-3 text-blue-100">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base"><strong className="text-white">Response Time:</strong> Within 24 hours guaranteed</span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white border-opacity-20">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Why Choose PolymerTech?</h3>
              <ul className="space-y-2 sm:space-y-3 text-blue-100">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">ISO 9001:2015 certified quality management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">15+ years of polymer engineering expertise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Custom solutions for automotive, aerospace, and medical industries</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">On-time delivery and budget transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">PT</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">PolymerTech</span>
            </div>
            <p className="text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base px-4">
              Advanced Polymer Solutions • Engineering Excellence • Trusted Partnership
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-slate-300 text-sm sm:text-base">
              <span className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>(555) 012-3456</span>
              </span>
              <span className="flex items-center space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="break-all">info@polymertech.com</span>
              </span>
              <span className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Tech Valley, CA</span>
              </span>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700">
              <p className="text-xs sm:text-sm text-slate-500">
                © 2025 PolymerTech. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;