"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import AutomationAnimation from './AutomationAnimation'; 
import { Play, Award, Briefcase } from 'lucide-react';

const placeholderLogos = [
  { name: "TechCorp", icon: Briefcase },
  { name: "Innovate Ltd.", icon: Briefcase },
  { name: "Global Solutions", icon: Briefcase },
  { name: "NextGen Inc.", icon: Briefcase },
  { name: "Future Systems", icon: Briefcase },
  { name: "Alpha Co", icon: Briefcase },
];

const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-600 py-16 md:py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Main Hero Content (Text Left, Animation Right) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-20">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-blue-200 mb-4">
              <Award className="h-5 w-5 text-yellow-400" />
              <span>Backed by Our Awesome Incubator</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Solusi Bisnis yang Bukan Sekadar Alat
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-xl mx-auto md:mx-0">
              Kami hadir bukan untuk sekadar membantu—tapi mempercepat transformasi. Tingkatkan efisiensi, potong beban kerja, dan fokus pada hal yang benar-benar penting: pertumbuhan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 px-8 py-3 text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" /* Warna font hitam, tidak bold */
              >
                Minta Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-yellow-400 text-slate-900 hover:bg-yellow-400 hover:text-blue-700 font-bold px-8 py-3 text-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Lihat Demo
              </Button>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <div className="bg-white/10 p-4 rounded-xl shadow-2xl w-full max-w-md h-64 md:h-72 relative border border-blue-500/50"> 
              <AutomationAnimation />
            </div>
          </div>
        </div>

        {/* Trusted by & Logos Section (Centered Below Main Hero) */}
        <div className="text-center">
          <p className="text-sm text-blue-200 mb-6">
            Dipercaya oleh 1.000+ bisnis dan 10.000+ pemilik toko seperti
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
            {placeholderLogos.map((logo, index) => (
              <div key={index} className="flex items-center opacity-70 hover:opacity-100 transition-opacity" title={logo.name}>
                <logo.icon className="h-7 w-7 text-blue-100" />
                <span className="ml-2 text-sm font-medium text-blue-100">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;