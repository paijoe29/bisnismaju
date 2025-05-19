"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DatabaseZap, UsersRound, AlertTriangle } from 'lucide-react';
import { cn } from "@/lib/utils"; // Import cn utility

interface PainPoint {
  icon: React.ElementType;
  title: string;
  description: string;
  isHighlighted?: boolean; // Tambahkan properti untuk penandaan
}

const painPoints: PainPoint[] = [
  {
    icon: Clock,
    title: "Proses Manual Lambat & Membosankan?",
    description: "Menghabiskan waktu berharga untuk tugas repetitif yang seharusnya bisa diotomatisasi.",
  },
  {
    icon: DatabaseZap,
    title: "Data Terfragmentasi & Sulit Dianalisis?",
    description: "Informasi penting tersebar di berbagai sistem, menghambat pengambilan keputusan strategis.",
  },
  {
    icon: UsersRound,
    title: "Kolaborasi Tim Tidak Efisien?",
    description: "Komunikasi yang buruk dan alur kerja yang tidak jelas seringkali mengurangi produktivitas tim.",
  },
  {
    icon: AlertTriangle,
    title: "Kesulitan Beradaptasi dengan Perubahan?",
    description: "Merasa tertinggal karena sulit mengikuti perkembangan teknologi dan tuntutan pasar yang dinamis.",
    isHighlighted: true, // Tandai kartu ini
  }
];

const ProblemPainPointsSection: React.FC = () => {
  return (
    <section className="py-8 md:py-10 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4"> 
            Apakah Bisnis Anda Menghadapi Ini?
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Kami memahami tantangan umum yang sering dihadapi bisnis modern. Mungkin beberapa poin ini relevan bagi Anda.
          </p>
        </div>

        <hr className="border-slate-300 my-8 md:my-10 max-w-lg mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <Card 
              key={index} 
              className={cn(
                "flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow",
                point.isHighlighted && "bg-rose-50 border-rose-200" // Kelas kondisional untuk background merah muda
              )}
            > 
              <CardHeader className="flex flex-row items-center space-x-4 pb-4 pt-6">
                <div 
                  className={cn(
                    "p-3 rounded-full",
                    point.isHighlighted ? "bg-rose-100" : "bg-blue-100" // Latar belakang ikon kondisional
                  )}
                > 
                  <point.icon 
                    className={cn(
                      "h-7 w-7",
                      point.isHighlighted ? "text-rose-600" : "text-blue-600" // Warna ikon kondisional
                    )} 
                  /> 
                </div>
                <CardTitle className="text-xl font-semibold text-slate-800">{point.title}</CardTitle> 
              </CardHeader>
              <CardContent className="pt-0">
                <p className={cn("text-slate-600", point.isHighlighted && "text-rose-900")}>{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemPainPointsSection;