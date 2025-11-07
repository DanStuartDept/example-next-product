// Font configuration with CI environment handling
// In CI, fonts may fail to load from Google, so we use system fallbacks

interface FontConfig {
  variable: string;
  className?: string;
}

// Default fallback configuration
const fallbackSans: FontConfig = {
  variable: "--font-geist-sans",
  className: "",
};

const fallbackMono: FontConfig = {
  variable: "--font-geist-mono",
  className: "",
};

let geistSans: FontConfig = fallbackSans;
let geistMono: FontConfig = fallbackMono;

// Only load Google Fonts if not in CI environment
if (process.env.CI !== "true") {
  try {
    // Use dynamic import for better TypeScript compatibility
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const fontModule = require("next/font/google");
    const { Geist, Geist_Mono } = fontModule;

    geistSans = Geist({
      variable: "--font-geist-sans",
      subsets: ["latin"],
    });

    geistMono = Geist_Mono({
      variable: "--font-geist-mono",
      subsets: ["latin"],
    });
  } catch {
    // If font loading fails, use fallbacks
    console.warn("Failed to load Google Fonts, using system fallbacks");
  }
}

export { geistSans, geistMono };
