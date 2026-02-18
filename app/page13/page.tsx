"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";

/* =========================
   🔧 TEMPLATE CONFIG
   Company: Alika Holding
========================= */

const BRAND_NAME = "Ali Khudair Al Harbi Holding Group";

const BIO =
  "At Ali Khudair Al Harbi Holding Group, we are a leading Saudi investment group dedicated to managing and growing our assets through a diversified portfolio across strategic sectors including professional services, technology & telecommunications, healthcare, and real estate development. We believe that smart investment is the true driver of sustainable growth. Through our innovative vision, we seize promising opportunities and build long-term investments that enhance operational efficiency and increase the value of our subsidiaries, creating sustainable value for our shareholders and partners.";

const LOGO = "/white-logo.png";

/* 🔹 Top Icons (Website + WhatsApp only) */
const SOCIAL_ICONS = [
  {
    url: "https://alikaholding.com/",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    url: "", // empty = disabled
    icon: <MessageCircle className="w-5 h-5" />,
  },
];

/* 🔹 Social Buttons (Disabled if no URL) */
const LINKS = [
  {
    label: "LinkedIn",
    url: "",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: "X",
    url: "",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    label: "Instagram",
    url: "",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    label: "Facebook",
    url: "",
    icon: <Facebook className="w-5 h-5" />,
  },
];

export default function Page13() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4 py-24">
      <div className="relative w-full max-w-md">
        {/* Avatar */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
          <div className="relative w-32 h-32 rounded-full bg-white shadow-xl border-4 border-[#F5F5F5] flex items-center justify-center">
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-8 pb-10 pt-24 text-center border border-[#E5E5E5]"
        >
          <h1 className="text-2xl font-extrabold text-[#2B2B2B] leading-snug">
            {BRAND_NAME}
          </h1>

          <p className="mt-4 text-sm text-[#555555] leading-relaxed">
            {BIO}
          </p>

          {/* ====== Top Icons ====== */}
          <div className="flex justify-center gap-5 mt-6">
            {SOCIAL_ICONS.map((item, i) =>
              item.url ? (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white transition-all"
                >
                  {item.icon}
                </a>
              ) : (
                <div
                  key={i}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-300 cursor-not-allowed"
                >
                  {item.icon}
                </div>
              )
            )}
          </div>

          {/* ====== Social Buttons ====== */}
          <div className="mt-10 space-y-4">
            {LINKS.map((link, i) =>
              link.url ? (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-full font-semibold transition-all bg-white text-[#2B2B2B] border border-[#0A3D62] hover:bg-[#0A3D62] hover:text-white"
                >
                  {link.icon}
                  {link.label}
                </a>
              ) : (
                <div
                  key={i}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-full font-semibold bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
                >
                  {link.icon}
                  {link.label}
                </div>
              )
            )}
          </div>

          <p className="mt-10 text-xs text-[#999999]">
            © {new Date().getFullYear()} {BRAND_NAME}
          </p>
        </motion.div>
      </div>
    </main>
  );
}
