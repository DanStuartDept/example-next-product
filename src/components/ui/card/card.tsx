import * as React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card as CardPrimitive,
  CardHeader,
  CardTitle as CardTitlePrimitive,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card-primitives";

const productCardVariants = cva("transition-shadow hover:shadow-md", {
  variants: {
    imagePosition: {
      top: "flex flex-col",
      bottom: "flex flex-col-reverse",
      none: "flex flex-col",
    },
  },
  defaultVariants: {
    imagePosition: "none",
  },
});

export interface ProductCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof productCardVariants> {
  /** The title text to display */
  title: string;
  /** The heading level for the title (h2, h3, or h4) */
  titleHeadingLevel?: "h2" | "h3" | "h4";
  /** The description text to display */
  description: string;
  /** Optional call-to-action configuration */
  cta?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  /** Optional image configuration */
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      className,
      title,
      titleHeadingLevel = "h2",
      description,
      cta,
      image,
      imagePosition,
      ...props
    },
    ref
  ) => {
    // Determine image position: default to 'top' if image provided, otherwise 'none'
    const effectiveImagePosition = imagePosition ?? (image ? "top" : "none");
    // Helper to check if URL is external
    const isExternalUrl = (url: string) =>
      url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("//");

    const HeadingTag = titleHeadingLevel;

    return (
      <CardPrimitive
        ref={ref}
        className={cn(
          productCardVariants({
            imagePosition: effectiveImagePosition,
            className,
          })
        )}
        {...props}
      >
        {image && effectiveImagePosition !== "none" && (
          <div
            className={cn(
              "relative w-full overflow-hidden",
              effectiveImagePosition === "top" ? "rounded-t-lg" : "rounded-b-lg"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 400}
              height={image.height || 300}
              className="h-48 w-full object-cover"
            />
          </div>
        )}
        <CardHeader>
          <HeadingTag className="text-xl leading-none font-semibold tracking-tight">
            {title}
          </HeadingTag>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {cta && (
          <CardFooter>
            {cta.href ? (
              <Button asChild>
                <a
                  href={cta.href}
                  target={isExternalUrl(cta.href) ? "_blank" : undefined}
                  rel={
                    isExternalUrl(cta.href) ? "noopener noreferrer" : undefined
                  }
                >
                  {cta.text}
                </a>
              </Button>
            ) : (
              <Button onClick={cta.onClick}>{cta.text}</Button>
            )}
          </CardFooter>
        )}
      </CardPrimitive>
    );
  }
);
ProductCard.displayName = "ProductCard";

// Export shadcn primitives for direct use
export {
  CardPrimitive as Card,
  CardHeader,
  CardFooter,
  CardTitlePrimitive as CardTitle,
  CardDescription,
  CardContent,
};

// Export custom product card
export { ProductCard, productCardVariants };
