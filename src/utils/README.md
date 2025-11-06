# Utility Functions

This directory contains utility and helper functions.

## Purpose

Utilities are pure functions that provide reusable logic for common tasks like formatting, validation, and data manipulation.

## Examples

- `formatDate` - Date formatting utilities
- `formatCurrency` - Currency formatting
- `validateEmail` - Email validation
- `slugify` - Convert strings to URL-safe slugs
- `truncate` - Truncate text
- `parseQueryParams` - Parse URL query parameters

## Guidelines

- Keep functions pure (no side effects)
- Write comprehensive unit tests
- Document parameters and return values
- Consider edge cases
- Export individual functions for tree-shaking
