
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PiggyBank, Calendar, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

const DepositCard = ({ icon: Icon, title, marathiTitle, description, features, bgColor }: any) => (
  <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${bgColor} border-0 animate-fade-in`}>
    <CardHeader className="text-center pb-4">
      <div className="mx-auto mb-4 p-4 bg-white/80 rounded-full group-hover:bg-white transition-colors">
        <Icon className="h-12 w-12 text-primary-blue" />
      </div>
      <CardTitle className="text-xl text-primary-blue mb-2">{title}</CardTitle>
      <p className="font-marathi text-lg text-primary-blue/80">{marathiTitle}</p>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-primary-blue rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full mt-6 bg-primary-blue hover:bg-primary-blue/90 text-white">
        Apply Now / आता अर्ज करा
      </Button>
    </CardContent>
  </Card>
);

const InterestRateRow = ({ scheme, rates, isOpen, onToggle }: any) => (
  <div className="border-b border-gray-200">
    <div 
      className="flex justify-between items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors"
      onClick={onToggle}
    >
      <div>
        <h3 className="font-semibold text-primary-blue">{scheme.name}</h3>
        <p className="text-sm text-gray-600 font-marathi">{scheme.marathi}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold text-gold">{rates.main}%</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </div>
    </div>
    {isOpen && (
      <div className="px-4 pb-4 bg-gray-50 animate-fade-in">
        <div className="grid md:grid-cols-3 gap-4">
          {rates.details.map((detail: any, index: number) => (
            <div key={index} className="bg-white p-3 rounded-lg">
              <p className="text-sm font-semibold text-primary-blue">{detail.period}</p>
              <p className="text-lg font-bold text-gold">{detail.rate}%</p>
              {detail.note && <p className="text-xs text-gray-500 mt-1">{detail.note}</p>}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

const Deposits = () => {
  const [openRate, setOpenRate] = useState<number | null>(null);

  const depositSchemes = [
    {
      icon: PiggyBank,
      title: "Savings Account",
      marathiTitle: "बचत खाते",
      description: "Start your financial journey with our flexible savings account offering competitive interest rates.",
      features: [
        "Minimum balance: ₹1,000",
        "4.5% annual interest rate",
        "Free checkbook and debit card",
        "Mobile banking facility",
        "Quarterly interest calculation"
      ],
      bgColor: "bg-blue-50"
    },
    {
      icon: Calendar,
      title: "Fixed Deposit",
      marathiTitle: "मुदत ठेव",
      description: "Secure your future with guaranteed returns through our fixed deposit schemes.",
      features: [
        "Tenure: 1 to 5 years",
        "Interest rates up to 8.5%",
        "Loan facility against FD",
        "Premature withdrawal option",
        "Automatic renewal facility"
      ],
      bgColor: "bg-green-50"
    },
    {
      icon: TrendingUp,
      title: "Recurring Deposit",
      marathiTitle: "आवर्ती ठेव",
      description: "Build wealth systematically with our recurring deposit scheme for regular savers.",
      features: [
        "Monthly installments from ₹500",
        "Tenure: 12 to 60 months",
        "7.5% annual interest rate",
        "Flexible payment options",
        "Maturity amount calculation"
      ],
      bgColor: "bg-yellow-50"
    }
  ];

  const interestRates = [
    {
      scheme: { name: "Savings Account", marathi: "बचत खाते" },
      rates: {
        main: 4.5,
        details: [
          { period: "Regular Savings", rate: "4.5", note: "Minimum ₹1,000" },
          { period: "Senior Citizen", rate: "5.0", note: "Age 60+" },
          { period: "Children Account", rate: "5.5", note: "Age below 18" }
        ]
      }
    },
    {
      scheme: { name: "Fixed Deposit", marathi: "मुदत ठेव" },
      rates: {
        main: 8.5,
        details: [
          { period: "1-2 Years", rate: "7.5", note: "Minimum ₹10,000" },
          { period: "2-3 Years", rate: "8.0", note: "Best for medium term" },
          { period: "3-5 Years", rate: "8.5", note: "Highest returns" }
        ]
      }
    },
    {
      scheme: { name: "Recurring Deposit", marathi: "आवर्ती ठेव" },
      rates: {
        main: 7.5,
        details: [
          { period: "12 Months", rate: "7.0", note: "Short term" },
          { period: "24 Months", rate: "7.25", note: "Medium term" },
          { period: "36-60 Months", rate: "7.5", note: "Long term benefits" }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Deposit Schemes / <span className="font-marathi">ठेवी योजना</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Secure your financial future with our attractive deposit schemes
          </p>
        </div>
      </section>

      {/* Deposit Schemes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Choose Your Savings Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible deposit options designed to help you achieve your financial goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {depositSchemes.map((scheme, index) => (
              <div key={index} style={{ animationDelay: `${index * 200}ms` }}>
                <DepositCard {...scheme} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Rates Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Current Interest Rates / <span className="font-marathi">व्याजदर</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Competitive rates updated regularly for maximum returns
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-0">
              <CardContent className="p-0">
                {interestRates.map((item, index) => (
                  <InterestRateRow
                    key={index}
                    scheme={item.scheme}
                    rates={item.rates}
                    isOpen={openRate === index}
                    onToggle={() => setOpenRate(openRate === index ? null : index)}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Why Save With Us? / <span className="font-marathi">आमच्यासोबत का बचत करा?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-primary-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue font-bold text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Safe & Secure</h3>
              <p className="text-gray-600 text-sm">RBI registered and insured deposits</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-bold text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">High Returns</h3>
              <p className="text-gray-600 text-sm">Better rates than traditional banks</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Processing</h3>
              <p className="text-gray-600 text-sm">Fast account opening and processing</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Personal Service</h3>
              <p className="text-gray-600 text-sm">Dedicated relationship managers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Start Your Savings Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-90 font-marathi">
            आजच सुरू करा आपली बचतीची आर्थिक यात्रा
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold text-primary-blue hover:bg-gold/90 transition-all hover:scale-105"
            >
              Open Account Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary-blue transition-all"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deposits;
