'use client';

import React, { useEffect, useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageSquare,
  Clock,
  Calendar,
  CheckCircle
} from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/contact.scss';

const ContactPage = () => {
  // Animation for elements when they come into view
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
    
    // Show success message
    const form = e.target as HTMLFormElement;
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
      successMessage.classList.remove('hidden');
      setTimeout(() => {
        successMessage.classList.add('hidden');
        form.reset();
      }, 3000);
    }
  };

  return (
    <div className="contact-page min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 overflow-hidden py-24">
        <div className="hero-particles"></div>
        
        {/* Floating Shapes */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase">
                Get In Touch
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">We're Here To</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                Help You Succeed
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Have questions about our programs? Looking for academic support?
              Our team is dedicated to helping Kenyan high school students achieve their educational goals.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <a href="#contact-form" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
                Send Message <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="tel:+254712345678" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center">
                <Phone className="mr-2" size={20} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 -mt-32">
            {/* Location Card */}
            <div className="contact-info-card animate-on-scroll">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Location</h3>
                <p className="text-gray-600 mb-2">ABC Plaza, 5th Floor</p>
                <p className="text-gray-600 mb-2">Ngong Road, Nairobi</p>
                <p className="text-gray-600">Kenya</p>
              </div>
            </div>
            
            {/* Call Card */}
            <div className="contact-info-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <Phone size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Now</h3>
                <p className="text-gray-600 mb-2">+254 712 345 678</p>
                <p className="text-gray-600 mb-2">+254 734 567 890</p>
                <p className="text-gray-600">Mon-Fri, 8:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="contact-info-card animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <Mail size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Email Now</h3>
                <p className="text-gray-600 mb-2">info@studybuddy.co.ke</p>
                <p className="text-gray-600 mb-2">support@studybuddy.co.ke</p>
                <p className="text-gray-600">24/7 Email Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 relative" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="animate-on-scroll order-2 lg:order-1">
              <div className="bg-white p-2 rounded-3xl shadow-xl overflow-hidden h-full">
                <div className="rounded-2xl overflow-hidden h-[450px] relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8175265377395!2d36.81360931440825!3d-1.2899559990596218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d46914ee2b%3A0xe7ad9b02b2513612!2sNgong%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1632669598765!5m2!1sen!2ske" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    className="w-full h-full"
                  ></iframe>
                  
                  {/* Map Overlay with Pulsing Pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="map-pin">
                      <div className="pin-outer"></div>
                      <div className="pin-inner"></div>
                    </div>
                  </div>
                </div>
                
                {/* Operating Hours */}
                <div className="mt-6 p-6 bg-emerald-50 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Clock className="mr-2 text-emerald-500" size={20} />
                    Operating Hours
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 font-medium">Monday - Friday</p>
                      <p className="text-gray-800">8:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Saturday</p>
                      <p className="text-gray-800">9:00 AM - 3:00 PM</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Sunday</p>
                      <p className="text-gray-800">Closed</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Public Holidays</p>
                      <p className="text-gray-800">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-on-scroll order-1 lg:order-2">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Need More Help?
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Fill out the form below and our team will get back to you within 24 hours.
                    We're here to answer any questions you have about our programs.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div id="success-message" className="hidden bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center">
                    <CheckCircle className="mr-2" size={20} />
                    <span>Your message has been sent successfully!</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        className="placeholder-gray-500 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        className=" placeholder-gray-500 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="placeholder-gray-500 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="placeholder-gray-500 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      className="text-gray-500 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Curriculum Questions">Curriculum Questions</option>
                      <option value="Payment Issues">Payment Issues</option>
                      <option value="Partnership Opportunities">Partnership Opportunities</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      className="placeholder-gray-500 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center"
                    >
                      Submit Now <Send className="ml-2" size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Common Questions From Our Students
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about our programs and services.
              If you don't see your question here, feel free to contact us.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How can I access StudyBuddy learning materials?",
                  answer: "StudyBuddy learning materials are available through our online platform. After registration, you'll have immediate access to all resources based on your subscription plan. Our materials can be accessed on any device with an internet connection."
                },
                {
                  question: "Do you offer tutoring services for specific subjects?",
                  answer: "Yes, we offer personalized tutoring services for all high school subjects. Our tutors are experienced educators who specialize in the Kenyan curriculum. You can book one-on-one sessions or join group tutoring based on your needs."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept various payment methods including M-Pesa, credit/debit cards, and bank transfers. We also offer flexible payment plans to make our services accessible to more students."
                },
                {
                  question: "Can StudyBuddy help with KCSE exam preparation?",
                  answer: "Absolutely! We specialize in KCSE exam preparation with comprehensive study materials, past papers with detailed solutions, and exam strategies. Our intensive revision programs have helped thousands of students improve their KCSE performance."
                },
                {
                  question: "Do you offer scholarships or discounts?",
                  answer: "Yes, we offer scholarships to exceptional students who demonstrate financial need. We also provide group discounts for schools and occasional promotional discounts. Contact our support team for more information on current offers."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="faq-item bg-gray-50 rounded-2xl p-6 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                      <div className="transition-transform duration-300 transform group-open:rotate-180">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </summary>
                    <div className="mt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="#contact-form" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300">
                <span>Have more questions? Contact us</span>
                <ArrowRight className="ml-2" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
        <div className="social-particles"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-white mb-6">
              Connect With Us
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Follow us on social media for updates, educational content, and success stories
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 animate-on-scroll">
            {[
              { icon: Facebook, name: "Facebook", color: "bg-blue-600", handle: "@StudyBuddyKenya" },
              { icon: Twitter, name: "Twitter", color: "bg-sky-500", handle: "@StudyBuddy_KE" },
              { icon: Instagram, name: "Instagram", color: "bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700", handle: "@studybuddy.kenya" },
              { icon: Linkedin, name: "LinkedIn", color: "bg-blue-700", handle: "StudyBuddy Kenya" }
            ].map((social, index) => (
              <div 
                key={social.name} 
                className="social-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <a 
                  href="#" 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl w-64"
                >
                  <div className={`w-16 h-16 ${social.color} rounded-full flex items-center justify-center mb-4`}>
                    <social.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{social.name}</h3>
                  <p className="text-gray-300">{social.handle}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-green-600 relative overflow-hidden">
        <div className="cta-particles"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 animate-on-scroll">
              <div className="flex items-start mb-6">
                <div className="hidden md:block">
                  <Image 
                    src="https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80" 
                    alt="Student smiling"
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-white"
                  />
                </div>
                <div className="md:ml-6">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Apply Now & Get Your Best Skills Certificate!
                  </h2>
                  <p className="text-emerald-100 text-lg leading-relaxed">
                    Join thousands of students who have already transformed their academic journey. 
                    Our comprehensive programs are designed to help you excel in your studies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 animate-on-scroll">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#" 
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                >
                  Get Started Now <ArrowRight className="ml-2" size={20} />
                </a>
                <a 
                  href="tel:+254712345678" 
                  className="bg-emerald-700 text-white hover:bg-emerald-800 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                >
                  <Phone className="mr-2" size={20} />
                  Call For Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
            <div className="newsletter-bg"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8 animate-on-scroll">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Stay updated with the latest educational resources, exam tips, and special offers.
                </p>
              </div>
              
              <form className="flex flex-col md:flex-row gap-4 animate-on-scroll">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="placeholder-gray-500 flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
              
              <div className="mt-6 text-center text-gray-500 text-sm animate-on-scroll">
                By subscribing, you agree to our <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a> 
                and consent to receive updates from StudyBuddy.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;