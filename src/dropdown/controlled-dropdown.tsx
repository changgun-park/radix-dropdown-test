import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

/**
 *
 */
export function ControlledDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root open={open} onOpenChange={(open) => setOpen(open)}>
      <DropdownMenu.Trigger onClick={() => setOpen(true)}>
        Trigger
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Item 1</DropdownMenu.Item>
          <DropdownMenu.Item>Item 2</DropdownMenu.Item>
          <DropdownMenu.Item>Item 3</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
