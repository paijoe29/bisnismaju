"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  const footerLinks = [
    { name: "Ketentuan Layanan", href: "/terms-of-service" },
    { name: "Kebijakan Privasi", href: "/privacy-policy" },
    { name: "Hubungi Kami", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">MyLogo</span>
            </Link>
            <p className="text-sm max-w-xs">
              Solusi inovatif untuk membantu bisnis Anda tumbuh dan berkembang di era digital.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold text-white mb-4 uppercase tracking-wider">Tautan Cepat</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-blue-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Placeholder for another column if needed, e.g., Resources */}
          <div>
            <h3 className="text-md font-semibold text-white mb-4 uppercase tracking-wider">Sumber Daya</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-blue-400 text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/support" className="hover:text-blue-400 text-sm transition-colors">Dukungan</Link></li>
              <li><Link to="/api-docs" className="hover:text-blue-400 text-sm transition-colors">API</Link></li>
            </ul>
          </div>


          {/* Social Media & Contact */}
          <div>
            <h3 className="text-md font-semibold text-white mb-4 uppercase tracking-wider">Ikuti Kami</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:text-yellow-400 transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="text-sm">Email: <a href="mailto:info@mylogo.com" className="hover:text-blue-400">info@mylogo.com</a></p>
            <p className="text-sm">Telepon: <a href="tel:+62211234567" className="hover:text-blue-400">(021) 123-4567</a></p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 mt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} MyLogo. All rights reserved. Dibuat dengan <span className="text-yellow-400">&hearts;</span> Ori Fin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;