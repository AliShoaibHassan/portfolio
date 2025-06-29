import { useEffect, useRef } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { Bot, Zap, Lightbulb, Settings } from 'lucide-react';

export default function About() {
  const focusRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.progress-ring').forEach((ring, index) => {
              setTimeout(() => {
                const progress = ring.getAttribute('data-progress');
                const circumference = 2 * Math.PI * 45;
                const offset = circumference - (progress / 100) * circumference;
                ring.style.strokeDashoffset = offset;
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (focusRef.current) {
      observer.observe(focusRef.current);
    }
    
    return () => {
      if (focusRef.current) {
        observer.unobserve(focusRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" className="py-5 relative z-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <AnimatedBackground 
        variant="default" 
        intensity="medium"
        showParticles={true}
        showGeometry={true}
        showGradients={true}
      />
      
        <div className="relative z-10 mb-12 text-center">
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-white dark:to-white bg-clip-text text-transparent mb-6 pb-2">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 dark:bg-red-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Main Content */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Bio Section */}
          <div className="md:col-span-7 relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-24 h-24 hidden md:block">
              <div className="absolute inset-0 bg-blue-200 dark:bg-red-900/30 rounded-full opacity-50 animate-ping" style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}></div>
              <div className="absolute inset-0 bg-blue-300 dark:bg-red-900/50 rounded-full opacity-30"></div>
            </div>
            
            <div className="absolute -bottom-10 right-10 w-16 h-16 hidden md:block">
              <div className="absolute inset-0 bg-blue-200 dark:bg-red-900/30 rounded-md rotate-45 opacity-50"></div>
              <div className="absolute inset-0 bg-blue-300 dark:bg-red-900/50 rounded-md rotate-12 opacity-30"></div>
            </div>
            
            {/* Content */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg relative z-10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Hi, I'm <span className="text-blue-600 dark:text-red-500">Ali Shoaib</span></h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a Full Stack Developer and AI enthusiast in my final year of Computer Science, with a love for building cool things on the web. I started with web development a few years ago, and now I'm combining it with AI to create smarter, more useful applications.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
               I mostly work with React, Node.js, and MongoDB on the web side, and tools like PyTorch when it comes to AI. For my Final Year Project, I'm building a platform that lets fashion brands generate ad images and videos using AI, just from a product photo and a prompt.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I enjoy turning ideas into real projects, experimenting with new tech, and making sure things not only work well but look great too.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-4 py-2 bg-blue-50 dark:bg-red-900/20 text-blue-700 dark:text-red-300 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-blue-50 dark:bg-red-900/20 text-blue-700 dark:text-red-300 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-blue-50 dark:bg-red-900/20 text-blue-700 dark:text-red-300 rounded-full text-sm font-medium">
                  Continuous Learner
                </span>
                <span className="px-4 py-2 bg-blue-50 dark:bg-red-900/20 text-blue-700 dark:text-red-300 rounded-full text-sm font-medium">
                  Detail Oriented
                </span>
              </div>
              
              {/* Timeline */}
              <div className="relative pl-8 border-l-2 border-blue-500 dark:border-red-500 space-y-6 py-2">
                <div className="relative">
                  <div className="absolute -left-[25px] top-0 h-6 w-6 rounded-full border-4 border-blue-500 dark:border-red-500 bg-white dark:bg-gray-900"></div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Intern at Webrange Solutions</h4>
                  <p className="text-sm text-blue-600 dark:text-red-400 mb-2">Sept 2024 - Present</p>
                  <p className="text-gray-600 dark:text-gray-300">Currently working on building a fully functional website using the MERN stack, integrating AI 
                  features as part of a collaborative project with Webrange Solutions.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[25px] top-0 h-6 w-6 rounded-full border-4 border-blue-500 dark:border-red-500 bg-white dark:bg-gray-900"></div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Bachelors in Computer Science</h4>
                  <p className="text-sm text-blue-600 dark:text-red-400 mb-2">2022 - 2026</p>
                  <p className="text-gray-600 dark:text-gray-300">Bachelors in Computer Science from COMSATS University Islamabad.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[25px] top-0 h-6 w-6 rounded-full border-4 border-blue-500 dark:border-red-500 bg-white dark:bg-gray-900"></div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">A Levels</h4>
                  <p className="text-sm text-blue-600 dark:text-red-400 mb-2">2020 - 2022</p>
                  <p className="text-gray-600 dark:text-gray-300">A Levels from Beaconhouse Margalla Islamabad.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side Section */}
          <div className="md:col-span-5">
            <div className="space-y-8">
              {/* Profile Card */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-red-700 dark:to-red-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"></div>
                
                <div className="relative flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 mb-4">
                    <img 
                      src="/assets/PIC3.png" 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Syed Ali Shoaib Hassan</h3>
                  <p className="text-blue-100 dark:text-red-200 mb-4">Full Stack Developer</p>
                  
                  <div className="flex gap-4">
                    <a href="https://github.com/AliShoaibHassan" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/syed-ali-shoaib/" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                    <a href="mailto:syedalishoaib.14@gmail.com" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                      </svg>
                    </a>
                    
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="p-2">
                    <p className="text-2xl font-bold">CS</p>
                    <p className="text-xs opacity-80">Final Year</p>
                  </div>
                  <div className="p-2">
                    <p className="text-2xl font-bold">10+</p>
                    <p className="text-xs opacity-80">Projects</p>
                  </div>
                  <div className="p-2">
                    <p className="text-2xl font-bold">6+</p>
                    <p className="text-xs opacity-80">Months Exp.</p>
                  </div>
                </div>
              </div>
              
              {/* Current Focus & Interests */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg relative overflow-hidden border border-gray-100 dark:border-gray-700" ref={focusRef}>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Current Focus</h3>
                
                {/* What I'm Working On */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center">
                    <div className="w-3 h-3 bg-blue-500 dark:bg-red-500 rounded-full mr-3 animate-pulse"></div>
                    Currently Building
                  </h4>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border-l-4 border-blue-500 dark:border-red-500">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      AI-powered fashion advertising platform using MERN stack, PyTorch, and generative AI models for automated content creation.
                    </p>
                  </div>
                </div>

                

                {/* Interests */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center">
                    <div className="w-3 h-3 bg-blue-500 dark:bg-red-500 rounded-full mr-3 animate-pulse"></div>
                    What Excites Me
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: <Bot className="w-6 h-6 text-blue-500 dark:text-blue-400" />, label: 'AI' },
                      { icon: <Zap className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />, label: 'Web Performance' },
                      { icon: <Lightbulb className="w-6 h-6 text-orange-500 dark:text-orange-400" />, label: 'Innovation' },
                      { icon: <Settings className="w-6 h-6 text-green-500 dark:text-green-400" />, label: 'Problem Solving' }
                    ].map((interest, index) => (
                      <div 
                        key={index} 
                        className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600 group cursor-pointer"
                      >
                        <div className="mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                          {interest.icon}
                        </div>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          {interest.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Fun facts / Quote */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-red-700 dark:to-red-900 rounded-2xl p-10 text-white text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
            <div className="absolute top-4 left-4">
              <svg className="w-10 h-10 text-white opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="absolute bottom-4 right-4">
              <svg className="w-10 h-10 text-white opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>
            <div className="relative z-10">
              <p className="text-lg md:text-xl italic mb-6">
                "Web development is the closest thing to magic — you start with nothing but a blank file, and create something people can see, touch, and rely on."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}