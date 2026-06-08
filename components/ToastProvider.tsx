'use client';
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import Icon from './Icon';

type ToastFn = (msg?: string) => void;
const ToastCtx = createContext<ToastFn>(() => {});

export function useToast(): ToastFn {
  return useContext(ToastCtx);
}

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState('Done');
  const [show, setShow] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toast = useCallback<ToastFn>((m) => {
    setMsg(m || 'Done');
    setShow(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setShow(false), 2600);
  }, []);

  return (
    <ToastCtx.Provider value={toast}>
      {children}
      <div className={`toast${show ? ' show' : ''}`}>
        <div className="ic">
          <Icon name="check" width={16} height={16} strokeWidth={3} />
        </div>
        <span>{msg}</span>
      </div>
    </ToastCtx.Provider>
  );
}
