import Homepage from "./page";
import { render, screen } from "@testing-library/react";

describe("Homepage", () => {
  it("links to the important school documents", () => {
    render(<Homepage />);

    expect(screen.getByRole("link", { name: /school by-laws/i })).toHaveAttribute(
      "href",
      "/docs/26-27/Bylaws - Revised 2026.pdf"
    );
    expect(screen.getByRole("link", { name: /parent's handbook/i })).toHaveAttribute(
      "href",
      "/docs/wrns-parent-handbook.pdf"
    );
    expect(screen.getByRole("link", { name: /description of committees/i })).toHaveAttribute(
      "href",
      "/docs/wrns-committees.pdf"
    );
  });
});
