import type { Meta, StoryObj } from "@storybook/react";
import { Button, Modal } from "design-system";
import { IconClose } from "design-system/icons";
import { createRef } from "react";

type Story = StoryObj<typeof Modal>;
const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ["autodocs"],
};

export default meta;

export const Dialog: Story = {
  render: () => {
    const ref = createRef<HTMLDialogElement>();
    const onOpen = () => ref.current?.showModal();
    const onClose = () => ref.current?.close();

    return (
      <>
        <Button onClick={onOpen}>Open</Button>
        <Modal ref={ref}>
          <div className="p-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">Modal</h2>
              <Button onClick={onClose} className="p-2xs -mt-2xs -mr-2xs">
                <IconClose height="1.2em" />
              </Button>
            </div>

            <div>content</div>
          </div>
        </Modal>
      </>
    );
  },
};

export const Popover: Story = {
  render: () => {
    return (
      <>
        <Button popoverTarget="popover">Open</Button>
        <Modal id="popover" popover="auto" className="min-h-[20rem]">
          <div className="p-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg">Modal</h2>
              <Button
                className="p-2xs -mt-2xs -mr-2xs"
                popoverTarget="popover"
                popoverTargetAction="hide"
              >
                <IconClose height="1.2em" />
              </Button>
            </div>

            <div>content</div>
          </div>
        </Modal>
      </>
    );
  },
};
