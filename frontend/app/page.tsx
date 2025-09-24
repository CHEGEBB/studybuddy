'use client'
import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, Users, Award, Clock, Star, ChevronRight, Play, Zap, Target,
  TrendingUp, Shield, Globe, ArrowRight, CheckCircle, Calculator,
  Atom, TestTube, Dna, PenTool, MessageCircle, Clock3, MapPin,
  Heart, Briefcase, GraduationCap, Brain, Lightbulb, Trophy,
  BarChart3, UserCheck, Smartphone, Wifi, Lock, ArrowUp, Search, Menu, X,
  ChevronDown, Quote, Calendar, Video, PhoneCall, Mail, Bookmark,
  TrendingDown, Eye, Filter, ThumbsUp, Facebook, Twitter, Instagram, Linkedin,
  Home, Send, ChevronLeft, Monitor, Users2, Sparkles, Rocket, Zap as Lightning,
  TrendingUp as Growth, Award as Certificate, Target as Focus
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/animations.scss';

// Parallax hook
const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

// Typewriter effect hook
const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
};

// Intersection Observer hook
const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// CountUp animation
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrameId;
    
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };
    
    animationFrameId = requestAnimationFrame(animateCount);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// Hero carousel data
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
    title: "Together",
    subtitle: "Connect with qualified tutors who understand the Kenyan curriculum and exams"
  },
  {
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    title: "Anytime",
    subtitle: "Flexible scheduling to fit your busy school and home life"
  },
  {
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    title: "Anywhere",
    subtitle: "Study from home, school, or anywhere with a reliable internet connection"
  }
];

// Subjects data
const subjects = [
  { 
    name: "Mathematics", 
    icon: Calculator, 
    color: "from-green-400 to-emerald-500", 
    students: "15,420",
    description: "Algebra, Calculus, Geometry & Statistics"
  },
  { 
    name: "Physics", 
    icon: Atom, 
    color: "from-blue-400 to-blue-600", 
    students: "12,350",
    description: "Mechanics, Thermodynamics & Waves"
  },
  { 
    name: "Chemistry", 
    icon: TestTube, 
    color: "from-purple-400 to-purple-600", 
    students: "11,200",
    description: "Organic, Inorganic & Physical Chemistry"
  },
  { 
    name: "Biology", 
    icon: Dna, 
    color: "from-green-400 to-green-600", 
    students: "13,800",
    description: "Genetics, Ecology & Human Biology"
  },
  { 
    name: "English", 
    icon: PenTool, 
    color: "from-orange-400 to-orange-600", 
    students: "16,900",
    description: "Literature, Grammar & Composition"
  },
  { 
    name: "Kiswahili", 
    icon: MessageCircle, 
    color: "from-red-400 to-red-600", 
    students: "14,600",
    description: "Lugha, Fasihi na Utamaduni"
  }
];

// Featured teachers with enhanced data
const featuredTeachers = [
  {
    name: "John Maina",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
    subjects: "Mathematics & Physics",
    qualification: "M.Sc. in Applied Mathematics",
    experience: "10+ years",
    students: "2,450",
    rating: "4.9",
    price: "1,200"
  },
  {
    name: "Sarah Omondi",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop",
    subjects: "Biology & Chemistry",
    qualification: "B.Ed Science Education",
    experience: "8+ years",
    students: "1,970",
    rating: "4.8",
    price: "1,100"
  },
  {
    name: "David Kipchoge",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074&auto=format&fit=crop",
    subjects: "English & Literature",
    qualification: "M.A. in English Literature",
    experience: "12+ years",
    students: "2,100",
    rating: "4.9",
    price: "1,300"
  },
  {
    name: "Aisha Hassan",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2134&auto=format&fit=crop",
    subjects: "Kiswahili & History",
    qualification: "B.Ed Languages",
    experience: "7+ years",
    students: "1,750",
    rating: "4.7",
    price: "950"
  }
];

// Enhanced testimonials
const testimonials = [
  {
    text: "StudyBuddy completely transformed my grades. My math scores went from a C- to an A in just one term thanks to the incredible teachers on this platform!",
    author: "Mercy Wanjiru",
    role: "Form 4 Student",
    school: "Alliance Girls High School",
    avatar: "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=2080&auto=format&fit=crop"
  },
  {
    text: "I was struggling with Chemistry until I found Mr. Kamau on StudyBuddy. His teaching methods made complex concepts easy to understand. Now I'm confident about my KCSE!",
    author: "Brian Ochieng",
    role: "Form 3 Student",
    school: "Starehe Boys Centre",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2069&auto=format&fit=crop"
  },
  {
    text: "The flexibility of StudyBuddy has been a game-changer for me. I can study after sports practice and my grades have never been better. Highly recommend!",
    author: "Faith Muthoni",
    role: "Form 2 Student",
    school: "Kenya High School",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2071&auto=format&fit=crop"
  },
  {
    text: "My parents were worried about my poor performance in Physics, but after just two months with StudyBuddy, I'm now the top student in my class!",
    author: "James Kamau",
    role: "Form 4 Student",
    school: "Mang'u High School",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2134&auto=format&fit=crop"
  },
  {
    text: "The Biology teacher I found on StudyBuddy makes learning so fun and interesting. I used to hate the subject, but now it's my favorite!",
    author: "Nancy Akinyi",
    role: "Form 1 Student",
    school: "Precious Blood Riruta",
    avatar: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?q=80&w=1915&auto=format&fit=crop"
  }
];

export default function StudyBuddyHomepage() {
  const scrollY = useParallax();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const typewriterText = useTypewriter("Time To Learn", 150);
  const testimonialsRef = useRef(null);
  const [currentTestimonialPair, setCurrentTestimonialPair] = useState(0);

// Auto-scroll testimonials effect
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTestimonialPair((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  }, 4000);
  return () => clearInterval(interval);
}, []);

  // Hero carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Hydration fix
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Enhanced Hero Section with Parallax */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Parallax Background Carousel */}
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } parallax-bg`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        ))}
        
        {/* Dynamic Overlay with Parallax Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/90" />
        
        {/* Floating Particles */}
        {/* <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 15 + 10}s`
              }}
            >
              {Math.random() > 0.7 ? (
                <Sparkles className="w-3 h-3 text-green-400/30" />
              ) : (
                <div className="w-1 h-1 bg-green-400/40 rounded-full" />
              )}
            </div>
          ))}
        </div> */}

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 slide-down">
              <span className="text-green-400 text-lg font-medium tracking-wide uppercase pulse-animation">
                Personal & Online Teachers for Kenyan High School Students
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="slide-left block">{typewriterText}</span>
              {currentSlide !== null && (
                <span className="text-green-400 text-3xl md:text-5xl block mt-4 slide-right">
                  {heroSlides[currentSlide]?.title}
                </span>
              )}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 fade-up-delayed max-w-4xl mx-auto">
              {heroSlides[currentSlide]?.subtitle}
            </p>
            
            <div className="bounce-gentle">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 glow-button">
                FIND YOUR TEACHER NOW
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-12 space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-green-400 w-8' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="bg-slate-900/95 backdrop-blur-lg py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="relative group">
                  <label className="block text-green-400 text-sm font-medium mb-2">Find Your</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all backdrop-blur-sm">
                    <option>Subject Teacher</option>
                    <option>Expert Tutor</option>
                    <option>Mentor</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="block text-green-400 text-sm font-medium mb-2">Select Subject</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all backdrop-blur-sm">
                    <option>Mathematics</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>Biology</option>
                    <option>English</option>
                    <option>Kiswahili</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="block text-green-400 text-sm font-medium mb-2">Location</label>
                  <input 
                    type="text" 
                    placeholder="Nairobi, Mombasa..." 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/50 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all backdrop-blur-sm"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-green-400 text-sm font-medium mb-2">Class Level</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all backdrop-blur-sm">
                    <option>Form 1</option>
                    <option>Form 2</option>
                    <option>Form 3</option>
                    <option>Form 4</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                    <Search className="w-5 h-5 inline mr-2" />
                    SEARCH NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 50000, label: "Expert Teachers", icon: Users2, color: "text-green-500" },
              { number: 125000, label: "Happy Students", icon: GraduationCap, color: "text-blue-500" },
              { number: 47, label: "Counties Covered", icon: MapPin, color: "text-purple-500" },
              { number: 98, label: "Success Rate %", icon: Trophy, color: "text-orange-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center counter-up group" style={{animationDelay: `${index * 200}ms`}}>
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${
                  stat.color === 'text-green-500' ? 'from-green-100 to-green-200' :
                  stat.color === 'text-blue-500' ? 'from-blue-100 to-blue-200' :
                  stat.color === 'text-purple-500' ? 'from-purple-100 to-purple-200' :
                  'from-orange-100 to-orange-200'
                } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-slate-800 mb-2">
                  <CountUp end={stat.number} />
                  {stat.label === "Success Rate %" ? "%" : "+"}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section with Parallax */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  alt="Students collaborating" 
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl parallax-image"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-6 rounded-2xl shadow-xl pop-in">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-full shadow-lg bounce-slow">
                  <Award className="w-8 h-8 text-green-500" />
                </div>
              </div>
            </div>

            <div className="slide-right">
              <div className="mb-6">
                <span className="text-green-500 font-semibold uppercase tracking-wide">About StudyBuddy</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 mb-6">
                  Empowering Kenyan Students for Academic Excellence
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  StudyBuddy is Kenya's premier online learning platform, connecting high school students with qualified teachers across all subjects. We're committed to making quality education accessible to every Kenyan student.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Lightning, title: "Quick Learning", desc: "Fast-track your understanding" },
                  { icon: Focus, title: "Personalized", desc: "Tailored to your needs" },
                  { icon: Certificate, title: "Certified Teachers", desc: "Qualified professionals" },
                  { icon: Growth, title: "Proven Results", desc: "Track your progress" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 fade-up" style={{animationDelay: `${index * 100}ms`}}>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Subjects Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-green-500 font-semibold mb-4 uppercase tracking-wide">Popular Subjects</p>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-slate-800">Master Your</span>{' '}
              <span className="text-green-500">Favorite Subjects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of subjects taught by Kenya's best teachers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div 
                key={index} 
                className="group cursor-pointer card-hover"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-green-200 floating-card">
                  <div className={`h-2 bg-gradient-to-r ${subject.color}`} />
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <subject.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{subject.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{subject.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <Users className="w-4 h-4 inline mr-1" />
                        {subject.students} students
                      </div>
                      <ArrowRight className="w-5 h-5 text-green-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Teachers Section */}
      <section id="teachers" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-green-500 font-semibold mb-4 uppercase tracking-wide">Meet Our Team</p>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-slate-800">Featured</span>{' '}
              <span className="text-green-500">Teachers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from Kenya's most experienced and qualified educators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTeachers.map((teacher, index) => (
              <div 
                key={index} 
                className="group teacher-card"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2 teacher-card-inner">
                  <div className="relative">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={teacher.image} 
                        alt={teacher.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg price-tag">
                      KES {teacher.price}/hr
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 rating-badge">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{teacher.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{teacher.name}</h3>
                    <p className="text-green-600 text-sm font-medium mb-3">{teacher.subjects}</p>
                    <p className="text-gray-600 text-sm mb-4">{teacher.qualification}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-500">
                        <Clock3 className="w-4 h-4 inline mr-1" />
                        {teacher.experience}
                      </div>
                      <div className="text-sm text-gray-500">
                        <Users className="w-4 h-4 inline mr-1" />
                        {teacher.students} students
                      </div>
                    </div>
                    
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                      Book Session
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-24 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 pattern-overlay" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Student with tablet" 
                  className="w-full h-80 object-cover rounded-3xl shadow-2xl parallax-image-reverse"
                />
                <div className="absolute inset-0 bg-black/20 rounded-3xl" />
                <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm rounded-2xl p-4 floating-badge">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full pulse-dot" />
                    <div className="w-3 h-3 bg-orange-400 rounded-full pulse-dot" style={{animationDelay: '0.5s'}} />
                    <div className="w-3 h-3 bg-blue-400 rounded-full pulse-dot" style={{animationDelay: '1s'}} />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white slide-right">
              <div className="mb-6">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
                  📧 Subscribe to Newsletter
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Updated About New Subjects & Study Tips
              </h2>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get weekly study tips, new subject announcements, and exclusive content delivered to your inbox.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 glass-card">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    className="flex-1 bg-white/20 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-sm"
                  />
                  <button className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-gray-50 shadow-lg pulse-button">
                    <Send className="w-5 h-5 inline mr-2" />
                    Subscribe Now
                  </button>
                </div>
                <div className="flex items-center mt-4 text-sm text-white/80">
                  <input type="checkbox" className="mr-3 rounded" />
                  <span>I agree to receive educational content and updates. No spam, unsubscribe anytime.</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Secure & Private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Weekly Updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">Join 25K+ Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-4 uppercase tracking-wide">OUR STUDENT'S REVIEWS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What Real Student's Says About Us !
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from students who have transformed their academic journey with StudyBuddy's expert teachers and personalized learning approach.
          </p>
        </div>
    
        {/* Auto-scrolling testimonial pairs */}
        <div className="relative h-96 flex items-center justify-center">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, pairIndex) => (
            <div 
              key={pairIndex}
              className={`absolute inset-0 flex items-center justify-center gap-8 transition-opacity duration-1000 ${
                pairIndex === currentTestimonialPair ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Left testimonial bubble */}
              {testimonials[pairIndex * 2] && (
                <div className="relative bubble-testimonial-left">
                  <div className="bg-gradient-to-br from-teal-400 to-teal-600 text-white p-8 rounded-full max-w-md relative bubble-shape-left">
                    <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                      <img
                        src={testimonials[pairIndex * 2].avatar}
                        alt={testimonials[pairIndex * 2].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pr-12">
                      <h4 className="text-xl font-bold mb-2">{testimonials[pairIndex * 2].author}</h4>
                      <p className="text-sm mb-4 text-teal-100">{testimonials[pairIndex * 2].role}</p>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed italic">
                        "{testimonials[pairIndex * 2].text.substring(0, 150)}..."
                      </p>
                    </div>
                  </div>
                </div>
              )}
    
              {/* Right testimonial bubble */}
              {testimonials[pairIndex * 2 + 1] && (
                <div className="relative bubble-testimonial-right">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-full max-w-md relative bubble-shape-right">
                    <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                      <img
                        src={testimonials[pairIndex * 2 + 1].avatar}
                        alt={testimonials[pairIndex * 2 + 1].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pl-12">
                      <h4 className="text-xl font-bold mb-2">{testimonials[pairIndex * 2 + 1].author}</h4>
                      <p className="text-sm mb-4 text-purple-100">{testimonials[pairIndex * 2 + 1].role}</p>
                      <div className="flex mb-4">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                        ))}
                        <Star className="w-4 h-4 text-yellow-300" />
                      </div>
                      <p className="text-sm leading-relaxed italic">
                        "{testimonials[pairIndex * 2 + 1].text.substring(0, 150)}..."
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
    
        {/* View more button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            VIEW MORE REVIEW
          </button>
        </div>
    
        {/* Testimonial indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonialPair(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonialPair ? 'bg-orange-500 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>

      {/* Success Guarantee Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-green-500 font-semibold mb-4 uppercase tracking-wide">Our Promise</p>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              100% Success <span className="text-green-500">Guarantee</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're so confident in our teaching quality that we guarantee your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Award,
                title: "Certified Excellence",
                description: "All our teachers are certified professionals with proven track records in their subjects.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Target,
                title: "Results Guaranteed",
                description: "See improvement in your grades within 30 days or get your money back.",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: Shield,
                title: "Quality Assured",
                description: "Every session is monitored and evaluated to ensure the highest teaching standards.",
                gradient: "from-purple-500 to-purple-600"
              }
            ].map((item, index) => (
              <div key={index} className="text-center guarantee-card" style={{animationDelay: `${index * 200}ms`}}>
                <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300 floating-icon`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-green-600/20 backdrop-blur-sm" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Success Journey?</h3>
              <p className="text-xl mb-8 text-green-100">Join thousands of successful students today</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg glow-button-white">
                  Find Your Teacher
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-green-600">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Network Section with Parallax */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Network Visualization */}
            <div className="relative slide-left">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 h-96 relative overflow-hidden network-card">
                {/* Animated Network Nodes */}
                <div className="absolute inset-0">
                  {[
                    { top: '20%', left: '30%', color: 'bg-green-500', size: 'w-4 h-4' },
                    { top: '15%', left: '60%', color: 'bg-blue-500', size: 'w-3 h-3' },
                    { top: '40%', left: '20%', color: 'bg-purple-500', size: 'w-5 h-5' },
                    { top: '50%', left: '70%', color: 'bg-orange-500', size: 'w-3 h-3' },
                    { top: '70%', left: '40%', color: 'bg-red-500', size: 'w-4 h-4' },
                    { top: '65%', left: '80%', color: 'bg-teal-500', size: 'w-3 h-3' },
                    { top: '30%', left: '85%', color: 'bg-pink-500', size: 'w-2 h-2' },
                    { top: '80%', left: '15%', color: 'bg-indigo-500', size: 'w-3 h-3' }
                  ].map((node, index) => (
                    <div key={index} className="absolute network-pulse" style={{ top: node.top, left: node.left, animationDelay: `${index * 0.5}s` }}>
                      <div className={`${node.size} ${node.color} rounded-full shadow-lg`} />
                      <div className={`${node.size} ${node.color} rounded-full absolute inset-0 ping-animation opacity-20`} />
                    </div>
                  ))}
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    {/* Animated connecting lines */}
                    <path
                      d="M 30% 20% Q 45% 10% 60% 15%"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="draw-line"
                    />
                    <path
                      d="M 20% 40% Q 35% 30% 70% 50%"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="draw-line"
                      style={{animationDelay: '1s'}}
                    />
                    <path
                      d="M 40% 70% Q 60% 60% 80% 65%"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="draw-line"
                      style={{animationDelay: '2s'}}
                    />
                  </svg>
                </div>
                
                <div className="relative z-10 text-center h-full flex items-center justify-center">
                  <div>
                    <Globe className="w-16 h-16 text-green-600 mx-auto mb-4 spin-slow" />
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">47 Counties</h4>
                    <p className="text-gray-600">Connected Nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Info */}
            <div className="slide-right">
              <div className="mb-6">
                <span className="text-green-500 font-semibold uppercase tracking-wide">Nationwide Coverage</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 mb-6">
                  Kenya's Largest Educational Network
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  From Turkana to Kwale, from Mandera to Busia - our network spans every corner of Kenya, 
                  connecting students with qualified teachers regardless of location.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: "50,000+", label: "Teachers", icon: Users },
                  { number: "47", label: "Counties", icon: MapPin },
                  { number: "500+", label: "Schools", icon: GraduationCap },
                  { number: "24/7", label: "Support", icon: Clock }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all fade-up" style={{animationDelay: `${index * 150}ms`}}>
                    <stat.icon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-800">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Rocket className="w-5 h-5 inline mr-2" />
                Join Our Network
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section with Transparent Overlay */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center parallax-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 pop-in">
              Transform Your Academic Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8 fade-up-delayed">
              Join over 125,000 students who have improved their grades with StudyBuddy
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl glow-button-white">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}