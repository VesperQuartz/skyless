"use client"

import { motion } from "framer-motion"
import { stats } from "@/constants/data"
import type { Stat } from "@/types"
import { Section, SectionContainer } from "@/components/sections/section"

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

interface StatCardProps {
  stat: Stat
}

function StatCard({ stat }: StatCardProps) {
  return (
    <motion.div variants={fadeInUp} className="text-center">
      <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
      <div className="text-gray-600">{stat.label}</div>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <Section background="gray">
      <SectionContainer className="max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </motion.div>
      </SectionContainer>
    </Section>
  )
}
