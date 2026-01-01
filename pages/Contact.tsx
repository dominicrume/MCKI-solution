import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
       <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-mcki-blue mb-8 text-center">Get in Touch</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
             <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Phone className="w-8 h-8 text-mcki-gold mx-auto mb-3" />
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-mcki-muted text-sm">+44 20 1234 5678</p>
             </div>
             <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Mail className="w-8 h-8 text-mcki-gold mx-auto mb-3" />
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-mcki-muted text-sm">admissions@mcki.com</p>
             </div>
             <div className="text-center p-6 bg-blue-50 rounded-lg">
                <MapPin className="w-8 h-8 text-mcki-gold mx-auto mb-3" />
                <h3 className="font-bold mb-1">Office</h3>
                <p className="text-mcki-muted text-sm">123 Education Lane, London</p>
             </div>
          </div>

          <div className="bg-mcki-grey p-8 rounded-xl">
             <h2 className="text-xl font-bold text-mcki-blue mb-6">Send us a message</h2>
             <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                   <input placeholder="Name" className="w-full p-3 rounded-md border border-gray-300" />
                   <input placeholder="Phone" className="w-full p-3 rounded-md border border-gray-300" />
                </div>
                <input placeholder="Email" className="w-full p-3 rounded-md border border-gray-300" />
                <textarea placeholder="How can we help?" rows={4} className="w-full p-3 rounded-md border border-gray-300"></textarea>
                <button className="bg-mcki-blue text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors">Send Message</button>
             </form>
          </div>
       </div>
    </div>
  );
};