type PhilosophyIntroProps = {
  eyebrow: string;
  quote: string;
  caption: string;
};

export function PhilosophyIntro({ eyebrow, quote, caption }: PhilosophyIntroProps) {
  return (
    <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-[#141417]">
      {/* Warm radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 52%, rgba(199,174,105,0.07) 0%, rgba(199,174,105,0.02) 38%, rgba(0,0,0,0) 68%), radial-gradient(circle at 50% 50%, rgba(255,248,236,0.05) 0%, rgba(0,0,0,0) 55%)"
        }}
        aria-hidden
      />
      {/* Top fade */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(20,20,23,0.6),rgba(20,20,23,0))]"
        aria-hidden
      />
      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,rgba(20,20,23,0.5),rgba(20,20,23,0))]"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="dao-reveal text-[0.62rem] uppercase tracking-[0.26em] text-white/35">
          {eyebrow}
        </p>

        <div className="dao-reveal dao-delay-1 mx-auto mt-7 h-px w-8 bg-[#C7AE69]/40" aria-hidden />

        <h1
          className="dao-reveal dao-delay-2 mt-8 max-w-[16ch] whitespace-pre-line font-serif text-[2.2rem] font-light leading-[1.06] tracking-[0.01em] text-white sm:text-[3rem] lg:text-[3.8rem]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {quote}
        </h1>

        <p className="dao-reveal dao-delay-3 mt-8 text-[0.88rem] italic leading-relaxed tracking-[0.02em] text-white/45">
          {caption}
        </p>
      </div>
    </section>
  );
}
