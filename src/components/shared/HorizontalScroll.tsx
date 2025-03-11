import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";

type IHorizontalScrollProps = {
  children: React.ReactNode;
};

export default function HorizontalScroll({ children }: IHorizontalScrollProps) {
  return (
    <div className="flex">
      <ScrollArea className="flex-1 -my-5 w-1">
        <div className="py-5">{children}</div>
        <ScrollBar orientation="horizontal" className="opacity-0 w-full" />
      </ScrollArea>
    </div>
  );
}
