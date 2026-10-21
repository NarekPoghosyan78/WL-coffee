import { useTranslation } from "react-i18next";

const CoffeeCard = ({ card }) => {
  const { t } = useTranslation();

  return (
    <article className="group relative flex h-full w-full min-w-0 flex-col overflow-hidden cursor-pointer rounded-3xl border border-[var(--color1)]/10 bg-[var(--color5)] shadow-[0_8px_25px_rgba(67,40,24,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(67,40,24,0.20)] hover:shadow-orange-200">
      <div className="relative overflow-hidden p-3 pb-0 sm:p-4 sm:pb-0">
        <img
          src={`/images/CoffeeCardsImages/${card.img}`}
          alt={t(card.name)}
          loading="lazy"
          className="h-[190px] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[210px] lg:h-[220px]"
        />
        <span className="absolute left-6 top-6 rounded-full bg-[var(--color5)]/90 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--color1)] shadow-sm">
          WL · With Love
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2">
          <h2 className="text-xl font-bold tracking-tight text-[var(--color1)] sm:text-2xl">
            {t(card.name)}
          </h2>

          <div className="mt-2 h-[3px] w-10 rounded-full bg-[var(--color4)] transition-all duration-300 group-hover:w-16" />
        </div>

        <p className="mb-5 text-sm leading-6 text-[var(--color3)]/80 sm:text-base">
          {t(card.text)}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-[var(--color1)]/15 pt-4">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-[var(--color4)]">
              Price
            </span>

            <span className="text-xl font-extrabold text-[var(--color1)] sm:text-2xl">
              {t(card.price)}
            </span>
          </div>

          <button
            type="button"
            className="rounded-full bg-[var(--color1)] px-5 py-2.5 text-sm font-semibold text-[var(--color5)] shadow-md transition-all duration-300 hover:bg-[var(--color3)] hover:shadow-lg active:scale-95 sm:px-6 cursor-pointer"
          >
            Order
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CoffeeCard;
