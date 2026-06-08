'use client';
import { useRouter } from 'next/navigation';
import { pathFor, type ScreenId } from '@/lib/routes';

/** Returns a navigate helper mirroring the original demo's go(id). */
export function useGo() {
  const router = useRouter();
  return (id: ScreenId) => router.push(pathFor(id));
}
