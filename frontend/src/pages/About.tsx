
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Eye, Award } from 'lucide-react';

const TimelineItem = ({ year, title, description, isLeft }: any) => (
  <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center mb-8 animate-fade-in`}>
    <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-gold font-bold text-lg mb-2">{year}</div>
        <h3 className="font-semibold text-primary-blue text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    <div className="w-2/12 flex justify-center">
      <div className="w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg relative z-10"></div>
    </div>
    <div className="w-5/12"></div>
  </div>
);

const CommitteeMember = ({ name, role, image }: any) => (
  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
    <CardContent className="p-6 text-center">
      <div className="w-24 h-24 bg-gradient-to-br from-primary-blue to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
        {name.charAt(0)}
      </div>
      <h3 className="font-semibold text-lg text-primary-blue mb-1">{name}</h3>
      <p className="text-gray-600 text-sm">{role}</p>
    </CardContent>
  </Card>
);

const About = () => {
  const timelineData = [
    {
      year: "1995",
      title: "Foundation",
      description: "Patpedhi was established with a vision to serve the local community with transparent and member-centric financial services.",
      isLeft: true
    },
    {
      year: "2000",
      title: "First Branch Expansion",
      description: "Opened our second branch to better serve growing membership base across the region.",
      isLeft: false
    },
    {
      year: "2005",
      title: "Digital Integration",
      description: "Introduced computerized banking systems and digital record-keeping for enhanced service delivery.",
      isLeft: true
    },
    {
      year: "2015",
      title: "Mobile Banking Launch",
      description: "Launched mobile banking services and online account management for tech-savvy members.",
      isLeft: false
    },
    {
      year: "2020",
      title: "Award Recognition",
      description: "Received State Award for Best Cooperative Credit Society for outstanding community service.",
      isLeft: true
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding digital services and planning new branches to serve 50,000+ members by 2030.",
      isLeft: false
    }
  ];

  const committeeMembers = [
    { name: "श्री. राजेश पाटील", role: "Chairman / अध्यक्ष" },
    { name: "श्रीमती. सुनीता शर्मा", role: "Vice Chairman / उपाध्यक्ष" },
    { name: "श्री. विकास गुप्ता", role: "Secretary / सचिव" },
    { name: "श्री. अमित देशमुख", role: "Treasurer / खजिनदार" },
    { name: "श्रीमती. प्रिया जोशी", role: "Director / संचालक" },
    { name: "श्री. संदीप कुमार", role: "Director / संचालक" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            About Us / <span className="font-marathi">आमच्याबद्दल</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            30 years of trusted service, connecting communities through cooperative banking
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="group hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-blue/10 rounded-full mr-4 group-hover:bg-primary-blue transition-colors">
                    <Target className="h-8 w-8 text-primary-blue group-hover:text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-blue">Our Mission / ध्येय</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide accessible, transparent, and member-centric financial services that empower our community members to achieve their financial goals while maintaining the highest standards of cooperative principles.
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="font-marathi text-primary-blue font-semibold">
                    "सभासदांच्या आर्थिक प्रगतीसाठी पारदर्शी आणि विश्वासार्ह सेवा प्रदान करणे"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gold/20 rounded-full mr-4 group-hover:bg-gold transition-colors">
                    <Eye className="h-8 w-8 text-gold group-hover:text-primary-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-blue">Our Vision / दृष्टिकोन</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading cooperative credit society in the region, known for innovation, integrity, and inclusive growth that transforms lives and strengthens communities.
                </p>
                <div className="mt-4 p-4 bg-gold/10 rounded-lg">
                  <p className="font-marathi text-primary-blue font-semibold">
                    "समाजातील आर्थिक समानता आणि प्रगतीचे अग्रगण्य केंद्र बनणे"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Our Journey / आमचा प्रवास
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three decades of growth, innovation, and community service
            </p>
          </div>

          <div className="relative">
            {/* Central line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gold h-full"></div>
            
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                isLeft={item.isLeft}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
              Our Leadership / नेतृत्व
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated individuals working tirelessly for our members' prosperity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <CommitteeMember 
                  name={member.name}
                  role={member.role}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Values / आमची मूल्य
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="mb-4 mx-auto w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cooperation</h3>
              <p className="text-sm opacity-90">सहकार्य</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="mb-4 mx-auto w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-primary-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Transparency</h3>
              <p className="text-sm opacity-90">पारदर्शकता</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="mb-4 mx-auto w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Integrity</h3>
              <p className="text-sm opacity-90">प्रामाणिकता</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="mb-4 mx-auto w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-sm opacity-90">उत्कृष्टता</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
