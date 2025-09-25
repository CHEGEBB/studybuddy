// /subjects/english/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  BookOpen, 
  Feather, 
  BookText, 
  GraduationCap, 
  ArrowRight, 
  PlayCircle,
  Users,
  Clock,
  Award,
  MessageSquare,
  Bookmark,
  BookMarked,
  PenTool,
  Theater,
  Mic,
  LayoutGrid,
  Newspaper,
  ScrollText,
  Paperclip,
  LucideHeart,
  Star,
  Eye,
  Library,
  BarChart4,
  Sparkles,
  Brain,
  BookOpenCheck
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/english.scss';

const EnglishPage = () => {
  const [activeTab, setActiveTab] = useState('literature');
  const statsRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentReview, setCurrentReview] = useState(0);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroElement = heroRef.current;
        const heroBackground = heroElement.querySelector('.hero-background') as HTMLElement;
        if (heroBackground) {
          heroBackground.style.transform = `translateY(${scrollY * 0.4}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect for the hero section
  useEffect(() => {
    const textElement = document.querySelector('.typewriter-text');
    if (textElement) {
      const text = textElement.textContent || '';
      textElement.textContent = '';
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          textElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(typeWriter, 500);
    }
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

  // Add storybook page turning animation
  useEffect(() => {
    if (storyRef.current) {
      const storyPages = storyRef.current.querySelectorAll('.story-page');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('page-turned');
              }, index * 300);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      storyPages.forEach(page => observer.observe(page));
      
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

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Language modules data
  const languageModules = {
    literature: [
      {
        title: "The Artistry of Prose",
        icon: BookText,
        description: "Explore the beauty of prose writing, from classic novels to contemporary short stories.",
        duration: "3 weeks",
        topics: ["Novel Analysis", "Character Development", "Narrative Techniques", "Setting & Atmosphere"]
      },
      {
        title: "Poetic Expression",
        icon: Feather,
        description: "Discover the power of poetry through analysis of form, style, and emotive techniques.",
        duration: "4 weeks",
        topics: ["Poetic Forms", "Rhythm & Rhyme", "Imagery & Symbolism", "Poetic Voice"]
      },
      {
        title: "Dramatic Works",
        icon: Theater,
        description: "Uncover the world of plays and drama through textual and performance analysis.",
        duration: "3 weeks",
        topics: ["Shakespeare's Works", "Modern Drama", "Theatrical Elements", "Character Relationships"]
      }
    ],
    grammar: [
      {
        title: "Sentence Architecture",
        icon: LayoutGrid,
        description: "Master the building blocks of language through advanced sentence construction.",
        duration: "3 weeks",
        topics: ["Sentence Types", "Clauses & Phrases", "Subject-Verb Agreement", "Punctuation Mastery"]
      },
      {
        title: "Eloquent Expression",
        icon: MessageSquare,
        description: "Develop your ability to communicate with clarity, precision, and impact.",
        duration: "4 weeks",
        topics: ["Word Choice", "Tone & Voice", "Rhetorical Devices", "Concise Writing"]
      },
      {
        title: "Language Dynamics",
        icon: BookOpenCheck,
        description: "Understand how language evolves and adapts across different contexts and cultures.",
        duration: "3 weeks",
        topics: ["Language Variation", "Formal vs. Informal", "Cultural Influences", "Linguistic Change"]
      }
    ],
    writing: [
      {
        title: "Creative Writing Workshop",
        icon: PenTool,
        description: "Develop your creative voice through fiction, poetry, and experimental forms.",
        duration: "4 weeks",
        topics: ["Story Crafting", "Character Building", "Setting Creation", "Voice Development"]
      },
      {
        title: "Academic Writing",
        icon: BookMarked,
        description: "Master the skills of scholarly writing, research, and structured argument.",
        duration: "3 weeks",
        topics: ["Essay Structure", "Research Methods", "Citations & References", "Critical Analysis"]
      },
      {
        title: "Professional Communication",
        icon: Newspaper,
        description: "Learn effective business writing and professional communication strategies.",
        duration: "3 weeks",
        topics: ["Business Letters", "Email Etiquette", "Report Writing", "Proposal Development"]
      }
    ],
    kiswahili: [
      {
        title: "Fasihi ya Kiswahili",
        icon: Bookmark,
        description: "Chunguza kina cha fasihi ya Kiswahili kupitia riwaya, tamthilia na ushairi.",
        duration: "Wiki 3",
        topics: ["Uchambuzi wa Riwaya", "Mbinu za Lugha", "Tamthilia", "Ushairi wa Kiswahili"]
      },
      {
        title: "Sarufi na Matumizi",
        icon: ScrollText,
        description: "Jenga msingi imara wa sarufi ya Kiswahili na matumizi yake sahihi.",
        duration: "Wiki 4",
        topics: ["Ngeli za Nomino", "Vitenzi na Matumizi", "Sentensi na Aina Zake", "Matamshi Bora"]
      },
      {
        title: "Mawasiliano ya Kiswahili",
        icon: Mic,
        description: "Kuza uwezo wako wa kuwasiliana kwa ufasaha na mafanikio katika Kiswahili.",
        duration: "Wiki 3",
        topics: ["Insha za Kiswahili", "Hotuba na Mijadala", "Barua Rasmi", "Ripoti na Muhtasari"]
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
      icon: Brain, 
      number: "96%", 
      label: "Creative Writing Success", 
      color: "from-green-400 to-emerald-500" 
    },
    { 
      icon: Users, 
      number: "8500+", 
      label: "Language Students Enrolled", 
      color: "from-emerald-500 to-green-600" 
    },
    { 
      icon: GraduationCap, 
      number: "92%", 
      label: "KCSE Success Rate", 
      color: "from-green-500 to-emerald-600" 
    }
  ];

  // Famous quotes for inspiration
  const literaryQuotes = [
    {
      quote: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.",
      author: "J.K. Rowling"
    },
    {
      quote: "Lugha ni chombo cha mawasiliano, lakini pia ni hazina ya utamaduni wetu.",
      author: "Shaaban Robert"
    },
    {
      quote: "The most valuable of all talents is that of never using two words when one will do.",
      author: "Thomas Jefferson"
    }
  ];

  // Reviews data
  const reviews = [
    {
      quote: "The creative writing program unlocked a passion for storytelling I never knew I had. The mentors provided feedback that helped me develop my unique voice.",
      name: "Amina Wanjiku",
      relation: "Form 3 Student, Nairobi",
      image: "/assets/images/testimonial1.jpg"
    },
    {
      quote: "Nimeweza kuboresha Kiswahili changu kupitia kozi hii. Sasa naweza kuandika insha nzuri na kujieleza kwa ufasaha zaidi.",
      name: "James Ochieng",
      relation: "Form 4 Student, Kisumu",
      image: "/assets/images/testimonial2.jpg"
    },
    {
      quote: "The grammar lessons transformed my writing. I now understand how to structure sentences for maximum impact and clarity in both creative and academic contexts.",
      name: "Sarah Muthoni",
      relation: "Form 2 Student, Mombasa",
      image: "/assets/images/testimonial3.jpg"
    }
  ];

  // Featured literary resources
  const resources = [
    {
      title: "Advanced Essay Writing Guide",
      description: "A comprehensive approach to crafting compelling essays with structural techniques and stylistic guidance.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Writing Guide",
      downloads: "3.4k"
    },
    {
      title: "Poetry Analysis Toolkit",
      description: "Methods for interpreting and appreciating poetry from various traditions and time periods.",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Literary Analysis",
      downloads: "2.7k"
    },
    {
      title: "Kamusi ya Methali na Misemo",
      description: "Mkusanyiko wa methali na misemo ya Kiswahili pamoja na maana na matumizi yake.",
      image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Kiswahili",
      downloads: "4.2k"
    }
  ];

  // Paper offerings for English and Kiswahili
  const paperOfferings = [
    {
      title: "English Paper 1",
      icon: BookText,
      description: "Functional writing, cloze tests, and oral skills assessment covering practical communication.",
      skills: ["Letter Writing", "Speech Development", "Comprehension", "Report Writing"]
    },
    {
      title: "English Paper 2",
      icon: Bookmark,
      description: "Comprehensive comprehension, literary appreciation, and grammar exercises.",
      skills: ["Close Reading", "Literary Analysis", "Grammar Application", "Contextual Interpretation"]
    },
    {
      title: "English Paper 3",
      icon: PenTool,
      description: "Creative composition and essays based on literary texts and themes.",
      skills: ["Creative Writing", "Narrative Crafting", "Argumentative Essays", "Descriptive Writing"]
    },
    {
      title: "Kiswahili Karatasi ya 1",
      icon: Paperclip,
      description: "Insha na maswali ya ufahamu yanayopima uwezo wa kujieleza kwa ufasaha.",
      skills: ["Uandishi wa Insha", "Ufahamu", "Mawasiliano", "Utungaji"]
    },
    {
      title: "Kiswahili Karatasi ya 2",
      icon: ScrollText,
      description: "Ufupisho, sarufi, matumizi ya lugha na isimu jamii.",
      skills: ["Sarufi", "Ufupisho", "Matumizi ya Lugha", "Isimu Jamii"]
    },
    {
      title: "Kiswahili Karatasi ya 3",
      icon: Mic,
      description: "Fasihi, riwaya, tamthilia, hadithi fupi na ushairi.",
      skills: ["Uchambuzi wa Fasihi", "Uhakiki wa Riwaya", "Ushairi", "Tamthilia"]
    }
  ];

  return (
    <div className="english-page min-h-screen bg-white">
      <Navbar />
      
      {/* Enhanced Hero Section */}
<section 
  ref={heroRef}
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-green-800"
>
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    {/* Primary gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-emerald-900/80 to-transparent"></div>
    
    {/* Floating orbs */}
    <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
    
    {/* Grid pattern overlay */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
    </div>
  </div>

  {/* Main Content Container */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <div className="text-left space-y-8">
       
        
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold leading-none">
          Master <span className="block text-green-400">Language & Literature</span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
          Unlock the power of words through our comprehensive English and Kiswahili programs. 
          Transform your communication skills and excel in KCSE examinations.
        </p>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <BookOpen className="text-emerald-400 mr-2" size={18} />
            <span className="text-white font-medium">Creative Writing</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Feather className="text-emerald-400 mr-2" size={18} />
            <span className="text-white font-medium">Poetry Analysis</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <MessageSquare className="text-emerald-400 mr-2" size={18} />
            <span className="text-white font-medium">Grammar Mastery</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center justify-center">
            Start Learning Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
          
          <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
            <PlayCircle className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
            Watch Demo
          </button>
        </div>
        
        {/* Stats */}
        <div className="flex items-center gap-8 pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">94%</div>
            <div className="text-emerald-300 text-sm">Success Rate</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">8.5K+</div>
            <div className="text-emerald-300 text-sm">Students</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">5★</div>
            <div className="text-emerald-300 text-sm">Rating</div>
          </div>
        </div>
      </div>
      
      {/* Right Visual Content */}
      <div className="relative hidden lg:block">
        <div className="relative w-full h-[600px]">
          
          {/* Central Book/Learning Visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Main book */}
              <div className="w-80 h-96 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="p-8 h-full flex flex-col">
                  <div className="text-emerald-600 text-2xl font-bold mb-4">English Literature</div>
                  <div className="flex-1 space-y-3">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-2 bg-emerald-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="mt-auto pt-4">
                    <div className="text-sm text-gray-500">Chapter 3: Poetry Analysis</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Feather className="text-white" size={24} />
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <BookText className="text-white" size={28} />
              </div>
              
              <div className="absolute top-1/3 -right-12 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shadow-lg animate-ping">
                <Star className="text-white" size={16} />
              </div>
            </div>
          </div>
          
          {/* Floating quote cards */}
          <div className="absolute top-16 left-0 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs animate-float">
            <div className="text-emerald-600 text-sm font-semibold mb-2">Student Achievement</div>
            <div className="text-gray-700 text-sm">"I improved my essay writing by 40% in just 3 months!"</div>
            <div className="text-xs text-gray-500 mt-2">- Sarah M., Form 3</div>
          </div>
          
          <div className="absolute bottom-16 right-0 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs animate-float delay-1000">
            <div className="text-green-600 text-sm font-semibold mb-2">KCSE Success</div>
            <div className="text-gray-700 text-sm">"Scored A- in both English papers!"</div>
            <div className="text-xs text-gray-500 mt-2">- James K., Graduate</div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>

<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .delay-1000 {
    animation-delay: 1s;
  }
`}</style>
      
      {/* Literary Quote Showcase */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="quote-carousel flex flex-nowrap overflow-hidden">
              {[...literaryQuotes, ...literaryQuotes].map((quote, index) => (
                <div 
                  key={index}
                  className="quote-card min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4 py-8"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 h-full">
                    <div className="quote-mark text-6xl text-emerald-200 leading-none mb-4">"</div>
                    <p className="text-xl text-gray-700 italic mb-6">{quote.quote}</p>
                    <p className="text-emerald-600 font-medium">— {quote.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Overview - Literary Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookText,
                title: "Storytelling Sanctuary",
                description: "Immerse yourself in the art of narrative, exploring character development, plot structure, and thematic depth."
              },
              {
                icon: Feather,
                title: "Poetry & Prose Pavilion",
                description: "Discover the beauty of language through poetic forms, literary devices, and expressive techniques."
              },
              {
                icon: MessageSquare,
                title: "Grammar Garden",
                description: "Cultivate precision in language through mastery of grammar as the architecture of meaningful expression."
              },
              {
                icon: Mic,
                title: "Oral Tradition Theatre",
                description: "Develop powerful speaking skills through debate, presentation, and the performance of written works."
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

      {/* Storybook Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-green-50 to-transparent opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              The Literary Journey
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Our language curriculum is designed as a transformative narrative, guiding students through 
              chapters of linguistic discovery and creative exploration.
            </p>
          </div>
          
          <div ref={storyRef} className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <div className="storybook-container relative">
                <div className="storybook bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="storybook-cover bg-gradient-to-br from-emerald-700 to-green-900 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-3">The Language Odyssey</h3>
                    <p className="text-emerald-200 italic">A journey through words and worlds</p>
                  </div>
                  
                  <div className="storybook-pages">
                    {[
                      {
                        chapter: "Chapter 1: The Awakening",
                        content: "Every writer begins with curiosity—a desire to capture thoughts and emotions through the perfect arrangement of words. Our foundation courses nurture this awakening through guided exploration of language fundamentals."
                      },
                      {
                        chapter: "Chapter 2: Crafting Voices",
                        content: "As students develop their skills, they discover their unique literary voice. Through creative exercises and structural guidance, they learn to express themselves with authenticity and power."
                      },
                      {
                        chapter: "Chapter 3: Literary Landscapes",
                        content: "Exploring the works of diverse authors expands students' understanding of what's possible in writing. They analyze techniques, themes, and cultural contexts to enrich their own creative approach."
                      },
                      {
                        chapter: "Chapter 4: The Writer's Metamorphosis",
                        content: "Advanced students transform into confident communicators, wielding grammar, vocabulary, and literary devices with precision to create compelling narratives in both creative and academic contexts."
                      }
                    ].map((page, index) => (
                      <div key={index} className="story-page bg-emerald-50 p-6 border-b border-emerald-100">
                        <h4 className="text-xl font-bold text-emerald-800 mb-3">{page.chapter}</h4>
                        <p className="text-gray-700 leading-relaxed">{page.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-10 -left-10 z-0 w-24 h-24 bg-emerald-100 rounded-full opacity-50"></div>
                <div className="absolute -top-10 -right-10 z-0 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-0">
                  <Feather size={48} className="text-emerald-200" />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll">
              <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
                Narrative-Based Learning
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Stories That Transform
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe in the power of narrative to engage, inspire, and transform. Our curriculum treats language learning as a story unfolding, with each student as both protagonist and author of their educational journey.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: BookOpen,
                    title: "Character Development",
                    description: "Students develop their unique voice and perspective through guided writing exercises and personal reflection."
                  },
                  {
                    icon: LayoutGrid,
                    title: "Plot Structure",
                    description: "Our curriculum follows a narrative arc that builds skills progressively, creating a coherent learning journey."
                  },
                  {
                    icon: Sparkles,
                    title: "Thematic Exploration",
                    description: "Core themes like identity, culture, and human experience connect learning across different language domains."
                  },
                  {
                    icon: Eye,
                    title: "Perspective Shifts",
                    description: "Students explore multiple viewpoints through diverse texts and collaborative discussions."
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
                  Begin Your Story <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section with Tabs */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-green-50 to-transparent opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Language Curriculum
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Language Learning Modules
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Our comprehensive language curriculum covers all key areas of the KCSE syllabus for both 
              English and Kiswahili, organized into focused modules with creative approaches.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4 animate-on-scroll">
            {[
              { id: 'literature', label: 'Literature', icon: BookText },
              { id: 'grammar', label: 'Grammar & Linguistics', icon: MessageSquare },
              { id: 'writing', label: 'Writing Skills', icon: PenTool },
              { id: 'kiswahili', label: 'Kiswahili', icon: Mic }
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
            {(languageModules[activeTab as keyof typeof languageModules] || []).map((module, index) => (
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
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                            <BookOpenCheck className="text-emerald-500 mr-2 flex-shrink-0 mt-1" size={16} />
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
            <Link href="/courses" className="inline-flex items-center bg-white border border-green-200 hover:border-green-300 text-green-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
              View All Language Modules <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Creative Writing Workshop */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
                Creative Expression
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Creative Writing Workshop
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Discover the joy of creative expression through our guided writing workshops, where students develop their unique voice, explore diverse genres, and master the craft of storytelling.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: BookText,
                    title: "Narrative Crafting",
                    description: "Learn the elements of compelling storytelling through character development, plot structure, and world-building."
                  },
                  {
                    icon: Feather,
                    title: "Poetic Expression",
                    description: "Explore various poetic forms and techniques to capture emotions and ideas with precision and beauty."
                  },
                  {
                    icon: Newspaper,
                    title: "Literary Journalism",
                    description: "Develop skills in observation, interviewing, and crafting true stories with literary techniques."
                  },
                  {
                    icon: Theater,
                    title: "Dramatic Writing",
                    description: "Create engaging dialogue and dramatic scenes that captivate readers and audiences."
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
                  Join Writing Workshop <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="creative-writing-container bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50 rounded-full opacity-30 transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-50 rounded-full opacity-30 transform -translate-x-1/4 translate-y-1/4"></div>
                
                <div className="typewriter-scene relative z-10">
                  <div className="writing-sample bg-emerald-50 rounded-2xl p-6 mb-8 shadow-inner">
                    <h3 className="text-xl font-bold text-emerald-800 mb-4">A Student's Journey</h3>
                    <div className="prose text-gray-700">
                      <p className="typewriter-effect">The words appeared on the page, hesitant at first, like raindrops before a storm. But soon they flowed freely, creating rivers of thought and oceans of possibility.</p>
                      <p className="typewriter-effect" style={{ animationDelay: '3s' }}>Through our workshop, I discovered my voice—a unique blend of experiences, observations, and imagination that no one else possesses.</p>
                      <p className="typewriter-effect" style={{ animationDelay: '6s' }}>Now, writing isn't just an assignment. It's how I explore the world, both real and imagined.</p>
                    </div>
                    <div className="mt-4 text-right">
                      <span className="text-emerald-600 font-medium italic">— Form 3 Student</span>
                    </div>
                  </div>
                  
                  <div className="writing-tools flex flex-wrap gap-4 justify-center">
                    {[
                      { name: "Character Profile", icon: Users },
                      { name: "Plot Structure", icon: LayoutGrid },
                      { name: "Setting Details", icon: Eye },
                      { name: "Dialogue Practice", icon: MessageSquare }
                    ].map((tool, index) => (
                      <div key={index} className="writing-tool bg-white rounded-xl p-4 border border-emerald-100 shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-3">
                        <tool.icon size={20} className="text-emerald-500" />
                        <span className="font-medium text-gray-700">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="writing-progress mt-8">
                    <h4 className="font-semibold text-gray-700 mb-3">Workshop Progress</h4>
                    <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full w-[65%]"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>Foundations</span>
                      <span>Character Development</span>
                      <span>Final Project</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KCSE Exam Papers Showcase */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 library-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              KCSE Preparation
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Mastering KCSE Language Papers
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Our specialized KCSE preparation resources are designed to give Kenyan students the confidence and skills 
              to excel in their English and Kiswahili examinations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paperOfferings.map((paper, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100 animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <paper.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{paper.title}</h3>
                <p className="text-gray-600 mb-6">{paper.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-700">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {paper.skills.map((skill, i) => (
                      <span key={i} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full flex items-center justify-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-300 mt-4 pt-4 border-t border-gray-100">
                  Explore Practice Papers <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Link href="/kcse-prep" className="inline-flex items-center bg-white border border-green-200 hover:border-green-300 text-green-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
              View All KCSE Resources <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section 
        ref={statsRef}
        className="py-24 bg-gradient-to-br from-emerald-900 to-green-800 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3')"
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-green-200 text-xl max-w-3xl mx-auto leading-relaxed">
              Our language programs have helped thousands of Kenyan students improve their 
              communication skills and achieve outstanding results in their examinations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="stat-card bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="stat-icon-container mb-6 mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center">
                  <stat.icon size={36} className="text-white" />
                </div>
                
                <h3 className="counter text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-green-200">{stat.label}</p>
                
                <div className="mt-6 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${stat.color} rounded-full stat-progress`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources with Card Images */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Learning Resources
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Featured Language Resources
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Access high-quality study materials designed specifically for Kenyan students preparing 
              for KCSE English and Kiswahili examinations.
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
            <Link href="/resources" className="inline-flex items-center bg-white border border-green-200 hover:border-green-300 text-green-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
              Browse All Language Resources <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials with Scrolling Carousel */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Student Voices
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Words From Our Students
            </h2>
          </div>
          
          <div className="testimonial-carousel relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="min-w-full">
                    <div className="bg-white p-8 md:p-12 relative">
                      <div className="absolute top-6 left-6 text-7xl text-emerald-200 opacity-50 font-serif">"</div>
                      
                      <div className="relative z-10">
                        <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                          {review.quote}
                        </p>
                        
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded-full bg-emerald-100 overflow-hidden relative mr-4">
                            <Image 
                              src={review.image} 
                              alt="Student photo"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-bold text-gray-800 text-lg">{review.name}</div>
                            <div className="text-emerald-600">{review.relation}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentReview === index ? 'bg-emerald-500 w-8' : 'bg-emerald-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
              <button 
                onClick={() => setCurrentReview(prev => (prev - 1 + reviews.length) % reviews.length)}
                className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowRight size={20} className="text-emerald-600 transform rotate-180" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
              <button 
                onClick={() => setCurrentReview(prev => (prev + 1) % reviews.length)}
                className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowRight size={20} className="text-emerald-600" />
              </button>
            </div>
          </div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <Link href="/testimonials" className="inline-flex items-center bg-white border border-green-200 hover:border-green-300 text-green-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
              Read More Success Stories <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 library-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Begin Your Literary Journey Today
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of Kenyan students who have discovered the power of language mastery 
              and developed their authentic voice through our English and Kiswahili programs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center cta-button-pulse">
                Start Your Story <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Explore Sample Lessons
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: "Expert", label: "Language Tutors" },
                { number: "100%", label: "KCSE Aligned" },
                { number: "Weekly", label: "Writing Workshops" },
                { number: "Personal", label: "Feedback & Growth" },
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

export default EnglishPage;