import { Geist, Geist_Mono } from "next/font/google";
import AOSProvider from "@/components/AOSProvider";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ OK (CSS-only)
import 'swiper/css'; // ✅ OK
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BootstrapClient from '@/components/BootstrapClient';


export const metadata = {
  title: "GEO Agency in Bangalore | Power Your Brand with AI Search",
  description: "Bangalore's Premier GEO Agency - AI-Powered Brand Growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        <AOSProvider>
          <Header />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
