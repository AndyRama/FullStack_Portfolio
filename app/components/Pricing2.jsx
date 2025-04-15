"use client";

import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useParams } from "next/navigation";

export const PricingCard = (props) => {
  const params = useParams();
  const organizationSlug = params.orgSlug ? params.orgSlug : "";

  return (
    <div className="mx-auto flex max-w-6xl flex-col rounded-xl border border-orange-300 p-8 shadow-lg md:flex-row">
      {/* Content section */}
      <div className="pr-8 md:w-2/3">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="font-bold">
            {props.name}
          </h2>
          {props.isPopular && (
            <Badge className="bg-orange-500 text-white">Popular</Badge>
          )}
        </div>
        
        <p variant="p" className="mt-4">
          {props.subtitle}
        </p>

        {/* Features list */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <p variant="h3" className="font-semibold text-orange-600">
            What&apos;s included
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {props.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="size-5 text-orange-500" />
                <p variant="muted">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-6 mt-6 md:mt-0 md:w-1/3">
        <p variant="p" className="text-lg text-gray-600">
          {props.type === "monthly" ? "Monthly price" : "One-time price"}
        </p>
        
        <div className="flex items-end justify-center gap-2 my-3">
          <h2 className="text-3xl font-bold text-black">
            ${props.price}
          </h2>
          <Typography className="text-gray-600">{props.currency}</Typography>
          
          {props.barredPrice && (
            <div className="relative self-start">
              <p className="text-lg font-bold text-gray-400">${props.barredPrice}</p>
              <div className="absolute top-1/2 h-0.5 w-full rotate-45 bg-red-500" />
            </div>
          )}
        </div>
        
        <Button className="mt-4 w-full rounded-lg bg-orange-500 px-6 py-3 text-white shadow-md hover:bg-orange-600">
          {props.cta}
        </Button>
        
        <p className="mt-2 text-sm text-gray-500">
          {props.ctaSubtitle}
        </p>
      </div>
    </div>
  );
};

// Pricing section component
export const Pricing = () => {
  // Example PLANS data
  const PLANS = [
    {
      id: "FREE",
      name: "Free",
      subtitle: "Perfect for tiny creators just getting started. Try our basic features with no commitment.",
      price: 0,
      currency: "USD",
      features: ["1 user", "Basic features", "Community support", "Limited storage"],
      isPopular: false,
      priceId: "",
      cta: "Start for free",
      ctaSubtitle: "No credit card required",
    },
    {
      id: "PRO",
      name: "Pro",
      subtitle: "Perfect for content creators looking to scale their business with powerful AI tools.",
      price: 49,
      currency: "USD",
      features: [
        "5 users included",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Unlimited storage",
        "API access"
      ],
      isPopular: true,
      type: "monthly",
      priceId: "price_id_demo",
      cta: "Start now",
      ctaSubtitle: "Then $49/month",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center mb-12">
          <p className="mb-2 font-medium text-orange-600">
            Don&apos;t wait any longer - act now
          </p>
          <h2 className="mb-8 text-4xl font-bold">
            Simple pricing, concrete results
          </h2>
          <div className="rounded-lg border border-orange-200 bg-white p-8 shadow-sm">
            <p className="leading-relaxed text-gray-700">
              Understanding the digital challenges businesses face, we&apos;ve developed a pragmatic AI agent solution.
              Inspired by recent studies published on February 15, 2025, showing that only 15% of entrepreneurs
              use generative AI, we aim to offer simple and accessible AI agents that can transform your professional
              interactions without technical complexity, while ensuring optimal confidentiality and security.
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          {PLANS.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Mock component for contrast section comparing your service to typical agencies
export const ContrastPricing = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg my-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-orange-600 mb-2">Don&apos;t get fooled anymore</h2>
        <h1 className="text-4xl font-bold mb-4">A simple price, concrete results</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We know those stories of businesses approached by agencies that promise extraordinary results... 
          at exorbitant rates and without concrete outcomes. We decided to change that.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Traditional Agency */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Traditional Agency</h3>
          <p className="text-gray-700 mb-4">
            Hello, I&apos;m a typical agency. I&apos;ll create your website for ONLY $2,000. Then, I&apos;ll charge you
            $200 per month for hosting and SEO. If you want any changes, that&apos;ll cost you $100 per hour.
            With a bit of luck, you might get 1 client per month! You have 5 minutes to decide.
          </p>
          <ul className="space-y-3 mb-4">
            {['1 site with 5 pages', 'Maybe some results', 'Support that responds in less than a year!', 
            'We sell your personal information, cool right?'].map((item, i) => (
              <li key={i} className="flex items-center">
                <Check className="size-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <p className="text-3xl font-bold text-gray-900 mb-2">$2,000</p>
            <p className="text-gray-700">Then $200/month</p>
            <p className="text-sm text-gray-500 mt-2">4-year commitment, no guarantee of results.</p>
            <Button className="mt-4 bg-red-600 hover:bg-red-700">
              Get scammed
            </Button>
          </div>
        </div>

        {/* Our Offer */}
        <div className="bg-orange-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Our Solution</h3>
          <p className="text-gray-700 mb-4">
            We understand the daily operational challenges of businesses. Our AI agent solution,
            quickly configurable, allows you to effectively manage your customer interactions,
            generate content, analyze data, and optimize your time and resources.
          </p>
          <ul className="space-y-3 mb-4">
            {['Full concurrent executions', 'Local LLM utilization (Mistral, etc.)',
            '15 credits for creating your agents', 'Secure data on VPS',
            'Deploy as many agents as needed*'].map((item, i) => (
              <li key={i} className="flex items-center">
                <Check className="size-5 text-orange-500 mr-2" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <p className="text-3xl font-bold text-gray-900 mb-2">$29.99</p>
            <p className="text-gray-700">per month</p>
            <p className="text-sm text-gray-500 mt-2">No long-term commitment, cancel anytime.</p>
            <Button className="mt-4 bg-orange-500 hover:bg-orange-600">
              Get your AI agents
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};