import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { getContent } from "@/lib/content";
import { Locale, isLocale, locales } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getContent(locale);
  const base = "https://www.daorest.ru";

  return {
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ru: "/ru",
        en: "/en"
      }
    },
    openGraph: {
      title: content.home.meta.title,
      description: content.home.meta.description,
      url: `${base}/${locale}`,
      siteName: "DAO",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      type: "website"
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);

  return (
    <div className="min-h-screen bg-[#f6f1e9] text-[#121212]">
      <Header locale={typedLocale} labels={content.nav} />
      {children}
      <Footer rights={content.footer.rights} />
    </div>
  );
}
