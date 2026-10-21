import SendMessageButton from "../../Elements/SendMessageButton/SendMessageButton";
import AddressMap from "../../../public/images/WL-map.jpg";
import { useTranslation } from "react-i18next";

const ContactMainSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[var(--color2)] !py-8 sm:!py-12 lg:!py-16 flex items-center justify-center">
      <div className="container mx-auto w-[90%] max-w-[1400px]">
        <div className="!mb-8 sm:!mb-10 flex flex-col items-start gap-2 text-[var(--color1)]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
            {t("ContactHeroSection.title")}
          </h2>

          <h3 className="text-base sm:text-lg lg:text-xl">
            {t("ContactHeroSection.text")}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="w-full rounded-2xl sm:rounded-3xl border border-[var(--color1)]/20 bg-[var(--color5)] !p-5 sm:!p-8 shadow-lg">
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm sm:text-base font-semibold text-[var(--color1)]"
                >
                  {t("ContactHeroSection.SendMassage.Name")}
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full min-w-0 rounded-lg border border-[var(--color1)]/30 bg-transparent !px-3 !py-3 text-[var(--color1)] outline-none transition focus:border-[var(--color1)] focus:ring-2 focus:ring-[var(--color1)]/15"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm sm:text-base font-semibold text-[var(--color1)]"
                >
                  {t("ContactHeroSection.SendMassage.Email")}
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full min-w-0 rounded-lg border border-[var(--color1)]/30 bg-transparent !px-3 !py-3 text-[var(--color1)] outline-none transition focus:border-[var(--color1)] focus:ring-2 focus:ring-[var(--color1)]/15"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm sm:text-base font-semibold text-[var(--color1)]"
                >
                  {t("ContactHeroSection.SendMassage.Massage")}
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full min-w-0 resize-y rounded-lg border border-[var(--color1)]/30 bg-transparent !px-3 !py-3 text-[var(--color1)] outline-none transition focus:border-[var(--color1)] focus:ring-2 focus:ring-[var(--color1)]/15"
                />
              </div>
              <div className="!mt-1 w-full">
                <SendMessageButton />
              </div>
            </form>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-5 sm:gap-6">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[var(--color1)]/20 shadow-lg">
              <img
                src={AddressMap}
                alt="WL location map"
                loading="lazy"
                className="block w-[100%] sm:!aspect-[16/9] lg:!aspect-[10/6]"
              />
            </div>

            <div className="flex flex-col gap-4 rounded-2xl !p-5 sm:!p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color1)]">
                {t("ContactHeroSection.title")}
              </h3>

              <div className="flex flex-col gap-4 text-sm sm:text-base text-[var(--color1)]">
                <p className="break-words leading-7">
                  <b className="text-[var(--color4)]">
                    {t("ContactHeroSection.Details.Address.title")} —
                  </b>{" "}
                  {t("ContactHeroSection.Details.Address.text")}
                </p>

                <p className="break-words leading-7">
                  <b className="text-[var(--color4)]">
                    {t("ContactHeroSection.Details.Hours.title")} —
                  </b>{" "}
                  {t("ContactHeroSection.Details.Hours.text")}
                </p>

                <p className="break-words leading-7">
                  <b className="text-[var(--color4)]">
                    {t("ContactHeroSection.Details.Email.title")} —
                  </b>{" "}
                  <a
                    href="mailto:WLadministartion@withlove.am"
                    className="underline-offset-4 hover:underline"
                  >
                    WLadministartion@withlove.am
                  </a>
                </p>

                <p className="break-words leading-7">
                  <b className="text-[var(--color4)]">
                    {t("ContactHeroSection.Details.Phone.title")} —
                  </b>{" "}
                  <a
                    href="tel:+37412345678"
                    className="underline-offset-4 hover:underline"
                  >
                    +37412345678
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMainSection;
