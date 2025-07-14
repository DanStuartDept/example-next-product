import Image from "next/image";

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
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Demonstrate how to use the GitHub Actions to test and build Next.js product.
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Utilise product versioning.
          </li>
          <li className="tracking-[-.01em]">
            Storybook integration.
          </li>
        </ol>

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
