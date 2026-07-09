import { render, screen } from "@testing-library/react";

import Events from "./events";

describe("Events", () => {
  it("renders an empty state when there are no events", () => {
    render(<Events calendarData={[]} />);

    expect(screen.getByText(/no events available/i)).toBeInTheDocument();
  });

  it("formats single-day events, date ranges, and times", () => {
    render(
      <Events
        calendarData={[
          {
            fromDate: "09/01/2025",
            toDate: null,
            time: "9am",
            title: "Single Day Event",
            description: "One day only.",
          },
          {
            fromDate: "09/08/2025",
            toDate: "09/12/2025",
            time: null,
            title: "Range Event",
            description: "A week-long event.",
          },
        ]}
      />
    );

    expect(screen.getByText("Mon, September 1, 2025")).toBeInTheDocument();
    expect(screen.getByText(/@ 9am/)).toBeInTheDocument();
    expect(screen.getByText("Sep 8, 2025 to Sep 12, 2025")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Single Day Event" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Range Event" })).toBeInTheDocument();
  });
});
