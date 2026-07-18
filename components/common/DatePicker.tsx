"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarDay } from "@/components/ui/CalendarDay";
import { IconButton } from "@/components/ui/IconButton";

export interface DatePickerProps {
  id: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  tone?: "default" | "onImage";
}

const WEEKDAY_LABELS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const YEAR_RANGE = 6;

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function getCalendarDays(viewMonth: Date) {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const startOffset = (new Date(year, month, 1).getDay() + 6) % 7;
  const start = new Date(year, month, 1 - startOffset);

  return Array.from({ length: 42 }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
}

export function DatePicker({
  id,
  name,
  value,
  onChange,
  placeholder,
  tone = "default",
}: Readonly<DatePickerProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(() => startOfDay(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const today = startOfDay(new Date());
  const isOnImage = tone === "onImage";

  const yearOptions = Array.from({ length: YEAR_RANGE }, (_, i) => today.getFullYear() + i);
  const isPrevMonthDisabled = viewMonth.getFullYear() === today.getFullYear() && viewMonth.getMonth() === today.getMonth();

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (date: Date) => {
    setSelectedDate(date);
    onChange(formatDate(date));
    setIsOpen(false);
  };

  const changeMonth = (delta: number) => {
    setViewMonth((current) => {
      const next = new Date(current.getFullYear(), current.getMonth() + delta, 1);
      const minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      return next < minMonth ? minMonth : next;
    });
  };

  const changeYear = (year: number) => {
    setViewMonth((current) => {
      const next = new Date(year, current.getMonth(), 1);
      const minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      return next < minMonth ? minMonth : next;
    });
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <input
          id={id}
          name={name}
          type="text"
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onFocus={() => setIsOpen(true)}
          onChange={(event) => {
            onChange(event.target.value);
            setSelectedDate(null);
          }}
          className={`w-full py-3.5 pl-4 pr-11 text-base outline-none transition-shadow duration-200 ${
            isOnImage
              ? "bg-white/12 text-white placeholder:text-white/50 shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.35)] focus:shadow-[inset_0_-2px_0_0_rgba(255,255,255,1)]"
              : "bg-primary-brown/4 text-primary-brown placeholder:text-primary-brown/40 shadow-[inset_0_-2px_0_0_rgba(55,34,34,0.15)] focus:shadow-[inset_0_-2px_0_0_rgba(55,34,34,1)]"
          }`}
        />
        <button
          type="button"
          aria-label={isOpen ? "Close calendar" : "Open calendar"}
          onClick={() => setIsOpen((current) => !current)}
          className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer transition-colors duration-150 ${
            isOnImage ? "text-white/60 hover:text-white" : "text-primary-brown/50 hover:text-primary-brown"
          }`}
        >
          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
            <rect x="2.5" y="4" width="15" height="14" strokeWidth="1.5" />
            <path d="M2.5 8H17.5M6.5 2V5.5M13.5 2V5.5" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary-brown/40 px-4"
          >
            <motion.div
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12, scale: shouldReduceMotion ? 1 : 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 12, scale: shouldReduceMotion ? 1 : 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="w-72 max-w-[calc(100vw-2rem)] bg-white p-5 shadow-[0_20px_60px_rgba(55,34,34,0.28)]"
            >
              <div className="flex items-center justify-between gap-2">
                <IconButton
                  label="Previous month"
                  tone="dark"
                  onClick={() => changeMonth(-1)}
                  disabled={isPrevMonthDisabled}
                  className={`h-8 w-8 ${isPrevMonthDisabled ? "cursor-not-allowed opacity-30" : ""}`}
                >
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current">
                    <path d="M10 3L5 8L10 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </IconButton>

                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-primary-brown">
                    {viewMonth.toLocaleDateString("en-GB", { month: "long" })}
                  </span>
                  <select
                    aria-label="Select year"
                    value={viewMonth.getFullYear()}
                    onChange={(event) => changeYear(Number(event.target.value))}
                    className="cursor-pointer bg-transparent text-sm font-semibold text-primary-brown outline-none"
                  >
                    {yearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <IconButton label="Next month" tone="dark" onClick={() => changeMonth(1)} className="h-8 w-8">
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current">
                    <path d="M6 3L11 8L6 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </IconButton>
              </div>

              <div className="mt-4 grid grid-cols-7 place-items-center gap-y-1">
                {WEEKDAY_LABELS.map((label) => (
                  <span key={label} className="text-xs font-semibold uppercase tracking-wide text-primary-brown/40">
                    {label}
                  </span>
                ))}

                {getCalendarDays(viewMonth).map((date) => (
                  <CalendarDay
                    key={date.toISOString()}
                    date={date}
                    label={date.getDate()}
                    isOutsideMonth={date.getMonth() !== viewMonth.getMonth()}
                    isSelected={selectedDate !== null && isSameDay(date, selectedDate)}
                    isToday={isSameDay(date, today)}
                    isDisabled={date < today}
                    onSelect={handleSelect}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
