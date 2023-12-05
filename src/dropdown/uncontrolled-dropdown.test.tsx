import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UncontrolledDropdown } from "./uncontrolled-dropdown";

it("clicking on 'trigger' opens up menu", async () => {
  const user = userEvent.setup();

  render(<UncontrolledDropdown />);

  await user.click(screen.getByText("Trigger"));
  expect(screen.getByRole("menu")).toBeInTheDocument();
});
