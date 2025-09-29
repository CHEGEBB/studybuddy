// /subjects/physics/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Atom, 
  Zap, 
  Compass, 
  Lightbulb, 
  Thermometer, 
  ArrowRight, 
  PlayCircle,
  Users,
  Clock,
  Award,
  Waves,
  GraduationCap,
  BookOpen,
  Calculator,
  BarChart3,
  Star,
  CheckCircle,
  FlaskConical
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/physics.scss';

const PhysicsPage = () => {
  const statsRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Counter animation for stats
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter');
          
          counters.forEach(counter => {
            const targetText = counter.textContent || '0';
            const target = parseInt(targetText.replace(/[^0-9]/g, ''));
            const duration = 2000;
            const step = Math.ceil(target / (duration / 16));
            let current = 0;
            
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                counter.textContent = targetText.replace(/[0-9]+/, target.toString());
                clearInterval(timer);
              } else {
                counter.textContent = targetText.replace(/[0-9]+/, current.toString());
              }
            }, 16);
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Add fade-in animation to elements when they come into view
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
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

  // Create atom animation effect for hero section
  useEffect(() => {
    if (heroRef.current) {
      const createElectronOrbit = () => {
        const orbit = document.createElement('div');
        orbit.className = 'electron-orbit';
        
        const electron = document.createElement('div');
        electron.className = 'electron';
        
        orbit.appendChild(electron);
        return orbit;
      };
      
      const atomCore = heroRef.current.querySelector('.atom-core');
      if (atomCore) {
        for (let i = 0; i < 3; i++) {
          atomCore.appendChild(createElectronOrbit());
        }
      }
    }
  }, []);

  // Course modules data
  const physicsModules = [
    {
      title: "Mechanics & Motion",
      icon: Compass,
      description: "Master the laws of motion, forces, and energy transformations.",
      topics: ["Newton's Laws", "Energy Conservation", "Momentum", "Circular Motion"]
    },
    {
      title: "Electricity & Magnetism",
      icon: Zap,
      description: "Understand electric circuits, fields, and electromagnetic principles.",
      topics: ["Electric Fields", "Circuit Analysis", "Electromagnetism", "AC/DC Systems"]
    },
    {
      title: "Waves & Oscillations",
      icon: Waves,
      description: "Explore wave behavior, sound, light, and periodic phenomena.",
      topics: ["Wave Properties", "Sound Physics", "Light & Optics", "Standing Waves"]
    },
    {
      title: "Thermodynamics",
      icon: Thermometer,
      description: "Study heat transfer, temperature, and thermodynamic principles.",
      topics: ["Heat Transfer", "Thermal Expansion", "Gas Laws", "Thermodynamic Cycles"]
    },
    {
      title: "Modern Physics",
      icon: Atom,
      description: "Discover quantum phenomena, relativity, and nuclear physics.",
      topics: ["Quantum Physics", "Special Relativity", "Nuclear Physics", "Particle Physics"]
    },
    {
      title: "Practical Applications",
      icon: FlaskConical,
      description: "Apply physics principles to solve real-world engineering problems.",
      topics: ["Engineering Physics", "Electronics", "Optics Technology", "Energy Systems"]
    }
  ];

  // Success stats
  const stats = [
    { 
      icon: Award, 
      number: "93%", 
      label: "Students Improved Grades", 
      color: "from-emerald-400 to-green-500" 
    },
    { 
      icon: Calculator, 
      number: "96%", 
      label: "Problem-Solving Success", 
      color: "from-green-500 to-emerald-600" 
    },
    { 
      icon: Users, 
      number: "7200+", 
      label: "Physics Students Enrolled", 
      color: "from-emerald-500 to-green-600" 
    },
    { 
      icon: GraduationCap, 
      number: "91%", 
      label: "KCSE Success Rate", 
      color: "from-green-400 to-emerald-500" 
    }
  ];

  // Study features
  const studyFeatures = [
    {
      icon: Calculator,
      title: "Problem-Solving Framework",
      description: "Master our proven 5-step approach to solve any physics problem systematically."
    },
    {
      icon: BookOpen,
      title: "KCSE-Focused Content",
      description: "Complete coverage of the physics syllabus with exam-oriented resources."
    },
    {
      icon: Lightbulb,
      title: "Conceptual Visualizations",
      description: "Interactive simulations and animations that bring abstract physics concepts to life."
    },
    {
      icon: GraduationCap,
      title: "Exam Preparation",
      description: "Specialized materials for KCSE physics papers with practice questions and solutions."
    }
  ];

  return (
    <div className="physics-page min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="hero-section relative h-[80vh] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-cover bg-center" 
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"}}></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/90 via-emerald-900/90 to-transparent"></div>
        
        {/* Floating particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <div className="mb-6 animate-slide-down">
              <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full glow-effect">
                <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase animate-pulse-slow">
                  Physics
                </span>
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up">
              Unlock the <span className="text-emerald-400 animate-glow">Laws</span> of the Universe
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in-up animation-delay-300">
              Master physics through systematic problem-solving, conceptual understanding, and practical applications designed for KCSE success.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
              <Link href="/signup" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 flex items-center bounce-hover">
                Start Learning <ArrowRight className="ml-2 animate-bounce-x" size={20} />
              </Link>
              <Link href="#features" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-emerald-500/20 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-500 flex items-center glass-hover">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
        
        {/* Enhanced Atom Animation */}
        <div className="absolute right-[10%] top-1/2 transform -translate-y-1/2 hidden lg:block animate-rotate-slow">
          <div className="atom-container">
            <div className="atom-core">
              <div className="nucleus animate-pulse-glow"></div>
              {/* Electron orbits will be added by JavaScript */}
            </div>
          </div>
        </div>
        
        {/* Physics equations floating */}
        <div className="absolute top-1/4 right-1/4 text-emerald-300/30 text-4xl font-bold physics-equation animate-float-slow">
          E = mc²
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-green-300/30 text-4xl font-bold physics-equation animate-float-medium">
          F = ma
        </div>
        <div className="absolute top-2/3 right-1/5 text-emerald-400/30 text-4xl font-bold physics-equation animate-float-fast">
          V = IR
        </div>
        
        {/* Energy waves */}
        <div className="energy-wave wave-1"></div>
        <div className="energy-wave wave-2"></div>
        <div className="energy-wave wave-3"></div>
      </section>
      
      {/* Features Overview */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-zoom-in">
              Why Our Physics Program Excels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Our approach combines problem-solving strategies, visual learning, and exam preparation to ensure your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll feature-card-hover"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl flex items-center justify-center mb-5 icon-bounce">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Solving Methodology */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-in-left">
              <div className="image-container">
                <Image 
                  src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Physics problem solving"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
                />
                <div className="floating-icons">
                  <div className="floating-icon icon-1"><Calculator size={24} /></div>
                  <div className="floating-icon icon-2"><Atom size={20} /></div>
                  <div className="floating-icon icon-3"><Zap size={22} /></div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll slide-in-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 animate-text-wave">
                Master Our Problem-Solving Approach
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our systematic 5-step framework transforms complex physics problems into clear, manageable solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 step-item animate-slide-in" style={{animationDelay: '100ms'}}>
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                    <CheckCircle className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Understand the Problem</h3>
                    <p className="text-gray-600">Identify given variables, unknown quantities, and relevant principles.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 step-item animate-slide-in" style={{animationDelay: '200ms'}}>
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                    <CheckCircle className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Develop a Strategy</h3>
                    <p className="text-gray-600">Select appropriate equations and plan your solution approach.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 step-item animate-slide-in" style={{animationDelay: '300ms'}}>
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                    <CheckCircle className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Execute Mathematically</h3>
                    <p className="text-gray-600">Apply equations correctly and solve for the unknown variable.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 step-item animate-slide-in" style={{animationDelay: '400ms'}}>
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                    <CheckCircle className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Evaluate Your Answer</h3>
                    <p className="text-gray-600">Check units, magnitude, and if the solution makes physical sense.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/problem-solving" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium hover:scale-105 transition-all duration-300 arrow-hover">
                  Learn our problem-solving method <ArrowRight className="ml-2 animate-bounce-x" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-zoom-in">
              Comprehensive KCSE Physics Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured learning modules cover the entire physics syllabus with targeted lessons, problem sets, and visual aids.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {physicsModules.map((module, index) => (
              <div
                key={module.title}
                className="animate-on-scroll module-card-special"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col card-glow-hover">
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl flex items-center justify-center icon-spin-hover">
                      <module.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{module.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-700 mb-3">Key Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, i) => (
                        <span key={i} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm hover:bg-emerald-100 transition-colors duration-300 topic-badge">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KCSE Exam Preparation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 animate-text-wave">
                Targeted KCSE Physics Exam Preparation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our specialized preparation resources are designed to give you the confidence and skills to excel in all physics papers.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-5 border border-emerald-100 prep-card hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                      <BookOpen className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Theory Mastery</h3>
                      <p className="text-gray-600">Comprehensive coverage of theoretical concepts with clear explanations and illustrations.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-5 border border-emerald-100 prep-card hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                      <Calculator className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Calculation Practice</h3>
                      <p className="text-gray-600">Structured problem sets with step-by-step solutions to build calculation confidence.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-5 border border-emerald-100 prep-card hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                      <BarChart3 className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Past Paper Analysis</h3>
                      <p className="text-gray-600">Detailed walkthroughs of previous KCSE physics papers with examiner insights.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/exam-prep" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-500 hover:shadow-xl hover:from-emerald-600 hover:to-green-700 hover:scale-105 bounce-hover">
                  Prepare for KCSE Physics <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            
            <div className="animate-on-scroll slide-in-right">
              <div className="grid grid-cols-2 gap-6 image-gallery">
                <div className="rounded-2xl overflow-hidden shadow-lg image-hover-zoom">
                  <Image 
                    src="https://images.unsplash.com/photo-1576319155264-99536e0be1ee?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Physics exam preparation"
                    width={300}
                    height={700}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-10 image-hover-zoom">
                  <Image 
                    src="https://images.unsplash.com/photo-1699275303936-302a8d351a80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Physics calculations"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg col-span-2 image-hover-zoom">
                  <Image 
                    src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Physics study group"
                    width={600}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats Section */}
      <section 
        ref={statsRef}
        className="py-20 bg-gradient-to-b from-emerald-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-zoom-in">
              Our Physics Success Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of students who have transformed their understanding of physics and achieved excellence in their exams.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="animate-on-scroll stat-card"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="bg-white rounded-2xl p-6 shadow-md border border-emerald-100 text-center h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-1 stat-glow">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 icon-pulse`}>
                    <stat.icon size={28} className="text-white" />
                  </div>
                  
                  <div className="counter text-4xl font-bold text-gray-800 mb-2 animate-count-up">
                    {stat.number}
                  </div>
                  
                  <div className="text-emerald-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-zoom-in">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who have improved their physics understanding and exam performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The problem-solving framework changed everything for me. I can now approach any physics question with confidence.",
                name: "James K.",
                school: "Form 4 Student, Nairobi"
              },
              {
                quote: "I used to struggle with calculations, but the step-by-step approach helped me master even the most complex problems.",
                name: "Maria W.",
                school: "Form 4 Graduate, Mombasa"
              },
              {
                quote: "As a physics teacher, I recommend this program to all my students. The conceptual explanations are exceptional.",
                name: "Mr. Omondi",
                school: "Physics Teacher, Kisumu"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="animate-on-scroll testimonial-card"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all duration-500 border border-emerald-100 h-full flex flex-col testimonial-hover">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-emerald-400 star-twinkle" size={20} fill="#10b981" style={{animationDelay: `${i * 100}ms`}} />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-6 flex-grow quote-text">&ldquo;{testimonial.quote}&rdquo;</p>
                  
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-emerald-600 text-sm">{testimonial.school}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Physics Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join StudyBuddy and transform your understanding of physics with our systematic learning approach.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center">
                Get Started Now <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/demo" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300">
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PhysicsPage;