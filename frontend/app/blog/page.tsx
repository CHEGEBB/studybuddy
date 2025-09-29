'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ChevronRight, 
  Bookmark, 
  Heart, 
  Share2, 
  MessageSquare, 
  ArrowRight, 
  Filter, 
  Tag,
  Layers,
  BookOpen,
  FileText,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/blog.scss';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const featuredRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

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

  // Categories scroll horizontally
  useEffect(() => {
    if (categoriesRef.current) {
      const handleWheel = (e: WheelEvent) => {
        if (categoriesRef.current) {
          e.preventDefault();
          categoriesRef.current.scrollLeft += e.deltaY;
        }
      };
      
      categoriesRef.current.addEventListener('wheel', handleWheel);
      
      return () => {
        if (categoriesRef.current) {
          categoriesRef.current.removeEventListener('wheel', handleWheel);
        }
      };
    }
  }, []);

  const featuredPosts = [
    {
      id: 1,
      title: 'How to Master the New KCSE Mathematics Curriculum',
      excerpt: 'Strategic approaches to excel in the updated math curriculum with practical examples and tips for success.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'Mathematics',
      author: 'David Mwangi',
      date: 'September 25, 2025',
      readTime: '8 min read',
      comments: 24
    },
    {
      id: 2,
      title: 'Biology Practical Tips: What Examiners Are Looking For',
      excerpt: 'Insider guidance on how to approach biology practicals with confidence and score top marks in your exams.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'Biology',
      author: 'Dr. Jane Wanjiku',
      date: 'September 20, 2025',
      readTime: '12 min read',
      comments: 37
    },
    {
      id: 3,
      title: 'Physics Made Simple: Understanding Force and Motion',
      excerpt: 'Breaking down complex physics concepts into understandable chunks that will improve your comprehension and exam scores.',
      image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Physics',
      author: 'Prof. Kimani',
      date: 'September 18, 2025',
      readTime: '10 min read',
      comments: 16
    }
  ];

  const blogPosts = [
    {
      id: 4,
      title: 'Effective Study Techniques for Exam Season',
      excerpt: 'Discover proven methods to enhance retention and maximize your study time during the crucial exam preparation period.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'Study Tips',
      author: 'Sarah Otieno',
      date: 'September 15, 2025',
      readTime: '7 min read',
      comments: 29
    },
    {
      id: 5,
      title: 'Chemistry Revision: Organic Compounds Simplified',
      excerpt: 'A comprehensive guide to understanding organic chemistry concepts that commonly appear in KCSE exams.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'Chemistry',
      author: 'Dr. Victor Ouma',
      date: 'September 12, 2025',
      readTime: '11 min read',
      comments: 18
    },
    {
      id: 6,
      title: 'English Literature: Analyzing Themes in Set Books',
      excerpt: 'Learn how to identify and analyze literary themes for better essay writing and comprehension in your English exams.',
      image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'English',
      author: 'Prof. Wambui',
      date: 'September 10, 2025',
      readTime: '9 min read',
      comments: 22
    },
    {
      id: 7,
      title: 'History & Government: Mastering Essay Questions',
      excerpt: 'Expert strategies to structure compelling history essays that will impress examiners and earn you top marks.',
      image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'History',
      author: 'James Mwangi',
      date: 'September 8, 2025',
      readTime: '10 min read',
      comments: 15
    },
    {
      id: 8,
      title: 'Geography: Understanding Map Work',
      excerpt: 'A step-by-step guide to mastering map reading and interpretation skills essential for geography exams.',
      image: 'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'Geography',
      author: 'Elizabeth Njeri',
      date: 'September 5, 2025',
      readTime: '8 min read',
      comments: 13
    },
    {
      id: 9,
      title: 'Computer Studies: Programming Fundamentals',
      excerpt: 'An introduction to basic programming concepts that will help you excel in your computer studies practicals.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3',
      category: 'Computer Studies',
      author: 'Kevin Otieno',
      date: 'September 3, 2025',
      readTime: '12 min read',
      comments: 27
    }
  ];

  const categories = [
    'All', 'Mathematics', 'Biology', 'Physics', 'Chemistry', 'English', 
    'History', 'Geography', 'Computer Studies', 'Study Tips'
  ];

  const filteredPosts = activeCategory === 'All' 
    ? [...featuredPosts, ...blogPosts]
    : [...featuredPosts, ...blogPosts].filter(post => post.category === activeCategory);

  return (
    <div className="blog-page min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="blog-hero relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="blog-hero-bg absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/85 to-green-900/80 z-10"></div>
          <Image 
            src="https://images.unsplash.com/photo-1583026411217-9d05a70d5230?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Students studying"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll fade-in-left">
              <div className="blog-badge mb-6 inline-block">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  StudyBuddy Blog
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-white">
                Insights for
                <span className="blog-gradient-text"> Kenyan</span>
                <br />
                Students
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Explore expert articles, study tips, and academic resources designed 
                specifically for Kenyan high school students. Elevate your learning journey with us.
              </p>
              
              <div className="relative max-w-lg">
                <input 
                  type="text" 
                  placeholder="Search for articles..."
                  className="w-full bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 rounded-full py-4 px-6 pl-14 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all duration-300"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white/70" size={20} />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-green-600 text-white p-2 rounded-full hover:from-emerald-600 hover:to-green-700 transition-all duration-300">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block animate-on-scroll fade-in-right">
              <div className="blog-hero-cards-container relative h-[500px]">
                {/* Decorative cards */}
                <div className="blog-card-floating blog-card-1 absolute top-0 right-0 w-72 bg-white rounded-3xl shadow-xl overflow-hidden transform rotate-6 hover:rotate-0 transition-all duration-500">
                  <div className="h-40 relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                      alt="Study tips"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">Study Tips</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">How to Create an Effective Study Schedule</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">Master your time management with these proven techniques...</p>
                  </div>
                </div>
                
                <div className="blog-card-floating blog-card-2 absolute top-20 left-10 w-64 bg-white rounded-3xl shadow-xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-all duration-500">
                  <div className="h-36 relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3"
                      alt="Mathematics"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">Mathematics</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">Algebra Shortcuts for Quick Problem Solving</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">Learn time-saving techniques for complex equations...</p>
                  </div>
                </div>
                
                <div className="blog-card-floating blog-card-3 absolute bottom-0 right-20 w-80 bg-white rounded-3xl shadow-xl overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500">
                  <div className="h-44 relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1532634993-15f421e42ec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                      alt="Chemistry"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">Chemistry</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">Understanding Chemical Equations: Balancing Made Easy</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">Master the fundamental skill of balancing chemical equations with these simple steps...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>
      
      {/* Categories Section */}
      <section className="py-8 bg-white sticky top-0 z-30 border-b border-gray-100 shadow-sm categories-section">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <Tag className="mr-2" size={20} /> Categories
            </h2>
            
            <button className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors duration-300 font-medium">
              <Filter className="mr-1" size={18} /> Filter
            </button>
          </div>
          
          <div 
            ref={categoriesRef}
            className="categories-scroller flex space-x-2 overflow-x-auto pb-4 hide-scrollbar"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-pill whitespace-nowrap px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Posts */}
      <section 
        ref={featuredRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center">
              <Layers className="mr-3 text-emerald-500" size={28} /> Featured Articles
            </h2>
            
            <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300 font-medium flex items-center">
              View All <ArrowRight className="ml-1" size={18} />
            </Link>
          </div>
          
          <div className="featured-posts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div 
                key={post.id}
                className="featured-post-card group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-500 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                        <Bookmark size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <button className="text-gray-500 hover:text-emerald-500 transition-colors duration-300 mr-2">
                        <Heart size={18} />
                      </button>
                      <button className="text-gray-500 hover:text-emerald-500 transition-colors duration-300 mr-2">
                        <MessageSquare size={18} />
                      </button>
                      <button className="text-gray-500 hover:text-emerald-500 transition-colors duration-300">
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Topics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center">
              <TrendingUp className="mr-3 text-emerald-500" size={28} /> Popular Topics
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { name: 'KCSE Preparation', icon: BookOpen, color: 'from-emerald-400 to-green-500' },
              { name: 'Mathematics', icon: Tag, color: 'from-green-400 to-teal-500' },
              { name: 'Sciences', icon: Layers, color: 'from-teal-400 to-cyan-500' },
              { name: 'Languages', icon: MessageSquare, color: 'from-cyan-400 to-blue-500' },
              { name: 'Humanities', icon: FileText, color: 'from-blue-400 to-indigo-500' }
            ].map((topic, index) => (
              <div 
                key={topic.name}
                className="topic-card group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-5 text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r ${topic.color} flex items-center justify-center`}>
                    <topic.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-medium text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {topic.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center">
              <BookOpen className="mr-3 text-emerald-500" size={28} /> Latest Articles
            </h2>
            
            <div className="flex space-x-2">
              <button className="bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-colors duration-300 px-4 py-2 rounded-lg font-medium">
                Latest
              </button>
              <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-300 px-4 py-2 rounded-lg font-medium">
                Popular
              </button>
            </div>
          </div>
          
          <div className="blog-posts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(0, 6).map((post, index) => (
              <div 
                key={post.id}
                className="blog-post-card group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-500 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                        <Heart size={16} />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                        <Bookmark size={16} />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 overflow-hidden">
                        <User className="text-gray-500" size={16} />
                      </div>
                      <span className="text-white text-sm font-medium">{post.author}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={12} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock size={12} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="px-6 pb-6 flex justify-between items-center">
                    <Link href={`/blog/${post.id}`} className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300 text-sm font-medium flex items-center">
                      Read More <ChevronRight className="ml-1" size={16} />
                    </Link>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <MessageSquare size={14} className="mr-1" />
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPosts.length > 6 && (
            <div className="mt-12 text-center">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg flex items-center mx-auto">
                Load More Articles <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Get the latest educational content, study tips, and exam updates delivered directly to your inbox.
              </p>
            </div>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-grow bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 rounded-full py-4 px-6 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all duration-300"
              />
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
            
            <div className="text-center mt-6">
              <p className="text-white/80 text-sm">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;