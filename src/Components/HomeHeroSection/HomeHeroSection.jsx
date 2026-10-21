import DiscoverButton from "../../Elements/DiscoverButton/DiscoverButton";
import ExploreButton from "../../Elements/ExploreButton/ExploreButton";
import HeroSectionSlider from "../HeroSectionSlider/HeroSectionSlider";
import { useTranslation } from "react-i18next";

const HomeHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-[90dvh] bg-[var(--color2)] flex items-center justify-center !py-8 !md:py-6">
      <div className="w-[90%] max-w-[1400px] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-3 text-[var(--color1)] text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
            {t("HomeHeroSection.titleH1")}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl">
            {t("HomeHeroSection.titleH2")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl">
            {t("HomeHeroSection.text1")}
          </p>
          <p className="text-base sm:text-lg lg:text-xl">
            {t("HomeHeroSection.text2")}
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            {t("HomeHeroSection.text3")}
          </p>
          <p className="text-base sm:text-lg lg:text-xl">
            {t("HomeHeroSection.text4")}
          </p>
          <p className="text-base sm:text-lg lg:text-xl">
            {t("HomeHeroSection.text5")}
          </p>
          <div className="w-full flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-4">
            <ExploreButton />
            <DiscoverButton />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-[600px]">
            <HeroSectionSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
