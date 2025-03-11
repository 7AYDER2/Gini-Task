import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router-dom";
import ButtomNavigations from "./ButtomNavigations";

function MainLayout() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <div className="flex-1 h-full overflow-hidden">
        <ScrollArea className="flex-1 h-full">
          <Outlet />
          <div className="py-24" />
        </ScrollArea>
      </div>
      <ButtomNavigations />
    </div>
  );
}

export default MainLayout;
