import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

// header Component
const SectionHeader = ({
    isPrimary,
    title,
  }: {
    isPrimary?: boolean;
    title: string;
  }) => {
    return (
      <div className="flex justify-between items-center">
        <p
          className={cn("text-xl font-semibold", {
            "text-primary ": isPrimary,
          })}
        >
          {title}
        </p>
        <div className="flex items-center gap-1 font-bold text-primary">
          <span>عرض المزيد</span>
          <ChevronLeft size={18} />
        </div>
      </div>
    );
  };

  export default SectionHeader;