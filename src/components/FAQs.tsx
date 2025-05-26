
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "We've tried AI. What makes SKYE different?",
    answer: "SKYE doesn't give you prompts. It gives you a teammate—trained, embedded, and quietly handling work in the background."
  },
  {
    question: "We don't know where to start with automation.",
    answer: "That's why SKYE starts with a 3-step audit—our job is to uncover the best starting points for you."
  },
  {
    question: "Can SKYE work in low-tech stacks like spreadsheets and Slack?",
    answer: "Absolutely. Whether it's Notion, Sheets, Slack, or custom CRMs—SKYE adapts to whatever stack you already use."
  },
  {
    question: "Will it replace anyone?",
    answer: "No. It replaces what slows them down—so they can actually do what they were hired for."
  },
  {
    question: "What's the smallest way to try this?",
    answer: "One department. One use case. One agent. That's all it takes to start seeing real results."
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-gradient-to-b from-black/90 to-black relative">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="bg-black/40 border border-white/10 overflow-hidden transition-all duration-200 hover:border-white/20"
            >
              <button 
                className="w-full text-left p-5 flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-skye-red" />
                ) : (
                  <Plus className="h-5 w-5 text-skye-red" />
                )}
              </button>
              {openIndex === index && (
                <CardContent className="pt-0 pb-5 px-5">
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/80">{faq.answer}</p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
