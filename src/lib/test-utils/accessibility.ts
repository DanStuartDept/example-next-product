/**
 * Accessibility Testing Utilities
 *
 * This module provides utilities for automated accessibility testing using axe-core.
 * Use these helpers to ensure components meet WCAG standards.
 *
 * Note: The toHaveNoViolations matcher is configured globally in vitest-setup.ts
 */

import { axe } from "jest-axe";
import type { RunOptions } from "axe-core";
import type { RenderResult } from "@testing-library/react";

/**
 * Run accessibility checks on a rendered component
 *
 * This is a convenience wrapper around axe() that provides consistent error handling
 * and return type guarantees. Use this when you need direct access to the results
 * before making assertions.
 *
 * @param container - The container element from @testing-library/react render result
 * @returns Promise that resolves with axe test results
 *
 * @example
 * ```typescript
 * import { render } from '@testing-library/react';
 * import { checkA11y } from '@/lib/test-utils/accessibility';
 *
 * test('should have no accessibility violations', async () => {
 *   const { container } = render(<MyComponent />);
 *   const results = await checkA11y(container);
 *   expect(results).toHaveNoViolations();
 * });
 * ```
 */
export async function checkA11y(container: Element) {
  const results = await axe(container);
  return results;
}

/**
 * Run accessibility checks with custom axe configuration
 *
 * This wrapper provides type-safe access to axe configuration options and ensures
 * consistent usage across the test suite. Use this when you need to customize which
 * rules are run or how axe behaves.
 *
 * @param container - The container element from @testing-library/react render result
 * @param options - Custom axe configuration options
 * @returns Promise that resolves with axe test results
 *
 * @example
 * ```typescript
 * import { render } from '@testing-library/react';
 * import { checkA11yWithOptions } from '@/lib/test-utils/accessibility';
 *
 * test('should have no color contrast violations', async () => {
 *   const { container } = render(<MyComponent />);
 *   const results = await checkA11yWithOptions(container, {
 *     rules: {
 *       'color-contrast': { enabled: true }
 *     }
 *   });
 *   expect(results).toHaveNoViolations();
 * });
 * ```
 */
export async function checkA11yWithOptions(
  container: Element,
  options: Parameters<typeof axe>[1]
) {
  const results = await axe(container, options);
  return results;
}

/**
 * Helper to verify a component has no accessibility violations
 * This is a convenience wrapper that combines checkA11y with the assertion
 *
 * @param renderResult - The render result from @testing-library/react
 * @returns Promise that resolves when check is complete
 *
 * @example
 * ```typescript
 * import { render } from '@testing-library/react';
 * import { expectNoA11yViolations } from '@/lib/test-utils/accessibility';
 *
 * test('component is accessible', async () => {
 *   const renderResult = render(<MyComponent />);
 *   await expectNoA11yViolations(renderResult);
 * });
 * ```
 */
export async function expectNoA11yViolations(renderResult: RenderResult) {
  const results = await axe(renderResult.container);
  expect(results).toHaveNoViolations();
}

/**
 * Helper to verify a component has no accessibility violations with specific rules
 *
 * @param renderResult - The render result from @testing-library/react
 * @param rules - Object mapping rule IDs to their configuration. Per axe-core's RuleObject type,
 *                each rule must have an 'enabled' boolean property.
 * @returns Promise that resolves when check is complete
 *
 * @example
 * ```typescript
 * import { render } from '@testing-library/react';
 * import { expectNoA11yViolationsWithRules } from '@/lib/test-utils/accessibility';
 *
 * test('component has no critical a11y issues', async () => {
 *   const renderResult = render(<MyComponent />);
 *   await expectNoA11yViolationsWithRules(renderResult, {
 *     'color-contrast': { enabled: true },
 *     'aria-required-attr': { enabled: true }
 *   });
 * });
 * ```
 */
export async function expectNoA11yViolationsWithRules(
  renderResult: RenderResult,
  rules: RunOptions["rules"]
) {
  const results = await axe(renderResult.container, { rules });
  expect(results).toHaveNoViolations();
}
