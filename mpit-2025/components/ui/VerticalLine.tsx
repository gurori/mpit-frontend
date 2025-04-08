import { cn } from "@/lib/utils";

export default function VerticalLine({
  className,
}: Readonly<{ className: string }>) {
  return <span className={cn("w-2 bg-[#6A8BE0]", className)}></span>;
}

// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
