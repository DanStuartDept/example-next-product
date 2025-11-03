import { defineConfig } from 'unlighthouse'

export default defineConfig({
  site: process.env.UNLIGHTHOUSE_SITE || 'http://localhost:3000',
  scanner: {
    // Configure the paths to check
    // Add more paths as needed
    samples: 1,
    throttle: false,
  },
  urls: [
    '/', // Homepage
    // Add more paths here as needed
    // Examples:
    // '/about',
    // '/products',
    // '/contact',
  ],
  ci: {
    budget: {
      // Set minimum scores for CI to pass
      performance: 50,
      accessibility: 80,
      'best-practices': 80,
      seo: 80,
    },
  },
  debug: false,
})
