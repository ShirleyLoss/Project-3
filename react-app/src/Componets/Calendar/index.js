import { useCallback, useEffect, useState } from "react";
import "./index.scss";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [today, setToday] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);
  const [currentLastDay, setCurrentLastDay] = useState(null);
  const [currentStartingDay, setCurrentStartingDay] = useState(null);
  const [lastDay , setLastDay] =useState(null)

  const getFirstDay = () => {
    const newDate = new Date(currentYear, currentMonth, 1);
    return newDate.getDay();
  };

  const getLastDay = () => {
    const newDate = new Date(currentYear, currentMonth + 1, 0);
    return newDate.getDate();
  };

  const isToday = (d) => {
    return (
      d === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isLastDay = (d) => {
    return (
      d === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const handleNextClicked = useCallback(() => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((cm) => cm + 1);
    }
  }, [currentMonth, getLastDay]);

  const handlePrevClicked = useCallback(() => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((cm) => cm - 1);
    }
  }, [currentMonth, getLastDay]);

  useEffect(() => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setCurrentDate(today.getDate());
  }, []);

  useEffect(() => {
    setCurrentStartingDay(getFirstDay());
    setCurrentLastDay(getLastDay());
  }, [currentMonth]);

  return (
    <div className="datePicker">
      <div className="pickerHeader">
        <button onClick={handlePrevClicked}> Prev </button>
        <h1>
          {MONTHS[currentMonth]} <small>/ {currentYear}</small>
        </h1>
        <button onClick={handleNextClicked}> Next </button>
      </div>
      <div className="weekHeader">
        <span>Su</span>
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
      </div>
      <div className="dates">
        {Array.from({ length: currentStartingDay }, () => (
          <span className="empty" />
        ))}
        {Array.from({ length: currentLastDay }, (_, d) => (
          <span className={isToday(d + 1) ? "active" : ""}>{d + 1}</span>
        ))}
        {Array.from({ length: currentLastDay - 24}, () => (
          <span className="empty"></span>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
