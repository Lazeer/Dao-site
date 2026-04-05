import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhilosophyIntro } from "@/components/site/PhilosophyIntro";
import { PhilosophySection } from "@/components/site/PhilosophySection";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type PhilosophyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: PhilosophyPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getContent(locale);
  return {
    title: content.philosophyPage.meta.title,
    description: content.philosophyPage.meta.description
  };
}

export default async function PhilosophyPage({ params }: PhilosophyPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getContent(locale);

  return (
    <main>
      <PhilosophyIntro
        eyebrow={content.philosophyPage.intro.eyebrow}
        quote={content.philosophyPage.intro.quote}
        caption={content.philosophyPage.intro.caption}
      />
      <PhilosophySection
        eyebrow={content.home.philosophy.eyebrow}
        title={content.home.philosophy.title}
        lines={content.home.philosophy.lines}
      />
    </main>
  );
}
