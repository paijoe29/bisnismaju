"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  ctaVariant?: "default" | "outline"; 
}

const tiers: PricingTier[] = [
  {
    name: "Basic",
    price: "Rp 150rb",
    priceSuffix: "/bln",
    description: "Untuk individu atau tim kecil yang baru memulai.",
    features: [
      "Akses fitur inti",
      "Hingga 5 pengguna",
      "Dukungan komunitas",
      "Analitik dasar",
    ],
    ctaText: "Mulai Gratis",
    ctaVariant: "outline",
  },
  {
    name: "Pro",
    price: "Rp 450rb",
    priceSuffix: "/bln",
    description: "Untuk tim berkembang yang butuh lebih banyak fitur.",
    features: [
      "Semua fitur Basic",
      "Hingga 20 pengguna",
      "Dukungan prioritas",
      "Analitik lanjutan",
      "Integrasi pihak ketiga",
    ],
    ctaText: "Pilih Pro",
    isPopular: true,
    ctaVariant: "default",
  },
  {
    name: "Enterprise",
    price: "Kustom",
    description: "Untuk organisasi besar dengan kebutuhan spesifik.",
    features: [
      "Semua fitur Pro",
      "Pengguna tak terbatas",
      "Dukungan khusus (SLA)",
      "Keamanan tingkat lanjut",
      "Pelatihan & onboarding",
    ],
    ctaText: "Hubungi Sales",
    ctaVariant: "outline",
  },
];

const getButtonClasses = (tier: PricingTier) => {
  if (tier.isPopular) {
    return "bg-blue-600 hover:bg-blue-700 text-white shadow-md";
  }
  if (tier.ctaVariant === "outline") {
    return "border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700";
  }
  return "bg-blue-500 hover:bg-blue-600 text-white shadow-sm";
};

const PricingSection: React.FC = () => {
  return (
    <section className="py-8 md:py-10 bg-slate-100"> {/* Padding diubah */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Pilihan Paket Fleksibel untuk Anda
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Pilih paket yang paling sesuai dengan kebutuhan Anda. <span className="font-semibold text-blue-600">Uji coba gratis 14 hari</span> untuk semua paket berbayar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <Card 
              key={tier.name} 
              className={`flex flex-col bg-white ${tier.isPopular ? 'border-2 border-blue-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-lg'}`}
            >
              <CardHeader className={`pb-4 ${tier.isPopular ? 'bg-blue-50' : ''}`}>
                {tier.isPopular && (
                  <div className="text-xs uppercase font-bold text-blue-600 mb-1 tracking-wider">Paling Populer</div>
                )}
                <CardTitle className="text-2xl font-semibold text-slate-800">{tier.name}</CardTitle>
                <CardDescription className="text-sm text-slate-600 h-10">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-2">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                  {tier.priceSuffix && <span className="text-slate-500 text-sm">{tier.priceSuffix}</span>}
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-6">
                <Button 
                  className={`w-full ${getButtonClasses(tier)}`}
                  size="lg" 
                  variant={tier.ctaVariant === "outline" ? "outline" : "default"}
                >
                  {tier.ctaText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-center text-slate-600 mt-12">
          Butuh solusi yang lebih spesifik? <a href="/contact" className="text-blue-600 hover:underline font-medium">Hubungi tim penjualan kami</a>.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;