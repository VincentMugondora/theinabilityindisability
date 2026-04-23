"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.4 13.1c3-1.9 7.6-4.2 15.1-5.7.7-.1 1.2.6.8 1.2-1.7 2.4-4.6 4.1-8.6 5l-1.5 4.1c-.2.5-.9.7-1.4.3l-1.8-1.5-2.1.1c-.8 0-1.2-1-.5-1.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d="M8.2 14.5c2-2.2 5.8-4.6 11.2-6.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'Resources', href: '/resources' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#070707]/95 backdrop-blur">
      <div className="relative mx-auto flex h-[50px] w-full max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1.5 text-white transition-opacity hover:opacity-80"
        >
          <LogoMark className="h-[13px] w-[13px] text-white/95" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.11em] text-white sm:text-[11px]">
            EmpowerNext
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-10">
          {links.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] leading-none transition-colors ${
                  isActive
                    ? 'font-semibold text-white'
                    : 'font-medium text-white/55 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="hidden h-8 min-w-[118px] items-center justify-center rounded-[10px] bg-[#ff8a1c] px-6 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#f27e0d] md:inline-flex"
          >
            Donate
          </Link>

          <button
            className="rounded-md p-2 text-white/70 transition-colors hover:text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute inset-x-0 top-full border-t border-white/10 bg-[#070707] shadow-2xl md:hidden">
          <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-white/10 font-semibold text-white'
                      : 'font-medium text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex h-10 items-center justify-center rounded-[10px] bg-[#ff8a1c] px-5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#f27e0d]"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
