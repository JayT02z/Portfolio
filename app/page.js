'use client';

import { useEffect, useState } from 'react';
import {
    Mail,
    Phone,
    Github,
    Linkedin,
    Facebook,
    Instagram,
    MapPin,
    ArrowUp,
    Monitor,
    Server,
    Settings,
    Hotel,
    Stethoscope,
    Fish,
    BookOpen
} from 'lucide-react';

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        // Intersection Observer for scroll animations and active section tracking
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Update active section
                        const sectionId = entry.target.id || 'home';
                        setActiveSection(sectionId);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
        );

        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        animatedElements.forEach((el) => observer.observe(el));

        // Observe sections for navigation
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        // Handle scroll for back to top button
        const handleScroll = () => {
            const scrolled = window.scrollY;
            setShowBackToTop(scrolled > 300);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (sectionId === 'home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <main style={{background: 'linear-gradient(135deg, #01303f 0%, #02577a 50%, #01303f 100%)'}} className="text-white min-h-screen relative overflow-hidden">
            {/* Background animated gradients with custom colors */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{background: '#89d6fb'}}></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{background: '#02a9f7', animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{background: '#d4f0fc', animationDelay: '4s'}}></div>
            </div>

            {/* Navigation Dots */}
            <div className="nav-dots">
                <div
                    className={`nav-dot ${activeSection === 'home' ? 'active' : ''}`}
                    onClick={() => scrollToSection('home')}
                    title="Home"
                ></div>
                <div
                    className={`nav-dot ${activeSection === 'projects' ? 'active' : ''}`}
                    onClick={() => scrollToSection('projects')}
                    title="Projects"
                ></div>
                <div
                    className={`nav-dot ${activeSection === 'skills' ? 'active' : ''}`}
                    onClick={() => scrollToSection('skills')}
                    title="Skills"
                ></div>
                <div
                    className={`nav-dot ${activeSection === 'contact' ? 'active' : ''}`}
                    onClick={() => scrollToSection('contact')}
                    title="Contact"
                ></div>
            </div>

            {/* Back to Top Button */}
            <div
                className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                title="Back to Top"
            >
                <ArrowUp className="w-6 h-6" style={{color: '#01303f'}} />
            </div>

            {/* Hero Section */}
            <section id="home" className="flex min-h-screen flex-col items-center justify-center px-6 relative z-10">
                <div className="text-center max-w-4xl fade-in">
                    <div className="mb-8 animate-float">
                        <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl font-bold animate-glow" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb)'}}>
                            JT
                        </div>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb, #d4f0fc)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                        Hi 👋 I&apos;m JayT
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 gradient-text">
                        Front-End Developer (Intern) | React | Next.js
                    </p>
                    <p className="text-lg mb-8 max-w-2xl mx-auto" style={{color: '#d4f0fc'}}>
                        Passionate about creating modern, responsive web applications with cutting-edge technologies.
                        Currently based in Binh Tan District, Ho Chi Minh City.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button onClick={() => scrollToSection('projects')} className="px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 modern-button font-semibold" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb)'}}>
                            View Projects
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 modern-button font-semibold" style={{background: 'linear-gradient(135deg, #02577a, #02a9f7)'}}>
                            Contact Me
                        </button>
                        <a href="https://github.com/JayT02z" target="_blank" rel="noopener noreferrer"
                           className="px-8 py-4 glass hover:bg-opacity-50 rounded-xl transition-all duration-300 transform hover:scale-105 modern-button font-semibold">
                            GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 fade-in" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb, #d4f0fc)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Hotel Booking Project */}
                        <div className="glass rounded-2xl p-8 project-card slide-in-left">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb)'}}>
                                    <Hotel className="w-6 h-6" style={{color: '#01303f'}} />
                                </div>
                                <h3 className="text-2xl font-bold" style={{color: '#02a9f7'}}>Hotel Booking Website</h3>
                            </div>
                            <p className="mb-6 leading-relaxed" style={{color: '#d4f0fc'}}>
                                A comprehensive hotel booking platform featuring room search, reservation management,
                                and user authentication. Built with modern web technologies for seamless user experience.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb)', color: '#01303f'}}>React</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #02577a, #02a9f7)', color: '#d4f0fc'}}>Node.js</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #89d6fb, #d4f0fc)', color: '#01303f'}}>MongoDB</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #02a9f7, #02577a)', color: '#d4f0fc'}}>Express</span>
                            </div>
                            <a href="https://github.com/Kinn-max/web-booking-hotel" target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center transition-colors font-semibold group" style={{color: '#02a9f7'}}>
                                View on GitHub
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>

                        {/* Doctor Appointment Project */}
                        <div className="glass rounded-2xl p-8 project-card slide-in-right">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{background: 'linear-gradient(135deg, #89d6fb, #d4f0fc)'}}>
                                    <Stethoscope className="w-6 h-6" style={{color: '#01303f'}} />
                                </div>
                                <h3 className="text-2xl font-bold" style={{color: '#89d6fb'}}>Doctor Appointment System</h3>
                            </div>
                            <p className="mb-6 leading-relaxed" style={{color: '#d4f0fc'}}>
                                A healthcare management system enabling patients to book appointments with doctors,
                                manage schedules, and handle medical records efficiently with a user-friendly interface.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb)', color: '#01303f'}}>React</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #89d6fb, #d4f0fc)', color: '#01303f'}}>JavaScript</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #02577a, #02a9f7)', color: '#d4f0fc'}}>Firebase</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb)', color: '#01303f'}}>Tailwind CSS</span>
                            </div>
                            <a href="https://github.com/JayT02z/Doctor-Appointment-Booking-System" target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center transition-colors font-semibold group" style={{color: '#89d6fb'}}>
                                View on GitHub
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>

                        {/* Koi Fish Website */}
                        <div className="glass rounded-2xl p-8 project-card slide-in-left">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{background: 'linear-gradient(135deg, #02577a, #02a9f7)'}}>
                                    <Fish className="w-6 h-6" style={{color: '#d4f0fc'}} />
                                </div>
                                <h3 className="text-2xl font-bold" style={{color: '#02a9f7'}}>WebCaKoi Platform</h3>
                            </div>
                            <p className="mb-6 leading-relaxed" style={{color: '#d4f0fc'}}>
                                An interactive website dedicated to Koi fish enthusiasts, featuring fish catalogs,
                                care guides, and community features. Designed with beautiful UI and responsive design.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #89d6fb, #d4f0fc)', color: '#01303f'}}>HTML5</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb)', color: '#01303f'}}>CSS3</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #d4f0fc, #89d6fb)', color: '#01303f'}}>JavaScript</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #02577a, #02a9f7)', color: '#d4f0fc'}}>Responsive Design</span>
                            </div>
                            <a href="https://github.com/JayT02z/WebCaKoi" target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center transition-colors font-semibold group" style={{color: '#02a9f7'}}>
                                View on GitHub
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>

                        {/* English Courses Project */}
                        <div className="glass rounded-2xl p-8 project-card slide-in-right">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{background: 'linear-gradient(135deg, #89d6fb, #d4f0fc)'}}>
                                    <BookOpen className="w-6 h-6" style={{color: '#01303f'}} />
                                </div>
                                <h3 className="text-2xl font-bold" style={{color: '#89d6fb'}}>English Courses Platform</h3>
                            </div>
                            <p className="mb-6 leading-relaxed" style={{color: '#d4f0fc'}}>
                                An educational platform for English language learning with interactive courses,
                                progress tracking, and multimedia content to enhance the learning experience.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb)', color: '#01303f'}}>React</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #02577a, #02a9f7)', color: '#d4f0fc'}}>Node.js</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #89d6fb, #d4f0fc)', color: '#01303f'}}>Database</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium" style={{background: 'linear-gradient(135deg, #02a9f7, #02577a)', color: '#d4f0fc'}}>Education Tech</span>
                            </div>
                            <a href="https://github.com/Newbie1402/CoursesEnglish" target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center transition-colors font-semibold group" style={{color: '#89d6fb'}}>
                                View on GitHub
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-16 fade-in" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb, #d4f0fc)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                        Technical Skills
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass rounded-2xl p-8 slide-in-left">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb)'}}>
                                <Monitor className="w-8 h-8" style={{color: '#01303f'}} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6" style={{color: '#02a9f7'}}>Frontend</h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb)', color: '#01303f'}}>React</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #02577a, #02a9f7)', color: '#d4f0fc'}}>Next.js</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #89d6fb, #d4f0fc)', color: '#01303f'}}>JavaScript</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #d4f0fc, #89d6fb)', color: '#01303f'}}>HTML5</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #02a9f7, #02577a)', color: '#d4f0fc'}}>CSS3</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #89d6fb, #02a9f7)', color: '#01303f'}}>Tailwind CSS</span>
                            </div>
                        </div>
                        <div className="glass rounded-2xl p-8 fade-in">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(135deg, #89d6fb, #d4f0fc)'}}>
                                <Server className="w-8 h-8" style={{color: '#01303f'}} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6" style={{color: '#89d6fb'}}>Backend</h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #02577a, #02a9f7)', color: '#d4f0fc'}}>Node.js</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb)', color: '#01303f'}}>Express</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #89d6fb, #d4f0fc)', color: '#01303f'}}>Firebase</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #02a9f7, #02577a)', color: '#d4f0fc'}}>MongoDB</span>
                            </div>
                        </div>
                        <div className="glass rounded-2xl p-8 slide-in-right">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(135deg, #02577a, #89d6fb)'}}>
                                <Settings className="w-8 h-8" style={{color: '#d4f0fc'}} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6" style={{color: '#02a9f7'}}>Tools</h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #d4f0fc, #89d6fb)', color: '#01303f'}}>Git</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #02577a, #02a9f7)', color: '#d4f0fc'}}>GitHub</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb)', color: '#01303f'}}>VS Code</span>
                                <span className="px-4 py-2 text-sm rounded-full skill-badge font-medium shadow-lg" style={{background: 'linear-gradient(135deg, #89d6fb, #d4f0fc)', color: '#01303f'}}>Responsive Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-16 fade-in" style={{background: 'linear-gradient(135deg, #02a9f7, #89d6fb, #d4f0fc)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                        Get In Touch
                    </h2>
                    <p className="text-xl mb-12 fade-in" style={{color: '#d4f0fc'}}>
                        I&apos;m always open to discussing new opportunities and interesting projects.
                        Feel free to reach out through any of the channels below!
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <a href="mailto:chauthinh204@gmail.com"
                           className="glass rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 project-card slide-in-left">
                            <div className="flex justify-center mb-4">
                                <Mail className="w-10 h-10" style={{color: '#02a9f7'}} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{color: '#02a9f7'}}>Email</h3>
                            <p style={{color: '#d4f0fc'}}>chauthinh204@gmail.com</p>
                        </a>

                        <a href="tel:+84908971405"
                           className="glass rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 project-card fade-in">
                            <div className="flex justify-center mb-4">
                                <Phone className="w-10 h-10" style={{color: '#89d6fb'}} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{color: '#89d6fb'}}>Phone</h3>
                            <p style={{color: '#d4f0fc'}}>+84 908 971 405</p>
                        </a>

                        <a href="https://github.com/JayT02z" target="_blank" rel="noopener noreferrer"
                           className="glass rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 project-card slide-in-right">
                            <div className="flex justify-center mb-4">
                                <Github className="w-10 h-10" style={{color: '#02a9f7'}} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{color: '#02a9f7'}}>GitHub</h3>
                            <p style={{color: '#d4f0fc'}}>@JayT02z</p>
                        </a>

                        <a href="https://lnk.ink/OEPaz" target="_blank" rel="noopener noreferrer"
                           className="glass rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 project-card slide-in-left">
                            <div className="flex justify-center mb-4">
                                <Linkedin className="w-10 h-10" style={{color: '#89d6fb'}} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{color: '#89d6fb'}}>LinkedIn</h3>
                            <p style={{color: '#d4f0fc'}}>Professional Profile</p>
                        </a>

                        <a href="https://www.facebook.com/cdt2004" target="_blank" rel="noopener noreferrer"
                           className="glass rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 project-card fade-in">
                            <div className="flex justify-center mb-4">
                                <Facebook className="w-10 h-10" style={{color: '#02a9f7'}} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{color: '#02a9f7'}}>Facebook</h3>
                            <p style={{color: '#d4f0fc'}}>@cdt2004</p>
                        </a>

                        <a href="https://www.instagram.com/jtsc204t/" target="_blank" rel="noopener noreferrer"
                           className="glass rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 project-card slide-in-right">
                            <div className="flex justify-center mb-4">
                                <Instagram className="w-10 h-10" style={{color: '#89d6fb'}} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{color: '#89d6fb'}}>Instagram</h3>
                            <p style={{color: '#d4f0fc'}}>@jtsc204t</p>
                        </a>
                    </div>

                    <div className="glass rounded-2xl p-8 max-w-md mx-auto fade-in">
                        <div className="flex justify-center mb-4">
                            <MapPin className="w-10 h-10" style={{color: '#02a9f7'}} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2" style={{color: '#02a9f7'}}>Location</h3>
                        <p style={{color: '#d4f0fc'}}>Binh Tan District, Ho Chi Minh City, Vietnam</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 glass text-center relative z-10 fade-in">
                <p className="text-lg" style={{color: '#89d6fb'}}>
                    © 2025 JayT. Built with Next.js and Tailwind CSS.
                </p>
                <div className="mt-4 flex justify-center space-x-6">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{background: '#02a9f7'}}></div>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{background: '#89d6fb', animationDelay: '0.5s'}}></div>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{background: '#d4f0fc', animationDelay: '1s'}}></div>
                </div>
            </footer>
        </main>
    );
}