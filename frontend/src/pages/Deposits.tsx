import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { PiggyBank, TrendingUp, Calendar, Calculator, CheckCircle, ArrowRight } from 'lucide-react';

const SchemeCard = ({ icon: Icon, title, marathiTitle, interestRate, features, minAmount, tenure, isPopular = false }: any) => (
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
      <p className="text-sm text-gray-600">Interest Rate</p>
    </CardHeader>
    <CardContent>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Minimum Amount:</span>
          <span className="font-semibold">{minAmount}</span>
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
      
      <Link to="/apply-deposit">
        <Button className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white">
          Apply Now / आता अर्ज करा
        </Button>
      </Link>
    </CardContent>
  </Card>
);

const Deposits = () => {
  const [selectedCalculator, setSelectedCalculator] = useState('savings');
  const [calculatorValues, setCalculatorValues] = useState({
    principal: 10000,
    rate: 4.5,
    time: 1
  });

  const depositSchemes = [
    {
      icon: PiggyBank,
      title: "Savings Account",
      marathiTitle: "बचत खाते",
      interestRate: "4.5% p.a.",
      minAmount: "₹100",
      tenure: "Ongoing",
      features: [
        "No minimum balance required",
        "Unlimited transactions",
        "Free debit card",
        "Mobile banking facility",
        "Monthly interest credit"
      ],
      isPopular: true
    },
    {
      icon: TrendingUp,
      title: "Fixed Deposit",
      marathiTitle: "मुदती ठेव",
      interestRate: "6.5% p.a.",
      minAmount: "₹1,000",
      tenure: "1-5 years",
      features: [
        "Higher interest rates",
        "Flexible tenure options",
        "Loan against FD facility",
        "Automatic renewal option",
        "Tax benefits available"
      ]
    },
    {
      icon: Calendar,
      title: "Recurring Deposit",
      marathiTitle: "आवर्ती ठेव",
      interestRate: "6.0% p.a.",
      minAmount: "₹100/month",
      tenure: "1-10 years",
      features: [
        "Systematic monthly savings",
        "Disciplined saving habit",
        "Competitive interest rates",
        "Premature withdrawal allowed",
        "Easy EMI planning"
      ]
    }
  ];

  const calculateMaturity = () => {
    const { principal, rate, time } = calculatorValues;
    if (selectedCalculator === 'savings') {
      return principal * Math.pow(1 + rate / 100, time);
    } else if (selectedCalculator === 'fd') {
      return principal * (1 + (rate / 100) * time);
    } else {
      // RD calculation
      const monthlyAmount = principal;
      const months = time * 12;
      const monthlyRate = rate / 100 / 12;
      return monthlyAmount * months * (1 + monthlyRate * (months + 1) / 2);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Deposit Schemes / <span className="font-marathi">ठेवी योजना</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Secure your future with our attractive deposit schemes and competitive interest rates
          </p>
        </div>
      </section>

      {/* Deposit Schemes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Our Deposit Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of deposit products designed to help you save and grow your money
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {depositSchemes.map((scheme, index) => (
              <div key={index} style={{ animationDelay: `${index * 200}ms` }}>
                <SchemeCard {...scheme} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Rate Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Interest Calculator / <span className="font-marathi">व्याज कॅल्क्युलेटर</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Calculate your returns and plan your investments with our easy-to-use calculator
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-primary-blue">
                  <Calculator className="h-8 w-8 mx-auto mb-2" />
                  Investment Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {/* Calculator Type Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Deposit Type:
                      </label>
                      <div className="flex space-x-2">
                        {[
                          { id: 'savings', label: 'Savings' },
                          { id: 'fd', label: 'Fixed Deposit' },
                          { id: 'rd', label: 'Recurring Deposit' }
                        ].map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setSelectedCalculator(type.id)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                              selectedCalculator === type.id
                                ? 'bg-primary-blue text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Input Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {selectedCalculator === 'rd' ? 'Monthly Amount (₹)' : 'Principal Amount (₹)'}
                        </label>
                        <input
                          type="number"
                          value={calculatorValues.principal}
                          onChange={(e) => setCalculatorValues({...calculatorValues, principal: Number(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                          placeholder="Enter amount"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Interest Rate (% p.a.)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={calculatorValues.rate}
                          onChange={(e) => setCalculatorValues({...calculatorValues, rate: Number(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                          placeholder="Enter rate"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Time Period (Years)
                        </label>
                        <input
                          type="number"
                          value={calculatorValues.time}
                          onChange={(e) => setCalculatorValues({...calculatorValues, time: Number(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                          placeholder="Enter years"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-blue/5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-primary-blue mb-4">Calculation Results</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {selectedCalculator === 'rd' ? 'Total Investment:' : 'Principal Amount:'}
                        </span>
                        <span className="font-semibold">
                          ₹{(selectedCalculator === 'rd' ? calculatorValues.principal * calculatorValues.time * 12 : calculatorValues.principal).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interest Earned:</span>
                        <span className="font-semibold text-green-600">
                          ₹{(calculateMaturity() - (selectedCalculator === 'rd' ? calculatorValues.principal * calculatorValues.time * 12 : calculatorValues.principal)).toLocaleString()}
                        </span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between">
                          <span className="text-lg font-semibold text-primary-blue">Maturity Amount:</span>
                          <span className="text-xl font-bold text-primary-blue">
                            ₹{calculateMaturity().toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <Link to="/apply-deposit">
                      <Button className="w-full mt-6 bg-gold text-primary-blue hover:bg-gold/90">
                        Start Your Investment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
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
              Why Choose Our Deposits?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <CheckCircle className="h-10 w-10 text-primary-blue" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">RBI Insured</h3>
              <p className="text-gray-600">Your deposits are safe and insured as per RBI guidelines</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-gold/20 rounded-full">
                  <TrendingUp className="h-10 w-10 text-gold" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Attractive interest rates better than market standards</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-green-100 rounded-full">
                  <PiggyBank className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Flexible Options</h3>
              <p className="text-gray-600">Various tenure and amount options to suit your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Start Your Savings Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-90 font-marathi">
            आजच सुरू करा आपली बचतीची वाटचाल
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply-deposit">
              <Button 
                size="lg" 
                className="bg-gold text-primary-blue hover:bg-gold/90 transition-all hover:scale-105"
              >
                Open Account Now
              </Button>
            </Link>
            <Link to="/book-appointment">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary-blue transition-all"
              >
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deposits;
