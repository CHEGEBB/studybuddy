'use client'
import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, Users, Award, Clock, Star, ChevronRight, Play, Zap, Target,
  TrendingUp, Shield, Globe, ArrowRight, CheckCircle, Calculator,
  Atom, TestTube, Dna, PenTool, MessageCircle, Clock3, MapPin,
  Heart, Briefcase, GraduationCap, Brain, Lightbulb, Trophy,
  BarChart3, UserCheck, Smartphone, Wifi, Lock, ArrowUp, Search, Menu, X
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Hero content with engaging images
const heroContent = [
  {
    title: "Learn Smarter, Not Harder",
    subtitle: "Personalized learning paths that adapt to your needs and learning style",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    accent: "from-emerald-800 to-teal-900"
  },
  {
    title: "Excel in Every Subject",
    subtitle: "Master all KCSE subjects with expert guidance and comprehensive resources",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop",
    accent: "from-teal-800 to-emerald-900"
  },
  {
    title: "Achieve Your Academic Goals",
    subtitle: "Join thousands of students improving their grades and unlocking their potential",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop",
    accent: "from-emerald-900 to-teal-800"
  },
  {
    title: "Learn Anytime, Anywhere",
    subtitle: "Access quality education on any device, with online and offline capabilities",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    accent: "from-teal-900 to-emerald-800"
  }
];

const subjects = [
  { name: "Mathematics", icon: Calculator, color: "from-emerald-400 to-teal-500", students: "15,420", gradient: "bg-gradient-to-br from-emerald-100 to-teal-100", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" },
  { name: "Physics", icon: Atom, color: "from-teal-400 to-emerald-500", students: "12,350", gradient: "bg-gradient-to-br from-teal-100 to-emerald-100", image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=2574&auto=format&fit=crop" },
  { name: "Chemistry", icon: TestTube, color: "from-emerald-400 to-teal-500", students: "11,200", gradient: "bg-gradient-to-br from-emerald-100 to-teal-100", image: "https://images.unsplash.com/photo-1616463541459-e7975a66c5c2?q=80&w=2070&auto=format&fit=crop" },
  { name: "Biology", icon: Dna, color: "from-teal-400 to-emerald-500", students: "13,800", gradient: "bg-gradient-to-br from-teal-100 to-emerald-100", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2069&auto=format&fit=crop" },
  { name: "English", icon: PenTool, color: "from-emerald-400 to-teal-500", students: "16,900", gradient: "bg-gradient-to-br from-emerald-100 to-teal-100", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop" },
  { name: "Kiswahili", icon: MessageCircle, color: "from-teal-400 to-emerald-500", students: "14,600", gradient: "bg-gradient-to-br from-teal-100 to-emerald-100", image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop" }
];

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

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

export default function StudyBuddyHomepage() {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background particles - using CSS animations instead of framer motion */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-teal-200/30 rounded-full particle-animation"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {heroContent.map((hero, index) => (
          <div
            key={hero.title}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentHero === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${hero.image})`,
                filter: 'brightness(0.3)'
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${hero.accent} mix-blend-multiply opacity-60`} />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-5xl">
            {heroContent.map((hero, index) => (
              <div
                key={hero.title}
                className={`transition-all duration-1000 ${
                  currentHero === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute'
                }`}
                style={{ pointerEvents: currentHero === index ? 'auto' : 'none' }}
              >
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight hero-title">
                  {hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                  {hero.subtitle}
                </p>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-teal-500/25 hover:bg-teal-600 transition-all duration-300 flex items-center space-x-2">
                <span>Start Learning Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Hero dots indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {heroContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHero(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentHero === index ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 text-white scroll-indicator">
          <ArrowUp className="w-6 h-6 rotate-180" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-emerald-50/50" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 50000, label: "Active Students", icon: Users },
              { number: 98, label: "Success Rate %", icon: TrendingUp },
              { number: 150, label: "Expert Teachers", icon: UserCheck },
              { number: 1000, label: "Study Hours Daily", icon: Clock }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:shadow-xl group-hover:shadow-teal-500/25 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                  <CountUp end={stat.number} />
                  {stat.label.includes('%') && '%'}
                  {stat.label.includes('Students') && '+'}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section with Images */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-teal-800 to-emerald-800 bg-clip-text text-transparent mb-6">
              Master All KCSE Subjects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of all high school subjects with interactive content and expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div 
                key={subject.name}
                className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 relative h-80"
              >
                <img 
                  src={subject.image} 
                  alt={subject.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-80"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                      <subject.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{subject.name}</h3>
                      <p className="text-emerald-200 mb-3">{subject.students} students</p>
                      
                      <div className="flex items-center text-white mt-4 group-hover:opacity-100 opacity-0 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Link href={`/subjects/${subject.name.toLowerCase()}`} className="flex items-center space-x-2">
                          <span>Explore subject</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="group bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>Explore All Subjects</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-teal-800 to-emerald-800 bg-clip-text text-transparent mb-6">
              Why StudyBuddy Changes Everything
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of learning with cutting-edge technology and proven educational methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                AI-Powered Learning That Adapts to You
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our intelligent system learns how you learn, focusing on your unique needs and adjusting to help you master concepts at your own pace.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Brain, text: "Personalized study paths tailored to your learning style" },
                  { icon: Target, text: "Identifies and strengthens your weak areas" },
                  { icon: Trophy, text: "Adaptive challenges that grow with your abilities" }
                ].map((feature) => (
                  <div key={feature.text} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium text-lg">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-teal-500/20 transition-all duration-300 flex items-center space-x-2">
                <span>Try AI Learning</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1599358614658-73caea394ff7?q=80&w=2069&auto=format&fit=crop" 
                  alt="AI Learning Platform" 
                  className="w-full h-auto object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-60"></div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Your Progress</h4>
                      <div className="w-full bg-white/30 rounded-full h-2 mt-2">
                        <div className="bg-gradient-to-r from-teal-400 to-emerald-500 h-2 rounded-full w-[85%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-emerald-500 text-white p-4 rounded-2xl shadow-lg rotate-6">
                <Star className="w-8 h-8" />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2532&auto=format&fit=crop" 
                  alt="Expert Teachers" 
                  className="w-full h-auto object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-60"></div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <UserCheck className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="text-white font-medium">Live Session</span>
                    </div>
                    <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-teal-500 text-white p-4 rounded-2xl shadow-lg -rotate-6">
                <Trophy className="w-8 h-8" />
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Learn from Kenya's Top Educators
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our teachers bring years of classroom and examination experience, ensuring you learn from the very best in every subject.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Award, text: "KCSE examination experts and curriculum specialists" },
                  { icon: Clock, text: "Live sessions and personalized feedback" },
                  { icon: Shield, text: "Proven teaching methods with guaranteed results" }
                ].map((feature) => (
                  <div key={feature.text} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium text-lg">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-teal-500/20 transition-all duration-300 flex items-center space-x-2">
                <span>Meet Our Teachers</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Images */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-salte-700 to-slate-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Success Stories That Inspire
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Real students, real results, real transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jane Wambui",
                role: "Form 4 Student, Nairobi",
                image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
                quote: "StudyBuddy transformed my understanding of Mathematics completely. From failing grades to scoring A- in my latest exam. The personalized learning approach made all the difference!",
                grade: "C to A-",
                subject: "Mathematics"
              },
              {
                name: "Daniel Omondi",
                role: "Form 3 Student, Mombasa",
                image: "https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
                quote: "Physics used to be my biggest challenge, but StudyBuddy's interactive simulations and step-by-step explanations changed everything. Now I actually enjoy solving complex problems!",
                grade: "D+ to B+",
                subject: "Physics"
              },
              {
                name: "Grace Akinyi",
                role: "Form 4 Student, Kisumu",
                image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
                quote: "As a parent, I'm amazed by my daughter's transformation. Her confidence has soared and she's now helping her classmates with subjects she once struggled with.",
                grade: "Overall improvement",
                subject: "All Subjects"
              }
            ].map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="group hover:translate-y-[-8px] transition-all duration-500"
              >
                <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl group-hover:bg-white/15 transition-all duration-500 overflow-hidden h-full">
                  <div className="relative z-10">
                    <div className="text-teal-300 mb-6">
                      <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                      </svg>
                    </div>

                    <p className="text-white text-lg leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-3 border-white/20 group-hover:border-white/40 transition-all duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full border-2 border-white flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-white font-bold text-lg">{testimonial.name}</p>
                        <p className="text-teal-200 text-sm mb-2">{testimonial.role}</p>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 bg-emerald-400/20 px-3 py-1 rounded-full">
                            <TrendingUp className="w-4 h-4 text-emerald-300" />
                            <span className="text-emerald-300 text-sm font-semibold">{testimonial.grade}</span>
                          </div>
                          <span className="text-teal-200 text-sm">{testimonial.subject}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-teal-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-emerald-200/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-teal-800 to-emerald-800 bg-clip-text text-transparent mb-6">
              Affordable Excellence for Every Student
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your academic journey. All plans include access to every subject.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "1,500",
                period: "month",
                description: "Perfect for getting started",
                features: [
                  "Access to all 10 subjects",
                  "Basic progress tracking",
                  "Community support",
                  "Mobile app access",
                  "Study materials download"
                ],
                color: "from-teal-500 to-emerald-500",
                popular: false
              },
              {
                name: "Premium",
                price: "2,500",
                period: "month",
                description: "Most popular choice",
                features: [
                  "Everything in Basic",
                  "AI-powered learning paths",
                  "Live teacher sessions (2/month)",
                  "Advanced analytics",
                  "Priority support",
                  "Offline content access"
                ],
                color: "from-emerald-500 to-teal-500",
                popular: true
              },
              {
                name: "Pro",
                price: "3,500",
                period: "month",
                description: "For serious achievers",
                features: [
                  "Everything in Premium",
                  "Unlimited live sessions",
                  "Personal tutor assignment",
                  "Mock exam simulations",
                  "Performance guarantees",
                  "University prep guidance"
                ],
                color: "from-teal-500 to-emerald-500",
                popular: false
              }
            ].map((plan, index) => (
              <div 
                key={plan.name}
                className="group hover:translate-y-[-8px] transition-all duration-500"
              >
                <div className={`relative h-full p-8 rounded-3xl bg-white border-2 ${
                  plan.popular 
                    ? 'border-emerald-200 shadow-2xl shadow-emerald-500/20' 
                    : 'border-gray-100 shadow-xl'
                } group-hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">KES {plan.price}</span>
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Choose {plan.name}
                    </button>
                  </div>

                  {/* Background decoration */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              <Shield className="inline w-5 h-5 mr-2 text-emerald-500" />
              30-day money-back guarantee • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-800 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl cta-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl cta-pulse-delay" />
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl font-bold text-white mb-8">
            Your Academic Success Starts Today
          </h2>

          <p className="text-2xl text-teal-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join over 50,000 Kenyan students who have transformed their grades and unlocked their potential with StudyBuddy. Don't let another term pass by—start your journey to academic excellence now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="group bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center space-x-3">
              <span>Start Free Trial</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center space-x-3">
              <Play className="w-6 h-6" />
              <span>Watch Success Stories</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center space-x-8 text-teal-200">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>KNEC Approved</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-teal-300" />
              <span>50,000+ Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <span>98% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}