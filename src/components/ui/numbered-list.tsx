import { ReactNode, memo } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the NumberedList component
 */
export interface NumberedListProps {
  /** Array of strings or React nodes to display as numbered list items */
  items: (string | ReactNode)[];
  /** Optional CSS class name to apply to the list element */
  className?: string;
  /** Optional ARIA label for the list */
  ariaLabel?: string;
}

/**
 * A reusable component that renders an array of strings or React nodes as a numbered list
 * 
 * @param props - The component props
 * @param props.items - Array of strings or React nodes to display as numbered list items
 * @param props.className - Optional CSS class name to apply to the list element
 * @param props.ariaLabel - Optional ARIA label for the list element
 * 
 * @example
 * ```tsx
 * <NumberedList 
 *   items={["First item", "Second item", "Third item"]} 
 * />
 * ```
 * 
 * @example
 * ```tsx
 * <NumberedList 
 *   items={["Custom item"]} 
 *   className="text-lg text-blue-600" 
 * />
 * ```
 * 
 * @example
 * ```tsx
 * <NumberedList 
 *   items={[
 *     "Simple text item",
 *     <span key="bold">Bold <strong>text</strong> item</span>,
 *     <div key="icon">Item with <Icon /> icon</div>
 *   ]} 
 * />
 * ```
 * 
 * @example
 * ```tsx
 * <NumberedList 
 *   items={["Accessible list"]} 
 *   ariaLabel="List of features" 
 * />
 * ```
 * 
 * @returns A React component that renders an ordered list with the provided items
 */
export const NumberedList = memo(function NumberedList({ 
  items, 
  className, 
  ariaLabel 
}: NumberedListProps) {
  return (
    <ol 
      className={cn(
        "list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]",
        className
      )}
      aria-label={ariaLabel}
    >
      {items.map((item, index) => (
        <li 
          key={typeof item === 'string' ? item : `item-${index}`}
          className={cn(
            "tracking-[-.01em]",
            index < items.length - 1 && "mb-2"
          )}
        >
          {item}
        </li>
      ))}
    </ol>
  );
}); 
