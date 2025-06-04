"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative"
    >
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-900">Skyless</span>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          Get Started
        </Button>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 p-4 md:hidden"
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
