import ExploreButton from "../../Elements/ExploreButton/ExploreButton";
import TeamPhoto from "../../../public/images/WL-Team.jpg";
import { useTranslation } from "react-i18next";
import { aboutBadges } from "../../Elements/AboutBadge/aboutBadges";
import AboutBadge from "../../Elements/AboutBadge/AboutBadge";

const AboutMainSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[var(--color2)] !py-10 sm:!py-12 lg:!py-16 flex items-center justify-center">
      <div className="container mx-auto w-[90%] max-w-[1400px] flex flex-col gap-10 lg:gap-14">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-3 sm:gap-4 text-center lg:text-left text-[var(--color1)]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
              {t("AboutHeroSection.title")}
            </h2>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              {t("AboutHeroSection.textH3")}
            </h3>
            <h4 className="text-base sm:text-lg lg:text-xl">
              {t("AboutHeroSection.text1H4")}
            </h4>
            <h4 className="text-base sm:text-lg lg:text-xl">
              {t("AboutHeroSection.text2H4")}
            </h4>
            <h4 className="text-base sm:text-lg lg:text-xl">
              {t("AboutHeroSection.text3H4")}
            </h4>
            <p className="max-w-2xl text-sm sm:text-base lg:text-lg leading-7">
              {t("AboutHeroSection.textP")}
            </p>
            <div className="mt-3">
              <ExploreButton />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src={TeamPhoto}
              alt="WL coffee team"
              loading="lazy"
              className="w-full max-w-[550px] rounded-2xl sm:rounded-3xl border-2 border-[var(--color1)]/20 shadow-lg"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch justify-items-center gap-4 sm:gap-5 lg:gap-6">
          {aboutBadges.map((badge) => (
            <div key={badge.id} className="w-full min-w-0 max-w-[400px]">
              <AboutBadge badge={badge} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMainSection;
