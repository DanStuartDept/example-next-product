import { memo } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the Quote component
 */
export interface QuoteProps {
  /** The quote text to display */
  quote: string;
  /** Optional source/author of the quote */
  source?: string;
  /** Optional CSS class name to apply to the container element */
  className?: string;
}

/**
 * A reusable component that renders a quote with an optional source attribution
 *
 * @param props - The component props
 * @param props.quote - The quote text to display
 * @param props.source - Optional source/author of the quote
 * @param props.className - Optional CSS class name to apply to the container element
 *
 * @example
 * ```tsx
 * <Quote
 *   quote="Dan is from ireland and is great"
 *   source="Joe Blogs"
 * />
 * ```
 *
 * @example
 * ```tsx
 * <Quote
 *   quote="A quote without attribution"
 * />
 * ```
 *
 * @returns A React component that renders a quote with optional source
 */
export const Quote = memo(function Quote({
  quote,
  source,
  className = "",
}: QuoteProps) {
  return (
    <blockquote
      className={cn(
        "border-l-4 border-gray-300 pl-4 text-gray-700 italic dark:border-gray-600 dark:text-gray-300",
        className
      )}
    >
      <p className="mb-2">&quot;{quote}&quot;</p>
      {source && (
        <footer className="text-sm text-gray-600 not-italic dark:text-gray-400">
          &mdash; {source}
        </footer>
      )}
    </blockquote>
  );
});
