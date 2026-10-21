import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const ExploreButton = () => {
  const { t } = useTranslation();

  return (
    <NavLink
      to="/ourCoffee"
      className="!p-[6px_10px] bg-[#ffe6a7] text-[#6f1d1b] text-[16px] cursor-pointer rounded border-2"
    >
      {t("Buttons.ExploreBtn")}
    </NavLink>
  );
};

export default ExploreButton;
