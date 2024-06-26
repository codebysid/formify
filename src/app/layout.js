import { Inter } from "next/font/google";
import "./globals.css";
import GithubProvider from "@/providers/GithubProvider";
import FormDataProvider from "@/providers/FormDataProvider";
import { Toaster } from "@/components/ui/toaster"
import FooterSection from "@/components/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Formify",
  description: "Create Forms and Collect Data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <GithubProvider>
          <FormDataProvider>
            <Toaster />
            {children}
            <FooterSection />
          </FormDataProvider>
        </GithubProvider>
      </body>
    </html>
  );
}
