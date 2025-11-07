This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Code Quality

This project uses [Husky](https://typicode.github.io/husky/) to enforce code quality standards before commits:

### Git Hooks

- **pre-commit**: Runs on staged files before each commit
  - ESLint with auto-fix for code style and quality
  - TypeScript type checking
- **commit-msg**: Validates commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) format
  - Required for semantic versioning and automated releases

### Commit Message Format

Commit messages must follow the Conventional Commits specification:

```
<type>: <description>

[optional body]

[optional footer]
```

Common types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semi-colons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:

```bash
git commit -m "feat: add user authentication"
git commit -m "fix: resolve navigation bug in mobile view"
```

## CI/CD

This project includes automated PR checks that run on every pull request:

- **Tests**: Runs all tests with coverage reporting via Codecov
- **Linting**: Ensures code follows ESLint rules
- **Type Checking**: Validates TypeScript types with `tsc`
- **Build**: Verifies the application builds successfully
- **Performance**: Runs Unlighthouse performance checks on configured paths

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
