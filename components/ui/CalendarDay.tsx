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
      className={`flex h-9 w-9 items-center justify-center text-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown ${
        isDisabled
          ? "cursor-not-allowed text-primary-brown/20"
          : "cursor-pointer text-primary-brown hover:bg-primary-pink/30"
      } ${isSelected ? "bg-primary-beige font-semibold hover:bg-primary-beige" : ""} ${
        isToday && !isSelected ? "shadow-[inset_0_-2px_0_0_rgba(55,34,34,0.45)]" : ""
      }`}
    >
      {label}
    </button>
  );
}
