"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, BarChartBig, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

interface SolutionPoint {
  icon: React.ElementType;
  title: string;
  description: string;
}

const solutionPoints: SolutionPoint[] = [
  {
    icon: Zap,
    title: "Otomatisasi Cerdas, Efisiensi Maksimal",
    description: "Ucapkan selamat tinggal pada tugas manual yang memakan waktu. Platform kami mengotomatiskan proses inti, membebaskan tim Anda untuk fokus pada inovasi dan pertumbuhan.",
  },
  {
    icon: BarChartBig,
    title: "Data Terpusat, Keputusan Tepat Sasaran",
    description: "Satukan semua data penting Anda dalam satu dasbor intuitif. Dapatkan wawasan mendalam secara real-time untuk pengambilan keputusan yang lebih cerdas dan cepat.",
  },
  {
    icon: Users,
    title: "Kolaborasi Tim Tanpa Batas",
    description: "Fasilitasi kerja tim yang mulus dan produktif, di mana pun mereka berada. Alat kolaborasi kami memastikan semua orang tetap sinkron dan proyek berjalan lancar.",
  },
  {
    icon: TrendingUp,
    title: "Adaptif & Skalabel untuk Masa Depan",
    description: "Solusi kami dirancang untuk tumbuh bersama bisnis Anda. Fleksibel, dapat disesuaikan, dan siap menghadapi tantangan pasar yang terus berubah.",
  }
];

const SolutionSection: React.FC = () => {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12"> {/* Adjusted margin bottom */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4"> 
            Solusi Kami: Mengubah Tantangan Anda Menjadi Peluang
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto"> 
            Kami tidak hanya mengidentifikasi masalah, kami menyediakan solusi konkret yang dirancang untuk memberdayakan bisnis Anda dan mendorong kesuksesan.
          </p>
        </div>

        <hr className="border-slate-300 my-8 md:my-10 max-w-lg mx-auto" /> {/* Garis pemisah ditambahkan */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {solutionPoints.map((point, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader className="bg-blue-600 text-white p-6">
                <div className="flex items-center space-x-4">
                  <point.icon className="h-10 w-10" />
                  <CardTitle className="text-2xl font-semibold">{point.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-600 text-base">{point.description}</p>
                <div className="mt-4 flex items-center text-green-600">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  <span className="text-sm">Solusi Terbukti Efektif</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;