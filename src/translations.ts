// src/translations.ts

export type Lang = "en" | "es" | "ar" | "zh" | "ru" | "fr" | "pt";

export const languages: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "es", label: "Spanish", native: "Español" },
  { code: "ar", label: "Arabic", native: "العربية" },
  { code: "zh", label: "Chinese", native: "中文" },
  { code: "ru", label: "Russian", native: "Русский" },
  { code: "fr", label: "French", native: "Français" },
  { code: "pt", label: "Portuguese", native: "Português" },
];

type SectionCopy = {
  nav: {
    home: string;
    philosophy: string;
    products: string;
    tanks: string;
    team: string;
    customers: string;
    vision: string;
    careers: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    quote: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  philosophy: {
    title: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    valuesTitle: string;
    valuesText: string;
  };
  products: {
    title: string;
    subtitle: string;
    groups: {
      name: string;
      items: string[];
    }[];
  };
  tanks: {
    title: string;
    text: string;
  };
  customers: {
    title: string;
    subtitle: string;
    segments: string[];
  };
  future: {
    title: string;
    bullets: string[];
  };
  careers: {
    title: string;
    intro: string;
    perks: string[];
  };
  contact: {
    title: string;
    addressTitle: string;
    address: string[];
    phoneLabel: string;
    emailLabel: string;
    formTitle: string;
    formSubtitle: string;
    formName: string;
    formEmail: string;
    formCompany: string;
    formMessage: string;
    formSubmit: string;
  };
};

export const copy: Record<Lang, SectionCopy> = {
  en: {
    nav: {
      home: "Home",
      philosophy: "Philosophy",
      products: "Products",
      tanks: "Tanks",
      team: "Team",
      customers: "Customers",
      vision: "Future Plans",
      careers: "Careers",
      contact: "Contact",
    },
    hero: {
      title: "Larankha Oil & Gas Trading – From Dubai to the World",
      subtitle:
        "Delivering excellence in oil and gas. We power industries with innovative, sustainable and efficient energy solutions from the heart of Dubai.",
      quote: '"Selling energy, fuelling the future." – Riad Belatreche, Founder & CEO',
      ctaPrimary: "Talk to our team",
      ctaSecondary: "Download company profile",
    },
    philosophy: {
      title: "Our Philosophy",
      missionTitle: "Mission",
      missionText:
        "To provide reliable, sustainable and innovative energy solutions, ensuring efficiency, environmental responsibility and long-term value for industries and communities worldwide.",
      visionTitle: "Vision",
      visionText:
        "To be a global leader in the oil and gas industry, driving innovation, sustainability and energy excellence while contributing to a more efficient and responsible future.",
      valuesTitle: "Values & Principles",
      valuesText:
        "Integrity, innovation, sustainability, excellence and safety are at the heart of Larankha. We operate with transparency and accountability while constantly improving performance and protecting people, partners and the environment.",
    },
    products: {
      title: "Key Products",
      subtitle: "Fueling industries with quality and reliability.",
      groups: [
        {
          name: "Middle Distillates",
          items: ["Diesel 10 ppm", "Diesel 50 ppm", "Diesel 500 ppm", "Automotive Gas Oil"],
        },
        {
          name: "Light Ends",
          items: [
            "Gasoline 87 / 89 / 92 / 93 / 95 Octanes",
            "Jet Fuel A1",
            "Jet Fuel JP54",
          ],
        },
        {
          name: "Base Oils & Crude",
          items: ["Base Oil SN150", "Base Oil SN500", "Crude Oil blends"],
        },
        {
          name: "Gas & Heavy Fuels",
          items: [
            "Liquefied Natural Gas (LNG)",
            "Liquefied Petroleum Gas (LPG)",
            "Mazut M100 (Gost 10585-75 / 10585-99)",
            "CST Fuel Oil 180 / 380",
            "Virgin D6 Oil",
            "Urea 46% Nitrogen",
          ],
        },
      ],
    },
    tanks: {
      title: "Global Tanks & Storage",
      text:
        "Larankha operates a global network of strategically located storage tanks with advanced monitoring and control technologies. Our capacity and locations ensure safe, efficient and reliable distribution to key markets around the world.",
    },
    customers: {
      title: "Customers & Partners",
      subtitle: "Serving global energy needs across multiple sectors.",
      segments: [
        "International oil & gas companies",
        "Energy distributors and traders",
        "Trading companies & brokers",
        "Airlines & aviation fuel buyers",
        "Shipping & marine fuel operators",
        "Governments & public agencies",
        "Industrial & manufacturing clients",
      ],
    },
    future: {
      title: "Future Plans & Strategic Vision",
      bullets: [
        "Leadership in sustainable and low-carbon energy solutions.",
        "Expansion of our presence in key emerging markets and logistics hubs.",
        "Investment in digitalisation and cutting-edge monitoring technologies.",
        "Stronger ESG and compliance frameworks across all operations.",
      ],
    },
    careers: {
      title: "Careers at Larankha",
      intro:
        "Our people are the driving force behind our success. Join a dynamic, international team shaping the future of the energy sector from Dubai.",
      perks: [
        "Dynamic work environment in the global energy industry.",
        "Career growth, leadership and technical development.",
        "Competitive compensation and performance-based benefits.",
        "Global exposure with partners and clients worldwide.",
      ],
    },
    contact: {
      title: "Contact & Headquarters",
      addressTitle: "Registered office – Dubai, UAE",
      address: [
        "Office 3004, Boulevard Plaza",
        "Tower 1, Downtown Dubai",
        "Dubai, United Arab Emirates",
      ],
      phoneLabel: "Phone",
      emailLabel: "Email",
      formTitle: "Send us a message",
      formSubtitle:
        "Share your requirements and our commercial team will contact you shortly.",
      formName: "Full name",
      formEmail: "Corporate email",
      formCompany: "Company",
      formMessage: "How can we support your energy needs?",
      formSubmit: "Submit inquiry",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      philosophy: "Filosofía",
      products: "Productos",
      tanks: "Tanques",
      team: "Equipo",
      customers: "Clientes",
      vision: "Plan Futuro",
      careers: "Carreras",
      contact: "Contacto",
    },
    hero: {
      title: "Larankha Oil & Gas Trading – Desde Dubái para el mundo",
      subtitle:
        "Llevamos excelencia en petróleo y gas. Impulsamos industrias con soluciones energéticas innovadoras, sostenibles y eficientes desde el corazón de Dubái.",
      quote: '"Vendiendo energía, impulsando el futuro". – Riad Belatreche, Fundador & CEO',
      ctaPrimary: "Hablar con nuestro equipo",
      ctaSecondary: "Descargar perfil corporativo",
    },
    philosophy: {
      title: "Nuestra Filosofía",
      missionTitle: "Misión",
      missionText:
        "Proveer soluciones energéticas confiables, sostenibles e innovadoras, garantizando eficiencia, responsabilidad ambiental y valor a largo plazo para industrias y comunidades en todo el mundo.",
      visionTitle: "Visión",
      visionText:
        "Ser un líder global en la industria de petróleo y gas, impulsando la innovación, la sostenibilidad y la excelencia energética, contribuyendo a un futuro más eficiente y responsable.",
      valuesTitle: "Valores y Principios",
      valuesText:
        "Integridad, innovación, sostenibilidad, excelencia y seguridad están en el centro de Larankha. Operamos con transparencia y responsabilidad, mejorando constantemente el desempeño y protegiendo a las personas, los socios y el medio ambiente.",
    },
    products: {
      title: "Productos Clave",
      subtitle: "Abasteciendo industrias con calidad y confiabilidad.",
      groups: [
        {
          name: "Destilados medios",
          items: ["Diésel 10 ppm", "Diésel 50 ppm", "Diésel 500 ppm", "Automotive Gas Oil"],
        },
        {
          name: "Productos ligeros",
          items: [
            "Gasolina 87 / 89 / 92 / 93 / 95 octanos",
            "Jet Fuel A1",
            "Jet Fuel JP54",
          ],
        },
        {
          name: "Aceites base y crudo",
          items: ["Aceite base SN150", "Aceite base SN500", "Petróleo crudo"],
        },
        {
          name: "Gas y fuelóleos pesados",
          items: [
            "Gas Natural Licuado (LNG)",
            "Gas Licuado de Petróleo (LPG)",
            "Mazut M100 (Gost 10585-75 / 10585-99)",
            "Fuel Oil CST 180 / 380",
            "Aceite virgen D6",
            "Urea 46% nitrógeno",
          ],
        },
      ],
    },
    tanks: {
      title: "Red Global de Tanques",
      text:
        "Larankha opera una red global de tanques de almacenamiento estratégicamente ubicados con tecnologías avanzadas de monitoreo y control. Nuestra capacidad y localizaciones garantizan una distribución segura, eficiente y confiable a los mercados clave del mundo.",
    },
    customers: {
      title: "Clientes y Socios",
      subtitle: "Atendemos las necesidades energéticas globales en múltiples sectores.",
      segments: [
        "Compañías internacionales de petróleo y gas",
        "Distribuidores y traders de energía",
        "Empresas de trading y brókers",
        "Líneas aéreas y compradores de combustible de aviación",
        "Navieras y operadores de combustible marino",
        "Gobiernos y entidades públicas",
        "Clientes industriales y de manufactura",
      ],
    },
    future: {
      title: "Plan Futuro y Visión Estratégica",
      bullets: [
        "Liderazgo en soluciones energéticas sostenibles y de baja huella de carbono.",
        "Expansión en mercados emergentes y hubs logísticos clave.",
        "Inversión en digitalización y tecnologías de monitoreo de última generación.",
        "Refuerzo de los marcos ESG y de cumplimiento en todas las operaciones.",
      ],
    },
    careers: {
      title: "Carreras en Larankha",
      intro:
        "Nuestra gente es la fuerza que impulsa nuestro éxito. Únete a un equipo internacional y dinámico que está dando forma al futuro del sector energético desde Dubái.",
      perks: [
        "Entorno de trabajo dinámico en la industria energética global.",
        "Crecimiento profesional, liderazgo y desarrollo técnico.",
        "Compensación competitiva y beneficios ligados al desempeño.",
        "Exposición global con socios y clientes en todo el mundo.",
      ],
    },
    contact: {
      title: "Contacto y Sede",
      addressTitle: "Oficina registrada – Dubái, EAU",
      address: [
        "Oficina 3004, Boulevard Plaza",
        "Torre 1, Downtown Dubai",
        "Dubái, Emiratos Árabes Unidos",
      ],
      phoneLabel: "Teléfono",
      emailLabel: "Correo",
      formTitle: "Envíanos un mensaje",
      formSubtitle:
        "Comparte tus requerimientos y nuestro equipo comercial se pondrá en contacto contigo.",
      formName: "Nombre completo",
      formEmail: "Correo corporativo",
      formCompany: "Empresa",
      formMessage: "¿Cómo podemos apoyar tus necesidades energéticas?",
      formSubmit: "Enviar consulta",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      philosophy: "فلسفتنا",
      products: "المنتجات",
      tanks: "الخزانات",
      team: "الفريق",
      customers: "العملاء",
      vision: "خطط المستقبل",
      careers: "الوظائف",
      contact: "اتصل بنا",
    },
    hero: {
      title: "لارنخا لتجارة النفط والغاز – من دبي إلى العالم",
      subtitle:
        "نقدّم حلولاً للطاقة تتميز بالابتكار والاستدامة والكفاءة من قلب دبي لخدمة الصناعات حول العالم.",
      quote: "«نبيع الطاقة لنغذي المستقبل» – رياض بلطرش، المؤسس والرئيس التنفيذي",
      ctaPrimary: "تواصل مع فريقنا",
      ctaSecondary: "تحميل الملف التعريفي للشركة",
    },
    philosophy: {
      title: "فلسفتنا",
      missionTitle: "رسالتنا",
      missionText:
        "تقديم حلول طاقة موثوقة ومستدامة ومبتكرة مع ضمان الكفاءة والمسؤولية البيئية والقيمة طويلة الأجل للصناعات والمجتمعات في جميع أنحاء العالم.",
      visionTitle: "رؤيتنا",
      visionText:
        "أن نكون شركة رائدة عالميًا في قطاع النفط والغاز، تقود الابتكار والاستدامة والتميز في الطاقة وتسهم في مستقبل أكثر مسؤولية وكفاءة.",
      valuesTitle: "القيم والمبادئ",
      valuesText:
        "النزاهة والابتكار والاستدامة والتميز والسلامة هي جوهر عمل لارنخا. نعمل بشفافية ومسؤولية مع تحسين الأداء بشكل مستمر وحماية الأشخاص والشركاء والبيئة.",
    },
    products: {
      title: "المنتجات الرئيسية",
      subtitle: "نوفر الوقود للصناعات بجودة وموثوقية عالية.",
      groups: [
        {
          name: "المنتجات المتوسطة",
          items: ["ديزل 10 جزء بالمليون", "ديزل 50 جزء بالمليون", "ديزل 500 جزء بالمليون", "وقود سيارات ديزل"],
        },
        {
          name: "المنتجات الخفيفة",
          items: [
            "بنزين 87 / 89 / 92 / 93 / 95 أوكتان",
            "وقود طائرات Jet A1",
            "وقود طائرات JP54",
          ],
        },
        {
          name: "الزيوت الأساسية والنفط الخام",
          items: ["زيت أساس SN150", "زيت أساس SN500", "النفط الخام"],
        },
        {
          name: "الغاز والوقود الثقيل",
          items: [
            "الغاز الطبيعي المسال (LNG)",
            "غاز البترول المسال (LPG)",
            "مازوت M100 (معيار Gost)",
            "زيت الوقود CST 180 / 380",
            "زيت D6 البكر",
            "اليوريا 46٪ نيتروجين",
          ],
        },
      ],
    },
    tanks: {
      title: "شبكة التخزين العالمية",
      text:
        "تشغّل لارنخا شبكة عالمية من خزانات التخزين في مواقع استراتيجية مع أنظمة مراقبة وتحكم متقدمة، مما يضمن توزيعًا آمنًا وفعالاً وموثوقًا إلى الأسواق الرئيسية حول العالم.",
    },
    customers: {
      title: "العملاء والشركاء",
      subtitle: "نلبي احتياجات الطاقة العالمية في عدة قطاعات.",
      segments: [
        "شركات النفط والغاز الدولية",
        "موزعو الطاقة والمتداولون",
        "شركات التجارة والوسطاء",
        "شركات الطيران ومشترو وقود الطائرات",
        "شركات الشحن والوقود البحري",
        "الحكومات والجهات العامة",
        "العملاء الصناعيون وشركات التصنيع",
      ],
    },
    future: {
      title: "خطط المستقبل والرؤية الإستراتيجية",
      bullets: [
        "الريادة في حلول الطاقة المستدامة منخفضة الانبعاثات.",
        "التوسع في الأسواق الناشئة ومراكز الخدمات اللوجستية العالمية.",
        "الاستثمار في الرقمنة وتقنيات المراقبة المتقدمة.",
        "تعزيز أطر الحوكمة البيئية والاجتماعية والحوكمة (ESG) والامتثال.",
      ],
    },
    careers: {
      title: "العمل في لارنخا",
      intro:
        "موظفونا هم المحرك الأساسي لنجاحنا. انضم إلى فريق دولي ديناميكي يساهم في تشكيل مستقبل قطاع الطاقة انطلاقًا من دبي.",
      perks: [
        "بيئة عمل ديناميكية في صناعة الطاقة العالمية.",
        "نمو مهني وفرص للقيادة والتطوير الفني.",
        "حزم تعويضات ومزايا تنافسية قائمة على الأداء.",
        "فرص عمل وتواصل على مستوى عالمي مع شركاء وعملاء دوليين.",
      ],
    },
    contact: {
      title: "الاتصال والمقر الرئيسي",
      addressTitle: "المكتب المسجل – دبي، الإمارات العربية المتحدة",
      address: [
        "المكتب 3004، بوليفارد بلازا",
        "البرج 1، وسط مدينة دبي",
        "دبي، الإمارات العربية المتحدة",
      ],
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      formTitle: "أرسل لنا رسالة",
      formSubtitle:
        "شاركنا احتياجاتك وسيقوم فريق المبيعات بالتواصل معك في أقرب وقت.",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني للشركة",
      formCompany: "الشركة",
      formMessage: "كيف يمكننا دعم احتياجاتك في مجال الطاقة؟",
      formSubmit: "إرسال الطلب",
    },
  },

  zh: {
    nav: {
      home: "首页",
      philosophy: "理念",
      products: "产品",
      tanks: "储罐",
      team: "团队",
      customers: "客户",
      vision: "未来规划",
      careers: "加入我们",
      contact: "联系我们",
    },
    hero: {
      title: "Larankha 石油与天然气贸易 – 立足迪拜，服务全球",
      subtitle:
        "从迪拜核心地带，为全球工业提供创新、可持续且高效的能源解决方案。",
      quote: '"销售能源，点燃未来。"– 创始人兼首席执行官 Riad Belatreche',
      ctaPrimary: "联系商务团队",
      ctaSecondary: "下载公司简介",
    },
    philosophy: {
      title: "我们的理念",
      missionTitle: "使命",
      missionText:
        "为全球行业和社区提供可靠、可持续和创新的能源解决方案，实现高效、环保和长期价值。",
      visionTitle: "愿景",
      visionText:
        "成为全球领先的油气企业，在创新、可持续发展和能源卓越方面引领行业，为更高效、更负责任的未来做出贡献。",
      valuesTitle: "价值观与原则",
      valuesText:
        "诚信、创新、可持续、卓越与安全是 Larankha 的核心。我们以透明和负责的方式运营，不断提升绩效，同时保护员工、合作伙伴和环境。",
    },
    products: {
      title: "核心产品",
      subtitle: "以高品质和高可靠性，为各类产业提供燃料。",
      groups: [
        {
          name: "中间馏分",
          items: ["柴油 10 ppm", "柴油 50 ppm", "柴油 500 ppm", "车用柴油"],
        },
        {
          name: "轻质油品",
          items: [
            "汽油 87 / 89 / 92 / 93 / 95 号",
            "航空燃油 Jet A1",
            "航空燃油 JP54",
          ],
        },
        {
          name: "基础油与原油",
          items: ["基础油 SN150", "基础油 SN500", "原油"],
        },
        {
          name: "天然气与重油",
          items: [
            "液化天然气 (LNG)",
            "液化石油气 (LPG)",
            "马祖特 M100 (Gost 标准)",
            "燃料油 CST 180 / 380",
            "D6 原油",
            "尿素 46% 氮",
          ],
        },
      ],
    },
    tanks: {
      title: "全球储罐网络",
      text:
        "Larankha 在全球战略位置运营储罐网络，配备先进的监控和控制技术，确保向关键市场安全、高效、可靠地供应能源。",
    },
    customers: {
      title: "客户与合作伙伴",
      subtitle: "服务全球多行业的能源需求。",
      segments: [
        "国际石油与天然气公司",
        "能源分销商与贸易商",
        "贸易公司及经纪商",
        "航空公司与航空燃料采购方",
        "航运及海运燃料运营商",
        "政府及公共机构",
        "工业和制造业客户",
      ],
    },
    future: {
      title: "未来规划与战略愿景",
      bullets: [
        "在可持续与低碳能源解决方案方面保持领先。",
        "扩展在新兴市场和关键物流枢纽的布局。",
        "加大对数字化与先进监控技术的投资。",
        "全面强化 ESG 与合规框架。",
      ],
    },
    careers: {
      title: "加入 Larankha",
      intro:
        "人才是我们成功的核心驱动力。加入总部位于迪拜的国际化团队，共同塑造能源行业的未来。",
      perks: [
        "充满活力的全球能源行业工作环境。",
        "完善的职业发展与领导力培养机制。",
        "具有竞争力的薪酬与绩效奖励。",
        "与全球合作伙伴和客户合作的机会。",
      ],
    },
    contact: {
      title: "联系方式与总部",
      addressTitle: "注册办公室 – 阿联酋迪拜",
      address: ["3004 室，Boulevard Plaza", "1 号塔楼，迪拜市中心", "阿联酋 迪拜"],
      phoneLabel: "电话",
      emailLabel: "邮箱",
      formTitle: "发送需求",
      formSubtitle: "告诉我们您的能源需求，我们的商务团队将尽快与您联系。",
      formName: "姓名",
      formEmail: "公司邮箱",
      formCompany: "公司名称",
      formMessage: "请描述您的项目或采购需求",
      formSubmit: "提交",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      philosophy: "Философия",
      products: "Продукты",
      tanks: "Резервуары",
      team: "Команда",
      customers: "Клиенты",
      vision: "Будущие планы",
      careers: "Карьера",
      contact: "Контакты",
    },
    hero: {
      title: "Larankha Oil & Gas Trading – Дубай, глобальный охват",
      subtitle:
        "Мы обеспечиваем индустрию инновационными, устойчивыми и эффективными энергетическими решениями из сердца Дубая.",
      quote:
        '"Мы продаём энергию и питаем будущее" – Риад Белатреш, основатель и генеральный директор',
      ctaPrimary: "Связаться с командой",
      ctaSecondary: "Скачать профиль компании",
    },
    philosophy: {
      title: "Наша философия",
      missionTitle: "Миссия",
      missionText:
        "Предоставлять надёжные, устойчивые и инновационные энергетические решения, обеспечивая эффективность, экологическую ответственность и долгосрочную ценность для отраслей и сообществ по всему миру.",
      visionTitle: "Видение",
      visionText:
        "Быть мировым лидером в нефтегазовой отрасли, продвигая инновации, устойчивое развитие и энергетическое превосходство и способствуя более ответственному и эффективному будущему.",
      valuesTitle: "Ценности",
      valuesText:
        "Честность, инновации, устойчивость, превосходство и безопасность лежат в основе Larankha. Мы работаем прозрачно и ответственно, постоянно улучшая показатели и защищая людей, партнёров и окружающую среду.",
    },
    products: {
      title: "Ключевые продукты",
      subtitle: "Надёжное топливо для мировых индустрий.",
      groups: [
        {
          name: "Средние дистилляты",
          items: ["Дизель 10 ppm", "Дизель 50 ppm", "Дизель 500 ppm", "Автомобильный газойль"],
        },
        {
          name: "Лёгкие нефтепродукты",
          items: [
            "Бензин 87 / 89 / 92 / 93 / 95 октан",
            "Реактивное топливо Jet A1",
            "Реактивное топливо JP54",
          ],
        },
        {
          name: "Базовые масла и нефть",
          items: ["Базовое масло SN150", "Базовое масло SN500", "Смеси сырой нефти"],
        },
        {
          name: "Газ и тяжёлое топливо",
          items: [
            "Сжиженный природный газ (LNG)",
            "Сжиженный нефтяной газ (LPG)",
            "Мазут M100 (GOST)",
            "Топочный мазут CST 180 / 380",
            "Нефтепродукт Virgin D6",
            "Мочевина 46% азота",
          ],
        },
      ],
    },
    tanks: {
      title: "Глобальная сеть резервуаров",
      text:
        "Larankha управляет сетью резервуаров в стратегически важных точках мира, оснащённых передовыми системами мониторинга и управления. Это обеспечивает безопасное, эффективное и надёжное распределение в ключевые регионы.",
    },
    customers: {
      title: "Клиенты и партнёры",
      subtitle: "Обслуживание глобальных потребителей энергии в различных секторах.",
      segments: [
        "Международные нефтегазовые компании",
        "Дистрибьюторы и трейдеры энергии",
        "Торговые компании и брокеры",
        "Авиакомпании и покупатели авиатоплива",
        "Судоходные компании и операторы бункеровки",
        "Государственные органы и госагентства",
        "Промышленные и производственные предприятия",
      ],
    },
    future: {
      title: "Будущие планы и стратегия",
      bullets: [
        "Лидерство в области устойчивых и низкоуглеродных энергетических решений.",
        "Расширение присутствия на развивающихся рынках и логистических хабах.",
        "Инвестиции в цифровизацию и передовые системы мониторинга.",
        "Усиление ESG и комплаенс-подходов во всех операциях.",
      ],
    },
    careers: {
      title: "Карьера в Larankha",
      intro:
        "Наши сотрудники — главный фактор успеха. Присоединяйтесь к динамичной международной команде, формирующей будущее энергетического сектора из Дубая.",
      perks: [
        "Динамичная рабочая среда в мировой энергетической отрасли.",
        "Профессиональный рост и развитие лидерских качеств.",
        "Конкурентоспособная система оплаты труда и бонусов.",
        "Работа с международными партнёрами и клиентами.",
      ],
    },
    contact: {
      title: "Контакты и штаб-квартира",
      addressTitle: "Зарегистрированный офис — Дубай, ОАЭ",
      address: [
        "Офис 3004, Boulevard Plaza",
        "Башня 1, Downtown Dubai",
        "Дубай, Объединённые Арабские Эмираты",
      ],
      phoneLabel: "Телефон",
      emailLabel: "Email",
      formTitle: "Отправить запрос",
      formSubtitle:
        "Опишите ваши потребности, и наша коммерческая команда свяжется с вами в ближайшее время.",
      formName: "Полное имя",
      formEmail: "Корпоративный email",
      formCompany: "Компания",
      formMessage: "Как мы можем поддержать ваши потребности в энергии?",
      formSubmit: "Отправить",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      philosophy: "Philosophie",
      products: "Produits",
      tanks: "Réservoirs",
      team: "Équipe",
      customers: "Clients",
      vision: "Plan futur",
      careers: "Carrières",
      contact: "Contact",
    },
    hero: {
      title: "Larankha Oil & Gas Trading – De Dubaï vers le monde",
      subtitle:
        "Nous fournissons aux industries des solutions énergétiques innovantes, durables et efficaces depuis le cœur de Dubaï.",
      quote:
        '"Vendre l\'énergie, alimenter l\'avenir." – Riad Belatreche, Fondateur & CEO',
      ctaPrimary: "Parler à notre équipe",
      ctaSecondary: "Télécharger le profil de l'entreprise",
    },
    philosophy: {
      title: "Notre philosophie",
      missionTitle: "Mission",
      missionText:
        "Fournir des solutions énergétiques fiables, durables et innovantes, en garantissant l'efficacité, la responsabilité environnementale et la création de valeur à long terme pour les industries et les communautés du monde entier.",
      visionTitle: "Vision",
      visionText:
        "Devenir un leader mondial de l'industrie pétrolière et gazière, en impulsant l'innovation, la durabilité et l'excellence énergétique, tout en contribuant à un avenir plus responsable et plus efficace.",
      valuesTitle: "Valeurs & principes",
      valuesText:
        "Intégrité, innovation, durabilité, excellence et sécurité sont au cœur de Larankha. Nous opérons avec transparence et responsabilité, en améliorant constamment nos performances et en protégeant les personnes, les partenaires et l'environnement.",
    },
    products: {
      title: "Produits clés",
      subtitle: "Alimenter les industries avec qualité et fiabilité.",
      groups: [
        {
          name: "Distillats moyens",
          items: ["Diesel 10 ppm", "Diesel 50 ppm", "Diesel 500 ppm", "Automotive Gas Oil"],
        },
        {
          name: "Coupes légères",
          items: [
            "Essence 87 / 89 / 92 / 93 / 95 octane",
            "Carburéacteur Jet A1",
            "Carburéacteur JP54",
          ],
        },
        {
          name: "Huiles de base & brut",
          items: ["Huile de base SN150", "Huile de base SN500", "Pétrole brut"],
        },
        {
          name: "Gaz & fuels lourds",
          items: [
            "Gaz naturel liquéfié (GNL)",
            "Gaz de pétrole liquéfié (GPL)",
            "Mazout M100 (norme Gost)",
            "Fuel lourd CST 180 / 380",
            "Huile vierge D6",
            "Urée 46 % azote",
          ],
        },
      ],
    },
    tanks: {
      title: "Réseau mondial de stockage",
      text:
        "Larankha exploite un réseau mondial de réservoirs de stockage situés de manière stratégique et équipés de technologies avancées de surveillance et de contrôle, garantissant une distribution sûre, efficace et fiable vers les principaux marchés.",
    },
    customers: {
      title: "Clients & partenaires",
      subtitle: "Nous couvrons les besoins énergétiques mondiaux de multiples secteurs.",
      segments: [
        "Compagnies pétrolières et gazières internationales",
        "Distributeurs et négociants en énergie",
        "Sociétés de trading et courtiers",
        "Compagnies aériennes et acheteurs de carburant aviation",
        "Compagnies maritimes et opérateurs de bunkering",
        "Gouvernements et organismes publics",
        "Clients industriels et manufacturiers",
      ],
    },
    future: {
      title: "Plan futur & vision stratégique",
      bullets: [
        "Leadership dans les solutions énergétiques durables et bas carbone.",
        "Expansion sur les marchés émergents et hubs logistiques clés.",
        "Investissements dans la digitalisation et les technologies de monitoring avancées.",
        "Renforcement des cadres ESG et de conformité sur l'ensemble des opérations.",
      ],
    },
    careers: {
      title: "Carrières chez Larankha",
      intro:
        "Nos équipes sont au cœur de notre réussite. Rejoignez une équipe internationale et dynamique qui façonne l'avenir du secteur énergétique depuis Dubaï.",
      perks: [
        "Environnement de travail dynamique dans l'industrie énergétique mondiale.",
        "Développement de carrière, leadership et expertise technique.",
        "Rémunération compétitive et avantages liés à la performance.",
        "Exposition internationale auprès de partenaires et clients mondiaux.",
      ],
    },
    contact: {
      title: "Contact & siège",
      addressTitle: "Siège enregistré – Dubaï, Émirats arabes unis",
      address: [
        "Bureau 3004, Boulevard Plaza",
        "Tour 1, Downtown Dubai",
        "Dubaï, Émirats arabes unis",
      ],
      phoneLabel: "Téléphone",
      emailLabel: "Email",
      formTitle: "Envoyer un message",
      formSubtitle:
        "Partagez vos besoins et notre équipe commerciale vous répondra rapidement.",
      formName: "Nom complet",
      formEmail: "Email professionnel",
      formCompany: "Société",
      formMessage: "Comment pouvons-nous soutenir vos besoins énergétiques ?",
      formSubmit: "Envoyer",
    },
  },

  pt: {
    nav: {
      home: "Início",
      philosophy: "Filosofia",
      products: "Produtos",
      tanks: "Tanques",
      team: "Equipe",
      customers: "Clientes",
      vision: "Plano Futuro",
      careers: "Carreiras",
      contact: "Contato",
    },
    hero: {
      title: "Larankha Oil & Gas Trading – De Dubai para o mundo",
      subtitle:
        "Fornecemos soluções de energia inovadoras, sustentáveis e eficientes para indústrias globais a partir do coração de Dubai.",
      quote:
        '"Vendendo energia, abastecendo o futuro." – Riad Belatreche, Fundador & CEO',
      ctaPrimary: "Falar com a equipe",
      ctaSecondary: "Baixar perfil corporativo",
    },
    philosophy: {
      title: "Nossa Filosofia",
      missionTitle: "Missão",
      missionText:
        "Oferecer soluções de energia confiáveis, sustentáveis e inovadoras, garantindo eficiência, responsabilidade ambiental e valor de longo prazo para indústrias e comunidades em todo o mundo.",
      visionTitle: "Visão",
      visionText:
        "Ser líder global na indústria de petróleo e gás, impulsionando inovação, sustentabilidade e excelência em energia, contribuindo para um futuro mais eficiente e responsável.",
      valuesTitle: "Valores & Princípios",
      valuesText:
        "Integridade, inovação, sustentabilidade, excelência e segurança estão no centro da Larankha. Atuamos com transparência e responsabilidade, melhorando continuamente o desempeño e protegendo pessoas, parceiros e o meio ambiente.",
    },
    products: {
      title: "Principais Produtos",
      subtitle: "Abastecendo indústrias com qualidade e confiabilidade.",
      groups: [
        {
          name: "Destilados médios",
          items: ["Diesel 10 ppm", "Diesel 50 ppm", "Diesel 500 ppm", "Automotive Gas Oil"],
        },
        {
          name: "Produtos leves",
          items: [
            "Gasolina 87 / 89 / 92 / 93 / 95 octanas",
            "Combustível de aviação Jet A1",
            "Combustível de aviação JP54",
          ],
        },
        {
          name: "Óleos básicos & petróleo bruto",
          items: ["Óleo básico SN150", "Óleo básico SN500", "Petróleo bruto"],
        },
        {
          name: "Gás & combustíveis pesados",
          items: [
            "Gás natural liquefeito (GNL)",
            "Gás liquefeito de petróleo (GLP)",
            "Mazut M100 (norma Gost)",
            "Fuel oil CST 180 / 380",
            "Óleo virgem D6",
            "Ureia 46% nitrogênio",
          ],
        },
      ],
    },
    tanks: {
      title: "Rede Global de Tanques",
      text:
        "A Larankha opera uma rede global de tanques de armazenamento estrategicamente localizados, com tecnologias avançadas de monitoramento e controle, garantindo distribuição segura, eficiente e confiável para os principais mercados.",
    },
    customers: {
      title: "Clientes & Parceiros",
      subtitle: "Atendendo às necessidades globais de energia em múltiplos setores.",
      segments: [
        "Companhias internacionais de petróleo e gás",
        "Distribuidores e traders de energia",
        "Empresas de trading e corretores",
        "Companhias aéreas e compradores de combustível de aviação",
        "Companhias de navegação e bunkering",
        "Governos e agências públicas",
        "Clientes industriais e de manufatura",
      ],
    },
    future: {
      title: "Plano Futuro & Visão Estratégica",
      bullets: [
        "Liderança em soluções energéticas sustentáveis e de baixo carbono.",
        "Expansão em mercados emergentes e hubs logísticos estratégicos.",
        "Investimentos em digitalização e tecnologias avançadas de monitoramento.",
        "Reforço das estruturas de ESG e compliance em todas as operações.",
      ],
    },
    careers: {
      title: "Carreiras na Larankha",
      intro:
        "As pessoas são a força que move nosso sucesso. Junte-se a uma equipe internacional e dinâmica que está moldando o futuro do setor de energia a partir de Dubai.",
      perks: [
        "Ambiente de trabalho dinâmico na indústria de energia global.",
        "Crescimento profissional, liderança e desenvolvimento técnico.",
        "Remuneração competitiva e benefícios atrelados à performance.",
        "Exposição global com parceiros e clientes internacionais.",
      ],
    },
    contact: {
      title: "Contato & Sede",
      addressTitle: "Escritório registrado – Dubai, Emirados Árabes Unidos",
      address: [
        "Escritório 3004, Boulevard Plaza",
        "Torre 1, Downtown Dubai",
        "Dubai, Emirados Árabes Unidos",
      ],
      phoneLabel: "Telefone",
      emailLabel: "Email",
      formTitle: "Envie uma mensagem",
      formSubtitle:
        "Compartilhe suas necessidades e nossa equipe comercial retornará em breve.",
      formName: "Nome completo",
      formEmail: "Email corporativo",
      formCompany: "Empresa",
      formMessage: "Como podemos apoiar suas necessidades de energia?",
      formSubmit: "Enviar",
    },
  },
};

