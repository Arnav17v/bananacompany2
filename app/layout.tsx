"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import IdContext from "./idContext";
import { useState } from "react";
import Navbar from "./navbar";
import aritcleContext from "./articleContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [id, setId] = useState("");
  const [article, setArticle] = useState("");
  return (
    <html lang="en">
      <IdContext.Provider value={{ article, setArticle }}>
        <IdContext.Provider value={{ id, setId }}>
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
        </IdContext.Provider>
      </IdContext.Provider>
    </html>
  );
}
