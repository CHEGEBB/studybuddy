// /subjects/chemistry/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Atom, 
  Beaker, 
  Flame, 
  Droplets, 
  Leaf, 
  CheckCircle, 
  ArrowRight, 
  PlayCircle,
  Users,
  Clock,
  Award,
  Microscope,
  Tablet,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Dna,
  Shield,
  Clipboard,
  Star,
  BookText,
  HeartPulse,
  BarChart4,
  FlaskConical
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/chemistry.scss';

const ChemistryPage = () => {
  const [activeTab, setActiveTab] = useState('organic');
  const statsRef = useRef<HTMLElement>(null);
  const reactionsRef = useRef<HTMLDivElement>(null);
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

  // Chemical reaction animation
  useEffect(() => {
    if (reactionsRef.current) {
      const reactions = reactionsRef.current.querySelectorAll('.reaction-item');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('reaction-complete');
              }, index * 300);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      reactions.forEach(reaction => observer.observe(reaction));
      
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
  const chemistryModules = {
    organic: [
      {
        title: "Hydrocarbons & Alkanes",
        icon: Dna,
        description: "Explore the fundamentals of organic compounds, their structures, properties and applications.",
        duration: "3 weeks",
        topics: ["Alkanes & Alkenes", "Alkynes & Aromatics", "IUPAC Nomenclature", "Isomerism"]
      },
      {
        title: "Functional Groups",
        icon: Droplets,
        description: "Master the diverse functional groups that define organic compound properties and reactions.",
        duration: "4 weeks",
        topics: ["Alcohols & Ethers", "Aldehydes & Ketones", "Carboxylic Acids", "Amines & Amides"]
      },
      {
        title: "Reaction Mechanisms",
        icon: Atom,
        description: "Understand how organic reactions occur at the molecular level with electron movements.",
        duration: "3 weeks",
        topics: ["Addition Reactions", "Substitution Reactions", "Elimination Reactions", "Rearrangements"]
      }
    ],
    inorganic: [
      {
        title: "Periodic Trends",
        icon: BarChart4,
        description: "Discover patterns in element properties across the periodic table and their significance.",
        duration: "3 weeks",
        topics: ["Atomic Radius", "Ionization Energy", "Electronegativity", "Reactivity"]
      },
      {
        title: "Transition Metals",
        icon: Award,
        description: "Explore the unique properties and chemistry of transition elements and their compounds.",
        duration: "4 weeks",
        topics: ["Complex Formation", "Variable Oxidation States", "Colored Compounds", "Catalytic Properties"]
      },
      {
        title: "Main Group Chemistry",
        icon: Beaker,
        description: "Master the chemistry of s-block and p-block elements and their distinctive behaviors.",
        duration: "3 weeks",
        topics: ["Alkali & Alkaline Earth", "Halogens", "Noble Gases", "Group 15-16 Elements"]
      }
    ],
    physical: [
      {
        title: "Thermodynamics",
        icon: Flame,
        description: "Understand energy transformations and the driving forces behind chemical reactions.",
        duration: "4 weeks",
        topics: ["Enthalpy Changes", "Entropy & Free Energy", "Hess's Law", "Spontaneity of Reactions"]
      },
      {
        title: "Chemical Kinetics",
        icon: Clock,
        description: "Learn about reaction rates, mechanisms, and factors affecting how fast reactions occur.",
        duration: "3 weeks",
        topics: ["Rate Laws", "Reaction Mechanisms", "Collision Theory", "Catalysis"]
      },
      {
        title: "Electrochemistry",
        icon: Lightbulb,
        description: "Explore the relationship between electrical energy and chemical change in reactions.",
        duration: "3 weeks",
        topics: ["Redox Reactions", "Electrochemical Cells", "Electrolysis", "Nernst Equation"]
      }
    ],
    analytical: [
      {
        title: "Qualitative Analysis",
        icon: Microscope,
        description: "Develop skills to identify unknown substances through systematic chemical testing.",
        duration: "3 weeks",
        topics: ["Cation Identification", "Anion Identification", "Organic Functional Groups", "Flame Tests"]
      },
      {
        title: "Quantitative Methods",
        icon: FlaskConical,
        description: "Master precise measurement techniques to determine quantities in chemical samples.",
        duration: "4 weeks",
        topics: ["Titrations", "Gravimetric Analysis", "Colorimetry", "pH Measurements"]
      },
      {
        title: "Instrumental Analysis",
        icon: Tablet,
        description: "Introduction to modern analytical instruments and their applications in chemistry.",
        duration: "3 weeks",
        topics: ["Spectroscopy", "Chromatography", "Mass Spectrometry", "NMR Analysis"]
      }
    ]
  };

  // Success stats
  const stats = [
    { 
      icon: Award, 
      number: "92%", 
      label: "Students Improved Grades", 
      color: "from-green-400 to-emerald-500" 
    },
    { 
      icon: FlaskConical, 
      number: "98%", 
      label: "Lab Safety Record", 
      color: "from-emerald-400 to-green-500" 
    },
    { 
      icon: Users, 
      number: "7800+", 
      label: "Chemistry Students Enrolled", 
      color: "from-green-500 to-emerald-600" 
    },
    { 
      icon: GraduationCap, 
      number: "94%", 
      label: "KCSE Success Rate", 
      color: "from-emerald-500 to-green-600" 
    }
  ];

  // Reviews data
  const reviews = [
    {
      quote: "The virtual lab simulations helped me understand chemical reactions that were difficult to visualize. Now I can actually see what's happening at the molecular level!",
      name: "David Maina",
      relation: "Form 3 Student, Nakuru",
      image: "/assets/images/testimonial4.jpg"
    },
    {
      quote: "My daughter used to struggle with balancing chemical equations. After using StudyBuddy's chemistry program, she finds it almost intuitive now. Her grades have improved significantly.",
      name: "Mrs. Kamau",
      relation: "Parent of Form 2 Student",
      image: "/assets/images/testimonial5.jpg"
    },
    {
      quote: "As a chemistry teacher, I appreciate how StudyBuddy connects theoretical concepts with practical applications. The animations make complex topics accessible to all students.",
      name: "Mr. Odhiambo",
      relation: "Chemistry Teacher, Kisumu",
      image: "/assets/images/testimonial6.jpg"
    }
  ];

  // Featured resources
  const resources = [
    {
      title: "Organic Chemistry Study Guide",
      description: "Comprehensive coverage of organic chemistry with reaction mechanisms and practice problems.",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Study Guide",
      downloads: "2.9k"
    },
    {
      title: "Laboratory Safety Manual",
      description: "Essential safety protocols and procedures for all chemistry laboratory experiments.",
      image: "https://images.unsplash.com/photo-1562411052-105105232432?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Safety",
      downloads: "5.2k"
    },
    {
      title: "Periodic Table Interactive Guide",
      description: "Detailed information on all elements with interactive features for deeper understanding.",
      image: "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Reference",
      downloads: "7.1k"
    }
  ];

  return (
    <div className="chemistry-page min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Molecular Animation */}
      <section 
        ref={heroRef}
        className="hero-section relative h-[90vh] flex items-center overflow-hidden"
      >
        <div className="hero-background absolute inset-0 bg-gradient-to-r from-green-900 via-emerald-800 to-transparent z-10"></div>
        
        <div className="absolute inset-0 bg-cover bg-center opacity-60" 
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"}}></div>
        
        <div className="absolute right-0 top-0 h-full w-1/2 molecular-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-on-scroll">
              <div className="mb-6 flex items-center">
                
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight hero-title">
                <span className="text-white">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Chemistry Understanding
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Experience chemistry come alive with interactive molecular visualizations, 
                virtual lab experiments, and expert guidance that makes complex concepts 
                clear and engaging.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="cta-button bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
                  Explore Chemistry <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="secondary-button bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center">
                  <PlayCircle className="mr-2" size={20} />
                  View Lab Demo
                </button>
              </div>
              
              {/* Floating stats */}
              <div className="mt-12 hidden lg:flex space-x-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center space-x-3">
                  <FlaskConical className="text-green-400" size={24} />
                  <span className="text-white font-semibold">Virtual Labs</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center space-x-3">
                  <Microscope className="text-green-400" size={24} />
                  <span className="text-white font-semibold">Expert Instructors</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center space-x-3">
                  <Atom className="text-green-400" size={24} />
                  <span className="text-white font-semibold">Molecular Visualization</span>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="chemistry-visual-container">
                <Image 
                  src="/assets/images/herochem.png" 
                  alt="Chemistry laboratory visualization"
                  width={600}
                  height={800}
                  className="object-contain z-10 relative"
                />
                
                <div className="floating-molecule molecule-1">
                  <div className="molecule-structure h2o"></div>
                </div>
                
                <div className="floating-molecule molecule-2">
                  <div className="molecule-structure co2"></div>
                </div>
                
                <div className="floating-molecule molecule-3">
                  <div className="molecule-structure ch4"></div>
                </div>

                <div className="beaker-animation">
                  <div className="beaker">
                    <div className="liquid">
                      <div className="bubbles"></div>
                    </div>
                  </div>
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
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FlaskConical,
                title: "Laboratory Excellence Hub",
                description: "Virtual lab simulations, safety protocols, and hands-on experimental techniques."
              },
              {
                icon: Atom,
                title: "Molecular Mastery Center",
                description: "Explore 3D molecular structures and visualize chemical bonding interactions."
              },
              {
                icon: Clipboard,
                title: "Equation Balancing Academy",
                description: "Master chemical equations with step-by-step guidance and interactive practice."
              },
              {
                icon: Lightbulb,
                title: "Real-World Applications",
                description: "Connect chemistry concepts to industry, medicine, and everyday phenomena."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="feature-card bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Course Modules Section with Tabs */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-green-50 to-transparent opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Chemistry Curriculum
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Chemistry Learning Modules
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Our comprehensive chemistry curriculum covers all key areas of the KCSE syllabus, 
              organized into focused modules with practical applications and interactive elements.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4 animate-on-scroll">
            {[
              { id: 'organic', label: 'Organic Chemistry', icon: Dna },
              { id: 'inorganic', label: 'Inorganic Chemistry', icon: Beaker },
              { id: 'physical', label: 'Physical Chemistry', icon: Flame },
              { id: 'analytical', label: 'Analytical Chemistry', icon: Microscope }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {(chemistryModules[activeTab as keyof typeof chemistryModules] || []).map((module, index) => (
              <div
                key={module.title}
                className="module-card group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full flex flex-col relative overflow-hidden">
                  {/* Module background pattern */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-green-50 opacity-50 z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <module.icon size={28} className="text-white" />
                      </div>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
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
                            <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                            <span className="text-gray-600">{topic}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <button className="w-full flex items-center justify-center text-green-600 hover:text-green-700 font-medium transition-colors duration-300">
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
            <Link href="/courses" className="inline-flex items-center bg-white border border-green-200 hover:border-green-300 text-green-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
              View All Chemistry Modules <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Virtual Laboratory Experience */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <div ref={reactionsRef} className="lab-container bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                {/* Lab elements overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="chemistry-patterns opacity-20"></div>
                </div>
                
                <div className="lab-simulation relative z-10">
                  <div className="lab-header flex items-center mb-6">
                    <FlaskConical size={24} className="text-green-400 mr-3" />
                    <h3 className="text-white text-xl font-bold">Virtual Lab Simulation</h3>
                  </div>
                  
                  <div className="reaction-sequence space-y-6">
                    {[
                      { 
                        name: "Acid-Base Neutralization", 
                        equation: "HCl + NaOH → NaCl + H₂O",
                        observation: "Color change from red to blue as pH shifts from acidic to basic"
                      },
                      { 
                        name: "Precipitation Reaction", 
                        equation: "AgNO₃ + NaCl → AgCl↓ + NaNO₃",
                        observation: "White silver chloride precipitate forms immediately"
                      },
                      { 
                        name: "Redox Reaction", 
                        equation: "Zn + CuSO₄ → ZnSO₄ + Cu",
                        observation: "Copper metal deposits as zinc dissolves into solution"
                      },
                      { 
                        name: "Combustion", 
                        equation: "CH₄ + 2O₂ → CO₂ + 2H₂O",
                        observation: "Release of heat and light with complete combustion"
                      }
                    ].map((reaction, index) => (
                      <div key={index} className="reaction-item bg-slate-800 rounded-xl p-4 border border-slate-700">
                        <h4 className="text-green-400 font-medium mb-2">{reaction.name}</h4>
                        <div className="reaction-equation flex items-center space-x-3 mb-3">
                          <div className="reactants text-white">{reaction.equation.split('→')[0]}</div>
                          <div className="arrow">
                            <ArrowRight size={20} className="text-emerald-500" />
                          </div>
                          <div className="products text-white">{reaction.equation.split('→')[1]}</div>
                        </div>
                        <div className="reaction-observation text-gray-400 text-sm">
                          <span className="text-gray-300 font-medium">Observation:</span> {reaction.observation}
                        </div>
                        <div className="reaction-progress mt-3 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="reaction-progress-bar h-full bg-gradient-to-r from-green-500 to-emerald-400 w-0"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="lab-controls mt-6 flex justify-between">
                    <button className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors flex items-center">
                      <PlayCircle size={18} className="mr-2 text-green-400" /> Run Simulation
                    </button>
                    <button className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors flex items-center">
                      Reset <ArrowRight size={18} className="ml-2 text-green-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll">
              <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
                Virtual Laboratory
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Experience Chemistry in Action
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our state-of-the-art virtual laboratory allows students to conduct experiments safely, observe reactions in real-time, and develop essential practical skills without physical constraints.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Safe Experimentation",
                    description: "Practice laboratory techniques without risks associated with handling chemicals."
                  },
                  {
                    icon: Beaker,
                    title: "Realistic Simulations",
                    description: "Observe authentic chemical reactions with accurate molecular behavior."
                  },
                  {
                    icon: Microscope,
                    title: "Microscopic View",
                    description: "Zoom in to see molecular-level interactions invisible in physical labs."
                  },
                  {
                    icon: Clipboard,
                    title: "Comprehensive Lab Reports",
                    description: "Develop scientific documentation skills with guided reporting tools."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 feature-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl p-3 flex-shrink-0">
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
                <button className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:from-green-600 hover:to-emerald-700">
                  Try Virtual Lab <PlayCircle className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Periodic Table Proficiency */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="periodic-elements-bg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Element Mastery
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Periodic Table Proficiency
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Develop a deep understanding of the periodic table, element properties, and 
              how they form the foundation of chemical reactions and material science.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Element Explorer",
                description: "Navigate through an interactive periodic table with detailed information on each element's properties, history, and applications.",
                image: "https://images.unsplash.com/photo-1614935151651-0bea6508db74?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3",
                icon: Atom
              },
              {
                title: "Periodic Trends Analysis",
                description: "Visualize and understand patterns in atomic radius, ionization energy, electronegativity, and reactivity across periods and groups.",
                image: "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3",
                icon: BarChart4
              },
              {
                title: "Element Properties Deep-Dive",
                description: "Explore physical and chemical properties of elements and how they influence compound formation and chemical behavior.",
                image: "https://images.unsplash.com/photo-1608037521244-f1c6a2391221?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3",
                icon: Microscope
              },
              {
                title: "Electron Configuration Mastery",
                description: "Master electron arrangements and understand how they determine chemical bonding, valency, and reactivity patterns.",
                image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
                icon: Dna
              },
              {
                title: "Element Discovery Stories",
                description: "Learn the fascinating history behind element discoveries and the scientists who revolutionized our understanding of matter.",
                image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3",
                icon: BookText
              },
              {
                title: "Real-World Element Applications",
                description: "Discover how elements contribute to technology, medicine, industry, and everyday products we rely on.",
                image: "https://images.unsplash.com/photo-1544985361-b420d7a77043?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3",
                icon: Lightbulb
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="periodic-feature-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group">
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30">
                      <feature.icon className="text-white" size={24} />
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <button className="w-full flex items-center justify-center text-green-600 hover:text-green-700 font-medium transition-colors duration-300">
                        Explore Feature <ArrowRight className="ml-2" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Link href="/periodic-table" className="inline-flex items-center bg-white border border-green-200 hover:border-green-300 text-green-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
              Explore Interactive Periodic Table <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Real-World Chemistry Applications */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Applied Chemistry
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Real-World Chemistry Applications
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover how chemistry shapes our modern world and opens diverse career pathways in science, 
              technology, medicine, and environmental sustainability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pharmaceutical Development",
                icon: HeartPulse,
                color: "from-green-400 to-emerald-500",
                description: "Explore how chemists design and synthesize medications that treat diseases and improve human health.",
                industries: ["Drug Research", "Clinical Trials", "Medical Chemistry"]
              },
              {
                title: "Materials Science",
                icon: Beaker,
                color: "from-emerald-400 to-green-500",
                description: "Learn how chemistry creates innovative materials from plastics to semiconductors and advanced composites.",
                industries: ["Nanotechnology", "Polymer Science", "Electronic Materials"]
              },
              {
                title: "Environmental Chemistry",
                icon: Leaf,
                color: "from-green-500 to-emerald-400",
                description: "Understand how chemistry helps monitor, protect and restore our natural environment.",
                industries: ["Pollution Control", "Water Treatment", "Sustainable Chemistry"]
              },
              {
                title: "Food Science",
                icon: Droplets,
                color: "from-emerald-500 to-green-400",
                description: "Discover the chemical processes behind food production, preservation, and flavor enhancement.",
                industries: ["Food Safety", "Product Development", "Nutrition Analysis"]
              },
              {
                title: "Energy Production",
                icon: Flame,
                color: "from-green-400 to-emerald-500",
                description: "Explore how chemistry powers renewable energy technologies and improves traditional energy sources.",
                industries: ["Solar Technology", "Biofuels", "Battery Development"]
              },
              {
                title: "Forensic Science",
                icon: Microscope,
                color: "from-emerald-400 to-green-500",
                description: "See how chemical analysis helps solve crimes and provides crucial evidence in investigations.",
                industries: ["Crime Scene Analysis", "Toxicology", "Material Identification"]
              }
            ].map((application, index) => (
              <div 
                key={index}
                className="application-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${application.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <application.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{application.title}</h3>
                  <p className="text-gray-600 mb-6">{application.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Related Industries</h4>
                    <div className="flex flex-wrap gap-2">
                      {application.industries.map((industry, i) => (
                        <span key={i} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Link href="/career-paths" className="inline-flex items-center bg-white border border-green-200 hover:border-green-300 text-green-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
              Explore Chemistry Career Paths <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Resources with Card Images */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Learning Resources
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Featured Chemistry Resources
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Access high-quality study materials designed specifically for Kenyan students preparing for KCSE chemistry examinations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll resource-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={resource.image} 
                    alt={resource.title}
                    fill
                    className="object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {resource.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <BookOpen size={16} className="mr-1" /> {resource.downloads} downloads
                    </span>
                    <button className="text-green-600 hover:text-green-700 font-medium flex items-center transition-colors duration-300">
                      Download <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Link href="/resources" className="inline-flex items-center bg-white border border-green-200 hover:border-green-300 text-green-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
              Browse All Chemistry Resources <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* KCSE Exam Preparation */}
      <section className="py-24 bg-gradient-to-br from-green-900 to-emerald-800 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555633514-abcee6ab92e1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3')"
          }}
        ></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Exam Excellence
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              KCSE Chemistry Preparation
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Our specialized KCSE preparation resources are designed to give Kenyan students the confidence and skills to excel in their chemistry examinations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl kcse-image-container">
                <Image 
                  src="/assets/images/labstudents.jpg"
                  alt="Students in chemistry laboratory"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover kcse-image"
                />
                
                {/* Floating info cards */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 floating-card card-1">
                  <div className="flex items-center">
                    <div className="bg-green-500 rounded-full p-2 mr-3">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold">Top Grades</div>
                      <div className="text-green-300 text-sm">92% Score A or A-</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 floating-card card-2">
                  <div className="flex items-center">
                    <div className="bg-green-500 rounded-full p-2 mr-3">
                      <FlaskConical className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold">Practical Focus</div>
                      <div className="text-green-300 text-sm">Lab Exam Preparation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="space-y-8">
                {[
                  {
                    title: "Past Paper Analysis",
                    description: "Comprehensive review of past KCSE chemistry papers with detailed solutions and examiner insights."
                  },
                  {
                    title: "Practical Exam Preparation",
                    description: "Hands-on training for the laboratory component with focus on experimental techniques and data analysis."
                  },
                  {
                    title: "Chemical Equation Mastery",
                    description: "Specialized training in balancing equations, predicting products, and understanding reaction mechanisms."
                  },
                  {
                    title: "Concept Application Drills",
                    description: "Practice applying theoretical knowledge to solve real-world chemistry problems that appear in exams."
                  },
                  {
                    title: "Revision Question Bank",
                    description: "Access thousands of chemistry questions organized by topic with step-by-step solutions."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 exam-prep-item"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <button className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center">
                  Register for KCSE Chemistry Prep <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Cards and Images */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              What Our Chemistry Students Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="testimonial-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="inline-block text-yellow-400" size={20} fill="#FACC15" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-8 leading-relaxed flex-grow">
                    "{review.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 overflow-hidden relative mr-4">
                      <Image 
                        src={review.image} 
                        alt="Student photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{review.name}</div>
                      <div className="text-green-600 text-sm">{review.relation}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <Link href="/testimonials" className="inline-flex items-center bg-white border border-green-200 hover:border-green-300 text-green-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
              Read More Success Stories <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 chemistry-patterns opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Chemistry Journey Today
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of Kenyan students who have transformed their understanding of chemistry 
              and achieved excellent results with StudyBuddy.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center cta-button-pulse">
                Begin Learning <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Try Virtual Lab
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: "Virtual", label: "Lab Experience" },
                { number: "100%", label: "KCSE Aligned" },
                { number: "Expert", label: "Chemistry Tutors" },
                { number: "Weekly", label: "Live Classes" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-white font-bold text-2xl">{item.number}</div>
                  <div className="text-green-100 text-sm">{item.label}</div>
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

export default ChemistryPage;