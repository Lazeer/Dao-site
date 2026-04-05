import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type MenuPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: MenuPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getContent(locale);
  return {
    title: content.menu.meta.title,
    description: content.menu.meta.description
  };
}

export default async function MenuPage({ params }: MenuPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getContent(locale);

  return (
    <main className="bg-[#141417] text-[#FFFFFF]">
      <Section>
        <h1 className="font-serif text-4xl text-[#FFFFFF]">{content.menu.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(255,255,255,0.72)]">
          {content.menu.intro}
        </p>
      </Section>
      <Section className="border-t border-[rgba(255,255,255,0.2)] bg-transparent">
        <div className="grid gap-5 md:grid-cols-3">
          {content.menu.groups.map((group) => (
            <article
              key={group.name}
              className="rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.04)] p-6"
            >
              <h2 className="font-serif text-2xl text-[#FFFFFF]">{group.name}</h2>
              <ul className="mt-4 space-y-2 text-sm text-[rgba(255,255,255,0.74)]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
