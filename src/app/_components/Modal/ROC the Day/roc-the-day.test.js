import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import RocTheDay from "./roc-the-day";

describe("RocTheDay", () => {
  afterEach(() => {
    jest.useRealTimers();
    sessionStorage.clear();
  });

  it("shows before expiry and respects session dismissal", async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2025-12-02T12:00:00"));
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(<RocTheDay />);

    expect(screen.getByRole("dialog", { name: /roc the day splash/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /close modal/i }));

    expect(screen.queryByRole("dialog", { name: /roc the day splash/i })).not.toBeInTheDocument();
    expect(sessionStorage.getItem("wrns:splash:dismissed")).toBe("1");
  });

  it("does not show after expiry", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2025-12-03T12:00:00"));

    render(<RocTheDay />);

    expect(screen.queryByRole("dialog", { name: /roc the day splash/i })).not.toBeInTheDocument();
  });
});
