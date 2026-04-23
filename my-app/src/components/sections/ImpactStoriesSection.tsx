import StoryCard from '../cards/StoryCard';

export default function ImpactStoriesSection() {
  const stories = [
    {
      quote: "Before joining the TADS vocational program, I struggled to find employers who saw my potential. Now, I run my own small carpentry workshop and support my family.",
      name: "Tinashe Ndlovu",
      role: "Vocational Program Graduate"
    },
    {
      quote: "The wheelchair provided by the medical support team completely changed my life. I can now commute to school independently and participate in community events.",
      name: "Grace Mutasa",
      role: "Community Member"
    },
    {
      quote: "TADS doesn't just offer charity; they offer empowerment. Their training equipped our entire village with the tools to build a truly inclusive environment.",
      name: "Sekuru Moyo",
      role: "Community Leader"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Voices of Impact</h2>
          <p className="text-lg text-gray-600">
            Hear directly from the individuals and communities whose lives have been transformed through our inclusive initiatives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <StoryCard key={idx} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
}
