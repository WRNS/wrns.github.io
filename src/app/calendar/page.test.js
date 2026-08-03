import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Calendar from "./page";

describe("Calendar", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2027-05-01T12:00:00"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("defaults to events in the next 60 days", async () => {
    render(<Calendar />);

    expect(await screen.findByRole("heading", { name: "Annual Community Meeting" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /fall work day/i })).not.toBeInTheDocument();
  });

  it("updates the rendered events when the filter changes", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(<Calendar />);

    await user.selectOptions(screen.getByRole("combobox"), "all");
    expect(await screen.findAllByRole("heading", { name: /fall work day/i })).toHaveLength(2);

    await user.selectOptions(screen.getByRole("combobox"), "February");
    await waitFor(() => {
      expect(screen.getByRole("heading", { name: /applications open - alumni/i })).toBeInTheDocument();
      expect(screen.queryByRole("heading", { name: /fall work day/i })).not.toBeInTheDocument();
    });
  });
});
