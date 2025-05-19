"use client";

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const NewsletterSignupSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email disubmit:", e.currentTarget.email.value);
    alert("Terima kasih telah mendaftar!");
    e.currentTarget.reset();
  };

  return (
    <section className="py-8 md:py-10 bg-blue-700"> {/* Padding diubah */}
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dapatkan Update & Penawaran Eksklusif!
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Daftarkan email Anda untuk mendapatkan berita terbaru, tips bermanfaat, dan promo spesial langsung ke kotak masuk Anda.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              name="email"
              placeholder="Alamat email Anda"
              required
              className="flex-grow text-base bg-blue-600 border-blue-500 text-white placeholder-blue-200 focus:ring-yellow-400 focus:border-yellow-400"
              aria-label="Alamat Email"
            />
            <Button 
              type="submit" 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold sm:w-auto shadow-md"
            >
              Daftar Sekarang
            </Button>
          </form>
          <p className="text-xs text-blue-200 mt-4">
            Kami menghargai privasi Anda. Tidak ada spam!
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignupSection;