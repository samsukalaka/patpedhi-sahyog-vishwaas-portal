
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PiggyBank, User, Phone, Mail, MapPin, Calendar, CreditCard } from 'lucide-react';

const ApplyDeposit = () => {
  const [selectedScheme, setSelectedScheme] = useState('savings');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    depositType: 'savings',
    amount: '',
    tenure: '',
    nomineeDetails: '',
    branch: ''
  });

  const depositSchemes = [
    { id: 'savings', name: 'Savings Account', marathiName: 'बचत खाते', minAmount: '₹100' },
    { id: 'fd', name: 'Fixed Deposit', marathiName: 'मुदती ठेव', minAmount: '₹1,000' },
    { id: 'rd', name: 'Recurring Deposit', marathiName: 'आवर्ती ठेव', minAmount: '₹100/month' }
  ];

  const branches = [
    'Main Branch - Mumbai',
    'Pune Branch',
    'Nashik Branch',
    'Nagpur Branch',
    'Aurangabad Branch'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Deposit Application:', formData);
    alert('Your deposit application has been submitted successfully! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <PiggyBank className="h-16 w-16 mx-auto mb-4 text-gold" />
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Apply for Deposit / <span className="font-marathi">ठेव अर्ज</span>
          </h1>
          <p className="text-lg opacity-90">
            Start your savings journey with us today
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary-blue text-center">
                Deposit Application Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-blue mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Personal Information / व्यक्तिगत माहिती
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name / पूर्ण नाव *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email / ईमेल *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number / फोन नंबर *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                        placeholder="+91-XXXXX-XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Branch / शाखा *
                      </label>
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      >
                        <option value="">Select Branch</option>
                        {branches.map((branch) => (
                          <option key={branch} value={branch}>{branch}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address / पत्ता *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      placeholder="Enter your complete address"
                    />
                  </div>
                </div>

                {/* Deposit Details */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-blue mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Deposit Details / ठेव तपशील
                  </h3>
                  
                  {/* Scheme Selection */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Deposit Scheme / ठेव योजना निवडा *
                    </label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {depositSchemes.map((scheme) => (
                        <div
                          key={scheme.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedScheme === scheme.id
                              ? 'border-primary-blue bg-primary-blue/10'
                              : 'border-gray-200 hover:border-primary-blue/50'
                          }`}
                          onClick={() => setSelectedScheme(scheme.id)}
                        >
                          <h4 className="font-semibold">{scheme.name}</h4>
                          <p className="text-sm font-marathi text-gray-600">{scheme.marathiName}</p>
                          <p className="text-xs text-green-600">Min: {scheme.minAmount}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {selectedScheme === 'rd' ? 'Monthly Amount / मासिक रक्कम' : 'Deposit Amount / ठेव रक्कम'} *
                      </label>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                        placeholder="Enter amount in ₹"
                        min={selectedScheme === 'savings' ? '100' : selectedScheme === 'fd' ? '1000' : '100'}
                      />
                    </div>
                    {selectedScheme !== 'savings' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Tenure (Years) / कालावधी *
                        </label>
                        <select
                          name="tenure"
                          value={formData.tenure}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                        >
                          <option value="">Select Tenure</option>
                          <option value="1">1 Year</option>
                          <option value="2">2 Years</option>
                          <option value="3">3 Years</option>
                          <option value="5">5 Years</option>
                          {selectedScheme === 'rd' && (
                            <>
                              <option value="7">7 Years</option>
                              <option value="10">10 Years</option>
                            </>
                          )}
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Nominee Details */}
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-blue mb-4">
                    Nominee Details / नामांकित व्यक्ती (Optional)
                  </h3>
                  <textarea
                    name="nomineeDetails"
                    value={formData.nomineeDetails}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    placeholder="Name, Relationship, Contact details of nominee"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary-blue text-white hover:bg-primary-blue/90 px-12 py-3"
                  >
                    Submit Application / अर्ज सबमिट करा
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">
                    * Required fields / आवश्यक फील्ड
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ApplyDeposit;
