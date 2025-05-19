"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChartHorizontalBig, Users, Cpu, ShieldCheck, Zap, LifeBuoy, Gauge } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const featuresData: Feature[] = [
  {
    icon: Cpu,
    title: "Otomatisasi Proses Cerdas",
    description: "Hemat waktu berharga, fokus pada inovasi. Biarkan sistem kami menangani tugas-tugas repetitif.",
  },
  {
    icon: BarChartHorizontalBig,
    title: "Dasbor Analitik Real-time",
    description: "Pantau kinerja bisnis Anda secara instan. Dapatkan wawasan mendalam dengan data terkini.",
  },
  {
    icon: Gauge, 
    title: "Performa Optimal Terukur",
    description: "Kami berdedikasi untuk menyediakan solusi dengan performa tinggi yang disesuaikan untuk kebutuhan Anda.",
    isHighlighted: true,
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Data Terjamin",
    description: "Data Anda aman bersama kami dengan enkripsi standar industri dan protokol keamanan terkini.",
  },
  {
    icon: Users,
    title: "Kolaborasi Tim Terintegrasi",
    description: "Tingkatkan produktivitas tim di mana saja. Komunikasi lancar, pembagian tugas mudah, dan semua orang tetap sinkron.",
  },
  {
    icon: LifeBuoy,
    title: "Dukungan & Backup Andal",
    description: "Tim kami siap membantu dan data Anda aman dengan backup rutin yang kami kelola.",
  }
];

const KeyFeaturesSection: React.FC = () => {
  return (
    <section className="py-8 md:py-10 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Keunggulan Layanan Kami
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Solusi terbaik untuk meningkatkan bisnis online Anda, dengan fitur terbaik dan keamanan yang dapat diandalkan.
          </p>
        </div>

        <hr className="border-slate-300 my-8 md:my-10 max-w-lg mx-auto" /> {/* Garis pemisah ditambahkan */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {featuresData.map((feature, index) => {
            if (feature.isHighlighted) {
              return (
                <Card key={index} className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 rounded-full inline-flex">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </Card>
              );
            }
            return (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;