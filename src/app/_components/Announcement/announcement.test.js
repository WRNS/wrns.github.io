import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Announcement from "./announcement";

describe("Announcement", () => {
  afterEach(() => {
    jest.useRealTimers();
    sessionStorage.clear();
  });

  it("shows an active announcement and hides it after dismissal", async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2026-01-15T12:00:00"));
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(<Announcement />);

    const banner = screen.getByText(/current families/i);
    expect(banner.closest("aside")).not.toHaveClass("announcement--hide");

    await user.click(screen.getByRole("button", { name: /close announcment banner/i }));

    expect(banner.closest("aside")).toHaveClass("announcement--hide");
    expect(sessionStorage.getItem("announcementDismissed")).toBe("true");
  });

  it("renders nothing when no announcement is active", async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2026-07-01T12:00:00"));

    const { container } = render(<Announcement />);

    await waitFor(() => expect(container).toBeEmptyDOMElement());
  });
});
