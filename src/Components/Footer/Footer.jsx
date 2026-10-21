import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { path: "/", label: t("Header.Home") },
    { path: "/ourCoffee", label: t("Header.OurCoffee") },
    { path: "/about", label: t("Header.AboutUs") },
    { path: "/contact", label: t("Header.Contact") },
  ];

  return (
    <footer className="w-full bg-[var(--color3)] text-[var(--color5)] py-6 md:py-0 flex items-center justify-center">
      <div className="mx-auto w-[90%] max-w-[1400px] min-h-[120px] flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between md:gap-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color4)]">WithLove</h2>
          <h3 className="text-xs sm:text-sm font-normal text-[var(--color4)]">
            {t("HomeHeroSection.titleH2")}
          </h3>
        </div>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm md:gap-20 lg:gap-25">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `transition-colors duration-200 text-[var(--color4)] hover:text-[var(--color2)] ${
                      isActive ? "underline underline-offset-4" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-xs sm:text-sm text-center">
          <p className="text-[var(--color4)]">© {new Date().getFullYear()} WL</p>
          <p className="mt-1 text-[var(--color4)]">With Love</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
