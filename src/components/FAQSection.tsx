"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  value: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Apakah ada masa uji coba gratis?",
    answer: "Ya, kami menawarkan uji coba gratis selama 14 hari untuk semua paket berbayar. Anda dapat mencoba semua fitur tanpa perlu memasukkan detail kartu kredit.",
    value: "item-1",
  },
  {
    question: "Bagaimana cara membatalkan langganan?",
    answer: "Anda dapat membatalkan langganan Anda kapan saja langsung dari dasbor akun Anda. Tidak ada kontrak jangka panjang atau biaya pembatalan tersembunyi.",
    value: "item-2",
  },
  {
    question: "Apakah data saya aman?",
    answer: "Keamanan data Anda adalah prioritas utama kami. Kami menggunakan enkripsi standar industri dan praktik terbaik untuk melindungi informasi Anda. Kami juga patuh terhadap regulasi privasi data yang berlaku.",
    value: "item-3",
  },
  {
    question: "Dukungan pelanggan seperti apa yang tersedia?",
    answer: "Tim dukungan kami siap membantu Anda melalui email dan live chat selama jam kerja. Pengguna paket Pro dan Enterprise juga mendapatkan dukungan prioritas dengan waktu respons yang lebih cepat.",
    value: "item-4",
  },
  {
    question: "Bisakah saya mengubah paket langganan nanti?",
    answer: "Tentu saja! Anda dapat dengan mudah meningkatkan atau menurunkan paket langganan Anda kapan saja sesuai dengan kebutuhan bisnis Anda yang berkembang. Perubahan akan berlaku pada siklus penagihan berikutnya.",
    value: "item-5",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-8 md:py-10 bg-white"> {/* Padding diubah */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"> 
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Temukan jawaban cepat untuk pertanyaan umum tentang layanan dan platform kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-50 p-6 sm:p-8 rounded-lg shadow-md">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border-b border-slate-200 last:border-b-0">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-blue-600 hover:no-underline py-4"> 
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 pt-1 pb-4"> 
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;