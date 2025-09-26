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
      color: "from-indigo-400 to-blue-500" 
    },
    { 
      icon: Calculator, 
      number: "96%", 
      label: "Problem-Solving Success", 
      color: "from-blue-500 to-indigo-600" 
    },
    { 
      icon: Users, 
      number: "7200+", 
      label: "Physics Students Enrolled", 
      color: "from-indigo-500 to-blue-600" 
    },
    { 
      icon: GraduationCap, 
      number: "91%", 
      label: "KCSE Success Rate", 
      color: "from-blue-400 to-indigo-500" 
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
        
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-green-900/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <span className="inline-block bg-gradient-to-r from-indigo-400 to-blue-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase">
                  Physics
                </span>
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Unlock the <span className="text-indigo-400">Laws</span> of the Universe
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Master physics through systematic problem-solving, conceptual understanding, and practical applications designed for KCSE success.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/signup" className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center">
                Start Learning <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="#features" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
        
        {/* Atom Animation */}
        <div className="absolute right-[10%] top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="atom-container">
            <div className="atom-core">
              <div className="nucleus"></div>
              {/* Electron orbits will be added by JavaScript */}
            </div>
          </div>
        </div>
        
        {/* Physics equations floating */}
        <div className="absolute top-1/4 right-1/4 text-white/20 text-4xl font-bold physics-equation animate-float-slow">
          E = mc²
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-white/20 text-4xl font-bold physics-equation animate-float-medium">
          F = ma
        </div>
        <div className="absolute top-2/3 right-1/5 text-white/20 text-4xl font-bold physics-equation animate-float-fast">
          V = IR
        </div>
      </section>
      
      {/* Features Overview */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Our Physics Program Excels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach combines problem-solving strategies, visual learning, and exam preparation to ensure your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center mb-5">
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
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Image 
                src="/assets/images/physics-problem.jpg"
                alt="Physics problem solving"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Master Our Problem-Solving Approach
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our systematic 5-step framework transforms complex physics problems into clear, manageable solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Understand the Problem</h3>
                    <p className="text-gray-600">Identify given variables, unknown quantities, and relevant principles.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Develop a Strategy</h3>
                    <p className="text-gray-600">Select appropriate equations and plan your solution approach.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Execute Mathematically</h3>
                    <p className="text-gray-600">Apply equations correctly and solve for the unknown variable.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Evaluate Your Answer</h3>
                    <p className="text-gray-600">Check units, magnitude, and if the solution makes physical sense.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/problem-solving" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                  Learn our problem-solving method <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
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
                className="animate-on-scroll"
              >
                <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <module.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{module.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-700 mb-3">Key Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, i) => (
                        <span key={i} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
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
            <div className="animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Targeted KCSE Physics Exam Preparation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our specialized preparation resources are designed to give you the confidence and skills to excel in all physics papers.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-white rounded-xl p-5 border border-indigo-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-2 rounded-lg mt-1">
                      <BookOpen className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Theory Mastery</h3>
                      <p className="text-gray-600">Comprehensive coverage of theoretical concepts with clear explanations and illustrations.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-white rounded-xl p-5 border border-indigo-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-2 rounded-lg mt-1">
                      <Calculator className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Calculation Practice</h3>
                      <p className="text-gray-600">Structured problem sets with step-by-step solutions to build calculation confidence.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-white rounded-xl p-5 border border-indigo-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-2 rounded-lg mt-1">
                      <BarChart3 className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Past Paper Analysis</h3>
                      <p className="text-gray-600">Detailed walkthroughs of previous KCSE physics papers with examiner insights.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/exam-prep" className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:from-indigo-600 hover:to-blue-700">
                  Prepare for KCSE Physics <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src="/assets/images/physics1.jpg"
                    alt="Physics exam preparation"
                    width={300}
                    height={700}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-10">
                  <Image 
                    src="/assets/images/physics2.jpg"
                    alt="Physics calculations"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg col-span-2">
                  <Image 
                    src="/assets/images/physics3.jpg"
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
        className="py-20 bg-gradient-to-b from-indigo-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
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
                className="animate-on-scroll"
              >
                <div className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100 text-center h-full">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                    <stat.icon size={28} className="text-white" />
                  </div>
                  
                  <div className="counter text-4xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="text-indigo-700 font-medium">
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
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
                className="animate-on-scroll"
              >
                <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-100 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400" size={20} fill="#FACC15" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                  
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-indigo-600 text-sm">{testimonial.school}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Physics Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join StudyBuddy and transform your understanding of physics with our systematic learning approach.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center">
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