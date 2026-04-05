"use client";

import Image from "next/image";

type PhilosophySectionProps = {
  eyebrow: string;
  title: string;
  lines: string[];
};

export function PhilosophySection({ eyebrow, title, lines }: PhilosophySectionProps) {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-[#E7DCCC] py-24 sm:py-28 lg:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 14% 16%, rgba(255,248,236,0.62), rgba(255,248,236,0.16) 22%, rgba(0,0,0,0) 48%), radial-gradient(circle at 82% 20%, rgba(255,255,255,0.34), rgba(255,255,255,0.08) 18%, rgba(0,0,0,0) 44%), linear-gradient(180deg, #efe5d7 0%, #e7dccc 46%, #ddd1bf 100%)"
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[8%] top-[-12%] hidden h-[60%] w-[58%] rotate-[8deg] lg:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,249,240,0.38), rgba(255,249,240,0.08) 36%, rgba(153,129,90,0.07) 100%)",
          filter: "blur(4px)"
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[10%] bottom-[-18%] hidden h-[54%] w-[62%] -rotate-[9deg] lg:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,247,236,0.14), rgba(255,247,236,0.02) 34%, rgba(86,69,48,0.07) 100%)",
          filter: "blur(6px)"
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(20,20,23,0.05),rgba(20,20,23,0))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 16%, rgba(72,57,38,0.04) 100%), radial-gradient(circle at 72% 42%, rgba(255,255,255,0.24), rgba(255,255,255,0.08) 18%, rgba(0,0,0,0) 44%), radial-gradient(circle at 78% 56%, rgba(255,255,255,0.18), rgba(255,255,255,0.04) 22%, rgba(0,0,0,0) 48%), radial-gradient(circle at 28% 62%, rgba(255,255,255,0.16), rgba(255,255,255,0.03) 20%, rgba(0,0,0,0) 42%)"
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[46%]"
        style={{
          background:
            "linear-gradient(90deg, rgba(122,96,60,0.16) 0%, rgba(122,96,60,0.09) 34%, rgba(122,96,60,0.03) 62%, rgba(122,96,60,0) 100%)",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.98) 18%, rgba(0,0,0,0.98) 82%, rgba(0,0,0,0.82) 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.98) 18%, rgba(0,0,0,0.98) 82%, rgba(0,0,0,0.82) 100%)"
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-[10%] left-[4%] w-[28%]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,248,236,0.2), rgba(255,248,236,0.05) 58%, rgba(255,248,236,0) 100%)",
          filter: "blur(20px)",
          opacity: 0.7
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-[12%] right-[10%] hidden w-px bg-[linear-gradient(180deg,rgba(199,174,105,0),rgba(199,174,105,0.26),rgba(199,174,105,0))] lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-[10%] right-[8%] hidden w-[34%] lg:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 36%, rgba(120,95,62,0.06) 100%)",
          filter: "blur(8px)",
          opacity: 0.8
        }}
        aria-hidden
      />
      <div className="w-full px-7 sm:px-8 lg:grid lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.12fr)] lg:items-center lg:gap-20 lg:px-[clamp(56px,5.5vw,104px)]">
        <div className="max-w-2xl">
          <p className="dao-reveal text-[0.64rem] uppercase tracking-[0.24em] text-[#141417]/45">
            {eyebrow}
          </p>

          <h2 className="dao-reveal dao-delay-1 mt-7 max-w-[14ch] font-serif text-[2rem] font-light leading-[1.04] tracking-[0.01em] text-[#141417] sm:text-[2.45rem] lg:text-[3.05rem]">
            {title}
          </h2>

          <div className="dao-reveal dao-delay-2 mt-9 h-px w-16 bg-[#C7AE69]/55" aria-hidden />
          <div className="mt-9 space-y-6">
            {lines.map((line, i) => (
              <p
                key={i}
                className={`dao-reveal max-w-[30rem] whitespace-pre-line text-[0.95rem] leading-[1.82] tracking-[0.01em] text-[#3D3831] sm:text-[1rem] ${
                  i === 0 ? "dao-delay-3" : "dao-delay-4"
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="dao-reveal-soft dao-delay-2 relative mt-14 min-h-[24rem] lg:mt-0 lg:min-h-[34rem]">
          <div className="absolute inset-y-[10%] left-[2%] hidden w-[70%] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))] lg:block" />
          <div className="absolute inset-y-[8%] left-[4%] hidden w-px bg-[linear-gradient(180deg,rgba(199,174,105,0),rgba(199,174,105,0.24),rgba(199,174,105,0))] lg:block" />
          <div className="absolute inset-y-[6%] right-[2%] hidden w-[92%] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))] lg:block" />

          <div className="relative ml-auto h-[24rem] w-[94%] overflow-hidden bg-[#17171A] shadow-[0_28px_64px_rgba(20,20,23,0.12)] sm:h-[28rem] lg:h-[30rem]">
            <Image
              src="/MEDIA/entrance group/Dao_EG_V1.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,20,23,0.34) 0%, rgba(20,20,23,0.04) 42%, rgba(20,20,23,0.28) 100%)"
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 74% 32%, rgba(199,174,105,0.14), rgba(199,174,105,0.03) 34%, rgba(0,0,0,0) 68%)"
              }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
