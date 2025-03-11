import { ArrowRightLeft, House, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";

function ButtomNavigations() {
  return (
    <div className="h-[55px] bg-white shadow-t w-full flex justify-between gap-4 items-center p-8 text-[#868686]">
      <div
        className="flex flex-col gap-1 items-center justify-center"
      >
        <LayoutGrid size={24} />
        <h2 className=" text-xs">الضبظ</h2>
      </div>
      <Link
        to="/"
        className=" flex flex-col gap-[2px] items-center justify-center"
      >
        <img src="logo.svg" className="w-[18px]" alt="gini" />
        <h2 className="text-xs">جني</h2>
      </Link>
      <div className=" flex flex-col gap-1 items-center justify-center">
        <ArrowRightLeft size={24} />
        <h2 className=" text-xs">التحويلات</h2>
      </div>
      <div className=" flex flex-col gap-1 items-center justify-center">
        <House size={24} />
        <h2 className=" text-xs">الرئيسية</h2>
      </div>
    </div>
  );
}

export default ButtomNavigations;
