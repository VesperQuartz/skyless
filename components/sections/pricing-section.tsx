"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { pricingPlans } from "@/constants/data"
import type { PricingPlan } from "@/types"
import { Section, SectionContainer, SectionTitle } from "@/components/sections/section"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

interface PricingCardProps {
  plan: PricingPlan
}

function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className={`p-8 h-full relative ${plan.popular ? "ring-2 ring-orange-500 scale-105" : ""}`}>
        {plan.popular && (
          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500">Most Popular</Badge>
        )}
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
          </div>
          <ul className="space-y-3">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            className={`w-full ${
              plan.popular ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-900 hover:bg-gray-800"
            } text-white`}
          >
            {plan.buttonText || "Get Started"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function PricingSection() {
  return (
    <Section background="gray" id="pricing">
      <SectionContainer>
        <SectionTitle>Our Price</SectionTitle>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </motion.div>
      </SectionContainer>
    </Section>
  )
}
