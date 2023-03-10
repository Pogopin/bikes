import { createI18n } from 'vue-i18n'

const messages = {
  ru: {
    message: {
      hello: 'Привет Мир'
    },
    tarifInfo: {
      name: 'PRATA',
      price: 'R$ 199'
    },
    name1: 'Duas trocas por ano',
    name2: 'Assistência técnica',
    name3: 'Suporte 08h às 18h',
    name4: 'Cobertura estatual',
    homepage: {
      title: 'Home Page Title'
    },
    addButton : 'Add Button'
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
