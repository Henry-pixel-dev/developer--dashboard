"use client"

import { ThemeProvider } from "@wrksz/themes/next"
import React from "react";


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="light">
        { children }
    </ThemeProvider>
  )
}
