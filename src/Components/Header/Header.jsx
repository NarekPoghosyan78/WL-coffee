import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

import Logo from "../../../public/images/WL-logo.png";
import ChangeLanguages from "../../Elements/ChangeLanguages/ChangeLanguages";
import MoonSvg from "../../Svgs/MoonSvg/MoonSvg";
import SunSvg from "../../Svgs/SunSvg/SunSvg";

const Header = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const ThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const navLinks = [
    { path: "/", label: t("Header.Home") },
    { path: "/ourCoffee", label: t("Header.OurCoffee") },
    { path: "/about", label: t("Header.AboutUs") },
    { path: "/contact", label: t("Header.Contact") },
  ];

  return (
    <header className="w-full min-h-[75px] md:h-[80px] border-b bg-[var(--color3)] px-4 md:px-8 !p-[0_20px]">
      <div className="flex h-[46px] items-center justify-between md:hidden">
        <Link to="/" className="flex items-center gap-2 select-none">
          <img src={Logo} alt="WL logo" className="w-9 h-9 object-contain" />
          <h1 className="text-xl font-bold">WithLove</h1>
        </Link>
        <div className="flex items-center gap-3">
          <ChangeLanguages />

          <button
            type="button"
            onClick={ThemeToggle}
            aria-label="Toggle theme"
            className="flex items-center justify-center text-[var(--color5)]"
          >
            {theme === "dark" ? <SunSvg /> : <MoonSvg />}
          </button>
        </div>
      </div>
      <div className="hidden h-full items-center justify-between md:flex">
        <Link to="/" className="flex items-center gap-2 select-none">
          <img src={Logo} alt="WL logo" className="w-12 h-12 object-contain" />

          <h1 className="text-3xl font-bold text-[var(--color5)]">WithLove</h1>
        </Link>

        <nav className="w-[43%]">
          <ul className="flex items-center justify-between gap-5 text-sm lg:text-base font-bold text-[var(--color4)]">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `transition-all duration-200 hover:opacity-75 ${
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

        <div className="flex items-center gap-5">
          <ChangeLanguages />

          <button
            type="button"
            onClick={ThemeToggle}
            aria-label="Toggle theme"
            className="flex items-center justify-center text-[var(--color5)]"
          >
            {theme === "dark" ? <SunSvg /> : <MoonSvg />}
          </button>
        </div>
      </div>
      <nav className="flex h-[28px] items-center justify-between text-xs font-bold text-[var(--color5)] md:hidden">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              `whitespace-nowrap transition-all duration-200 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
