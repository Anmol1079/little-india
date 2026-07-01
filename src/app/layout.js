import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: "Little India",
  description: "Authentic Indian cuisine crafted with tradition, passion, and the finest ingredients. Experience rich flavors, warm hospitality, and unforgettable dining in every bite.",
  icons: {
    icon: "/littleindia-favicon.svg", // Use your custom filename here
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
