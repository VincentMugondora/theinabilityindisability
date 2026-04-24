import { Users, Globe2, Shapes, HeartHandshake } from 'lucide-react';

export default function TrustIndicators() {
  const metrics = [
    {
      value: "500+",
      label: "Lives Touched",
      icon: <Users className="w-6 h-6 text-blue-500" />,
      bg: "bg-blue-50/50 hover:bg-blue-50",
      border: "border-blue-100/50"
    },
    {
      value: "20+",
      label: "Communities",
      icon: <Globe2 className="w-6 h-6 text-emerald-500" />,
      bg: "bg-emerald-50/50 hover:bg-emerald-50",
      border: "border-emerald-100/50"
    },
    {
      value: "10",
      label: "Core Programs",
      icon: <Shapes className="w-6 h-6 text-purple-500" />,
      bg: "bg-purple-50/50 hover:bg-purple-50",
      border: "border-purple-100/50"
    },
    {
      value: "100%",
      label: "Inclusive Space",
      icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
      bg: "bg-rose-50/50 hover:bg-rose-50",
      border: "border-rose-100/50"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white/50 backdrop-blur-sm border-b border-gray-100 relative z-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] rounded-3xl p-6 md:p-8 -mt-24 md:-mt-32 border border-gray-100/50">
          {metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200/50 group ${metric.bg} border ${metric.border}`}
            >
              <div className="p-3 bg-white rounded-2xl shadow-sm shadow-gray-200/50 mb-4 group-hover:scale-110 transition-transform duration-500 ring-1 ring-gray-100">
                {metric.icon}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2 tracking-tight group-hover:scale-105 transition-transform duration-500">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest text-center mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
