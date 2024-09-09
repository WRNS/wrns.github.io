import "@testing-library/jest-dom";

import Homepage from "./page";
import { render } from "@testing-library/react";

describe("Page Component", () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it("should render without crashing", () => {
    const { container } = render(<Homepage />);
    expect(container).toBeInTheDocument();
  });
});
