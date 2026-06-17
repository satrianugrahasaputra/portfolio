import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Satria Nugraha Saputra | Data Scientist & Developer Portfolio",
    description: "Portfolio of Satria Nugraha Saputra, specializing in building scalable systems, data-driven applications, and machine learning solutions.",
    keywords: ["Satria Nugraha Saputra", "Satria Nugraha", "Portfolio", "Data Scientist", "Developer", "Web Developer", "Machine Learning", "Software Engineer"],
    authors: [{ name: "Satria Nugraha Saputra" }],
    icons: {
        icon: "/logo_sns.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable} ${mono.variable}`}>
            <body className="antialiased bg-background text-foreground">
                <div className="relative z-0">
                    {children}
                </div>
            </body>
        </html>
    );
}
