"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Handshake } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'Resources', href: '/resources' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] border-b border-gray-800">
      <div className="container mx-auto px-4 lg:px-8 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity">
          <Handshake className="w-6 h-6" />
          <span className="text-lg md:text-xl font-bold tracking-tight uppercase">EmpowerNext</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-[15px] transition-colors ${
                  isActive 
                    ? 'text-white font-bold' 
                    : 'text-gray-400 hover:text-white font-medium'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/donate" 
            className="hidden md:inline-flex items-center justify-center bg-[#ff8a00] hover:bg-[#e67c00] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-colors uppercase tracking-wider"
          >
            Donate
          </Link>
          
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors" 
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800 absolute w-full">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-5">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={`text-base transition-colors ${
                    isActive 
                      ? 'text-white font-bold' 
                      : 'text-gray-400 hover:text-white font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              href="/donate" 
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center bg-[#ff8a00] hover:bg-[#e67c00] text-white text-base font-bold px-6 py-3 rounded-full transition-colors uppercase tracking-wider mt-4 w-full"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
