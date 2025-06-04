import type {
  Testimonial,
  Feature,
  PricingPlan,
  Stat,
  ProcessStep,
  FAQ,
} from "@/types";
import {
  SVGDeere,
  SVGFord,
  SVGIkea,
  SVGMcdonald,
  SVGWindows,
} from "@/components/icons";

export const testimonials: Testimonial[] = [
  {
    name: "William",
    role: "Founder of Digital Moving",
    avatar: "W",
    rating: 5,
    content:
      "Skyless has transformed our social media presence. The results speak for themselves - increased engagement and more customers than ever before.",
  },
  {
    name: "Fikri",
    role: "Interior Design",
    avatar: "F",
    rating: 5,
    content:
      "Working with Skyless was a game-changer. Their expertise in social media marketing helped us reach our target audience effectively.",
  },
  {
    name: "August",
    role: "Owner of Laundromat Studio",
    avatar: "A",
    rating: 5,
    content:
      "The team at Skyless delivered exceptional results. Our online presence has never been stronger, and we're seeing real business growth.",
  },
];

export const features: Feature[] = [
  {
    icon: "💰",
    title: "Affordable Plans",
    description: "Budget-friendly pricing for all business sizes",
  },
  {
    icon: "📊",
    title: "Real Ad Results",
    description: "Track performance with detailed analytics",
  },
  {
    icon: "⚙️",
    title: "Done-for-you Setup",
    description: "We handle everything from start to finish",
  },
  {
    icon: "📈",
    title: "Monthly Reports",
    description: "Comprehensive monthly performance reports",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter (One-Time)",
    price: "$99",
    features: [
      "Best for First-time starting",
      "Social Media Setup",
      "High-Converting Landing Page",
      "Content Creation",
      "Optimization",
      "Analytics Setup",
      "Basic Funnel Management",
    ],
    popular: false,
  },
  {
    name: "Growth (One-Time)",
    price: "$299",
    features: [
      "Best for already starting to run ads but want to scale",
      "Everything in Starter",
      "Advanced Analytics",
      "A/B Testing Setup",
      "Lead Capture Setup",
      "Sales Funnel Audit & Optimization",
      "Advanced Conversion Tracking",
    ],
    popular: true,
  },
  {
    name: "Pro (One-Time)",
    price: "$99",
    features: [
      "Best for agencies",
      "Everything in Growth",
      "Unlimited Conversion Tracking",
      "Advanced Funnel Creation",
      "Priority Support",
      "Advanced Analytics Dashboard",
      "Custom Integration",
    ],
    popular: false,
  },
];

export const stats: Stat[] = [
  { number: "175+", label: "Partners" },
  { number: "254+", label: "Project Done" },
  { number: "121+", label: "Happy Client" },
];

export const processSteps: ProcessStep[] = [
  {
    icon: "📋",
    title: "Fill the Form",
    description: "Complete our simple onboarding form",
  },
  {
    icon: "🎯",
    title: "We Create Your Campaign",
    description: "Our experts design your perfect campaign",
  },
  {
    icon: "📈",
    title: "You Get the Results",
    description: "Watch your business grow with real results",
  },
];

export const faqs: FAQ[] = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most campaigns start showing results within 2-4 weeks, depending on your industry and target audience.",
  },
  {
    question: "Can I request changes after the campaign starts?",
    answer:
      "Yes, we offer unlimited revisions during the first month to ensure your campaign meets your expectations.",
  },
  {
    question: "Is there a monthly subscription?",
    answer:
      "No, our pricing is one-time only. You pay once and own the setup forever.",
  },
];

export const painPoints = [
  { text: "Don't know how to start ads", icon: "❌" },
  { text: "No time to manage social media", icon: "⏰" },
  { text: "Low experience in live & ad agency", icon: "🎯" },
];

export const companyLogos = [
  SVGWindows,
  SVGDeere,
  SVGFord,
  SVGIkea,
  SVGMcdonald,
];
