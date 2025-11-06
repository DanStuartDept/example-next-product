This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## CI/CD

This project includes automated PR checks that run on every pull request:

- **Tests**: Runs all tests with coverage reporting via Codecov
- **Accessibility Tests**: Automated accessibility testing with axe-core (see [docs/ACCESSIBILITY_TESTING.md](docs/ACCESSIBILITY_TESTING.md))
- **Linting**: Ensures code follows ESLint rules (including accessibility rules)
- **Type Checking**: Validates TypeScript types with `tsc`
- **Build**: Verifies the application builds successfully
- **Performance**: Runs Unlighthouse performance checks on configured paths

### Accessibility Testing

This project includes comprehensive accessibility testing to ensure inclusive user experiences. We use:

- **axe-core** for automated a11y testing
- **jest-axe** for Vitest integration
- **Storybook a11y addon** for visual accessibility checks
- **eslint-plugin-jsx-a11y** for static code analysis

For detailed information, see [docs/ACCESSIBILITY_TESTING.md](docs/ACCESSIBILITY_TESTING.md).

### Performance Testing

Performance tests are configured via `unlighthouse.config.js`. To add more paths for performance testing:

1. Edit `unlighthouse.config.js`
2. Add paths to the `urls` array
3. Adjust performance budgets in the `ci.budget` section if needed

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
