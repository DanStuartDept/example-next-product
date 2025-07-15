import Image from "next/image";
import { NumberedList } from "@/components/numbered-list";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Dept Logo" 
          width={54}
          height={14}
          priority
        />
        <h1 className="text-2xl font-bold">
          Example Next.js Product (GitHub)
        </h1>
        <NumberedList 
          items={[
            "Implement GitHub Actions for automated testing, building and deployment of Next.js applications.",
            "Configure semantic versioning with automated changelog generation from commit messages.",
            "Integrate Storybook for component development and documentation.",
            "Set up comprehensive testing with unit tests and end-to-end (e2e) testing."
          ]}
        />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://github.com/DanStuartDept/example-next-product"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the code
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
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
