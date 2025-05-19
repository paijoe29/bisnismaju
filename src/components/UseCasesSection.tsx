"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, Store, Rocket, Lightbulb } from 'lucide-react';

interface UseCase {
  icon: React.ElementType;
  title: string;
  description: string;
}

const useCases: UseCase[] = [
  {
    icon: UserCheck,
    title: "Freelancer & Profesional Independen",
    description: "Kelola proyek, klien, dan keuangan Anda dengan mudah. Fokus pada keahlian Anda, kami urus sisanya.",
  },
  {
    icon: Store,
    title: "UMKM & Bisnis Berkembang",
    description: "Otomatiskan operasional, tingkatkan efisiensi, dan jangkau lebih banyak pelanggan tanpa kompleksitas.",
  },
  {
    icon: Rocket,
    title: "Tim & Startup Inovatif",
    description: "Kolaborasi tanpa batas, percepat siklus pengembangan, dan skalakan operasi Anda dengan platform yang fleksibel.",
  },
  {
    icon: Lightbulb,
    title: "Kreator & Pengembang Produk",
    description: "Wujudkan ide-ide brilian Anda dengan alat yang mendukung kreativitas dan manajemen proyek yang efisien.",
  }
];

const UseCasesSection: React.FC = () => {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dirancang Khusus Untuk Kebutuhan Anda
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Baik Anda seorang profesional independen, pemilik bisnis kecil, atau bagian dari tim yang berkembang pesat, solusi kami dapat disesuaikan.
          </p>
        </div>

        <hr className="border-slate-300 my-8 md:my-10 max-w-lg mx-auto" /> {/* Garis pemisah ditambahkan */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="flex flex-col hover:shadow-xl transition-shadow duration-300 bg-white border border-slate-200 rounded-lg"
            >
              <CardHeader className="pb-4 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex"> 
                    <useCase.icon className="h-8 w-8 text-blue-600" /> 
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800 leading-tight">{useCase.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-slate-600 text-sm">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;