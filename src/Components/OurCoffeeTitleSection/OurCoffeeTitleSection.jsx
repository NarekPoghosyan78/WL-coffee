import { useTranslation } from "react-i18next";

const OurCoffeeTitleSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-[15dvh] bg-[var(--color2)] flex items-center justify-center py-6 sm:py-8">
      <div className="container mx-auto w-[90%] flex flex-col items-start justify-center gap-1">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[var(--color1)] font-bold">
          {t("OurCoffeeTitleSection.titleH2")}
        </h2>
        <h4 className="text-base sm:text-lg lg:text-xl text-[var(--color1)]">
          {t("OurCoffeeTitleSection.text")}
        </h4>
      </div>
    </section>
  );
};

export default OurCoffeeTitleSection;
