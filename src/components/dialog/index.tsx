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
import { Button } from '../button';
import { DialogContext } from './context';
import './index.css';

export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  modal?: boolean;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface DialogRef {
  show: () => void;
  close: () => void;
}

export const Dialog = forwardRef<DialogRef, DialogProps>(
  ({ open, onClose, modal, title, subtitle, children, className, style }, ref) => {
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

    useEffect(() => {
      dialogRef.current.addEventListener('close', () => {
        onClose?.();
      });
    }, []);

    const close = useCallback(() => {
      dialogRef.current?.close();
    }, []);

    return (
      <DialogContext.Provider value={{ close }}>
        <dialog
          ref={dialogRef}
          className={cn('cd-dialog', modal && 'cd-dialog-modal', className)}
          style={style}
        >
          <header className={cn('cd-dialog-header', className)} style={style}>
            <div className="cd-dialog-title">{title}</div>
            <div className="cd-dialog-subtitle">{subtitle}</div>
          </header>
          <div className="cd-dialog-content">{children}</div>
          <footer className="cd-dialog-footer">
            <Button variant="fill" color="primary">
              OK
            </Button>
            <Button onClick={close}>Cancel</Button>
          </footer>
          <Button className="cd-dialog-close" variant="text" onClick={close}>
            &#x2715;
          </Button>
        </dialog>
      </DialogContext.Provider>
    );
  },
);
