"use client";

import { motion } from "framer-motion";
import {
  Section,
  SectionContainer,
  SectionTitle,
} from "@/components/sections/section";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const processSteps = [
  {
    icon: "📋",
    title: "Fill the Form",
    description:
      "Complete our simple onboarding form with your business details and goals",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: "🎯",
    title: "We Create Your Campaign",
    description:
      "Our experts design your perfect campaign strategy and creative content",
    color: "from-orange-400 to-red-600",
  },
  {
    icon: "📈",
    title: "You Get the Results",
    description:
      "Watch your business grow with real, measurable results and detailed reports",
    color: "from-green-400 to-green-600",
  },
];

interface ProcessStepProps {
  step: (typeof processSteps)[0];
  index: number;
  isLast: boolean;
}

function ProcessStep({ step, index, isLast }: ProcessStepProps) {
  return (
    <motion.div variants={fadeInUp} className="relative">
      <div className="text-center">
        {/* Icon Container */}
        <div
          className={`relative mx-auto w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
        >
          <span className="text-4xl">{step.icon}</span>

          <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-sm font-bold text-gray-700">{index + 1}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {step.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{step.description}</p>
      </div>

      {!isLast && (
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="hidden lg:block absolute top-12 -right-8 text-orange-400"
        >
          <ArrowRight className="w-6 h-6" />
        </motion.div>
      )}
    </motion.div>
  );
}

export function ProcessSection() {
  return (
    <Section>
      <SectionContainer>
        <SectionTitle>How It Works (Step-by-Step)</SectionTitle>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative"
        >
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </motion.div>
      </SectionContainer>
    </Section>
  );
}
