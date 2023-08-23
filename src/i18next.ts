import {init} from "i18next";

import resources from '../translation.json'

export async function initialize () {
  await init({
    debug: true,
    resources,
    fallbackLng: ['en', 'nl'],
    lng: "nl",
    interpolation: {
      escapeValue: false,
    }
  });
}

