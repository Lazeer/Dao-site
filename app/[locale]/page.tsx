import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/site/HeroSection";
import { PhilosophySection } from "@/components/site/PhilosophySection";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getContent(locale);
  return {
    title: content.home.meta.title,
    description: content.home.meta.description
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getContent(locale);

  return (
    <main>
      <HeroSection
        locale={locale}
        eyebrow={content.home.eyebrow}
        title={content.home.title}
        description={content.home.description}
        reserveLabel={content.cta.reserve}
        menuLabel={content.cta.viewMenu}
      />

      <PhilosophySection
        eyebrow={content.home.philosophy.eyebrow}
        title={content.home.philosophy.title}
        lines={content.home.philosophy.lines}
      />
    </main>
  );
}
