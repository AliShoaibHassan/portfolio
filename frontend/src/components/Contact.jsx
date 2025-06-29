import { useState, useEffect } from 'react';
import AnimatedBackground from './AnimatedBackground';

export default function Contact() {
  const [activeCard, setActiveCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Me",
      subtitle: "Drop me a line",
      action: "syedalishoaib.14@gmail.com",
      color: "from-blue-500 to-purple-600",
      description: "syedalishoaib.14@gmail.com"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      subtitle: "Let's connect professionally",
      action: "Connect on LinkedIn",
      color: "from-blue-600 to-blue-800",
      description: "https://www.linkedin.com/in/syed-ali-shoaib/"
    },
    {
      icon: "💻",
      title: "GitHub",
      subtitle: "Check out my code",
      action: "View Repositories",
      color: "from-gray-700 to-gray-900",
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
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl mx-auto shadow-xl animate-bounce">
                    👋
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Interfaces with Impact. Logic with Soul.
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Full-stack creativity that bridges humans and technology.
                  </p>

                </div>
                
                <div className="space-y-4 w-full max-w-sm">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-3 flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">📍 Rawalpindi, Pakistan</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-3 flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">🌍 Available Worldwide</span>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-3 text-center font-medium">
                    Ready to collaborate? Pick a card! ⬅️
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