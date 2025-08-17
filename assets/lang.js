const translations = {
  de: {
    welcome: 'Willkommen bei Hatopia',
    language: 'Sprache',
    aktuelles: 'Aktuelles',
    angebote: 'Angebote',
    umsonstladen: 'Umsonstladen',
    leihladen: 'Leihladen',
    werkstatt: 'Offene Werkstatt / Repair Cafe',
    multifunktionsraum: 'Multifunktionsraum',
    projekte: 'Projekte',
    preise: 'Preise und Auszeichnungen',
    abgeschlossene: 'Abgeschlossene Projekte',
    ziele: 'Ziele',
    veranstaltungen: 'Veranstaltungen',
    ueberuns: 'Über uns',
    kontakt: 'Kontakt',
    spenden: 'Spenden',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    socialmedia: 'Social Media',
    kalender: 'Veranstaltungskalender',
    blog: 'Blog'
  },
  en: {
    welcome: 'Welcome to Hatopia',
    language: 'Language',
    aktuelles: 'News',
    angebote: 'Services',
    umsonstladen: 'Free Shop',
    leihladen: 'Library of Things',
    werkstatt: 'Open Workshop / Repair Café',
    multifunktionsraum: 'Multipurpose Room',
    projekte: 'Projects',
    preise: 'Awards',
    abgeschlossene: 'Completed Projects',
    ziele: 'Goals',
    veranstaltungen: 'Events',
    ueberuns: 'About Us',
    kontakt: 'Contact',
    spenden: 'Donate',
    impressum: 'Imprint',
    datenschutz: 'Privacy Policy',
    socialmedia: 'Social Media',
    kalender: 'Event Calendar',
    blog: 'Blog'
  },
  tr: {
    welcome: 'Hatopia\'ya Hoş Geldiniz',
    language: 'Dil',
    aktuelles: 'Güncel',
    angebote: 'Hizmetler',
    umsonstladen: 'Ücretsiz Mağaza',
    leihladen: 'Ödünç Mağazası',
    werkstatt: 'Açık Atölye / Tamir Kafe',
    multifunktionsraum: 'Çok Amaçlı Oda',
    projekte: 'Projeler',
    preise: 'Ödüller',
    abgeschlossene: 'Tamamlanan Projeler',
    ziele: 'Hedefler',
    veranstaltungen: 'Etkinlikler',
    ueberuns: 'Hakkımızda',
    kontakt: 'İletişim',
    spenden: 'Bağış',
    impressum: 'Künye',
    datenschutz: 'Gizlilik',
    socialmedia: 'Sosyal Medya',
    kalender: 'Etkinlik Takvimi',
    blog: 'Blog'
  },
  ru: {
    welcome: 'Добро пожаловать в Hatopia',
    language: 'Язык',
    aktuelles: 'Новости',
    angebote: 'Предложения',
    umsonstladen: 'Магазин даром',
    leihladen: 'Прокат вещей',
    werkstatt: 'Открытая мастерская / Ремонт-кафе',
    multifunktionsraum: 'Многофункциональная комната',
    projekte: 'Проекты',
    preise: 'Награды',
    abgeschlossene: 'Завершенные проекты',
    ziele: 'Цели',
    veranstaltungen: 'Мероприятия',
    ueberuns: 'О нас',
    kontakt: 'Контакты',
    spenden: 'Пожертвования',
    impressum: 'Импрессум',
    datenschutz: 'Защита данных',
    socialmedia: 'Соцсети',
    kalender: 'Календарь мероприятий',
    blog: 'Блог'
  },
  uk: {
    welcome: 'Ласкаво просимо до Hatopia',
    language: 'Мова',
    aktuelles: 'Новини',
    angebote: 'Пропозиції',
    umsonstladen: 'Магазин безкоштовних речей',
    leihladen: 'Прокат речей',
    werkstatt: 'Відкрита майстерня / Repair Café',
    multifunktionsraum: 'Багатофункціональна кімната',
    projekte: 'Проєкти',
    preise: 'Нагороди',
    abgeschlossene: 'Завершені проєкти',
    ziele: 'Цілі',
    veranstaltungen: 'Заходи',
    ueberuns: 'Про нас',
    kontakt: 'Контакт',
    spenden: 'Пожертви',
    impressum: 'Impressum',
    datenschutz: 'Політика конфіденційності',
    socialmedia: 'Соціальні мережі',
    kalender: 'Календар заходів',
    blog: 'Блог'
  }
};

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang][key];
    if (translation) {
      el.innerText = translation;
    }
  });
}

document.getElementById('language-selector').addEventListener('change', (e) => {
  applyTranslations(e.target.value);
});

applyTranslations('de');
