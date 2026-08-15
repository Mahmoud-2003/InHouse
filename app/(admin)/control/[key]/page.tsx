import { cookies } from 'next/headers';
import { sessionCookie, verifySessionToken } from '@/lib/auth';
import AdminPanel from '@/components/admin/AdminPanel';
import LoginForm from '@/components/admin/LoginForm';

export default async function ControlPage({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  const token = (await cookies()).get(sessionCookie.name)?.value;

  if (!verifySessionToken(token)) {
    return <LoginForm pathKey={key} />;
  }
  return <AdminPanel />;
}
