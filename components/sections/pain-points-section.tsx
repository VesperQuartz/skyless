"use client";

import { motion } from "framer-motion";
import { X, Clock, Target } from "lucide-react";
import {
  Section,
  SectionContainer,
  SectionTitle,
} from "@/components/sections/section";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const painPoints = [
  { icon: X, text: "Don't know how to start ads", color: "text-red-500" },
  {
    icon: Clock,
    text: "No time to manage social media",
    color: "text-red-500",
  },
  {
    icon: Target,
    text: "Low experience in live & ad agency",
    color: "text-red-500",
  },
];

export function PainPointsSection() {
  return (
    <Section background="gray">
      <SectionContainer className="max-w-4xl text-center">
        <SectionTitle>Why Most Small Businesses Struggle Online</SectionTitle>
        <p className="text-xl text-gray-600 mb-12">
          Many business owners fail because they don&apos;t know where to start
          or who to trust.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center space-x-3"
            >
              <item.icon className={`w-6 h-6 ${item.color}`} />
              <span className="text-gray-700">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </SectionContainer>
    </Section>
  );
}
