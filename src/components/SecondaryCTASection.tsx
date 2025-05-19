"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const SecondaryCTASection: React.FC = () => {
  return (
    <section className="py-8 md:py-10 bg-slate-100"> {/* Padding diubah */}
      <div className="container mx-auto px-4 text-center">
        <Sparkles className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900"> 
          Siap Mengoptimalkan Bisnis Anda?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-slate-700">
          Jangan lewatkan kesempatan untuk meningkatkan efisiensi dan mencapai target Anda. Coba platform kami gratis selama 14 hari!
        </p>
        <Button 
          size="lg" 
          variant="default" 
          className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-3 text-lg group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Mulai Uji Coba Gratis
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
        <p className="mt-6 text-sm text-slate-600">
          Ada pertanyaan? <a href="/contact" className="font-semibold hover:underline text-blue-700">Hubungi tim kami</a>.
        </p>
      </div>
    </section>
  );
};

export default SecondaryCTASection;