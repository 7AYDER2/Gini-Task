import { useEffect, useRef, useState } from "react";

interface ImageWithDynamicBgProps {
    imageSrc: string;
  
    className?: string;
  }
  
  const ImageWithDynamicBg: React.FC<ImageWithDynamicBgProps> = ({
    imageSrc,
    className,
  }) => {
    const [bgColor, setBgColor] = useState("#22c55e"); // Default to green-500
    const imgRef = useRef<HTMLImageElement>(null);
  
    useEffect(() => {
      const getColorFromImage = () => {
        if (!imgRef.current) return;
        const img = imgRef.current;
  
        // Create canvas
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
  
        // Set canvas size
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
  
        // Draw image on canvas
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
  
        // Get pixel data from bottom-left corner
        const pixelData = ctx.getImageData(0, img.naturalHeight - 1, 1, 1).data;
  
        // Convert to rgb color
        const color = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
        setBgColor(color);
      };
  
      if (imgRef?.current?.complete) {
        getColorFromImage(); // If already loaded
      } else {
        // @ts-ignore
        imgRef.current.onload = getColorFromImage; // Wait for load
      }
    }, [imageSrc]);
  
    return (
      <div
        className={`relative border-2 border-primary rounded-md size-[42px] overflow-hidden ${className}`}
        style={{ backgroundColor: bgColor }}
      >
        <img
          ref={imgRef}
          alt="special"
          src={imageSrc}
          className="w-full h-full object-cover"
        />
        <div className="bottom-0 left-0 absolute bg-primary p-[2px] rounded-tr-[4px]">
          <img alt="logo" src="/whiteLogo.svg" />
        </div>
      </div>
    );
  }

  export default ImageWithDynamicBg;