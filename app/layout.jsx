import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "Kaium Uddin",
    description: "Portfolio for Kaium Uddin",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={outfit.className}>
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
