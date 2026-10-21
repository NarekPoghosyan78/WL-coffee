import { useEffect, useState } from "react";
import { heroCoffeeImages } from "./heroSlider";

const HeroSectionSlider = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < heroCoffeeImages.length - 1) {
          return prevIndex + 1;
        }

        return 0;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-[90%] h-[90%] flex items-center justify-center">
      <img
        src={`../../../public/images/coffeeSlider/${heroCoffeeImages[index]}.avif`}
        alt="45"
        className="w-[500px] rounded-[20px] border-2 text-[var(--color1)]"
      />
    </div>
  );
};

export default HeroSectionSlider;
