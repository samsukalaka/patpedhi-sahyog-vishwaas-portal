import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PiggyBank, Calendar, Handshake, Users, Building, Award } from 'lucide-react';
import ConditionalLink from '@/components/ConditionalLink';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(updateCount);
      }
    };

    animationId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const ServiceCard = ({ icon: Icon, title, description, delay, linkTo }: any) => (
  <Link to={linkTo}>
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in border-0 shadow-md" 
          style={{ animationDelay: `${delay}ms` }}>
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="p-3 bg-primary-blue/10 rounded-full group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
            <Icon className="h-8 w-8 text-primary-blue group-hover:text-white" />
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-primary-blue">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  </Link>
);

const Index = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  
  const announcements = [
    "AGM Meeting on 15th March 2025 - सभासदांसाठी महत्वपूर्ण",
    "New Gold Loan Scheme with 8.5% Interest Rate",
    "Digital Banking Services Now Available - डिजिटल सेवा उपलब्ध",
    "KYC Update Mandatory for All Members"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-blue to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                <span className="font-marathi text-gold">आपले विश्वास,</span>
                <br />
                <span>आमची जबाबदारी</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Your Trusted Cooperative Credit Society since 1995
              </p>
              <ConditionalLink 
                to="/apply-membership" 
                memberTo="/open-account"
              >
                <Button 
                  size="lg" 
                  className="bg-gold text-primary-blue hover:bg-gold/90 transition-all hover:scale-105 font-semibold px-8 py-3"
                >
                  Open an Account आता! <Handshake className="ml-2 h-5 w-5" />
                </Button>
              </ConditionalLink>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 animate-scale-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-gold mb-2">
                  <AnimatedCounter end={30} suffix="+" />
                </div>
                <p className="text-sm opacity-80">Years of Service</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-gold mb-2">
                  <AnimatedCounter end={25000} suffix="+" />
                </div>
                <p className="text-sm opacity-80">Happy Members</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-gold mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <p className="text-sm opacity-80">Branches</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-gold mb-2">
                  <AnimatedCounter end={500} suffix="Cr+" />
                </div>
                <p className="text-sm opacity-80">Assets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gold text-primary-blue py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <span className="font-semibold mr-4 whitespace-nowrap">📢 Latest Updates:</span>
            <div className="overflow-hidden">
              <div className="animate-fade-in" key={currentAnnouncement}>
                {announcements[currentAnnouncement]}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Our Services / <span className="font-marathi">आमच्या सेवा</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions designed for your growth and prosperity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={PiggyBank}
              title="सावकारी योजना / Deposits"
              description="Secure savings with attractive interest rates and flexible terms"
              delay={0}
              linkTo="/deposits"
            />
            <ServiceCard 
              icon={Handshake}
              title="कर्ज सेवा / Loans"
              description="Quick and hassle-free loans for all your financial needs"
              delay={200}
              linkTo="/loans"
            />
            <ServiceCard 
              icon={Calendar}
              title="डिजिटल बँकिंग / Digital Banking"
              description="Modern banking solutions at your fingertips"
              delay={400}
              linkTo="/services"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Patpedhi Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Why Choose Patpedhi?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group animate-fade-in">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full group-hover:bg-primary-blue transition-colors duration-300">
                  <Users className="h-10 w-10 text-primary-blue group-hover:text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Member-Centric Approach</h3>
              <p className="text-gray-600">सभासदांचे हित सर्वोपरि - Your interests are our priority</p>
            </div>

            <div className="text-center group animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-gold/20 rounded-full group-hover:bg-gold transition-colors duration-300">
                  <Building className="h-10 w-10 text-gold group-hover:text-primary-blue" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Strong Foundation</h3>
              <p className="text-gray-600">30+ years of trusted service in the community</p>
            </div>

            <div className="text-center group animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-green-100 rounded-full group-hover:bg-green-500 transition-colors duration-300">
                  <Award className="h-10 w-10 text-green-600 group-hover:text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for excellence in cooperative banking</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl mb-8 opacity-90 font-marathi">
            आजच आमच्या सोबत करा आपली आर्थिक प्रगती
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConditionalLink 
              to="/apply-membership" 
              memberTo="/open-account"
            >
              <Button 
                size="lg" 
                className="bg-gold text-primary-blue hover:bg-gold/90 transition-all hover:scale-105"
              >
                Open Account Today
              </Button>
            </ConditionalLink>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary-blue transition-all"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
