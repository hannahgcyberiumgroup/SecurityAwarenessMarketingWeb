import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-surface-light p-6",
        hover &&
          "transition-colors duration-300 hover:border-accent/40 hover:bg-surface hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}
