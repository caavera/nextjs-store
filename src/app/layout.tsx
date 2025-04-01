import { Roboto } from "next/font/google";
import { Hero } from "app/components/home/Hero"
import { Description } from "app/components/home/Description"
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
        <Hero />
        <Description />
        {children}
        <Footer />
      </body>
    </html>
  );
}
