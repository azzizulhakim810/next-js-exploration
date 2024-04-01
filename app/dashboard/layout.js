import Link from "next/link";
import CustomLink from "../components/CustomLink";

export default function DashboardLayout({ children }) {
  return (
    <>
      <nav className="p-4 border-b-[1px] border-gray-700">
        <ul className="flex gap-5 justify-center">
          <li>
            <CustomLink path="/dashboard/settings">Settings</CustomLink>
          </li>
          <li>
            <CustomLink path="/dashboard/analytics">Analytics</CustomLink>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
