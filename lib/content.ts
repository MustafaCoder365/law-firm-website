export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export type PracticeArea = {
  id: string;
  name: string;
  detail: string;
  forWhom: string;
  matters: string[];
  intro: string;
  partner: PartnerPhoto;
  faqs: { q: string; a: string }[];
};
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
  topbar: { hours: string };
  hero: {
    title: string;
    photoCaption: string;
    lead: string;
    primary: string;
    secondary: string;
    photoAlt: string;
    scaleLabel: string;
    promises: string[];
  };
  practice: { title: string; lead: string; forLabel: string; mattersLabel: string; cta: string; more: string; items: PracticeArea[] };
  story: { title: string; body: string[]; photoAlt: string; caption: string; motto: string[] };
  approach: { title: string; lead: string; scaleLabel: string; steps: { title: string; detail: string }[] };
  estimator: {
    title: string;
    lead: string;
    matter: string;
    complexity: string;
    levels: { id: "simple" | "standard" | "complex"; label: string; hint: string }[];
    urgent: string;
    urgentHint: string;
    result: string;
    basis: string;
    fixed: string;
    staged: string;
    disclaimer: string;
    cta: string;
    currency: string;
    matters: { id: string; label: string; min: number; max: number; staged: boolean }[];
  };
  area: {
    back: string;
    overview: string;
    lead: string;
    partnerLabel: string;
    faqTitle: string;
    otherAreas: string;
    cta: string;
    ctaLead: string;
  };
  team: {
    title: string;
    lead: string;
    items: { name: string; photo: PartnerPhoto; role: string; focus: string; bar: string; bio: string; languages: string }[];
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
  topbar: { hours: "الأحد – الخميس، ٩ صباحاً – ٥ مساءً" },
  hero: {
    photoCaption: "كل قضية تبدأ بجلسة نقرأ فيها وثائقك معك، سطراً سطراً.",
    title: "منذ بابل والقانون يُكتب. ونحن نكتب التزامنا لك أيضاً",
    lead: "مكتب محاماة في بغداد للشركات والعائلات. نتولى العقود والاستثمار والعقارات والأحوال الشخصية والقضايا أمام المحاكم، ونتفق على الأتعاب كتابةً قبل أن نبدأ.",
    primary: "اطلب استشارة",
    secondary: "اتصل بالمكتب",
    photoAlt: "محامية تراجع عقداً مع موكّل في مكتب",
    scaleLabel: "ميزان عدالة من البرونز يدور ويتوازن مع التمرير",
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
    mattersLabel: "قضايا نتولاها كثيراً",
    cta: "ناقش قضيتك معنا",
    more: "تفاصيل هذا المجال",
    items: [
      {
        id: "corporate",
        name: "الشركات والعقود",
        detail: "تأسيس الشركات وتسجيلها، صياغة العقود ومراجعتها، ونزاعات الشركاء.",
        forWhom: "الشركات الناشئة والقائمة",
        matters: ["تأسيس شركة محدودة وتسجيلها لدى مسجّل الشركات", "عقود توريد وشراكة ووكالة تجارية", "خروج شريك أو نزاع على الأرباح"],
        intro: "تأسيس الشركة هو البداية فقط. نرافقك من اختيار نوع الشركة وتسجيلها لدى مسجّل الشركات، إلى صياغة العقود التي تحكم علاقتك بالشركاء والموردين والعملاء، وحتى حل النزاعات حين تقع. هدفنا أن تكون عقودك واضحة بما يكفي لتمنع النزاع قبل أن يبدأ.",
        partner: "karim",
        faqs: [
          { q: "كم يستغرق تسجيل شركة محدودة؟", a: "عادة من أسبوعين إلى ستة أسابيع، حسب اكتمال الوثائق ونوع النشاط. نعطيك جدولاً زمنياً مكتوباً في البداية." },
          { q: "هل تراجعون عقداً كتبه طرف آخر؟", a: "نعم. نراجعه ونشير إلى البنود التي تضرّك أو الغامضة، ونقترح صياغة بديلة تفاوض عليها." },
        ],
      },
      {
        id: "investment",
        name: "الاستثمار الأجنبي",
        detail: "دخول السوق العراقية، إجازات الاستثمار، والشراكات مع جهات محلية.",
        forWhom: "الشركات الأجنبية والمستثمرون",
        matters: ["طلب إجازة استثمار لدى هيئة الاستثمار", "تسجيل فرع لشركة أجنبية", "عقود مع شريك أو وكيل محلي"],
        intro: "الاستثمار في العراق ممكن ومجزٍ، لكنه يحتاج من يعرف الطريق. نساعد الشركات الأجنبية في الحصول على إجازة الاستثمار، وتسجيل الفرع، واختيار الشريك المحلي المناسب، وصياغة العقود معه بما يحمي حقوقك.",
        partner: "karim",
        faqs: [
          { q: "هل تحتاج الشركة الأجنبية شريكاً عراقياً؟", a: "يعتمد ذلك على القطاع وشكل التسجيل. نشرح لك الخيارات المتاحة لنشاطك تحديداً في الاستشارة الأولى." },
          { q: "هل تعملون مع شركات من خارج المنطقة العربية؟", a: "نعم، ونعمل بالإنكليزية في كل المراسلات والعقود الثنائية اللغة." },
        ],
      },
      {
        id: "property",
        name: "العقارات والأملاك",
        detail: "نقل الملكية في التسجيل العقاري، عقود الإيجار، ونزاعات الأملاك والإزالة.",
        forWhom: "المالكون والمطوّرون والمستأجرون",
        matters: ["نقل ملكية عقار في التسجيل العقاري", "صياغة عقد إيجار سكني أو تجاري", "دعوى تخلية أو إزالة شيوع"],
        intro: "العقار أكبر ما يملكه أغلب الناس، والخطأ فيه مكلف. نتولى نقل الملكية في دوائر التسجيل العقاري، ونتحقق من سلامة السند قبل الشراء، ونصوغ عقود الإيجار، ونترافع في دعاوى التخلية وإزالة الشيوع.",
        partner: "zainab",
        faqs: [
          { q: "ماذا تتحققون منه قبل شراء عقار؟", a: "نراجع السند في التسجيل العقاري، والحجوزات والرهون، وصحة وكالة البائع إن وُجدت، ومطابقة المساحة والموقع." },
          { q: "هل يمكن نقل الملكية وأنا خارج العراق؟", a: "نعم، بوكالة مصدّقة من القنصلية العراقية في بلدك. نرسل لك نص الوكالة المطلوب." },
        ],
      },
      {
        id: "family",
        name: "الأحوال الشخصية",
        detail: "الزواج والطلاق والحضانة والنفقة، وتقسيم التركات وحجج الوفاة.",
        forWhom: "الأفراد والعائلات",
        matters: ["عقد الزواج وتصديقه", "الحضانة والمشاهدة والنفقة", "حجة الوفاة والقسام الشرعي"],
        intro: "قضايا العائلة حساسة وشخصية. نتعامل معها بهدوء وسرية، ونبحث دائماً عن الحل بالتراضي أولاً لأنه أسرع وأقل ألماً. وحين يلزم الذهاب إلى محكمة الأحوال الشخصية، نمثّلك بكل حزم.",
        partner: "zainab",
        faqs: [
          { q: "هل يمكن أن تبقى قضيتي سرية؟", a: "نعم. كل ما تخبرنا به محمي بسرية المهنة، وجلسات الأحوال الشخصية لا تُعلن تفاصيلها." },
          { q: "كم تستغرق قضية الحضانة؟", a: "تختلف كثيراً، لكن أغلبها يحسم خلال ثلاثة إلى ستة أشهر. نخبرك بتقدير واقعي بعد مراجعة وضعك." },
        ],
      },
      {
        id: "labor",
        name: "العمل والتوظيف",
        detail: "عقود العمل، الفصل التعسفي، والضمان الاجتماعي للعمال.",
        forWhom: "أصحاب العمل والموظفون",
        matters: ["عقود عمل للموظفين والمدراء", "تعويض عن فصل تعسفي", "تسجيل العمال في الضمان الاجتماعي"],
        intro: "علاقة العمل الواضحة تحمي صاحب العمل والموظف معاً. نصوغ عقود العمل وأنظمة الشركة الداخلية، ونمثّل الطرفين في نزاعات الفصل والأجور والتعويضات، ونساعد في تسجيل العمال في الضمان الاجتماعي.",
        partner: "omar",
        faqs: [
          { q: "هل تمثّلون الموظفين أم أصحاب العمل؟", a: "الاثنين، لكن ليس في نفس القضية. نتحقق من تعارض المصالح قبل قبول أي ملف." },
          { q: "فُصلت من عملي، ماذا أفعل أولاً؟", a: "احتفظ بكل الوثائق: العقد، كتاب الفصل، وكشوف الرواتب. ثم اتصل بنا سريعاً لأن بعض الطعون لها مدد قانونية قصيرة." },
        ],
      },
      {
        id: "litigation",
        name: "التقاضي والتحكيم",
        detail: "التمثيل أمام محاكم البداءة والاستئناف والتمييز، وإجراءات التحكيم التجاري.",
        forWhom: "كل موكّلينا",
        matters: ["دعاوى الديون والعقود أمام البداءة", "الطعن أمام الاستئناف والتمييز", "التحكيم في النزاعات التجارية"],
        intro: "حين يصل النزاع إلى المحكمة، تحتاج من يعرف القاعة جيداً. نترافع أمام محاكم البداءة والاستئناف والتمييز، ونمثّل الشركات في التحكيم التجاري، ونبدأ دائماً بتقييم صريح لفرصك وكلفة كل طريق.",
        partner: "omar",
        faqs: [
          { q: "هل تنصحونني دائماً بالذهاب إلى المحكمة؟", a: "لا. نخبرك بصراحة إن كانت التسوية أفضل لك من حيث الوقت والكلفة والنتيجة المتوقعة." },
          { q: "كم تستغرق الدعوى أمام محكمة البداءة؟", a: "غالباً من ستة أشهر إلى سنة، وقد تطول مع الاستئناف والتمييز. نحدّثك كتابةً عند كل جلسة." },
        ],
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
    motto: ["ما يُكتب", "يُحاسَب عليه"],
  },
  approach: {
    title: "نزن كل قضية قبل أن نبدأ",
    lead: "من أول اتصال حتى إغلاق الملف، تعرف أين وصلت قضيتك وكم ستكلّف.",
    scaleLabel: "ميزان يميل مع كل خطوة ويتوازن في النهاية",
    steps: [
      { title: "اتصال أول مجاني", detail: "خمس عشرة دقيقة نسمع فيها مشكلتك ونخبرك إن كانت من اختصاصنا." },
      { title: "استشارة وتقييم", detail: "نراجع وثائقك ونشرح لك خياراتك القانونية وفرص كل خيار بصراحة." },
      { title: "اتفاق مكتوب", detail: "كتاب توكيل يحدد نطاق العمل والأتعاب وطريقة الدفع. لا نبدأ قبل توقيعك." },
      { title: "العمل والمتابعة", detail: "تقرير مكتوب كل أسبوعين، ومحامٍ واحد مسؤول عن ملفك تتصل به مباشرة." },
    ],
  },
  estimator: {
    title: "تقدير الأتعاب",
    lead: "اختر نوع القضية ودرجة تعقيدها لترى نطاقاً تقريبياً قبل أن تتصل بنا.",
    matter: "نوع القضية",
    complexity: "درجة التعقيد",
    levels: [
      { id: "simple", label: "بسيطة", hint: "وثائق كاملة وطرف واحد" },
      { id: "standard", label: "متوسطة", hint: "مفاوضات أو أكثر من طرف" },
      { id: "complex", label: "معقدة", hint: "نزاع قائم أو جهات متعددة" },
    ],
    urgent: "مستعجلة",
    urgentHint: "نبدأ خلال ٤٨ ساعة",
    result: "الأتعاب التقديرية",
    basis: "طريقة الدفع",
    fixed: "أجر ثابت",
    staged: "على مراحل",
    disclaimer: "أرقام توضيحية لموقع تجريبي. في مكتب حقيقي، تُحدَّد الأتعاب بعد الاستشارة وتُكتب في كتاب التوكيل.",
    cta: "اطلب استشارة لتقدير دقيق",
    currency: "د.ع",
    matters: [
      { id: "contract", label: "صياغة عقد أو مراجعته", min: 250000, max: 750000, staged: false },
      { id: "company", label: "تأسيس شركة", min: 1500000, max: 3000000, staged: false },
      { id: "investment", label: "إجازة استثمار", min: 4000000, max: 10000000, staged: true },
      { id: "property", label: "نقل ملكية عقار", min: 500000, max: 1500000, staged: false },
      { id: "family", label: "قضية أحوال شخصية", min: 1000000, max: 3000000, staged: true },
      { id: "labor", label: "نزاع عمل", min: 750000, max: 2000000, staged: true },
      { id: "court", label: "دعوى أمام المحكمة", min: 2500000, max: 8000000, staged: true },
    ],
  },
  area: {
    back: "كل مجالات العمل",
    overview: "نظرة عامة",
    lead: "مجال عمل",
    partnerLabel: "الشريك المسؤول",
    faqTitle: "أسئلة عن هذا المجال",
    otherAreas: "مجالات أخرى",
    cta: "اطلب استشارة",
    ctaLead: "الاتصال الأول مجاني، ونرد خلال يوم عمل واحد.",
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
        bio: "رافق أكثر من أربعين شركة أجنبية في دخولها السوق العراقية، من الإجازة حتى أول عقد.",
        languages: "العربية، الإنكليزية",
      },
      {
        name: "زينب الساعدي",
        photo: "zainab",
        role: "شريكة",
        focus: "الأحوال الشخصية والعقارات",
        bar: "عضو نقابة المحامين العراقيين منذ ٢٠١٠",
        bio: "تتولى قضايا العائلات بهدوء وسرية، وتفضّل الحل بالتراضي قبل الذهاب للمحكمة.",
        languages: "العربية، الإنكليزية",
      },
      {
        name: "عمر حداد",
        photo: "omar",
        role: "شريك",
        focus: "التقاضي والتحكيم والعمل",
        bar: "عضو نقابة المحامين العراقيين منذ ٢٠١٢",
        bio: "يترافع أمام محاكم البداءة والاستئناف والتمييز، ويمثّل الشركات في التحكيم التجاري.",
        languages: "العربية، الإنكليزية، الكردية",
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
  topbar: { hours: "Sunday – Thursday, 9 am – 5 pm" },
  hero: {
    photoCaption: "Every case starts with a meeting where we read your documents with you, line by line.",
    title: "Law has been written down since Babylon. So are our promises to you.",
    lead: "A Baghdad law firm for companies and families. We handle contracts, investment, property, family law, and court cases, and we agree our fee with you in writing before we begin.",
    primary: "Request a consultation",
    secondary: "Call the office",
    photoAlt: "A lawyer reviewing a contract with a client in an office",
    scaleLabel: "A bronze scale of justice that turns and comes into balance as you scroll",
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
    mattersLabel: "Matters we often handle",
    cta: "Discuss your case with us",
    more: "More about this area",
    items: [
      {
        id: "corporate",
        name: "Companies and contracts",
        detail: "Company formation and registration, drafting and reviewing contracts, and disputes between partners.",
        forWhom: "Startups and established companies",
        matters: ["Forming and registering a limited company", "Supply, partnership, and commercial agency agreements", "A partner leaving, or a dispute over profits"],
        intro: "Forming a company is only the start. We guide you from choosing the right company type and registering it with the Companies Registrar, to drafting the contracts that govern your relationships with partners, suppliers, and customers, and resolving disputes when they arise. Our aim is contracts clear enough to prevent disputes before they start.",
        partner: "karim",
        faqs: [
          { q: "How long does it take to register a limited company?", a: "Usually two to six weeks, depending on your documents and the type of business. We give you a written timeline at the start." },
          { q: "Will you review a contract the other side wrote?", a: "Yes. We review it, flag clauses that hurt you or are unclear, and suggest alternative wording you can negotiate." },
        ],
      },
      {
        id: "investment",
        name: "Foreign investment",
        detail: "Entering the Iraqi market, investment licenses, and partnerships with local entities.",
        forWhom: "Foreign companies and investors",
        matters: ["Applying for an investment license", "Registering a branch of a foreign company", "Contracts with a local partner or agent"],
        intro: "Investing in Iraq is possible and rewarding, but it takes someone who knows the way. We help foreign companies obtain investment licenses, register branches, choose the right local partner, and draft contracts that protect their rights.",
        partner: "karim",
        faqs: [
          { q: "Does a foreign company need an Iraqi partner?", a: "It depends on the sector and the form of registration. We explain the options for your specific activity in the first consultation." },
          { q: "Do you work with companies from outside the Arab region?", a: "Yes, and we work in English for all correspondence and bilingual contracts." },
        ],
      },
      {
        id: "property",
        name: "Real estate and property",
        detail: "Title transfers at the property registry, leases, and property and eviction disputes.",
        forWhom: "Owners, developers, and tenants",
        matters: ["Transferring title at the property registry", "Drafting a residential or commercial lease", "Eviction and co-ownership partition cases"],
        intro: "Property is the largest thing most people own, and mistakes are costly. We handle title transfers at the property registry, check the deed before you buy, draft leases, and represent clients in eviction and co-ownership cases.",
        partner: "zainab",
        faqs: [
          { q: "What do you check before a property purchase?", a: "The deed at the property registry, any liens or mortgages, the validity of the seller’s power of attorney if there is one, and that the area and location match." },
          { q: "Can I transfer property while outside Iraq?", a: "Yes, with a power of attorney certified by the Iraqi consulate in your country. We send you the exact wording required." },
        ],
      },
      {
        id: "family",
        name: "Family and personal status",
        detail: "Marriage, divorce, custody, and maintenance, plus estates and inheritance certificates.",
        forWhom: "Individuals and families",
        matters: ["Drafting and certifying a marriage contract", "Custody, visitation, and maintenance", "Death and inheritance certificates"],
        intro: "Family matters are sensitive and personal. We handle them calmly and confidentially, and always look for an agreed settlement first, because it is faster and less painful. When the personal status court is needed, we represent you firmly.",
        partner: "zainab",
        faqs: [
          { q: "Can my case stay confidential?", a: "Yes. Everything you tell us is protected by professional confidentiality, and personal status hearings are not made public." },
          { q: "How long does a custody case take?", a: "It varies a lot, but most are decided within three to six months. We give you a realistic estimate once we’ve reviewed your situation." },
        ],
      },
      {
        id: "labor",
        name: "Employment",
        detail: "Employment contracts, unfair dismissal, and workers' social security.",
        forWhom: "Employers and employees",
        matters: ["Employment contracts for staff and executives", "Compensation for unfair dismissal", "Registering workers for social security"],
        intro: "A clear employment relationship protects both employer and employee. We draft employment contracts and internal policies, represent both sides in dismissal, wage, and compensation disputes, and help register workers for social security.",
        partner: "omar",
        faqs: [
          { q: "Do you represent employees or employers?", a: "Both, but never in the same case. We check for conflicts of interest before taking any file." },
          { q: "I was dismissed. What should I do first?", a: "Keep every document: your contract, the dismissal letter, and payslips. Then call us quickly, as some challenges have short legal deadlines." },
        ],
      },
      {
        id: "litigation",
        name: "Litigation and arbitration",
        detail: "Representation before first-instance, appeal, and cassation courts, and in commercial arbitration.",
        forWhom: "All our clients",
        matters: ["Debt and contract claims at first instance", "Appeals and cassation challenges", "Arbitration of commercial disputes"],
        intro: "When a dispute reaches court, you need someone who knows the courtroom well. We argue before first-instance, appeal, and cassation courts, represent companies in commercial arbitration, and always start with an honest assessment of your chances and the cost of each route.",
        partner: "omar",
        faqs: [
          { q: "Will you always advise going to court?", a: "No. We tell you plainly when a settlement is better for you in time, cost, and likely outcome." },
          { q: "How long does a first-instance case take?", a: "Often six months to a year, and longer with appeal and cassation. We update you in writing after every hearing." },
        ],
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
    motto: ["What is written", "can be held to account"],
  },
  approach: {
    title: "We weigh every case before we start",
    lead: "From the first call to closing the file, you know where your case stands and what it will cost.",
    scaleLabel: "A scale that tips with each step and balances at the end",
    steps: [
      { title: "A free first call", detail: "Fifteen minutes to hear your problem and tell you whether it's something we handle." },
      { title: "Consultation and assessment", detail: "We review your documents and explain your legal options, and the odds of each, honestly." },
      { title: "A written agreement", detail: "An engagement letter setting out the scope, the fee, and how you pay. We don't start until you sign." },
      { title: "Work and follow-up", detail: "A written update every two weeks, and one lawyer responsible for your file whom you can call directly." },
    ],
  },
  estimator: {
    title: "Fee estimate",
    lead: "Choose the type of matter and how complex it is to see a rough range before you call us.",
    matter: "Type of matter",
    complexity: "Complexity",
    levels: [
      { id: "simple", label: "Simple", hint: "Complete documents, one party" },
      { id: "standard", label: "Standard", hint: "Negotiation or several parties" },
      { id: "complex", label: "Complex", hint: "An active dispute or many parties" },
    ],
    urgent: "Urgent",
    urgentHint: "We start within 48 hours",
    result: "Estimated fee",
    basis: "Payment",
    fixed: "Fixed fee",
    staged: "In stages",
    disclaimer: "Sample figures for a concept site. At a real firm, the fee is set after the consultation and written into the engagement letter.",
    cta: "Request a consultation for an exact quote",
    currency: "IQD",
    matters: [
      { id: "contract", label: "Drafting or reviewing a contract", min: 250000, max: 750000, staged: false },
      { id: "company", label: "Forming a company", min: 1500000, max: 3000000, staged: false },
      { id: "investment", label: "Investment license", min: 4000000, max: 10000000, staged: true },
      { id: "property", label: "Property title transfer", min: 500000, max: 1500000, staged: false },
      { id: "family", label: "Family law case", min: 1000000, max: 3000000, staged: true },
      { id: "labor", label: "Employment dispute", min: 750000, max: 2000000, staged: true },
      { id: "court", label: "Court case", min: 2500000, max: 8000000, staged: true },
    ],
  },
  area: {
    back: "All practice areas",
    overview: "Overview",
    lead: "Practice area",
    partnerLabel: "Responsible partner",
    faqTitle: "Questions about this area",
    otherAreas: "Other areas",
    cta: "Request a consultation",
    ctaLead: "The first call is free, and we reply within one working day.",
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
        bio: "Has guided more than forty foreign companies into the Iraqi market, from license to first contract.",
        languages: "Arabic, English",
      },
      {
        name: "Zainab Al-Saadi",
        photo: "zainab",
        role: "Partner",
        focus: "Family law and property",
        bar: "Member of the Iraqi Bar Association since 2010",
        bio: "Handles family matters calmly and confidentially, and prefers a settlement before going to court.",
        languages: "Arabic, English",
      },
      {
        name: "Omar Haddad",
        photo: "omar",
        role: "Partner",
        focus: "Litigation, arbitration, and employment",
        bar: "Member of the Iraqi Bar Association since 2012",
        bio: "Argues before first-instance, appeal, and cassation courts, and represents companies in commercial arbitration.",
        languages: "Arabic, English, Kurdish",
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
