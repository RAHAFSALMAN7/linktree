"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

/* =========================
   🔧 TEMPLATE CONFIG
   Company: AMT Arabia
========================= */

const BRAND_NAME = "AMT Arabia";

const BIO =
  "Advanced Micro Technologies (AMT) specializes in the delivery of high quality network solutions that are customized to fit the needs of each client and each.";

const LOGO = "/amt.png"; // موجود داخل public/

const LINKS = [
  {
    label: "Website",
    url: "https://amt-arabia.com",
    icon: <Globe className="w-5 h-5" />,
    primary: true,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/amt-arabia/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/amt_arabia/",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@amtadvancedmicrotechnologi4321",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/",
    icon: <Facebook className="w-5 h-5" />,
  },
];

export default function Page1() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4 py-24">
      <div className="relative w-full max-w-md">
        {/* ================= Avatar ================= */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
          <div
            className="
              relative
              w-32 h-32
              rounded-full
              bg-white
              shadow-xl
              border-4 border-[#F5F5F5]
              flex items-center justify-center
            "
          >
            {/* 
              IMPORTANT:
              - object-contain → ما يقص
              - p-4 → يخفي أي حواف مربعة
              - no overflow-hidden → ما يبان مربع
            */}
            <Image
              src={LOGO}
              alt={BRAND_NAME}
              width={200}
              height={200}
              className="object-contain "
              priority
            />
          </div>
        </div>

        {/* ================= Card ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            bg-white
            rounded-[32px]
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            px-8 pb-10 pt-24
            text-center
            border border-[#E5E5E5]
          "
        >
          {/* Brand */}
          <h1 className="text-3xl font-extrabold text-[#2B2B2B]">
            {BRAND_NAME}
          </h1>

          {/* Bio */}
          <p className="mt-3 text-sm text-[#555555] leading-relaxed">
            {BIO}
          </p>

          {/* ================= Links ================= */}
          <div className="mt-10 space-y-4">
            {LINKS.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-full flex items-center justify-center gap-3
                  py-4 rounded-full font-semibold
                  transition-all
                  ${
                    link.primary
                      ? "bg-[#C1121F] text-white hover:bg-[#9A0E18] shadow-lg"
                      : "bg-white text-[#2B2B2B] border border-[#C1121F] hover:bg-[#C1121F] hover:text-white"
                  }
                `}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>

          {/* Footer */}
          <p className="mt-10 text-xs text-[#999999]">
            © {BRAND_NAME}
          </p>
        </motion.div>
      </div>
    </main>
  );
}
