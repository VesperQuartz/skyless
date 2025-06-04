"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/constants/data";
import type { Feature } from "@/types";
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

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
        <CardContent className="space-y-4">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <Section background="gray">
      <SectionContainer>
        <SectionTitle>What You&apos;ll Get with Skyless</SectionTitle>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </SectionContainer>
    </Section>
  );
}
