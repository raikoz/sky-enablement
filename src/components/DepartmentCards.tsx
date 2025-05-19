
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

type Department = {
  name: string;
  problem: string;
  features: string[];
  result: string;
  icon: React.ReactNode;
};

const departments: Department[] = [
  {
    name: "HR",
    problem: ""Where's my payslip?" "How many leaves left?" "Can I get that letter?"",
    features: [
      "Answers to all HR policy, benefits, and leave queries",
      "Leave tracking and approval suggestions based on team calendars",
      "Generating documents like offer letters, appraisals, exit memos",
      "Collecting and routing anonymous feedback"
    ],
    result: "HR becomes a trusted partner—not an FAQ center.",
    icon: "👤"
  },
  {
    name: "Admin",
    problem: ""Is there budget for this?" "Where's my reimbursement?" "Can we book this?"",
    features: [
      "Budget checks and reimbursement validations",
      "Team-level event request routing",
      "Flagging out-of-policy requests",
      "Logging and tracking spend against team limits"
    ],
    result: "Admins move faster. Teams get clarity, not delays.",
    icon: "📊"
  },
  {
    name: "IT & Helpdesk",
    problem: ""How do I reset this?" "Where's the access request form?" "My tool crashed again."",
    features: [
      "Answers to common IT issues",
      "Triages and routes support tickets with context",
      "Helps with onboarding/offboarding access setups",
      "Monitors recurring issues for escalation"
    ],
    result: "IT stops firefighting. Teams stop waiting.",
    icon: "🖥️"
  },
  {
    name: "Sales",
    problem: ""Did we follow up?" "Where's the deck?" "The CRM's outdated again."",
    features: [
      "Follow-up cadences and reminders",
      "Custom proposals + decks pulled from templates",
      "CRM auto-updates after every email or call",
      "Lead research + enrichment"
    ],
    result: "More deals closed. Fewer hours wasted.",
    icon: "💼"
  },
  {
    name: "Marketing",
    problem: ""Did the campaign go out?" "This doc is missing again." "Where's the report?"",
    features: [
      "Triggering emails and posts based on campaigns",
      "Internal task handoffs + deadline tracking",
      "Generating performance reports",
      "Form engagement follow-ups"
    ],
    result: "Marketers focus on creative, not chaos.",
    icon: "📣"
  },
  {
    name: "Ops",
    problem: ""Who's checking this?" "Did we catch that error?" "SOP missed again?"",
    features: [
      "Daily status updates + anomaly alerts",
      "Handoff coordination across teams",
      "Monitoring SOP compliance",
      "Workflow nudges based on delays"
    ],
    result: "Ops becomes proactive—not reactive.",
    icon: "⚙️"
  },
  {
    name: "Finance",
    problem: ""This invoice is still pending." "Why didn't we reconcile?" "Where's the file?"",
    features: [
      "Statement follow-ups + payment reminders",
      "Reconciliation task handling",
      "Drafting and sending finance reports",
      "Triggering compliance workflows on data events"
    ],
    result: "Less friction. More precision.",
    icon: "💰"
  }
];

const DepartmentCards = () => {
  const [activeDept, setActiveDept] = useState(0);

  return (
    <section id="department-cards" className="py-16 md:py-24 bg-black relative">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          Manual work slows teams. <img 
            src="/lovable-uploads/fb9195f0-40ab-4dd6-819a-f538f3eb7fc2.png" 
            alt="SKYE" 
            className="h-10 md:h-12 inline-block mx-1 align-middle"
          /> makes them unstoppable.
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 mt-12">
          {departments.map((dept, index) => (
            <button
              key={index}
              onClick={() => setActiveDept(index)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeDept === index 
                  ? 'bg-skye-red text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{dept.icon}</span>
              {dept.name}
            </button>
          ))}
        </div>

        <Card className="bg-black/40 border border-skye-red/20 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-skye-red/20 to-transparent backdrop-blur-sm">
            <CardTitle className="text-xl md:text-2xl flex items-start gap-3">
              <span className="text-3xl">{departments[activeDept].icon}</span>
              <div>
                <div className="text-skye-red font-bold">{departments[activeDept].name}</div>
                <div className="text-white/70 text-sm md:text-base font-normal mt-1">
                  {departments[activeDept].problem}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-8">
              <h4 className="text-white/60 text-sm font-semibold uppercase mb-4">SKYE handles:</h4>
              <ul className="space-y-6">
                {departments[activeDept].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-skye-red flex-shrink-0 mt-1" />
                    <p className="text-white/90">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-white/60 text-sm font-semibold uppercase mb-2">Result:</h4>
              <p className="text-lg md:text-xl font-medium text-white">
                {departments[activeDept].result}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DepartmentCards;
