import { enContent } from "@/lib/content/en";
import { ruContent } from "@/lib/content/ru";
import { SiteContent } from "@/lib/content/types";
import { Locale } from "@/lib/i18n";

export function getContent(locale: Locale): SiteContent {
  if (locale === "en") {
    return enContent;
  }

  return ruContent;
}
