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
   ANTIQUE CREATIONS
   ========================= */

const BRAND_NAME = "ANTIQUE CREATIONS";

const BIO =
  "Antique Creations (ACWM) is a leading Saudi-based contracting company established in 2016 and proudly part of the Ali Al-Harbi Group (Alika). The company specializes in engineering, finishing, and comprehensive Mechanical, Electrical, and Plumbing (MEP) building services, holding the highest first-degree classification for contracting in Saudi Arabia.";

const LOGO = "/antique.png";

/*
  أي رابط فاضي \"\" = الكبسة تكون Disabled
*/
const LINKS = [
  {
    label: "Website",
    url: "https://acwm-sa.com",
    icon: <Globe className="w-5 h-5" />,
    primary: true,
  },
  {
    label: "LinkedIn",
    url: "",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: "Instagram",
    url: "",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    label: "YouTube",
    url: "",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    label: "Facebook",
    url: "",
    icon: <Facebook className="w-5 h-5" />,
  },
];

export default function Page8() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4 py-24">
      <div className="relative w-full max-w-md">

        {/* Avatar */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
          <div
            className="
              relative
              w-32 h-32
              rounded-full
              bg-white
              shadow-xl
              border-4 border-[#5A2E14]
              flex items-center justify-center
              overflow-hidden
            "
          >
            <Image
              src={LOGO}
              alt={BRAND_NAME}
              fill
              className="object-contain scale-90"
              priority
            />
          </div>
        </div>

        {/* Card */}
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
            border border-[#E5E7EB]
          "
        >
          {/* Brand */}
          <h1 className="text-2xl font-extrabold text-[#4A2C1A]">
            {BRAND_NAME}
          </h1>

          {/* Manager */}
          <p className="mt-1 text-sm font-medium text-[#6B7280]">
            Manager: Mohammed Ghanem
          </p>

          {/* Bio */}
          <p className="mt-4 text-sm text-[#374151] leading-relaxed">
            {BIO}
          </p>

          {/* Links */}
          <div className="mt-10 space-y-4">
            {LINKS.map((link, i) => {
              const isDisabled = !link.url;

              return (
                <a
                  key={i}
                  href={link.url || "#"}
                  target={link.url ? "_blank" : undefined}
                  rel={link.url ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (isDisabled) e.preventDefault();
                  }}
                  className={`
                    w-full flex items-center justify-center gap-3
                    py-4 rounded-full font-semibold
                    transition-all
                    ${
                      isDisabled
                        ? "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
                        : link.primary
                        ? "bg-[#5A2E14] text-white hover:bg-[#3E1F0F] shadow-lg"
                        : "bg-white text-[#5A2E14] border border-[#5A2E14] hover:bg-[#5A2E14] hover:text-white"
                    }
                  `}
                >
                  {link.icon}
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <p className="mt-10 text-xs text-[#9CA3AF]">
            © {new Date().getFullYear()} Antique Creations. All rights reserved.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
