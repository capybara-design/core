import { ReactNode, forwardRef } from 'react';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ open, onClose, children }, ref) => {
    return (
      <dialog ref={ref} open={open}>
        {children}
        <button onClick={onClose}>Close</button>
      </dialog>
    );
  },
);
