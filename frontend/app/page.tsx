'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, Award, Target, Play, ArrowRight, Check, Star, Globe, Clock, ChevronDown, Calculator, Atom, FlaskConical, Dna, PenTool, Languages } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Hero images and content
const heroSlides = [
  {
    title: "Master Every Subject",
    subtitle: "Access comprehensive resources for all 10 high school subjects",
    description: "Join thousands of Kenyan students achieving academic excellence",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    buttonText: "Start Learning",
    buttonColor: "from-blue-600 to-teal-500"
  },
  {
    title: "Excel in Your Studies",
    subtitle: "Interactive lessons, quizzes, and personalized learning paths",
    description: "Study smarter with AI-powered recommendations",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    buttonText: "View Courses",
    buttonColor: "from-purple-600 to-pink-500"
  },
  {
    title: "Learn at Your Pace",
    subtitle: "Study anytime, anywhere with our flexible learning platform",
    description: "24/7 access to all materials and expert support",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    buttonText: "Get Started",
    buttonColor: "from-green-600 to-blue-500"
  },
  {
    title: "Achieve Your Dreams",
    subtitle: "Comprehensive KCSE preparation with proven results",
    description: "95% of our students improve their grades significantly",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    buttonText: "View Results",
    buttonColor: "from-orange-600 to-red-500"
  },
  {
    title: "Expert Teachers",
    subtitle: "Learn from qualified Kenyan educators who understand your curriculum",
    description: "Experienced teachers with proven track records",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    buttonText: "Meet Teachers",
    buttonColor: "from-indigo-600 to-purple-500"
  }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const subjects = [
    { name: "Mathematics", icon: Calculator, color: "from-blue-500 to-cyan-500", students: "2,400+" },
    { name: "Physics", icon: Atom, color: "from-purple-500 to-pink-500", students: "1,800+" },
    { name: "Chemistry", icon: FlaskConical, color: "from-green-500 to-teal-500", students: "2,100+" },
    { name: "Biology", icon: Dna, color: "from-orange-500 to-red-500", students: "1,900+" },
    { name: "English", icon: PenTool, color: "from-indigo-500 to-purple-500", students: "2,200+" },
    { name: "Kiswahili", icon: Languages, color: "from-pink-500 to-rose-500", students: "1,600+" }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Complete coverage of all KCSE subjects with detailed explanations and examples",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Users,
      title: "Expert Teachers",
      description: "Learn from qualified Kenyan educators with years of teaching experience",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Adaptive learning paths that adjust to your pace and learning style",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "95% of our students report significant grade improvements within 3 months",
      image: "https://images.unsplash.com/photo-1607703703674-df96af81dffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const stats = [
    { value: "15,000+", label: "Active Students", icon: Users },
    { value: "500+", label: "Video Lessons", icon: Play },
    { value: "95%", label: "Success Rate", icon: Award },
    { value: "24/7", label: "Support", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={heroSlides[currentSlide].image}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl mb-4 text-blue-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>

              <motion.p 
                className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.button 
                  className={`px-8 py-4 bg-gradient-to-r ${heroSlides[currentSlide].buttonColor} text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {heroSlides[currentSlide].buttonText}
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button 
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-full hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} />
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-8 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why StudyBuddy Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology combines expert teaching with modern technology to deliver exceptional learning outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white mb-4">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                  <motion.button 
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <ArrowRight size={18} />
                  </motion.button>
                </div>
                
                <motion.div 
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-black/40" />
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Students background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Master Every Subject</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive resources for all KCSE subjects, taught by experienced Kenyan educators
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${subject.color} rounded-2xl text-white mb-6`}>
                  <subject.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{subject.name}</h3>
                <p className="text-blue-100 mb-4">{subject.students} students enrolled</p>
                <motion.button 
                  className="flex items-center gap-2 text-white font-semibold hover:text-blue-200 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Start Learning <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.button 
              className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Subjects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who transformed their academic performance with StudyBuddy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Grace Wanjiku",
                role: "Form 4 Student, Nairobi",
                image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
                quote: "StudyBuddy helped me improve from C+ to A- in Mathematics. The step-by-step explanations made complex topics so much easier to understand.",
                grade: "A-",
                subject: "Mathematics"
              },
              {
                name: "Kevin Ochieng",
                role: "Form 4 Student, Kisumu",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
                quote: "Physics was my weakest subject, but now it's one of my strongest. The interactive lessons and practice tests are incredibly effective.",
                grade: "A",
                subject: "Physics"
              },
              {
                name: "Mercy Akinyi",
                role: "Form 3 Student, Mombasa",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
                quote: "The 24/7 support and personalized learning path helped me catch up with my classmates. My confidence has grown tremendously!",
                grade: "B+",
                subject: "Chemistry"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{testimonial.subject}</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    Grade: {testimonial.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Excel?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join over 15,000 Kenyan students who are already achieving their academic dreams with StudyBuddy
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="px-12 py-4 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button 
                className="px-12 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Pricing
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Check size={20} className="text-green-300" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check size={20} className="text-green-300" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default HomePage;