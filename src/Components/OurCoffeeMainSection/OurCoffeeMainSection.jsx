import { useState } from "react";
import { useTranslation } from "react-i18next";

import OurCoffeeFilterBtn from "../../Elements/OurCoffeeFilterBtn/OurCoffeeFilterBtn";
import { filterBtns } from "../../Elements/OurCoffeeFilterBtn/filterBtns";
import { coffeeCards } from "../CoffeeCard/CoffeeCards";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const OurCoffeeMainSection = () => {
  const { t } = useTranslation();

  const [selectedFilters, setSelectedFilters] = useState(["All"]);

  const handleFilterClick = (btnText) => {
    setSelectedFilters((prev) => {
      if (btnText === "All") return ["All"];

      const base = prev.filter((f) => f !== "All");
      const next = base.includes(btnText)
        ? base.filter((f) => f !== btnText)
        : [...base, btnText];

      return next.length ? next : ["All"];
    });
  };

  const filteredCards = coffeeCards.filter((card) => {
    if (selectedFilters.includes("All")) {
      return true;
    }

    return selectedFilters.includes(card.category);
  });

  return (
    <section className="w-full bg-[var(--color2)] !py-8 !sm:py-10 !lg:py-14 flex items-center justify-center">
      <div className="container mx-auto w-[90%] flex flex-col items-center gap-6 sm:gap-8">
        <div className="w-full flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
          {filterBtns.map((btn) => {
            const isActive = selectedFilters.includes(btn.text);

            return (
              <OurCoffeeFilterBtn
                key={btn.text}
                text={t(`FilterButtons.${btn.text}`)}
                isActive={isActive}
                onClick={() => handleFilterClick(btn.text)}
              />
            );
          })}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch gap-5 sm:gap-6 lg:gap-8">
          {filteredCards.map((card) => (
            <div key={card.id} className="w-full max-w-[380px] min-w-0">
              <CoffeeCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCoffeeMainSection;
