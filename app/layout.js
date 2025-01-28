import "@/app/_styles/globals.css";

const metadata = {
  template: {
    title: "%s | Food Zero",
    default: "Welcome | Food Zero",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
