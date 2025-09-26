'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Atom, 
  Zap, 
  Compass, 
  Lightbulb, 
  Radio, 
  Thermometer, 
  ArrowRight, 
  PlayCircle,
  Users,
  Clock,
  Award,
  Waves,
  Tablet,
  GraduationCap,
  BookOpen,
  Brain,
  Battery,
  Shield,
  Clipboard,
  Star,
  BookText,
  BarChart3,
  Calculator,
  LayoutGrid,
  Cog,
  FlaskConical,
  CheckCircle
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/physics.scss';

const PhysicsPage = () => {
  const [activeTab, setActiveTab] = useState('mechanics');
  const statsRef = useRef<HTMLElement>(null);
  const formulaRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Particle physics animation
  useEffect(() => {
    if (particlesRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = particlesRef.current.offsetWidth;
      canvas.height = particlesRef.current.offsetHeight;
      particlesRef.current.appendChild(canvas);
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const particles: {x: number, y: number, radius: number, vx: number, vy: number, color: string}[] = [];
      
      // Create particles
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          color: `rgba(16, 185, 129, ${Math.random() * 0.5 + 0.2})`
        });
      }
      
      // Draw particles and connections
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          
          // Bounce off walls
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
          
          // Draw connections to nearby particles
          particles.forEach(p2 => {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 80) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 * (1 - distance / 80)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
      
      return () => {
        if (particlesRef.current) {
          while (particlesRef.current.firstChild) {
            particlesRef.current.removeChild(particlesRef.current.firstChild);
          }
        }
      };
    }
  }, []);

  // Physics formula animation with 3D perspective
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroElement = heroRef.current;
        const formulas = heroElement.querySelectorAll('.floating-formula');
        
        formulas.forEach((formula, index) => {
          const speed = 0.05 + (index * 0.02);
          const yPos = scrollY * speed;
          const zPos = index * 10;
          const rotation = scrollY * 0.01 * (index % 2 === 0 ? 1 : -1);
          const element = formula as HTMLElement;
          element.style.transform = `translateY(${yPos}px) translateZ(${zPos}px) rotate(${rotation}deg)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Advanced counter animation for stats
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter');
          
          const animateCounter = (counter: Element) => {
            const targetText = counter.textContent || '0';
            const target = parseInt(targetText.replace(/[^0-9]/g, ''));
            const duration = 2500;
            const frameDuration = 1000 / 60;
            const totalFrames = Math.round(duration / frameDuration);
            const easeOutQuad = (t: number) => t * (2 - t);
            
            let frame = 0;
            
            const timer = setInterval(() => {
              frame++;
              const progress = easeOutQuad(frame / totalFrames);
              const current = Math.round(target * progress);
              
              if (frame === totalFrames) {
                counter.textContent = targetText;
                clearInterval(timer);
              } else {
                counter.textContent = targetText.replace(/[0-9]+/, current.toString());
              }
            }, frameDuration);
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

  // Formula card magnetic effect
  useEffect(() => {
    if (formulaRef.current) {
      const formulas = formulaRef.current.querySelectorAll('.formula-card');
      
      const handleMouseMove = (e: MouseEvent, card: Element) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const maxTilt = 10;
        const tiltX = (distanceY / rect.height) * maxTilt;
        const tiltY = -(distanceX / rect.width) * maxTilt;
        
        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
      };
      
      const handleMouseLeave = (card: Element) => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      };
      
      formulas.forEach(formula => {
        formula.addEventListener('mousemove', (e) => handleMouseMove(e, formula));
        formula.addEventListener('mouseleave', () => handleMouseLeave(formula));
        
        // Add glow effect with intersection observer
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('formula-glow');
              }
            });
          },
          { threshold: 0.1 }
        );
        
        observer.observe(formula);
      });
      
      return () => {
        formulas.forEach(formula => {
          formula.removeEventListener('mousemove', (e) => handleMouseMove(e, formula));
          formula.removeEventListener('mouseleave', () => handleMouseLeave(formula));
        });
      };
    }
  }, []);

  // Advanced fade-in staggered animation 
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || '0';
          setTimeout(() => {
            entry.target.classList.add('fade-in');
          }, parseInt(delay));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el, index) => {
      el.setAttribute('data-delay', (index % 5 * 150).toString());
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Course modules data
  const physicsModules = {
    mechanics: [
      {
        title: "Forces & Motion",
        icon: Compass,
        description: "Master Newton's laws, momentum conservation, and motion analysis with practical applications.",
        duration: "4 weeks",
        topics: ["Newton's Laws", "Momentum & Impulse", "Circular Motion", "Projectile Motion"]
      },
      {
        title: "Energy & Work",
        icon: Zap,
        description: "Understand energy transformations, conservation principles, and work-energy theorems.",
        duration: "3 weeks",
        topics: ["Potential Energy", "Kinetic Energy", "Conservation Laws", "Work & Power"]
      },
      {
        title: "Fluid Mechanics",
        icon: Waves,
        description: "Apply principles of fluid statics and dynamics to real-world engineering challenges.",
        duration: "3 weeks",
        topics: ["Pressure", "Buoyancy", "Bernoulli's Principle", "Viscosity"]
      }
    ],
    electricity: [
      {
        title: "Electric Fields & Charges",
        icon: Zap,
        description: "Explore electrostatic forces, fields, and their applications in modern technology.",
        duration: "3 weeks",
        topics: ["Coulomb's Law", "Electric Field", "Gauss's Law", "Capacitance"]
      },
      {
        title: "Circuit Analysis",
        icon: LayoutGrid,
        description: "Develop skills to analyze and design DC and AC circuits for practical applications.",
        duration: "4 weeks",
        topics: ["Ohm's Law", "Kirchhoff's Rules", "RC Circuits", "Household Wiring"]
      },
      {
        title: "Electronic Devices",
        icon: Battery,
        description: "Understand the physics behind semiconductors and electronic components.",
        duration: "3 weeks",
        topics: ["Diodes", "Transistors", "Digital Logic", "Power Supplies"]
      }
    ],
    waves: [
      {
        title: "Wave Phenomena",
        icon: Waves,
        description: "Understand wave behavior and mathematical descriptions of wave motion.",
        duration: "3 weeks",
        topics: ["Wave Equations", "Superposition", "Standing Waves", "Doppler Effect"]
      },
      {
        title: "Sound Physics",
        icon: Radio,
        description: "Explore acoustics, sound transmission, and audio technologies based on physics principles.",
        duration: "3 weeks",
        topics: ["Sound Waves", "Resonance", "Musical Acoustics", "Ultrasound Applications"]
      },
      {
        title: "Electromagnetic Waves",
        icon: Zap,
        description: "Master the electromagnetic spectrum and applications from radio to gamma rays.",
        duration: "4 weeks",
        topics: ["EM Spectrum", "Reflection & Refraction", "Polarization", "Communication Technologies"]
      }
    ],
    modern: [
      {
        title: "Quantum Mechanics",
        icon: Atom,
        description: "Introduction to quantum physics concepts that revolutionized our understanding of matter.",
        duration: "4 weeks",
        topics: ["Wave-Particle Duality", "Uncertainty Principle", "Quantum States", "Quantum Applications"]
      },
      {
        title: "Nuclear Physics",
        icon: Atom,
        description: "Understand nuclear structure, radioactivity, and applications in energy and medicine.",
        duration: "3 weeks",
        topics: ["Nuclear Structure", "Radioactive Decay", "Nuclear Energy", "Radiation Safety"]
      },
      {
        title: "Relativity Principles",
        icon: Compass,
        description: "Explore Einstein's theories and their implications for space, time, and energy.",
        duration: "3 weeks",
        topics: ["Special Relativity", "Time Dilation", "Mass-Energy Equivalence", "General Relativity Intro"]
      }
    ],
    thermodynamics: [
      {
        title: "Heat & Temperature",
        icon: Thermometer,
        description: "Master thermal physics concepts and their applications in everyday phenomena.",
        duration: "3 weeks",
        topics: ["Temperature Scales", "Heat Transfer", "Thermal Expansion", "Calorimetry"]
      },
      {
        title: "Thermodynamic Laws",
        icon: Cog,
        description: "Apply the laws of thermodynamics to understand energy systems and entropy.",
        duration: "4 weeks",
        topics: ["First Law", "Second Law", "Entropy", "Thermodynamic Cycles"]
      },
      {
        title: "States of Matter",
        icon: Thermometer,
        description: "Explore the physics of solids, liquids, gases, and phase transitions.",
        duration: "3 weeks",
        topics: ["Gas Laws", "Phase Diagrams", "Latent Heat", "Material Properties"]
      }
    ],
    optics: [
      {
        title: "Geometric Optics",
        icon: Lightbulb,
        description: "Master light ray behavior, mirrors, lenses, and optical instruments.",
        duration: "3 weeks",
        topics: ["Reflection", "Refraction", "Lenses & Mirrors", "Optical Instruments"]
      },
      {
        title: "Wave Optics",
        icon: Waves,
        description: "Understand interference, diffraction, and the wave nature of light.",
        duration: "3 weeks",
        topics: ["Interference", "Diffraction", "Polarization", "Spectroscopy"]
      },
      {
        title: "Modern Optical Technologies",
        icon: Lightbulb,
        description: "Explore lasers, fiber optics, and advanced imaging technologies.",
        duration: "3 weeks",
        topics: ["Lasers", "Fiber Optics", "Holography", "Digital Imaging"]
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
      icon: Calculator, 
      number: "96%", 
      label: "Problem-Solving Success", 
      color: "from-green-500 to-emerald-400" 
    },
    { 
      icon: Users, 
      number: "6500+", 
      label: "Physics Students Enrolled", 
      color: "from-emerald-500 to-green-600" 
    },
    { 
      icon: GraduationCap, 
      number: "91%", 
      label: "KCSE Success Rate", 
      color: "from-green-600 to-emerald-500" 
    }
  ];

  // Reviews data
  const reviews = [
    {
      quote: "The way StudyBuddy explained motion concepts with real examples made physics click for me. I finally understand how to approach mechanics problems.",
      name: "James Kariuki",
      relation: "Form 4 Student, Nairobi",
      image: "/assets/images/testimonial1.jpg"
    },
    {
      quote: "My son struggled with circuit problems until he started using the StudyBuddy physics program. The step-by-step problem solving approach has been transformative.",
      name: "Mrs. Njoroge",
      relation: "Parent of Form 3 Student",
      image: "/assets/images/testimonial2.jpg"
    },
    {
      quote: "As a physics teacher, I appreciate how StudyBuddy focuses on fundamental understanding rather than memorization. The formula application exercises are excellent.",
      name: "Mr. Kimani",
      relation: "Physics Teacher, Mombasa",
      image: "/assets/images/testimonial3.jpg"
    }
  ];

  // Career paths
  const careerPaths = [
    {
      title: "Engineering",
      fields: ["Mechanical", "Electrical", "Civil", "Aeronautical"],
      icon: Cog
    },
    {
      title: "Technology",
      fields: ["Telecommunications", "Renewable Energy", "Electronics", "Computing"],
      icon: Tablet
    },
    {
      title: "Research & Academia",
      fields: ["University Research", "Teaching", "Laboratory Science", "R&D"],
      icon: BookText
    },
    {
      title: "Healthcare",
      fields: ["Medical Physics", "Radiation Therapy", "Diagnostic Imaging", "Biomedical Engineering"],
      icon: Shield
    }
  ];

  // Physics principles and applications
  const physicsApplications = [
    {
      title: "Transportation",
      description: "Physics principles drive advancements in vehicle design, fuel efficiency, and safety systems.",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Communications",
      description: "Electromagnetic wave theory enables mobile networks, satellite communications, and internet infrastructure.",
      icon: Radio,
      image: "https://images.unsplash.com/photo-1516241679310-7d3909f21a35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Medicine",
      description: "Medical imaging, radiation treatment, and diagnostic tools rely on core physics principles.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Energy Production",
      description: "From hydroelectric to nuclear to solar, physics drives sustainable and efficient energy generation.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Computing",
      description: "Semiconductor physics and quantum mechanics enable modern computing technologies.",
      icon: Tablet,
      image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Manufacturing",
      description: "Mechanical principles, material science, and thermodynamics optimize industrial processes.",
      icon: Cog,
      image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  // Key physics experiments
  const keyExperiments = [
    {
      title: "Pendulum Oscillation",
      description: "Explore periodic motion, simple harmonic oscillation, and the relationship between period and length.",
      icon: Compass
    },
    {
      title: "Ohm's Law Circuit",
      description: "Verify the linear relationship between current and voltage in resistive circuits.",
      icon: Zap
    },
    {
      title: "Lens Focal Length",
      description: "Determine focal lengths of convex and concave lenses using optical benches.",
      icon: Lightbulb
    },
    {
      title: "Calorimetry",
      description: "Measure specific heat capacity and latent heat through careful thermal experiments.",
      icon: Thermometer
    }
  ];

  return (
    <div className="physics-page min-h-screen bg-white">
      <Navbar />
      
    {/* Enhanced Physics Hero Section */}
<section 
  ref={heroRef}
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emrald-900 to-green-900"
>
  {/* Physics Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <div 
      className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-green-800/70 to-green-700"></div>
  </div>

  {/* Interactive Particle Physics Canvas */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Animated Physics Equations */}
    <div className="absolute top-20 left-20 opacity-20 animate-pulse">
      <div className="text-4xl font-bold text-white glow-text">E = mc²</div>
    </div>
    <div className="absolute top-40 right-32 opacity-15 animate-bounce" style={{ animationDuration: '3s' }}>
      <div className="text-3xl font-bold text-blue-300 glow-text">F = ma</div>
    </div>
    <div className="absolute bottom-32 left-1/4 opacity-10 animate-pulse delay-1000">
      <div className="text-2xl font-bold text-indigo-300 glow-text">P = VI</div>
    </div>
    <div className="absolute top-1/3 right-20 opacity-25 animate-bounce delay-500" style={{ animationDuration: '4s' }}>
      <div className="text-xl font-bold text-purple-300 glow-text">v = fλ</div>
    </div>

    {/* Floating Physics Symbols */}
    <div className="absolute top-16 right-16 opacity-30 animate-spin" style={{ animationDuration: '15s' }}>
      <div className="w-16 h-16 border-2 border-blue-400 rounded-full flex items-center justify-center">
        <div className="text-blue-400 text-xl">Ω</div>
      </div>
    </div>
    <div className="absolute bottom-24 right-1/3 opacity-20 animate-pulse">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full flex items-center justify-center">
        <div className="text-white text-lg">∆</div>
      </div>
    </div>

    {/* Particle field animation */}
    <div className="particles absolute inset-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        ></div>
      ))}
    </div>

    {/* Wave patterns */}
    <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path
          d="M0,100 C300,20 600,180 900,100 C1200,20 1500,180 1800,100 L1800,200 L0,200 Z"
          fill="url(#waveGradient)"
          className="animate-pulse"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>

  {/* Main Content Container */}
  <div className="container mx-auto px-4 relative z-20">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <div className="text-left space-y-8">
        
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold leading-none">
            Unlock the <span className="text-green-500 bg-clip-text">Mastery</span> of Physics
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
          Master the laws that govern our universe through interactive simulations, 
          systematic problem-solving, and KCSE-focused preparation.
        </p>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Calculator className="text-blue-400 mr-2" size={18} />
            <span className="text-white font-medium">Problem Solving</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Atom className="text-purple-400 mr-2" size={18} />
            <span className="text-white font-medium">Quantum Physics</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Zap className="text-indigo-400 mr-2" size={18} />
            <span className="text-white font-medium">Circuit Analysis</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group bg-gradient-to-r from-green-900 via-teal-500 to-green-500 hover:from-green-600 hover:via-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center">
            Begin Physics Journey
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
          
          <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
            <PlayCircle className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
            Interactive Demo
          </button>
        </div>
        
        {/* Physics Stats */}
        <div className="flex items-center gap-8 pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">94%</div>
            <div className="text-blue-300 text-sm">KCSE Success</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">6.5K+</div>
            <div className="text-purple-300 text-sm">Students</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">96%</div>
            <div className="text-indigo-300 text-sm">Problem Solving</div>
          </div>
        </div>
      </div>
      
      {/* Right Visual Content */}
      <div className="relative hidden lg:block">
        <div className="relative w-full h-[600px]">
          
          {/* Central Physics Visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              
              {/* Atom Model */}
              <div className="atom-container relative w-80 h-80">
                {/* Nucleus */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full shadow-lg animate-pulse"></div>
                
                {/* Electron Orbits */}
                <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute inset-4 border-2 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute inset-8 border-2 border-indigo-400/30 rounded-full animate-spin" style={{ animationDuration: '12s' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-400 rounded-full shadow-lg"></div>
                </div>
              </div>
              
              {/* Physics Equipment Floating Around */}
              {/* <div className="absolute -top-16 -left-16 w-20 h-20 physics-equipment">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Calculator className="text-blue-400" size={32} />
                </div>
              </div> */}
              
              {/* <div className="absolute -top-8 -right-20 w-16 h-16 physics-equipment animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Compass className="text-purple-400" size={24} />
                </div>
              </div>
              
              <div className="absolute -bottom-16 -right-8 w-18 h-18 physics-equipment animate-pulse">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-indigo-500/20 rounded-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Lightbulb className="text-indigo-400" size={28} />
                </div>
              </div> */}
              
              <div className="absolute -bottom-12 -left-12 w-16 h-16 physics-equipment animate-bounce" style={{ animationDelay: '2s' }}>
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-green-500/20 rounded-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Waves className="text-green-400" size={24} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating achievement cards */}
          <div className="absolute top-16 right-0 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs animate-float">
            <div className="flex items-center mb-2">
              <div className="bg-green-500 rounded-full p-2 mr-3">
                <Award className="text-white" size={16} />
              </div>
              <div className="text-green-600 text-sm font-semibold">Physics Mastery</div>
            </div>
            <div className="text-gray-700 text-sm">"Finally understand mechanics - problems make sense now!"</div>
            <div className="text-xs text-gray-500 mt-2">- Sarah K., Form 4</div>
          </div>
          
          <div className="absolute bottom-16 left-0 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs animate-float delay-1000">
            <div className="flex items-center mb-2">
              <div className="bg-purple-500 rounded-full p-2 mr-3">
                <Calculator className="text-white" size={16} />
              </div>
              <div className="text-purple-600 text-sm font-semibold">Problem Solving</div>
            </div>
            <div className="text-gray-700 text-sm">"Systematic approach helped me ace circuit problems!"</div>
            <div className="text-xs text-gray-500 mt-2">- David M., Form 3</div>
          </div>
          
          {/* Background decoration with physics theme */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"></div>
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
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(1deg); }
  }
  
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  
  .delay-1000 {
    animation-delay: 1s;
  }
  
  .physics-equipment {
    animation: float 6s ease-in-out infinite;
  }
  
  .glow-text {
    text-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
  }
  
  .atom-container {
    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.3));
  }
  
  /* Custom physics background patterns */
  .particles {
    background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0);
    background-size: 40px 40px;
  }
  
  /* Advanced hover effects */
  .physics-equipment:hover {
    transform: translateY(-5px) scale(1.1);
    transition: all 0.3s ease;
  }
`}</style>
      
      {/* Core Physics Features */}
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-full w-1/2 bg-opacity-30 pattern-dots"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              The Physics Advantage
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our program develops both theoretical understanding and practical application skills, 
              preparing students for exam success and future scientific careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calculator,
                title: "Problem-Solving Excellence",
                description: "Master systematic approaches to solve physics problems with confidence and precision."
              },
              {
                icon: Brain,
                title: "Conceptual Understanding",
                description: "Develop deep comprehension of physics principles beyond formulas and equations."
              },
              {
                icon: BookOpen,
                title: "Exam Preparation Focus",
                description: "Targeted KCSE physics preparation with past papers and examiner insights."
              },
              {
                icon: Compass,
                title: "Real-World Applications",
                description: "Connect physics theories to practical applications in technology and daily life."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="feature-card bg-white rounded-3xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll hover:border-emerald-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="hexagon-icon-container mb-6">
                  <div className="hexagon-icon bg-gradient-to-br from-emerald-500 to-green-600">
                    <feature.icon size={28} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Physics Experiments Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-emerald-50 opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
                Hands-On Learning
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Physics Lab Experiments
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our program integrates practical laboratory experiences with theoretical learning, 
                allowing students to directly observe and verify physical principles in action.
              </p>
              
              <div className="space-y-6">
                {keyExperiments.map((experiment, index) => (
                  <div 
                    key={index}
                    className="experiment-card flex bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-2 border-l-4 border-emerald-500 animate-on-scroll"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="mr-4 bg-emerald-100 rounded-xl p-3 flex-shrink-0 self-start">
                      <experiment.icon size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{experiment.title}</h3>
                      <p className="text-gray-600">{experiment.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <button className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:from-emerald-700 hover:to-green-800">
                  Explore Lab Resources <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
            
            <div className="laboratory-visualization animate-on-scroll">
              <div className="lab-container relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-green-800/90 z-10"></div>
                
                <div className="absolute inset-0 bg-cover bg-center" 
                     style={{backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
                
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="lab-equipment">
                    <div className="equipment-item beaker">
                      <div className="beaker-liquid"></div>
                      <div className="beaker-bubbles">
                        <div className="bubble b1"></div>
                        <div className="bubble b2"></div>
                        <div className="bubble b3"></div>
                      </div>
                    </div>
                    
                    <div className="equipment-item pendulum-setup">
                      <div className="pendulum-string"></div>
                      <div className="pendulum-bob"></div>
                    </div>
                    
                    <div className="equipment-item circuit-board">
                      <div className="circuit-leds">
                        <div className="led led1"></div>
                        <div className="led led2"></div>
                        <div className="led led3"></div>
                      </div>
                    </div>
                    
                    <div className="equipment-item prism">
                      <div className="prism-shape"></div>
                      <div className="light-ray"></div>
                      <div className="light-spectrum"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-emerald-900 to-transparent z-30">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Virtual Physics Lab</h3>
                    <p className="text-emerald-200 text-sm max-w-md mx-auto">
                      Interactive simulations and guided experiments help students visualize abstract concepts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Formula Reference with 3D Cards */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 formula-bg-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Essential Knowledge
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Key Physics Formulas
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Mastering these fundamental equations is crucial for solving physics problems. 
              Our approach focuses on understanding when and how to apply each formula.
            </p>
          </div>
          
          <div ref={formulaRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Newton's Second Law",
                formula: "F = ma",
                variables: "F: force, m: mass, a: acceleration",
                application: "Dynamics, motion analysis, force calculations",
                category: "Mechanics"
              },
              {
                name: "Kinetic Energy",
                formula: "KE = ½mv²",
                variables: "KE: kinetic energy, m: mass, v: velocity",
                application: "Energy calculations, collision analysis",
                category: "Energy"
              },
              {
                name: "Gravitational Force",
                formula: "F = G(m₁m₂)/r²",
                variables: "G: gravitational constant, m: masses, r: distance",
                application: "Orbital mechanics, gravitational fields",
                category: "Mechanics"
              },
              {
                name: "Ohm's Law",
                formula: "V = IR",
                variables: "V: voltage, I: current, R: resistance",
                application: "Circuit analysis, electrical design",
                category: "Electricity"
              },
              {
                name: "Wave Equation",
                formula: "v = fλ",
                variables: "v: wave speed, f: frequency, λ: wavelength",
                application: "Sound, light, and wave phenomena",
                category: "Waves"
              },
              {
                name: "Power",
                formula: "P = VI",
                variables: "P: power, V: voltage, I: current",
                application: "Electrical power, energy consumption",
                category: "Electricity"
              },
              {
                name: "Momentum",
                formula: "p = mv",
                variables: "p: momentum, m: mass, v: velocity",
                application: "Collision analysis, impulse calculations",
                category: "Mechanics"
              },
              {
                name: "Lens Equation",
                formula: "1/f = 1/u + 1/v",
                variables: "f: focal length, u: object distance, v: image distance",
                application: "Optics, lens systems, magnification",
                category: "Optics"
              },
              {
                name: "Work Done",
                formula: "W = Fd cosθ",
                variables: "W: work, F: force, d: distance, θ: angle",
                application: "Energy transfers, mechanical systems",
                category: "Energy"
              }
            ].map((formula, index) => (
              <div 
                key={index}
                className="formula-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 animate-on-scroll formula-3d-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="formula-category absolute top-4 right-4 text-xs font-medium bg-white/20 rounded-full px-3 py-1 text-emerald-200">
                  {formula.category}
                </div>
                
                <div className="formula-display text-center mb-6 p-4 bg-gradient-to-br from-emerald-900/50 to-green-800/50 rounded-xl">
                  <div className="formula-text text-3xl font-bold bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
                    {formula.formula}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-emerald-300 mb-2">{formula.name}</h3>
                
                <div className="text-gray-300 text-sm mb-4">
                  <span className="text-emerald-200 font-medium">Variables:</span> {formula.variables}
                </div>
                
                <div className="mt-auto pt-2 border-t border-white/10">
                  <div className="text-gray-300 text-sm">
                    <span className="text-emerald-200 font-medium">Application:</span> {formula.application}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <button className="inline-flex items-center bg-white text-emerald-700 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:shadow-lg">
              Download Complete Formula Sheet <ArrowRight className="ml-2" size={20} />
            </button>
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
              Physics Learning Pathways
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Our structured learning paths cover the complete KCSE physics syllabus, 
              with each module building on foundational concepts to develop advanced understanding.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="module-tabs flex flex-wrap justify-center mb-12 gap-2 md:gap-4 animate-on-scroll">
            {[
              { id: 'mechanics', label: 'Mechanics', icon: Compass },
              { id: 'electricity', label: 'Electricity & Circuits', icon: Zap },
              { id: 'waves', label: 'Waves & Sound', icon: Waves },
              { id: 'thermodynamics', label: 'Thermodynamics', icon: Thermometer },
              { id: 'optics', label: 'Optics & Light', icon: Lightbulb },
              { id: 'modern', label: 'Modern Physics', icon: Atom }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg scale-105' 
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
            {(physicsModules[activeTab as keyof typeof physicsModules] || []).map((module, index) => (
              <div
                key={module.title}
                className="module-card group animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full flex flex-col relative overflow-hidden card-hover-effect">
                  {/* Module background pattern */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-50 rounded-full opacity-50 z-0 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-emerald-50 rounded-full opacity-30 z-0 group-hover:scale-150 transition-transform duration-700 delay-100"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="module-icon-container">
                        <div className="module-icon bg-gradient-to-r from-emerald-500 to-green-600 group-hover:scale-110 transition-transform duration-300">
                          <module.icon size={28} className="text-white" />
                        </div>
                      </div>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {module.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">{module.title}</h3>
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
                      
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <button className="module-button w-full flex items-center justify-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-300">
                          Explore Module <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Link href="/courses" className="inline-flex items-center bg-white border border-emerald-200 hover:border-emerald-300 text-emerald-600 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg">
              View All Physics Modules <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Solving Methodology */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-50 to-white"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <div className="problem-solving-container bg-gradient-to-br from-emerald-900 to-green-800 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden transform-card">
                {/* Background pattern */}
                <div className="absolute inset-0 z-0">
                  <div className="physics-patterns opacity-10"></div>
                </div>
                
                <div className="problem-solving-steps relative z-10">
                  <div className="problem-header flex items-center mb-6">
                    <Calculator size={24} className="text-emerald-400 mr-3" />
                    <h3 className="text-white text-xl font-bold">Physics Problem Solving Framework</h3>
                  </div>
                  
                  <div className="steps-sequence space-y-6">
                    {[
                      { 
                        step: "1. Understand the Problem", 
                        description: "Identify given quantities, unknown variables, and relevant physics principles.",
                        tip: "Draw a diagram to visualize the problem whenever possible."
                      },
                      { 
                        step: "2. Plan Your Approach", 
                        description: "Select appropriate equations and determine solution strategy.",
                        tip: "Break complex problems into simpler sub-problems."
                      },
                      { 
                        step: "3. Execute the Plan", 
                        description: "Apply equations correctly, showing clear algebraic steps.",
                        tip: "Keep track of units throughout your calculations."
                      },
                      { 
                        step: "4. Verify Your Solution", 
                        description: "Check if answer is reasonable and satisfies original problem conditions.",
                        tip: "Verify units, magnitude, and direction of your final answer."
                      },
                      { 
                        step: "5. Reflect on Principles", 
                        description: "Connect solution to broader physics concepts for deeper understanding.",
                        tip: "Ask: \"What physics principle made this solution possible?\""
                      }
                    ].map((step, index) => (
                      <div key={index} className="step-item bg-emerald-800/50 backdrop-blur-sm rounded-xl p-5 border border-emerald-700/50 hover:border-emerald-600 transition-all duration-300 hover:bg-emerald-800/70 hover:transform-step">
                        <h4 className="text-emerald-300 font-bold mb-2">{step.step}</h4>
                        <p className="text-white mb-3">{step.description}</p>
                        <div className="step-tip text-sm bg-emerald-700/50 p-3 rounded-lg">
                          <span className="text-emerald-300 font-medium">Tip:</span> {step.tip}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <button className="bg-emerald-700 text-white px-5 py-3 rounded-full hover:bg-emerald-600 transition-all duration-300 flex items-center hover:scale-105">
                      <BookOpen size={18} className="mr-2 text-emerald-300" /> Download Problem-Solving Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll">
              <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
                Methodical Approach
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Physics Problem-Solving Mastery
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our systematic approach transforms complex physics challenges into manageable steps, 
                building the analytical skills needed for exam success and scientific careers.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    icon: Brain,
                    title: "Conceptual Understanding First",
                    description: "We begin with deep understanding of the underlying physics principles before applying formulas."
                  },
                  {
                    icon: Calculator,
                    title: "Systematic Methodology",
                    description: "Our proven 5-step approach provides a framework that works for any physics problem across all topics."
                  },
                  {
                    icon: BookOpen,
                    title: "Worked Examples Library",
                    description: "Learn from hundreds of fully worked solutions with detailed explanations of the thought process."
                  },
                  {
                    icon: BarChart3,
                    title: "Progressive Challenge Levels",
                    description: "Build confidence with graduated difficulty levels from foundational to advanced problems."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="feature-card-horizontal flex items-start space-x-6 animate-on-scroll"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="feature-icon-container flex-shrink-0">
                      <div className="feature-icon bg-gradient-to-br from-emerald-500 to-green-600">
                        <item.icon className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <button className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:from-emerald-700 hover:to-green-800">
                  Begin Problem-Solving Training <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Physics Applications */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="physics-grid-bg"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Beyond the Classroom
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Physics in Our World
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover how the physics principles you learn directly impact technologies and systems we use every day, 
              and how understanding physics opens doors to exciting career opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {physicsApplications.map((app, index) => (
              <div 
                key={index}
                className="application-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col relative application-hover-effect">
                  {/* Application image background */}
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/90 z-10"></div>
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                         style={{ backgroundImage: `url(${app.image})` }}></div>
                    
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <app.icon size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">{app.title}</h3>
                    <p className="text-gray-600">{app.description}</p>
                  </div>
                  
                  <div className="p-6 pt-0">
                    <button className="text-emerald-600 font-medium flex items-center hover:text-emerald-700 transition-colors">
                      Learn more <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-16 border-t border-emerald-100">
            <div className="text-center mb-12 animate-on-scroll">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Physics Career Pathways
              </h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Strong physics skills open doors to diverse and rewarding career opportunities 
                across many industries. Discover where physics can take you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerPaths.map((career, index) => (
                <div 
                  key={career.title}
                  className="career-card animate-on-scroll"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-emerald-100 h-full career-card-hover">
                    <div className="mb-4 career-icon-container">
                      <div className="career-icon bg-emerald-100">
                        <career.icon size={24} className="text-emerald-600" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{career.title}</h4>
                    
                    <ul className="space-y-2">
                      {career.fields.map((field, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                          <span className="text-gray-600">{field}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center animate-on-scroll">
            <Link href="/career-paths" className="inline-flex items-center bg-white border border-emerald-200 hover:border-emerald-300 text-emerald-600 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg">
              Explore Physics Career Paths <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* KCSE Success Section */}
      <section ref={statsRef} className="py-24 bg-gradient-to-br from-emerald-900 to-green-800 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3')"
          }}
        ></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Exam Success
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              KCSE Physics Excellence
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Our specialized KCSE physics preparation resources focus on exam techniques, 
              past paper practice, and systematic problem-solving approaches.
            </p>
          </div>
          
          {/* Stats Counter Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-on-scroll stats-card-hover"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg stats-icon-pulse`}>
                  <stat.icon size={32} className="text-white" />
                </div>
                
                <div className="counter text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="space-y-8">
                {[
                  {
                    title: "Past Paper Analysis",
                    description: "Review of past KCSE physics papers with detailed solution strategies and examiner insights."
                  },
                  {
                    title: "Formula Application Practice",
                    description: "Targeted exercises on when and how to apply key physics equations in exam scenarios."
                  },
                  {
                    title: "Calculation Accuracy Training",
                    description: "Techniques to avoid common mathematical errors while solving physics problems."
                  },
                  {
                    title: "Unit Conversion Mastery",
                    description: "Master the SI system and unit conversions that are essential for accurate solutions."
                  },
                  {
                    title: "Diagram Drawing Skills",
                    description: "Learn to create clear, accurate physics diagrams that earn maximum marks."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 exam-prep-item animate-on-scroll"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <button className="bg-white text-emerald-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center hover:scale-105">
                  Access KCSE Physics Resources <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl kcse-image-container">
                <Image 
                  src="/assets/images/physicsstudents.jpg"
                  alt="Students studying physics"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover kcse-image transition-transform duration-700 hover:scale-105"
                />
                
                {/* Floating info cards with advanced effects */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 floating-card card-1 hover-float">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-full p-2 mr-3">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold">Top Results</div>
                      <div className="text-emerald-300 text-sm">94% Grade Improvement</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 floating-card card-2 hover-float-delayed">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-full p-2 mr-3">
                      <Calculator className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold">Calculation Mastery</div>
                      <div className="text-emerald-300 text-sm">Systematic Problem Solving</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Dynamic Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-50 to-white"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-transparent bg-clip-text font-semibold text-lg tracking-wide uppercase mb-4">
              Student Success Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Physics Transformation Stories
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Hear from students and parents who have experienced the impact of our physics program on academic performance and understanding.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="testimonial-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-emerald-50 to-gray-50 rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col testimonial-hover-effect">
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="inline-block text-yellow-400" size={20} fill="#FACC15" />
                    ))}
                  </div>
                  
                  <div className="testimonial-quote-mark text-emerald-300 opacity-20 absolute top-8 right-8">
                    <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 60L30 0H50L30 60H0ZM40 60L70 0H80L60 60H40Z" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  <p className="text-gray-700 italic mb-8 leading-relaxed flex-grow relative z-10">
                    "{review.quote}"
                  </p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 overflow-hidden relative mr-4 testimonial-image-container">
                      <Image 
                        src={review.image} 
                        alt="Student photo"
                        fill
                        className="object-cover testimonial-image"
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
            <Link href="/testimonials" className="inline-flex items-center bg-white border border-emerald-200 hover:border-emerald-300 text-emerald-600 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg">
              Read More Success Stories <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="cta-background-animation"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 cta-glow-text">
              Master Physics. Ace Your KCSE.<br/>Transform Your Future.
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of Kenyan students who have transformed their understanding of physics 
              and achieved excellent results with StudyBuddy.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center cta-button-pulse">
                Begin Your Physics Journey <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
                Download Free Resources
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: "Complete", label: "KCSE Syllabus" },
                { number: "In-Depth", label: "Problem Solving" },
                { number: "Expert", label: "Physics Tutors" },
                { number: "24/7", label: "Learning Access" },
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

export default PhysicsPage;