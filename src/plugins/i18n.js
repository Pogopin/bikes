import { createI18n } from 'vue-i18n'

const messages = {
  ru: {
    message: {
      hello: 'Привет Мир'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

export const i18n = createI18n({
  locale: 'ru', // set locale
  fallbackLocale: 'ru', // set fallback locale
  messages // set locale messages

})
