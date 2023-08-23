import { format, formatDistance, formatRelative, isDate } from "date-fns";
import { nl, ru } from "date-fns/locale";


type SupportedLocales =
  | 'nl'
  | 'ru';

type SupportedFormatPattern = 
  | 'short'
  | 'long'
  | 'relative'
  | 'ago';

const SUPPORTED_LOCALES_MAPPING: Map<
  SupportedLocales,
  Locale
> = new Map([['nl', nl], ['ru', ru]])


export function converterDateToString(
  value: Date,
  formatPattern: SupportedFormatPattern,
  dateLocales: SupportedLocales
): string | undefined {
  if (!isDate(value)) {
    return undefined
  }

  const locale = SUPPORTED_LOCALES_MAPPING.get(dateLocales);

  if (formatPattern === "short")
    return format(value, "P", { locale });
  if (formatPattern === "long")
    return format(value, "PPP", { locale });
  if (formatPattern === "relative")
    return formatRelative(value, new Date(), { locale });
  if (formatPattern === "ago")
    return formatDistance(value, new Date(), {
      locale,
      addSuffix: true
    });

  return undefined;
}
