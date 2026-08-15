import { notFound } from 'next/navigation';
import { isValidPathKey } from '@/lib/auth';

export default async function ControlLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;

  // Any wrong key is indistinguishable from a route that does not exist.
  if (!isValidPathKey(key)) notFound();

  return <>{children}</>;
}
