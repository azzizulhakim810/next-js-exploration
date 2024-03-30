import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <>
      <nav className="p-4 border-b-[1px] border-gray-700">
        <ul className="flex gap-5 justify-center">
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
          <li>
            <Link href="/dashboard/analytics">Analytics</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
