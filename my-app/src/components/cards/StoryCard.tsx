interface StoryCardProps {
  quote: string;
  name: string;
  role: string;
}

export default function StoryCard({ quote, name, role }: StoryCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative pt-12">
      <div className="absolute top-0 right-8 -mt-6">
        <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center text-accent-500 shadow-sm border border-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
      <p className="text-gray-600 italic mb-6 leading-relaxed">
        "{quote}"
      </p>
      <div>
        <div className="font-bold text-gray-900">{name}</div>
        <div className="text-sm text-gray-500 font-medium">{role}</div>
      </div>
    </div>
  );
}
