export interface ThemeColors {
  primary: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
  gray: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
  success: string
  warning: string
  error: string
  background: string
  surface: string
  text: {
    primary: string
    secondary: string
    disabled: string
  }
  border: string
}

export interface ThemeConfig {
  name: string
  colors: ThemeColors
  borderRadius: {
    sm: string
    md: string
    lg: string
    full: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
}

export type ThemeMode = 'light' | 'dark' | 'system'
