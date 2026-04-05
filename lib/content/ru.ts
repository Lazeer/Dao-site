import { SiteContent } from "@/lib/content/types";

export const ruContent: SiteContent = {
  locale: "ru",
  nav: {
    home: "Главная",
    menu: "Меню",
    gallery: "Галерея",
    team: "Команда",
    philosophy: "Философия",
    reservation: "Бронирование",
    contacts: "Контакты"
  },
  cta: {
    reserve: "Забронировать стол",
    viewMenu: "Смотреть меню"
  },
  home: {
    meta: {
      title: "DAO — премиальный азиатский bistrot в Москве",
      description:
        "DAO — современная азиатская кухня в Москве. Авторское меню, chef's table и атмосфера премиального сервиса."
    },
    eyebrow: "Премиальный modern Asian restaurant",
    title: "DAO – ваш путь к совершенному вкусу Азии.",
    description:
      "Премиальный modern Asian restaurant, где вкус, свет и сервис складываются в одно спокойное впечатление.",
    philosophy: {
      eyebrow: "Философия DAO",
      title: "DAO — это путь,\nвыраженный через\nвкус и тишину.",
      lines: [
        "Премиальность здесь живет не в жесте,\nа в точности, ритме и внимании к деталям.",
        "Азия для DAO — не декорация,\nа источник глубины, вкуса и меры."
      ]
    },
  },
  menu: {
    meta: {
      title: "Меню — DAO",
      description:
        "Меню DAO: авторские блюда, chef's table, чайная, барная и винная карты."
    },
    title: "Меню DAO",
    intro:
      "A la carte и chef's table с акцентом на чистоту вкуса, сезонность и точную подачу.",
    groups: [
      {
        name: "A la carte",
        items: ["Raw bar", "Горячие блюда", "Десерты"]
      },
      {
        name: "Chef's table",
        items: ["Дегустационный сет", "Сезонные акценты", "Персональная подача"]
      },
      {
        name: "Карты",
        items: ["Чайная", "Барная", "Винная"]
      }
    ]
  },
  reservation: {
    meta: {
      title: "Бронирование — DAO",
      description:
        "Забронируйте стол в DAO онлайн. Доступны стандартные брони и chef's table."
    },
    title: "Бронирование",
    intro:
      "Выберите удобное время визита. Для особых случаев доступно бронирование chef's table.",
    embedUrl: "",
    fallbackLabel: "Открыть форму бронирования",
    fallbackHref: "https://www.daorest.ru"
  },
  contacts: {
    meta: {
      title: "Контакты — DAO",
      description:
        "Контакты DAO: адрес в Москве, телефон, часы работы и карта проезда."
    },
    title: "Контакты",
    intro: "Свяжитесь с нами для бронирования и персональных запросов.",
    address: "Москва, ЦАО, адрес уточняется",
    phone: "+7 (900) 000-00-00",
    email: "info@daorest.ru",
    hours: "Ежедневно 12:00 - 00:00",
    mapHref: "https://maps.yandex.ru",
    mapLabel: "Открыть карту"
  },
  footer: {
    rights: "DAO Asian bistrot"
  }
};
