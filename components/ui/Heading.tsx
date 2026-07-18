import type { ElementType, ReactNode } from "react";

export interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "xl" | "lg" | "md" | "sm";
  italic?: boolean;
  className?: string;
  children: ReactNode;
}

const sizeClasses: Record<NonNullable<HeadingProps["size"]>, string> = {
  xl: "text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-[1.05]",
  lg: "text-3xl xs:text-4xl sm:text-5xl lg:text-6xl leading-[1.1]",
  md: "text-2xl xs:text-3xl sm:text-4xl leading-tight",
  sm: "text-xl xs:text-2xl sm:text-3xl leading-tight",
};

export function Heading({
  as = "h2",
  size = "md",
  italic = false,
  className = "",
  children,
}: Readonly<HeadingProps>) {
  const Tag = as as ElementType;

  return (
    <Tag
      className={`font-semibold tracking-tight text-primary-brown ${
        italic ? "italic" : ""
      } ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
