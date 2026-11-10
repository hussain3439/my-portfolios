import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevPortfolio.",
  description:
    "Passionate Fresher Web Developer specializing in building clean, responsive, and user-centric web applications with React.js and modern technologies.",
};

// Mirrors the original App.jsx shell:
// <BrowserRouter><div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-between">
//   <Navbar /> <div className="flex-grow">{routes}</div> <Footer />
// </div></BrowserRouter>
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body  className={`${poppins.className} min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-between`}>
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
