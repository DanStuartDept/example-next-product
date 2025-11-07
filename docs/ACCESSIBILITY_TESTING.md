# Accessibility Testing Guide

This project includes comprehensive accessibility testing to ensure inclusive user experiences for all users, including those using assistive technologies.

## Overview

We use multiple tools and approaches to ensure accessibility:

1. **axe-core** - Automated accessibility testing engine
2. **jest-axe** - Integration of axe-core with our Vitest test suite
3. **Storybook a11y addon** - Visual accessibility checks during component development
4. **eslint-plugin-jsx-a11y** - Static code analysis for accessibility issues

## Running Accessibility Tests

### Run All Tests (including accessibility)

```bash
pnpm test
```

### Run Tests in Watch Mode

```bash
pnpm test:watch
```

### Run Tests with Verbose Output

```bash
pnpm test -- --reporter=verbose
```

## Writing Accessibility Tests

### Basic Usage

Use the provided utility functions in `src/lib/test-utils/accessibility.ts`:

```typescript
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/lib/test-utils/accessibility';
import { MyComponent } from './my-component';

describe('MyComponent Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const renderResult = render(<MyComponent />);
    await expectNoA11yViolations(renderResult);
  });
});
```

### Advanced Usage with Custom Rules

```typescript
import { render } from '@testing-library/react';
import { checkA11yWithOptions } from '@/lib/test-utils/accessibility';

it('should pass specific accessibility rules', async () => {
  const { container } = render(<MyComponent />);
  const results = await checkA11yWithOptions(container, {
    rules: {
      'color-contrast': { enabled: true },
      'aria-required-attr': { enabled: true }
    }
  });
  expect(results).toHaveNoViolations();
});
```

## Storybook Accessibility Addon

The Storybook a11y addon is automatically enabled for all stories. It provides:

- Real-time accessibility violation detection
- WCAG compliance level indicators
- Detailed violation information
- Visual highlights of problematic elements

### Viewing A11y Results in Storybook

1. Start Storybook: `pnpm storybook`
2. Navigate to any story
3. Click the "Accessibility" tab in the addons panel
4. Review any violations and their severity

## ESLint Accessibility Rules

The following accessibility rules are enforced during linting:

- `jsx-a11y/alt-text` - Requires alt text on images
- `jsx-a11y/aria-props` - Validates ARIA properties
- `jsx-a11y/aria-proptypes` - Validates ARIA property types
- `jsx-a11y/aria-unsupported-elements` - Prevents ARIA on unsupported elements
- `jsx-a11y/role-has-required-aria-props` - Ensures required ARIA props are present
- `jsx-a11y/role-supports-aria-props` - Validates ARIA props for roles
- `jsx-a11y/heading-has-content` - Ensures headings have content
- `jsx-a11y/html-has-lang` - Requires lang attribute on html element
- `jsx-a11y/iframe-has-title` - Requires title on iframes
- `jsx-a11y/img-redundant-alt` - Prevents redundant alt text
- `jsx-a11y/no-aria-hidden-on-focusable` - Prevents aria-hidden on focusable elements
- `jsx-a11y/no-autofocus` - Warns against autofocus (can be disruptive)
- `jsx-a11y/no-redundant-roles` - Prevents redundant role attributes

### Running Linting

```bash
pnpm lint
```

## CI/CD Integration

Accessibility tests are automatically run in the CI pipeline:

1. **Test Job** - Runs all unit tests including accessibility tests
2. **Accessibility Job** - Dedicated job that explicitly runs accessibility tests
3. **Lint Job** - Includes ESLint accessibility rule checks

### Build Failures

The CI pipeline will fail if:

- Any accessibility test fails
- Critical ESLint accessibility rules are violated
- WCAG violations are detected by axe-core

## Best Practices

### 1. Test All Interactive Components

Every interactive component (buttons, forms, modals, etc.) should have accessibility tests.

### 2. Include Multiple States

Test components in all their states (open/closed, enabled/disabled, error/success).

```typescript
describe('Button Accessibility', () => {
  it('should be accessible when enabled', async () => {
    const renderResult = render(<Button>Click me</Button>);
    await expectNoA11yViolations(renderResult);
  });

  it('should be accessible when disabled', async () => {
    const renderResult = render(<Button disabled>Click me</Button>);
    await expectNoA11yViolations(renderResult);
  });
});
```

### 3. Use Semantic HTML

- Use `<button>` for buttons, not `<div onClick={...}>`
- Use `<a>` for links
- Use proper heading hierarchy (`<h1>`, `<h2>`, etc.)
- Use `<label>` for form inputs

### 4. Provide ARIA Labels When Needed

```tsx
<button aria-label="Close dialog">
  <CloseIcon />
</button>
```

### 5. Ensure Sufficient Color Contrast

- Text should have at least 4.5:1 contrast ratio with background
- Large text can have 3:1 contrast ratio

### 6. Make Interactive Elements Keyboard Accessible

- All interactive elements should be focusable
- Custom controls should support keyboard navigation
- Use `tabIndex` appropriately

## Common Issues and Solutions

### Issue: Image without alt text

```tsx
// ❌ Bad
<img src="/logo.png" />

// ✅ Good
<img src="/logo.png" alt="Company Logo" />

// ✅ Good for decorative images
<img src="/decorative.png" alt="" role="presentation" />
```

### Issue: Missing form labels

```tsx
// ❌ Bad
<input type="text" />

// ✅ Good
<label htmlFor="name">Name:</label>
<input id="name" type="text" />

// ✅ Good (using aria-label)
<input type="text" aria-label="Search" />
```

### Issue: Missing button text

```tsx
// ❌ Bad
<button><Icon /></button>

// ✅ Good
<button aria-label="Delete item">
  <TrashIcon />
</button>
```

### Issue: Improper heading hierarchy

```tsx
// ❌ Bad
<h1>Page Title</h1>
<h3>Section</h3>  // Skipped h2

// ✅ Good
<h1>Page Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

## Resources

- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [jest-axe Documentation](https://github.com/nickcolley/jest-axe)

## Getting Help

If you have questions about accessibility or need help fixing violations:

1. Check the violation message - it usually includes helpful suggestions
2. Review the resources above
3. Use the Storybook a11y addon to see violations visually
4. Ask the team in your PR review

Remember: Accessibility is not optional - it's a fundamental requirement for inclusive web experiences.
