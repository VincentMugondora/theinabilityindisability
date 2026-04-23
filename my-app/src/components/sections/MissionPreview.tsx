export default function MissionPreview() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-block px-3 py-1 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
          Our Purpose
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Disability is <span className="text-primary-600 relative inline-block">Not <span className="absolute bottom-1 left-0 w-full h-1 bg-primary-200"></span></span> Inability
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-balance">
          We are dedicated to breaking down systemic barriers and building up individuals through compassionate support, practical vocational skills training, and fierce community advocacy. TADS partners with local communities in Zimbabwe to ensure that inclusive development is at the heart of our shared society.
        </p>
      </div>
    </section>
  );
}
