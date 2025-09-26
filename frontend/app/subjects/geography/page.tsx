// /subjects/geography/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Globe, 
  MapPin, 
  Compass, 
  Mountain, 
  Waves, 
  ArrowRight, 
  PlayCircle,
  Users,
  Clock,
  Award,
  TreePine,
  GraduationCap,
  BookOpen,
  Calculator,
  BarChart3,
  Star,
  CheckCircle,
  Cloud,
  Navigation,
  Map,
  Thermometer
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/geography.scss';

const GeographyPage = () => {
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

  // Create globe animation effect for hero section
  useEffect(() => {
    if (heroRef.current) {
      const createFloatingLandmark = (className: string) => {
        const landmark = document.createElement('div');
        landmark.className = `floating-landmark ${className}`;
        return landmark;
      };
      
      const globeContainer = heroRef.current.querySelector('.globe-container');
      if (globeContainer) {
        const landmarks = ['mountain', 'tree', 'wave', 'cloud'];
        landmarks.forEach((landmark, index) => {
          globeContainer.appendChild(createFloatingLandmark(`landmark-${index + 1}`));
        });
      }
    }
  }, []);

  // Course modules data
  const geographyModules = [
    {
      title: "Physical Geography",
      icon: Mountain,
      description: "Study landforms, climate patterns, and natural processes shaping our Earth.",
      topics: ["Landforms", "Weather & Climate", "Soil Geography", "Vegetation Zones"]
    },
    {
      title: "Human Geography",
      icon: Users,
      description: "Explore population distribution, settlements, and human-environment interactions.",
      topics: ["Population Studies", "Urbanization", "Settlement Patterns", "Migration"]
    },
    {
      title: "Economic Geography",
      icon: BarChart3,
      description: "Analyze economic activities, trade patterns, and resource distribution.",
      topics: ["Agriculture", "Industry", "Trade & Commerce", "Transportation"]
    },
    {
      title: "Environmental Geography",
      icon: TreePine,
      description: "Understand environmental challenges and conservation strategies.",
      topics: ["Environmental Issues", "Conservation", "Sustainability", "Ecosystem Management"]
    },
    {
      title: "Regional Geography",
      icon: Globe,
      description: "Study different regions of Kenya, Africa, and the world.",
      topics: ["Kenya Regions", "East Africa", "World Regions", "Comparative Studies"]
    },
    {
      title: "Practical Geography",
      icon: Map,
      description: "Master map reading, fieldwork techniques, and geographical skills.",
      topics: ["Map Work", "Field Studies", "Data Collection", "Spatial Analysis"]
    }
  ];

  // Success stats
  const stats = [
    { 
      icon: Award, 
      number: "89%", 
      label: "Students Improved Grades", 
      color: "from-emerald-400 to-green-500" 
    },
    { 
      icon: Map, 
      number: "94%", 
      label: "Map Skills Mastery", 
      color: "from-green-500 to-emerald-600" 
    },
    { 
      icon: Users, 
      number: "5800+", 
      label: "Geography Students Enrolled", 
      color: "from-emerald-500 to-green-600" 
    },
    { 
      icon: GraduationCap, 
      number: "88%", 
      label: "KCSE Success Rate", 
      color: "from-green-400 to-emerald-500" 
    }
  ];

  // Study features
  const studyFeatures = [
    {
      icon: Map,
      title: "Interactive Map Skills",
      description: "Master topographical maps, scale calculations, and spatial analysis through hands-on practice."
    },
    {
      icon: BookOpen,
      title: "KCSE-Aligned Content",
      description: "Complete syllabus coverage with exam-focused materials for all geography papers."
    },
    {
      icon: Globe,
      title: "Real-World Applications",
      description: "Connect geographical concepts to current events and real-world scenarios."
    },
    {
      icon: Navigation,
      title: "Field Study Guidance",
      description: "Comprehensive preparation for practical geography assignments and fieldwork."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The map work section became so much clearer with the interactive tutorials. I can now tackle any topographical question with confidence.",
      name: "Sarah M.",
      school: "Form 4 Student, Eldoret"
    },
    {
      quote: "Understanding human geography patterns helped me excel in essays. The case studies provided excellent examples for my answers.",
      name: "David K.",
      school: "Form 4 Graduate, Nakuru"
    },
    {
      quote: "As a geography teacher, I appreciate how this program connects theoretical concepts to real-world applications. Highly recommended!",
      name: "Mrs. Wanjiku",
      school: "Geography Teacher, Thika"
    }
  ];

  return (
    <div className="geography-page min-h-screen bg-white">
      <Navbar />
      
     {/* Hero Section */}
<section 
  ref={heroRef}
  className="hero-section relative h-[80vh] flex items-center overflow-hidden"
>
  <div className="absolute inset-0 bg-cover bg-center" 
       style={{backgroundImage: "url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"}}></div>
  
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/90 via-emerald-900/90 to-slate-900/80"></div>
  
  {/* Floating geographical elements */}
  <div className="geo-element element-1"></div>
  <div className="geo-element element-2"></div>
  <div className="geo-element element-3"></div>
  <div className="geo-element element-4"></div>
  <div className="geo-element element-5"></div>
  
  <div className="container mx-auto px-4 relative z-20">
    <div className="max-w-2xl">
      <div className="mb-6 animate-fade-down">
        <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full glow-effect">
          <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase animate-text-shimmer">
            Geography
          </span>
        </span>
      </div>
      
      <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white animate-scale-up">
        Explore Our <span className="text-emerald-400 animate-text-glow">Dynamic</span> World
      </h1>
      
      <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-slide-up animation-delay-300">
        Master geography through systematic study of physical processes, human activities, and spatial relationships designed for KCSE success.
      </p>
      
      <div className="flex flex-wrap gap-4 animate-bounce-in animation-delay-600">
        <Link href="/signup" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 flex items-center button-pulse">
          Start Exploring <ArrowRight className="ml-2 animate-move-right" size={20} />
        </Link>
        <Link href="#features" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-emerald-500/20 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-500 flex items-center glass-effect">
          Discover Features
        </Link>
      </div>
    </div>
  </div>
  
  {/* Enhanced Geography Globe */}
  <div className="absolute right-[10%] top-1/2 transform -translate-y-1/2 hidden lg:block">
    <div className="geography-globe">
      <div className="globe-core animate-spin-slow">
        <div className="continent continent-africa"></div>
        <div className="continent continent-asia"></div>
        <div className="continent continent-americas"></div>
        <div className="continent continent-europe"></div>
        {/* Floating geographical icons */}
        <div className="geo-icon mountain-icon animate-float-gentle">
          <Mountain size={18} className="text-emerald-300" />
        </div>
        <div className="geo-icon wave-icon animate-float-medium">
          <Waves size={16} className="text-blue-300" />
        </div>
        <div className="geo-icon compass-icon animate-rotate-gentle">
          <Compass size={20} className="text-yellow-300" />
        </div>
        <div className="geo-icon tree-icon animate-sway">
          <TreePine size={14} className="text-green-300" />
        </div>
      </div>
      
      {/* Latitude and Longitude lines */}
      <div className="grid-lines">
        <div className="latitude-line lat-1 animate-draw-line"></div>
        <div className="latitude-line lat-2 animate-draw-line animation-delay-200"></div>
        <div className="longitude-line long-1 animate-draw-line animation-delay-100"></div>
        <div className="longitude-line long-2 animate-draw-line animation-delay-300"></div>
      </div>
      
      {/* Geographical markers */}
      <div className="geo-markers">
        <div className="marker equator animate-pulse-soft">Equator</div>
        <div className="marker tropic animate-pulse-soft animation-delay-400">Tropic</div>
        <div className="marker pole animate-pulse-soft animation-delay-600">Pole</div>
      </div>
    </div>
  </div>
  
  {/* Floating geographical coordinates - Kenya focused */}
  <div className="absolute top-1/4 right-1/4 text-emerald-300/30 text-2xl font-bold coordinate animate-drift-slow">
    0°N, 0°E
  </div>
  <div className="absolute bottom-1/4 right-1/3 text-green-300/30 text-2xl font-bold coordinate animate-drift-medium">
    1°S, 37°E
  </div>
  <div className="absolute top-2/3 right-1/5 text-emerald-400/30 text-2xl font-bold coordinate animate-drift-fast">
    -1.2921°, 36.8219°
  </div>
  
  {/* Weather patterns and climate zones */}
  <div className="weather-pattern pattern-1 animate-cloud-drift">
    <Cloud size={24} className="text-white/20" />
  </div>
  <div className="weather-pattern pattern-2 animate-wind-flow">
    <Navigation size={20} className="text-emerald-200/30" />
  </div>
  <div className="weather-pattern pattern-3 animate-temperature-pulse">
    <Thermometer size={18} className="text-orange-200/30" />
  </div>
  
  {/* Topographic elevation lines */}
  <div className="elevation-lines">
    <div className="elevation-line line-1 animate-contour-draw"></div>
    <div className="elevation-line line-2 animate-contour-draw animation-delay-150"></div>
    <div className="elevation-line line-3 animate-contour-draw animation-delay-300"></div>
  </div>
</section>
      
      {/* Features Overview */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-zoom-in">
              Why Our Geography Program Excels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Our approach combines spatial thinking, practical skills, and real-world applications to ensure your geographical understanding and exam success.
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

      {/* Spatial Analysis Methodology */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-in-left">
              <div className="image-container">
                <Image 
                  src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Geography spatial analysis"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
                />
                <div className="floating-icons">
                  <div className="floating-icon icon-1"><Map size={24} /></div>
                  <div className="floating-icon icon-2"><Compass size={20} /></div>
                  <div className="floating-icon icon-3"><Navigation size={22} /></div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll slide-in-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 animate-text-wave">
                Master Geographical Analysis Skills
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our systematic approach to geographical analysis helps you understand spatial patterns, relationships, and processes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 step-item animate-slide-in" style={{animationDelay: '100ms'}}>
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                    <CheckCircle className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Observe and Describe</h3>
                    <p className="text-gray-600">Identify geographical features, patterns, and spatial distributions accurately.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 step-item animate-slide-in" style={{animationDelay: '200ms'}}>
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                    <CheckCircle className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Analyze Relationships</h3>
                    <p className="text-gray-600">Examine connections between physical and human geographical factors.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 step-item animate-slide-in" style={{animationDelay: '300ms'}}>
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                    <CheckCircle className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Interpret Data</h3>
                    <p className="text-gray-600">Use maps, graphs, and statistics to support geographical explanations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 step-item animate-slide-in" style={{animationDelay: '400ms'}}>
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                    <CheckCircle className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Evaluate and Conclude</h3>
                    <p className="text-gray-600">Draw meaningful conclusions about geographical processes and their impacts.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/spatial-analysis" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium hover:scale-105 transition-all duration-300 arrow-hover">
                  Learn spatial analysis methods <ArrowRight className="ml-2 animate-bounce-x" size={18} />
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
              Comprehensive KCSE Geography Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured learning modules cover the entire geography syllabus with interactive maps, case studies, and practical applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {geographyModules.map((module, index) => (
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
                Targeted KCSE Geography Exam Preparation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our specialized preparation resources are designed to give you the confidence and skills to excel in all geography papers.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-5 border border-emerald-100 prep-card hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                      <BookOpen className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Theory Mastery</h3>
                      <p className="text-gray-600">Comprehensive coverage of geographical concepts with clear explanations and case studies.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-5 border border-emerald-100 prep-card hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg mt-1 pulse-green">
                      <Map className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Map Work Excellence</h3>
                      <p className="text-gray-600">Intensive practice with topographical maps, scale work, and spatial analysis techniques.</p>
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
                      <p className="text-gray-600">Detailed walkthroughs of previous KCSE geography papers with examiner insights.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/exam-prep" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-500 hover:shadow-xl hover:from-emerald-600 hover:to-green-700 hover:scale-105 bounce-hover">
                  Prepare for KCSE Geography <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            
            <div className="animate-on-scroll slide-in-right">
              <div className="grid grid-cols-2 gap-6 image-gallery">
                <div className="rounded-2xl overflow-hidden shadow-lg image-hover-zoom">
                  <Image 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Geography fieldwork"
                    width={300}
                    height={700}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-10 image-hover-zoom">
                  <Image 
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Geographic maps"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg col-span-2 image-hover-zoom">
                  <Image 
                    src="https://images.unsplash.com/photo-1597149389072-b5e7175ecf7d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Geography students"
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
              Our Geography Success Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of students who have transformed their understanding of geography and achieved excellence in their exams.
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
              Hear from students who have improved their geographical understanding and exam performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                  
                  <p className="text-gray-700 italic mb-6 flex-grow quote-text">"{testimonial.quote}"</p>
                  
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
              Start Your Geography Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join StudyBuddy and transform your understanding of geography with our comprehensive learning approach.
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

export default GeographyPage;