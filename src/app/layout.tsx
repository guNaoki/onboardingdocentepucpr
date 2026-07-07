import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SearchModal from "@/components/ui/SearchModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PUCPR Onboarding Docente",
  description: "Facilitando a jornada docente e promovendo a excelência acadêmica desde o primeiro dia.",
  icons: {
    icon: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col md:flex-row relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Sidebar />
          <div className="flex-grow flex flex-col min-w-0">
            <TopBar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <SearchModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
