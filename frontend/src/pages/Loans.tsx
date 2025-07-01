
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Handshake, Coins, Car, Calculator, CheckCircle, User, TrendingUp, Shield } from 'lucide-react';

const LoanCard = ({ icon: Icon, title, marathiTitle, interestRate, features, maxAmount, tenure, isPopular = false }: any) => (
  <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in relative ${isPopular ? 'border-gold border-2' : 'border-0'}`}>
    {isPopular && (
      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-primary-blue font-bold">
        Most Popular
      </Badge>
    )}
    <CardHeader className="text-center pb-4">
      <div className="mx-auto mb-4 p-4 bg-primary-blue/10 rounded-full group-hover:bg-primary-blue transition-colors duration-300">
        <Icon className="h-12 w-12 text-primary-blue group-hover:text-white transition-colors duration-300" />
      </div>
      <CardTitle className="text-xl text-primary-blue mb-2">{title}</CardTitle>
      <p className="font-marathi text-lg text-primary-blue/80 mb-2">{marathiTitle}</p>
      <div className="text-2xl font-bold text-gold">{interestRate}</div>
      <p className="text-sm text-gray-600">Interest Rate (p.a.)</p>
    </CardHeader>
    <CardContent>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Maximum Amount:</span>
          <span className="font-semibold">{maxAmount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tenure:</span>
          <span className="font-semibold">{tenure}</span>
        </div>
      </div>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <Link to="/apply-loan">
        <Button className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white">
          Apply Now / आता अर्ज करा
        </Button>
      </Link>
    </CardContent>
  </Card>
);

const Loans = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [tenure, setTenure] = useState(12);
  const [interestRate, setInterestRate] = useState(12);

  const loanSchemes = [
    {
      icon: Handshake,
      title: "Personal Loan",
      marathiTitle: "वैयक्तिक कर्ज",
      interestRate: "10.5% - 16%",
      maxAmount: "₹5,00,000",
      tenure: "1-5 years",
      features: [
        "Quick processing within 24 hours",
        "Minimal documentation required",
        "No collateral needed",
        "Flexible repayment options",
        "Pre-closure facility available"
      ],
      isPopular: true
    },
    {
      icon: Coins,
      title: "Gold Loan",
      marathiTitle: "सोन्याचे कर्ज",
      interestRate: "8.5% - 12%",
      maxAmount: "₹10,00,000",
      tenure: "6 months - 3 years",
      features: [
        "Instant loan approval",
        "Competitive interest rates",
        "Safe gold storage",
        "Part payment facility",
        "Easy renewal options"
      ]
    },
    {
      icon: Car,
      title: "Vehicle Loan",
      marathiTitle: "वाहन कर्ज",
      interestRate: "9% - 14%",
      maxAmount: "₹15,00,000",
      tenure: "1-7 years",
      features: [
        "Up to 90% financing",
        "New and used vehicles",
        "Fast loan processing",
        "Flexible EMI options",
        "Insurance assistance"
      ]
    }
  ];

  const eligibilityChecklist = [
    { criteria: "Age between 21-65 years", met: true },
    { criteria: "Regular income source", met: true },
    { criteria: "Good credit history", met: true },
    { criteria: "Valid identity proof", met: true },
    { criteria: "Address proof", met: true },
    { criteria: "Bank statements (6 months)", met: false }
  ];

  const calculateEMI = () => {
    const monthlyRate = interestRate / 100 / 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
    return Math.round(emi);
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
            Quick and hassle-free loans to fulfill all your financial needs
          </p>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Our Loan Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of loan products tailored to meet your specific needs
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

      {/* EMI Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              EMI Calculator / <span className="font-marathi">EMI कॅल्क्युलेटर</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Calculate your monthly installments and plan your loan accordingly
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-primary-blue">
                  <Calculator className="h-8 w-8 mx-auto mb-2" />
                  Loan EMI Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Amount (₹)
                      </label>
                      <input
                        type="range"
                        min="10000"
                        max="1500000"
                        step="10000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>₹10K</span>
                        <span className="font-semibold text-primary-blue">₹{loanAmount.toLocaleString()}</span>
                        <span>₹15L</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tenure (Months)
                      </label>
                      <input
                        type="range"
                        min="6"
                        max="84"
                        step="6"
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>6 months</span>
                        <span className="font-semibold text-primary-blue">{tenure} months</span>
                        <span>7 years</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interest Rate (% p.a.)
                      </label>
                      <input
                        type="range"
                        min="8"
                        max="18"
                        step="0.5"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>8%</span>
                        <span className="font-semibold text-primary-blue">{interestRate}%</span>
                        <span>18%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-blue/5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-primary-blue mb-4">EMI Breakdown</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Loan Amount:</span>
                        <span className="font-semibold">₹{loanAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interest Rate:</span>
                        <span className="font-semibold">{interestRate}% p.a.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tenure:</span>
                        <span className="font-semibold">{tenure} months</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between">
                          <span className="text-lg font-semibold text-primary-blue">Monthly EMI:</span>
                          <span className="text-2xl font-bold text-primary-blue">
                            ₹{calculateEMI().toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Amount:</span>
                        <span className="font-semibold">₹{(calculateEMI() * tenure).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Interest:</span>
                        <span className="font-semibold text-red-600">₹{((calculateEMI() * tenure) - loanAmount).toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <Link to="/apply-loan">
                      <Button className="w-full mt-6 bg-gold text-primary-blue hover:bg-gold/90">
                        Apply for This Loan
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Eligibility Check / <span className="font-marathi">पात्रता तपासणी</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-primary-blue">
                  Check Your Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eligibilityChecklist.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        item.met ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        {item.met && <CheckCircle className="h-4 w-4 text-white" />}
                      </div>
                      <span className={`${item.met ? 'text-gray-700' : 'text-gray-500'}`}>
                        {item.criteria}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/apply-loan">
                    <Button size="lg" className="bg-primary-blue text-white hover:bg-primary-blue/90">
                      Check Full Eligibility & Apply
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Why Choose Our Loans?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <TrendingUp className="h-10 w-10 text-primary-blue" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Best-in-market interest rates with transparent pricing</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-gold/20 rounded-full">
                  <User className="h-10 w-10 text-gold" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Quick Processing</h3>
              <p className="text-gray-600">Fast approval process with minimal documentation</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-green-100 rounded-full">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Flexible Terms</h3>
              <p className="text-gray-600">Customizable repayment options to suit your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Apply for a Loan?
          </h2>
          <p className="text-xl mb-8 opacity-90 font-marathi">
            आजच करा आपल्या स्वप्नांची पूर्तता
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply-loan">
              <Button 
                size="lg" 
                className="bg-gold text-primary-blue hover:bg-gold/90 transition-all hover:scale-105"
              >
                Apply for Loan Now
              </Button>
            </Link>
            <Link to="/book-appointment">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary-blue transition-all"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loans;
