export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

export type FAQ = {
  question: string;
  answer: string;
};
