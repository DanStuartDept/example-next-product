# Shared TypeScript Types

This directory contains shared TypeScript type definitions and interfaces.

## Purpose

Centralize type definitions that are used across multiple parts of the application.

## Examples

- `User` - User model type
- `Product` - Product model type
- `ApiResponse<T>` - Generic API response wrapper
- `PaginationParams` - Pagination parameters
- `FormErrors` - Form error types

## Guidelines

- Use descriptive names
- Prefer interfaces for object shapes
- Use type aliases for unions and complex types
- Document complex types with TSDoc comments
- Keep types DRY (Don't Repeat Yourself)
- Export types from index.ts for easy imports
