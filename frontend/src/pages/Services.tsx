
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Smartphone, CreditCard, Building, FileText, Globe, Shield, Lock, Users, Award } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, marathiTitle, description, features, isPopular = false, ctaLink = "/apply-membership" }: any) => (
  <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in relative ${isPopular ? 'border-gold border-2' : 'border-0'}`}>
    {isPopular && (
      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-primary-blue font-bold">
        Popular Service
      </Badge>
    )}
    <CardHeader className="text-center pb-4">
      <div className="mx-auto mb-4 p-4 bg-primary-blue/10 rounded-full group-hover:bg-primary-blue transition-colors duration-300">
        <Icon className="h-12 w-12 text-primary-blue group-hover:text-white transition-colors duration-300" />
      </div>
      <CardTitle className="text-xl text-primary-blue mb-2">{title}</CardTitle>
      <p className="font-marathi text-lg text-primary-blue/80">{marathiTitle}</p>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
      <Link to={ctaLink}>
        <Button className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white">
          Learn More / अधिक जाणा
        </Button>
      </Link>
    </CardContent>
  </Card>
);

const DigitalFeature = ({ icon: Icon, title, description }: any) => (
  <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in">
    <div className="flex-shrink-0">
      <div className="p-3 bg-primary-blue/10 rounded-full">
        <Icon className="h-8 w-8 text-primary-blue" />
      </div>
    </div>
    <div>
      <h3 className="font-semibold text-lg text-primary-blue mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const Services = () => {
  const [activeTab, setActiveTab] = useState('digital');

  const digitalServices = [
    {
      icon: Smartphone,
      title: "Mobile Banking",
      marathiTitle: "मोबाईल बँकिंग",
      description: "Complete banking at your fingertips with our secure mobile banking application.",
      features: [
        "Account balance inquiry",
        "Fund transfers (NEFT/RTGS)",
        "Bill payment facility",
        "Mini statement download",
        "Cheque book request"
      ],
      isPopular: true,
      ctaLink: "/login"
    },
    {
      icon: Globe,
      title: "Internet Banking",
      marathiTitle: "इंटरनेट बँकिंग",
      description: "Secure online banking platform for comprehensive financial management.",
      features: [
        "24/7 online access",
        "Transaction history",
        "Fund management tools",
        "Multi-factor authentication",
        "Digital statements"
      ],
      ctaLink: "/login"
    },
    {
      icon: FileText,
      title: "Digital Documentation",
      marathiTitle: "डिजिटल कागदपत्रे",
      description: "Paperless documentation and digital record keeping for all your transactions.",
      features: [
        "E-statements and receipts",
        "Digital loan applications",
        "Online KYC verification",
        "Cloud storage backup",
        "Instant document access"
      ],
      ctaLink: "/apply-membership"
    }
  ];

  const traditionalServices = [
    {
      icon: Building,
      title: "Branch Banking",
      marathiTitle: "शाखा बँकिंग",
      description: "Personal banking services at our physical branch locations with dedicated staff.",
      features: [
        "Face-to-face consultation",
        "Cash deposits and withdrawals",
        "Document verification",
        "Personalized service",
        "Local language support"
      ],
      ctaLink: "/contact"
    },
    {
      icon: Lock,
      title: "Locker Facility",
      marathiTitle: "लॉकर सुविधा",
      description: "Safe and secure locker facility to store your valuable documents and jewelry.",
      features: [
        "24/7 security surveillance",
        "Various locker sizes available",
        "Competitive annual charges",
        "Insurance coverage included",
        "Easy access during working hours"
      ],
      ctaLink: "/contact"
    },
    {
      icon: CreditCard,
      title: "Passbook Services",
      marathiTitle: "पासबुक सेवा",
      description: "Traditional passbook services for transaction recording and account management.",
      features: [
        "Physical transaction record",
        "Regular passbook printing",
        "Balance verification",
        "Historical transaction data",
        "Easy account monitoring"
      ],
      ctaLink: "/open-account"
    }
  ];

  const premiumServices = [
    {
      icon: Users,
      title: "Priority Banking",
      marathiTitle: "प्राथमिकता बँकिंग",
      description: "Exclusive banking services for high-value customers with dedicated relationship managers.",
      features: [
        "Dedicated relationship manager",
        "Priority customer service",
        "Exclusive banking hours",
        "Waived processing fees",
        "Investment advisory services"
      ],
      ctaLink: "/contact"
    },
    {
      icon: Award,
      title: "Wealth Management",
      marathiTitle: "संपत्ती व्यवस्थापन",
      description: "Comprehensive wealth management solutions for affluent members.",
      features: [
        "Portfolio management",
        "Investment planning",
        "Tax optimization strategies",
        "Estate planning services",
        "Financial goal setting"
      ],
      ctaLink: "/contact"
    },
    {
      icon: Shield,
      title: "Insurance Services",
      marathiTitle: "विमा सेवा",
      description: "Comprehensive insurance solutions to protect you and your family.",
      features: [
        "Life insurance policies",
        "Health insurance coverage",
        "Property insurance",
        "Vehicle insurance",
        "Group insurance schemes"
      ],
      ctaLink: "/contact"
    }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'digital':
        return digitalServices;
      case 'traditional':
        return traditionalServices;
      case 'premium':
        return premiumServices;
      default:
        return digitalServices;
    }
  };

  const digitalFeatures = [
    {
      icon: Globe,
      title: "Internet Banking",
      description: "Secure online banking platform for all your financial transactions"
    },
    {
      icon: Smartphone,
      title: "SMS Banking",
      description: "Get account updates and perform transactions via SMS commands"
    },
    {
      icon: FileText,
      title: "e-Statements",
      description: "Digital account statements delivered directly to your email"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Multi-layer security for all your digital banking activities"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Our Services / <span className="font-marathi">आमच्या सेवा</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Comprehensive banking solutions designed for modern financial needs
          </p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-8 bg-white shadow-md sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <button
              className={`pb-2 px-4 font-semibold transition-colors border-b-2 ${
                activeTab === 'digital' 
                  ? 'text-primary-blue border-primary-blue' 
                  : 'text-gray-500 border-transparent hover:text-primary-blue'
              }`}
              onClick={() => setActiveTab('digital')}
            >
              Digital Banking
            </button>
            <button
              className={`pb-2 px-4 font-semibold transition-colors border-b-2 ${
                activeTab === 'traditional' 
                  ? 'text-primary-blue border-primary-blue' 
                  : 'text-gray-500 border-transparent hover:text-primary-blue'
              }`}
              onClick={() => setActiveTab('traditional')}
            >
              Traditional Services
            </button>
            <button
              className={`pb-2 px-4 font-semibold transition-colors border-b-2 ${
                activeTab === 'premium' 
                  ? 'text-primary-blue border-primary-blue' 
                  : 'text-gray-500 border-transparent hover:text-primary-blue'
              }`}
              onClick={() => setActiveTab('premium')}
            >
              Premium Services
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              {activeTab === 'digital' && 'Digital Banking Services'}
              {activeTab === 'traditional' && 'Traditional Banking Services'}
              {activeTab === 'premium' && 'Premium Banking Services'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {activeTab === 'digital' && 'Modern digital solutions for convenient banking'}
              {activeTab === 'traditional' && 'Time-tested banking services with personal touch'}
              {activeTab === 'premium' && 'Exclusive services for our valued premium members'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {getCurrentServices().map((service, index) => (
              <div key={index} style={{ animationDelay: `${index * 200}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Banking Features (only show for digital tab) */}
      {activeTab === 'digital' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
                Digital Banking Features / <span className="font-marathi">डिजिटल बँकिंग</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the future of banking with our comprehensive digital solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {digitalFeatures.map((feature, index) => (
                <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
                  <DigitalFeature {...feature} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* QR Code Demo Section (only show for digital tab) */}
      {activeTab === 'digital' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-6">
                  Scan & Pay with PatPay
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Make instant payments using our secure QR code system. Simple, fast, and completely secure.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <span>Instant payment confirmation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <span>No transaction charges</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                    <span>Available 24/7</span>
                  </div>
                </div>
                <Link to="/login">
                  <Button className="mt-6 bg-primary-blue hover:bg-primary-blue/90 text-white">
                    Download PatPay App
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-1">
                    {[...Array(64)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-primary-blue' : 'bg-white'} rounded-sm`}
                      ></div>
                    ))}
                  </div>
                </div>
                <p className="text-primary-blue font-semibold mb-2">Demo QR Code</p>
                <p className="text-gray-600 text-sm">Scan to experience PatPay</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service Hours */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Service Hours / <span className="font-marathi">सेवा वेळा</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Branch Banking</h3>
              <div className="space-y-2 text-sm">
                <p>Monday - Friday: 10:00 AM - 4:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-semibold mb-4">Digital Banking</h3>
              <div className="space-y-2 text-sm">
                <p>Available 24/7</p>
                <p>Mobile Banking</p>
                <p>Internet Banking</p>
              </div>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <div className="space-y-2 text-sm">
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Phone: +91-12345-67890</p>
                <p>Email: support@patpedhi.co.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
            Experience Modern Banking Today
          </h2>
          <p className="text-xl mb-8 text-gray-600 font-marathi">
            आधुनिक बँकिंगचा आस्वाद घ्या आमच्या सोबत
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button 
                size="lg" 
                className="bg-primary-blue text-white hover:bg-primary-blue/90 transition-all hover:scale-105"
              >
                Register for Digital Banking
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white transition-all"
              >
                Visit Nearest Branch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
