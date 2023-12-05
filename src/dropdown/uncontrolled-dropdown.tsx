import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

/**
 *
 */
export function UncontrolledDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>
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
