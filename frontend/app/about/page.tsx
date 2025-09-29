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
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  X,
  Instagram,
  LucideTwitter
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
      name: "Sarah Nafula",
      role: "Education Director",
      image: "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "David Maina",
      role: "Academic Lead",
      image: "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Jane Wanjiru",
      role: "Technology Director",
      image: "/assets/images/image.jpg"
    },
    {
      name: "Michael Odhiambo",
      role: "Student Success Lead",
      image: "https://images.unsplash.com/photo-1617244147299-5ef406921c35?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="about-page min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 overflow-hidden flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/assets/images/studen.jpg')"
          }}
        ></div>
        
        <div className="hero-particles absolute inset-0"></div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-on-scroll">
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase ">
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
                  src="/assets/images/hero.png" 
                  alt="Students learning together"
                  width={800}
                  height={1000}
                  className=" object-cover student-image shadow-2xl"
                />
                
                <div className="floating-badge top-badge">
                  <div className="bg-[#85E092] backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-cyan-400 to-green-500 rounded-lg p-2 mr-3">
                        <Trophy className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Top Rated</p>
                        <p className="text-white text-xs">Education Platform</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="floating-badge bottom-badge">
                  <div className="bg-[#36B9AE] backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-cyan-400 to-green-500 rounded-lg p-2 mr-3">
                        <Users className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">15,000+</p>
                        <p className="text-white text-xs">Students Nationwide</p>
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
                className="stat-card bg-white  p-8  border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center animate-on-scroll"
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
        <div className="mission-images-container relative h-[600px] w-full ">
          {/* Top Left Image */}
          <div className="absolute -top-2 left-0 w-48 h-48 md:w-56 md:h-60 lg:w-64 lg:h-70 rounded-[30px] overflow-hidden border-6 border-white/20 shadow-2xl animate-on-scroll">
            <Image 
              src="https://images.unsplash.com/photo-1669929949688-44fe908e7709?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Student learning online"
              width={256}
              height={256}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Bottom Left Image */}
          <div className="absolute top-40 left-8 md:top-48 md:left-12 lg:top-70 lg:-left-1 w-48 h-44 md:w-48 md:h-48 lg:w-64 lg:h-56 rounded-[30px] overflow-hidden border-6 border-white/20 shadow-2xl animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <Image 
              src="https://images.unsplash.com/photo-1747173708417-06828e9970ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional educator"
              width={224}
              height={224}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Right Large Image */}
          <div className="absolute -top-8 right-0 lg:left-84 w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-110 rounded-3xl overflow-hidden border-6 border-white/20 shadow-2xl animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <Image 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80"
              alt="Students in classroom"
              width={288}
              height={384}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Vision Card Overlay */}
          <div className="absolute bottom-0 right-4 lg:right-8 w-48 md:w-56 lg:w-64 vision-card animate-on-scroll" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/20 shadow-xl">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-4">Our Vision</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                To create a future where every Kenyan student has the tools, resources, 
                and support they need to achieve academic excellence and pursue their dreams.
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          {/* <div className="absolute bottom-16 left-16 w-16 h-16 md:w-20 md:h-20 bg-emerald-500/20 rounded-full flex items-center justify-center shadow-lg animate-on-scroll backdrop-blur-sm border border-emerald-400/30" style={{ animationDelay: '0.8s' }}>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
              <Trophy className="text-white w-4 h-4 md:w-6 md:h-6" />
            </div>
          </div> */}
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
<section className="py-24 bg-gray-100 relative overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute top-20 left-10 w-20 h-20">
    <div className="grid grid-cols-4 gap-1">
      {[...Array(16)].map((_, i) => (
        <div key={i} className="w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
      ))}
    </div>
  </div>
  
  <div className="absolute top-32 right-20 w-16 h-16">
    <div className="grid grid-cols-3 gap-1">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-3 h-3 bg-teal-400 rounded-full opacity-50"></div>
      ))}
    </div>
  </div>

  {/* Kite/Paper Plane */}
  <div className="absolute top-16 right-32">
    <svg width="60" height="60" viewBox="0 0 60 60" className="text-pink-300 opacity-70">
      <path d="M30 5L45 20L30 35L15 20Z" fill="currentColor" stroke="white" strokeWidth="2"/>
      <path d="M30 35L35 55L30 50L25 55Z" fill="currentColor" opacity="0.7"/>
    </svg>
  </div>

  {/* Cloud decorations */}
  <div className="absolute top-40 left-1/4">
    <svg width="40" height="25" viewBox="0 0 40 25" className="text-blue-200 opacity-60">
      <path d="M10 15a5 5 0 0 1 5-5h4a8 8 0 1 1 11 7.5H10z" fill="currentColor"/>
    </svg>
  </div>

  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <span className="inline-block bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-full uppercase mb-4 tracking-wide">
        👥 OUR TEAM MEMBERS
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
        Meet Our Great Teachers
        <br />
        <span className="text-gray-700">& Best Instructors</span>
      </h2>
      <div className="flex justify-end mb-8">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
          VIEW ALL TEAM
        </button>
      </div>
    </div>
    
    {/* Team Cards Layout - First Row: 4 cards */}
    <div className="flex justify-center gap-6 mb-12 max-w-6xl mx-auto">
      {team.slice(0, 4).map((member, index) => {
        const colors = [
          { bg: 'bg-emerald-500', text: 'text-white' },
          { bg: 'bg-green-500', text: 'text-white' },
          { bg: 'bg-teal-500', text: 'text-white' },
          { bg: 'bg-emerald-400', text: 'text-white' }
        ];
        const colorSet = colors[index % colors.length];
        
        return (
          <div
            key={member.name}
            className="team-card group relative"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`${colorSet.bg} rounded-full w-72 h-96 flex flex-col items-center justify-end text-center transition-all duration-500 group-hover:scale-105 relative overflow-hidden shadow-xl cursor-pointer`}>
              {/* Social Media Icons - appear on hover */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 bg-green-400 bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500 hover:scale-110 transition-all duration-300 shadow-lg">
                    <Facebook className="w-5 h-5 text-white hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-400  bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500 hover:scale-110 transition-all duration-300 shadow-lg">
                    <LucideTwitter className="w-5 h-5 text-white hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-400  bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500 hover:scale-110 transition-all duration-300 shadow-lg">
                    <Linkedin className="w-5 h-5 text-white hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-400  bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500 hover:scale-110 transition-all duration-300 shadow-lg">
                    <Instagram className="w-5 h-5 text-white hover:text-white" />
                  </a>
                </div>
              </div>
              
              {/* Member Photo - positioned from bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={288}
                  height={394}
                  className="object-cover object-top w-full h-full rounded-full"
                />
              </div>
              
              {/* Member Info - positioned at bottom with background */}
              <div className="relative z-10  bg-green-400/80 bg-opacity-40 w-full py-6 px-4 rounded-b-full">
                <h3 className={`text-xl font-bold ${colorSet.text} mb-1`}>{member.name}</h3>
                <p className={`${colorSet.text} text-sm font-medium opacity-90 uppercase tracking-wide`}>
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Second Row - Single centered card if exists */}
    {team.length > 4 && (
      <div className="flex justify-center">
        <div className="team-card group relative" style={{ animationDelay: `${4 * 0.2}s` }}>
          <div className="bg-emerald-500 rounded-full w-72 h-96 flex flex-col items-center justify-end text-center transition-all duration-500 group-hover:scale-105 relative overflow-hidden shadow-xl cursor-pointer">
            {/* Social Media Overlay */}
            <div className="absolute inset-0 bg-emerald-600 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex items-center justify-center z-20">
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white bg-opacity-25 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-40 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white bg-opacity-25 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-40 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white bg-opacity-25 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-40 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white bg-opacity-25 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-40 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"/>
                    <circle cx="11.994" cy="11.979" r="3.003"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Member Photo - positioned from bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full">
              <Image 
                src={team[4].image} 
                alt={team[4].name}
                width={288}
                height={384}
                className="object-cover object-top w-full h-full rounded-full"
              />
            </div>
            
            {/* Member Info - positioned at bottom with background */}
            <div className="relative z-10 bg-black bg-opacity-40 w-full py-6 px-4 rounded-b-full">
              <h3 className="text-xl font-bold text-white mb-1">{team[4].name}</h3>
              <p className="text-white text-sm font-medium opacity-90 uppercase tracking-wide">
                {team[4].role}
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
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
      <section className="py-24 bg-gradient-to-r from-emerald-400 to-green-600 relative overflow-hidden">
        {/* <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div> */}
        
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