import { useMemo } from 'react';
import useBackgroundStore from '../stores/backgroundStore';

const AnimatedBackground = ({ 
  variant = 'default', 
  intensity = 'medium',
  customColors = null,
  showParticles = true,
  showGeometry = true,
  showGradients = true 
}) => {
  const { theme, animationsEnabled, particleCount } = useBackgroundStore();
  
  // Generate particles based on count
  const particles = useMemo(() => {
    if (!showParticles || !animationsEnabled) return [];
    
    return [...Array(particleCount)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      color: i % 3 === 0 ? 'rgba(147, 51, 234, 0.2)' : 
             i % 3 === 1 ? 'rgba(59, 130, 246, 0.2)' : 
             'rgba(16, 185, 129, 0.2)'
    }));
  }, [particleCount, showParticles, animationsEnabled]);

  // Define color schemes for different variants
  const colorSchemes = {
    default: {
      light: {
        gradientFrom: 'from-gray-50 via-blue-50 to-purple-50',
        accent1: 'bg-blue-400/10',
        accent2: 'bg-purple-400/10',
        accent3: 'bg-gradient-to-r from-blue-400/5 to-purple-400/5',
        accent4: 'bg-gradient-to-r from-indigo-400/8 to-cyan-400/8',
        accent5: 'bg-gradient-to-r from-violet-400/8 to-pink-400/8'
      },
      dark: {
        gradientFrom: 'from-gray-900 via-gray-800 to-gray-900',
        accent1: 'bg-blue-400/10',
        accent2: 'bg-purple-400/10',
        accent3: 'bg-gradient-to-r from-blue-400/5 to-purple-400/5',
        accent4: 'bg-gradient-to-r from-indigo-400/8 to-cyan-400/8',
        accent5: 'bg-gradient-to-r from-violet-400/8 to-pink-400/8'
      }
    },
    hero: {
      light: {
        gradientFrom: 'from-blue-50 via-purple-50 to-pink-50',
        accent1: 'bg-blue-500/15',
        accent2: 'bg-purple-500/15',
        accent3: 'bg-gradient-to-r from-blue-500/10 to-purple-500/10',
        accent4: 'bg-gradient-to-r from-cyan-500/12 to-blue-500/12',
        accent5: 'bg-gradient-to-r from-purple-500/12 to-pink-500/12'
      },
      dark: {
        gradientFrom: 'from-gray-900 via-blue-900/20 to-purple-900/20',
        accent1: 'bg-blue-500/15',
        accent2: 'bg-purple-500/15',
        accent3: 'bg-gradient-to-r from-blue-500/10 to-purple-500/10',
        accent4: 'bg-gradient-to-r from-cyan-500/12 to-blue-500/12',
        accent5: 'bg-gradient-to-r from-purple-500/12 to-pink-500/12'
      }
    },
    contact: {
      light: {
        gradientFrom: 'from-green-50 via-blue-50 to-purple-50',
        accent1: 'bg-green-400/10',
        accent2: 'bg-blue-400/10',
        accent3: 'bg-gradient-to-r from-green-400/5 to-blue-400/5',
        accent4: 'bg-gradient-to-r from-teal-400/8 to-green-400/8',
        accent5: 'bg-gradient-to-r from-blue-400/8 to-purple-400/8'
      },
      dark: {
        gradientFrom: 'from-gray-900 via-green-900/10 to-blue-900/10',
        accent1: 'bg-green-400/10',
        accent2: 'bg-blue-400/10',
        accent3: 'bg-gradient-to-r from-green-400/5 to-blue-400/5',
        accent4: 'bg-gradient-to-r from-teal-400/8 to-green-400/8',
        accent5: 'bg-gradient-to-r from-blue-400/8 to-purple-400/8'
      }
    }
  };

  const currentColors = customColors || colorSchemes[variant][theme];
  const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'high' ? 1.5 : 1;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentColors.gradientFrom}`}></div>
      
      {/* Animated background elements */}
      {showGradients && animationsEnabled && (
        <>
          <div 
            className={`absolute -top-40 -right-40 w-80 h-80 ${currentColors.accent1} rounded-full blur-3xl animate-pulse`}
            style={{ 
              animationDuration: `${4 / intensityMultiplier}s`,
              transform: `scale(${intensityMultiplier})`
            }}
          ></div>
          <div 
            className={`absolute -bottom-40 -left-40 w-80 h-80 ${currentColors.accent2} rounded-full blur-3xl animate-pulse`}
            style={{ 
              animationDelay: '1s',
              animationDuration: `${4 / intensityMultiplier}s`,
              transform: `scale(${intensityMultiplier})`
            }}
          ></div>
          <div 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 ${currentColors.accent3} rounded-full blur-3xl background-spin-slow`}
            style={{ transform: `translate(-50%, -50%) scale(${intensityMultiplier})` }}
          ></div>
          
          {/* Additional layered background elements */}
          <div 
            className={`absolute top-1/4 right-1/4 w-64 h-64 ${currentColors.accent4} rounded-full blur-2xl animate-pulse`}
            style={{ 
              animationDelay: '0.5s',
              animationDuration: `${3 / intensityMultiplier}s`,
              transform: `scale(${intensityMultiplier * 0.8})`
            }}
          ></div>
          <div 
            className={`absolute bottom-1/4 left-1/4 w-48 h-48 ${currentColors.accent5} rounded-full blur-2xl animate-pulse`}
            style={{ 
              animationDelay: '0.7s',
              animationDuration: `${3 / intensityMultiplier}s`,
              transform: `scale(${intensityMultiplier * 0.6})`
            }}
          ></div>
        </>
      )}

      {/* Floating Particles */}
      {showParticles && animationsEnabled && (
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full background-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                backgroundColor: particle.color,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration / intensityMultiplier}s`,
                transform: `scale(${intensityMultiplier * 0.8})`
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Geometric Background Patterns */}
      {showGeometry && animationsEnabled && (
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div 
            className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-500 rounded-lg background-spin-slow"
            style={{ transform: `scale(${intensityMultiplier * 0.7})` }}
          ></div>
          <div 
            className="absolute top-40 right-20 w-24 h-24 border-2 border-purple-500 rounded-full animate-ping" 
            style={{ 
              animationDuration: `${3 / intensityMultiplier}s`,
              transform: `scale(${intensityMultiplier * 0.6})`
            }}
          ></div>
          <div 
            className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-indigo-500 transform rotate-45 animate-pulse"
            style={{ transform: `rotate(45deg) scale(${intensityMultiplier * 0.5})` }}
          ></div>
          <div 
            className="absolute bottom-20 right-1/4 w-28 h-28 border-2 border-cyan-500 rounded-lg background-spin-slow" 
            style={{ 
              animationDirection: 'reverse',
              transform: `scale(${intensityMultiplier * 0.8})`
            }}
          ></div>
        </div>
      )}

      {/* Global CSS for animations */}
      <style jsx>{`
        @keyframes background-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(${intensityMultiplier * 0.8}); 
            opacity: 0.4; 
          }
          50% { 
            transform: translateY(-25px) rotate(180deg) scale(${intensityMultiplier}); 
            opacity: 0.8; 
          }
        }

        @keyframes background-spin-slow {
          from { transform: rotate(0deg) scale(${intensityMultiplier * 0.8}); }
          to { transform: rotate(360deg) scale(${intensityMultiplier * 0.8}); }
        }

        .background-float {
          animation: background-float 6s ease-in-out infinite;
        }

        .background-spin-slow {
          animation: background-spin-slow ${12 / intensityMultiplier}s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;