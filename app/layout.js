import "@/app/_styles/globals.css";
import { Rufina } from "next/font/google";
import Footer from "./_components/Footer";

const rufina = Rufina({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    template: "%s | Food Zero",
    default: "Welcome | Food Zero",
  },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={rufina.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
