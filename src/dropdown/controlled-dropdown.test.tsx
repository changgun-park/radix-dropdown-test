import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ControlledDropdown } from "./controlled-dropdown";

it("renders without crashing", async () => {
  const user = userEvent.setup();

  render(<ControlledDropdown />);

  await user.click(screen.getByText("Trigger"));
  expect(screen.getByText("Item 1")).toBeInTheDocument();
});
