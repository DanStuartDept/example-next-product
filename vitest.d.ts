/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />

// Re-export vi for explicit imports (when not using globals)
export { vi } from "vitest";

// Extend Vitest with jest-axe matchers
declare module "vitest" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  interface Assertion<T = any> {
    toHaveNoViolations(): void;
  }
  interface AsymmetricMatchersContaining {
    toHaveNoViolations(): void;
  }
}
