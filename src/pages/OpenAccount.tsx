
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PiggyBank, Calendar, Building, CheckCircle, ArrowRight } from 'lucide-react';

const OpenAccount = () => {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  const accountTypes = [
    {
      id: 'savings',
      title: 'Savings Account',
      marathiTitle: 'बचत खाते',
      icon: PiggyBank,
      features: [
        'No minimum balance required',
        'Competitive interest rates up to 4.5%',
        'Free ATM/Debit card',
        'Mobile and internet banking',
        'Quarterly interest payout'
      ],
      benefits: [
        'Zero maintenance charges',
        'Unlimited transactions',
        'SMS alerts included',
        'Passbook facility'
      ]
    },
    {
      id: 'current',
      title: 'Current Account',
      marathiTitle: 'चालू खाते',
      icon: Building,
      features: [
        'Suitable for business transactions',
        'Higher transaction limits',
        'Overdraft facility available',
        'Bulk payment services',
        'Trade finance solutions'
      ],
      benefits: [
        'No limit on transactions',
        'Cash management services',  
        'Priority customer service',
        'Business banking tools'
      ]
    },
    {
      id: 'recurring',
      title: 'Recurring Deposit',
      marathiTitle: 'आवर्ती ठेव',
      icon: Calendar,
      features: [
        'Systematic monthly savings',
        'Flexible tenure options',
        'Higher interest than savings',
        'Automatic renewal facility',
        'Loan against deposit'
      ],
      benefits: [
        'Interest rates up to 6.5%',
        'Tax benefits under 80C',
        'Flexible monthly amounts',
        'Premature withdrawal allowed'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
            Open Your Account Today
          </h1>
          <p className="text-xl text-gray-600 font-marathi mb-2">
            आपले खाते उघडा आजच
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of account types designed to meet your financial needs. 
            Quick processing and hassle-free documentation.
          </p>
        </div>

        {/* Account Types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {accountTypes.map((account) => {
            const Icon = account.icon;
            return (
              <Card 
                key={account.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedAccount === account.id ? 'ring-2 ring-primary-blue border-primary-blue' : ''
                }`}
                onClick={() => setSelectedAccount(account.id)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary-blue/10 rounded-full">
                    <Icon className="h-12 w-12 text-primary-blue" />
                  </div>
                  <CardTitle className="text-xl text-primary-blue">{account.title}</CardTitle>
                  <p className="font-marathi text-lg text-primary-blue/80">{account.marathiTitle}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {account.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {account.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <div className="w-2 h-2 bg-gold rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Requirements Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-blue mb-6 text-center">
            Account Opening Requirements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary-blue">Required Documents:</h3>
              <ul className="space-y-2">
                {[
                  'Valid Government ID (Aadhar/Passport/Driving License)',
                  'PAN Card (Mandatory)',
                  'Address Proof (Utility Bill/Bank Statement)',
                  'Recent Passport Size Photographs (2 copies)',
                  'Income Proof (For certain account types)',
                  'Membership Certificate (If not a member yet)'
                ].map((doc, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary-blue">Process Steps:</h3>
              <div className="space-y-3">
                {[
                  'Submit application with required documents',
                  'KYC verification and document validation',
                  'Initial deposit as per account type',
                  'Account activation within 24 hours',
                  'Receive debit card and welcome kit',
                  'Activate online/mobile banking services'
                ].map((step, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                      {index + 1}
                    </div>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary-blue text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 opacity-90 font-marathi">
              आपली आर्थिक प्रवास सुरू करा आमच्यासोबत
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply-membership">
                <Button size="lg" className="bg-gold text-primary-blue hover:bg-gold/90">
                  Apply Online Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary-blue"
                >
                  Visit Branch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;
