// "use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CustomLink from "./components/CustomLink";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  console.log("hello");
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-4 border-b-[1px] border-gray-700">
          <ul className="flex gap-5 justify-center">
            <li>
              <CustomLink path="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink path="/dashboard/settings">Settings</CustomLink>
            </li>
            <li>
              <CustomLink path="/dashboard/analytics">Analytics</CustomLink>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
