// Type declarations for jest-axe when used with Vitest
declare module "jest-axe" {
  import type { AxeResults, RunOptions } from "axe-core";

  export type JestAxe = (
    html: Element | string,
    options?: RunOptions
  ) => Promise<AxeResults>;

  export const axe: JestAxe;
  export function configureAxe(options?: RunOptions): JestAxe;
  export const toHaveNoViolations: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toHaveNoViolations: (results?: Partial<AxeResults>) => any;
  };
}
