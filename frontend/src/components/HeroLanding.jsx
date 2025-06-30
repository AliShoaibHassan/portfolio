import { useState, useEffect } from 'react';
import AnimatedBackground from './AnimatedBackground';

export default function HeroLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactCard, setShowContactCard] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Tech stack with brand colors
  const techStack = [
    { name: 'React', color: 'bg-blue-500 dark:bg-red-500', textColor: 'text-blue-100 dark:text-red-100', borderColor: 'border-blue-400 dark:border-red-400' },
    { name: 'Next JS', color: 'bg-blue-600 dark:bg-red-600', textColor: 'text-blue-100 dark:text-red-100', borderColor: 'border-blue-500 dark:border-red-500' },
    { name: 'Node', color: 'bg-blue-700 dark:bg-red-700', textColor: 'text-blue-100 dark:text-red-100', borderColor: 'border-blue-600 dark:border-red-600' },
    { name: 'Express', color: 'bg-blue-800 dark:bg-red-800', textColor: 'text-blue-100 dark:text-red-100', borderColor: 'border-blue-700 dark:border-red-700' },
    { name: 'Mongo', color: 'bg-blue-900 dark:bg-red-900', textColor: 'text-blue-100 dark:text-red-100', borderColor: 'border-blue-800 dark:border-red-800' },
  ];

  const contactInfo = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/syed-ali-shoaib/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
        </svg>
      ),
      label: 'linkedin.com/in/syed-ali-shoaib',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AliShoaibHassan',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'github.com/AliShoaibHassan',
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      name: 'Email',
      url: 'mailto:syedalishoaib.14@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      label: 'syedalishoaib.14@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden" id="home">
      <AnimatedBackground 
        variant="default" 
        intensity="medium"
        showParticles={true}
        showGeometry={true}
        showGradients={true}
      />
      {/* Animated shapes */}
      <div className="absolute top-0 -right-20 w-72 h-72 bg-blue-600/10 dark:bg-red-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-32 -right-20 w-72 h-72 bg-blue-500/10 dark:bg-red-700/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark"></div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 dark:bg-red-600/20 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 dark:bg-red-700/20 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-blue-700/10 dark:bg-red-800/20 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      </div>
      
      {/* Contact Card Overlay */}
      {showContactCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            {/* Card Header */}
            <div className="p-6 border-b border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Get In Touch</h3>
                <button 
                  onClick={() => setShowContactCard(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Let's connect and discuss opportunities</p>
            </div>
            
            {/* Contact Links */}
            <div className="p-6 space-y-4">
              {contactInfo.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.url}
                  target={contact.name !== 'Email' ? '_blank' : undefined}
                  rel={contact.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`flex items-center space-x-4 p-4 rounded-xl border border-gray-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${contact.color}`}
                >
                  <div className="flex-shrink-0 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{contact.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{contact.label}</div>
                  </div>
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Card Footer */}
            <div className="p-6 pt-0">
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Available for on-site and remote opportunities
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Content container */}
      <div className="relative container mx-auto px-6 py-24 z-10">
        {/* Tech decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-blue-500/20 dark:border-red-500/20 rounded-lg rotate-12"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border border-blue-600/20 dark:border-red-600/20 rounded-md -rotate-12"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 border border-blue-700/20 dark:border-red-700/20 rounded-xl rotate-45"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text content */}
          <div className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Enhanced Full Stack Developer badge with red accent */}
              <div className="inline-block mb-6 animate-pulse-slow">
                <div className="relative">
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-red-600 dark:to-red-800 rounded-lg blur-sm"></span>
                  <span className="relative block px-5 py-3 bg-white dark:bg-slate-800 rounded-lg text-blue-600 dark:text-red-400 font-bold tracking-wide text-lg border border-blue-500/30 dark:border-red-500/30">
                    FULL STACK DEVELOPER
                  </span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
                <span className="block">Hello, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-red-500 dark:to-red-700">
                  Ali Shoaib
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                I create elegant digital solutions with a focus on performance, accessibility, and exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                <a 
                    href="/assets/Resume Ali Shoaib Software.pdf" 
                    download="Ali_Shoaib_Resume.pdf"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 dark:from-red-600 dark:to-red-800 text-white font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span>Download Resume</span>
                    <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-4-4m4 4l4-4m6-8V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2M8 4V2a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                    </svg>
                  </a>
                <button 
                  onClick={() => setShowContactCard(true)}
                  className="px-6 py-3 rounded-full border-2 border-blue-500/50 dark:border-red-500/50 text-gray-800 dark:text-white font-medium hover:bg-blue-500/10 dark:hover:bg-red-500/10 hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Me
                </button>
              </div>
              
              {/* Enhanced Tech stack */}
              <div className="mt-8 mb-10">
                <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <span 
                      key={tech.name} 
                      className={`px-3 py-1.5 ${tech.color} ${tech.textColor} rounded-md text-sm font-medium border ${tech.borderColor} shadow-sm hover:scale-105 transition-transform`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Social links */}
              <div className="flex gap-5 mt-6 justify-center md:justify-start">
                <a href="https://github.com/AliShoaibHassan" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors group">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/syed-ali-shoaib/" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors group">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
                <a href='mailto:syedalishoaib.14@gmail.com' className="mt-1 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors group">
                  <span className="sr-only">Email</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </a>
                
              </div>
            </div>
          </div>
          
          {/* Avatar/Image section */}
          <div className={`w-full md:w-1/2 mt-16 md:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative mx-auto w-72 h-72 md:w-[350px] md:h-[350px] animate-float">
              {/* Decorative rings */}
              <div className="absolute -top-6 -left-6 -right-6 -bottom-6 rounded-full border-2 border-dashed border-blue-500/30 dark:border-red-500/30 animate-spin-slow"></div>
              <div className="absolute -top-12 -left-12 -right-12 -bottom-12 rounded-full border border-blue-500/10 dark:border-red-500/10"></div>
              
              {/* Main image container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 dark:from-red-600 dark:to-red-800 p-2">
                <div className="rounded-full w-full h-full overflow-hidden bg-gray-50 dark:bg-slate-900">
                  {/* Image with proper scaling */}
                  <div className="w-full h-full relative">
                    <img 
                      src="../assets/PIC3.png" 
                      alt="Ali Shoaib" 
                      className="absolute w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-2 -right-4 bg-white dark:bg-slate-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-blue-500/30 dark:border-red-500/30 shadow-lg animate-float">
                <span className="text-blue-600 dark:text-red-400 text-xs font-medium">10+ Projects</span>
              </div>
              <div className="absolute -top-2 -left-4 bg-white dark:bg-slate-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-blue-500/30 dark:border-red-500/30 shadow-lg animate-float animation-delay-1000">
                <span className="text-blue-600 dark:text-red-400 text-xs font-medium">Final Year CS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
        <span className="text-gray-600 dark:text-gray-400 text-sm mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div> */}
    </div>
  );
}