
import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type Result = {
  department: string;
  outcome: string;
};

const results: Result[] = [
  {
    department: "Recruiting",
    outcome: "3x more interviews booked—no extra headcount"
  },
  {
    department: "HR",
    outcome: "140+ hours saved/month across onboarding and queries"
  },
  {
    department: "Sales",
    outcome: "9.6 hours/week per AE reclaimed"
  },
  {
    department: "Finance",
    outcome: "40% less time spent on low-value tasks"
  },
  {
    department: "Marketing",
    outcome: "70% of campaign coordination and reporting handled automatically"
  },
  {
    department: "Operations",
    outcome: "80% of daily check-ins, escalations, and reminders handled by SKYE"
  },
  {
    department: "IT & Helpdesk",
    outcome: "80% of Tier 1 questions resolved instantly, with auto-routing for the rest"
  },
  {
    department: "Admin",
    outcome: "Event budgets, reimbursements, and internal requests cleared with no bottlenecks"
  }
];

const SkyeNumbers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skye-numbers');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="skye-numbers" className="py-16 md:py-24 bg-black relative">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
          This isn't AI potential. This is <img 
            src="/lovable-uploads/fb9195f0-40ab-4dd6-819a-f538f3eb7fc2.png" 
            alt="SKYE" 
            className="h-10 md:h-12 inline-block mx-1 align-middle"
          /> performance.
        </h2>

        <div className="max-w-4xl mx-auto mt-12 overflow-hidden">
          <div className="bg-gradient-to-r from-skye-red/20 to-transparent p-0.5 rounded-lg">
            <div className="bg-black/80 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-white/10">
                    <TableHead className="text-white">Department</TableHead>
                    <TableHead className="text-white">SKYE Outcome</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((result, index) => (
                    <TableRow 
                      key={index} 
                      className={`border-b border-white/5 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <TableCell className="font-medium">{result.department}</TableCell>
                      <TableCell className="text-white/80">{result.outcome}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkyeNumbers;
