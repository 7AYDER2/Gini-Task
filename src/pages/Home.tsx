import HorizontalScroll from "@/components/shared/HorizontalScroll";
import ImageWithDynamicBg from "@/components/shared/ImageDaynmic";
import SectionHeader from "@/components/shared/SectionsHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import Header from "@/layout/Header";
import { cn } from "@/lib/utils";
import ProductList from "@/views/Home/ProductList";
import { Search } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    title: "متاجر",
    color: "oklch(65.92% 0.1946 37.62)",
  },
  {
    title: "سفر",
    color: "oklch(57.5% 0.2145 26.54)",
  },
  {
    title: "سيارات",
    color: "oklch(54.77% 0.2162 262.12)",
  },
  {
    title: "حجوزات",
    color: "oklch(68.92% 0.2004 22.38)",
  },
  {
    title: "جني طعام",
    color: "oklch(72.74% 0.18 149.99)",
  },
];

function Home() {
  const [activeTab, setActiveTab] = useQueryState(
    "tab",
    parseAsString.withDefault("متاجر")
  );
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    return () => {
      document.documentElement.style.setProperty(
        "--primary",
        "oklch(65.92% 0.1946 37.62)"
      );
    };
  }, []);



  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <Header />
      <div className="mb-5 px-6">
        <div className="relative">
          <form>
          <Input
            placeholder="أبحث عن منتج أو خدمة"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white shadow-none border-none rounded-full h-[48px] placeholder:text-muted-foreground/60"
          />
          <Button
            size="icon"
            className="top-1/2 left-2 absolute rounded-full -translate-y-1/2"
            onClick={handleSearch}
          >
            <Search size={16} />
          </Button>
          </form>
        </div>
      </div>

      <HorizontalScroll>
        <div className="flex gap-3 px-8">
          {categories.map((category) => (
            <button
              key={category.title}
              className={cn(
                "pr-4 text-nowrap pl-3 gap-3 py-2 duration-200 border flex items-center justify-between  rounded-full bg-transparent text-muted-foreground",
                {
                  "border-primary text-primary font-bold border-2 bg-primary/5":
                    activeTab === category.title,
                }
              )}
              onClick={() => {
                setActiveTab(category.title);
                document.documentElement.style.setProperty(
                  "--primary",
                  category.color
                );
              }}
            >
              {category.title}
              <div className="relative w-[16.2px] h-[25px]">
                <img alt="logo" src="logo.svg" />
                <div
                  className="-top-px right-0 absolute bg-red-500 border border-white rounded-full size-2"
                  style={{ backgroundColor: category.color }}
                />
              </div>
            </button>
          ))}
        </div>
      </HorizontalScroll>

      <div className="my-4 noRtl">
        <Carousel setApi={setApi} className="mx-auto w-[90%]">
          <CarouselContent>
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem key={index}>
                <img
                  alt="ad"
                  src={
                    activeTab === "جني طعام" || activeTab === "سفر"
                      ? `/${activeTab}/ad1.png`
                      : `ad1.png`
                  }
                  className="w-full h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex gap-1 mx-auto mt-2 w-fit">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className={cn("rounded-full size-3", {
                "bg-primary": current === index + 1,
                "bg-primary/10": current !== index + 1,
              })}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4 px-8">
        <SectionHeader title="رحلات مميزة" isPrimary />
        <Card className="grid grid-cols-5 px-4 py-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <ImageWithDynamicBg
              key={index}
              imageSrc={`/spicalImages/${index + 1}.png`}
            />
          ))}
        </Card>
        <SectionHeader title="الاكثر طلباً" />
        <ProductList isFood={activeTab === "جني طعام" || activeTab === "سفر"} />

        <SectionHeader title="متاجر جديدة" />
        <Card className="grid grid-cols-5 px-4 py-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <ImageWithDynamicBg
              key={index}
              imageSrc={`/newStores/${index + 1}.png`}
            />
          ))}
        </Card>
      </div>
    </>
  );
}


export default Home;
