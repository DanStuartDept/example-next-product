import * as React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md",
  {
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
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
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

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      title,
      titleHeadingLevel = "h2",
      description,
      cta,
      image,
      imagePosition = image ? "top" : "none",
      ...props
    },
    ref
  ) => {
    const HeadingTag = titleHeadingLevel;

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ imagePosition, className }))}
        {...props}
      >
        {image && (
          <div className="relative w-full overflow-hidden rounded-t-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 400}
              height={image.height || 300}
              className="h-48 w-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-col gap-4 p-6">
          <HeadingTag className="text-xl leading-tight font-semibold tracking-tight">
            {title}
          </HeadingTag>
          <p className="text-muted-foreground text-sm">{description}</p>
          {cta && (
            <div className="mt-2">
              {cta.href ? (
                <Button asChild>
                  <a
                    href={cta.href}
                    target={cta.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      cta.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {cta.text}
                  </a>
                </Button>
              ) : (
                <Button onClick={cta.onClick}>{cta.text}</Button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card, cardVariants };
