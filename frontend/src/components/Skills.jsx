import { useState, useEffect, useRef } from 'react';
import AnimatedBackground from './AnimatedBackground';

export default function Skills() {
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
    { id: 'soft', label: 'Soft Skills' }
  ];

  // Skill data with visual attributes
  const skills = {
    frontend: [
      { name: 'React', level: 80, icon: '⚛️', color: 'bg-cyan-500', textColor: 'text-cyan-800' },
      { name: 'JavaScript', level: 80, icon: '𝗝𝗦', color: 'bg-yellow-400', textColor: 'text-yellow-800' },
      { name: 'TypeScript', level: 70, icon: 'TS', color: 'bg-blue-500', textColor: 'text-blue-800' },
      { name: 'HTML5', level: 95, icon: '🌐', color: 'bg-orange-400', textColor: 'text-orange-800' },
      { name: 'CSS3', level: 90, icon: '🎨', color: 'bg-blue-400', textColor: 'text-blue-800' },
      { name: 'Tailwind', level: 80, icon: '🌊', color: 'bg-teal-400', textColor: 'text-teal-800' },
      { name: 'Next.js', level: 75, icon: '⏭️', color: 'bg-gray-800', textColor: 'text-gray-100' },
    ],
    backend: [
      { name: 'Node.js', level: 80, icon: '🟢', color: 'bg-green-500', textColor: 'text-green-800' },
      { name: 'Express', level: 80, icon: '🚂', color: 'bg-gray-500', textColor: 'text-gray-800' },
      { name: 'MongoDB', level: 75, icon: '🍃', color: 'bg-green-400', textColor: 'text-green-800' },
      { name: 'Firebase', level: 70, icon: '🔥', color: 'bg-yellow-500', textColor: 'text-yellow-800' },
      { name: 'REST API', level: 75, icon: '🔌', color: 'bg-indigo-400', textColor: 'text-indigo-800' }
    ],
    tools: [
      { name: 'Git', level: 90, icon: '🔄', color: 'bg-orange-500', textColor: 'text-orange-800' },
      { name: 'Docker', level: 80, icon: '🐳', color: 'bg-blue-500', textColor: 'text-blue-800' },
      { name: 'Kubernetes', level: 85, icon: '📦', color: 'bg-blue-400', textColor: 'text-blue-800' },
      { name: 'VS Code', level: 90, icon: '💻', color: 'bg-blue-600', textColor: 'text-blue-800' },
      { name: 'CI/CD', level: 80, icon: '🔄', color: 'bg-green-500', textColor: 'text-green-800' }
    ],
    aiml: [
      { name: 'PyTorch', level: 70, icon: '🔥', color: 'bg-orange-500', textColor: 'text-orange-800' },
      { name: 'Pandas', level: 85, icon: '🐼', color: 'bg-green-500', textColor: 'text-green-800' },
      { name: 'NumPy', level: 80, icon: '🔢', color: 'bg-blue-500', textColor: 'text-blue-800' },
      { name: 'Scikit-learn', level: 80, icon: '🧠', color: 'bg-yellow-500', textColor: 'text-yellow-800' },
      { name: 'Matplotlib', level: 75, icon: '📊', color: 'bg-red-500', textColor: 'text-red-800' },
      { name: 'Seaborn', level: 75, icon: '📈', color: 'bg-teal-500', textColor: 'text-teal-800' }
    ],
    soft: [
      { name: 'Team Work', level: 95, icon: '👥', color: 'bg-blue-400', textColor: 'text-blue-800' },
      { name: 'Communication', level: 80, icon: '🗣️', color: 'bg-green-500', textColor: 'text-green-800' },
      { name: 'Problem Solving', level: 90, icon: '🧩', color: 'bg-amber-500', textColor: 'text-amber-800' },
      { name: 'Time Management', level: 85, icon: '⏰', color: 'bg-red-400', textColor: 'text-red-800' },
      { name: 'Adaptability', level: 90, icon: '🔄', color: 'bg-violet-500', textColor: 'text-violet-800' }
    ]
  };

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
            My Skills & Expertise
          </h2>
          <div className="w-40 h-2 bg-blue-600 dark:bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-white max-w-2xl mx-auto leading-relaxed">
            A showcase of my technical expertise and professional capabilities that drive innovation and success.
          </p>
        </div>

        {/* 3D Rotating Skills Cube */}
        <div className="mb-12">
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
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
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

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={`card-${skill.name}`}
              className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 dark:border-gray-700/50 transform hover:scale-105 hover:-translate-y-1 relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${skill.color} rounded-xl flex items-center justify-center text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white">{skill.name}</h3>
                  </div>
                  <span className="font-bold text-blue-600 dark:text-white text-lg">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full"></div>
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-red-500 dark:to-red-600 rounded-full relative overflow-hidden"
                    style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-in-out' }}
                  >
                    {/* Removed the problematic inner div that caused the white fade */}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 right-2 w-8 h-8 border border-blue-500/20 rounded-full skills-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border border-purple-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
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