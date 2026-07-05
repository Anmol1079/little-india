import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
      lang="en" 
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          precedence="default"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}