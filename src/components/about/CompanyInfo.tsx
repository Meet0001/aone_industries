import React from 'react';
import { Calendar, MapPin, Phone, Mail } from 'lucide-react';

export function CompanyInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">A ONE INDUSTRIES</h2>
            <p className="text-xl text-gray-600">
              Established in 1998 with the aim to deliver best quality products to our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Calendar className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Established</h3>
                <p className="text-gray-600">1998</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-600">Saurashtra Region, Gujarat, India</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Contact</h3>
                <p className="text-gray-600">Mr. Deep Gor - 9408736514</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">aoneind1248@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}