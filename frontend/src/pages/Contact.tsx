
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, content, subContent }: any) => (
  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
    <CardContent className="p-6 text-center">
      <div className="mb-4 flex justify-center">
        <div className="p-4 bg-primary-blue/10 rounded-full group-hover:bg-primary-blue transition-colors duration-300">
          <Icon className="h-8 w-8 text-primary-blue group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
      <h3 className="font-semibold text-lg text-primary-blue mb-2">{title}</h3>
      <p className="text-gray-700 font-medium">{content}</p>
      {subContent && <p className="text-gray-600 text-sm mt-1">{subContent}</p>}
    </CardContent>
  </Card>
);

const BranchCard = ({ name, address, phone, timing, isMain = false }: any) => (
  <Card className={`animate-fade-in ${isMain ? 'border-gold border-2' : ''} hover:shadow-lg transition-shadow`}>
    <CardHeader className="pb-3">
      <CardTitle className="flex items-center justify-between">
        <span className="text-primary-blue">{name}</span>
        {isMain && <span className="text-xs bg-gold text-primary-blue px-2 py-1 rounded-full font-semibold">MAIN BRANCH</span>}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
          <p className="text-sm text-gray-700">{address}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
          <p className="text-sm text-gray-700">{phone}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
          <p className="text-sm text-gray-700">{timing}</p>
        </div>
      </div>
      <div className="mt-4 relative">
        <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-blue/20"></div>
          <div className="relative z-10">
            <MapPin className="h-8 w-8 text-primary-blue animate-pulse-ring" />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      content: "+91-12345-67890",
      subContent: "Mon-Sat: 9:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      content: "info@patpedhi.co.in",
      subContent: "We'll respond within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      content: "+91-98765-43210",
      subContent: "Quick queries and support"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon-Fri: 10:00 AM - 4:00 PM",
      subContent: "Sat: 10:00 AM - 2:00 PM"
    }
  ];

  const branches = [
    {
      name: "Head Office",
      address: "123, Main Road, Pune, Maharashtra 411001",
      phone: "+91-12345-67890",
      timing: "Mon-Fri: 10:00 AM - 4:00 PM",
      isMain: true
    },
    {
      name: "Shivaji Nagar Branch",
      address: "456, Shivaji Nagar, Pune, Maharashtra 411005",
      phone: "+91-12345-67891",
      timing: "Mon-Fri: 10:00 AM - 4:00 PM"
    },
    {
      name: "Kothrud Branch",
      address: "789, Kothrud, Pune, Maharashtra 411038",
      phone: "+91-12345-67892",
      timing: "Mon-Fri: 10:00 AM - 4:00 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Contact Us / <span className="font-marathi">संपर्क</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            We're here to help you with all your banking needs and queries
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <ContactCard {...info} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Branch Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-blue">
                    Send us a Message / <span className="font-marathi">संदेश पाठवा</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-primary-blue">नाव / Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-primary-blue">ईमेल / Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-primary-blue">फोन / Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-primary-blue">विषय / Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Enter subject"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-primary-blue">संदेश / Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Type your message here..."
                        rows={5}
                        required
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white transition-all hover:scale-105"
                    >
                      Send Message / संदेश पाठवा
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Support */}
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Card className="shadow-lg border-gold border-2 mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-blue">
                    Need Immediate Help? / <span className="font-marathi">तातडीची मदत?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>WhatsApp Support</span>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white flex items-center justify-center space-x-2"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call Now</span>
                    </Button>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-primary-blue mb-2">Emergency Contact</h4>
                      <p className="text-sm text-gray-700">For urgent banking matters outside working hours:</p>
                      <p className="font-semibold text-primary-blue">+91-98765-43210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-primary-blue mb-4">Common Queries</h3>
                  <div className="space-y-3">
                    <details className="cursor-pointer">
                      <summary className="text-sm font-medium text-gray-700 hover:text-primary-blue">How to open a new account?</summary>
                      <p className="text-sm text-gray-600 mt-2 pl-4">Visit any branch with required documents or apply online through our website.</p>
                    </details>
                    <details className="cursor-pointer">
                      <summary className="text-sm font-medium text-gray-700 hover:text-primary-blue">What are the loan interest rates?</summary>
                      <p className="text-sm text-gray-600 mt-2 pl-4">Interest rates vary by loan type. Check our Loans page for current rates.</p>
                    </details>
                    <details className="cursor-pointer">
                      <summary className="text-sm font-medium text-gray-700 hover:text-primary-blue">How to activate mobile banking?</summary>
                      <p className="text-sm text-gray-600 mt-2 pl-4">Visit your nearest branch or call our customer support for activation.</p>
                    </details>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locator */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Our Branches / <span className="font-marathi">आमच्या शाखा</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our conveniently located branches
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
                <BranchCard {...branch} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl mb-8 opacity-90 font-marathi">
            आमच्याकडे या आणि अनुभवा उत्कृष्ट सेवा
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold text-primary-blue hover:bg-gold/90 transition-all hover:scale-105"
            >
              Book an Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary-blue transition-all"
            >
              Find Nearest Branch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
