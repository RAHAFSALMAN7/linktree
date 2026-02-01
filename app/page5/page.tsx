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
   Company: Assystem Radicon
========================= */

const BRAND_NAME = "Assystem Radicon";

const BIO =
  "Assystem Radicon provides engineering, consulting, and project management services supporting complex industrial and infrastructure projects.";

const LOGO = "/assystem-radicon.png"; // ضع اللوجو داخل public/

/*
  أي رابط فاضي "" = الكبسة تكون Disabled
*/
const LINKS = [
  {
    label: "Website",
    url: "", // لو عندك موقع رسمي ضيفه
    icon: <Globe className="w-5 h-5" />,
    primary: true,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/assystem",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/assystem_official/",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@GroupeAssystem",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/GroupAssystem/",
    icon: <Facebook className="w-5 h-5" />,
  },
];

export default function Page6() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F4F6F8] px-4 py-24">
      <div className="relative w-full max-w-md">
        {/* Avatar */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
          <div
            className="
              w-32 h-32
              rounded-full
              bg-white
              shadow-xl
              border-4 border-[#F4F6F8]
              flex items-center justify-center
            "
          >
            <Image
              src={LOGO}
              alt={BRAND_NAME}
              width={200}
              height={200}
              className="object-contain"
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
            border border-[#E5E5E5]
          "
        >
          {/* Brand */}
          <h1 className="text-3xl font-extrabold text-[#E11D2E]">
            {BRAND_NAME}
          </h1>

          {/* Bio */}
          <p className="mt-3 text-sm text-[#555555] leading-relaxed">
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
                        ? "bg-[#E11D2E] text-white hover:bg-[#C41625] shadow-lg"
                        : "bg-white text-[#E11D2E] border border-[#E11D2E] hover:bg-[#E11D2E] hover:text-white"
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
          <p className="mt-10 text-xs text-[#999999]">
            © {BRAND_NAME}
          </p>
        </motion.div>
      </div>
    </main>
  );
}
