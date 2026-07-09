import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "./modal";

describe("Modal", () => {
  it("only renders when visible", () => {
    const { rerender } = render(<Modal>Modal content</Modal>);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    rerender(<Modal visible>Modal content</Modal>);

    expect(screen.getByRole("dialog")).toHaveTextContent("Modal content");
  });

  it("calls onDismiss from the close button and backdrop", async () => {
    const user = userEvent.setup();
    const onDismiss = jest.fn();
    const { container } = render(
      <Modal visible onDismiss={onDismiss}>
        Modal content
      </Modal>
    );

    await user.click(screen.getByRole("button", { name: /close modal/i }));
    await user.click(container.querySelector(".wrns-splash__backdrop"));

    expect(onDismiss).toHaveBeenCalledTimes(2);
  });
});
