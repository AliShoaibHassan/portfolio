import { useState, useEffect, useRef } from 'react';
import AnimatedBackground from './AnimatedBackground';



export default function SkillsCertifications() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const containerRef = useRef(null);

  // Animation for skill bubbles on mount
  useEffect(() => {
    const skillBubbles = document.querySelectorAll('.skill-bubble');

    skillBubbles.forEach((bubble, index) => {
      setTimeout(() => {
        bubble.classList.add('bubble-animate');
      }, 100 * index);
    });

    return () => {
      skillBubbles.forEach(bubble => {
        bubble.classList.remove('bubble-animate');
      });
    };
  }, [activeCategory]);

  // Different skill categories
  const skillCategories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Dev Tools' },
    { id: 'aiml', label: 'AI/ML' },

  ];

  // Skill data with visual attributes
  const skills = {
    frontend: [
      { name: 'React', level: 70, icon: '⚛️', color: 'bg-cyan-500', textColor: 'text-cyan-800' },
      { name: 'JavaScript', level: 75, icon: '𝗝𝗦', color: 'bg-yellow-400', textColor: 'text-yellow-800' },
      { name: 'TypeScript', level: 60, icon: 'TS', color: 'bg-blue-500', textColor: 'text-blue-800' },
      { name: 'HTML5', level: 90, icon: '🌐', color: 'bg-orange-400', textColor: 'text-orange-800' },
      { name: 'CSS3', level: 85, icon: '🎨', color: 'bg-blue-400', textColor: 'text-blue-800' },
      { name: 'Tailwind', level: 75, icon: '🌊', color: 'bg-teal-400', textColor: 'text-teal-800' },
      { name: 'Next.js', level: 65, icon: '⏭️', color: 'bg-gray-800', textColor: 'text-gray-100' },
    ],
    backend: [
      { name: 'Node.js', level: 65, icon: '🟢', color: 'bg-green-500', textColor: 'text-green-800' },
      { name: 'Express', level: 65, icon: '🚂', color: 'bg-gray-500', textColor: 'text-gray-800' },
      { name: 'MongoDB', level: 70, icon: '🍃', color: 'bg-green-400', textColor: 'text-green-800' },
      { name: 'Firebase', level: 65, icon: '🔥', color: 'bg-yellow-500', textColor: 'text-yellow-800' },
      { name: 'REST API', level: 70, icon: '🔌', color: 'bg-indigo-400', textColor: 'text-indigo-800' }
    ],
    tools: [
      { name: 'Git', level: 90, icon: '🔄', color: 'bg-orange-500', textColor: 'text-orange-800' },
      { name: 'Docker', level: 65, icon: '🐳', color: 'bg-blue-500', textColor: 'text-blue-800' },
      { name: 'Kubernetes', level: 65, icon: '📦', color: 'bg-blue-400', textColor: 'text-blue-800' },
      { name: 'VS Code', level: 75, icon: '💻', color: 'bg-blue-600', textColor: 'text-blue-800' },
      { name: 'CI/CD', level: 55, icon: '🔄', color: 'bg-green-500', textColor: 'text-green-800' }
    ],
    aiml: [
      { name: 'PyTorch', level: 50, icon: '🔥', color: 'bg-orange-500', textColor: 'text-orange-800' },
      { name: 'Pandas', level: 65, icon: '🐼', color: 'bg-green-500', textColor: 'text-green-800' },
      { name: 'NumPy', level: 65, icon: '🔢', color: 'bg-blue-500', textColor: 'text-blue-800' },
      { name: 'Scikit-learn', level: 75, icon: '🧠', color: 'bg-yellow-500', textColor: 'text-yellow-800' },
      { name: 'Matplotlib', level: 65, icon: '📊', color: 'bg-red-500', textColor: 'text-red-800' },
      { name: 'Seaborn', level: 55, icon: '📈', color: 'bg-teal-500', textColor: 'text-teal-800' }
    ],

  };

  // Your actual certifications
  const certifications = [
    {
      title: "Meta Frontend Developer - Professional Certificate",
      issuer: "Meta",
      date: "2025",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-400",
      badge: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
    },
    {
      title: "Python for Data Science, AI and Development",
      issuer: "IBM",
      date: "2024",
      icon: "🐍",
      color: "from-blue-600 to-blue-800",
      badge: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/123456"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford",
      date: "2024",
      icon: "🧠",
      color: "from-red-500 to-red-700",
      badge: "https://images.credly.com/images/4136ced8-75d5-4afb-8677-40b6236e2672/image.png"
    },
    {
      title: "Python for Data Science and Machine Learning",
      issuer: "Pierian Training",
      date: "2025",
      icon: "📈",
      color: "from-green-500 to-emerald-600",
      badge: "https://images.credly.com/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png"
    }
  ];

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <AnimatedBackground
        variant="default"
        intensity="medium"
        showParticles={true}
        showGeometry={true}
        showGradients={true}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="relative mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-white dark:to-white bg-clip-text text-transparent mb-6 pb-2">
            Skills & Certifications
          </h2>
          <div className="w-40 h-2 bg-blue-600 dark:bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-white max-w-2xl mx-auto leading-relaxed">
            A showcase of my technical expertise and professional certifications that drive innovation and success.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white">
            Technical Skills
          </h3>
          
          
          {/* 3D Rotating Skills Cube */}
          <div>
            <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[400px]">
              {/* Skills visualization */}
              <div className="relative w-full h-full flex items-center justify-center" ref={containerRef}>
                <div className="relative z-10 flex flex-wrap justify-center items-center gap-3">
                  {/* Animated floating skill bubbles */}
                  {skills[activeCategory].map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`skill-bubble opacity-0 transform translate-y-4 transition-all duration-500
                                 flex flex-col items-center justify-center ${skill.color} ${skill.textColor}
                                 rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl cursor-pointer
                                 hover:scale-110 hover:-translate-y-1 relative overflow-hidden`}
                      style={{
                        width: `${Math.max(90, skill.level + 40)}px`,
                        height: `${Math.max(90, skill.level + 40)}px`,
                        animationDelay: `${index * 0.1}s`,
                        animationDuration: `${4 + (skill.level % 10) * 0.2}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                      <div className="relative z-10 text-center">
                        <div className="text-xl md:text-2xl mb-1">{skill.icon}</div>
                        <p className="font-bold text-xs leading-tight">{skill.name}</p>
                        <span className="text-xs opacity-75 font-medium">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 md:px-8 md:py-4 rounded-full font-medium transition-all duration-300 transform shadow-lg
                            ${activeCategory === category.id
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105 shadow-xl ring-2 ring-blue-500/20 dark:from-red-600 dark:to-red-700 dark:ring-red-500/20'
                              : 'bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl hover:scale-105'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Certifications
            </h3>
            </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 dark:border-gray-700/50 transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10`}></div>
                
                {/* Certificate Icon/Badge */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    {cert.icon}
                  </div>
                  {/* Floating badge effect */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="text-center relative z-10">
                  <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-2 leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 font-medium">
                    {cert.issuer}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <span>📅</span>
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 border-2 border-blue-400/30 rounded-full animate-spin"></div>
                </div>
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 bg-purple-400/20 rounded-full animate-pulse"></div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          
        </div>
      </div>

      {/* Enhanced CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes skills-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes skills-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .skill-bubble {
          animation: float 4s ease-in-out infinite;
        }

        .bubble-animate {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-bubble:nth-child(odd) {
          animation-duration: 5s;
        }

        .skill-bubble:nth-child(3n) {
          animation-duration: 6s;
          animation-delay: 1s;
        }

        .skill-bubble:nth-child(3n+1) {
          animation-direction: alternate;
        }

        .skills-float {
          animation: skills-float 6s ease-in-out infinite;
        }

        .skills-spin-slow {
          animation: skills-spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}