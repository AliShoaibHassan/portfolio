// App.jsx
import { useEffect } from 'react'
import './App.css'
import HeroLanding from './components/HeroLanding'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import useBackgroundStore from './stores/backgroundStore'
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  const { theme, toggleTheme, initializeTheme } = useBackgroundStore();
  
  // Initialize theme on app load
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);
  
  // Setup smooth scrolling for anchor links
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleLinkClick = (e) => {
      // Check if the clicked element is an anchor with a hash
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      const targetId = target.getAttribute('href');
      
      // Ignore if it's just "#" or if the ID doesn't exist
      if (targetId === '#' || !document.querySelector(targetId)) return;
      
      e.preventDefault();
      
      // Get the target section and calculate offset considering navbar height
      const targetSection = document.querySelector(targetId);
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      // Smooth scroll to the target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without scrolling
      history.pushState(null, null, targetId);
    };
    
    document.body.addEventListener('click', handleLinkClick);
    
    return () => {
      document.body.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className={`${theme} min-h-screen`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeroLanding />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Analytics />
      </main>
    </div>
  )
}