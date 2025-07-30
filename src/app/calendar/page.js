"use client";

import "./calendar.scss";

import { useMemo, useState } from "react";

import Events from "@components/Events/events";
import Hero from "@components/Hero/hero";
import calendarJSON from "@data/calendar25-26.json";

export default function Calendar() {
  const upcomingDaysLimit = 60;

  // sort date from oldest to latest
  const sortedCalendar = calendarJSON.sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate));

  const [calendarData, setCalendarData] = useState(sortedCalendar);
  const [monthFilter, setMonthFilter] = useState("upcoming");

  // creates a dynamic list of months from the calendar data and sorts them to get a Jan-Dec ordering.
  // Use useMemo to avoid recalculating eventMonthsArray on every render
  const eventMonthsArray = useMemo(() => {
    const eventMonths = [];

    sortedCalendar.forEach((event) => {
      const { fromDate, toDate } = event;
      eventMonths.push(new Date(fromDate).getMonth());
      if (toDate) {
        eventMonths.push(new Date(toDate).getMonth());
      }
    });

    const uniqueMonths = [...new Set(eventMonths)];

    const monthOrder = [
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

    return uniqueMonths.map((month) => monthOrder[month]).sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
  }, [sortedCalendar]);

  // Function to get month index from month name
  const getMonthIndex = (monthName) => {
    const monthOrder = [
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
    return monthOrder.indexOf(monthName);
  };

  // Call filterEventsByMonth whenever monthFilter changes
  useMemo(() => {
    const filterEventsByMonth = () => {
      if (monthFilter === "upcoming" || !monthFilter) {
        const now = new Date();
        const upcomingLimit = new Date();
        upcomingLimit.setDate(now.getDate() + upcomingDaysLimit); // Set to 60 days in the future

        const filteredData = sortedCalendar.filter((event) => {
          const fromDate = new Date(event.fromDate);
          return fromDate >= now && fromDate <= upcomingLimit;
        });
        setCalendarData(filteredData);
      } else if (monthFilter === "all") {
        setCalendarData(sortedCalendar);
      } else {
        const monthIndex = getMonthIndex(monthFilter);
        const filteredData = sortedCalendar.filter((event) => {
          const fromDate = new Date(event.fromDate);
          const toDate = event.toDate ? new Date(event.toDate) : null;
          return fromDate.getMonth() === monthIndex || (toDate && toDate.getMonth() === monthIndex);
        });
        setCalendarData(filteredData);
      }
    };

    filterEventsByMonth();
  }, [monthFilter, sortedCalendar]);

  return (
    <main>
      <Hero
        image={"/images/dragon.jpg"}
        title={"School Calendar"}
        description={"2024-2025 School Year"}
        imagePosition="50% 60%"
      />

      <section id="calendar" className="calendar section__layout">
        <h2 className="section__heading">WRNS Events</h2>
        <p className="section__subheading">Explore the events coming up this school year.</p>

        <div className="calendar__filter">
          <aside className="calendar__filter-note">Filter by time frame</aside>
          <select
            className="calendar__select"
            onChange={(e) => setMonthFilter(e.target.value)}
            value={monthFilter || ""}
          >
            <option value="upcoming">Next {upcomingDaysLimit} Days</option>
            <option value="all">All Events</option>
            {eventMonthsArray.map((month) => (
              <option value={month} key={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <Events calendarData={calendarData} />
      </section>
    </main>
  );
}
