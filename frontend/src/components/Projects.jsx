import { useState, useRef, useEffect, useCallback } from 'react';
import AnimatedBackground from './AnimatedBackground';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);
  const scrollingRef = useRef(true);
  const headingRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Project Management Platform',
      category: 'Web Development',
      brief: 'Created a Project Management Platform using MERN stack in a group of 3 with role-based user access and real time task management.',
      image: '/assets/pm.png',
      description: 'Created a Project Management Platform using MERN stack in a group of 3 with role-based user access and real time task management. My role was to create the frontend of the application using React. Used lucide-react and shadcn for enhancing the UI of our system. Integrated the frontend with backend using Axios. ',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoLink: 'https://example.com/demo',
      githubLink: 'https://github.com/rafayhanan/ComsiCon-Web-25',
      features: [
        'User authentication and profiles',
        'Role-Based Dashboards',
        'Dark Mode Support',
      ]
    },
    {
      id: 2,
      title: 'Meal Planner',
      category: 'Web Development',
      brief: 'Created a MealPlanner application which helps users track their meals using MERN stack.',
      image: '/assets/mealPlanner.png',
      description: 'The Meal Planner Web App is a responsive, component-based application built using React and Vite, designed to help users organize and plan their meals efficiently. The app features a clean user interface styled with Tailwind CSS and includes key sections like a dynamic homepage, a form for collecting user input, and a task management page where meal plans can be added, viewed, or modified.',
      technologies: ['React', 'Express', 'Node.js', 'MongoDB', 'Docker'],
      demoLink: 'https://example.com/dashboard-demo',
      githubLink: 'https://github.com/AliShoaibHassan/MealPlanner',
      features: [
        'User-Friendly Interface',
        'Meal Planning Functionality',
        'Docker Support',
      ]
    },
    {
      id: 3,
      title: 'Food App',
      category: 'Mobile App',
      brief: 'A mobile app for food ordering with recommendation system.',
      image: '/assets/food-app.jpg',
      description: 'Created a Food Ordering Mobile App using Flutter in a group project. Built a Recommendation System using Cosine Similarity to find similar food items based on their different features.',
      technologies: ['Flutter', 'Firebase', 'Sci-Kit Learn'],
      demoLink: 'https://example.com/taskapp-demo',
      githubLink: 'https://github.com/AliShoaibHassan/Food_App_with_Recommendations',
      features: [
        'User Authentication',
        'User Profile Management',
        'Password Change Functionality',
        'Recommendation System',
      ]
    },

    {
      id: 4,
      title: 'Machine Learning Projects',
      category: 'Artificial Intelligence',
      brief: 'A comprehensive machine learning project repository covering key ML algorithms with hands-on projects using Python and PyTorch.',
      image: '/assets/Machine-Learning.jpg',
      description: 'This machine learning repository showcases foundational to intermediate concepts through well-organized algorithm-specific folders and real-world projects. Each folder includes Jupyter notebooks demonstrating practical applications, such as price prediction, disease detection, classification, and recommendation systems. It also provides practice files for libraries like NumPy, Pandas, Matplotlib, and PyTorch. Overall, the structure supports both learning and experimentation with core machine learning techniques.',
      technologies: ['PyTorch', 'Sci-Kit Learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Numpy'],
      demoLink: 'https://example.com/weather-demo',
      githubLink: 'https://github.com/AliShoaibHassan/Machine-Learning',
      features: [
        'Linear Regression',
        'Logistic Regression',
        'K-Nearest Neighbors (KNN)',
        'Decision Trees',
        'Random Forests',
        'Support Vector Machines (SVM)',
        'Naive Bayes',
        'Artificial Neural Networks (PyTorch)',
        'Recommendation Systems (Collaborative Filtering & Content-Based)'
      ]
    },
    {
      id: 5,
      title: 'Fitness Recognition and Attendance System',
      category: 'Artificial Intelligence',
      brief: 'Created a facial attendance system to mark present or absent based on the facial features of a person',
      image: '/assets/face-recognition-attendance-system.jpg',
      description: 'A Facial attendance system was created to mark present or absent based on the facial features of a person. The model was trained on the images of athletes (Messi, Ronaldo, Neymar etc.). The images of these players were provided to the model which would then mark them as absent or present in a seperate Excel file along with the timestamps.',
      technologies: ['PyTorch', 'OpenCV', 'Pandas', 'Numpy'],
      demoLink: 'https://example.com/fitness-demo',
      githubLink: 'https://github.com/AliShoaibHassan/Facial-Attendance-System',
      features: [
        'Face Detection',
        'Logging System',
      ]
    }
  ];

  // Create a truly seamless array by duplicating the entire projects array multiple times
  const getDuplicatedProjects = () => {
    // We'll create an array with 3 sets of the same projects
    // (previous set + current set + next set) to ensure seamless scrolling
    return [...projects, ...projects, ...projects].map((project, index) => ({
      ...project,
      uniqueId: `${project.id}-${index}` // Add unique id for React keys
    }));
  };

  const duplicatedProjects = getDuplicatedProjects();

  // Function to check if we need to reset scroll position
  const checkScrollPosition = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const singleSetWidth = scrollWidth / 3;

    // If we've scrolled past the first set into the middle set
    if (scrollPosition >= singleSetWidth && scrollPosition < singleSetWidth * 2) {
      // Continue normal scrolling
      return;
    }

    // If we've scrolled too far right (into the third set)
    if (scrollPosition >= singleSetWidth * 2 - clientWidth) {
      // Jump back to the equivalent position in the middle set
      // Disable animation temporarily during repositioning
      scrollingRef.current = false;
      container.scrollLeft = scrollPosition - singleSetWidth;
      setTimeout(() => {
        scrollingRef.current = true;
      }, 50);
      return;
    }

    // If we've scrolled too far left (before first set)
    if (scrollPosition < 10) {
      // Jump forward to the equivalent position in the middle set
      // Disable animation temporarily during repositioning
      scrollingRef.current = false;
      container.scrollLeft = singleSetWidth;
      setTimeout(() => {
        scrollingRef.current = true;
      }, 50);
      return;
    }
  }, []);

  // Function to handle continuous scrolling
  const infiniteScroll = useCallback(() => {
    if (!scrollContainerRef.current || isHovering || !scrollingRef.current) return;

    const container = scrollContainerRef.current;
    container.scrollLeft += 0.5; // Smooth scrolling speed

    // Check and adjust scroll position if needed
    checkScrollPosition();
  }, [isHovering, checkScrollPosition]);

  // Initial setup to position at the middle set
  useEffect(() => {
    if (scrollContainerRef.current) {
      // Start the scroll at the beginning of the middle set
      const singleSetWidth = scrollContainerRef.current.scrollWidth / 3;
      scrollContainerRef.current.scrollLeft = singleSetWidth;
    }
  }, []);

  // Set up continuous scrolling
  useEffect(() => {
    // Start auto scroll
    const autoScrollId = setInterval(infiniteScroll, 16); // ~60fps for smooth animation

    // Clean up on unmount
    return () => {
      clearInterval(autoScrollId);
    };
  }, [infiniteScroll]);

  // Handle manual scroll buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -container.clientWidth / 2 : container.clientWidth / 2;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  


  return (
    <section id="projects" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground
        variant="default"
        intensity="medium"
        showParticles={true}
        showGeometry={true}
        showGradients={true}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        {/* <div className="relative mb-16 text-center">
          <h2

            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-white dark:to-white bg-clip-text text-transparent mb-6 pb-2 relative inline-block overflow-visible">
            Featured Projects
            
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-red-500 dark:to-red-700 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore my latest work and projects. Click on any project to view more details and discover the technologies behind each creation.
          </p>
        </div> */}
        <div className="relative mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-white dark:to-white bg-clip-text text-transparent mb-6 pb-2">
            Featured Projects
          </h2>
          <div className="w-40 h-2 bg-blue-600 dark:bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-white max-w-2xl mx-auto leading-relaxed">
          Explore my latest work and projects. Click on any project to view more details and discover the technologies behind each creation.
          </p>
        </div>

        {/* Projects Container */}
        <div className="relative">
          {/* Enhanced Scroll Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all dark:text-white text-gray-800 focus:outline-none border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          {/* Horizontal Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 py-8 px-8 hide-scrollbar relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {duplicatedProjects.map((project) => (
              <div
                key={project.uniqueId}
                className="min-w-[300px] w-80 flex-shrink-0 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 relative group"
                onClick={() => setActiveProject(project)}
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100/50 dark:border-gray-700/50 h-full flex flex-col relative">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100/90 dark:bg-red-900/90 text-blue-800 dark:text-red-100 backdrop-blur-sm border border-blue-200/50 dark:border-red-800/50">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col relative">
                    <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white relative z-10">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow relative z-10">{project.brief}</p>
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-md bg-blue-50/80 dark:bg-red-900/30 text-blue-700 dark:text-red-300 border border-blue-100/50 dark:border-red-800/50 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-gray-100/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50 backdrop-blur-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <button
                      className="mt-auto text-blue-600 dark:text-red-400 font-medium inline-flex items-center hover:text-blue-700 dark:hover:text-red-300 transition-colors relative z-10"
                    >
                      View Details
                      <svg className="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Scroll Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all dark:text-white text-gray-800 focus:outline-none border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Enhanced Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 backdrop-blur-md">
          <div
            className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-2xl w-full max-w-4xl max-h-90vh overflow-y-auto border border-gray-200/50 dark:border-gray-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-64 object-cover"
              />
              {/* Modal image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 bg-gray-900/70 backdrop-blur-sm p-2 rounded-full text-white hover:bg-gray-900/90 transition-all border border-gray-700/50"
                aria-label="Close details"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-600/90 dark:bg-red-600/90 text-white backdrop-blur-sm">
                  {activeProject.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">{activeProject.title}</h2>
              </div>
            </div>

            <div className="p-6 md:p-8 relative">
              <div className="relative z-10">
                <div className="flex flex-wrap gap-3 mb-6">
                  {activeProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-md bg-blue-100/80 dark:bg-red-900/40 text-blue-700 dark:text-red-300 backdrop-blur-sm border border-blue-200/50 dark:border-red-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Project Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300">{activeProject.description}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {activeProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 dark:text-red-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <a
                    href={activeProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-red-600 dark:to-red-700 text-white rounded-full font-medium hover:shadow-lg transition-all inline-flex items-center transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced CSS for animations */}
      <style jsx>{`
        @keyframes projects-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-25px) rotate(180deg);
            opacity: 0.8;
          }
        }

        @keyframes projects-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .projects-float {
          animation: projects-float 6s ease-in-out infinite;
        }

        .projects-spin-slow {
          animation: projects-spin-slow 12s linear infinite;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Additional smooth animations */
        .group:hover .transform {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Ensure heading text is not clipped and the spotlight appears on top */
        .spotlight-effect {
          pointer-events: none; /* Allows mouse events to pass through to the heading */
        }
      `}</style>
    </section>
  );
}