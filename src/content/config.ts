/**
 * =========================================
 * WEBSITE KONFIGURATION
 * =========================================
 *
 * Hier können Sie alle wichtigen Inhalte der Website bearbeiten.
 * Ändern Sie die Werte und pushen Sie die Änderungen zu GitHub.
 * Die Website wird automatisch aktualisiert.
 *
 * ANLEITUNG:
 * 1. Bearbeiten Sie die gewünschten Texte unten
 * 2. Speichern Sie die Datei
 * 3. Führen Sie "git add .", "git commit -m 'Inhalt aktualisiert'" und "git push" aus
 * 4. Die Website wird in ca. 2-3 Minuten aktualisiert
 */

// =========================================
// KONTAKTFORMULAR EINSTELLUNGEN
// =========================================
export const formConfig = {
  // E-Mail-Adresse, an die Kontaktformular-Anfragen gesendet werden
  // HINWEIS: Für E-Mail-Versand benötigen Sie einen externen Service wie Formspree, Netlify Forms, etc.
  recipientEmail: 'info@is-tankschutz.de',

  // Formspree Endpoint (kostenlos für bis zu 50 Anfragen/Monat)
  // Registrieren Sie sich auf formspree.io und ersetzen Sie diese ID
  formspreeId: 'YOUR_FORMSPREE_ID',
};

// =========================================
// FIRMENINFORMATIONEN
// =========================================
export const company = {
  name: 'Ingensiep & Schallenberg GmbH & Co. KG',
  shortName: 'INGENSIEP & SCHALLENBERG',
  tagline: 'Fachbetrieb für Sicherheit und Umweltschutz rund um Ihren Tank.',

  // Adresse
  address: {
    street: 'Industriestr. 2a',
    zip: '47929',
    city: 'Grefrath',
    country: 'Deutschland',
  },

  // Telefonnummern
  phone: {
    main: '02158 / 40 58 777',
    mainFormatted: '+4921584058777',
    krefeld: '02151 / 79 03 706',
    krefeldFormatted: '+4921517903706',
    moenchengladbach: '02166 / 92 93 930',
    moenchengladbachFormatted: '+4921669293930',
    fax: '02158 / 40 82 617',
  },

  // E-Mail
  email: 'info@is-tankschutz.de',

  // WhatsApp
  whatsapp: {
    number: '4921584058777',
    message: 'Hallo, ich interessiere mich für Ihre Tankschutz-Leistungen. Können Sie mir ein Angebot erstellen?',
  },

  // Öffnungszeiten
  openingHours: {
    weekdays: 'Mo - Do: 9:00 - 15:00 Uhr',
    friday: 'Fr: 9:00 - 13:30 Uhr',
    emergency: 'Notdienst: 24/7',
  },

  // Rechtliche Informationen
  legal: {
    ceo: 'Rainer Zander',
    court: 'Amtsgericht Krefeld',
    registerNumber: 'HRA 4755',
    authority: 'Untere Wasserbehörde Kreis Viersen',
  },
};

// =========================================
// HERO-BEREICH (STARTSEITE)
// =========================================
export const hero = {
  title: 'Professioneller Tankschutz für Ihre Sicherheit',
  subtitle: 'Ihr Spezialist für Tankreinigung, Tanksanierung und Tankdemontage im Großraum Grefrath, Krefeld und Mönchengladbach. Mit über 20 Jahren Erfahrung garantieren wir höchste Qualität und absolute Zuverlässigkeit.',
  ctaButton: 'Angebot anfordern',
  phoneButton: '02158 / 40 58 777',
};

// =========================================
// VERTRAUENS-SIGNALE
// =========================================
export const trustSignals = [
  {
    title: 'WHG-Zertifiziert',
    description: 'Fachbetrieb nach §62 AwSV',
  },
  {
    title: '20+ Jahre Erfahrung',
    description: 'Kompetenz aus Tradition',
  },
  {
    title: '24/7 Notdienst',
    description: 'Immer für Sie da',
  },
  {
    title: '100 km Radius',
    description: 'Grefrath & Umgebung',
  },
];

// =========================================
// STATISTIKEN
// =========================================
export const stats = [
  { value: '20+', label: 'Jahre Erfahrung' },
  { value: '5.000+', label: 'Zufriedene Kunden' },
  { value: '100km', label: 'Einzugsgebiet' },
  { value: '24/7', label: 'Notdienst' },
];

// =========================================
// REGIONEN (EINZUGSGEBIET)
// =========================================
export const regions = [
  'Grefrath', 'Krefeld', 'Düsseldorf', 'Duisburg', 'Mönchengladbach', 'Neuss',
  'Moers', 'Viersen', 'Kempen', 'Willich', 'Tönisvorst', 'Kaarst',
  'Meerbusch', 'Ratingen', 'Oberhausen', 'Essen'
];

// =========================================
// LEISTUNGEN
// =========================================
export const services = [
  {
    slug: 'tankreinigung',
    title: 'Tankreinigung',
    shortDescription: 'Professionelle Reinigung Ihrer Heizöltanks mit modernster Absaugtechnik für maximale Sicherheit.',
    fullDescription: 'Professionelle Reinigung Ihrer Heizöltanks mit modernster Absaugtechnik. Wir entfernen Ölschlämme, Ablagerungen und Kondenswasser für eine optimale Heizölqualität.',
    features: ['Schlammabsaugung', 'Innenreinigung', 'Qualitätskontrolle', 'Protokollierung'],
  },
  {
    slug: 'tanksanierung',
    title: 'Tanksanierung',
    shortDescription: 'Fachgerechte Innenbeschichtung und Sanierung beschädigter Tankanlagen nach WHG-Vorgaben.',
    fullDescription: 'Fachgerechte Innenbeschichtung und Sanierung beschädigter Tankanlagen. Wir reparieren Risse, Korrosionsschäden und erneuern die Tankbeschichtung nach WHG-Vorgaben.',
    features: ['Innenbeschichtung', 'Risssanierung', 'Korrosionsschutz', 'WHG-konform'],
  },
  {
    slug: 'tankdemontage',
    title: 'Tankdemontage',
    shortDescription: 'Sichere Demontage und umweltgerechte Entsorgung alter Öltanks durch zertifizierte Fachkräfte.',
    fullDescription: 'Sichere Demontage und umweltgerechte Entsorgung alter Öltanks. Unsere zertifizierten Fachkräfte entfernen Ihren Tank fachgerecht und kümmern sich um alle Formalitäten.',
    features: ['Sichere Entleerung', 'Fachdemontage', 'Entsorgungsnachweis', 'Behördenabnahme'],
  },
  {
    slug: 'tankstilllegung',
    title: 'Tankstilllegung',
    shortDescription: 'Ordnungsgemäße Stilllegung nicht mehr benötigter Tankanlagen nach behördlichen Vorschriften.',
    fullDescription: 'Ordnungsgemäße Stilllegung nicht mehr benötigter Tankanlagen. Wir führen alle erforderlichen Maßnahmen durch und dokumentieren die Stilllegung für die Behörden.',
    features: ['Entleerung', 'Verfüllung', 'Dokumentation', 'Behördenanmeldung'],
  },
  {
    slug: 'tankneubau',
    title: 'Tankneubau',
    shortDescription: 'Planung und Installation neuer Tankanlagen mit modernster Technik und maximaler Effizienz.',
    fullDescription: 'Planung und Installation neuer Tankanlagen mit modernster Technik. Von der Beratung über die Montage bis zur Inbetriebnahme – alles aus einer Hand.',
    features: ['Bedarfsanalyse', 'Planung', 'Installation', 'Inbetriebnahme'],
  },
  {
    slug: 'lag-wartung',
    title: 'LAG-Wartung',
    shortDescription: 'Regelmäßige Wartung und Prüfung Ihrer Leckschutzauskleidung für dauerhaften Schutz.',
    fullDescription: 'Regelmäßige Wartung und Prüfung Ihrer Leckschutzauskleidung (LAG). Wir überprüfen die Funktionsfähigkeit und stellen den dauerhaften Schutz sicher.',
    features: ['Dichtigkeitsprüfung', 'Sensorcheck', 'Wartungsprotokoll', 'Reparatur'],
  },
];

// =========================================
// FAQ (HÄUFIGE FRAGEN)
// =========================================
export const faqs = [
  {
    question: 'Wie oft sollte eine Tankreinigung durchgeführt werden?',
    answer: 'Wir empfehlen eine Tankreinigung alle 5-7 Jahre. Bei älteren Tanks oder bei erkennbaren Verunreinigungen des Heizöls kann eine häufigere Reinigung sinnvoll sein. Eine regelmäßige Reinigung verlängert die Lebensdauer Ihres Tanks erheblich.',
  },
  {
    question: 'Was kostet eine Tankreinigung oder Tanksanierung?',
    answer: 'Die Kosten hängen von verschiedenen Faktoren ab, wie Tankgröße, Verschmutzungsgrad und Zugänglichkeit. Wir erstellen Ihnen gerne ein individuelles, kostenloses Angebot. Kontaktieren Sie uns telefonisch oder über unser Kontaktformular.',
  },
  {
    question: 'Sind Sie ein WHG-zertifizierter Fachbetrieb?',
    answer: 'Ja, wir sind ein nach § 62 AwSV (ehemals WHG) zertifizierter Fachbetrieb. Diese Zertifizierung ist Voraussetzung für alle Arbeiten an Tankanlagen, die mit wassergefährdenden Stoffen in Berührung kommen.',
  },
  {
    question: 'Wie lange dauert eine Tankdemontage?',
    answer: 'Eine Tankdemontage dauert in der Regel 1-2 Tage, abhängig von der Größe des Tanks und den örtlichen Gegebenheiten. Nach der Demontage kümmern wir uns um die fachgerechte Entsorgung und alle erforderlichen Behördengänge.',
  },
  {
    question: 'Bieten Sie einen Notdienst an?',
    answer: 'Ja, wir bieten einen 24/7 Notdienst für dringende Fälle wie Ölaustritt oder akute Tankschäden. Rufen Sie uns im Notfall jederzeit unter 02158 / 40 58 777 an.',
  },
  {
    question: 'In welchen Regionen sind Sie tätig?',
    answer: 'Wir bedienen von Grefrath aus den gesamten Großraum im Umkreis von 100 km. Dazu gehören Krefeld, Düsseldorf, Duisburg, Mönchengladbach, Neuss, Moers, Viersen und viele weitere Städte in NRW.',
  },
];

// =========================================
// GOOGLE MAPS
// =========================================
export const googleMaps = {
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.7730777411175!2d6.344890476895478!3d51.33369242106498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ba82845bac75%3A0xb88cb07f9e0ae3a3!2sIngensiep%20%26%20Schallenberg%20GmbH!5e0!3m2!1sde!2sde!4v1749747583498!5m2!1sde!2sde',
  reviewsUrl: 'https://www.google.com/maps/place/Ingensiep+%26+Schallenberg+GmbH/@51.3336935,6.3467151,17z/data=!4m8!3m7!1s0x47b8ba82845bac75:0xb88cb07f9e0ae3a3!8m2!3d51.3336902!4d6.34929!9m1!1b1!16s%2Fg%2F1v3lp0ln',
};

// =========================================
// SEO EINSTELLUNGEN
// =========================================
export const seo = {
  siteName: 'Ingensiep & Schallenberg',
  defaultTitle: 'Ingensiep & Schallenberg | Tankreinigung & Tanksanierung in Grefrath und Umgebung',
  defaultDescription: 'Ihr zertifizierter Fachbetrieb für Tankreinigung, Tanksanierung und Tankdemontage im Großraum Grefrath, Krefeld, Mönchengladbach. 20+ Jahre Erfahrung, WHG-zertifiziert, 24/7 Notdienst.',
  defaultKeywords: 'Tankreinigung Grefrath, Tanksanierung Krefeld, Tankdemontage Mönchengladbach, Heizöltank reinigen, Öltank entsorgen, WHG Fachbetrieb',
};
