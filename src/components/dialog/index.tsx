import { ReactNode, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  modal?: boolean;
  children?: ReactNode;
}

export interface DialogRef {
  show: () => void;
  close: () => void;
}

export const Dialog = forwardRef<DialogRef, DialogProps>(
  ({ open, onClose, modal, children }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
      return {
        dialogElement: dialogRef.current,
        show: () => {
          if (modal) {
            dialogRef.current.showModal();
          } else {
            dialogRef.current.show();
          }
        },
        close: () => {
          dialogRef.current.close();
        },
      };
    }, [modal]);

    useEffect(() => {
      if (open) {
        if (modal) {
          dialogRef.current.showModal();
        } else {
          dialogRef.current.show();
        }
      } else {
        dialogRef.current.close();
      }
    }, [open]);

    return (
      <dialog ref={dialogRef}>
        {children}
        <button onClick={onClose}>Close</button>
      </dialog>
    );
  },
);
