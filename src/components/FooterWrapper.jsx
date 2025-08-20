'use client';

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import MainFooter from "@/components/MainFooter";

export default function FooterWrapper() {
  const pathname = usePathname();

  // Check if path starts with /services/
  const isServicePage = pathname.startsWith("/services/");

  return isServicePage ? <Footer /> : < MainFooter/>;
}
