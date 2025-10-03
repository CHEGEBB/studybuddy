'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  CheckCircle, 
  X, 
  Award, 
  Target, 
  Users, 
  GraduationCap,
  Trophy,
  ArrowRight,
  Star,
  Calendar,
  BookOpen,
  Clock,
  PlayCircle,
  TrendingUp,
  Zap,
  Shield
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/pricing.scss';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('weekly');
  const pricingRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  
  // Handle parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
      
      if (heroImageRef.current) {
        const scrollY = window.scrollY;
        heroImageRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate elements when they come into view
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

  // Floating badges animation
  useEffect(() => {
    const badges = document.querySelectorAll('.floating-badge');
    badges.forEach((badge, index) => {
      const element = badge as HTMLElement;
      element.style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  // Plans data with KSH pricing
  const plans = [
    {
      name: 'Basic Plan',
      price: { weekly: '500', monthly: '1,800', yearly: '18,500' },
      description: 'Perfect for individual students who want to improve their grades.',
      features: [
        'Access all courses',
        'Online e-learning platform',
        'Create a zoom id access',
        'Monthly reported guardian',
        'Basic study materials',
        '24/7 Support',
      ],
      icon: <Trophy className="text-white" size={24} />,
      color: 'from-orange-400 to-orange-500',
      popular: false
    },
    {
      name: 'Standard Plan',
      price: { weekly: '800', monthly: '2,900', yearly: '29,500' },
      description: 'Ideal for serious students preparing for national exams.',
      features: [
        'Access all courses',
        'Online e-learning platform',
        'Create a zoom id access',
        'Monthly reported guardian',
        'Practice exams & quizzes',
        'Personalized study plan',
        'Weekly tutor sessions',
        '24/7 Priority Support',
      ],
      icon: <Target className="text-white" size={24} />,
      color: 'from-green-400 to-emerald-500',
      popular: true
    },
    {
      name: 'Advance Plan',
      price: { weekly: '1,100', monthly: '3,900', yearly: '39,500' },
      description: 'Comprehensive support for students aiming for top performance.',
      features: [
        'Access all courses',
        'Online e-learning platform',
        'Create a zoom id access',
        'Monthly reported guardian',
        'Advanced study materials',
        'Daily tutor access',
        'Mock exams with feedback',
        'Performance analytics',
        'Career guidance',
        '24/7 VIP Support',
      ],
      icon: <Award className="text-white" size={24} />,
      color: 'from-blue-400 to-indigo-500',
      popular: false
    },
    {
      name: 'Premium Plan',
      price: { weekly: '1,400', monthly: '4,900', yearly: '49,500' },
      description: 'The ultimate package for elite academic achievement.',
      features: [
        'Access all courses',
        'Online e-learning platform',
        'Create a zoom id access',
        'Monthly reported guardian',
        'All Standard & Advance features',
        'One-on-one mentorship',
        'Parental progress meetings',
        'University application guidance',
        'Scholarship opportunities',
        'Lifetime alumni network',
        '24/7 Concierge Support',
      ],
      icon: <Trophy className="text-white" size={24} />,
      color: 'from-purple-400 to-pink-500',
      popular: false
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'How does the billing cycle work?',
      answer: 'We offer weekly, monthly, and yearly subscription options. Choosing a yearly plan provides significant savings compared to the weekly or monthly options. You can switch between billing cycles at any time.',
    },
    {
      question: 'Can I switch between plans?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you\'ll be charged the prorated difference. If you downgrade, your new rate will apply at the next billing cycle.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 7-day free trial for all our plans. You can experience the full features of your chosen plan before being charged.',
    },
    {
      question: 'How do the online tutoring sessions work?',
      answer: 'Tutoring sessions are conducted via Zoom. Once you subscribe to a plan that includes tutoring, you\'ll gain access to our scheduling system where you can book sessions with our qualified tutors.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our services. Contact our support team to process your refund.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept M-Pesa, bank transfers, and major credit/debit cards. All payments are processed securely through our payment partners.',
    }
  ];

  // Features comparison data
  const featureComparison = [
    { name: 'Video Lessons', basic: true, standard: true, advance: true, premium: true },
    { name: 'Study Notes', basic: true, standard: true, advance: true, premium: true },
    { name: 'Practice Tests', basic: true, standard: true, advance: true, premium: true },
    { name: 'Live Classes', basic: false, standard: true, advance: true, premium: true },
    { name: 'Doubt Clearing', basic: false, standard: true, advance: true, premium: true },
    { name: '1-on-1 Mentorship', basic: false, standard: false, advance: true, premium: true },
    { name: 'Career Guidance', basic: false, standard: false, advance: true, premium: true },
    { name: 'Parent Meetings', basic: false, standard: false, advance: false, premium: true }
  ];

  const getCycleText = () => {
    if (billingCycle === 'weekly') return 'week';
    if (billingCycle === 'monthly') return 'month';
    return 'year';
  };

  const getSavingsText = () => {
    if (billingCycle === 'yearly') return 'Save up to KSh 10,300 annually';
    if (billingCycle === 'monthly') return 'Save up to KSh 1,500/month';
    return '';
  };

  return (
    <div className="pricing-page min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section relative pt-24 pb-32 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1651340981821-b519ad14da7c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        ></div>
        
        <div className="hero-particles absolute inset-0"></div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="mb-6 animate-on-scroll">
                <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase">
                  Affordable Pricing Plans
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <span className="text-white">Invest in Your</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  Academic Future
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                Choose the perfect plan that fits your educational needs and budget. 
                All plans include access to our core learning platform with varying levels 
                of personalized support and advanced features.
              </p>

              <div className="flex flex-wrap gap-4 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
                  View Plans <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center">
                  <PlayCircle className="mr-2" size={20} />
                  Watch Demo
                </button>
              </div>
              
              <div className="mt-12 animate-on-scroll" style={{ animationDelay: '0.5s' }}>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center">
                    <CheckCircle className="text-emerald-400 mr-2" size={20} />
                    <span className="text-gray-300">No credit card required</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-emerald-400 mr-2" size={20} />
                    <span className="text-gray-300">7-day free trial</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-emerald-400 mr-2" size={20} />
                    <span className="text-gray-300">Cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Floating Person Image */}
            <div className="relative hidden lg:block animate-on-scroll" style={{ animationDelay: '0.6s' }}>
              <div 
                ref={heroImageRef}
                className="relative z-10"
              >
                {/* Main Image Container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <Image 
                      src="/assets/images/kenyan.png" 
                      alt="Kenyan Student" 
                      width={500}
                      height={600}
                      className="rounded-2xl object-cover"
                    />
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="floating-badge absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-2xl border border-emerald-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-medium">Grade Improvement</div>
                      <div className="text-2xl font-bold text-gray-800">+2 Grades</div>
                    </div>
                  </div>
                </div>

                <div className="floating-badge absolute top-1/4 -right-12 bg-white rounded-2xl p-4 shadow-2xl border border-blue-100 animate-float" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                      <Star className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-medium">Student Rating</div>
                      <div className="text-2xl font-bold text-gray-800">4.9/5</div>
                    </div>
                  </div>
                </div>

                <div className="floating-badge absolute bottom-12 -left-12 bg-white rounded-2xl p-4 shadow-2xl border border-purple-100 animate-float" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-medium">Active Students</div>
                      <div className="text-2xl font-bold text-gray-800">15,000+</div>
                    </div>
                  </div>
                </div>

                <div className="floating-badge absolute bottom-1/3 -right-8 bg-white rounded-2xl p-4 shadow-2xl border border-orange-100 animate-float" style={{ animationDelay: '0.9s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <Zap className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                      <div className="text-2xl font-bold text-gray-800">94%</div>
                    </div>
                  </div>
                </div>

                <div className="floating-badge absolute top-1/2 left-0 bg-white rounded-2xl p-4 shadow-2xl border border-green-100 animate-float" style={{ animationDelay: '1.2s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Shield className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-medium">Money Back</div>
                      <div className="text-lg font-bold text-gray-800">30 Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section 
        ref={pricingRef}
        className="pricing-plans-section py-24 bg-white relative -mt-16 rounded-t-[3rem] z-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-16 animate-on-scroll">
            <div className="bg-white p-1.5 rounded-full shadow-md inline-flex items-center flex-wrap gap-2">
              <button 
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'weekly' ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setBillingCycle('weekly')}
              >
                Weekly
              </button>
              <button 
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
                <span className="ml-2 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-full">Save 10%</span>
              </button>
              <button 
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'yearly' ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly
                <span className="ml-2 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`pricing-card group animate-on-scroll relative ${plan.popular ? 'lg:scale-105 z-10' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full flex flex-col ${plan.popular ? 'border-green-500/50 ring-1 ring-green-500/50' : ''}`}>
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{plan.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-lg font-medium text-gray-600">KSh</span>
                      <span className="text-4xl font-bold text-gray-800 ml-1">
                        {billingCycle === 'weekly' ? plan.price.weekly : billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                      </span>
                      <span className="text-gray-500 ml-2">/{getCycleText()}</span>
                    </div>
                    {(billingCycle === 'monthly' || billingCycle === 'yearly') && (
                      <div className="text-emerald-600 text-sm font-medium mt-2">
                        {getSavingsText()}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`mt-auto w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center ${plan.popular ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                    Join Now
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-gray-500 mb-6">Need a custom plan for your school or organization?</p>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-medium transition-all duration-300">
              Contact us for custom pricing
            </button>
          </div>
        </div>
      </section>

      {/* Features Comparison Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Features Comparison
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Compare Our Plans
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              See which plan offers the features you need to achieve your academic goals.
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-xl shadow-lg animate-on-scroll">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold border-b">Features</th>
                  <th className="py-4 px-6 text-center text-gray-700 font-semibold border-b">Basic</th>
                  <th className="py-4 px-6 text-center text-gray-700 font-semibold border-b">Standard</th>
                  <th className="py-4 px-6 text-center text-gray-700 font-semibold border-b">Advance</th>
                  <th className="py-4 px-6 text-center text-gray-700 font-semibold border-b">Premium</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-6 text-gray-800 font-medium border-b">{feature.name}</td>
                    <td className="py-4 px-6 text-center border-b">
                      {feature.basic ? 
                        <CheckCircle className="text-emerald-500 mx-auto" size={20} /> : 
                        <X className="text-gray-400 mx-auto" size={20} />
                      }
                    </td>
                    <td className="py-4 px-6 text-center border-b">
                      {feature.standard ? 
                        <CheckCircle className="text-emerald-500 mx-auto" size={20} /> : 
                        <X className="text-gray-400 mx-auto" size={20} />
                      }
                    </td>
                    <td className="py-4 px-6 text-center border-b">
                      {feature.advance ? 
                        <CheckCircle className="text-emerald-500 mx-auto" size={20} /> : 
                        <X className="text-gray-400 mx-auto" size={20} />
                      }
                    </td>
                    <td className="py-4 px-6 text-center border-b">
                      {feature.premium ? 
                        <CheckCircle className="text-emerald-500 mx-auto" size={20} /> : 
                        <X className="text-gray-400 mx-auto" size={20} />
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Parallax Testimonial Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Fixed background image */}
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-emerald-900 opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl animate-on-scroll"
            ref={testimonialsRef}
          >
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-50 blur-xl"></div>
                  <div className="absolute inset-2 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                    <Star className="text-white w-20 h-20" />
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 text-white">
                <h3 className="text-3xl font-bold mb-6">Trusted by Over 15,000 Students Across Kenya</h3>
                <p className="text-xl mb-6 leading-relaxed italic text-emerald-100">
                  &ldquo;StudyBuddy has completely transformed my academic performance. The Standard Plan provided 
                  exactly what I needed to excel in my national exams. The personalized study plan 
                  and weekly tutor sessions made all the difference.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JM</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">James Mwangi</div>
                    <div className="text-emerald-200 text-sm">Achieved A- in KCSE, now at University of Nairobi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Common Questions
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our pricing plans and how they work.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="faq-item bg-gray-50 rounded-2xl p-6 shadow-sm animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions? We&apos;re here to help.</p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center mx-auto">
                Contact Support
                <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20">
          <div className="grid grid-cols-4 gap-1">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-emerald-400 rounded-full opacity-60"></div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-32 right-20 w-16 h-16">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-green-400 rounded-full opacity-50"></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Why Choose StudyBuddy
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Benefits of Our Platform
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Here&apos;s why thousands of Kenyan students trust StudyBuddy for their academic success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="text-white" size={24} />,
                title: "Comprehensive Curriculum",
                description: "Our courses cover the entire Kenyan high school curriculum, carefully aligned with the latest KCSE syllabus.",
                color: "from-emerald-400 to-green-500"
              },
              {
                icon: <GraduationCap className="text-white" size={24} />,
                title: "Expert Educators",
                description: "Learn from Kenya's top teachers with proven track records of helping students achieve excellent results.",
                color: "from-green-400 to-emerald-500"
              },
              {
                icon: <Clock className="text-white" size={24} />,
                title: "Flexible Learning",
                description: "Study anytime, anywhere with our 24/7 accessible platform. Perfect for balancing school and other activities.",
                color: "from-teal-400 to-emerald-500"
              },
              {
                icon: <Target className="text-white" size={24} />,
                title: "Personalized Approach",
                description: "Our adaptive learning technology identifies your strengths and weaknesses to create a tailored study plan.",
                color: "from-emerald-500 to-green-400"
              },
              {
                icon: <Calendar className="text-white" size={24} />,
                title: "Regular Assessments",
                description: "Track your progress with frequent quizzes, tests, and mock exams designed to prepare you for final exams.",
                color: "from-green-500 to-emerald-400"
              },
              {
                icon: <Users className="text-white" size={24} />,
                title: "Supportive Community",
                description: "Join a community of motivated students and educators who will encourage and support your learning journey.",
                color: "from-emerald-400 to-teal-500"
              }
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="benefit-card group animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-green-600 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Academic Journey Today
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of Kenyan students who are already achieving their academic goals with StudyBuddy. 
              Choose the plan that fits your needs and take the first step toward a brighter future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
                Get Started Now <ArrowRight className="ml-2" size={20} />
              </button>
              <Link href="/about" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Learn More About Us
              </Link>
            </div>
            
            <div className="mt-12">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center">
                  <CheckCircle className="text-white mr-2" size={20} />
                  <span className="text-white">No setup fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-white mr-2" size={20} />
                  <span className="text-white">No long-term contracts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-white mr-2" size={20} />
                  <span className="text-white">30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
        }

        @media (max-width: 1024px) {
          .floating-badge {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2.5rem;
          }
          
          .hero-section p {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PricingPage;