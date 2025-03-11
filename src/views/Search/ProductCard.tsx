import ImageWithDynamicBg from "@/components/shared/ImageDaynmic";

const ProductCard = () => {
  return (
    <div className="flex items-start justify-between w-full gap-3 bg-white shadow-lg p-5 rounded-lg relative">
      <div className="bg-primary border-2 border-primary rounded-xl overflow-hidden">
        <img
          alt="product image"
          src={"/product1.png"}
          className="w-[200px] h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-sm">ايفون 15 برو ماكس</h3>
        <p className="text-[9px]">
          الضمان و المنشا : ضمان الوكالة سنة كاملة - عربي شرق اوسط ذاكرة الخزن :
          256GB هذا الجهاز يحتوي ضمان الوكالة سنة
        </p>
        <div className="flex justify-start mt-1 space-x-2  border w-fit p-1 rounded-4xl">
          {[{ colors: ["green", "blue", "red", "orange"] }].map(
            (item, itemIndex) =>
              item.colors.map((color, colorIndex) => (
                <div
                  key={`${itemIndex}-${colorIndex}`}
                  className="w-5 h-5 rounded-full border border-gray-200"
                  style={{
                    backgroundColor:
                      color === "green"
                        ? "#4ade80"
                        : color === "blue"
                        ? "#3b82f6"
                        : color === "red"
                        ? "#ef4444"
                        : color === "orange"
                        ? "#f97316"
                        : "gray",
                  }}
                />
              ))
          )}
        </div>
      </div>
      <div className="w-1/2">
        <div className="absolute left-4 ">
          <ImageWithDynamicBg imageSrc={`/spicalImages/1.png`} />
        </div>
        <p className="absolute text-nowrap bottom-2 left-4 font-bold">
          1,720,000 IQD
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
