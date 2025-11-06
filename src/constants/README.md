# Application Constants

This directory contains application-wide constants and configuration values.

## Purpose

Centralize magic numbers, strings, and configuration values to make them reusable and maintainable.

## Examples

- `API_ENDPOINTS` - API endpoint URLs
- `ROUTES` - Application route paths
- `REGEX_PATTERNS` - Common regex patterns
- `PAGINATION_DEFAULTS` - Default pagination settings
- `DATE_FORMATS` - Standard date format strings
- `ERROR_MESSAGES` - User-facing error messages

## Guidelines

- Use UPPER_SNAKE_CASE for constant names
- Group related constants in objects
- Document the purpose of each constant
- Consider using enums for related values
- Make constants readonly when appropriate
