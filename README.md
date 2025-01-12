# @kmal808/theme-switch

A drop-in, customizable theme engine for React applications. Start with the preconfigured themes or create your own.

## Features

- 🎨 10+ built-in themes (Light, Dark, Nord, Dracula, One Dark, Tokyo Night, Solarized, GitHub)
- 🌗 Automatic dark mode detection
- 💾 Persistent theme preferences
- 🎯 TypeScript support
- 🔄 Smooth theme transitions
- 🎛️ CSS variables for easy customization
- 📱 Mobile-friendly
- ⚡ Zero dependencies (except React and lucide-react)

## Installation

```bash
npm install @kmal808/theme-switch
```

## Quick Start

1. Wrap your app with the ThemeProvider:

```tsx
import { ThemeProvider } from '@kmal808/theme-switch'

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  )
}
```

2. Add the theme switcher component:

```tsx
import { ThemeSwitcher } from '@kmal808/theme-switch'

function Header() {
  return (
    <header>
      <ThemeSwitcher />
    </header>
  )
}
```

3. Use theme-aware CSS classes:

```tsx
<div className='bg-theme text-theme'>
  <h1 className='text-theme'>Themed Content</h1>
  <p className='text-theme-secondary'>Secondary text</p>
</div>
```

## Available Themes

- 😎 Light
- 🌚 Dark
- 🌲 Nord
- 🧛 Dracula
- 🌌 One Dark
- 🌃 Tokyo Night
- 🌞 Solarized Light
- 🌙 Solarized Dark
- 💻 GitHub Light
- 🌙 GitHub Dark

## Theme Variables

The following CSS variables are available:

```css
--theme-bg
--theme-surface
--theme-text
--theme-text-secondary
--theme-border
--theme-primary
--theme-primary-hover
--theme-error
--theme-success
--theme-warning
```

## Utility Classes

<!-- prettier-ignore-start -->
```css
.bg-theme
.bg-surface
.text-theme
.text-theme-secondary
.border-theme
.bg-primary
.bg-primary-hover
.text-error
.text-success
.text-warning
.theme-transition
```
<!-- prettier-ignore-end -->

## Using the Hook

```tsx
import { useTheme } from '@kmal808/theme-switch'

function MyComponent() {
  const { theme, setTheme, mode, setMode } = useTheme()

  return (
    <div style={{ color: theme.colors.text.primary }}>
      Current theme: {theme.name}
    </div>
  )
}
```

## Creating Custom Themes

```tsx
import { ThemeConfig } from '@kmal808/theme-switch'

const myTheme: ThemeConfig = {
  name: 'My Theme',
  colors: {
    // ... color configuration
  },
  borderRadius: {
    // ... border radius configuration
  },
  spacing: {
    // ... spacing configuration
  },
}
```

## TypeScript Support

The package includes TypeScript definitions for all components and types.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [kmal808]
