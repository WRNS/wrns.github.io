import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Navigation from "./navigation";

describe("Navigation", () => {
  it("renders the high-value site and portal links", () => {
    render(<Navigation />);

    expect(screen.getByRole("link", { name: /admissions/i })).toHaveAttribute("href", "/admissions");
    expect(screen.getByRole("link", { name: /programs/i })).toHaveAttribute("href", "/programs");
    expect(screen.getByRole("link", { name: /calendar/i })).toHaveAttribute("href", "/calendar");
    expect(screen.getByRole("link", { name: /current families/i })).toHaveAttribute("href", "/current-families");
    expect(screen.getByRole("link", { name: /contribute/i })).toHaveAttribute("href", "/contribute");
    expect(screen.getByRole("link", { name: /family portal/i })).toHaveAttribute(
      "href",
      "https://www.jovial.org/wintonroad/hello/sign/in"
    );
  });

  it("closes the flyout when an internal link is clicked", async () => {
    const user = userEvent.setup();
    const closeMenu = jest.fn();

    render(<Navigation closeMenu={closeMenu} />);
    await user.click(screen.getByRole("link", { name: /admissions/i }));

    expect(closeMenu).toHaveBeenCalledTimes(1);
  });
});
