
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, User, Phone, Mail, MapPin, Calendar, CreditCard, FileText } from 'lucide-react';

const ApplyLoan = () => {
  const [selectedLoan, setSelectedLoan] = useState('personal');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    loanType: 'personal',
    loanAmount: '',
    tenure: '',
    purpose: '',
    monthlyIncome: '',
    employment: '',
    branch: ''
  });

  const loanTypes = [
    { id: 'personal', name: 'Personal Loan', marathiName: 'वैयक्तिक कर्ज', maxAmount: '₹5,00,000' },
    { id: 'gold', name: 'Gold Loan', marathiName: 'सोन्याचे कर्ज', maxAmount: '₹10,00,000' },
    { id: 'vehicle', name: 'Vehicle Loan', marathiName: 'वाहन कर्ज', maxAmount: '₹15,00,000' }
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
    console.log('Loan Application:', formData);
    alert('Your loan application has been submitted successfully! We will contact you soon for document verification.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <Handshake className="h-16 w-16 mx-auto mb-4 text-gold" />
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Apply for Loan / <span className="font-marathi">कर्ज अर्ज</span>
          </h1>
          <p className="text-lg opacity-90">
            Get quick and hassle-free loans for all your needs
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary-blue text-center">
                Loan Application Form
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

                {/* Loan Details */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-blue mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Loan Details / कर्ज तपशील
                  </h3>
                  
                  {/* Loan Type Selection */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Loan Type / कर्ज प्रकार निवडा *
                    </label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {loanTypes.map((loan) => (
                        <div
                          key={loan.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedLoan === loan.id
                              ? 'border-primary-blue bg-primary-blue/10'
                              : 'border-gray-200 hover:border-primary-blue/50'
                          }`}
                          onClick={() => setSelectedLoan(loan.id)}
                        >
                          <h4 className="font-semibold">{loan.name}</h4>
                          <p className="text-sm font-marathi text-gray-600">{loan.marathiName}</p>
                          <p className="text-xs text-green-600">Max: {loan.maxAmount}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Loan Amount / कर्ज रक्कम *
                      </label>
                      <input
                        type="number"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                        placeholder="Enter loan amount in ₹"
                        min="10000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tenure (Months) / कालावधी *
                      </label>
                      <select
                        name="tenure"
                        value={formData.tenure}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      >
                        <option value="">Select Tenure</option>
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                        <option value="36">36 Months</option>
                        <option value="48">48 Months</option>
                        <option value="60">60 Months</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Income / मासिक उत्पन्न *
                      </label>
                      <input
                        type="number"
                        name="monthlyIncome"
                        value={formData.monthlyIncome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                        placeholder="Enter monthly income in ₹"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Employment Type / रोजगार प्रकार *
                      </label>
                      <select
                        name="employment"
                        value={formData.employment}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      >
                        <option value="">Select Employment</option>
                        <option value="salaried">Salaried</option>
                        <option value="business">Business Owner</option>
                        <option value="professional">Professional</option>
                        <option value="farmer">Farmer</option>
                        <option value="retired">Retired</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Purpose of Loan / कर्जाचा हेतू *
                    </label>
                    <textarea
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      placeholder="Describe the purpose of loan"
                    />
                  </div>
                </div>

                {/* Required Documents Info */}
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-blue mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Required Documents / आवश्यक कागदपत्रे
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                    <li>• Identity Proof (Aadhar/PAN)</li>
                    <li>• Address Proof</li>
                    <li>• Income Proof (Salary Slips/ITR)</li>
                    <li>• Bank Statements (6 months)</li>
                    <li>• Passport Size Photographs</li>
                    <li>• {selectedLoan === 'gold' ? 'Gold Ornaments for valuation' : 'Employment Certificate'}</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">
                    Note: Original documents need to be brought during verification process
                  </p>
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

export default ApplyLoan;
