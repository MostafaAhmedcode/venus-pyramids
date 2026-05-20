import { redirect } from 'next/navigation';

/**
 * /admin — redirect to the login page by default.
 * If the user is already logged in, the login page itself
 * will redirect them to /admin/dashboard.
 */
export default function AdminIndexPage() {
  redirect('/admin/login');
}
