// stores/backgroundStore.js
import { create } from 'zustand';

const useBackgroundStore = create((set) => ({
  // Theme state
  theme: 'dark',
  
  // Background animation state
  animationsEnabled: true,
  particleCount: 25,
  
  // Actions
  setTheme: (theme) => {
    set({ theme });
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  },
  
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
    return { theme: newTheme };
  }),
  
  toggleAnimations: () => set((state) => ({ 
    animationsEnabled: !state.animationsEnabled 
  })),
  
  setParticleCount: (count) => set({ particleCount: count }),
  
  // Initialize theme from localStorage or system preference
  initializeTheme: () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      set({ theme: savedTheme });
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      set({ theme: 'light' });
      document.documentElement.classList.remove('dark');
    } else {
      set({ theme: 'dark' });
      document.documentElement.classList.add('dark');
    }
  }
}));

export default useBackgroundStore;