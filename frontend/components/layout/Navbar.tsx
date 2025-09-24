import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ChevronDown, Calculator, Zap, TestTube, Dna, BookOpen, Globe, DollarSign, MapPin, Mail, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Subjects', 
      path: '/subjects',
      dropdown: [
        { name: 'Mathematics', path: '/subjects/mathematics', icon: Calculator },
        { name: 'Physics', path: '/subjects/physics', icon: Zap },
        { name: 'Chemistry', path: '/subjects/chemistry', icon: TestTube },
        { name: 'Biology', path: '/subjects/biology', icon: Dna },
        { name: 'English', path: '/subjects/english', icon: BookOpen },
        { name: 'Geography', path: '/subjects/geography', icon: Globe },
        { name: 'Economics', path: '/subjects/economics', icon: DollarSign },
        { name: 'Computer Science', path: '/subjects/computer-science', icon: BookOpen },
      ]
    },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
    { name: 'Dashboard', path: '/dashboard' },
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

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-emerald-600 via-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-xl">SB</span>
              </motion.div>
              <motion.div 
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h1 className={`font-bold text-xl transition-all duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                StudyBuddy
              </h1>
              <p className={`text-xs transition-all duration-300 ${
                isScrolled ? 'text-gray-500' : 'text-blue-200'
              }`}>
                Learn. Excel. Succeed.
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a 
                  href={item.path}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 relative flex items-center space-x-1 ${
                    isActivePath(item.path)
                      ? 'text-emerald-600 bg-blue-50'
                      : isScrolled 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-white hover:text-blue-200 hover:bg-white/10'
                  }`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </motion.a>
                
                {/* Enhanced Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                          Available Subjects
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {item.dropdown.map((subItem) => {
                            const IconComponent = subItem.icon;
                            return (
                              <motion.a
                                key={subItem.name}
                                href={subItem.path}
                                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                                  isActivePath(subItem.path)
                                    ? 'bg-blue-50 text-teal-600'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                }`}
                                whileHover={{ x: 5 }}
                              >
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                                  <IconComponent className="w-4 h-4 text-teal-600" />
                                </div>
                                <span className="text-sm font-medium">{subItem.name}</span>
                              </motion.a>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Enhanced Search Button */}
            <motion.button 
              onClick={() => setShowSearch(true)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="/pricing"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <motion.button 
              onClick={() => setShowSearch(true)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-2 max-h-96 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={item.path}
                    className={`block py-3 px-4 font-medium rounded-xl transition-all duration-200 ${
                      isActivePath(item.path)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </a>
                  
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem, subIndex) => {
                        const IconComponent = subItem.icon;
                        return (
                          <motion.a 
                            key={subItem.name}
                            href={subItem.path}
                            className={`flex items-center space-x-3 py-2 px-3 text-sm rounded-lg transition-all duration-200 ${
                              isActivePath(subItem.path)
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                            }`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (subIndex * 0.05) }}
                          >
                            <IconComponent className="w-4 h-4" />
                            <span>{subItem.name}</span>
                          </motion.a>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              ))}
              
              <motion.a
                href="/pricing"
                className="block mt-6 py-3 px-4 bg-gradient-to-r from-emerald-400 to-green-600 text-white font-semibold rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Search Overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSearch(false)}
          >
            <motion.div
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden mx-4"
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="flex items-center p-6">
                  <Search className="w-6 h-6 text-gray-400 mr-4" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search subjects, topics, lessons..."
                    className="flex-1 text-xl outline-none placeholder-gray-400"
                    autoFocus
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowSearch(false)}
                    className="ml-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
              
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500 mb-3 block">Popular searches:</span>
                  <div className="flex flex-wrap gap-2">
                    {['Mathematics', 'Physics', 'KCSE Past Papers', 'Chemistry Notes', 'Biology Revision'].map((term, index) => (
                      <motion.button
                        key={term}
                        onClick={() => {
                          setSearchQuery(term);
                          handleSearchSubmit({ preventDefault: () => {} });
                        }}
                        className="px-4 py-2 bg-white hover:bg-blue-50 hover:text-blue-600 text-gray-600 rounded-full text-sm transition-all border border-gray-200 hover:border-blue-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {term}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <p className="text-sm font-medium text-gray-700 mb-3">Quick Results:</p>
                    <div className="space-y-1">
                      {navItems.filter(item => 
                        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.dropdown?.some(sub => sub.name.toLowerCase().includes(searchQuery.toLowerCase()))
                      ).map((item, index) => (
                        <motion.a
                          key={item.path}
                          href={item.path}
                          onClick={() => setShowSearch(false)}
                          className="block px-4 py-3 text-gray-600 hover:bg-white hover:text-blue-600 rounded-xl transition-all"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {item.name}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;