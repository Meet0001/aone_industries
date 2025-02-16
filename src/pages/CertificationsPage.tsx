import React from 'react';
import { Shield, Award, Globe } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    name: 'ISO 22000 Certification',
    image: '/images/certificates/iso.png',
    description: 'Our ISO 22000 certification demonstrates our commitment to maintaining international food safety management standards. This certification ensures that our food safety management system meets rigorous international requirements, guaranteeing the highest levels of food safety throughout our production process.',
    benefits: [
      'International recognition of food safety standards',
      'Systematic management of prerequisite programs',
      'Enhanced food safety control',
      'Continuous improvement in food safety practices'
    ]
  },
  {
    icon: Award,
    name: 'FSSAI Certification',
    image: '/images/certificates/fssai.png',
    description: 'As a FSSAI certified organization, we adhere to the strict food safety standards set by the Food Safety and Standards Authority of India. This certification validates our commitment to producing safe, high-quality food products that meet all regulatory requirements.',
    benefits: [
      'Compliance with Indian food safety regulations',
      'Quality assurance for consumers',
      'Standardized food safety practices',
      'Regular quality monitoring and testing'
    ]
  },
  {
    icon: Globe,
    name: 'APEDA Registration',
    image: '/images/certificates/apeda.png',
    description: 'Our APEDA registration empowers us to excel in the export market, following comprehensive guidelines for international trade. This registration enhances our brand visibility and ensures compliance with export standards across different countries.',
    benefits: [
      'Access to export promotion benefits',
      'International market compliance',
      'Enhanced brand credibility',
      'Support for export documentation'
    ]
  }
];

export function CertificationsPage() {
  return (
    <div className="pt-20">
      <div className="relative py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl font-bold text-white mb-4">Our Certifications</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We maintain the highest standards of food safety and quality through internationally recognized certifications
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-64 bg-gray-100">
                <img
                  src={cert.image}
                  alt={`${cert.name} Certificate`}
                  className="w-full h-full object-contain p-6"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <cert.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{cert.name}</h2>
                </div>
                
                <p className="text-gray-600 mb-6 flex-1">
                  {cert.description}
                </p>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                  <ul className="grid gap-2">
                    {cert.benefits.map((benefit, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}