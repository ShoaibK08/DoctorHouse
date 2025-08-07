import React from "react";

export interface ColorModeContextType {
  toggleColorMode: () => void;
  mode: 'light' | 'dark';
}

export const ColorModeContext = React.createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  mode: 'light',
});

// Custom hook for using theme context
export const useThemeMode = () => {
  const context = React.useContext(ColorModeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ColorModeContext.Provider');
  }
  return context;
};

// Custom hook for theme persistence
export const useThemePersistence = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const savedMode = getStoredTheme();
    setMode(savedMode);
  }, []);

  const toggleTheme = React.useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      setStoredTheme(newMode);
      return newMode;
    });
  }, []);

  React.useEffect(() => {
    if (mounted) {
      setStoredTheme(mode);
    }
  }, [mode, mounted]);

  return { mode, toggleTheme, mounted };
};

// Utility functions for theme persistence
export const getStoredTheme = (): 'light' | 'dark' => {
  try {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('theme-mode');
      if (savedMode === 'light' || savedMode === 'dark') {
        return savedMode;
      }
    }
  } catch (error) {
    console.warn('Failed to get theme from localStorage:', error);
  }
  return 'light';
};

export const setStoredTheme = (mode: 'light' | 'dark'): void => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-mode', mode);
    }
  } catch (error) {
    console.warn('Failed to save theme to localStorage:', error);
  }
};
