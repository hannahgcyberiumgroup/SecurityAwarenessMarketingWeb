import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-accent/30 bg-accent/15 px-5 py-1.5 text-xs font-semibold tracking-wide text-accent-light uppercase",
        className
      )}
    >
      {children}
    </span>
  );
}
