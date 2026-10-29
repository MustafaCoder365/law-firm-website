export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export type PracticeArea = { id: string; name: string; detail: string; forWhom: string };
export type PartnerPhoto = "karim" | "zainab" | "omar";

export type Content = {
  dir: "rtl" | "ltr";
  meta: { title: string; description: string };
  brand: string;
  brandLong: string;
  nav: { practice: string; approach: string; team: string; faq: string; contact: string };
  switchLabel: string;
  menu: string;
  close: string;
  skip: string;
  hero: {
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    photoAlt: string;
    promises: string[];
  };
  practice: { title: string; lead: string; forLabel: string; items: PracticeArea[] };
  story: { title: string; body: string[]; photoAlt: string; caption: string };
  approach: { title: string; lead: string; steps: { title: string; detail: string }[] };
  team: {
    title: string;
    lead: string;
    items: { name: string; photo: PartnerPhoto; role: string; focus: string; bar: string }[];
  };
  office: { photoAlt: string; title: string; address: string; hours: string; directions: string };
  faq: { title: string; items: { q: string; a: string }[] };
  contact: {
    title: string;
    lead: string;
    name: string;
    phone: string;
    phoneHint: string;
    matter: string;
    matterPlaceholder: string;
    via: string;
    call: string;
    whatsapp: string;
    summary: string;
    summaryHint: string;
    submit: string;
    errors: { name: string; phone: string; matter: string };
    doneTitle: string;
    doneBody: string;
    again: string;
  };
  footer: {
    tagline: string;
    officeTitle: string;
    contactTitle: string;
    concept: string;
    credit: string;
    photos: string;
  };
};

export const PHONE_DISPLAY = "+964 780 000 0000";
export const PHONE_LINK = "tel:+9647800000000";
export const WHATSAPP_LINK = "https://wa.me/9647800000000";
export const EMAIL = "office@hammurabi-law.example";

const ar: Content = {
  dir: "rtl",
  meta: {
    title: "حمورابي للمحاماة — بغداد",
    description:
      "مكتب محاماة في بغداد للشركات والعائلات: العقود، الاستثمار، العقارات، الأحوال الشخصية، والقضايا أمام المحاكم. أتعاب مكتوبة قبل أن نبدأ.",
  },
  brand: "حمورابي",
  brandLong: "حمورابي للمحاماة",
  nav: { practice: "مجالات العمل", approach: "طريقة عملنا", team: "الشركاء", faq: "أسئلة شائعة", contact: "اطلب استشارة" },
  switchLabel: "English",
  menu: "القائمة",
  close: "إغلاق",
  skip: "انتقل إلى المحتوى",
  hero: {
    title: "منذ بابل والقانون يُكتب. ونحن نكتب التزامنا لك أيضاً",
    lead: "مكتب محاماة في بغداد للشركات والعائلات. نتولى العقود والاستثمار والعقارات والأحوال الشخصية والقضايا أمام المحاكم، ونتفق على الأتعاب كتابةً قبل أن نبدأ.",
    primary: "اطلب استشارة",
    secondary: "اتصل بالمكتب",
    photoAlt: "محامية تراجع عقداً مع موكّل في مكتب",
    promises: [
      "أتعابك مكتوبة ومتفق عليها قبل أن نبدأ",
      "تقرير مكتوب عن قضيتك كل أسبوعين",
      "سرية تامة لكل وثائقك ومراسلاتك",
    ],
  },
  practice: {
    title: "مجالات العمل",
    lead: "ستة مجالات نعمل بها يومياً أمام المحاكم والدوائر العراقية.",
    forLabel: "لمن",
    items: [
      {
        id: "corporate",
        name: "الشركات والعقود",
        detail: "تأسيس الشركات وتسجيلها، صياغة العقود ومراجعتها، ونزاعات الشركاء.",
        forWhom: "الشركات الناشئة والقائمة",
      },
      {
        id: "investment",
        name: "الاستثمار الأجنبي",
        detail: "دخول السوق العراقية، إجازات الاستثمار، والشراكات مع جهات محلية.",
        forWhom: "الشركات الأجنبية والمستثمرون",
      },
      {
        id: "property",
        name: "العقارات والأملاك",
        detail: "نقل الملكية في التسجيل العقاري، عقود الإيجار، ونزاعات الأملاك والإزالة.",
        forWhom: "المالكون والمطوّرون والمستأجرون",
      },
      {
        id: "family",
        name: "الأحوال الشخصية",
        detail: "الزواج والطلاق والحضانة والنفقة، وتقسيم التركات وحجج الوفاة.",
        forWhom: "الأفراد والعائلات",
      },
      {
        id: "labor",
        name: "العمل والتوظيف",
        detail: "عقود العمل، الفصل التعسفي، والضمان الاجتماعي للعمال.",
        forWhom: "أصحاب العمل والموظفون",
      },
      {
        id: "litigation",
        name: "التقاضي والتحكيم",
        detail: "التمثيل أمام محاكم البداءة والاستئناف والتمييز، وإجراءات التحكيم التجاري.",
        forWhom: "كل موكّلينا",
      },
    ],
  },
  story: {
    title: "لماذا حمورابي؟",
    body: [
      "قبل نحو ثلاثة آلاف وسبعمئة سنة، نقش حمورابي قوانين بابل على مسلّة من حجر أسود حتى يقرأها الجميع. كانت من أقدم القوانين المكتوبة في العالم، وكُتبت هنا، على أرض العراق.",
      "أخذنا الاسم لأننا نؤمن بالفكرة نفسها: ما يُكتب يُحاسَب عليه. لذلك نكتب أتعابنا، ونكتب خطة القضية، ونكتب لك ما حدث فيها كل أسبوعين.",
    ],
    photoAlt: "مبنى تراثي من الطابوق بنوافذ مقوّسة على ضفة دجلة في بغداد",
    caption: "بغداد، حيث نعمل منذ ٢٠٠٩",
  },
  approach: {
    title: "طريقة عملنا",
    lead: "من أول اتصال حتى إغلاق الملف، تعرف أين وصلت قضيتك وكم ستكلّف.",
    steps: [
      { title: "اتصال أول مجاني", detail: "خمس عشرة دقيقة نسمع فيها مشكلتك ونخبرك إن كانت من اختصاصنا." },
      { title: "استشارة وتقييم", detail: "نراجع وثائقك ونشرح لك خياراتك القانونية وفرص كل خيار بصراحة." },
      { title: "اتفاق مكتوب", detail: "كتاب توكيل يحدد نطاق العمل والأتعاب وطريقة الدفع. لا نبدأ قبل توقيعك." },
      { title: "العمل والمتابعة", detail: "تقرير مكتوب كل أسبوعين، ومحامٍ واحد مسؤول عن ملفك تتصل به مباشرة." },
    ],
  },
  team: {
    title: "الشركاء",
    lead: "ثلاثة شركاء، كل واحد منهم مسؤول بنفسه عن ملفات مجاله.",
    items: [
      {
        name: "كريم الربيعي",
        photo: "karim",
        role: "الشريك المدير",
        focus: "الشركات والاستثمار الأجنبي",
        bar: "عضو نقابة المحامين العراقيين منذ ٢٠٠٦",
      },
      {
        name: "زينب الساعدي",
        photo: "zainab",
        role: "شريكة",
        focus: "الأحوال الشخصية والعقارات",
        bar: "عضو نقابة المحامين العراقيين منذ ٢٠١٠",
      },
      {
        name: "عمر حداد",
        photo: "omar",
        role: "شريك",
        focus: "التقاضي والتحكيم والعمل",
        bar: "عضو نقابة المحامين العراقيين منذ ٢٠١٢",
      },
    ],
  },
  office: {
    photoAlt: "برج حديث على ضفة نهر دجلة في بغداد",
    title: "مكتبنا على دجلة",
    address: "بناية ١٤، شارع عرصات الهندية، الكرادة، بغداد",
    hours: "الأحد – الخميس، ٩ صباحاً – ٥ مساءً",
    directions: "موقف سيارات خلف البناية، والمكتب في الطابق الثالث.",
  },
  faq: {
    title: "أسئلة شائعة",
    items: [
      {
        q: "كم تكلّف الاستشارة الأولى؟",
        a: "الاتصال الأول مجاني لمدة خمس عشرة دقيقة. الاستشارة المفصّلة في المكتب لها أجر ثابت نخبرك به قبل الموعد.",
      },
      {
        q: "كيف تُحسب الأتعاب؟",
        a: "حسب نوع القضية: أجر ثابت لأغلب العقود والمعاملات، وأتعاب على مراحل للقضايا أمام المحاكم. كل ذلك مكتوب في كتاب التوكيل.",
      },
      {
        q: "هل تتعاملون مع شركات أجنبية؟",
        a: "نعم. نعمل بالعربية والإنكليزية، ونرافق الشركات الأجنبية في التسجيل والإجازات والعقود مع الجهات العراقية.",
      },
      {
        q: "هل يمكن متابعة قضيتي من خارج العراق؟",
        a: "نعم، بوكالة مصدّقة. نرسل لك التقارير عبر البريد الإلكتروني أو واتساب، ونرتب مكالمات فيديو عند الحاجة.",
      },
      {
        q: "هل معلوماتي سرية؟",
        a: "كل ما تخبرنا به محمي بسرية المهنة، حتى لو لم توكّلنا في النهاية.",
      },
    ],
  },
  contact: {
    title: "اطلب استشارة",
    lead: "اكتب لنا باختصار ونتصل بك خلال يوم عمل واحد.",
    name: "الاسم الكامل",
    phone: "رقم الهاتف",
    phoneHint: "مثال: 07801234567",
    matter: "نوع القضية",
    matterPlaceholder: "اختر المجال",
    via: "كيف نتواصل معك؟",
    call: "اتصال",
    whatsapp: "واتساب",
    summary: "باختصار، ما الذي تحتاجه؟ (اختياري)",
    summaryHint: "لا تكتب تفاصيل حساسة هنا. نناقشها معك مباشرة.",
    submit: "أرسل طلب الاستشارة",
    errors: {
      name: "اكتب اسمك حتى نعرف كيف نخاطبك.",
      phone: "اكتب رقماً عراقياً من ١١ رقماً يبدأ بـ 07.",
      matter: "اختر نوع القضية.",
    },
    doneTitle: "تم استلام طلبك",
    doneBody: "في مكتب حقيقي، يتصل بك أحد المحامين خلال يوم عمل. هذا موقع تجريبي، لذا لم يُرسَل أي شيء.",
    again: "إرسال طلب آخر",
  },
  footer: {
    tagline: "محاماة واضحة ومكتوبة، للشركات والعائلات في بغداد.",
    officeTitle: "المكتب",
    contactTitle: "تواصل معنا",
    concept: "حمورابي للمحاماة مكتب خيالي. هذا الموقع مشروع تصميم وتطوير تجريبي، ولا يقدّم استشارة قانونية.",
    credit: "تصميم وتطوير مصطفى شاكر",
    photos: "الصور من Unsplash",
  },
};

const en: Content = {
  dir: "ltr",
  meta: {
    title: "Hammurabi Law — Baghdad",
    description:
      "A Baghdad law firm for companies and families: contracts, investment, property, family law, and court cases. Fees agreed in writing before we start.",
  },
  brand: "Hammurabi",
  brandLong: "Hammurabi Law",
  nav: { practice: "Practice areas", approach: "How we work", team: "Partners", faq: "FAQ", contact: "Request a consultation" },
  switchLabel: "العربية",
  menu: "Menu",
  close: "Close",
  skip: "Skip to content",
  hero: {
    title: "Law has been written down since Babylon. So are our promises to you.",
    lead: "A Baghdad law firm for companies and families. We handle contracts, investment, property, family law, and court cases, and we agree our fee with you in writing before we begin.",
    primary: "Request a consultation",
    secondary: "Call the office",
    photoAlt: "A lawyer reviewing a contract with a client in an office",
    promises: [
      "Your fee, agreed in writing before we start",
      "A written update on your case every two weeks",
      "Full confidentiality for every document",
    ],
  },
  practice: {
    title: "Practice areas",
    lead: "Six areas we work in every day, before Iraqi courts and government offices.",
    forLabel: "For",
    items: [
      {
        id: "corporate",
        name: "Companies and contracts",
        detail: "Company formation and registration, drafting and reviewing contracts, and disputes between partners.",
        forWhom: "Startups and established companies",
      },
      {
        id: "investment",
        name: "Foreign investment",
        detail: "Entering the Iraqi market, investment licenses, and partnerships with local entities.",
        forWhom: "Foreign companies and investors",
      },
      {
        id: "property",
        name: "Real estate and property",
        detail: "Title transfers at the property registry, leases, and property and eviction disputes.",
        forWhom: "Owners, developers, and tenants",
      },
      {
        id: "family",
        name: "Family and personal status",
        detail: "Marriage, divorce, custody, and maintenance, plus estates and inheritance certificates.",
        forWhom: "Individuals and families",
      },
      {
        id: "labor",
        name: "Employment",
        detail: "Employment contracts, unfair dismissal, and workers' social security.",
        forWhom: "Employers and employees",
      },
      {
        id: "litigation",
        name: "Litigation and arbitration",
        detail: "Representation before first-instance, appeal, and cassation courts, and in commercial arbitration.",
        forWhom: "All our clients",
      },
    ],
  },
  story: {
    title: "Why Hammurabi?",
    body: [
      "About 3,700 years ago, Hammurabi had the laws of Babylon carved into a black stone stele so everyone could read them. It is one of the oldest written legal codes in the world, and it was written here, in what is now Iraq.",
      "We took the name because we believe in the same idea: what is written can be held to account. So we write down our fee, we write down the plan for your case, and we write to you about its progress every two weeks.",
    ],
    photoAlt: "A heritage brick building with arched windows on the bank of the Tigris in Baghdad",
    caption: "Baghdad, where we have practiced since 2009",
  },
  approach: {
    title: "How we work",
    lead: "From the first call to closing the file, you know where your case stands and what it will cost.",
    steps: [
      { title: "A free first call", detail: "Fifteen minutes to hear your problem and tell you whether it's something we handle." },
      { title: "Consultation and assessment", detail: "We review your documents and explain your legal options, and the odds of each, honestly." },
      { title: "A written agreement", detail: "An engagement letter setting out the scope, the fee, and how you pay. We don't start until you sign." },
      { title: "Work and follow-up", detail: "A written update every two weeks, and one lawyer responsible for your file whom you can call directly." },
    ],
  },
  team: {
    title: "Partners",
    lead: "Three partners, each personally responsible for the files in their area.",
    items: [
      {
        name: "Karim Al-Rubaie",
        photo: "karim",
        role: "Managing partner",
        focus: "Companies and foreign investment",
        bar: "Member of the Iraqi Bar Association since 2006",
      },
      {
        name: "Zainab Al-Saadi",
        photo: "zainab",
        role: "Partner",
        focus: "Family law and property",
        bar: "Member of the Iraqi Bar Association since 2010",
      },
      {
        name: "Omar Haddad",
        photo: "omar",
        role: "Partner",
        focus: "Litigation, arbitration, and employment",
        bar: "Member of the Iraqi Bar Association since 2012",
      },
    ],
  },
  office: {
    photoAlt: "A modern tower on the bank of the Tigris in Baghdad",
    title: "Our office on the Tigris",
    address: "Building 14, Arasat Al-Hindiya Street, Karrada, Baghdad",
    hours: "Sunday – Thursday, 9 am – 5 pm",
    directions: "Parking behind the building. The office is on the third floor.",
  },
  faq: {
    title: "Common questions",
    items: [
      {
        q: "How much is the first consultation?",
        a: "The first 15-minute call is free. A detailed consultation at the office has a fixed fee, which we tell you before booking.",
      },
      {
        q: "How are fees calculated?",
        a: "It depends on the matter: a fixed fee for most contracts and transactions, and staged fees for court cases. All of it goes in the engagement letter.",
      },
      {
        q: "Do you work with foreign companies?",
        a: "Yes. We work in Arabic and English, and guide foreign companies through registration, licensing, and contracts with Iraqi entities.",
      },
      {
        q: "Can I follow my case from outside Iraq?",
        a: "Yes, with a certified power of attorney. We send updates by email or WhatsApp and arrange video calls when needed.",
      },
      {
        q: "Is what I tell you confidential?",
        a: "Everything you share is protected by professional confidentiality, even if you don't end up hiring us.",
      },
    ],
  },
  contact: {
    title: "Request a consultation",
    lead: "Tell us briefly what you need, and we'll call you within one working day.",
    name: "Full name",
    phone: "Phone number",
    phoneHint: "e.g. 07801234567",
    matter: "Type of matter",
    matterPlaceholder: "Choose an area",
    via: "How should we reach you?",
    call: "Phone call",
    whatsapp: "WhatsApp",
    summary: "Briefly, what do you need? (optional)",
    summaryHint: "Don't include sensitive details here. We'll discuss them with you directly.",
    submit: "Send consultation request",
    errors: {
      name: "Enter your name so we know who to ask for.",
      phone: "Enter an 11-digit Iraqi number starting with 07.",
      matter: "Choose the type of matter.",
    },
    doneTitle: "Consultation request received",
    doneBody: "At a real firm, a lawyer would call you within one working day. This is a concept site, so nothing was sent.",
    again: "Send another request",
  },
  footer: {
    tagline: "Clear, written legal work for companies and families in Baghdad.",
    officeTitle: "Office",
    contactTitle: "Contact",
    concept: "Hammurabi Law is a fictional firm. This site is a design and development concept and does not give legal advice.",
    credit: "Designed and built by Mustafa Shakir",
    photos: "Photos from Unsplash",
  },
};

export const content: Record<Locale, Content> = { ar, en };
