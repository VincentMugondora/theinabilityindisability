import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-24 px-4 bg-primary-600 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 rounded-full bg-primary-500 opacity-50 mix-blend-multiply" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-64 h-64 rounded-full bg-primary-700 opacity-50 mix-blend-multiply" aria-hidden="true" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-primary-100 mb-10 text-balance max-w-2xl mx-auto">
          Join us in breaking down barriers. Whether through volunteering, partnering, or donating, your involvement builds a more inclusive Zimbabwe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-3.5 bg-accent-500 text-white font-bold rounded-full hover:bg-accent-600 hover:shadow-lg transition-all focus:ring-4 focus:ring-accent-200 outline-none shadow-md"
          >
            Get in Touch
          </Link>
          <Link 
            href="/about" 
            className="w-full sm:w-auto px-8 py-3.5 bg-primary-700 text-white font-semibold rounded-full border border-primary-500 hover:bg-primary-800 transition-all focus:ring-4 focus:ring-primary-500 outline-none shadow-sm"
          >
            Learn Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
