
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Mail } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We'll get back to you shortly.",
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-black">
      {/* White minimal accent */}
      <div className="absolute inset-0 bg-white/5 w-1/3 right-0"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Content column */}
          <div>
            <h2 className="text-6xl md:text-7xl font-bold mb-16">
              <span className="text-white">Get in</span> <span className="text-skye-red">Touch</span>
            </h2>
            
            <div className="flex items-center gap-3 mb-8">
              <Mail className="text-skye-red w-6 h-6" />
              <div>
                <p className="text-white/70 text-xl">hello@skyeai.com</p>
              </div>
            </div>
            
            <div className="pt-16">
              <p className="text-2xl font-bold text-white/90 max-w-md">
                "SKYE transformed our business with AI."
              </p>
              <p className="text-lg font-medium mt-4 text-skye-red">— Sarah Johnson, CTO</p>
            </div>
          </div>
          
          {/* Form column */}
          <div>
            <div className="bg-white/5 backdrop-blur-md p-12 rounded-none">
              <h3 className="text-3xl font-bold mb-10 text-white">Let's Connect</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-lg font-medium text-white/70">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white/5 border-white/10 focus:border-skye-red/50 text-white h-14 text-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-lg font-medium text-white/70">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-white/5 border-white/10 focus:border-skye-red/50 text-white h-14 text-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-lg font-medium text-white/70">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="bg-white/5 border-white/10 focus:border-skye-red/50 text-white min-h-[120px] text-lg"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-skye-red hover:bg-skye-red/90 text-white flex items-center justify-center gap-2 text-xl py-7" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
