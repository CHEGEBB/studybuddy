"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Atom,
  Calculator,
  BookOpen,
  Microscope,
  Globe,
  History as HistoryIcon,
  BookText,
  LineChart,
  Code,
  GraduationCap,
  BrainCircuit,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Trophy,
  HeartHandshake,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/subjects.scss";

const SubjectsPage = () => {
  const statsRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const subjectsRef = useRef<HTMLElement>(null);

  // Counter animation for stats
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll(".counter");

          counters.forEach((counter) => {
            const targetText = counter.textContent || "0";
            const target = parseInt(targetText.replace(/[^0-9]/g, ""));
            const duration = 2000;
            const step = Math.ceil(target / (duration / 16));
            let current = 0;

            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                counter.textContent = targetText.replace(
                  /[0-9]+/,
                  target.toString()
                );
                clearInterval(timer);
              } else {
                counter.textContent = targetText.replace(
                  /[0-9]+/,
                  current.toString()
                );
              }
            }, 16);
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Add animations to elements when they come into view
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Subject cards staggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && subjectsRef.current) {
          const cards = subjectsRef.current.querySelectorAll(".subject-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("card-appear");
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (subjectsRef.current) {
      observer.observe(subjectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Subjects data with descriptions, icons, colors, and features
  const subjects = [
    {
      name: "Mathematics",
      icon: Calculator,
      color: "blue",
      description:
        "Master algebra, calculus, geometry, and statistics through interactive visualizations and step-by-step solutions.",
      path: "/subjects/mathematics",
      topics: ["Algebra", "Calculus", "Geometry", "Statistics"],
      bgImage:
        "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Physics",
      icon: Atom,
      color: "purple",
      description:
        "Understand mechanics, electricity, thermodynamics, and optics with simulations and practical applications.",
      path: "/subjects/physics",
      topics: ["Mechanics", "Electricity", "Thermodynamics", "Optics"],
      bgImage:
        "https://images.unsplash.com/photo-1633493702341-4d04841df53b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Chemistry",
      icon: Sparkles,
      color: "green",
      description:
        "Explore organic, inorganic, and physical chemistry through interactive molecular models and virtual experiments.",
      path: "/subjects/chemistry",
      topics: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Analytical Methods",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Biology",
      icon: Microscope,
      color: "emerald",
      description:
        "Discover cell biology, genetics, ecology, and human physiology with detailed visualizations and virtual labs.",
      path: "/subjects/biology",
      topics: ["Cell Biology", "Genetics", "Ecology", "Human Physiology"],
      bgImage:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "English",
      icon: BookText,
      color: "red",
      description:
        "Develop grammar, writing, comprehension, and literature analysis skills through guided practice and examples.",
      path: "/subjects/english",
      topics: ["Grammar", "Writing", "Comprehension", "Literature"],
      bgImage:
        "https://images.unsplash.com/photo-1565022536102-f7645c84354a?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "History",
      icon: HistoryIcon,
      color: "amber",
      description:
        "Explore world history, local history, and historical analysis through engaging timelines and primary sources.",
      path: "/subjects/history",
      topics: [
        "World History",
        "Local History",
        "Historical Analysis",
        "Civilizations",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Geography",
      icon: Globe,
      color: "teal",
      description:
        "Study physical, human, and environmental geography with interactive maps and case studies.",
      path: "/subjects/geography",
      topics: [
        "Physical Geography",
        "Human Geography",
        "Environmental Geography",
        "Cartography",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Economics",
      icon: LineChart,
      color: "orange",
      description:
        "Learn microeconomics, macroeconomics, and business studies through real-world examples and data analysis.",
      path: "/subjects/economics",
      topics: [
        "Microeconomics",
        "Macroeconomics",
        "Business Studies",
        "Economic Development",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Computer Studies",
      icon: Code,
      color: "cyan",
      description:
        "Develop programming skills, web development, and computational thinking through hands-on coding projects.",
      path: "/subjects/computer-science",
      topics: [
        "Programming",
        "Web Development",
        "Data Structures",
        "Algorithms",
      ],
      bgImage:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Benefits and features
  const benefits = [
    {
      title: "Expert Teachers",
      description:
        "Learn from Kenya's top-rated KCSE teachers with proven track records of student success.",
      icon: GraduationCap,
    },
    {
      title: "Visual Learning",
      description:
        "Complex concepts explained through interactive visualizations, animations, and 3D models.",
      icon: BrainCircuit,
    },
    {
      title: "Exam Focus",
      description:
        "Practice with past papers, marking schemes, and targeted exam preparation resources.",
      icon: Award,
    },
    {
      title: "Personalized Learning",
      description:
        "Adaptive learning paths that adjust to your strengths, weaknesses, and learning pace.",
      icon: Users,
    },
  ];

  // Parent testimonials
  const testimonials = [
    {
      quote:
        "StudyBuddy transformed my daughter's grades. She went from struggling with math and physics to confidently scoring As in both subjects!",
      name: "Mary Wanjiku",
      role: "Parent of Form 4 Student",
      location: "Nairobi",
    },
    {
      quote:
        "The value is incredible. For the price of one tutor, my son gets expert teaching in all subjects. His overall performance has improved dramatically.",
      name: "John Omondi",
      role: "Parent of Form 3 Student",
      location: "Mombasa",
    },
    {
      quote:
        "I appreciate how StudyBuddy adapts to my child's learning style. The personalized approach has made a huge difference in her confidence and results.",
      name: "Sarah Kimani",
      role: "Parent of Form 2 Student",
      location: "Kisumu",
    },
  ];

  return (
    <div className="subjects-page min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-black"
      >
        {/* Background Image from Unsplash */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 hero-background"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1648201637025-1c77b9be3013?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>

        {/* Emerald/Green Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-green-800/80 to-transparent z-10"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight drop-shadow-md">
              Master{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                Every Subject
              </span>{" "}
              with StudyBuddy
            </h1>

            <p className="text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-sm">
              Comprehensive learning for all high school subjects. Expert
              teachers, interactive content, and exam-focused resources — all in
              one platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl flex items-center"
              >
                Start Learning <ArrowRight className="ml-2" size={20} />
              </Link>

              <a
                href="#subjects"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center"
              >
                Explore Subjects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="bg-blue-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
              Why StudyBuddy
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-6 mb-4">
              A Better Way to Learn All Subjects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach ensures success across every subject in
              the curriculum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5">
                    <benefit.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Subjects Section */}
      <section
        id="subjects"
        ref={subjectsRef}
        className="py-20 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="bg-purple-50 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
              Our Curriculum
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-6 mb-4">
              Explore All 10 High School Subjects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of every subject in the KCSE curriculum,
              designed by expert teachers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject) => (
              <div key={subject.name} className="subject-card">
                <Link href={subject.path} className="block h-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg h-full group transition-all duration-300 hover:shadow-xl border border-gray-100 bg-white">
                    {/* Fixed header section with bgImage */}
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${subject.bgImage})` }}
                      ></div>

                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-green-700/80 to-emerald-900/60`}
                      ></div>

                      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                        <div className="flex justify-between items-start">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                            <subject.icon size={24} className="text-white" />
                          </div>
                          <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium">
                            KCSE Aligned
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold">{subject.name}</h3>
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-5">
                        {subject.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          Key Topics:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {subject.topics.map((topic, i) => (
                            <span
                              key={i}
                              className={`bg-green-50 text-teal-700 px-3 py-1 rounded-full text-sm`}
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className="text-yellow-400"
                              fill="#FACC15"
                            />
                          ))}
                        </div>
                        <span
                          className={`inline-flex items-center text-red-600 font-medium group-hover:underline`}
                        >
                          Learn more <ArrowRight size={16} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link
              href="/pricing"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:from-blue-600 hover:to-purple-700"
            >
              Get Access to All Subjects{" "}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 lg:order-1 ">
              <div className="learning-journey-graphics relative">
                <div className="journey-step active bg-green-500 ">
                  <div className="journey-icon">
                    <BookOpen size={32}  className="text-white"/>
                  </div>
                  <div className="journey-content">
                    <h3>Comprehensive Learning</h3>
                    <p>Study materials for all 10 subjects in one place</p>
                  </div>
                </div>
                <div className="journey-connector"></div>
                <div className="journey-step">
                  <div className="journey-icon">
                    <BrainCircuit size={32} />
                  </div>
                  <div className="journey-content">
                    <h3>Practice & Apply</h3>
                    <p>Interactive exercises and virtual labs</p>
                  </div>
                </div>
                <div className="journey-connector"></div>
                <div className="journey-step">
                  <div className="journey-icon">
                    <CheckCircle size={32} />
                  </div>
                  <div className="journey-content">
                    <h3>Assessments</h3>
                    <p>Test understanding with subject-specific quizzes</p>
                  </div>
                </div>
                <div className="journey-connector"></div>
                <div className="journey-step">
                  <div className="journey-icon">
                    <Award size={32} />
                  </div>
                  <div className="journey-content">
                    <h3>KCSE Preparation</h3>
                    <p>Targeted exam preparation for every subject</p>
                  </div>
                </div>
                <div className="journey-connector"></div>
                <div className="journey-step">
                  <div className="journey-icon">
                    <Trophy size={32} />
                  </div>
                  <div className="journey-content">
                    <h3>Academic Success</h3>
                    <p>Improved grades and subject mastery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll order-1 lg:order-2">
              <span className="bg-purple-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
                Your Learning Journey
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-6 mb-6">
                Master All Subjects with One Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                StudyBuddy provides a comprehensive approach to learning all
                high school subjects, guiding you from basic understanding to
                exam excellence.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      All Subjects, One Subscription
                    </h3>
                    <p className="text-gray-600">
                      Access all 10 subjects with a single affordable
                      subscription - no need for multiple tutors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Personalized Learning Path
                    </h3>
                    <p className="text-gray-600">
                      Our system adapts to your strengths and weaknesses across
                      all subjects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Cross-Subject Connections
                    </h3>
                    <p className="text-gray-600">
                      Understand how concepts connect across different subjects
                      for deeper learning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:from-emerald-600 hover:to-teal-700"
                >
                  Start Your Learning Journey{" "}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
              Parent Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-6 mb-4">
              What Parents Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Parents love how StudyBuddy helps their children excel in all
              subjects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400"
                        size={20}
                        fill="#FACC15"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 italic mb-6 flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div>
                    <div className="font-bold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-green-600 text-sm">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Parents Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="bg-indigo-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
                For Parents
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-6 mb-6">
                Why Parents Choose StudyBuddy for Their Children
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Investing in your child&apos;s education is the most important
                decision you&apos;ll make. Here&apos;s why StudyBuddy is the smart choice
                for comprehensive subject mastery.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg mt-1">
                    <HeartHandshake className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Affordable All-Subject Access
                    </h3>
                    <p className="text-gray-600">
                      For the price of one private tutor, your child gets expert
                      instruction in all 10 subjects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg mt-1">
                    <HeartHandshake className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Progress Tracking
                    </h3>
                    <p className="text-gray-600">
                      Monitor your child&apos;s progress across all subjects through
                      our parent dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg mt-1">
                    <HeartHandshake className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Safe Learning Environment
                    </h3>
                    <p className="text-gray-600">
                      A secure, ad-free platform where your child can focus
                      entirely on learning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/pricing"
                  className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
                >
                  See Our Family Plans <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="parent-image-grid">
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Parent with student"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg mt-10">
                    <Image
                      src="https://images.unsplash.com/photo-1730382624709-81e52dd294d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Student studying"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1637681068401-8265da5ffe69?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Student achievement"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1602145095452-aba06946ed05?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Family celebrating"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Excel in All Subjects?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join StudyBuddy today and get access to comprehensive learning
              materials for all 10 high school subjects.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/signup"
                className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl flex items-center"
              >
                Start Learning Now <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/pricing"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SubjectsPage;
