
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Mail, MessageSquare, Phone, User, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    budget: '',
    hearAboutUs: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      setFormData({ 
        name: '', 
        email: '', 
        company: '', 
        phone: '', 
        website: '', 
        budget: '', 
        hearAboutUs: '', 
        message: '' 
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-skye-darkGray">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/lovable-uploads/f1b9b698-2dde-4618-b0de-c2a0672b7d34.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-skye-darkGray via-transparent to-skye-darkGray"></div>
      </div>
      
      {/* Red glow */}
      <div className="absolute right-0 top-1/2 w-64 h-64 bg-skye-red rounded-full blur-3xl -translate-y-1/2 opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Content column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in <span className="text-skye-red">Touch</span>
            </h2>
            
            <p className="text-white/70 mb-8">
              Ready to transform your business with AI? Get in touch with our team 
              to discuss how we can help you achieve your goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="text-skye-red w-5 h-5" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-white/70">hello@skyeai.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-skye-red w-5 h-5" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="text-skye-red w-5 h-5" />
                <div>
                  <h3 className="text-lg font-semibold">Headquarters</h3>
                  <p className="text-white/70">
                    1234 Innovation Avenue<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-sm text-white/50 max-w-md">
                  "SKYE has been instrumental in our AI transformation journey. 
                  Their expertise and guidance helped us achieve exceptional results."
                </p>
                <p className="text-sm font-medium mt-2">— Sarah Johnson, CTO at TechCorp</p>
              </div>
            </div>
          </div>
          
          {/* Form column */}
          <div>
            <div className="bg-skye-black/50 backdrop-blur-md p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70">
                      Name*
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-white/5 border-white/10 focus:border-skye-red/50 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">
                      Email*
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="bg-white/5 border-white/10 focus:border-skye-red/50 text-white"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-white/70">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="bg-white/5 border-white/10 focus:border-skye-red/50 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-white/70">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="bg-white/5 border-white/10 focus:border-skye-red/50 text-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-medium text-white/70">
                    Website
                  </label>
                  <Input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://"
                    className="bg-white/5 border-white/10 focus:border-skye-red/50 text-white"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-white/70">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="bg-white/5 border border-white/10 focus:border-skye-red/50 text-white w-full rounded-md h-10 px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled className="bg-black">Select a budget range</option>
                      <option value="<50k" className="bg-black">Less than $50,000</option>
                      <option value="50k-100k" className="bg-black">$50,000 - $100,000</option>
                      <option value="100k-250k" className="bg-black">$100,000 - $250,000</option>
                      <option value="250k+" className="bg-black">$250,000+</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="hearAboutUs" className="text-sm font-medium text-white/70">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                      className="bg-white/5 border border-white/10 focus:border-skye-red/50 text-white w-full rounded-md h-10 px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled className="bg-black">Select an option</option>
                      <option value="Search" className="bg-black">Search Engine</option>
                      <option value="Social" className="bg-black">Social Media</option>
                      <option value="Referral" className="bg-black">Referral</option>
                      <option value="Event" className="bg-black">Event</option>
                      <option value="Other" className="bg-black">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">
                    Tell us about your project*
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="bg-white/5 border-white/10 focus:border-skye-red/50 text-white min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-skye-red hover:bg-skye-red/90 text-white flex items-center justify-center gap-2" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
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
