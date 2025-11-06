import React from "react";
import { vi } from "vitest";
import failOnConsole from "vitest-fail-on-console";
import "@testing-library/jest-dom/vitest";

failOnConsole({
  shouldFailOnDebug: false,
  shouldFailOnError: true,
  shouldFailOnInfo: false,
  shouldFailOnLog: false,
  shouldFailOnWarn: false,
});

vi.mock("next/image", () => ({
  default: (
    props: React.ComponentPropsWithoutRef<"img"> & { priority?: boolean }
  ) => {
    const { priority, ...rest } = props;
    return React.createElement("img", {
      ...rest,
      loading: priority ? "eager" : "lazy",
    });
  },
}));

// Mock `window.matchMedia` for tests relying on responsive hooks
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false, // optionally customise this per test
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    dispatchEvent: () => false,
  });
}
