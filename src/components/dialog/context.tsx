import { createContext, useContext } from 'react';

export interface DialogContextValue {
  close: () => void;
}

export const DialogContext = createContext<DialogContextValue>({ close: () => null });

export function useDialog() {
  return useContext(DialogContext);
}
