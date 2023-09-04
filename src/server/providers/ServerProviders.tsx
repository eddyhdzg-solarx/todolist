import { ServerThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export function ServerProviders({ children }: { children: React.ReactNode }) {
  return (
    <ServerThemeProvider attribute="class" defaultTheme="dark">
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>{children}</body>
      </html>
    </ServerThemeProvider>
  );
}
