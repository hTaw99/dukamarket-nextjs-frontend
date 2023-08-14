import GetCartIitially from "./components/GetCartIitially";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PersistLogin from "./components/PersistedLogin";
import ProviderWrapper from "./components/Wrappers/Provider";
import QueryClientProviderWrapper from "./components/Wrappers/QueryClientProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
import { Inter } from "next/font/google";
import CartSideModel from "@/app/components/Models/CartSideModel";
import QuickViewModel from "@/app/components/Models/QuickViewModel";
import PictureModel from "@/app/components/Models/PictureModel";
import CompareModel from "@/app/components/Models/CompareModel";
import Footer from "@/app/components/Footer";
import Topbar from "./components/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dukamarket App",
  description: "Digital storefront on the internet",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Amr tawfik" },
    { name: "Hady Tawfik", url: "https://dukamarket-nextjs.vercel.app" },
  ],
  applicationName: "Dukamarket",
  openGraph: {
    title: "Dukamarket App",
    description: "Digital storefront on the internet",
    url: "https://dukamarket-nextjs.vercel.app",
    siteName: "Next.js",
    images: [
      {
        url: "https://freepik.cdnpk.net/img/og-fb-logo-en.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProviderWrapper>
        <ProviderWrapper>
          <body suppressHydrationWarning={true} className={inter.className}>
            <PersistLogin>
              <Topbar />
              <Header />
              <Navbar />
              <div className="py-8 bg-gray-100">{children}</div>
              <Footer />
              <CartSideModel />
              <QuickViewModel />
              <CompareModel />
              <PictureModel />
            </PersistLogin>
          </body>
        </ProviderWrapper>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProviderWrapper>
    </html>
  );
}
