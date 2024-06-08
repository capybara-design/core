import cn from 'classnames';
import {
  CSSProperties,
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { DialogContext } from './context';
import './index.css';

export * from './header';

export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  modal?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface DialogRef {
  show: () => void;
  close: () => void;
}

export const Dialog = forwardRef<DialogRef, DialogProps>(
  ({ open, onClose, modal, children, className, style }, ref) => {
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

    const close = useCallback(() => {
      dialogRef.current?.close();
      onClose?.();
    }, []);

    return (
      <DialogContext.Provider value={{ close }}>
        <dialog ref={dialogRef} className={cn('cd-dialog', className)} style={style}>
          {children}
        </dialog>
      </DialogContext.Provider>
    );
  },
);
