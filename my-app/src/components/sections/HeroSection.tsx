import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-primary-50 py-20 px-4 overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-100 opacity-50 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent-100 opacity-50 blur-3xl" aria-hidden="true" />

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight text-balance mx-auto drop-shadow-sm">
          Empowering Abilities, <br className="hidden md:block" /> Enriching Communities
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto text-balance font-medium">
          The Ability in Disability Trust (TADS) works to create inclusive environments where everyone has the opportunity to thrive through sustainable support and vocational skills.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            href="/programs" 
            className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 hover:shadow-lg transition-all focus:ring-4 focus:ring-primary-200 outline-none shadow-md"
          >
            Explore Programs
          </Link>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-primary-900 font-semibold border-2 border-primary-100 rounded-full hover:border-primary-300 hover:bg-primary-50 transition-all focus:ring-4 focus:ring-primary-100 outline-none shadow-sm"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
