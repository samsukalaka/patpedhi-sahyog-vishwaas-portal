
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { HandHeart, Coins, Car, Home, Check, X } from 'lucide-react';

const LoanCard = ({ icon: Icon, title, marathiTitle, description, features, interestRate, bgColor }: any) => (
  <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${bgColor} border-0 animate-fade-in`}>
    <CardHeader className="text-center pb-4">
      <div className="mx-auto mb-4 p-4 bg-white/80 rounded-full group-hover:bg-white transition-colors">
        <Icon className="h-12 w-12 text-primary-blue" />
      </div>
      <CardTitle className="text-xl text-primary-blue mb-2">{title}</CardTitle>
      <p className="font-marathi text-lg text-primary-blue/80">{marathiTitle}</p>
      <Badge className="bg-gold text-primary-blue font-bold">From {interestRate}% interest</Badge>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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

const EligibilityChecker = ({ criteria, title }: any) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleCheck = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const eligibleCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = criteria.length;
  const isEligible = eligibleCount >= Math.ceil(totalCount * 0.7);

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-primary-blue">{title}</CardTitle>
        <div className="flex items-center space-x-2">
          <div className={`w-4 h-4 rounded-full ${isEligible ? 'bg-green-500' : 'bg-gray-300'}`}></div>
          <span className={`text-sm font-medium ${isEligible ? 'text-green-600' : 'text-gray-500'}`}>
            {eligibleCount}/{totalCount} criteria met
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {criteria.map((criterion: any, index: number) => (
            <div key={index} className="flex items-center space-x-3">
              <Checkbox
                id={`${title}-${index}`}
                checked={checkedItems[`${title}-${index}`] || false}
                onCheckedChange={() => handleCheck(`${title}-${index}`)}
              />
              <label 
                htmlFor={`${title}-${index}`} 
                className="text-sm text-gray-700 cursor-pointer flex-1"
              >
                {criterion}
              </label>
            </div>
          ))}
        </div>
        {isEligible && (
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-green-700 text-sm font-medium">
              ✅ You appear to be eligible! Click "Apply Now" to proceed.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Loans = () => {
  const loanSchemes = [
    {
      icon: HandHeart,
      title: "Personal Loan",
      marathiTitle: "वैयक्तिक कर्ज",
      description: "Quick personal loans for your immediate financial needs with minimal documentation.",
      features: [
        "Loan amount: ₹25,000 to ₹10,00,000",
        "Tenure: 12 to 60 months",
        "Quick approval within 24 hours",
        "Minimal documentation required",
        "Competitive interest rates"
      ],
      interestRate: "10.5",
      bgColor: "bg-blue-50"
    },
    {
      icon: Coins,
      title: "Gold Loan",
      marathiTitle: "सोन्याचे कर्ज",
      description: "Instant loans against your gold jewelry with attractive interest rates and flexible repayment.",
      features: [
        "Up to 85% of gold value",
        "Interest rates from 8.5%",
        "Flexible repayment options", 
        "Safe gold storage facility",
        "Quick processing in 30 minutes"
      ],
      interestRate: "8.5",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Car,
      title: "Vehicle Loan",
      marathiTitle: "वाहन कर्ज",
      description: "Finance your dream vehicle with our competitive vehicle loan schemes for cars and two-wheelers.",
      features: [
        "Up to 90% vehicle financing",
        "New and used vehicle loans",
        "Tenure up to 7 years",
        "Competitive EMI options",
        "Insurance tie-up facility"
      ],
      interestRate: "9.5",
      bgColor: "bg-green-50"
    }
  ];

  const eligibilityCriteria = {
    personal: [
      "Age between 21-65 years",
      "Monthly income above ₹15,000",
      "Employment/Business stability (2+ years)",
      "Good credit score (650+)",
      "Valid identity and address proof",
      "Bank statements for 6 months"
    ],
    gold: [
      "Age above 18 years",
      "Valid identity proof",
      "Gold jewelry (minimum 18 karat)",
      "No criminal background",
      "Resident of service area"
    ],
    vehicle: [
      "Age between 21-65 years",
      "Stable income source",
      "Good credit history",
      "Valid driving license",
      "Insurance coverage",
      "Down payment capacity (10-20%)"
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Loan Services / <span className="font-marathi">कर्ज सेवा</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Fulfill your dreams with our flexible and affordable loan solutions
          </p>
        </div>
      </section>

      {/* Loan Schemes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Our Loan Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of loan products designed to meet your specific financial needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {loanSchemes.map((scheme, index) => (
              <div key={index} style={{ animationDelay: `${index * 200}ms` }}>
                <LoanCard {...scheme} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Checker */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Check Your Eligibility / <span className="font-marathi">पात्रता तपासा</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use our quick eligibility checker to see which loans you qualify for
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <EligibilityChecker 
              title="Personal Loan Eligibility"
              criteria={eligibilityCriteria.personal}
            />
            <EligibilityChecker 
              title="Gold Loan Eligibility"
              criteria={eligibilityCriteria.gold}
            />
            <EligibilityChecker 
              title="Vehicle Loan Eligibility"
              criteria={eligibilityCriteria.vehicle}
            />
          </div>
        </div>
      </section>

      {/* Loan Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Simple Loan Process / <span className="font-marathi">सोपी कर्ज प्रक्रिया</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">Submit your application with basic details</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="bg-gold text-primary-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Document Verification</h3>
              <p className="text-gray-600 text-sm">Our team will verify your documents</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Approval</h3>
              <p className="text-gray-600 text-sm">Quick approval based on eligibility</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-lg mb-2">Disbursement</h3>
              <p className="text-gray-600 text-sm">Loan amount credited to your account</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Our Loans?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue font-bold text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Processing</h3>
              <p className="text-sm opacity-90">Fastest loan approval in the region</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue font-bold text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitive Rates</h3>
              <p className="text-sm opacity-90">Best interest rates in the market</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue font-bold text-2xl">📋</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Minimal Documentation</h3>
              <p className="text-sm opacity-90">Less paperwork, more convenience</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-blue font-bold text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Personal Support</h3>
              <p className="text-sm opacity-90">Dedicated loan officers for guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
            Ready to Apply for a Loan?
          </h2>
          <p className="text-xl mb-8 text-gray-600 font-marathi">
            आजच अर्ज करा आणि मिळवा त्वरित मंजुरी
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary-blue text-white hover:bg-primary-blue/90 transition-all hover:scale-105"
            >
              Apply for Loan
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white transition-all"
            >
              Calculate EMI
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loans;
