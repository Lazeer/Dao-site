import { SiteContent } from "@/lib/content/types";

export const enContent: SiteContent = {
  locale: "en",
  nav: {
    home: "Home",
    menu: "Menu",
    gallery: "Gallery",
    team: "Team",
    philosophy: "Philosophy",
    reservation: "Reservation",
    contacts: "Contacts"
  },
  cta: {
    reserve: "Reserve table",
    viewMenu: "View menu"
  },
  home: {
    meta: {
      title: "DAO - Premium Asian bistro in Moscow",
      description:
        "DAO is a modern Asian bistro in Moscow with an author menu, chef's table, and premium service."
    },
    eyebrow: "Premium modern Asian restaurant",
    title: "DAO is a path\nthrough taste,\nlight, and stillness.",
    description:
      "A premium modern Asian restaurant where taste, light, and service resolve into one calm first impression.",
    philosophy: {
      eyebrow: "DAO Philosophy",
      title: "DAO is a path\nshaped through\ntaste and stillness.",
      lines: [
        "Premium here is expressed through precision,\nrestraint, and attention to detail.",
        "For DAO, Asia is not decoration,\nbut a source of depth, flavor, and measure."
      ]
    },
  },
  menu: {
    meta: {
      title: "Menu - DAO",
      description:
        "DAO menu featuring a la carte dishes, chef's table, and tea, bar, and wine lists."
    },
    title: "DAO Menu",
    intro:
      "A la carte and chef's table formats focused on flavor clarity, seasonality, and refined presentation.",
    groups: [
      {
        name: "A la carte",
        items: ["Raw bar", "Main courses", "Desserts"]
      },
      {
        name: "Chef's table",
        items: ["Tasting set", "Seasonal accents", "Personalized serving"]
      },
      {
        name: "Lists",
        items: ["Tea", "Bar", "Wine"]
      }
    ]
  },
  reservation: {
    meta: {
      title: "Reservation - DAO",
      description:
        "Book your table at DAO online, including regular reservations and chef's table options."
    },
    title: "Reservation",
    intro:
      "Choose your preferred time. Chef's table booking is available for curated experiences.",
    embedUrl: "",
    fallbackLabel: "Open reservation form",
    fallbackHref: "https://www.daorest.ru"
  },
  contacts: {
    meta: {
      title: "Contacts - DAO",
      description:
        "DAO contact details: Moscow address, phone, opening hours, and map."
    },
    title: "Contacts",
    intro: "Contact us for bookings and tailored requests.",
    address: "Moscow, Central District, exact address to be confirmed",
    phone: "+7 (900) 000-00-00",
    email: "info@daorest.ru",
    hours: "Daily 12:00 - 00:00",
    mapHref: "https://maps.yandex.ru",
    mapLabel: "Open map"
  },
  footer: {
    rights: "DAO Asian bistro"
  }
};
