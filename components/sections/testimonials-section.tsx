"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { testimonials } from "@/constants/data";
import type { Testimonial } from "@/types";
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

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="p-6 h-full">
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-orange-100 text-orange-600">
                {testimonial.avatar}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex space-x-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {testimonial.content}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <Section>
      <SectionContainer>
        <SectionTitle>Trusted by Local Business Owners</SectionTitle>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div>
      </SectionContainer>
    </Section>
  );
}
