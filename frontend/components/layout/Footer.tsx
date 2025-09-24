import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, MessageCircle, Send, CheckCircle, BookOpen } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-br bg-slate-900/95 to-slate-900 text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
     
      
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & About */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360, scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <BookOpen size={24} className="text-white" />
              </motion.div>
              <span className="font-bold text-3xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">StudyBuddy</span>
            </div>
            <p className="text-blue-200 mb-8 max-w-md leading-relaxed">
              Empowering high school students across Kenya with comprehensive learning resources. Join thousands of students achieving academic excellence.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: MessageCircle, href: "#", label: "WhatsApp" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-xl text-white mb-6 relative">
              Quick Links
              <motion.div 
                className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Subjects", href: "/subjects" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <li key={link.name}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={link.href} className="text-blue-200 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Subjects */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-xl text-white mb-6 relative">
              Subjects
              <motion.div 
                className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Mathematics", href: "/subjects/mathematics" },
                { name: "Physics", href: "/subjects/physics" },
                { name: "Chemistry", href: "/subjects/chemistry" },
                { name: "Biology", href: "/subjects/biology" }
              ].map((subject, index) => (
                <li key={subject.name}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={subject.href} className="text-blue-200 hover:text-white transition-colors">
                      {subject.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
              <li>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/subjects" className="text-teal-300 hover:text-white transition-colors font-medium">
                    View All Subjects →
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info & Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-xl text-white mb-6 relative">
              Contact Us
              <motion.div 
                className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h4>
            <ul className="space-y-4 mb-8">
              {[
                { icon: MapPin, text: "Nairobi, Kenya" },
                { icon: Mail, text: "support@studybuddy.co.ke" },
                { icon: Phone, text: "+254 700 123 456" },
                { icon: Clock, text: "Mon-Fri: 8AM - 8PM" }
              ].map((contact, index) => (
                <li key={contact.text} className="flex items-start space-x-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <contact.icon size={18} className="text-teal-300 mt-1" />
                  </motion.div>
                  <span className="text-blue-200 text-sm">{contact.text}</span>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h5 className="font-medium text-white mb-3">Stay Updated</h5>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                  required
                />
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <CheckCircle size={16} />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Subscribe</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Horizontal Line */}
        <motion.div 
          className="border-t border-blue-800 my-10"
          variants={itemVariants}
        />
        
        {/* Copyright */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          variants={itemVariants}
        >
          <p className="text-blue-300">
            © {currentYear} StudyBuddy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Terms of Service", href: "/terms" },
              { name: "FAQ", href: "/faq" }
            ].map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={link.href} className="text-blue-300 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;