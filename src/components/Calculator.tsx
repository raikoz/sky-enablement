import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { ArrowRight, Check } from 'lucide-react';

const departments = [
  "HR", "Sales", "Marketing", "Finance", "IT & Helpdesk", "Operations", "Admin"
];

const tasks = {
  "HR": ["Answering policy questions", "Processing leave requests", "Document generation", "Onboarding"],
  "Sales": ["Follow-up emails", "CRM updates", "Proposal generation", "Meeting scheduling"],
  "Marketing": ["Campaign coordination", "Reports generation", "Content approvals", "Lead routing"],
  "Finance": ["Invoice processing", "Expense approvals", "Report generation", "Payment reminders"],
  "IT & Helpdesk": ["Password resets", "Access management", "Common troubleshooting", "Software requests"],
  "Operations": ["Status updates", "Compliance checks", "Process documentation", "Handoff management"],
  "Admin": ["Budget approvals", "Team coordination", "Resource booking", "Reimbursement processing"]
};

const rippleEffects = [
  "Escalation to management", 
  "Delayed deliverables", 
  "Customer drop-off", 
  "Team stress"
];

const focusAreas = [
  "Strategic planning",
  "Client relationships",
  "Content creation",
  "Team growth"
];

const Calculator = () => {
  const [department, setDepartment] = useState("HR");
  const [task, setTask] = useState<string | null>(null);
  const [delayImpact, setDelayImpact] = useState(50);
  const [rippleEffect, setRippleEffect] = useState<string | null>(null);
  const [focusArea, setFocusArea] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isPersonalDomain = email.endsWith('@gmail.com') || email.endsWith('@yahoo.com') || email.endsWith('@hotmail.com');
    return regex.test(email) && !isPersonalDomain;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleSubmit = () => {
    if (task && rippleEffect && focusArea && isValidEmail) {
      setShowResults(true);
    }
  };

  const calculateSavings = () => {
    // Base calculation - this would be more sophisticated in a real app
    const baseMinutesPerWeek = 50 + (delayImpact * 0.5);
    const annualHours = Math.round((baseMinutesPerWeek * 50) / 60);
    const annualCost = Math.round(annualHours * 50 * (1 + (delayImpact / 100)));
    const fteEquivalent = (annualHours / 2080).toFixed(1);
    
    return {
      hours: annualHours,
      cost: annualCost,
      fte: fteEquivalent
    };
  };

  const results = calculateSavings();

  return (
    <section id="calculator" className="py-16 md:py-24 bg-gradient-to-b from-black to-black/80 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
            Let's talk about the real cost of "just 10 minutes."
          </h2>
          <p className="text-white/70 text-center mb-12 text-lg">
            You don't notice it. But microtasks cost real money.<br />
            <img 
              src="/lovable-uploads/fb9195f0-40ab-4dd6-819a-f538f3eb7fc2.png" 
              alt="SKYE" 
              className="h-8 inline-block mx-1 align-middle"
            /> takes over what eats into productivity silently.
          </p>

          <Card className="bg-black/40 border border-white/10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-center">
                {showResults ? "Your Productivity Analysis" : "Calculate Your Hidden Costs"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {!showResults ? (
                <div className="space-y-8">
                  <div>
                    <label className="text-white/80 block mb-3 font-medium">
                      What department are you exploring automation for?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {departments.map((dept) => (
                        <button
                          key={dept}
                          onClick={() => {
                            setDepartment(dept);
                            setTask(null);
                          }}
                          className={`px-4 py-2 rounded-md text-sm transition-all ${
                            department === dept 
                              ? 'bg-skye-red text-white' 
                              : 'bg-white/10 text-white/70 hover:bg-white/20'
                          }`}
                        >
                          {dept}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-white/80 block mb-3 font-medium">
                      What's the #1 task your team repeats every week?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {tasks[department as keyof typeof tasks].map((taskOption) => (
                        <button
                          key={taskOption}
                          onClick={() => setTask(taskOption)}
                          className={`px-4 py-2 rounded-md text-sm transition-all ${
                            task === taskOption 
                              ? 'bg-skye-red text-white' 
                              : 'bg-white/10 text-white/70 hover:bg-white/20'
                          }`}
                        >
                          {taskOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-white/80 block mb-3 font-medium">
                      How often do delays in these tasks hurt outcomes?
                    </label>
                    <div className="space-y-6">
                      <div className="flex justify-between text-sm text-white/60">
                        <span>Rarely</span>
                        <span>Sometimes</span>
                        <span>Constantly</span>
                      </div>
                      <Slider
                        defaultValue={[50]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={(value) => setDelayImpact(value[0])}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/80 block mb-3 font-medium">
                      What's the ripple effect when this task gets missed?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {rippleEffects.map((effect) => (
                        <button
                          key={effect}
                          onClick={() => setRippleEffect(effect)}
                          className={`px-4 py-2 rounded-md text-sm transition-all ${
                            rippleEffect === effect 
                              ? 'bg-skye-red text-white' 
                              : 'bg-white/10 text-white/70 hover:bg-white/20'
                          }`}
                        >
                          {effect}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-white/80 block mb-3 font-medium">
                      What would your team rather focus on?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {focusAreas.map((area) => (
                        <button
                          key={area}
                          onClick={() => setFocusArea(area)}
                          className={`px-4 py-2 rounded-md text-sm transition-all ${
                            focusArea === area 
                              ? 'bg-skye-red text-white' 
                              : 'bg-white/10 text-white/70 hover:bg-white/20'
                          }`}
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-white/80 block mb-3 font-medium">
                      Enter your work email to get your report
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="email"
                        placeholder="your.name@company.com"
                        value={email}
                        onChange={handleEmailChange}
                        className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white w-full focus:outline-none focus:border-skye-red/50"
                      />
                    </div>
                    {email && !isValidEmail && (
                      <p className="text-skye-red/80 text-sm mt-2">
                        Please enter a valid business email address.
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={handleSubmit}
                      disabled={!task || !rippleEffect || !focusArea || !isValidEmail}
                      className="w-full bg-skye-red hover:bg-skye-red/90 text-white py-6 rounded-md flex items-center justify-center gap-2"
                    >
                      Calculate My Results
                      <ArrowRight size={18} />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-black/60 border border-skye-red/20">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <h3 className="text-white/60 text-sm font-semibold uppercase mb-2">Time Lost</h3>
                        <p className="text-3xl md:text-4xl font-bold text-skye-red">{results.hours} hours</p>
                        <p className="text-white/70 text-sm mt-2">annually</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-black/60 border border-skye-red/20">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <h3 className="text-white/60 text-sm font-semibold uppercase mb-2">Cost Impact</h3>
                        <p className="text-3xl md:text-4xl font-bold text-skye-red">${results.cost}</p>
                        <p className="text-white/70 text-sm mt-2">annually</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-black/60 border border-skye-red/20">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <h3 className="text-white/60 text-sm font-semibold uppercase mb-2">FTE Equivalent</h3>
                        <p className="text-3xl md:text-4xl font-bold text-skye-red">{results.fte}</p>
                        <p className="text-white/70 text-sm mt-2">full-time employees</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-black/30 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Tasks SKYE could handle for your {department} team:</h3>
                    <ul className="space-y-3">
                      {tasks[department as keyof typeof tasks].map((taskItem, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-skye-red flex-shrink-0" />
                          <span className="text-white/90">{taskItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full bg-skye-red hover:bg-skye-red/90 text-white py-6 rounded-md flex items-center justify-center gap-2"
                    >
                      <a href="#contact">
                        See My SKYE Blueprint
                        <ArrowRight size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
