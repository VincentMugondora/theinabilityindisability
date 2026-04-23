export default function TrustIndicators() {
  return (
    <section className="py-16 px-4 bg-white border-b border-gray-100 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center bg-white shadow-trust-lg rounded-2xl p-8 -mt-24 md:-mt-28 border border-slate-50">
          <div className="p-4 rounded-xl transition-transform hover:-translate-y-1 hover:shadow-trust duration-300">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-600 mb-2">500+</div>
            <div className="text-sm md:text-base font-medium font-sans text-gray-500 uppercase tracking-wide">Lives Touched</div>
          </div>
          <div className="p-4 rounded-xl transition-transform hover:-translate-y-1 hover:shadow-trust duration-300">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-600 mb-2">20+</div>
            <div className="text-sm md:text-base font-medium font-sans text-gray-500 uppercase tracking-wide">Communities</div>
          </div>
          <div className="p-4 rounded-xl transition-transform hover:-translate-y-1 hover:shadow-trust duration-300">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-600 mb-2">10</div>
            <div className="text-sm md:text-base font-medium font-sans text-gray-500 uppercase tracking-wide">Core Programs</div>
          </div>
          <div className="p-4 rounded-xl transition-transform hover:-translate-y-1 hover:shadow-trust duration-300">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-600 mb-2">100%</div>
            <div className="text-sm md:text-base font-medium font-sans text-gray-500 uppercase tracking-wide">Inclusive Space</div>
          </div>
        </div>
      </div>
    </section>
  );
}
