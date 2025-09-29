'use client'

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Calculator, 
  Zap, 
  TestTube, 
  Dna, 
  Languages, 
  Globe, 
  LogIn,
  BookOpen,
  TrendingUp,
  Clock,
  Star,
  Sparkles
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pathname = usePathname();
  const searchInputRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowSearch(false);
        setActiveDropdown(null);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearch(true);
      }
    };

    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Subjects', 
      path: '/subjects',
      dropdown: [
        { name: 'Mathematics', path: '/subjects/mathematics', icon: Calculator, description: 'Algebra, Calculus & Geometry', color: 'from-blue-500 to-cyan-500' },
        { name: 'Physics', path: '/subjects/physics', icon: Zap, description: 'Classical & Modern Physics', color: 'from-amber-500 to-orange-500' },
        { name: 'Chemistry', path: '/subjects/chemistry', icon: TestTube, description: 'Organic & Inorganic Chemistry', color: 'from-purple-500 to-pink-500' },
        { name: 'Biology', path: '/subjects/biology', icon: Dna, description: 'Life Sciences & Anatomy', color: 'from-green-500 to-emerald-500' },
        { name: 'Languages', path: '/subjects/languages', icon: Languages, description: 'English & Kiswahili', color: 'from-rose-500 to-red-500' },
        { name: 'Geography', path: '/subjects/geography', icon: Globe, description: 'Physical & Human Geography', color: 'from-teal-500 to-cyan-500' },
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  const popularSearches = [
    'KCSE Past Papers', 
    'Math Formulas', 
    'Physics Notes', 
    'Chemistry Practicals', 
    'Biology Diagrams'
  ];

  const recentSearches = [
    { term: 'Quadratic Equations', icon: Calculator },
    { term: 'Periodic Table', icon: TestTube },
    { term: 'Cell Division', icon: Dna },
  ];

  return (
    <>
      <motion.nav 
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-2xl shadow-lg border-b border-emerald-100/30' 
            : 'bg-gradient-to-b from-black/20 to-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          type: "spring", 
          stiffness: 80,
          damping: 20
        }}
      >
        {/* Ambient glow effect */}
        {!isScrolled && (
          <motion.div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`
            }}
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo with magnetic effect */}
            <Link href="/" className="flex items-center space-x-3 group relative z-10">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden"
                  whileHover={{ 
                    rotate: [0, -8, 8, -8, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-white relative z-10" />
                </motion.div>
                
                {/* Floating particles */}
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-emerald-400 rounded-full blur-sm"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full blur-sm"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
              
              <div className="hidden sm:block">
                <motion.h1 
                  className={`font-bold text-lg lg:text-xl transition-all duration-300 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  StudyBuddy
                </motion.h1>
                <motion.p 
                  className={`text-xs transition-all duration-300 font-medium ${
                    isScrolled ? 'text-emerald-600' : 'text-emerald-300'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Learn. Excel. Succeed.
                </motion.p>
              </div>
            </Link>

            {/* Desktop Navigation with unique active states */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const isActive = isActivePath(item.path);
                
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link href={item.path}>
                      <motion.div
                        className={`relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center space-x-1 cursor-pointer group ${
                          isActive
                            ? 'text-white' 
                            : isScrolled 
                              ? 'text-gray-700 hover:text-emerald-600' 
                              : 'text-white/90 hover:text-white'
                        }`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        {/* Active state with gradient background and glow */}
                        {isActive && (
                          <>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 rounded-xl"
                              layoutId="activeNav"
                              transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                            />
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 rounded-xl blur-lg opacity-50"
                              layoutId="activeNavGlow"
                              transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                            />
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute inset-0 rounded-xl overflow-hidden"
                              initial={false}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{
                                  x: ['-200%', '200%'],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear",
                                  repeatDelay: 1
                                }}
                              />
                            </motion.div>
                          </>
                        )}
                        
                        {/* Hover effect for non-active items */}
                        {!isActive && (
                          <motion.div
                            className={`absolute inset-0 rounded-xl transition-opacity ${
                              isScrolled ? 'bg-emerald-50/80' : 'bg-white/10'
                            }`}
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          />
                        )}
                        
                        <span className="relative z-10 flex items-center space-x-1">
                          {isActive && (
                            <motion.span
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            >
                              <Sparkles className="w-3.5 h-3.5 mr-1" />
                            </motion.span>
                          )}
                          <span>{item.name}</span>
                        </span>
                        
                        {item.dropdown && (
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 relative z-10 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        )}
                        
                        {/* Active indicator line */}
                        {isActive && (
                          <motion.div
                            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                    
                    {/* Enhanced Dropdown */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[420px] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden"
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, type: "spring", bounce: 0.2 }}
                        >
                          <div className="p-6">
                            <div className="flex items-center space-x-2 mb-5">
                              <div className="flex space-x-1">
                                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                              </div>
                              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                                Explore Subjects
                              </h3>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                              {item.dropdown.map((subItem, subIndex) => {
                                const IconComponent = subItem.icon;
                                const isSubActive = isActivePath(subItem.path);
                                
                                return (
                                  <Link key={subItem.name} href={subItem.path}>
                                    <motion.div
                                      className={`relative p-4 rounded-2xl transition-all duration-300 cursor-pointer border overflow-hidden group ${
                                        isSubActive
                                          ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-300 shadow-md'
                                          : 'bg-white/50 hover:bg-white border-gray-100 hover:border-emerald-200 hover:shadow-md'
                                      }`}
                                      whileHover={{ scale: 1.03, y: -2 }}
                                      whileTap={{ scale: 0.98 }}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: subIndex * 0.04 }}
                                    >
                                      {/* Gradient overlay on hover */}
                                      <div className={`absolute inset-0 bg-gradient-to-br ${subItem.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                                      
                                      <div className="relative flex items-start space-x-3">
                                        <motion.div 
                                          className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${subItem.color} shadow-sm`}
                                          whileHover={{ rotate: [0, -10, 10, 0] }}
                                          transition={{ duration: 0.5 }}
                                        >
                                          <IconComponent className="w-5 h-5 text-white" />
                                        </motion.div>
                                        <div className="flex-1 min-w-0">
                                          <div className={`font-semibold text-sm mb-0.5 ${
                                            isSubActive ? 'text-emerald-700' : 'text-gray-800 group-hover:text-emerald-700'
                                          }`}>
                                            {subItem.name}
                                            {isSubActive && (
                                              <motion.span
                                                className="inline-block ml-1"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200 }}
                                              >
                                                ✨
                                              </motion.span>
                                            )}
                                          </div>
                                          <div className="text-xs text-gray-500 leading-tight">{subItem.description}</div>
                                        </div>
                                      </div>
                                      
                                      {/* Active indicator */}
                                      {isSubActive && (
                                        <motion.div
                                          className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full"
                                          initial={{ scale: 0 }}
                                          animate={{ scale: 1 }}
                                          transition={{ type: "spring", stiffness: 200 }}
                                        />
                                      )}
                                    </motion.div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 ml-4">
                <motion.button 
                  onClick={() => setShowSearch(true)}
                  className={`relative p-2.5 rounded-xl transition-all duration-300 group overflow-hidden ${
                    isScrolled 
                      ? 'text-gray-600 hover:text-emerald-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`absolute inset-0 rounded-xl transition-opacity ${
                      isScrolled ? 'bg-gray-100' : 'bg-white/10'
                    }`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <Search className="w-5 h-5 relative z-10" />
                  <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none shadow-lg">
                    Quick Search (⌘K)
                  </div>
                </motion.button>

                <Link href="/login">
                  <motion.button
                    className={`relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 overflow-hidden group ${
                      isScrolled
                        ? 'text-gray-700 hover:text-emerald-600'
                        : 'text-white/90 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className={`absolute inset-0 rounded-xl transition-opacity ${
                        isScrolled ? 'bg-gray-100' : 'bg-white/10'
                      }`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <LogIn className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Login</span>
                  </motion.button>
                </Link>

                <Link href="/pricing">
                  <motion.button
                    className="relative px-6 py-2.5 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg overflow-hidden group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="relative z-10 flex items-center space-x-1">
                      <span>Get Started</span>
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-2">
              <motion.button 
                onClick={() => setShowSearch(true)}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-600 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-600 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-200/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 py-6 space-y-2 max-h-96 overflow-y-auto">
                {navItems.map((item, index) => {
                  const isActive = isActivePath(item.path);
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link href={item.path}>
                        <div className={`relative py-3 px-4 font-medium rounded-2xl transition-all duration-200 flex items-center justify-between overflow-hidden ${
                          isActive
                            ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'
                        }`}>
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 opacity-50"
                              animate={{
                                x: ['-100%', '100%'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                          )}
                          <span className="relative z-10 flex items-center">
                            {isActive && <Sparkles className="w-4 h-4 mr-2" />}
                            {item.name}
                          </span>
                          {isActive && (
                            <motion.div 
                              className="w-2 h-2 bg-white rounded-full relative z-10"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          )}
                        </div>
                      </Link>
                      
                      {item.dropdown && (
                        <motion.div 
                          className="ml-4 mt-2 space-y-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {item.dropdown.map((subItem, subIndex) => {
                            const IconComponent = subItem.icon;
                            const isSubActive = isActivePath(subItem.path);
                            
                            return (
                              <Link key={subItem.name} href={subItem.path}>
                                <motion.div
                                  className={`flex items-center space-x-3 py-2.5 px-3 text-sm rounded-xl transition-all duration-200 ${
                                    isSubActive
                                      ? 'bg-emerald-50 text-emerald-700 font-medium'
                                      : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600'
                                  }`}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: (index * 0.05) + (subIndex * 0.02) }}
                                >
                                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${subItem.color}`}>
                                    <IconComponent className="w-4 h-4 text-white flex-shrink-0" />
                                  </div>
                                  <span className="flex-1">{subItem.name}</span>
                                  {isSubActive && (
                                    <motion.div
                                      className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                                      animate={{ scale: [1, 1.3, 1] }}
                                      transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                  )}
                                </motion.div>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
                
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Link href="/login">
                    <motion.div
                      className="py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-all flex items-center space-x-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: navItems.length * 0.05 }}
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </motion.div>
                  </Link>
                  
                  <Link href="/pricing">
                    <motion.div
                      className="relative py-3 px-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-xl text-center shadow-lg overflow-hidden"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (navItems.length * 0.05) + 0.1 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <span className="relative z-10">Get Started</span>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Enhanced Search Overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-start justify-center pt-16 lg:pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSearch(false)}
          >
            <motion.div
              className="w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden mx-4 border border-gray-200/50"
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center p-6 border-b border-gray-200/50 bg-gradient-to-r from-emerald-50/50 to-green-50/50">
                <Search className="w-5 h-5 text-emerald-600 mr-4 flex-shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                  placeholder="Search subjects, topics, lessons..."
                  className="flex-1 text-lg outline-none placeholder-gray-400 bg-transparent"
                />
                <div className="flex items-center space-x-2">
                  <kbd className="px-2 py-1 text-xs bg-white rounded-lg border border-gray-200 text-gray-500 shadow-sm">⌘K</kbd>
                  <motion.button
                    type="button"
                    onClick={() => setShowSearch(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-all"
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-b from-white to-gray-50/50 max-h-96 overflow-y-auto">
                {!searchQuery ? (
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">Popular searches</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map((term, index) => (
                          <motion.button
                            key={term}
                            onClick={() => {
                              setSearchQuery(term);
                              handleSearchSubmit({ preventDefault: () => {} });
                            }}
                            className="px-4 py-2 bg-white hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-600 text-gray-600 rounded-full text-sm transition-all border border-gray-200 hover:border-emerald-300 shadow-sm hover:shadow-md"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {term}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-3.5 h-3.5 text-gray-500" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">Recent searches</span>
                      </div>
                      <div className="space-y-1">
                        {recentSearches.map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <motion.button
                              key={item.term}
                              onClick={() => {
                                setSearchQuery(item.term);
                                handleSearchSubmit({ preventDefault: () => {} });
                              }}
                              className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-white hover:text-emerald-600 rounded-xl transition-all text-gray-600 group border border-transparent hover:border-emerald-200 hover:shadow-sm"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ x: 4 }}
                            >
                              <div className="w-8 h-8 bg-gray-100 group-hover:bg-emerald-50 rounded-lg flex items-center justify-center transition-colors">
                                <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
                              </div>
                              <span className="text-sm font-medium">{item.term}</span>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Star className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">Search Results</span>
                    </div>
                    <div className="space-y-2">
                      {navItems.filter(item => 
                        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.dropdown?.some(sub => sub.name.toLowerCase().includes(searchQuery.toLowerCase()))
                      ).map((item, index) => (
                        <Link key={item.path} href={item.path}>
                          <motion.div
                            onClick={() => setShowSearch(false)}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-700 rounded-xl transition-all cursor-pointer border border-transparent hover:border-emerald-200 hover:shadow-sm group"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                            whileHover={{ x: 4 }}
                          >
                            <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform"></div>
                            <span className="text-sm font-medium">{item.name}</span>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;