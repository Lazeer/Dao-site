"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Locale, getLocalizedPath } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
  labels: {
    home: string;
    menu: string;
    gallery: string;
    team: string;
    philosophy: string;
    reservation: string;
    contacts: string;
  };
};

export function Header({ locale, labels }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const SCROLL_THRESHOLD = 28;

  const isLocaleHome = pathname === `/${locale}`;

  useEffect(() => {
    if (!isLocaleHome) {
      setIsScrolled(true);
      return;
    }

    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLocaleHome]);

  const headerMode = isLocaleHome ? "fixed inset-x-0 top-0" : "sticky top-0";
  const hasHeroHeader = isLocaleHome && !isScrolled;
  const navText = hasHeroHeader ? "text-[#FFFFFF]/90" : "text-[#FFFFFF]/86";
  const mutedText = hasHeroHeader ? "text-[#FFFFFF]/70" : "text-[#FFFFFF]/66";
  const navLinkClass =
    "relative transition-[opacity,color] duration-[260ms] ease-out hover:text-[#FFFFFF] hover:opacity-100 after:absolute after:left-0 after:top-full after:mt-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#FFFFFF]/82 after:transition-transform after:duration-[260ms] after:ease-out hover:after:scale-x-100";
  const homePath = getLocalizedPath(locale);

  return (
    <header
      className={`${headerMode} z-50 transition-colors duration-300 ${
        hasHeroHeader
          ? "bg-transparent"
          : "border-b border-white/8 bg-[#141417]/72 backdrop-blur-xl"
      }`}
    >
      <Container className="grid min-h-20 grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-6">
        <Link
          href={getLocalizedPath(locale)}
          aria-label="DAO home"
          className="-ml-10 inline-flex items-center transition-opacity duration-[260ms] ease-out hover:opacity-90 sm:-ml-12 lg:-ml-16"
        >
          <Image
            src="/LOGO/SVG/Dao_Логотип_Dao_Logo_short_white.svg"
            alt="DAO"
            width={224}
            height={56}
            className="h-9 w-auto object-contain opacity-95 brightness-95 drop-shadow-[0_2px_14px_rgba(20,20,23,0.26)] sm:h-10"
            priority
          />
        </Link>
        <nav
          className={`hidden items-center justify-center gap-6 text-[0.74rem] uppercase tracking-[0.16em] lg:flex ${navText}`}
        >
          <Link className={navLinkClass} href={homePath}>
            {labels.home}
          </Link>
          <Link className={navLinkClass} href={getLocalizedPath(locale, "/menu")}>
            {labels.menu}
          </Link>
          <Link className={navLinkClass} href={`${homePath}#gallery`}>
            {labels.gallery}
          </Link>
          <Link className={navLinkClass} href={`${homePath}#team`}>
            {labels.team}
          </Link>
          <Link className={navLinkClass} href={`${homePath}#philosophy`}>
            {labels.philosophy}
          </Link>
          <Link className={navLinkClass} href={getLocalizedPath(locale, "/contacts")}>
            {labels.contacts}
          </Link>
        </nav>
        <div className="flex items-center justify-end gap-3">
          <div
            className={`flex items-center gap-1.5 text-[0.64rem] uppercase tracking-[0.14em] ${mutedText}`}
          >
            <Link
              href={getLocalizedPath("ru")}
              className={`transition-[opacity,color] duration-[240ms] ease-out hover:opacity-100 hover:text-[#FFFFFF] ${
                locale === "ru" ? navText : ""
              }`}
              aria-label="Switch to Russian"
            >
              RU
            </Link>
            <span className="opacity-55">/</span>
            <Link
              href={getLocalizedPath("en")}
              className={`transition-[opacity,color] duration-[240ms] ease-out hover:opacity-100 hover:text-[#FFFFFF] ${
                locale === "en" ? navText : ""
              }`}
              aria-label="Switch to English"
            >
              EN
            </Link>
          </div>
          <nav
            className={`flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.14em] lg:hidden ${navText}`}
          >
            <Link href={homePath}>{labels.home}</Link>
            <Link href={getLocalizedPath(locale, "/menu")}>{labels.menu}</Link>
            <Link href={`${homePath}#philosophy`}>{labels.philosophy}</Link>
          </nav>
          <Button
            href={getLocalizedPath(locale, "/reservation")}
            className="min-h-10 rounded-md px-4 text-[0.64rem] tracking-[0.16em] uppercase !text-[#FFFFFF] shadow-[0_10px_24px_rgba(20,20,23,0.18)] hover:!text-[#FFFFFF]"
          >
            {labels.reservation}
          </Button>
        </div>
      </Container>
    </header>
  );
}
