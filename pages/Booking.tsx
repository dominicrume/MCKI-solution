import React from 'react';
import { Calendar } from 'lucide-react';

export const Booking: React.FC = () => {
  return (
    <div className="min-h-screen bg-mcki-grey py-12 px-4">
       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-mcki-blue p-6 text-white text-center">
             <Calendar className="w-12 h-12 mx-auto mb-4 text-mcki-gold" />
             <h1 className="text-2xl font-heading font-bold">Book a Free Consultation</h1>
             <p className="text-blue-200">Select a time that works for you. We'll send a confirmation via WhatsApp and Email.</p>
          </div>
          <div className="p-8 h-[600px] flex items-center justify-center bg-gray-50">
             {/* Placeholder for Calendly/Cal.com embed */}
             <div className="text-center">
                <p className="text-mcki-muted mb-4">Calendar Widget Loading...</p>
                <div className="w-16 h-16 border-4 border-mcki-gold border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-xs text-gray-400 mt-4">(Integration would be embedded here in production)</p>
             </div>
          </div>
       </div>
    </div>
  );
};