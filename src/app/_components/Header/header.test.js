import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { usePathname } from "next/navigation";

import Header from "./header";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Header", () => {
  beforeEach(() => {
    usePathname.mockReturnValue("/");
  });

  it("opens and closes the flyout menu", async () => {
    const user = userEvent.setup();
    const { container } = render(<Header />);
    const menuContainer = container.querySelector(".globalHeader-menu-container");

    expect(menuContainer).not.toHaveClass("open");

    await user.click(screen.getByRole("button"));
    expect(menuContainer).toHaveClass("open");

    await user.click(screen.getByRole("link", { name: /admissions/i }));
    expect(menuContainer).not.toHaveClass("open");
  });

  it("does not show the apply CTA on the admissions page", () => {
    usePathname.mockReturnValue("/admissions");

    render(<Header />);

    expect(screen.queryByRole("link", { name: /apply now/i })).not.toBeInTheDocument();
  });

  it("shows the apply CTA outside of admissions", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: /apply now/i })).toHaveAttribute("href", "/admissions");
  });
});
