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
import Image from 'next/image';

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
    description: "Algebra, Calculus, Geometry & Statistics",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop",
    category: "SCIENCE"
  },
  { 
    name: "Physics", 
    icon: Atom, 
    color: "from-blue-400 to-blue-600", 
    students: "12,350",
    description: "Mechanics, Thermodynamics & Waves",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=2074&auto=format&fit=crop",
    category: "SCIENCE"
  },
  { 
    name: "Chemistry", 
    icon: TestTube, 
    color: "from-purple-400 to-purple-600", 
    students: "11,200",
    description: "Organic, Inorganic & Physical Chemistry",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
    category: "SCIENCE"
  },
  { 
    name: "Biology", 
    icon: Dna, 
    color: "from-green-400 to-green-600", 
    students: "13,800",
    description: "Genetics, Ecology & Human Biology",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2071&auto=format&fit=crop",
    category: "SCIENCE"
  },
  { 
    name: "English", 
    icon: PenTool, 
    color: "from-orange-400 to-orange-600", 
    students: "16,900",
    description: "Literature, Grammar & Composition",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2086&auto=format&fit=crop",
    category: "LANGUAGES"
  },
  { 
    name: "Kiswahili", 
    icon: MessageCircle, 
    color: "from-red-400 to-red-600", 
    students: "14,600",
    description: "Lugha, Fasihi na Utamaduni",
    image: "https://images.unsplash.com/photo-1746601637729-dac1386ffbfa?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "LANGUAGES"
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

      {/* Modern Hero Section with Fixed Background */}
<section id="home" className="relative h-screen overflow-hidden">
  {/* Fixed Background Images Carousel */}
  {heroSlides.map((slide, index) => (
    <div 
      key={index}
      className={`fixed inset-0 bg-cover bg-center transition-opacity duration-1000 ${
        index === currentSlide ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url('${slide.image}')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    />
  ))}
  
  {/* Modern Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/40 to-emerald-900/50" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
  
  {/* Floating Elements - Minimal */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="floating-element absolute top-20 right-20 w-16 h-16 border border-emerald-400/20 rounded-full"></div>
    <div className="floating-element absolute bottom-40 left-16 w-12 h-12 bg-emerald-500/10 rounded-full blur-sm"></div>
    <div className="floating-element absolute top-1/3 right-1/4 w-8 h-8 border border-green-400/30 rounded-full"></div>
    <BookOpen className="floating-element absolute top-1/4 left-1/4 w-6 h-6 text-emerald-400/30" />
    <GraduationCap className="floating-element absolute bottom-1/3 right-1/3 w-8 h-8 text-green-400/20" />
    <Award className="floating-element absolute top-1/2 left-1/6 w-5 h-5 text-green-400/25" />
  </div>

  {/* Hero Content */}
  <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        
        {/* Left Content */}
        <div className="space-y-8 slide-left">
          <div className="space-y-4">
            <span className="inline-block text-emerald-400 text-sm sm:text-base font-semibold tracking-wide uppercase bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20 backdrop-blur-sm">
              Personal & Online Teachers for Kenyan Students
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <span className="block mb-2">Excel in School</span>
              <span className="text-emerald-400 block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                {currentSlide !== null && heroSlides[currentSlide]?.title}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
              {currentSlide !== null && heroSlides[currentSlide]?.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center gap-3">
              <Rocket className="w-5 h-5" />
              Find Your Teacher
            </button>
            
            <button className="border-2 border-white/30 text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-3">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 pt-4">
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                <Users className="w-6 h-6 text-emerald-400" />
                15K+
              </div>
              <div className="text-sm text-gray-400">Active Students</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                <Star className="w-6 h-6 text-emerald-400" />
                4.9
              </div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                <Trophy className="w-6 h-6 text-emerald-400" />
                95%
              </div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Right Visual Element */}
        <div className="relative slide-right lg:block hidden">
          <div className="relative">
            {/* Main Visual Card */}
            <div className="bg-white backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl text-black">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-black font-semibold">StudyBuddy Platform</div>
                    <div className="text-gray-500 text-sm">Your Success Partner</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-emerald-500">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Kenyan Curriculum Expert Teachers</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-500">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Personalized Learning Plans</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-500">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>24/7 Academic Support</span>
                  </div>
                </div>
                
                <div className="bg-emerald-500/20 rounded-2xl p-4 border border-emerald-400/30">
                  <div className="text-emerald-400 text-sm font-medium">Latest Achievement</div>
                  <div className="text-black font-semibold">Mathematics Grade: A</div>
                  <div className="text-black text-sm">Improved by 2 grades!</div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badges */}
            <div className="floating-badge absolute -top-4 -right-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-400" />
                  <span className="text-white text-sm font-medium">Top Performer</span>
                </div>
              </div>
            </div>

            <div className="floating-badge absolute -bottom-6 -left-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-white text-sm font-medium">95% Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-emerald-400 w-8' : 'bg-white/40 w-2'
            }`}
          />
        ))}
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
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-semibold text-sm uppercase tracking-wide mb-6">
        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
        Popular Subjects
      </div>
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
          className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
        >
          <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-green-200 relative">
            {/* Category Badge */}
            <div className="absolute top-4 right-4 z-20">
              <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${subject.color}`}>
                {subject.category}
              </div>
            </div>

            {/* Heart Icon */}
            <div className="absolute top-4 left-4 z-20">
              <div className={`w-10 h-10 bg-gradient-to-br ${subject.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Heart className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={subject.image} 
                alt={subject.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-green-600 transition-colors">
                {subject.name}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {subject.description}
              </p>
              
              {/* Stats and Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{subject.students} students</span>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-1 text-sm text-gray-600">4.8</span>
                </div>
              </div>

              {/* Action Button */}
              <button className={`w-full py-3 px-6 bg-gradient-to-r ${subject.color} text-white rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl`}>
                <span className="flex items-center justify-center">
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* View More Button */}
    <div className="text-center mt-16">
      <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        View All Subjects
      </button>
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
<section className="py-24 bg-gradient-to-r from-emerald-400 via-green-500 to-green-600 relative overflow-visible">
  {/* Decorative Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 pattern-overlay opacity-20" />
    {/* Floating Dots Pattern */}
    <div className="absolute top-20 left-10 grid grid-cols-6 gap-2 opacity-30">
      {[...Array(24)].map((_, i) => (
        <div key={i} className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
      ))}
    </div>
    {/* Floating geometric shapes */}
    <div className="absolute top-32 right-20 w-20 h-20 border-4 border-white/20 rounded-full animate-spin" style={{animationDuration: '20s'}} />
    <div className="absolute bottom-20 left-32 w-16 h-16 bg-white/10 rotate-45 animate-bounce" style={{animationDelay: '2s'}} />
  </div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image Section with Floating Badges */}
      <div className="relative order-2 lg:order-1">
        <div className="relative">
          {/* Main Image with Proper Overflow */}
          <div className="relative z-20 transform lg:-translate-y-20">
            <img 
              src="/assets/images/person1.png" 
              alt="Student with tablet" 
              className="w-full max-w-md mx-auto h-auto object-cover rounded-3xl"
            />
            
            {/* Floating Badges */}
            {/* Subscribe Badge - Top Left */}
            <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-bounce">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">Subscribe</div>
                  <div className="text-xs text-gray-600">Newsletter</div>
                </div>
              </div>
            </div>

            {/* Students Count Badge - Top Right */}
            <div className="absolute -top-6 -right-6 bg-teal-500 text-white rounded-2xl p-4 shadow-lg animate-pulse">
              <div className="text-center">
                <div className="text-xl font-bold">25K+</div>
                <div className="text-xs">Students</div>
              </div>
            </div>

            {/* Weekly Updates Badge - Bottom Left */}
            <div className="absolute -bottom-4 -left-6 bg-purple-500 text-white rounded-xl p-3 shadow-lg" style={{animation: 'float 3s ease-in-out infinite'}}>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <div>
                  <div className="text-sm font-bold">Weekly</div>
                  <div className="text-xs">Updates</div>
                </div>
              </div>
            </div>

            {/* Success Rate Badge - Bottom Right */}
            <div className="absolute -bottom-2 -right-8 bg-green-500 text-white rounded-full p-3 shadow-lg animate-spin" style={{animationDuration: '8s'}}>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto" />
                <div className="text-xs mt-1">Secure</div>
              </div>
            </div>

            {/* Notification Dots */}
            <div className="absolute top-4 right-4 flex space-x-1">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl transform scale-110 -z-10"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-white order-1 lg:order-2">
        <div className="mb-6">
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
            📧 Subscribe Our Newsletter
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Want To Stay Informed About New Courses & Study ?
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
          Get weekly study tips, new subject announcements, and exclusive content delivered to your inbox.
        </p>

        {/* Newsletter Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="flex-1 bg-white border-0 rounded-xl px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
              SUBSCRIBE NOW
            </button>
          </div>
          <div className="flex items-center mt-4 text-sm text-white/80">
            <input type="checkbox" className="mr-3 rounded" />
            <span>I agree to receive educational content and updates. No spam, unsubscribe anytime.</span>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="flex flex-wrap gap-6 text-white/80">
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

{/* Add this CSS for custom animations */}
<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @media (max-width: 768px) {
    .transform.lg\\:-translate-y-20 {
      transform: translateY(-10px);
    }
  }
  
  @media (max-width: 640px) {
    .transform.lg\\:-translate-y-20 {
      transform: translateY(0);
    }
  }
`}</style>

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

      
      {/* Enhanced Impact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-500/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="slide-left order-2 lg:order-1">
              <div className="mb-8">
                <span className="text-green-500 font-semibold uppercase tracking-wide text-sm">
                  Our Impact
                </span>
                <h2 className="impact-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-4 mb-6 leading-tight">
                  Transforming Kenyan Students' Academic Journey
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  StudyBuddy has helped thousands of Kenyan high school students excel in their studies 
                  with comprehensive learning resources, expert guidance, and proven results across all subjects.
                </p>
              </div>
      
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all fade-up">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800">15,000+</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Students Enrolled</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all fade-up" style={{animationDelay: '150ms'}}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800">85%</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Grade Improvement</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all fade-up" style={{animationDelay: '300ms'}}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800">4.9/5</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Student Rating</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all fade-up" style={{animationDelay: '450ms'}}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800">95%</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Pass Rate</div>
                </div>
              </div>
      
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                Start Your Success Story
              </button>
            </div>
      
            {/* Right Visual */}
            <div className="relative slide-right order-1 lg:order-2">
              <div className="relative max-w-md mx-auto lg:max-w-lg">
                {/* Main Image */}
                <div className="relative">
                  <Image 
                    src="/assets/images/person4.png" 
                    alt="StudyBuddy Student" 
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover rounded-2xl "
                    priority
                  />
                  
                  {/* Floating Achievement Badges */}
                  <div className="floating-badge absolute -top-2 -left-4 sm:-top-4 sm:-left-8">
                    <div className="bg-white rounded-xl p-2 sm:p-3 shadow-lg border border-green-100">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-800">Top Performer</div>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="floating-badge absolute -top-1 -right-6 sm:-top-2 sm:-right-12">
                    <div className="bg-white rounded-xl p-2 sm:p-3 shadow-lg border border-blue-100">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-800">Study Streak</div>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="floating-badge absolute -bottom-3 -right-4 sm:-bottom-4 sm:-right-8">
                    <div className="bg-white rounded-xl p-2 sm:p-3 shadow-lg border border-purple-100">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <Trophy className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-800">Achievement</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
                {/* Background decorative circles */}
                <div className="absolute top-4 right-8 sm:top-8 sm:right-16 w-12 h-12 sm:w-20 sm:h-20 bg-green-200 rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-8 sm:bottom-8 sm:left-16 w-10 h-10 sm:w-16 sm:h-16 bg-blue-200 rounded-full opacity-20"></div>
                <div className="absolute top-1/2 left-4 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 bg-purple-200 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero CTA Section with Background Image */}
<section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    }}
  />
  
  {/* Modern Dark Emerald to Black Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-emerald-700/50 to-black/70"></div>
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-emerald-800/40 to-slate-900/60"></div>
         
  <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
    <div className="max-w-4xl mx-auto">
      {/* Animated Title */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transform hover:scale-105 transition-all duration-500">
        Transform Your Academic Journey Today
      </h2>
      
      {/* Subtitle with glow effect */}
      <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
        Join over <span className="font-bold text-emerald-300">125,000 students</span> who have improved their grades with StudyBuddy
      </p>
      
      {/* CTA Button with awesome effects */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:bg-emerald-50 shadow-xl border-2 border-transparent hover:border-emerald-300 flex items-center gap-2">
          <Rocket className="w-5 h-5" />
          Get Started Now
        </button>
        
        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-emerald-600 hover:shadow-2xl backdrop-blur-sm flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Learn More
        </button>
      </div>
      
      {/* Stats row */}
      <div className="flex flex-wrap justify-center gap-8 mt-12 text-white">
        <div className="text-center">
          <div className="text-3xl font-bold text-emerald-300 flex items-center justify-center gap-2">
            <Users className="w-6 h-6" />
            15K+
          </div>
          <div className="text-sm opacity-90">Students</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-teal-300 flex items-center justify-center gap-2">
            <TrendingUp className="w-6 h-6" />
            95%
          </div>
          <div className="text-sm opacity-90">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-300 flex items-center justify-center gap-2">
            <Star className="w-6 h-6" />
            4.9
          </div>
          <div className="text-sm opacity-90">Rating</div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Floating elements for extra awesomeness */}
  <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
  <div className="absolute bottom-32 right-16 w-16 h-16 bg-teal-400/30 rounded-full blur-lg animate-bounce"></div>
  <div className="absolute top-40 right-20 w-12 h-12 bg-green-400/25 rounded-full blur-md animate-ping"></div>
</section>

      <Footer />
    </div>
  );
}