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
   Company: Central Medical Care
========================= */

const BRAND_NAME = "Central Medical Care";

const BIO =
  "Central Medical Care Polyclinic delivers comprehensive healthcare services with a patient-centered approach and modern medical standards.";

const LOGO = "/centralcare.png"; // لازم يكون داخل public/

/*
  أي رابط فاضي "" = الكبسة تكون Disabled
*/
const LINKS = [
  {
    label: "Website",
    url: "", // غير متوفر
    icon: <Globe className="w-5 h-5" />,
    primary: true,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/central-care",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/centralcare/",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@centralmedicalcare3288",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/Centralcareksa/",
    icon: <Facebook className="w-5 h-5" />,
  },
];

export default function Page7() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F7F6F4] px-4 py-24">
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
              border-4 border-[#F7F6F4]
              flex items-center justify-center
              overflow-hidden
            "
          >
            <Image
              src={LOGO}
              alt={BRAND_NAME}
              fill
              className="object-contain scale-150"
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
            border border-[#E5E2DC]
          "
        >
          {/* Brand */}
          <h1 className="text-3xl font-extrabold text-[#B89A6A]">
            {BRAND_NAME}
          </h1>

          {/* Bio */}
          <p className="mt-3 text-sm text-[#2B2B2B] leading-relaxed">
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
                        ? "bg-[#B89A6A] text-white hover:bg-[#9E845A] shadow-lg"
                        : "bg-white text-[#B89A6A] border border-[#B89A6A] hover:bg-[#B89A6A] hover:text-white"
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
          <p className="mt-10 text-xs text-[#9E9E9E]">
            © {BRAND_NAME}
          </p>
        </motion.div>
      </div>
    </main>
  );
}
