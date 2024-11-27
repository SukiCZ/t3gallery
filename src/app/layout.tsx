import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TopNav } from "~/app/_components/topnav";

export const metadata: Metadata = {
    title: "T3 Gallery",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
                layout: {
                    socialButtonsVariant: "iconButton",
                },
            }}
        >
            <html lang="en" className={`${GeistSans.variable}`}>
                <body className="flex flex-col gap-4">
                    <TopNav />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
