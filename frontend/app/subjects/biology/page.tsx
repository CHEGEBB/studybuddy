// /subjects/biology/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Dna, 
  Leaf, 
  Microscope, 
  HeartPulse, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  PlayCircle,
  Users,
  Clock,
  Award,
  Sprout,
  Tablet,
  GraduationCap,
  BookOpen,
  FileText,
  Star,
  BookText,
  TreePine,
  BarChart4,
  Fish,
  Flower2,
  FlaskRound,
  FlaskConical
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/biology.scss';

const BiologyPage = () => {
  const statsRef = useRef<HTMLElement>(null);
  const cellDivisionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroElement = heroRef.current;
        const heroBackground = heroElement.querySelector('.hero-background') as HTMLElement;
        if (heroBackground) {
          heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter animation for stats
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter');
          
          const animateCounter = (counter: Element) => {
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
          };

          counters.forEach(animateCounter);
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

  // Cell division animation
  useEffect(() => {
    if (cellDivisionRef.current) {
      const cells = cellDivisionRef.current.querySelectorAll('.cell-stage');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              cellDivisionRef.current?.classList.add('animate-division');
            }
          });
        },
        { threshold: 0.5 }
      );
      
      observer.observe(cellDivisionRef.current);
      
      return () => observer.disconnect();
    }
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

  // Course modules data
  const biologyModules = [
    {
      title: "Cell Biology",
      icon: FlaskRound,
      description: "Explore the fundamental unit of life, cell structure, functions, and cellular processes.",
      duration: "4 weeks",
      topics: ["Cell Structure", "Cell Membrane", "Cellular Respiration", "Cell Division"]
    },
    {
      title: "Human Physiology",
      icon: HeartPulse,
      description: "Understand the complex systems of the human body and how they maintain homeostasis.",
      duration: "5 weeks",
      topics: ["Circulatory System", "Respiratory System", "Digestive System", "Nervous System"]
    },
    {
      title: "Genetics & Inheritance",
      icon: Dna,
      description: "Master the principles of heredity, genetic material, and patterns of inheritance.",
      duration: "4 weeks",
      topics: ["DNA Structure", "Mendelian Genetics", "Genetic Disorders", "Gene Expression"]
    },
    {
      title: "Plant Biology",
      icon: Sprout,
      description: "Discover plant structure, nutrition, reproduction, and responses to the environment.",
      duration: "3 weeks",
      topics: ["Plant Tissues", "Photosynthesis", "Plant Hormones", "Plant Reproduction"]
    },
    {
      title: "Ecology & Environment",
      icon: TreePine,
      description: "Examine the relationships between organisms and their environment in natural ecosystems.",
      duration: "3 weeks",
      topics: ["Ecosystems", "Food Chains", "Environmental Conservation", "Biodiversity"]
    },
    {
      title: "Evolution & Biodiversity",
      icon: Fish,
      description: "Study the origin of species, evolutionary processes, and the diversity of life on Earth.",
      duration: "3 weeks",
      topics: ["Natural Selection", "Speciation", "Adaptation", "Classification"]
    }
  ];

  // Success stats
  const stats = [
    { 
      icon: Award, 
      number: "94%", 
      label: "Students Improved Grades", 
      color: "from-emerald-400 to-green-500" 
    },
    { 
      icon: Microscope, 
      number: "100%", 
      label: "Practical Skills Coverage", 
      color: "from-green-500 to-emerald-600" 
    },
    { 
      icon: Users, 
      number: "8500+", 
      label: "Biology Students Enrolled", 
      color: "from-emerald-500 to-green-600" 
    },
    { 
      icon: GraduationCap, 
      number: "95%", 
      label: "KCSE Success Rate", 
      color: "from-green-400 to-emerald-500" 
    }
  ];

  // Reviews data
  const reviews = [
    {
      quote: "Biology has always been challenging for me, but the interactive diagrams and videos on StudyBuddy made concepts like cell division and photosynthesis so much clearer!",
      name: "Esther Mwangi",
      relation: "Form 4 Student, Nairobi",
      image: "/assets/images/testimonial1.jpg"
    },
    {
      quote: "My son used to struggle with understanding ecological concepts. The visual ecosystem models and real-world Kenyan examples helped him connect theory with practical knowledge.",
      name: "Mr. Otieno",
      relation: "Parent of Form 3 Student",
      image: "/assets/images/testimonial2.jpg"
    },
    {
      quote: "As a biology teacher, I recommend StudyBuddy to all my students. The dissection simulations and 3D anatomy models are excellent alternatives to physical specimens.",
      name: "Ms. Wanjiku",
      relation: "Biology Teacher, Mombasa",
      image: "/assets/images/testimonial3.jpg"
    }
  ];

  // Practical skills
  const practicalSkills = [
    {
      title: "Microscopy Techniques",
      icon: Microscope,
      description: "Master microscope handling, specimen preparation, and cellular observation skills."
    },
    {
      title: "Dissection Procedures",
      icon: FlaskConical,
      description: "Learn proper techniques for examining biological specimens and identifying organs."
    },
    {
      title: "Ecological Sampling",
      icon: Leaf,
      description: "Develop field techniques for ecosystem analysis and biodiversity assessment."
    },
    {
      title: "Experimental Design",
      icon: FileText,
      description: "Create proper biological investigations with controls and variables."
    }
  ];

  return (
    <div className="biology-page min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with DNA Animation */}
      <section 
        ref={heroRef}
        className="hero-section relative h-[90vh] flex items-center overflow-hidden"
      >
        <div className="hero-background absolute inset-0 bg-gradient-to-r from-emerald-900 via-green-800 to-transparent z-10"></div>
        
        <div className="absolute inset-0 bg-cover bg-center opacity-60" 
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"}}></div>
        
        <div className="absolute right-0 top-0 h-full w-1/2 dna-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-on-scroll">
              <div className="mb-6 flex items-center">
                <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                  <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase">
                    Biology
                  </span>
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight hero-title">
                <span className="text-white">Explore the</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  Science of Life
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Discover the fascinating world of living organisms through interactive 
                visualizations, virtual dissections, and expert guidance that brings 
                biological concepts to life.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="cta-button bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
                  Discover Biology <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="secondary-button bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center">
                  <PlayCircle className="mr-2" size={20} />
                  Watch Cell Division
                </button>
              </div>
              
              {/* Floating stats */}
              <div className="mt-12 hidden lg:flex space-x-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center space-x-3">
                  <Dna className="text-emerald-400" size={24} />
                  <span className="text-white font-semibold">DNA Analysis</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center space-x-3">
                  <Microscope className="text-emerald-400" size={24} />
                  <span className="text-white font-semibold">Virtual Microscopy</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center space-x-3">
                  <HeartPulse className="text-emerald-400" size={24} />
                  <span className="text-white font-semibold">Human Physiology</span>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="biology-visual-container">
                <div className="dna-model">
                  <div className="dna-strand">
                    <div className="dna-helix helix-1"></div>
                    <div className="dna-helix helix-2"></div>
                    <div className="dna-rung rung-1"></div>
                    <div className="dna-rung rung-2"></div>
                    <div className="dna-rung rung-3"></div>
                    <div className="dna-rung rung-4"></div>
                    <div className="dna-rung rung-5"></div>
                    <div className="dna-rung rung-6"></div>
                    <div className="dna-rung rung-7"></div>
                    <div className="dna-rung rung-8"></div>
                  </div>
                </div>
                
                <div className="floating-cell cell-1">
                  <div className="cell-membrane"></div>
                  <div className="cell-nucleus"></div>
                </div>
                
                <div className="floating-cell cell-2">
                  <div className="cell-membrane"></div>
                  <div className="cell-nucleus"></div>
                </div>
                
                <div className="plant-growth">
                  <div className="plant-stem"></div>
                  <div className="plant-leaf leaf-1"></div>
                  <div className="plant-leaf leaf-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>
      
      {/* Features Overview */}
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Microscope,
                title: "Cellular Biology Explorer",
                description: "Visualize cell structures, processes, and observe microscopic details in 3D."
              },
              {
                icon: HeartPulse,
                title: "Human Systems Navigator",
                description: "Interactive anatomical models of all major body systems and functions."
              },
              {
                icon: TreePine,
                title: "Ecosystem Discovery",
                description: "Explore diverse habitats, food chains, and environmental interactions."
              },
              {
                icon: Dna,
                title: "Genetics & Inheritance Lab",
                description: "Visualize DNA structure and experiment with genetic inheritance patterns."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="feature-card bg-white rounded-3xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cell Division Animation Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div ref={cellDivisionRef} className="cell-division-container bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                {/* Background patterns */}
                <div className="absolute inset-0 z-0">
                  <div className="biology-patterns opacity-20"></div>
                </div>
                
                <div className="cell-division-animation relative z-10">
                  <div className="cell-header flex items-center mb-6">
                    <FlaskRound size={24} className="text-emerald-400 mr-3" />
                    <h3 className="text-white text-xl font-bold">Cell Division Process</h3>
                  </div>
                  
                  <div className="mitosis-stages">
                    <div className="cell-stage interphase">
                      <div className="stage-label">Interphase</div>
                      <div className="cell-visual">
                        <div className="cell-membrane"></div>
                        <div className="cell-nucleus">
                          <div className="chromatin"></div>
                        </div>
                      </div>
                      <div className="stage-description text-gray-400">DNA replication occurs</div>
                    </div>
                    
                    <div className="cell-stage prophase">
                      <div className="stage-label">Prophase</div>
                      <div className="cell-visual">
                        <div className="cell-membrane"></div>
                        <div className="cell-nucleus nucleus-dissolving">
                          <div className="chromosome chromosome-1"></div>
                          <div className="chromosome chromosome-2"></div>
                          <div className="chromosome chromosome-3"></div>
                          <div className="chromosome chromosome-4"></div>
                        </div>
                      </div>
                      <div className="stage-description text-gray-400">Chromosomes condense</div>
                    </div>
                    
                    <div className="cell-stage metaphase">
                      <div className="stage-label">Metaphase</div>
                      <div className="cell-visual">
                        <div className="cell-membrane"></div>
                        <div className="spindle-fibers"></div>
                        <div className="chromosome-aligned chromosome-1"></div>
                        <div className="chromosome-aligned chromosome-2"></div>
                        <div className="chromosome-aligned chromosome-3"></div>
                        <div className="chromosome-aligned chromosome-4"></div>
                      </div>
                      <div className="stage-description text-gray-400">Chromosomes align at equator</div>
                    </div>
                    
                    <div className="cell-stage anaphase">
                      <div className="stage-label">Anaphase</div>
                      <div className="cell-visual">
                        <div className="cell-membrane"></div>
                        <div className="spindle-fibers"></div>
                        <div className="chromosome-separating chromosome-1a"></div>
                        <div className="chromosome-separating chromosome-1b"></div>
                        <div className="chromosome-separating chromosome-2a"></div>
                        <div className="chromosome-separating chromosome-2b"></div>
                        <div className="chromosome-separating chromosome-3a"></div>
                        <div className="chromosome-separating chromosome-3b"></div>
                        <div className="chromosome-separating chromosome-4a"></div>
                        <div className="chromosome-separating chromosome-4b"></div>
                      </div>
                      <div className="stage-description text-gray-400">Chromosomes separate to poles</div>
                    </div>
                    
                    <div className="cell-stage telophase">
                      <div className="stage-label">Telophase</div>
                      <div className="cell-visual">
                        <div className="cell-membrane dividing"></div>
                        <div className="new-nucleus nucleus-1">
                          <div className="chromatin"></div>
                        </div>
                        <div className="new-nucleus nucleus-2">
                          <div className="chromatin"></div>
                        </div>
                      </div>
                      <div className="stage-description text-gray-400">Nuclear membranes reform</div>
                    </div>
                    
                    <div className="cell-stage cytokinesis">
                      <div className="stage-label">Cytokinesis</div>
                      <div className="cell-visual">
                        <div className="daughter-cell cell-1">
                          <div className="cell-membrane"></div>
                          <div className="cell-nucleus">
                            <div className="chromatin"></div>
                          </div>
                        </div>
                        <div className="daughter-cell cell-2">
                          <div className="cell-membrane"></div>
                          <div className="cell-nucleus">
                            <div className="chromatin"></div>
                          </div>
                        </div>
                      </div>
                      <div className="stage-description text-gray-400">Cell division completes</div>
                    </div>
                  </div>
                  
                  <div className="cell-controls mt-6 flex justify-between">
                    <button className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors flex items-center">
                      <PlayCircle size={18} className="mr-2 text-emerald-400" /> Play Animation
                    </button>
                    <button className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors flex items-center">
                      Restart <ArrowRight size={18} className="ml-2 text-emerald-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
                Life Processes
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Witness Biological Processes in Action
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our dynamic visualizations bring cellular processes, physiological systems, and ecological interactions to life, helping you understand the complex mechanisms that sustain living organisms.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: FlaskConical,
                    title: "Cell Division Visualized",
                    description: "Watch mitosis and meiosis unfold with detailed animations of each phase and process."
                  },
                  {
                    icon: HeartPulse,
                    title: "Physiological Systems",
                    description: "Explore functioning circulatory, respiratory, and digestive systems in interactive 3D."
                  },
                  {
                    icon: Sprout,
                    title: "Plant Processes",
                    description: "Visualize photosynthesis, transpiration, and growth at the cellular and organism level."
                  },
                  {
                    icon: Dna,
                    title: "Genetic Mechanisms",
                    description: "See DNA replication, transcription, and translation as they occur in living cells."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 feature-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl p-3 flex-shrink-0">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:from-emerald-600 hover:to-green-700">
                  Explore All Processes <PlayCircle className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-emerald-50 to-transparent opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Biology Curriculum
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Comprehensive Learning Modules
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Our biology curriculum covers all key areas of the KCSE syllabus, organized into focused modules with practical applications and interactive learning experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biologyModules.map((module, index) => (
              <div
                key={module.title}
                className="module-card group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full flex flex-col relative overflow-hidden">
                  {/* Module background pattern */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-emerald-50 opacity-50 z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <module.icon size={28} className="text-white" />
                      </div>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {module.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{module.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{module.description}</p>
                    
                    <div className="mt-auto">
                      <h4 className="font-semibold text-gray-700 mb-3">Key Topics:</h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="text-emerald-500 mr-2 flex-shrink-0 mt-1" size={16} />
                            <span className="text-gray-600">{topic}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <button className="w-full flex items-center justify-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-300">
                          Explore Module <ArrowRight className="ml-2" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Link href="/courses" className="inline-flex items-center bg-white border border-emerald-200 hover:border-emerald-300 text-emerald-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
              View All Biology Modules <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Human Body Systems Explorer */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Human Anatomy
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Human Body Systems Explorer
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Dive deep into the complex and fascinating systems that make up the human body with our interactive 3D models and detailed explanations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1 animate-on-scroll order-2 lg:order-1">
              <div className="space-y-8">
                {[
                  {
                    icon: HeartPulse,
                    title: "Circulatory System",
                    description: "Explore the heart, blood vessels, and blood flow through interactive animations that show oxygen and nutrient transport."
                  },
                  {
                    icon: Leaf,
                    title: "Respiratory System",
                    description: "Visualize breathing mechanics, gas exchange in lungs, and the journey of oxygen from inhalation to cellular respiration."
                  },
                  {
                    icon: Brain,
                    title: "Nervous System",
                    description: "Discover brain structure, nerve impulse transmission, and how the nervous system coordinates body functions."
                  },
                  {
                    icon: Flower2,
                    title: "Digestive System",
                    description: "Follow food's journey through the digestive tract and understand nutrient absorption and waste elimination processes."
                  }
                ].map((system, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-emerald-50 to-gray-50 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl p-3 flex-shrink-0">
                        <system.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{system.title}</h3>
                        <p className="text-gray-600">{system.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 animate-on-scroll order-1 lg:order-2">
              <div className="human-body-explorer bg-emerald-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute inset-0 z-0">
                  <div className="biology-patterns opacity-20"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-white text-2xl font-bold">Interactive Human Body</h3>
                    <div className="flex space-x-2">
                      <button className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm hover:bg-white/20 transition-colors">
                        Circulatory
                      </button>
                      <button className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm hover:bg-white/20 transition-colors">
                        Nervous
                      </button>
                      <button className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm hover:bg-white/20 transition-colors">
                        Muscular
                      </button>
                    </div>
                  </div>
                  
                  <div className="human-body-container flex justify-center">
                    <div className="human-body-model relative">
                      <Image 
                        src="/assets/images/humanbody.png" 
                        alt="Human body system model"
                        width={500}
                        height={700}
                        className="object-contain max-h-[500px]"
                      />
                      
                      <div className="system-highlight heart-highlight absolute">
                        <div className="highlight-dot"></div>
                        <div className="highlight-label">Heart</div>
                      </div>
                      
                      <div className="system-highlight brain-highlight absolute">
                        <div className="highlight-dot"></div>
                        <div className="highlight-label">Brain</div>
                      </div>
                      
                      <div className="system-highlight lung-highlight absolute">
                        <div className="highlight-dot"></div>
                        <div className="highlight-label">Lungs</div>
                      </div>
                      
                      <div className="system-highlight stomach-highlight absolute">
                        <div className="highlight-dot"></div>
                        <div className="highlight-label">Stomach</div>
                      </div>
                      
                      <div className="system-highlight liver-highlight absolute">
                        <div className="highlight-dot"></div>
                        <div className="highlight-label">Liver</div>
                      </div>
                      
                      <div className="system-highlight kidney-highlight absolute">
                        <div className="highlight-dot"></div>
                        <div className="highlight-label">Kidney</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="system-info mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <h4 className="text-emerald-300 font-bold mb-2">Circulatory System</h4>
                    <p className="text-gray-300 text-sm">
                      The heart pumps oxygen-rich blood through arteries to body tissues and receives oxygen-poor blood through veins from the body. This continuous circulation delivers nutrients and removes waste products from cells.
                    </p>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex space-x-4">
                        <button className="bg-emerald-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-emerald-600 transition-colors flex items-center">
                          <PlayCircle size={16} className="mr-1" /> Watch Animation
                        </button>
                        <button className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm hover:bg-white/20 transition-colors">
                          Explore in 3D
                        </button>
                      </div>
                      
                      <div className="text-emerald-300 text-sm">
                        01 / 06
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center animate-on-scroll">
            <Link href="/human-body" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:from-emerald-600 hover:to-green-700">
              Explore All Body Systems <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosystem and Biodiversity */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
                Environmental Biology
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Kenyan Ecosystems & Biodiversity
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Explore Kenya's rich ecological diversity through interactive models of food webs, energy flow, and species interactions in local ecosystems from savannahs to coral reefs.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: TreePine,
                    title: "Savannah Ecosystems",
                    description: "Explore the complex relationships between plants, herbivores, and predators in Kenya's iconic grasslands."
                  },
                  {
                    icon: Fish,
                    title: "Marine Biology",
                    description: "Discover the underwater world of Kenya's coral reefs and coastal ecosystems with their diverse species."
                  },
                  {
                    icon: Leaf,
                    title: "Forest Ecosystems",
                    description: "Study the layered structure and rich biodiversity of Kenya's tropical and montane forests."
                  },
                  {
                    icon: Flower2,
                    title: "Conservation Biology",
                    description: "Learn about threats to biodiversity and conservation strategies to protect Kenya's natural heritage."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 feature-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl p-3 flex-shrink-0">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:from-emerald-600 hover:to-green-700">
                  Explore Ecosystems <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="ecosystem-explorer bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 mb-6 rounded-xl overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="African savannah ecosystem"
                    width={800}
                    height={500}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Savannah Food Web</h3>
                
                <div className="food-web-diagram bg-emerald-50 rounded-xl p-4 mb-6 relative">
                  <div className="ecosystem-level producer-level">
                    <div className="level-label">Producers</div>
                    <div className="species-items">
                      <div className="species-item">Acacia Trees</div>
                      <div className="species-item">Grasses</div>
                      <div className="species-item">Shrubs</div>
                    </div>
                  </div>
                  
                  <div className="food-web-arrows producer-to-primary"></div>
                  
                  <div className="ecosystem-level primary-consumer-level">
                    <div className="level-label">Primary Consumers</div>
                    <div className="species-items">
                      <div className="species-item">Zebras</div>
                      <div className="species-item">Gazelles</div>
                      <div className="species-item">Elephants</div>
                    </div>
                  </div>
                  
                  <div className="food-web-arrows primary-to-secondary"></div>
                  
                  <div className="ecosystem-level secondary-consumer-level">
                    <div className="level-label">Secondary Consumers</div>
                    <div className="species-items">
                      <div className="species-item">Lions</div>
                      <div className="species-item">Cheetahs</div>
                      <div className="species-item">Hyenas</div>
                    </div>
                  </div>
                  
                  <div className="food-web-arrows secondary-to-tertiary"></div>
                  
                  <div className="ecosystem-level tertiary-consumer-level">
                    <div className="level-label">Tertiary Consumers</div>
                    <div className="species-items">
                      <div className="species-item">Vultures</div>
                    </div>
                  </div>
                  
                  <div className="food-web-arrows to-decomposers"></div>
                  
                  <div className="ecosystem-level decomposer-level">
                    <div className="level-label">Decomposers</div>
                    <div className="species-items">
                      <div className="species-item">Bacteria</div>
                      <div className="species-item">Fungi</div>
                      <div className="species-item">Termites</div>
                    </div>
                  </div>
                </div>
                
                <div className="ecosystem-info">
                  <h4 className="font-semibold text-gray-700 mb-2">Energy Flow:</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    In the savannah ecosystem, only about 10% of energy transfers between each trophic level. This energy pyramid explains why there are fewer predators than herbivores in a balanced ecosystem.
                  </p>
                  
                  <div className="ecosystem-metrics grid grid-cols-3 gap-4">
                    <div className="bg-emerald-50 rounded-lg p-3 text-center">
                      <div className="text-emerald-600 font-bold text-xl">200+</div>
                      <div className="text-gray-600 text-sm">Plant Species</div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3 text-center">
                      <div className="text-emerald-600 font-bold text-xl">70+</div>
                      <div className="text-gray-600 text-sm">Mammal Species</div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3 text-center">
                      <div className="text-emerald-600 font-bold text-xl">500+</div>
                      <div className="text-gray-600 text-sm">Bird Species</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Skills */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-green-800 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        ></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Lab Experience
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Practical Biology Skills
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Develop essential laboratory and field skills through virtual simulations designed to prepare you for practical exams and real-world biological research.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <div className="space-y-8">
                {practicalSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 practical-skill-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-500 rounded-xl p-3 flex-shrink-0">
                        <skill.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                        <p className="text-gray-300">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-8">
                  <button className="bg-white text-emerald-700 hover:bg-gray-100 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center">
                    Explore Virtual Lab Skills <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl practical-image-container">
                <Image 
                  src="/assets/images/microscope.jpg"
                  alt="Biology laboratory practical"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover practical-image"
                />
                
                {/* Floating info cards */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 floating-card card-1">
                  <div className="flex items-center">
                    <div className="bg-emerald-500 rounded-full p-2 mr-3">
                      <Microscope className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold">Virtual Microscopy</div>
                      <div className="text-emerald-300 text-sm">Cell Identification</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 floating-card card-2">
                  <div className="flex items-center">
                    <div className="bg-emerald-500 rounded-full p-2 mr-3">
                      <FlaskRound className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold">Lab Techniques</div>
                      <div className="text-emerald-300 text-sm">KCSE Practical Prep</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats Section */}
      <section 
        ref={statsRef}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Biology Achievement Record
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Join thousands of Kenyan students who have transformed their understanding of biology and achieved excellence in their KCSE examinations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="stat-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100 text-center">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <stat.icon size={32} className="text-white" />
                  </div>
                  
                  <div className="counter text-4xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="text-emerald-700">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Cards and Images */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Student Experiences
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              What Our Biology Students Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="testimonial-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-emerald-50 to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="inline-block text-yellow-400" size={20} fill="#FACC15" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-8 leading-relaxed flex-grow">
                    "{review.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 overflow-hidden relative mr-4">
                      <Image 
                        src={review.image} 
                        alt="Student photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{review.name}</div>
                      <div className="text-emerald-600 text-sm">{review.relation}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <Link href="/testimonials" className="inline-flex items-center bg-white border border-emerald-200 hover:border-emerald-300 text-emerald-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
              Read More Success Stories <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* KCSE Exam Preparation */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="kcse-prep-image relative rounded-3xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Students preparing for biology exam"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">KCSE Biology Paper Structure</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <div className="text-white font-bold">Paper 1</div>
                      <div className="text-emerald-300 text-sm">Multiple Choice</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <div className="text-white font-bold">Paper 2</div>
                      <div className="text-emerald-300 text-sm">Theory Questions</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <div className="text-white font-bold">Paper 3</div>
                      <div className="text-emerald-300 text-sm">Practical Exam</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
                Exam Success
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                KCSE Biology Exam Preparation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our specialized KCSE preparation resources are designed to give Kenyan students the confidence and skills to excel in their biology examinations.
              </p>
              
              <div className="space-y-5">
                {[
                  {
                    title: "Paper 1: Multiple Choice Mastery",
                    description: "Strategies for tackling MCQs with practice tests that cover all biology topics in the syllabus."
                  },
                  {
                    title: "Paper 2: Theory Question Excellence",
                    description: "Learn how to structure comprehensive answers with proper biological terminology and diagrams."
                  },
                  {
                    title: "Paper 3: Practical Skills Development",
                    description: "Virtual lab experience to master specimen handling, microscopy, and experimental reporting."
                  },
                  {
                    title: "Past Paper Analysis",
                    description: "Detailed walkthroughs of previous KCSE biology papers with examiner insights and model answers."
                  },
                  {
                    title: "Specialized Revision Sessions",
                    description: "Topic-focused review classes targeting commonly tested areas and challenging concepts."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:from-emerald-600 hover:to-green-700">
                  Prepare for KCSE Biology <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 biology-patterns opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Begin Your Biology Journey Today
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of Kenyan students who have transformed their understanding of biology 
              and achieved excellent results with StudyBuddy.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center cta-button-pulse">
                Start Learning Biology <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Explore Free Resources
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: "Virtual", label: "Dissections" },
                { number: "100%", label: "KCSE Aligned" },
                { number: "Expert", label: "Biology Tutors" },
                { number: "Weekly", label: "Live Classes" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-white font-bold text-2xl">{item.number}</div>
                  <div className="text-emerald-100 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BiologyPage;