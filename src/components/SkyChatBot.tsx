
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SkyeChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ content: string; sender: 'bot' | 'user' }[]>([
    { content: 'Hi, I\'m SKYE! How can I help you today?', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { content: inputValue, sender: 'user' as const };
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response (in real app, this would be an API call)
    setTimeout(() => {
      const botResponse = generateResponse(userMessage.content);
      setMessages(prev => [...prev, { content: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  // Simple response generation from knowledge base
  const generateResponse = (question: string): string => {
    const lowerCaseQuestion = question.toLowerCase();
    
    // Match common questions with appropriate responses
    if (lowerCaseQuestion.includes('service') || lowerCaseQuestion.includes('offer') || lowerCaseQuestion.includes('do you do')) {
      return "We offer three key services: Automation Consulting, Team Education, and Custom AI Bots. We identify workflows prime for automation, train your staff to use AI effectively, and build custom chatbots for HR, IT, sales, and more.";
    }
    
    if (lowerCaseQuestion.includes('cost') || lowerCaseQuestion.includes('price') || lowerCaseQuestion.includes('pay')) {
      return "Our pricing is subscription-based. You pay for seats or usage (requests or tokens). This means low upfront costs - you avoid hiring an entire data science team. We'll provide a clear quote during the proposal phase based on your specific needs.";
    }
    
    if (lowerCaseQuestion.includes('security') || lowerCaseQuestion.includes('data') || lowerCaseQuestion.includes('private')) {
      return "We take security seriously. All data is encrypted at rest (AES-256) and in transit (TLS 1.2+). We implement strict role-based access controls, support SSO, and can meet compliance requirements like SOC 2, ISO 27001, HIPAA, and GDPR.";
    }
    
    if (lowerCaseQuestion.includes('onboarding') || lowerCaseQuestion.includes('process') || lowerCaseQuestion.includes('start')) {
      return "Our onboarding process includes: 1) Discovery call to understand your needs, 2) Proof of concept/proposal, 3) Contract and kickoff, 4) Build and integrate the solution, 5) Test and train your team, and 6) Launch with ongoing support.";
    }
    
    if (lowerCaseQuestion.includes('replace') || lowerCaseQuestion.includes('staff') || lowerCaseQuestion.includes('job')) {
      return "No, our AI won't replace your staff. Think of the bot as an assistant that handles routine queries so your experts can focus on creative, strategic tasks. It makes everyone's job more interesting by automating the mundane.";
    }
    
    if (lowerCaseQuestion.includes('time') || lowerCaseQuestion.includes('how long') || lowerCaseQuestion.includes('timeline')) {
      return "Most pilot projects are ready in a few weeks. A full rollout might take a few months depending on complexity. We set clear expectations and milestones from day one so you'll have a detailed timeline from the start.";
    }
    
    if (lowerCaseQuestion.includes('integrate') || lowerCaseQuestion.includes('connect') || lowerCaseQuestion.includes('platform')) {
      return "We can integrate with virtually any platform including Slack, Teams, email systems, CRMs (Salesforce, HubSpot), HRIS systems (Workday), ticketing systems (ServiceNow, Zendesk), and more. If your tool has an API, we can connect to it.";
    }
    
    // Default response for unknown questions
    return "That's a great question! Our team would be happy to provide more specific information. Would you like to schedule a discovery call to discuss your needs in detail?";
  };

  return (
    <>
      {/* Chat Button - Fixed Position */}
      <Button 
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-skye-red hover:bg-skye-red/90 text-white p-0 shadow-lg flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>
      
      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 z-40 w-80 sm:w-96 bg-black border border-skye-red/20 rounded-lg shadow-lg transition-all duration-300 flex flex-col ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: 'calc(100vh - 160px)' }}
      >
        {/* Chat Header */}
        <div className="p-4 border-b border-skye-red/20 bg-black backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-skye-red animate-pulse mr-2"></div>
            <span className="font-bold text-white">SKYE</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleChat}
            className="p-1 h-auto"
          >
            <X size={18} />
          </Button>
        </div>
        
        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/90 thin-scrollbar">
          {messages.map((msg, index) => (
            <div 
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  msg.sender === 'user' 
                    ? 'bg-skye-red text-white' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/5 text-white'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/10 backdrop-blur-sm border border-white/5 text-white rounded-lg px-4 py-2 max-w-[80%]">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-skye-red animate-bounce"></div>
                  <div className="h-2 w-2 rounded-full bg-skye-red animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 rounded-full bg-skye-red animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-skye-red/20 bg-black">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask me anything..."
              className="flex-1 bg-white/5 text-white border border-skye-red/10 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-skye-red/30"
            />
            <Button 
              type="submit" 
              className="bg-skye-red hover:bg-skye-red/90 text-white"
              disabled={isTyping}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SkyeChatBot;
