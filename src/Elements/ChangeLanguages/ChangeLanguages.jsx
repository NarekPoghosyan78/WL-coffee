import { useTranslation } from "react-i18next";

const ChangeLanguages = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="relative inline-block">
      <select
        value={i18n.language}
        onChange={handleLanguageChange}
        className="appearance-none bg-white text-gray-700 text-xs font-medium border border-gray-200 rounded-lg !pl-3 !pr-7 !py-1.5 cursor-pointer hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 shadow-xs"
      >
        <option value="en">English</option>
        <option value="hy">Հայերեն</option>
        <option value="ru">Русский</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400">
        <svg
          className="w-3.5 h-3.5 stroke-current"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default ChangeLanguages;
