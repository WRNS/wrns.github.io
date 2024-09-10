import "./events.scss";

export default function Events({ calendarData = [] }) {
  if (calendarData.length === 0) {
    return <div className="calendar__event">No events available.</div>;
  }

  return (
    <>
      {calendarData.map((event) => {
        const { fromDate, toDate, time, title, description } = event;
        const singleDayFormat = { weekday: "short", year: "numeric", month: "long", day: "numeric" };
        const shortDateFormat = { year: "numeric", month: "short", day: "numeric" };

        let formattedSingleDate = new Intl.DateTimeFormat("en-US", singleDayFormat).format(new Date(fromDate));
        let formattedFromDate = new Intl.DateTimeFormat("en-US", shortDateFormat).format(new Date(fromDate));
        let formattedToDate = new Intl.DateTimeFormat("en-US", shortDateFormat).format(new Date(toDate));

        return (
          <div className="calendar__event" key={`${fromDate}-${title}`}>
            <div className="calendar__date-container">
              {!toDate && <span className="calendar__date">{`${formattedSingleDate}`}</span>}
              {fromDate && toDate && (
                <span className="calendar__date">{`${formattedFromDate} to ${formattedToDate}`}</span>
              )}
              {time && <span className="calendar__time">{` @ ${time}`}</span>}
            </div>
            <div className="calendar__event-container">
              <h3 className="calendar__event-title">{title}</h3>
              <p className="calendar__event-description">{description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
