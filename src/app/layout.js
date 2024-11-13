import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "R INTERIOR ABRASIVOS, fabrica de abrasivos solidos para la industria",
  description: "R INTERIOR ABRASIVOS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`scroll-smooth bg-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
