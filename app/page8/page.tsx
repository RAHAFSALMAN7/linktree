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
   CentralCare Branding
   ========================= */

const BRAND_NAME = "CentralCare Incorporated";

const BIO =
  "CentralCare Incorporated is a certified healthcare staffing company providing qualified physicians, nurses, and allied health professionals to federal and private healthcare institutions, committed to quality, compliance, and excellence.";

const LOGO = "/centralcare.png";

/*
  أي رابط فاضي "" = الكبسة تكون Disabled
*/
const LINKS = [
  {
    label: "Website",
    url: "https://www.centralmedicalcare.com/",
    icon: <Globe className="w-5 h-5" />,
    primary: true,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/centralcare-inc-",
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
    <main className="min-h-screen flex items-center justify-center bg-[#F7F6F3] px-4 py-24">
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
              border-4 border-[#E8E2D8]
              flex items-center justify-center
              overflow-hidden
            "
          >
            <Image
              src={LOGO}
              alt={BRAND_NAME}
              fill
              className="object-contain scale-200"
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
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            px-8 pb-10 pt-24
            text-center
            border border-[#E8E2D8]
          "
        >
          {/* Brand */}
          <h1 className="text-2xl font-extrabold text-[#3A3A3A]">
            {BRAND_NAME}
          </h1>

          {/* Bio */}
          <p className="mt-3 text-sm text-[#5B5B5B] leading-relaxed">
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
                    ${isDisabled
                      ? "bg-[#F1F1F1] text-[#B0B0B0] border border-[#E0E0E0] cursor-not-allowed"
                      : link.primary
                        ? "bg-[#C9A24D] text-white hover:bg-[#B8943F] shadow-lg"
                        : "bg-white text-[#C9A24D] border border-[#C9A24D] hover:bg-[#C9A24D] hover:text-white"
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
          <p className="mt-10 text-xs text-[#9A9A9A]">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
