import { useState, useEffect } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { MapPin, Globe, Cpu, Lightbulb } from "lucide-react";


export default function Contact() {
  const [activeCard, setActiveCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Email Me",
      subtitle: "Drop me a mail",
      action: "syedalishoaib.14@gmail.com",
      color: "from-red-400 to-red-500", // Gmail red
      description: "syedalishoaib.14@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
        </svg>
      ),
      title: "LinkedIn",
      subtitle: "Let's connect professionally",
      action: "Connect on LinkedIn",
      color: "from-blue-500 to-blue-600", // Changed to a darker LinkedIn blue
      description: "https://www.linkedin.com/in/syed-ali-shoaib/"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: "GitHub",
      subtitle: "Check out my code",
      action: "View Repositories",
      color: "from-gray-400 to-gray-500", // Changed to a slightly darker GitHub theme
      description: "https://github.com/AliShoaibHassan"
    }
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleContactClick = (index) => {
    switch(index) {
      case 0:
        window.location.href = 'mailto:syedalishoaib.14@gmail.com';
        break;
      case 1:
        window.open('https://www.linkedin.com/in/syed-ali-shoaib/', '_blank');
        break;
      case 2:
        window.open('https://github.com/AliShoaibHassan', '_blank');
        break;
      case 3:
        window.location.href = 'mailto:syedalishoaib.14@gmail.com?subject=Project Collaboration';
        break;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % contactMethods.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="relative pt-20 pb-10 overflow-hidden">
        <AnimatedBackground 
        variant="default" 
        intensity="medium"
        showParticles={true}
        showGeometry={true}
        showGradients={true}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="relative mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-white dark:to-white bg-clip-text text-transparent mb-6 pb-2 overflow-visible">
            Let's Create Something Amazing
          </h2>
          <div className="w-40 h-2 bg-blue-600 dark:bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-white max-w-2xl mx-auto leading-relaxed">
          Ready to bring your vision to life? Choose your preferred way to connect and let's start building the future together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Contact Cards */}
          <div className="space-y-6">
            
            
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    activeCard === index 
                      ? 'bg-white dark:bg-gray-800 shadow-2xl ring-2 ring-blue-500 dark:ring-purple-500' 
                      : 'bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl'
                  }`}
                  onClick={() => handleContactClick(index)}
                  onMouseEnter={() => setActiveCard(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                        {method.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">
                        {method.subtitle}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {method.description}
                      </p>
                    </div>
                    <div className="text-blue-500 dark:text-purple-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                      </svg>
                    </div>
                  </div>
                  
                  {activeCard === index && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Interactive Visual Element */}
          <div className="relative">
            <div 
              className="relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-8 h-96 overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Interactive Background */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transition-all duration-300"
                style={{
                  background: isHovering 
                    ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
                    : 'transparent'
                }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <div className="mb-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-spin-slow hover:animate-spin transition-all duration-500 transform hover:scale-110">
                    <div className="relative">
                      <Cpu className="w-10 h-10 text-white opacity-90 animate-pulse-light" />
                      <Lightbulb className="w-5 h-5 text-yellow-300 absolute -top-2 -right-2 animate-float" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4 mb-3 animate-fade-in-up">
                    Crafting Digital Experiences.
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center justify-center gap-3 animate-fade-in-up delay-100">
                    
                    Innovative solutions from concept to deployment.
                    
                  </p>
                </div>

                <div className="space-y-4 w-full max-w-md">
                  <div className="bg-white/15 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/40 rounded-3xl p-2 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-400 transform hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-500/25 rounded-full flex items-center justify-center shadow-inner">
                        <MapPin className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-base font-semibold text-gray-800 dark:text-gray-100">Rawalpindi, Pakistan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping-slow"></div>
                      <span className="text-sm text-emerald-400 font-medium tracking-wide">On-site</span>
                    </div>
                  </div>

                  <div className="bg-white/15 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/40 rounded-3xl p-2 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-400 transform hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-sky-500/25 rounded-full flex items-center justify-center shadow-inner">
                        <Globe className="w-5 h-5 text-sky-400" />
                      </div>
                      <span className="text-base font-semibold text-gray-800 dark:text-gray-100">Available Globally</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-sky-400 rounded-full animate-ping-slow"></div>
                      <span className="text-sm text-sky-400 font-medium tracking-wide">Remote</span>
                    </div>
                  </div>

                 
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 border-2 border-blue-500/20 rounded-full contact-spin-slow"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-purple-500/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
        
        
        
        {/* Copyright & Credits */}
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()}. Crafted with passion and precision.
            </p>
            <div className="text-gray-500 dark:text-gray-500 text-sm">
              Designed & Developed with <span className="text-red-500 animate-pulse">❤</span> by Syed Ali Shoaib Hassan
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes contact-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes contact-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .contact-float {
          animation: contact-float 6s ease-in-out infinite;
        }
        .contact-spin-slow {
          animation: contact-spin-slow 10s linear infinite;
        }
      `}</style>
    </footer>
  );
}