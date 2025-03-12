import { ArrowRight, Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "@/views/Search/ProductCard";
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="px-6 p-8 mb-5 flex flex-col gap-4">
      <div className="flex gap-3">
        <ArrowRight size={24} onClick={() => navigate(`/`)} />
        <h2 className="text-xl">تجار جني</h2>
      </div>
        <div className="relative mb-6">
          <form>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full border-none outline-none rounded-full py-3 pr-12 pl-4 bg-white text-right text-lg placeholder:text-muted-foreground/60"
              placeholder="بحث"
              value={searchQuery}
              onChange={handleInputChange}
            />
          </form>
        </div>
        <ProductCard/>
    </div>
  );
}

export default SearchPage;