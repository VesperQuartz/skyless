"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share } from "lucide-react";
import { companyLogos } from "@/constants/data";
import { Section, SectionContainer } from "@/components/sections/section";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function HeroSection() {
  return (
    <Section className="pt-8">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Boost You Sales with Social Media
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We help small businesses grow through consistent and effective
              social campaigns.
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            >
              Get Started Today
            </Button>

            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by Leading Company
              </p>
              <div className="flex items-center space-x-4">
                {companyLogos.map((company, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                  >
                    <div className="w-6 h-6 bg-gray-300 rounded">
                      {company()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <EnhancedPhoneMockup />
          </motion.div>
        </div>
      </SectionContainer>
    </Section>
  );
}

function EnhancedPhoneMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute -top-4 -left-8 bg-white rounded-xl shadow-lg p-3 z-10"
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">f</span>
          </div>
          <div className="text-xs">
            <div className="font-semibold">Facebook</div>
            <div className="text-gray-500">+127% reach</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -top-2 -right-6 bg-white rounded-xl shadow-lg p-3 z-10"
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">📷</span>
          </div>
          <div className="text-xs">
            <div className="font-semibold">Instagram</div>
            <div className="text-gray-500">+89% engagement</div>
          </div>
        </div>
      </motion.div>

      <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 transform rotate-2 shadow-2xl">
        <div className="bg-white rounded-2xl transform -rotate-2 shadow-xl overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 flex items-center justify-center">
            <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Skyless Marketing</p>
                <p className="text-xs text-gray-500">Sponsored • 2 hours ago</p>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                Follow
              </Button>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-800">
                🚀 Ready to boost your sales? Our latest campaign generated 300%
                ROI for local businesses!
              </p>

              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg h-32 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20"></div>
                <div className="relative z-10 text-center">
                  <div className="text-2xl mb-2">📈</div>
                  <div className="text-xs font-semibold text-gray-700">
                    +300% ROI
                  </div>
                  <div className="text-xs text-gray-600">This Month</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-1 text-red-500"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span className="text-xs font-medium">247</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-1 text-blue-500"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs font-medium">89</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-1 text-green-500"
                >
                  <Share className="w-4 h-4" />
                  <span className="text-xs font-medium">34</span>
                </motion.button>
              </div>
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ x: [-5, 5, -5] }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-6 left-4 bg-white rounded-xl shadow-lg p-3 z-10"
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">▶</span>
          </div>
          <div className="text-xs">
            <div className="font-semibold">YouTube</div>
            <div className="text-gray-500">+156% views</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
