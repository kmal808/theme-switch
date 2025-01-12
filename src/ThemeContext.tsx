import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeConfig, ThemeMode } from './types'
import { lightTheme, themes } from './themes'

interface ThemeContextType {
  theme: ThemeConfig
  setTheme: (theme: string) => void
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  availableThemes: string[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: string
  defaultMode?: ThemeMode
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  defaultMode = 'system',
}: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme)
  const [mode, setMode] = useState<ThemeMode>(defaultMode)

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const savedMode = localStorage.getItem('themeMode') as ThemeMode
    if (savedTheme) setCurrentTheme(savedTheme)
    if (savedMode) setMode(savedMode)
  }, [])

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('theme', currentTheme)
    localStorage.setItem('themeMode', mode)
  }, [currentTheme, mode])

  // Handle system theme changes
  useEffect(() => {
    if (mode !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      setCurrentTheme(mediaQuery.matches ? 'dark' : 'light')
    }

    handleChange() // Initial check
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [mode])

  // Apply theme to document
  useEffect(() => {
    const theme = themes[currentTheme] || lightTheme
    document.documentElement.style.setProperty(
      '--theme-bg',
      theme.colors.background
    )
    document.documentElement.style.setProperty(
      '--theme-surface',
      theme.colors.surface
    )
    document.documentElement.style.setProperty(
      '--theme-text',
      theme.colors.text.primary
    )
    document.documentElement.style.setProperty(
      '--theme-text-secondary',
      theme.colors.text.secondary
    )
    document.documentElement.style.setProperty(
      '--theme-border',
      theme.colors.border
    )
    document.documentElement.style.setProperty(
      '--theme-primary',
      theme.colors.primary[600]
    )
    document.documentElement.style.setProperty(
      '--theme-primary-hover',
      theme.colors.primary[700]
    )
    document.documentElement.style.setProperty(
      '--theme-error',
      theme.colors.error
    )
    document.documentElement.style.setProperty(
      '--theme-success',
      theme.colors.success
    )
    document.documentElement.style.setProperty(
      '--theme-warning',
      theme.colors.warning
    )
  }, [currentTheme])

  const value = {
    theme: themes[currentTheme] || lightTheme,
    setTheme: setCurrentTheme,
    mode,
    setMode,
    availableThemes: Object.keys(themes),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
