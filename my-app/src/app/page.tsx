import Link from 'next/link';

export default function page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight text-balance mx-auto">
            Empowering Abilities, <br className="hidden md:block" /> Enriching Communities
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance">
            The Ability in Disability Trust (TADS) works to create inclusive environments where everyone has the opportunity to thrive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/programs" className="w-full sm:w-auto px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition">
              Explore Programs
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-3 bg-white text-gray-900 font-medium border border-gray-200 rounded-md hover:border-gray-300 hover:bg-gray-50 transition">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-white border-b border-gray-100">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-500">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-sm">Lives Touched</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
            <div className="text-sm">Communities</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">10</div>
            <div className="text-sm">Core Programs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-sm">Inclusive Commitment</div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-balance">
            We believe that disability is not inability. Our mission is to break down barriers and build up individuals through compassionate support, practical skills training, and community advocacy. We partner with local communities in Zimbabwe to ensure that inclusive development is at the heart of society.
          </p>
        </div>
      </section>
    </div>
  );
}
