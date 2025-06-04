"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  background?: "white" | "gray"
  id?: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function Section({ children, className = "", background = "white", id }: SectionProps) {
  const bgClass = background === "gray" ? "bg-gray-50" : "bg-white"

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`px-6 py-16 ${bgClass} ${className}`}
    >
      {children}
    </motion.section>
  )
}

export function SectionContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-6xl mx-auto ${className}`}>{children}</div>
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.h2
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`text-4xl font-bold text-center text-gray-900 mb-16 ${className}`}
    >
      {children}
    </motion.h2>
  )
}
