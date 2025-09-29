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
  GraduationCap,
  BookOpen,
  Star,
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

  // Course modules data
  const biologyModules = [
    {
      title: "Cell Biology",
      icon: FlaskRound,
      description: "Explore cell structure, functions, and processes essential for life.",
      topics: ["Cell Structure", "Cell Membrane", "Cellular Respiration", "Cell Division"]
    },
    {
      title: "Human Physiology",
      icon: HeartPulse,
      description: "Understand the complex systems of the human body and their functions.",
      topics: ["Circulatory System", "Respiratory System", "Digestive System", "Nervous System"]
    },
    {
      title: "Genetics & Inheritance",
      icon: Dna,
      description: "Master principles of heredity, DNA, and patterns of inheritance.",
      topics: ["DNA Structure", "Mendelian Genetics", "Genetic Disorders", "Gene Expression"]
    },
    {
      title: "Plant Biology",
      icon: Sprout,
      description: "Discover plant structure, nutrition, reproduction, and responses.",
      topics: ["Plant Tissues", "Photosynthesis", "Plant Hormones", "Plant Reproduction"]
    },
    {
      title: "Ecology & Environment",
      icon: TreePine,
      description: "Examine relationships between organisms and their environment.",
      topics: ["Ecosystems", "Food Chains", "Environmental Conservation", "Biodiversity"]
    },
    {
      title: "Evolution & Biodiversity",
      icon: Fish,
      description: "Study the origin of species and the diversity of life on Earth.",
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

  // Study features
  const studyFeatures = [
    {
      icon: Microscope,
      title: "Interactive Visualizations",
      description: "Explore 3D models of cells, DNA, and body systems to understand complex concepts."
    },
    {
      icon: BookOpen,
      title: "KCSE-Aligned Content",
      description: "Comprehensive coverage of the entire biology syllabus with exam-focused materials."
    },
    {
      icon: FlaskConical,
      title: "Virtual Lab Simulations",
      description: "Practice essential lab skills through realistic interactive experiments."
    },
    {
      icon: GraduationCap,
      title: "Exam Preparation",
      description: "Specialized resources to prepare for KCSE biology papers 1, 2, and 3."
    }
  ];

  return (
    <div className="biology-page min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="hero-section relative h-[80vh] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-cover bg-center" 
             style={{backgroundImage: "url('/assets/images/herobio.jpg')"}}></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase">
                  Biology
                </span>
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Master <span className="text-emerald-400">Biology</span> with Interactive Learning
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Bring biological concepts to life with immersive visualizations, practice tools, and expert guidance designed for KCSE success.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/signup" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center">
                Start Learning <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="#features" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Overview */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How We Help You Master Biology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach combines visual learning, practice tools, and exam preparation to ensure your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Learning Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1559757296-c68c34d39551?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Biology visualization"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="animate-on-scroll order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Visual Learning That Makes Biology Click
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our interactive 3D models and animations break down complex biological concepts into easy-to-understand visual experiences.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                    <Dna className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">DNA & Cellular Processes</h3>
                    <p className="text-gray-600">Watch DNA replication, mitosis, and meiosis unfold step by step.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                    <HeartPulse className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Human Body Systems</h3>
                    <p className="text-gray-600">Explore interactive models of all major organ systems in the human body.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                    <TreePine className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Ecological Systems</h3>
                    <p className="text-gray-600">Visualize food webs, energy flow, and environmental interactions.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/demo" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                  See our visualizations in action <ArrowRight className="ml-2" size={18} />
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Comprehensive KCSE Biology Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured learning modules cover the entire biology syllabus with targeted lessons, practice questions, and visual aids.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biologyModules.map((module, index) => (
              <div
                key={module.title}
                className="animate-on-scroll"
              >
                <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl flex items-center justify-center">
                      <module.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{module.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-700 mb-3">Key Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, i) => (
                        <span key={i} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm">
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
                Targeted KCSE Biology Exam Preparation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our specialized preparation resources are designed to give you the confidence and skills to excel in all three biology papers.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-5 border border-emerald-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                      <BookOpen className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Paper 1 & 2 Mastery</h3>
                      <p className="text-gray-600">Comprehensive multiple-choice practice and structured answer guides for theoretical questions.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-5 border border-emerald-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                      <FlaskConical className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Paper 3 Practical Skills</h3>
                      <p className="text-gray-600">Virtual lab simulations to master specimen handling, microscopy, and experimental reporting.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-5 border border-emerald-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                      <BarChart4 className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Past Paper Analysis</h3>
                      <p className="text-gray-600">Detailed walkthroughs of previous KCSE biology papers with examiner insights and model answers.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/exam-prep" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:from-emerald-600 hover:to-green-700">
                  Prepare for KCSE Biology <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src="/assets/images/bio2.jpg"
                    alt="Biology exam preparation"
                    width={300}
                    height={700}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-10">
                  <Image 
                    src="/assets/images/bio1.jpg"
                    alt="Biology practical"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg col-span-2">
                  <Image 
                    src="/assets/images/bio3.jpg"
                    alt="Biology study group"
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Biology Success Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of students who have transformed their understanding of biology and achieved excellence in their exams.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="animate-on-scroll"
              >
                <div className="bg-white rounded-2xl p-6 shadow-md border border-emerald-100 text-center h-full">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                    <stat.icon size={28} className="text-white" />
                  </div>
                  
                  <div className="counter text-4xl font-bold text-gray-800 mb-2">
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who have improved their biology understanding and exam performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The interactive visualizations made complex concepts like cell division so much clearer. I could finally understand what was happening!",
                name: "Esther M.",
                school: "Form 4 Student, Nairobi"
              },
              {
                quote: "The KCSE exam preparation materials were excellent. I felt confident going into my biology papers and scored an A.",
                name: "David O.",
                school: "Form 4 Graduate, Mombasa"
              },
              {
                quote: "As a biology teacher, I recommend StudyBuddy to all my students. The visual explanations complement classroom learning perfectly.",
                name: "Ms. Wanjiku",
                school: "Biology Teacher, Nakuru"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="animate-on-scroll"
              >
                <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400" size={20} fill="#FACC15" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-6 flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
                  
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Biology Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join StudyBuddy and transform your understanding of biology with our interactive learning platform.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center">
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

export default BiologyPage;