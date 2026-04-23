function PartnerBadge({
  label,
  variant = 'ring',
}: {
  label: string;
  variant?: 'ring' | 'crest' | 'diamond';
}) {
  const icon = {
    ring: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 12h3M17.5 12h3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    ),
    crest: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4c2 2 4.5 3 7 3v4c0 4.2-2.4 7-7 9-4.6-2-7-4.8-7-9V7c2.5 0 5-1 7-3Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path d="M9.5 12h5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    ),
    diamond: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m12 4 7 8-7 8-7-8 7-8Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    ),
  }[variant];

  return (
    <div className="flex items-center gap-2 text-white/58">
      <span>{icon}</span>
      <span className="text-[13px] font-semibold tracking-[-0.01em]">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a0907]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(10, 9, 7, 0.86) 0%, rgba(10, 9, 7, 0.68) 26%, rgba(10, 9, 7, 0.38) 54%, rgba(10, 9, 7, 0.16) 100%), url('https://images.pexels.com/photos/2102935/pexels-photo-2102935.jpeg?cs=srgb&dl=pexels-ankush2626-2102935.jpg&fm=jpg')",
          backgroundPosition: 'center center',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 24%, rgba(0,0,0,0.08) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-50px)] w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-start py-16 sm:py-20 lg:py-24">
          <div className="max-w-[780px]">
            <h1 className="max-w-[760px] text-[2.7rem] font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-[3.4rem] lg:text-[4.1rem]">
              Unlock Advanced Resources And AI-Driven Opportunities To Transform Futures.
            </h1>

            <p className="mt-8 max-w-[520px] text-sm leading-7 text-white/68 sm:text-[15px]">
              Libero mauris sed sed proin. Blandit aliquet ipsum faucibus dictum natoque arcu.
              Potenti ante sed in amet massa aliquet. Enim dui urna mauris volutpat
            </p>

            <div className="mt-12 flex flex-col gap-5 text-white sm:flex-row sm:flex-wrap sm:items-center sm:gap-10">
              <div className="flex items-baseline gap-3">
                <span className="text-[2rem] font-black leading-none tracking-[-0.05em] text-[#ff8a1c]">
                  $1 284 528
                </span>
                <span className="text-sm text-white/82">Donation</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-[2rem] font-black leading-none tracking-[-0.05em] text-[#ff8a1c]">
                  12 460
                </span>
                <span className="max-w-[220px] text-sm text-white/82">
                  Women Placed In STEM Careers
                </span>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-5">
              <PartnerBadge label="logoipsum" variant="ring" />
              <PartnerBadge label="HYPER BYTE" variant="crest" />
              <PartnerBadge label="logoipsum" variant="ring" />
              <PartnerBadge label="Logoipsum" variant="diamond" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
