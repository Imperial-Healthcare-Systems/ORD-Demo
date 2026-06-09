'use client';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { usePathname } from 'next/navigation';

type NavState = { open: boolean; setOpen: (v: boolean) => void };
const NavCtx = createContext<NavState>({ open: false, setOpen: () => {} });

export function useNav() {
  return useContext(NavCtx);
}

/** Holds the mobile off-canvas sidebar open state; auto-closes on route change. */
export default function NavProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return <NavCtx.Provider value={{ open, setOpen }}>{children}</NavCtx.Provider>;
}
