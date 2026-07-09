import "@testing-library/jest-dom";

window.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock("react-svg", () => ({
  ReactSVG: ({ src, beforeInjection, ...props }) => {
    const svg = document.createElement("svg");
    beforeInjection?.(svg);

    return <span data-testid="react-svg" data-src={src} {...props} />;
  },
}));
