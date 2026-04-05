import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type ReservationPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: ReservationPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getContent(locale);
  return {
    title: content.reservation.meta.title,
    description: content.reservation.meta.description
  };
}

export default async function ReservationPage({ params }: ReservationPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = getContent(locale);
  const embedUrl =
    process.env.NEXT_PUBLIC_REMARKED_EMBED_URL || content.reservation.embedUrl;
  const fallbackHref =
    process.env.NEXT_PUBLIC_REMARKED_FALLBACK_URL ||
    content.reservation.fallbackHref;

  return (
    <main>
      <Section>
        <h1 className="font-serif text-4xl">{content.reservation.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f6368]">
          {content.reservation.intro}
        </p>
      </Section>
      <Section className="border-t border-[#e7dfd3] bg-white">
        {embedUrl ? (
          <div className="overflow-hidden rounded-lg border border-[#e7dfd3] bg-white">
            <iframe
              src={embedUrl}
              className="h-[760px] w-full"
              loading="lazy"
              title="Remarked reservation form"
            />
          </div>
        ) : (
          <div className="rounded-lg border border-[#e7dfd3] bg-[#fdfbf8] p-8">
            <p className="text-sm text-[#5f6368]">
              Embed URL is not configured yet. Use fallback link for reservation.
            </p>
            <Link
              href={fallbackHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center rounded-md bg-[#7D2119] px-5 text-sm font-medium text-white hover:bg-[#621913]"
            >
              {content.reservation.fallbackLabel}
            </Link>
          </div>
        )}
      </Section>
    </main>
  );
}
