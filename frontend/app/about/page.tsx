'use client';

import React, { useEffect, useRef } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Heart, 
  Star, 
  Trophy, 
  Lightbulb, 
  Rocket,
  CheckCircle,
  Quote,
  ArrowRight,
  PlayCircle,
  Calendar,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/about.scss';

const AboutPage = () => {
  const statsRef = useRef<HTMLElement>(null);

  // Counter animation for stats
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter');
          
          const animateCounter = (counter: Element) => {
            const target = parseInt(counter.textContent?.replace(/[^0-9]/g, '') || '0');
            const duration = 2000;
            const step = Math.ceil(target / (duration / 16));
            let current = 0;
            
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                counter.textContent = counter.textContent?.replace(/[0-9]+/, target.toString());
                clearInterval(timer);
              } else {
                counter.textContent = counter.textContent?.replace(/[0-9]+/, current.toString());
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

  // Add fade-in animation to elements when they come into view
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
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

  const stats = [
    { icon: Users, number: "15k+", label: "Students Enrolled", color: "from-emerald-400 to-green-500" },
    { icon: GraduationCap, number: "97%", label: "Completion Rate", color: "from-green-400 to-emerald-500" },
    { icon: Award, number: "200+", label: "Courses Available", color: "from-teal-400 to-emerald-500" },
    { icon: BookOpen, number: "50+", label: "Expert Instructors", color: "from-emerald-500 to-green-400" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence in Education",
      description: "We strive to provide the highest quality educational content tailored specifically for Kenyan high school students.",
      gradient: "from-emerald-400 to-green-500"
    },
    {
      icon: Heart,
      title: "Student-Centered Approach",
      description: "Every resource we create is designed with the student's success and understanding as our primary focus.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation in Learning",
      description: "We leverage technology and creative teaching methods to make learning engaging and effective.",
      gradient: "from-teal-400 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Empowering Futures",
      description: "We believe in empowering every student to reach their full potential and achieve their academic dreams.",
      gradient: "from-emerald-500 to-green-400"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Kimani",
      role: "Education Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Prof. David Maina",
      role: "Academic Lead",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Jane Odhiambo",
      role: "Technology Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Michael Wanjau",
      role: "Student Success Lead",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="about-page min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 overflow-hidden flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
        
        <div className="hero-particles absolute inset-0"></div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-on-scroll">
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase">
                  About StudyBuddy
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Empowering</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  Kenyan Students
                </span>
                <br />
                <span className="text-white">To Excel</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Since 2020, we've been on a mission to revolutionize high school education in Kenya. 
                Through innovative learning resources and dedicated support, we've helped thousands 
                of students achieve academic excellence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
                  Our Story <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center">
                  <PlayCircle className="mr-2" size={20} />
                  Watch Video
                </button>
              </div>
            </div>
            
            <div className="relative hidden lg:block animate-on-scroll">
              <div className="hero-image-container">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80" 
                  alt="Students learning together"
                  width={600}
                  height={700}
                  className="rounded-3xl object-cover student-image"
                />
                
                <div className="floating-badge top-badge">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg p-2 mr-3">
                        <Trophy className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Top Rated</p>
                        <p className="text-emerald-300 text-xs">Education Platform</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="floating-badge bottom-badge">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg p-2 mr-3">
                        <Users className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">15,000+</p>
                        <p className="text-emerald-300 text-xs">Students Nationwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-card bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center animate-on-scroll"
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

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-emerald-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="mb-8">
                <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
                  Our Mission
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Transforming Education in 
                  <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"> Kenya</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  At StudyBuddy, we believe every Kenyan high school student deserves access to world-class 
                  educational resources. Our mission is to bridge the gap between traditional learning methods 
                  and modern educational technology, creating an inclusive environment where every student can thrive.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Comprehensive curriculum aligned with Kenyan education system",
                    "Interactive learning experiences that engage and inspire",
                    "Personalized support to address individual learning needs",
                    "Affordable pricing to ensure accessibility for all families"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 animate-on-scroll"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="mission-image-container">
                <Image 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80" 
                  alt="Students in classroom"
                  width={600}
                  height={400}
                  className="rounded-3xl object-cover"
                />
                <div className="vision-card">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To create a future where every Kenyan student has the tools, resources, 
                      and support they need to achieve academic excellence and pursue their dreams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Our Core Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Our core values guide every decision we make and every resource we create, 
              ensuring we stay true to our mission of empowering Kenyan students.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="value-card group animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-emerald-600 relative overflow-hidden">
        {/* <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div> */}
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-white text-emerald-600 text-sm font-semibold px-4 py-1 rounded-full uppercase mb-4">
              Meet Our Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              The Minds Behind StudyBuddy
            </h2>
            <p className="text-emerald-100 text-xl max-w-3xl mx-auto leading-relaxed">
              Our team of dedicated educators and technology experts work tirelessly to 
              create the best learning experience for Kenyan students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="team-card group animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 group-hover:-translate-y-2 text-center overflow-hidden">
                  <div className="relative mb-6 rounded-2xl overflow-hidden team-image-container">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-72 team-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-300">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.84 10.835h1.765v-1.681c0-.753.19-1.916 1.043-2.629.868-.731 2.07-.731 3.954-.731h1.327v2.928h-1.765c-.258 0-.868.258-.868.995v1.118h2.634l-.322 2.908h-2.312v8.416h-3.691v-8.416H8.84v-2.908z"></path>
                          </svg>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-300">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.899a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                          </svg>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-300">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
                            <circle cx="11.994" cy="11.979" r="3.003"></circle>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-emerald-200 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Students Say
            </h2>
          </div>
          
          <div className="testimonials-slider">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "StudyBuddy transformed my approach to learning. Their comprehensive resources helped me excel in my KCSE exams and secure a spot at a top university.",
                  name: "Peter Njoroge",
                  school: "Alliance High School"
                },
                {
                  quote: "As a parent, I've seen remarkable improvement in my daughter's grades since she started using StudyBuddy. Their approach makes complex subjects accessible and engaging.",
                  name: "Mrs. Wanjiku",
                  school: "Parent"
                },
                {
                  quote: "The personalized learning experience that StudyBuddy provides is exceptional. Their platform identified my weak areas and helped me focus my studies effectively.",
                  name: "Faith Chebet",
                  school: "Kenya High School"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="testimonial-card animate-on-scroll"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full">
                    <Quote className="text-emerald-400 mb-6" size={48} />
                    <p className="text-gray-300 italic mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-emerald-400 text-sm">{testimonial.school}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-green-600 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join the StudyBuddy Family?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of Kenyan students who are already excelling with our comprehensive learning platform. 
              Your journey to academic excellence starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
                Start Learning Today <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;