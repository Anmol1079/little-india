import "./globals.css";
import { Inter } from "next/font/google";
import ScrollToTop from "./components/common/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  adjustFontFallback: true,
});

export const metadata = {
  title: "Little India",
  description:
    "Authentic Indian cuisine crafted with tradition, passion, and the finest ingredients. Experience rich flavors, warm hospitality, and unforgettable dining in every bite.",
  icons: {
    icon: "/littleindia-favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full antialiased ${inter.variable}`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
