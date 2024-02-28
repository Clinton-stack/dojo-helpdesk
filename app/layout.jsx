import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Dojo Help Desk",
  description: "A simple help desk app built with Next.js and Supabase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  );
}
