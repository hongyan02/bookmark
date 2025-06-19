import { Geist, Geist_Mono } from "next/font/google";
import Slider from "@/components/slider";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "AgCl",
    description: "A Bookmark Generator for anythings",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`h-screen w-screen ${geistSans.variable} ${geistMono.variable} antialiased flex flex-row`}
            >
                <Slider avatar="https://i.pravatar.cc/150?img=1" welcome="Hello" userName="AgCl" />
                <main className="flex-1">{children}</main>
            </body>
        </html>
    );
}
