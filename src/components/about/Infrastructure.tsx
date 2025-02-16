import React from 'react';
import { Factory, Shield, Cog, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Factory,
    title: "Cutting-edge Technology",
    description: "State-of-the-art equipment to guarantee top quality products"
  },
  {
    icon: Shield,
    title: "ISO 22000:2018 Certified",
    description: "Complying with stringent food safety regulations"
  },
  {
    icon: Cog,
    title: "Efficient Processing",
    description: "Fully automatic production with skilled manpower"
  }
];

export function Infrastructure() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6">Infrastructure</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our plant is one of the largest peanut processing facilities in Saurashtra Region, 
              with a daily production capacity of over 50 Metric Tonne, covering 4500 Sq. meter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="../../../../../images/manufacturingPlant.png" 
                alt="Manufacturing Plant"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Modern Facility</h3>
                <p>4500 Sq. meter processing plant</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="../../../../../images/equipment.png" 
                alt="Processing Equipment"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Advanced Equipment</h3>
                <p>Automated processing systems</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="../../../../../images/storage.png" 
                alt="Storage Facility"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Prime Storage</h3>
                <p>Spacious, clean and securely maintained</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="../../../../../images/machinary.png" 
                alt="Grading Machinary"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Precision Sorting</h3>
                <p>Consistent color, grade, and superior quality.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6">Processing Capabilities</h3>
            <p className="text-gray-600 mb-6">
              The raw material undergoes thorough cleaning, sorting, and grading as per requirements. 
              Our facility combines fully automatic production machines with skilled manpower to 
              enhance production efficiency.
            </p>
            <ul className="space-y-4">
              {[
                "Cutting-edge technology to guarantee top quality",
                "Rigorous hygiene standards maintained",
                "Efficient coordination of all processes"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}