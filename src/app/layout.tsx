import { Poppins } from 'next/font/google';
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: {
    template: 'Nexus | %s',
    default: 'Nexus',
  },
  description: "Next Gen AI Resume Scanner",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <QueryProvider>{children}</QueryProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
