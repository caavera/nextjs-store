import { Roboto } from "next/font/google";
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";
import "../sass/global.sass";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
