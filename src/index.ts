import i18next from "i18next";
import { initialize } from "./i18next";
import { converterDateToString } from "./formatDate";
import { addDays, subDays } from "date-fns";

(async () => {
  await initialize();
  const name = 'Artem';
  const currentDate = new Date();
  console.log(`${i18next?.t("messages.welcome", {name})}`);

  
  console.log(converterDateToString(currentDate, 'long', 'ru'));
  console.log(
    converterDateToString(subDays(currentDate, 1), 'relative', 'ru')
  );
  console.log(
    converterDateToString(addDays(currentDate, 4), 'relative', 'nl')
  );
  
})();
