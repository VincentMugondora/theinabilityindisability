import Link from 'next/link';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export default function ProgramCard({ title, description, icon, href }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-trust transition-all duration-300 hover:shadow-trust-lg hover:-translate-y-1 border border-slate-100 flex flex-col h-full group">
      <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <Link 
        href={href}
        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors mt-auto"
      >
        Learn more
        <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
}
