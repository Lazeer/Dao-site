import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type ContactsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: ContactsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getContent(locale);
  return {
    title: content.contacts.meta.title,
    description: content.contacts.meta.description
  };
}

export default async function ContactsPage({ params }: ContactsPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getContent(locale);

  return (
    <main>
      <Section>
        <h1 className="font-serif text-4xl">{content.contacts.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f6368]">
          {content.contacts.intro}
        </p>
      </Section>
      <Section className="border-t border-[#e7dfd3] bg-white">
        <div className="grid gap-6 rounded-lg border border-[#e7dfd3] p-8 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#7D2119]">Address</p>
            <p className="mt-2 text-[#121212]">{content.contacts.address}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#7D2119]">Hours</p>
            <p className="mt-2 text-[#121212]">{content.contacts.hours}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#7D2119]">Phone</p>
            <Link href={`tel:${content.contacts.phone}`} className="mt-2 block text-[#121212]">
              {content.contacts.phone}
            </Link>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#7D2119]">Email</p>
            <Link
              href={`mailto:${content.contacts.email}`}
              className="mt-2 block text-[#121212]"
            >
              {content.contacts.email}
            </Link>
          </div>
        </div>
        <Link
          href={content.contacts.mapHref}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex text-sm text-[#7D2119]"
        >
          {content.contacts.mapLabel}
        </Link>
      </Section>
    </main>
  );
}
