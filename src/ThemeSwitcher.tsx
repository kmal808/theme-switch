import React from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeContext'
import { ThemeMode } from './types'
import { themes } from './themes'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = '',
}) => {
  const { theme, setTheme, mode, setMode, availableThemes } = useTheme()

  const modeIcons = {
    light: <Sun size={16} />,
    dark: <Moon size={16} />,
    system: <Monitor size={16} />,
  }

  const modes: ThemeMode[] = ['light', 'dark', 'system']

  return (
    <div className={`space-y-2 ${className}`}>
      <div className='flex gap-1'>
        {modes.map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`p-2 rounded-lg flex items-center justify-center ${
              mode === m
                ? 'bg-theme text-theme'
                : 'text-theme-secondary hover:text-theme hover:bg-theme'
            }`}
            title={`${m.charAt(0).toUpperCase() + m.slice(1)} mode`}>
            {modeIcons[m]}
          </button>
        ))}
      </div>

      <select
        value={theme.name.toLowerCase()}
        onChange={(e) => setTheme(e.target.value)}
        className='w-full px-3 py-2 bg-surface border border-theme rounded-lg text-theme text-sm focus:outline-none focus:border-primary theme-transition'>
        {availableThemes.map((themeName) => (
          <option key={themeName} value={themeName}>
            {themes[themeName].name}
          </option>
        ))}
      </select>
    </div>
  )
}
