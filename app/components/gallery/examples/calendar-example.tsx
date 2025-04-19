import React, { useState } from "react";
import styles from "./calendar-example.module.css";
import { Calendar } from "@/components/ui/calendar/calendar";
import type { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

export function CalendarExample() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className={styles.container}>
      <div className={styles.examples}>
        <div className={styles.example}>
          <h4>Single Date</h4>
          <div className={styles.calendarWrapper}>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className={styles.calendar}
            />
          </div>
        </div>

        <div className={styles.example}>
          <h4>Date Range</h4>
          <div className={styles.calendarWrapper}>
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              className={styles.calendar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
