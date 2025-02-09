import "@/app/_styles/globals.css";
import Footer from "./_components/Footer";
import { rufina } from "./_fonts/fonts";

export const metadata = {
  title: {
    template: "%s | Food Zero",
    default: "Food Zero",
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
