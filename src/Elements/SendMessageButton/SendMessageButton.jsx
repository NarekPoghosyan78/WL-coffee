import { useTranslation } from "react-i18next";

const SendMessageButton = () => {
  const { t } = useTranslation();

  return (
    <button
      className="min-w-[120px] !p-[0_10px] h-[35px] rounded-[8px] cursor-pointer text-[var(--color5)] bg-[var(--color1)]"
      type="submit"
    >
      {t("Buttons.SendMessageBtn")}
    </button>
  );
};

export default SendMessageButton;
