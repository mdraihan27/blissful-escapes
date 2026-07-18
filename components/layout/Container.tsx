import type { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: Readonly<ContainerProps>) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 xs:px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
