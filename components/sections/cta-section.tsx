"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section, SectionContainer } from "@/components/sections/section";
import { Phone } from "lucide-react";
import Image from "next/image";

export function CTASection() {
  return (
    <Section background="gray">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Get More Customers?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let&apos;s launch your first ad today.
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Start Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <EnhancedChatMockup />
          </motion.div>
        </div>
      </SectionContainer>
    </Section>
  );
}

function EnhancedChatMockup() {
  return (
    <div className="relative">
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-2 shadow-lg z-10"
      >
        <Phone className="w-4 h-4" />
      </motion.div>
      <div>
        <Image src="/mobile.png" alt="mobile" width={500} height={500} />
      </div>
    </div>
  );
}
