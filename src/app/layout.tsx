import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { Poppins } from "@next/font/google";
import Navbar from "@/components/section/Navbar";
import StickyCursor from "@/components/ui/sticky-cursor";
import Particles from "@/components/ui/particles";
// import FooterSection from "@/components/section/home/footer";

export const metadata: Metadata = {
  title: "Sickstem Informasi",
  description: "Website kami tercinta",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${poppins.variable} overflow-x-hidden h-full w-full font-poppins`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StickyCursor />
          <Navbar />
          {children}
          <Particles
            className="absolute h-full inset-0 -z-10"
            quantity={200}
            ease={80}
            color={"#0000"}
          />
          {/* <FooterSection /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
