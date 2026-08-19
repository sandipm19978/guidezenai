import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"GuideZenAI — Your AI Guide in a New Country",description:"Find hotels, hospitals, restaurants, transport and essential services with an AI travel companion."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}