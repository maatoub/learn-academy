import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
const bodyFont = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome in GERMAN ACADEMY",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className} suppressHydrationWarning={true}>
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
