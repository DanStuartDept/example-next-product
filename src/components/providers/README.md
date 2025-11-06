# Context Providers

This directory contains React Context providers for global state management.

## Purpose

Providers wrap parts of the application to provide global state, theme, authentication, or other cross-cutting concerns.

## Examples

- ThemeProvider
- AuthProvider
- CartProvider
- NotificationProvider
- I18nProvider

## Guidelines

- Keep providers focused on a single concern
- Use TypeScript for better type safety
- Provide clear documentation for context usage
- Consider performance implications of context updates
- Use React.memo or useMemo to prevent unnecessary re-renders
