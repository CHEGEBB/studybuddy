'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calculator, 
  BookOpen, 
  Award, 
  ChartBar, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  PlayCircle,
  Users,
  Clock,
  Sigma,
  PieChart,
  BarChart4,
  Hexagon,
  Ruler,
  Star,
  TrendingUp,
  BookOpenCheck,
  BookText,
  GraduationCap
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/mathematics.scss';

const MathematicsPage = () => {
  const [activeTab, setActiveTab] = useState('algebra');
  const statsRef = useRef<HTMLElement>(null);
  const formulaRef = useRef<HTMLDivElement>(null);
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

  // Formula animation
  useEffect(() => {
    if (formulaRef.current) {
      const formulas = formulaRef.current.querySelectorAll('.formula-item');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('formula-appear');
              }, index * 200);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      formulas.forEach(formula => observer.observe(formula));
      
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
  const mathModules = {
    algebra: [
      {
        title: "Linear Equations",
        icon: Sigma,
        description: "Master solving linear equations and inequalities with real-world applications.",
        duration: "3 weeks",
        topics: ["System of Equations", "Graphing Lines", "Word Problems", "Inequalities"]
      },
      {
        title: "Quadratic Expressions",
        icon: Calculator,
        description: "Learn to factor, expand and solve quadratic equations with confidence.",
        duration: "4 weeks",
        topics: ["Factoring", "Completing the Square", "Quadratic Formula", "Applications"]
      },
      {
        title: "Polynomials & Functions",
        icon: ChartBar,
        description: "Understand polynomial operations, functions and their transformations.",
        duration: "3 weeks",
        topics: ["Polynomial Operations", "Function Notation", "Transformations", "Domain & Range"]
      }
    ],
    geometry: [
      {
        title: "Coordinate Geometry",
        icon: Hexagon,
        description: "Explore the relationship between algebra and geometry through coordinates.",
        duration: "3 weeks",
        topics: ["Distance Formula", "Midpoint Formula", "Parallel & Perpendicular Lines", "Circles"]
      },
      {
        title: "Triangles & Circles",
        icon: Ruler,
        description: "Discover the properties and theorems related to triangles and circles.",
        duration: "4 weeks",
        topics: ["Congruence", "Similarity", "Circle Theorems", "Constructions"]
      },
      {
        title: "Trigonometry",
        icon: Calculator,
        description: "Apply trigonometric ratios to solve problems involving angles and distances.",
        duration: "3 weeks",
        topics: ["Sine, Cosine & Tangent", "Trigonometric Identities", "Bearings", "3D Problems"]
      }
    ],
    calculus: [
      {
        title: "Differentiation",
        icon: TrendingUp,
        description: "Master the concept of derivatives and their applications in rate of change.",
        duration: "5 weeks",
        topics: ["Limits", "Derivative Rules", "Rate of Change", "Optimization"]
      },
      {
        title: "Integration",
        icon: Sigma,
        description: "Learn integration techniques and their applications in finding areas and volumes.",
        duration: "5 weeks",
        topics: ["Indefinite Integrals", "Definite Integrals", "Area Under Curves", "Volumes"]
      },
      {
        title: "Differential Equations",
        icon: Calculator,
        description: "Explore simple differential equations and their real-world applications.",
        duration: "3 weeks",
        topics: ["First Order DEs", "Separable Equations", "Applications", "Growth & Decay"]
      }
    ],
    statistics: [
      {
        title: "Data Analysis",
        icon: PieChart,
        description: "Develop skills in collecting, organizing and interpreting data effectively.",
        duration: "3 weeks",
        topics: ["Measures of Center", "Measures of Spread", "Data Representation", "Box Plots"]
      },
      {
        title: "Probability",
        icon: BookOpenCheck,
        description: "Understand probability theory and its application in predicting outcomes.",
        duration: "4 weeks",
        topics: ["Probability Rules", "Conditional Probability", "Random Variables", "Distributions"]
      },
      {
        title: "Statistical Inference",
        icon: Brain,
        description: "Learn how to make valid conclusions about populations from sample data.",
        duration: "3 weeks",
        topics: ["Sampling Methods", "Confidence Intervals", "Hypothesis Testing", "Regression"]
      }
    ]
  };

  // Success stats
  const stats = [
    { 
      icon: Award, 
      number: "94%", 
      label: "Students Improved Grades", 
      color: "from-emerald-400 to-green-500" 
    },
    { 
      icon: Clock, 
      number: "40%", 
      label: "Faster Problem Solving", 
      color: "from-green-400 to-emerald-500" 
    },
    { 
      icon: Users, 
      number: "8500+", 
      label: "Math Students Enrolled", 
      color: "from-teal-400 to-emerald-500" 
    },
    { 
      icon: Brain, 
      number: "96%", 
      label: "Exam Success Rate", 
      color: "from-emerald-500 to-green-400" 
    }
  ];

  // Reviews data
  const reviews = [
    {
      quote: "My son struggled with algebra for years. After just 3 months with StudyBuddy, he not only understands the concepts but also enjoys solving math problems!",
      name: "Mrs. Ochieng",
      relation: "Parent of Form 3 Student",
      image: "/assets/images/testimonial1.jpg"
    },
    {
      quote: "The visual approach to geometry helped me grasp concepts I never understood before. I improved from a C- to an A- in mathematics last term.",
      name: "James Kimani",
      relation: "Form 4 Student, Nairobi",
      image: "/assets/images/testimonial2.jpg"
    },
    {
      quote: "As a mathematics teacher, I recommend StudyBuddy to all my students. Their approach aligns perfectly with the Kenyan curriculum while making it engaging.",
      name: "Mr. Mwangi",
      relation: "Math Teacher, Mombasa",
      image: "/assets/images/testimonial3.jpg"
    }
  ];

  // Featured resources
  const resources = [
    {
      title: "KCSE Mathematics Revision Guide",
      description: "Comprehensive review of all KCSE math topics with practice questions and solutions.",
      image: "https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Study Guide",
      downloads: "3.4k"
    },
    {
      title: "Mathematics Formula Sheet",
      description: "Quick reference guide with all essential formulas organized by topic for easy access.",
      image: "https://images.unsplash.com/photo-1754304342329-3c5aff22a39c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Reference",
      downloads: "8.9k"
    },
    {
      title: "Problem-Solving Strategies",
      description: "Step-by-step approaches to tackle complex mathematics problems in exams.",
      image: "https://images.unsplash.com/photo-1520569495996-b5e1219cb625?q=80&w=1094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Tutorial",
      downloads: "2.7k"
    }
  ];

  return (
    <div className="mathematics-page min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <section 
        ref={heroRef}
        className="hero-section relative h-[90vh] flex items-center overflow-hidden"
      >
        <div className="hero-background absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-transparent z-10"></div>
        
        <div className="absolute inset-0 bg-cover bg-center opacity-60" 
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"}}></div>
        
        <div className="absolute right-0 top-0 h-full w-1/2 math-formula-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-on-scroll">
              <div className="mb-6 flex items-center">
                
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight hero-title">
                <span className="text-white">Unlock the</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  Power of Math
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Our comprehensive mathematics program is designed to transform challenging 
                concepts into clear, understandable lessons that build confidence and skills 
                for Kenyan high school students.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="cta-button bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
                  Start Learning <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="secondary-button bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center">
                  <PlayCircle className="mr-2" size={20} />
                  Watch Demo
                </button>
              </div>
              
              {/* Floating stats */}
              <div className="mt-12 hidden lg:flex space-x-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center space-x-3">
                  <Award className="text-emerald-400" size={24} />
                  <span className="text-white font-semibold">KCSE Aligned</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center space-x-3">
                  <Users className="text-emerald-400" size={24} />
                  <span className="text-white font-semibold">Expert Teachers</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center space-x-3">
                  <BookOpen className="text-emerald-400" size={24} />
                  <span className="text-white font-semibold">Interactive Learning</span>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="student-image-container">
                <Image 
                  src="/assets/images/hero2.png" 
                  alt="Student solving math problems"
                  width={600}
                  height={800}
                  className="object-contain z-10 relative"
                />
                
                <div className="floating-element elem-1">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg">
                    <Sigma className="text-emerald-400" size={32} />
                  </div>
                </div>
                
                <div className="floating-element elem-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg">
                    <Calculator className="text-emerald-400" size={32} />
                  </div>
                </div>
                
                <div className="floating-element elem-3">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg">
                    <PieChart className="text-emerald-400" size={32} />
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
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookText,
                title: "Comprehensive Curriculum",
                description: "Covers all KCSE mathematics topics with in-depth explanations and examples."
              },
              {
                icon: Brain,
                title: "Visual Learning",
                description: "Interactive visualizations and animations that make abstract concepts clear."
              },
              {
                icon: GraduationCap,
                title: "Expert Teachers",
                description: "Learn from experienced Kenyan educators with proven track records."
              },
              {
                icon: Calculator,
                title: "Practice & Assessment",
                description: "Abundant practice problems with instant feedback and detailed solutions."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="feature-card bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll"
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

      {/* Stats Section with Animated Counters */}
      <section 
        ref={statsRef}
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Proven Results
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Student Success Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mathematics program has helped thousands of students across Kenya improve their understanding and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-card bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2 counter">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules Section with Tabs */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-emerald-50 to-transparent opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Comprehensive Curriculum
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Mathematics Modules
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Our curriculum covers all aspects of the Kenyan mathematics syllabus, broken down into 
              digestible modules with practical examples and interactive exercises.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4 animate-on-scroll">
            {[
              { id: 'algebra', label: 'Algebra & Functions', icon: Sigma },
              { id: 'geometry', label: 'Geometry & Trigonometry', icon: Hexagon },
              { id: 'calculus', label: 'Calculus', icon: ChartBar },
              { id: 'statistics', label: 'Statistics & Probability', icon: PieChart }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg' 
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
            {(mathModules[activeTab as keyof typeof mathModules] || []).map((module, index) => (
              <div
                key={module.title}
                className="module-card group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full flex flex-col relative overflow-hidden">
                  {/* Background pattern */}
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
                      
                      <div className="mt-8 pt-6  border-t-2 border-dotted border-gray-300">
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
              View All Mathematics Modules <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Learning Section with Visual Formula Display */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <div ref={formulaRef} className="formula-container bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                {/* Interactive elements overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="math-patterns opacity-20"></div>
                </div>
                
                <div className="formula-grid relative z-10">
                  {[
                    "y = mx + c",
                    "a² + b² = c²",
                    "\\frac{d}{dx}(x^n) = nx^{n-1}",
                    "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C",
                    "P(A|B) = \\frac{P(B|A)P(A)}{P(B)}",
                    "e^{i\\pi} + 1 = 0",
                    "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2}",
                    "\\sin^2 \\theta + \\cos^2 \\theta = 1"
                  ].map((formula, index) => (
                    <div key={index} className="formula-item">
                      <span className="text-emerald-400 font-mono">{formula}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll">
              <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
                Interactive Learning
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Beyond Traditional Learning
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We transform abstract mathematical concepts into engaging interactive experiences that make learning both effective and enjoyable.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Calculator,
                    title: "Interactive Problem Solving",
                    description: "Step-by-step guidance through complex problems with real-time feedback."
                  },
                  {
                    icon: ChartBar,
                    title: "Visual Learning Tools",
                    description: "Dynamic visualizations that bring mathematical concepts to life."
                  },
                  {
                    icon: Brain,
                    title: "Adaptive Learning Paths",
                    description: "Personalized learning journeys that adapt to your strengths and weaknesses."
                  },
                  {
                    icon: Zap,
                    title: "Instant Feedback",
                    description: "Get immediate corrections and explanations to reinforce learning."
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
                  Try Interactive Demo <PlayCircle className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources with Card Images */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Learning Resources
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Featured Mathematics Resources
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Access high-quality study materials designed specifically for Kenyan students preparing for KCSE examinations.
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
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-full">
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
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center transition-colors duration-300">
                      Download <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Link href="/resources" className="inline-flex items-center bg-white border border-emerald-200 hover:border-emerald-300 text-emerald-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
              Browse All Resources <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* KCSE Exam Preparation */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-emerald-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1648201637025-1c77b9be3013?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        ></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Exam Excellence
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              KCSE Mathematics Preparation
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Our specialized KCSE preparation resources are designed to give Kenyan students the confidence and skills to excel in their mathematics examinations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl kcse-image-container">
                <Image 
                  src="/assets/images/students.jpg"
                  alt="Students preparing for KCSE exam"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover kcse-image"
                />
                
                {/* Floating info cards */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 floating-card card-1">
                  <div className="flex items-center">
                    <div className="bg-emerald-500 rounded-full p-2 mr-3">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold">Top Scorers</div>
                      <div className="text-emerald-300 text-sm">87% Score A or A-</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 floating-card card-2">
                  <div className="flex items-center">
                    <div className="bg-emerald-500 rounded-full p-2 mr-3">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold">12 Weeks</div>
                      <div className="text-emerald-300 text-sm">Intensive Preparation</div>
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
                    description: "Comprehensive review of past KCSE mathematics papers with detailed solutions and examiner insights."
                  },
                  {
                    title: "Exam Techniques",
                    description: "Strategic approaches to different question types and time management skills for maximum marks."
                  },
                  {
                    title: "Targeted Practice Tests",
                    description: "Simulated exams that mirror the KCSE format, difficulty, and timing to build confidence."
                  },
                  {
                    title: "Common Pitfall Awareness",
                    description: "Identification of frequent student errors and misconceptions with correction strategies."
                  },
                  {
                    title: "Last-Minute Revision Guides",
                    description: "Concise summaries of key concepts, formulas, and problem-solving methods for efficient revision."
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
                <button className="bg-white text-emerald-700 hover:bg-gray-100 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center">
                  Register for KCSE Prep <ArrowRight className="ml-2" size={20} />
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
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              What Our Math Students Say
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
                    &ldquo;{review.quote}&rdquo;
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 math-patterns opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Mathematics Journey Today
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of Kenyan students who have transformed their understanding of mathematics 
              and achieved excellent results with StudyBuddy.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center cta-button-pulse">
                Begin Learning <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                View Sample Lessons
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: "24/7", label: "Learning Support" },
                { number: "100%", label: "KCSE Aligned" },
                { number: "1-on-1", label: "Tutor Sessions" },
                { number: "Money-Back", label: "Guarantee" },
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

export default MathematicsPage;