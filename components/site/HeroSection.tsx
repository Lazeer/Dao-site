"use client";

import { Button } from "@/components/ui/Button";

type HeroSectionProps = {
  locale: string;
  eyebrow: string;
  title: string;
  description: string;
  reserveLabel: string;
  menuLabel: string;
};

export function HeroSection({
  locale,
  eyebrow,
  title,
  description,
  reserveLabel,
  menuLabel
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="dao-hero-bg absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/MEDIA/dao_hero_page.png')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(92deg, rgba(7,7,10,0.76) 0%, rgba(7,7,10,0.6) 26%, rgba(7,7,10,0.28) 56%, rgba(7,7,10,0.08) 100%)"
        }}
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 w-[58%] bg-[radial-gradient(circle_at_62%_40%,rgba(199,174,105,0.16),rgba(199,174,105,0.06)_34%,rgba(0,0,0,0)_72%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_56%,rgba(0,0,0,0.34)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,7,10,0.22) 0%, rgba(7,7,10,0) 24%, rgba(7,7,10,0) 72%, rgba(7,7,10,0.36) 100%)"
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/PATTERN/Dao_Паттерн_Dao_Pattern_V2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "128% auto",
          backgroundPosition: "18% center",
          backgroundColor: "rgba(199,174,105,0.2)",
          backgroundBlendMode: "multiply",
          mixBlendMode: "soft-light",
          opacity: 0.08,
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.44) 42%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.44) 42%, rgba(0,0,0,0) 100%)"
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pt-20 sm:px-8 sm:pt-22 lg:px-12 lg:pt-24">
        <div className="-ml-4 max-w-[40rem] pt-0 sm:-ml-5 lg:-ml-8">
          <div className="dao-reveal flex items-center gap-4">
            <span className="h-px w-8 bg-[#C7AE69]/58" aria-hidden />
            <p className="text-[0.6rem] uppercase tracking-[0.32em] text-[#EFEAE1]/52">
              {eyebrow}
            </p>
          </div>
          <h1
            className="dao-reveal dao-delay-1 mt-6 max-w-[11.5ch] whitespace-pre-line text-balance text-[2.35rem] leading-[0.94] tracking-[0.01em] text-[#FFFFFF] sm:text-[3.1rem] lg:text-[4.05rem]"
            style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 300 }}
          >
            {title}
          </h1>
          <p className="dao-reveal dao-delay-2 mt-6 max-w-[24rem] text-[0.88rem] leading-[1.82] tracking-[0.01em] text-[rgba(239,234,225,0.66)] sm:text-[0.96rem]">
            {description}
          </p>
          <div className="dao-reveal dao-delay-3 mt-7 h-px w-14 bg-[#C7AE69]/32" aria-hidden />
          <div className="dao-reveal dao-delay-4 mt-6 flex flex-wrap items-center gap-3.5">
            <Button
              href={`/${locale}/reservation`}
              className="min-w-[11rem] px-5 text-[0.62rem] uppercase tracking-[0.18em]"
            >
              {reserveLabel}
            </Button>
            <Button
              href={`/${locale}/menu`}
              className="min-w-[10rem] !border-white/48 !bg-[rgba(20,20,23,0.12)] !text-[#EFEAE1]/84 !shadow-none px-5 text-[0.62rem] uppercase tracking-[0.18em] hover:!border-white/72 hover:!bg-[rgba(20,20,23,0.32)] hover:!text-[#FFFFFF]"
              variant="secondary"
            >
              {menuLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
