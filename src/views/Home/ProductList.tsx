import ImageWithDynamicBg from "@/components/shared/ImageDaynmic";

const ProductList = ({ isFood }: { isFood?: boolean }) => {
  return (
    <div className="gap-2 grid">
      <div className="flex items-center gap-3 bg-white shadow-lg px-4 py-3 rounded-lg">
        <div className="bg-primary border-2 border-primary rounded-xl w-1/5 aspect-square overflow-hidden">
          <img
            alt="product image"
            src={isFood ? "/جني طعام/product1.png" : "/product1.png"}
            className="w-full h-[100%] object-cover"
          />
        </div>
        <div className="grid ml-auto">
          <h3 className="font-bold text-sm">
            {isFood ? "طحين القمج الكامل 50 كيلو" : "ايفون 15 برو ماكس"}
          </h3>
          <p className="-mt-1 mb-px font-semibold text-primary text-sm">
            {isFood ? "40,000دع" : "1,500,000دع"}
          </p>
          <p className="text-xs">Sold: 435379</p>
        </div>
        <div>
          <ImageWithDynamicBg imageSrc={`/spicalImages/1.png`} />
        </div>
      </div>
      <div className="z-50 flex items-center gap-3 bg-white shadow-lg px-4 py-3 rounded-lg">
        <div className="bg-primary border-2 border-primary rounded-xl w-1/5 aspect-square overflow-hidden">
          <img
            alt="product image"
            src={isFood ? "/جني طعام/product2.png" : "/product2.png"}
            className="w-full h-[100%] object-cover"
          />
        </div>
        <div className="grid ml-auto">
          <h3 className="font-bold text-sm">
            {isFood ? "طحين القمج الكامل 50 كيلو" : "ايفون 15 برو ماكس"}
          </h3>
          <p className="-mt-1 mb-px font-semibold text-primary text-sm">
            {isFood ? "40,000دع" : "1,500,000دع"}
          </p>
          <p className="text-xs">Sold: 435379</p>
        </div>
        <div>
          <ImageWithDynamicBg imageSrc={`/spicalImages/2.png`} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;