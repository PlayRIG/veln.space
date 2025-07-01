import {
  anthropicLogo,
  cohereLogo,
  deepseekLogo,
  geminiLogo,
  groqLogo,
  huggingFaceLogo,
  ollamaLogo,
  openAiLogo,
  perplexityAiLogo,
  llamaMetaLogo,
} from "./assets/images/ai-brands";

import {
  CoverFour,
  CoverOne,
  CoverThree,
  CoverTwo,
  EffectFour,
  EffectOne,
  EffectThree,
  EffectTwo,
} from "./assets/images/stands";

export const aiBrandPlatforms = [
  {
    id: 1,
    company: "Hugging Face",
    logoUrl: huggingFaceLogo,
    customStyles: "h-8",
  },
  {
    id: 2,
    company: "Deepseek",
    logoUrl: deepseekLogo,
    customStyles: "h-[26px]",
  },
  {
    id: 3,
    company: "OpenAI",
    logoUrl: openAiLogo,
    customStyles: "h-[26px]",
  },
  {
    id: 4,
    company: "Perplexity",
    logoUrl: perplexityAiLogo,
    customStyles: "h-[26px]",
  },
  {
    id: 5,
    company: "Cohere",
    logoUrl: cohereLogo,
    customStyles: "h-[16px]",
  },
  {
    id: 6,
    company: "Ollama",
    logoUrl: ollamaLogo,
    customStyles: "h-6",
  },
  {
    id: 7,
    company: "Gemini",
    logoUrl: geminiLogo,
    customStyles: "h-6",
  },
  {
    id: 8,
    company: "LLaMA",
    logoUrl: llamaMetaLogo,
    customStyles: "h-6",
  },
  {
    id: 9,
    company: "Groq",
    logoUrl: groqLogo,
    customStyles: "h-6",
  },
  {
    id: 10,
    company: "Anthropic",
    logoUrl: anthropicLogo,
    customStyles: "h-3",
  },
];

export const velnFeatures = [
  {
    id: "01",
    title: "Futuristic Simplicity",
    subtitle: "Streamlined design that anticipates your workflow.",
    cover: CoverOne,
    effect: EffectOne,
    ctaLink: "#",
  },
  {
    id: "02",
    title: "AI-Powered Precision",
    subtitle: "Harness AI to deliver results with unmatched accuracy.",
    cover: CoverTwo,
    effect: EffectTwo,
    ctaLink: "#",
  },
  {
    id: "03",
    title: "Minimalistic Architecture",
    subtitle: "Clean structure built for performance and clarity.",
    cover: CoverThree,
    effect: EffectThree,
    ctaLink: "#",
  },
  {
    id: "04",
    title: "Customizable AI Agents",
    subtitle: "Tailor intelligent agents to match your exact needs.",
    cover: CoverFour,
    effect: EffectFour,
    ctaLink: "#",
  },
];
