
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, User, Phone, Mail } from 'lucide-react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    branch: '',
    appointmentDate: '',
    appointmentTime: '',
    purpose: '',
    preferredLanguage: 'english',
    additionalNotes: ''
  });

  const branches = [
    'Main Branch - Mumbai',
    'Pune Branch', 
    'Nashik Branch',
    'Nagpur Branch',
    'Aurangabad Branch'
  ];

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const purposes = [
    'Account Opening',
    'Loan Consultation',
    'Deposit Schemes',
    'KYC Update',
    'Complaint Resolution',
    'General Inquiry',
    'Digital Banking Setup',
    'Document Verification'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment Booking:', formData);
    alert(`Your appointment has been booked successfully for ${formData.appointmentDate} at ${formData.appointmentTime}. You will receive a confirmation SMS/Email shortly.`);
  };

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="h-16 w-16 mx-auto mb-4 text-gold" />
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Book an Appointment / <span className="font-marathi">भेटीची वेळ बुक करा</span>
          </h1>
          <p className="text-lg opacity-90">
            Schedule your visit to our branch for personalized assistance
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary-blue text-center">
                Schedule Your Visit
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Fill in the details below to book your appointment
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-blue mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Personal Details / व्यक्तिगत तपशील
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
                    <div className="md:col-span-2">
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
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-blue mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Appointment Details / भेटीचे तपशील
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Select Branch / शाखा निवडा *
                      </label>
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      >
                        <option value="">Choose your preferred branch</option>
                        {branches.map((branch) => (
                          <option key={branch} value={branch}>{branch}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Purpose of Visit / भेटीचा हेतू *
                      </label>
                      <select
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      >
                        <option value="">Select purpose</option>
                        {purposes.map((purpose) => (
                          <option key={purpose} value={purpose}>{purpose}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date / पसंतीची तारीख *
                      </label>
                      <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
                        required
                        min={minDate}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time / पसंतीची वेळ *
                      </label>
                      <select
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary-blue mb-4">
                    Additional Information / अतिरिक्त माहिती
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Language / पसंतीची भाषा
                      </label>
                      <select
                        name="preferredLanguage"
                        value={formData.preferredLanguage}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      >
                        <option value="english">English</option>
                        <option value="marathi">मराठी (Marathi)</option>
                        <option value="hindi">हिंदी (Hindi)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes / अतिरिक्त टिप्पण्या (Optional)
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      placeholder="Any specific requirements or additional information..."
                    />
                  </div>
                </div>

                {/* Important Notes */}
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">Important Notes:</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Please arrive 10 minutes before your scheduled time</li>
                    <li>• Carry all relevant documents and ID proof</li>
                    <li>• Appointments can be cancelled/rescheduled up to 2 hours before</li>
                    <li>• You will receive confirmation via SMS and email</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary-blue text-white hover:bg-primary-blue/90 px-12 py-3"
                  >
                    Book Appointment / भेटीची वेळ बुक करा
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

export default BookAppointment;
