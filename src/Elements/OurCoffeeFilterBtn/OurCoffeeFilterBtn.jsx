const OurCoffeeFilterBtn = ({ text, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      style={{
        backgroundColor: isActive ? "var(--color1)" : "var(--color5)",
        color: isActive ? "var(--color5)" : "var(--color1)",
      }}
      className="shrink-0 min-w-[75px] sm:min-w-[90px] md:min-w-[100px] min-h-[36px] sm:min-h-[40px] !px-3 sm:!px-4 !py-2 border border-[var(--color1)] rounded-full cursor-pointer text-sm sm:text-base md:text-lg transition-all duration-200 hover:opacity-80"
    >
      {text}
    </button>
  );
};

export default OurCoffeeFilterBtn;
