import "./globals.css";
import ScrollToTop from "./components/common/ScrollToTop";

export const metadata = {
  title: "Little India",
  description: "Authentic Indian cuisine crafted with tradition, passion, and the finest ingredients. Experience rich flavors, warm hospitality, and unforgettable dining in every bite.",
  icons: {
    icon: "/littleindia-favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          precedence="default"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
