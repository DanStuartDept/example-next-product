import Image from "next/image";
import { NumberedList } from "@/components/ui";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Dept Logo"
          width={54}
          height={14}
          priority
        />
        <h1 className="text-2xl font-bold">Example Next.js Product (GitHub)</h1>
        <NumberedList
          items={[
            "Implement GitHub Actions for automated testing, building and deployment of Next.js applications.",
            "Configure semantic versioning with automated changelog generation from commit messages.",
            "Integrate Storybook for component development and documentation.",
            "Set up comprehensive testing with unit tests and end-to-end (e2e) testing.",
          ]}
        />
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
            href="https://github.com/DanStuartDept/example-next-product"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the code
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/DanStuartDept"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/user.svg"
            alt="User icon"
            width={16}
            height={16}
            className="dark:invert"
          />
          Made by Dan Stuart
        </a>
      </footer>
    </div>
  );
}
