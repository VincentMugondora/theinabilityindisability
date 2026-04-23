import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary-700 tracking-tight">TADS</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">About</Link>
          <Link href="/programs" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Programs</Link>
          <Link href="/stories" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Stories</Link>
          <Link href="/gallery" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Gallery</Link>
          <Link href="/faq" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">FAQ</Link>
          <div className="flex items-center space-x-4 ml-4">
            <Link href="/contact" className="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors">Contact</Link>
            <Link href="/donate" className="text-sm font-medium bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors shadow-sm">
              Donate
            </Link>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden p-2 text-gray-600" aria-label="Toggle menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
