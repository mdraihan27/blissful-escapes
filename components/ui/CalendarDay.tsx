export interface CalendarDayProps {
  date: Date;
  label: number;
  isOutsideMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
  isDisabled: boolean;
  onSelect: (date: Date) => void;
}

export function CalendarDay({
  date,
  label,
  isOutsideMonth,
  isSelected,
  isToday,
  isDisabled,
  onSelect,
}: Readonly<CalendarDayProps>) {
  if (isOutsideMonth) {
    return <span aria-hidden="true" className="h-9 w-9" />;
  }

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={() => onSelect(date)}
      className={`flex h-9 w-9 items-center justify-center text-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy ${
        isDisabled
          ? "cursor-not-allowed text-primary-sky"
          : "cursor-pointer text-primary-navy hover:bg-primary-sky hover:text-white"
      } ${isSelected ? "bg-primary-gold font-semibold hover:bg-primary-gold hover:text-primary-navy" : ""} ${
        isToday && !isSelected ? "shadow-[inset_0_-2px_0_0_#274957]" : ""
      }`}
    >
      {label}
    </button>
  );
}
