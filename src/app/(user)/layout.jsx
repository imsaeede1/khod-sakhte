import vazirFont from "@/constants/localFonts";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import Header from "../Header";

export const metadata = {
  title: "خود ساخته",
  description: "آموزش کسب و کار",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans`}
      >
        <Toaster />
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
