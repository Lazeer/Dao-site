import { Locale } from "@/lib/i18n";

type MetaEntry = {
  title: string;
  description: string;
};

export type SiteContent = {
  locale: Locale;
  nav: {
    home: string;
    menu: string;
    gallery: string;
    team: string;
    philosophy: string;
    reservation: string;
    contacts: string;
  };
  cta: {
    reserve: string;
    viewMenu: string;
  };
  home: {
    meta: MetaEntry;
    eyebrow: string;
    title: string;
    description: string;
    philosophy: {
      eyebrow: string;
      title: string;
      lines: string[];
    };
  };
  philosophyPage: {
    meta: MetaEntry;
    intro: {
      eyebrow: string;
      quote: string;
      caption: string;
    };
  };
  menu: {
    meta: MetaEntry;
    title: string;
    intro: string;
    groups: Array<{
      name: string;
      items: string[];
    }>;
  };
  reservation: {
    meta: MetaEntry;
    title: string;
    intro: string;
    embedUrl: string;
    fallbackLabel: string;
    fallbackHref: string;
  };
  contacts: {
    meta: MetaEntry;
    title: string;
    intro: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    mapHref: string;
    mapLabel: string;
  };
  footer: {
    rights: string;
  };
};
