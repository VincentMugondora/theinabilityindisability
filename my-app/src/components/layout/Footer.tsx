import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary-700">TADS</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              The Ability in Disability Trust is committed to driving inclusion and empowering positive change.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-primary-600">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-primary-600">Our Programs</Link></li>
              <li><Link href="/stories" className="hover:text-primary-600">Impact Stories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/gallery" className="hover:text-primary-600">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-primary-600">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary-600">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Support Us</h4>
            <p className="text-sm text-gray-500 mb-4">Your contribution helps us make an immediate impact.</p>
            <Link href="/donate" className="inline-block bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition">
              Make a Donation
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} The Ability in Disability Trust. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="hover:text-gray-900 cursor-pointer">Privacy</span>
            <span className="hover:text-gray-900 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
