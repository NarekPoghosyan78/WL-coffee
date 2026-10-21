import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const DiscoverButton = () => {
  const { t } = useTranslation();

  return (
    <NavLink
      to="/about"
      className="w-[150px-160px] h-[40px] text-[#ffe6a7] bg-[#6f1d1b] rounded cursor-pointer border-2 !p-[5px]"
    >
      {t("Buttons.DiscoverBtn")}
    </NavLink>
  );
};

export default DiscoverButton;
