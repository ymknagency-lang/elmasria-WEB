/* ===== IMAGES — the one place to change image sources =====
   Use a local path or a direct https:// URL. Leave "" to show a neutral placeholder.
   (The home-page hero image is the only exception: its src is in index.html so it loads first.) */
const IMG = {
  logo: "https://ik.imagekit.io/ymkn/elmasria/%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D9%87%20logo.jpg",
  cover: "https://ik.imagekit.io/ymkn/elmasria/el_masria_for_engineering_concrete_cover.jpg",
  band24: "https://ik.imagekit.io/ymkn/elmasria/WhatsApp%20Image%202026-07-03.jpeg",
  bandServices: "https://ik.imagekit.io/ymkn/elmasria/WhatsApp%20Image%202026-07-01%20at%207.59.54%20PM.jpeg",
  sv1: "https://ik.imagekit.io/ymkn/elmasria/coloerd%20concrete.jpg",
  sv2: "https://ik.imagekit.io/ymkn/elmasria/fiber%20concrete.jpg",
  sv3: "https://ik.imagekit.io/ymkn/elmasria/light%20weight%20concrete.jpg",
  sv4: "https://ik.imagekit.io/ymkn/elmasria/porous%20concrete.jpg",
  sv5: "https://ik.imagekit.io/ymkn/elmasria/self%20compact%20concrete.jpg",
  sv6: "https://ik.imagekit.io/ymkn/elmasria/stamped%20concrete.jpg",
  muz: "https://ik.imagekit.io/ymkn/elmasria/%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D9%81%20%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A.jpg",
  magdi: "https://ik.imagekit.io/ymkn/elmasria/%D9%85%D8%B1%D9%83%D8%B2%20%D9%85%D8%AC%D8%AF%D9%8A%20%D9%8A%D8%B9%D9%82%D9%88%D8%A8%20%D9%84%D9%84%D9%82%D9%84%D8%A8.jpg",
  msf: "https://ik.imagekit.io/ymkn/elmasria/%D9%85%D8%B7%D8%A7%D8%B1%20%D8%B3%D9%81%D9%8A%D9%86%D9%83%D8%B3.jpg",
  m500: "https://ik.imagekit.io/ymkn/elmasria/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89%20500%20500.jpg",
  mbrg: "https://ik.imagekit.io/ymkn/elmasria/%D9%85%D8%B7%D8%A7%D8%B1%20%D8%A8%D8%B1%D8%AC%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8.jpg",
  japan: "https://ik.imagekit.io/ymkn/elmasria/%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%87%20%D8%A7%D9%84%D9%8A%D8%A7%D8%A8%D8%A7%D9%86%D9%8A%D9%87%20%D8%A8%D8%B1%D8%AC%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8.jpg",
  borgt: "https://ik.imagekit.io/ymkn/elmasria/%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B1-%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%89-%D8%A7%D9%84%D8%B3%D8%B1%D9%8A%D8%B9.jpg",
  water: "https://ik.imagekit.io/ymkn/elmasria/%D9%85%D8%AD%D8%B7%D8%A9%20%D8%AA%D8%AD%D9%84%D9%8A%D9%87%20%D9%85%D9%8A%D8%A7%D9%87%20%D8%AD%D8%AF%D8%A7%D8%A6%D9%82%20%D8%A7%D9%83%D8%AA%D9%88%D8%A8%D8%B1.jpg",
  waterway: "https://ik.imagekit.io/ymkn/elmasria/WhatsApp%20Image%202026-07-05%20at%207.01.43%20PM.jpeg",
  badya: "https://ik.imagekit.io/ymkn/elmasria/Badya.jpeg",
  px: "https://ik.imagekit.io/ymkn/elmasria/px.png",
  wtp: "https://ik.imagekit.io/ymkn/elmasria/Water%20Treatment%20New%20October.jpg",
  gardenlakes: "https://ik.imagekit.io/ymkn/elmasria/Garden%20Lakes.webp",
  icity: "https://ik.imagekit.io/ymkn/elmasria/I-City%20October.webp",
  vye: "https://ik.imagekit.io/ymkn/elmasria/VYE.jpeg",
  bellevie: "https://ik.imagekit.io/ymkn/elmasria/Belle%20Vie.jpg",
  zayed: "https://ik.imagekit.io/ymkn/elmasria/Zaied%20Estates.webp",
  naia: "https://ik.imagekit.io/ymkn/elmasria/Naia%20West.png",
  keeva: "https://ik.imagekit.io/ymkn/elmasria/Keeva.jpg",
  ashgar: "https://ik.imagekit.io/ymkn/elmasria/Ashgar%20City.webp",
  eden: "https://ik.imagekit.io/ymkn/elmasria/Eden%20Healthcare%20Hospital.jpg",
  midtown: "https://ik.imagekit.io/ymkn/elmasria/Mid%20Town%20Mall.jpeg",
  sunplaza: "https://ik.imagekit.io/ymkn/elmasria/Sun%20Plaza%20Mall.webp",
  royalplaza: "https://ik.imagekit.io/ymkn/elmasria/Royal%20Plaza%20Mall.jpg",
  swanlake: "https://ik.imagekit.io/ymkn/elmasria/Swan%20Lake%20West.jpg",
  green6: "https://ik.imagekit.io/ymkn/elmasria/Green%206.jpg",
  owest: "https://ik.imagekit.io/ymkn/elmasria/O%20West.webp",
  toshiba: "https://ik.imagekit.io/ymkn/elmasria/Toshiba%20Factory.jpg",
  bvsports: "https://ik.imagekit.io/ymkn/elmasria/Belle%20Vie%20Sports%20Club.jpg",
  bvstreet: "https://ik.imagekit.io/ymkn/elmasria/Belle%20Vie%20Street%20of%20Dreams.webp"
};

const translations = {
  ar: {//yassin
    heroSub: "نورّد ونصنّع جميع أنواع الخرسانة منذ عام 1982.",
    skip: "تخطي إلى المحتوى",
    menuL: "القائمة",
    sv1: "الخرسانة الملونة",
    sv2: "الخرسانة المسلحة بالألياف",
    sv3: "الخرسانة الخفيفة",
    sv4: "الخرسانة النفاذة",
    sv5: "الخرسانة ذاتية الدمك",
    sv6: "الخرسانة المطبوعة",
    fCtaT: "جاهز لبناء مشروعك بقوة؟",
    fCtaP: "احصل على حلول خرسانية عالية الجودة لمشروعك القادم.",
    ql: "روابط سريعة",
    pFeat: "أبرز مشاريعنا",
    pPart: "مشاريع وشركاء",
    pList: "قائمة التوريدات",
    home: "الرئيسيه",
    about: "تاريخنا",
    serv: "خدماتنا",
    project: "مشاريعنا",
    contact: "اتصل بنا",
    footer: "  © جميع الحقوق محفوظة",
    loca: " 165 عنوان المقر الرئيسي : مدينة 6 أكتوبر المنطقة الصناعية الثالثة قطعة رقم",
    phone: "رقم الهاتف : 01282756122",
    title5: "  العديد من المنتجات",
    title6:"تعرف اكثر ",
    contactus: "تواصل معنا",
    c1:"المتحف المصري الكبير",
    c2:"مركز مجدي يعقوب للقلب",
    c3:"مطار سفينكس",
    c4:"مستشفى 500 500",
    c5:"مطار برج العرب ",
    c6:"الجامعة اليابانية في برج العرب",
    c7:"القطار الكهربائي السريع",
    c8:"محطة تحلية مياه حدائق اكتوبر",
    hd: "الشركة المصرية للخرسانة والهندسة",
    time:"خدمه على مدار الساعة",
    read1:"تُعدّ الشركة رائدة في توريد وتصنيع جميع أنواع الخرسانة. تأسست عام 1982، وهي من أوائل شركات الخرسانة الجاهزة في جمهورية مصر العربية.",
    read2:"لذلك، تتمتع الشركة بخبرة واسعة في مجال الخرسانة عالية الجودة والمتخصصة، بما في ذلك الخرسانة خفيفة الوزن، والخرسانة الثقيلة، والخرسانة الشفافة، والخرسانة الملونة المطبوعة، والخرسانة ذاتية الدمك، وغيرها من الخلطات الخرسانية المتخصصة.",
    read3:"وقد مكّن هذا الشركة من العمل على مشاريع كبرى مثل مركز مجدي يعقوب للقلب، والمتحف المصري الكبير، ومشروع السكك الحديدية عالية السرعة، ومشاريع أخرى متخصصة للغاية.",
    read4:"لذلك فكرت الشركة في الحل العملي في السوق المصري",
    coloredconc:"الخرسانة الملونة هي خرسانة مُعززة بأصباغ طبيعية أو صناعية لإنتاج مجموعة واسعة من الألوان الجذابة. تجمع هذه الخرسانة بين القوة والمتانة والجمال، مما يجعلها مثالية للأرصفة والساحات والحدائق والواجهات والمشاريع المعمارية الزخرفية. تتميز الخرسانة الملونة بطول عمرها، وقلة صيانتها، ومقاومتها للبهتان عند إنتاجها بشكل صحيح.",
    lightconc:"الخرسانة الخفيفة نوع من الخرسانة يُصنع باستخدام ركام خفيف الوزن أو مواد مملوءة بالهواء لتقليل كثافتها. توفر هذه الخرسانة عزلًا حراريًا جيدًا، وتُخفّض الوزن الإجمالي للهياكل، وتُحسّن كفاءة البناء. تُستخدم الخرسانة الخفيفة على نطاق واسع في المباني والجسور والعناصر مسبقة الصب ومشاريع البناء الشاهقة.",
    self:"الخرسانة ذاتية الدمك (SCC) هي خرسانة عالية السيولة تُفرد وتملأ القوالب دون الحاجة إلى اهتزاز. توفر هذه الخرسانة جودة سطح ممتازة، وتحسن كفاءة البناء، وتضمن دمكًا متجانسًا، حتى في الهياكل المسلحة بكثافة. تُستخدم الخرسانة ذاتية الدمك على نطاق واسع في المباني الشاهقة والجسور والعناصر مسبقة الصب والمشاريع الإنشائية المعقدة.",
    fiber:"الخرسانة المسلحة بالألياف هي خرسانة تحتوي على ألياف خاصة، مثل الفولاذ أو الزجاج أو الألياف الاصطناعية، لتحسين قوتها ومتانتها. فهي تساعد على تقليل التشققات، وزيادة مقاومة الصدمات، وتعزيز الأداء على المدى الطويل. وتُستخدم الخرسانة المسلحة بالألياف على نطاق واسع في الأرضيات الصناعية، والأرصفة، والأنفاق، والعناصر مسبقة الصب، ومشاريع البنية التحتية.",
    stmped:"الخرسانة المطبوعة نوعٌ من الخرسانة الزخرفية، مصممة لمحاكاة مظهر الحجر الطبيعي أو الطوب أو البلاط أو الخشب. تجمع هذه الخرسانة بين المتانة واللمسة النهائية الجذابة، مما يجعلها مثالية للأرصفة وممرات السيارات والباحات والحدائق والأماكن العامة. تتميز الخرسانة المطبوعة بسهولة صيانتها، وانخفاض تكلفتها، وتوفرها بتشكيلة واسعة من الأنماط والألوان.",
    perm:"الخرسانة النفاذة نوع خاص من الخرسانة يسمح بمرور الماء عبر سطحها إلى باطن الأرض. وهي تساعد على تقليل جريان المياه السطحية، وتحسين الصرف، وتغذية المياه الجوفية. تُستخدم الخرسانة النفاذة عادةً في مواقف السيارات، والأرصفة، والممرات، وغيرها من مشاريع التنمية الحضرية المستدامة.",
    magdi:"مركز مجدي يعقوب العالمي للقلب هو مركز طبي عالمي المستوى، مُكرّس لتقديم رعاية قلبية متقدمة، وإجراء البحوث الطبية، وتوفير التدريب المهني. يهدف المركز إلى تقديم علاج عالي الجودة للمرضى من جميع الأعمار، بغض النظر عن قدرتهم على الدفع، مع تعزيز الابتكار في طب القلب والأوعية الدموية، وتحسين خدمات الرعاية الصحية في مصر والمنطقة.",
    m500:"مستشفى 500500 هو مشروع طبي غير ربحي في مصر، يُعنى بتقديم رعاية صحية متطورة، لا سيما لمرضى السرطان. ويهدف إلى توفير تشخيص وعلاج وبحوث عالية الجودة باستخدام أحدث التقنيات الطبية. ويعتمد المستشفى على التبرعات، ويسعى إلى تطوير خدمات الرعاية الصحية وتوفير العلاج للمرضى المحتاجين.",
    borg:"تُعد محطة برج العرب للقطار فائق السرعة محطةً رئيسيةً على شبكة السكك الحديدية فائقة السرعة في مصر. صُممت المحطة لتوفير نقل سريع وفعال ومستدام، يربط برج العرب بالمدن الرئيسية في جميع أنحاء مصر. وتدعم المحطة حركة الركاب والتنمية الاقتصادية، وتُحسّن الوصول إلى الوجهات الصناعية والتجارية والسياحية.",
    mbrg:"يُعدّ مطار برج العرب الدولي المطار الدولي الرئيسي الذي يخدم الإسكندرية والمنطقة المحيطة بها. يوفر المطار رحلات داخلية ودولية، ويضمّ مرافق حديثة للمسافرين وخدمات سفر فعّالة. ويلعب المطار دوراً هاماً في دعم السياحة والأعمال والتنمية الاقتصادية في شمال مصر.",
    msf:"مطار سفينكس الدولي مطار حديث يقع بالقرب من أهرامات الجيزة والمتحف المصري الكبير. شُيّد لدعم السياحة وتخفيف الازدحام في مطار القاهرة الدولي. يخدم المطار الرحلات الداخلية والدولية، ويوفر مرافق حديثة وسهولة الوصول إلى أهم المعالم السياحية في مصر.",
    water:"محطة معالجة المياه في حدائق أكتوبر مشروع حديث للبنية التحتية المائية، يساهم في توفير إمدادات موثوقة من المياه النظيفة للمناطق السكنية والحضرية. وتستخدم المحطة تقنيات معالجة متطورة لتحسين جودة المياه، ودعم الإدارة المستدامة للموارد، وتلبية الطلب المتزايد على المياه الآمنة في منطقة حدائق أكتوبر.",
    japan:"جامعة مصر واليابان للعلوم والتكنولوجيا هي جامعة بحثية رائدة تأسست من خلال التعاون بين مصر واليابان. تقدم الجامعة تعليمًا عالي الجودة في الهندسة والعلوم والتكنولوجيا، وفقًا للنموذج التعليمي الياباني. وتركز الجامعة على الابتكار والبحث العلمي والتعلم التطبيقي، وإعداد الخريجين لمواكبة معايير الصناعة العالمية.",
    muz:"يُعدّ المتحف المصري الكبير أحد أكبر المتاحف الأثرية في العالم، ويقع بالقرب من أهرامات الجيزة في مصر. يعرض المتحف آلاف القطع الأثرية المصرية القديمة، بما في ذلك المجموعة الكاملة لكنوز الملك توت عنخ آمون. ويضم قاعات عرض حديثة، وشاشات تفاعلية، وإطلالات خلابة على الأهرامات. ويهدف المتحف المصري الكبير إلى الحفاظ على تاريخ مصر العريق، وتزويد الزوار بتجربة ثقافية فريدة.",
    custm:"خدمة العملاء : 01285558135",
    tech:"الدعم الفني : 01221555598",
    p1:"مجمع مبارك للاستوديوهات بالانتاج الاعلامى",
    p2:"فندق موفنبيك بالانتاج الاعلامى",
    p3:"ماجيك لاند",
    p4:"نادى الاعلاميين بالانتاج الاعلامى",
    p5:"فندق هيليتون اكتوبر بالدريم لاند",
    p6:"فندق شيراتون اكتوبر بالدريم لاند",
    p7:"دريم بارك",
    p8:"دريم لاند",
    p9:"مجمع عمارات الاميرالد بالدريم لاند",
    p10:"هايبر وان",
    p11:"مجمع يونيون اير الصناعى",
    p12:"مجمع يونيفرسال الصناعى",
    p13:"مصنع مرسيدس للسيارات",
    p14:"مصنع دايو موتورز ايجيبت للسيارات",
    p15:"مصنع سوزوكى ايجيبت للسيارات",
    p16:"مصنع نيسان ايجيبت للسيارات",
    p17:"مصنع BMW",
    p18:"مصنع المجموعة البافارية",
    p19:"مصنع بروكتر اند جامبل",
    p20:"مصنع ليفر مصر",
    p21:"مصنع البابطين للاعمدة الانارة",
    p22:"نادى نقابة المهندسين 6 اكتوبر",
    p23:"مجمع عمارات السرايا",
    p24:"دايموند مول",
    p25:"سيتى استارز اكتوبر",
    p26:"مصنع فلورا للصناعات الورقية",
    p27:"مجمع معاهد الحصرى",
    p28:"مسجد الشيخ الحصرى",
    p29:"مصنع الرشيدى للميزان",
    p30:"مصنع نستله",
    p31:"مصنع دولسى",
    p32:"مصنع سيديكو للادوية",
    p33:"مصنع سيجماتك للادوية",
    p34:"مصنع لليلى مصر للادوية",
    p35:"مصنع الكان فرما للادوية",
    p36:"مصنع حكمة للادوية",
    p37:"مصنع كونكوريت للملابس",
    p38:"مصنع العالمية للملابس",
    p39:"مصنع براندز للملابس",
    p40:"القرية الذكية مبنى B4",
    p41:"القرية الذكية مبنى التوثيق الحضارى والمسجد",
    p42:"مصنع سيراميكا الفا",
    p43:"مصنع هينكل ادهيسفزمصر",
    p44:"مصنع البردى للورق - فاين",
    p45:"مجمع مدارس نيو مانور هاوس",
    p46:"مستشفى دار الفؤاد",
    p47:"جامعة مصر للعلوم والتكنولوجيا",
    p48:"جامعة 6 اكتوبر",
    p49:"جامعة نوال الدجوى",
    p50:"مدينة الثقافة والعلوم",
    p51:"فيلات بيفرلى هيلز",
    p52:"فيلات حى النسايم 6 اكتوبر",
    p53:"فيلات حى الريحانة 6 اكتوبر",
    p54:"فيلات جاردنيا 6 اكتوبر",
    p55:"مبنى الورش والمخازن بالشرقية للدخان",
    p56:"مبنى البنزينة بالشرقية للدخان",
    p57:"مصنع روثمان بالشرقية للدخان",
    p58:"مصنع مارلبورو بالشرقية للدخان",
    p59:"فيلات رويال هيلز",
  
  },

  en: {
    heroSub: "Supplying and manufacturing every type of concrete since 1982.",
    skip: "Skip to content",
    menuL: "Menu",
    sv1: "Colored concrete",
    sv2: "Fiber concrete",
    sv3: "Lightweight concrete",
    sv4: "Porous concrete",
    sv5: "Self-compacting concrete",
    sv6: "Stamped concrete",
    fCtaT: "Ready to Build Something Strong?",
    fCtaP: "Get high-quality concrete solutions tailored to your next project.",
    ql: "Quick Links",
    pFeat: "Featured projects",
    pPart: "Projects & partners",
    pList: "Supply list",
    home: "home",
    about: "about",
    serv: "services",
    project: "projects",
    contact: "contact",
    footer: "© All rights reserved",
    loca: "Headquarters Address: 6th October City - the third industrial zone plot number 165",
    phone: "phone number: 01282756122",
    title5: "Many products",
    title6:"Learn more",
    contactus:"Contact us",
    c1:"The Grand Egyptian Museum",
    c2:"Magdi Yacoub Heart Center",
    c3:"Sphinx Airport",
    c4:"500 500 Hospital",
    c5:"Burj Al Arab Airport",
    c6:"Japanese University in Burj Al Arab",
    c7:"High-speed electric train",
    c8:"October Gardens Water Desalination Plant",
    hd: "Elmasria for concrete and Engineering Company",
    time:"24-hour service",
    read1:"is a pioneer in the supply and manufacturing of all types of concrete. Established in 1982, it is one of the first ready-mix concrete companies in the Arab Republic of Egypt. ",
    read2:"Therefore, the company has extensive expertise in quality and specialized concretes, including lightweight, heavyweight, transparent, colored stamped concrete, self-compacting concrete, and other specialized concrete mixes. ",
    read3:"This has enabled the company to work on major projects such as the Magdi Yacoub Heart Center, the Grand Egyptian Museum, the High-Speed Rail project, and other highly specialized projects.",
    read4:"So the company considered the concrete solution in the Egyptian market",
    coloredconc:"Colored Concrete is concrete enhanced with natural or synthetic pigments to create a wide range of attractive colors. It combines strength and durability with aesthetic appeal, making it ideal for sidewalks, plazas, parks, facades, and decorative architectural projects. Colored concrete is long-lasting, low-maintenance, and resistant to fading when properly produced.",
    lightconc:"Lightweight Concrete is a type of concrete made with lightweight aggregates or air-filled materials to reduce its density. It offers good thermal insulation, lowers the overall weight of structures, and improves construction efficiency. Lightweight concrete is widely used in buildings, bridges, precast elements, and high-rise construction projects.",
    self:"Self-Compacting Concrete (SCC) is a highly flowable concrete that spreads and fills formwork without the need for vibration. It provides excellent surface quality, improves construction efficiency, and ensures uniform compaction, even in heavily reinforced structures. SCC is widely used in high-rise buildings, bridges, precast elements, and complex structural projects.",
    fiber:"Fiber-Reinforced Concrete (FRC) is concrete that contains special fibers, such as steel, glass, or synthetic fibers, to improve its strength and durability. It helps reduce cracking, increases impact resistance, and enhances long-term performance. Fiber-reinforced concrete is widely used in industrial floors, pavements, tunnels, precast elements, and infrastructure projects.",
    stmped:"Stamped Concrete is a decorative type of concrete designed to replicate the appearance of natural stone, brick, tile, or wood. It combines durability with an attractive finish, making it ideal for sidewalks, driveways, patios, parks, and public spaces. Stamped concrete is low-maintenance, cost-effective, and available in a wide variety of patterns and colors.",
    perm:"Permeable Concrete is a special type of concrete that allows water to pass through its surface into the ground. It helps reduce surface runoff, improve drainage, and recharge groundwater. Permeable concrete is commonly used for parking areas, sidewalks, walkways, and other sustainable urban development projects.",
    magdi:"Magdi Yacoub Global Heart Centre is a world-class medical center dedicated to providing advanced heart care, medical research, and professional training. The center aims to offer high-quality treatment for patients of all ages, regardless of their ability to pay, while advancing innovation in cardiovascular medicine and improving healthcare services in Egypt and the region.",
    m500:"500500 Hospital is a non-profit medical project in Egypt dedicated to providing advanced healthcare, especially for cancer patients. It aims to offer high-quality diagnosis, treatment, and research using modern medical technology. The hospital is supported by donations and seeks to improve healthcare services while making treatment accessible to patients in need.",
    borg:"Borg El Arab High-Speed Rail Station is a key station on Egypt’s high-speed rail network. It is designed to provide fast, efficient, and sustainable transportation, connecting Borg El Arab with major cities across Egypt. The station supports passenger mobility, economic development, and improved access to industrial, commercial, and tourist destinations.",
    mbrg:"Borg El Arab International Airport is the main international airport serving Alexandria and the surrounding region. It provides domestic and international flights, offering modern passenger facilities and efficient travel services. The airport plays an important role in supporting tourism, business, and economic development in northern Egypt.",
    msf:"Sphinx International Airport is a modern international airport located near the Pyramids of Giza and the Grand Egyptian Museum. It was built to support tourism and reduce congestion at Cairo International Airport. The airport serves both domestic and international flights, offering modern facilities and convenient access to major tourist attractions in Egypt.",
    water:"October Gardens Water Treatment Facility is a modern water infrastructure project that helps provide a reliable supply of clean water for residential and urban development. The facility uses advanced treatment technologies to improve water quality, support sustainable resource management, and meet the growing demand for safe water in the October Gardens area.",
    japan:"Egypt-Japan University of Science and Technology is a leading research university established through cooperation between Egypt and Japan. It offers high-quality education in engineering, science, and technology, following the Japanese model of education. The university focuses on innovation, scientific research, practical learning, and preparing graduates to meet global industry standards.",
    muz:"The Grand Egyptian Museum (GEM) is one of the largest archaeological museums in the world. It is located near the Pyramids of Giza, Egypt. The museum displays thousands of ancient Egyptian artifacts, including the complete collection of King Tutankhamun's treasures. It features modern exhibition halls, interactive displays, and stunning views of the pyramids. The GEM aims to preserve Egypt's rich history and provide visitors with a unique cultural experience.",
    custm:"Customer service : 01285558135",
    tech:"Technical support : 01221555598",
    p1:"Al Mubarak, media production studios",
    p2:"Hotel Movenpick media production",
    p3:"Magic Land",
    p4:"Media Club production Information",
    p5:"Hotel Heliton October Baldereym Land",
    p6:"Sheraton Hotel October Baldereym Land",
    p7:"Dream Park",
    p8:"Dreamland",
    p9:"Complex Buildings Alamirald Baldereym Land",
    p10:"Hyper one",
    p11:"Union Air Industrial Complex",
    p12:"Universal Industrial Complex",
    p13:"The manufacturer of Mercedes cars",
    p14:"Sales of Daewoo Motors Egypt for cars",
    p15:"Factory Suzuki Motor Egypt",
    p16:"Nissan's plant Egypt for cars",
    p17:"Sales of BMW cars",
    p18:"Factory Group Bavarian",
    p19:"Procter & Gamble plant",
    p20:"Factory to flee Egypt",
    p21:"Factory Babtain lampposts",
    p22:"Club Bar Mouhandisin 6th of October",
    p23:"Al-Saraya Real Estate",
    p24:"Diamond Mall",
    p25:"City Astarz October",
    p26:"Factory Flora of Paper Industries",
    p27:"Complex institutes exclusive",
    p28:"Mosque of Sheikh Al-Hosiery",
    p29:"Factory Rasheedy balance,",
    p30:"Nestle plant",
    p31:"Factory Dulce",
    p32:"Factory SEDICO Pharmaceuticals",
    p33:"Factory Sijmatk Pharmaceuticals",
    p34:"Factory of the following Egypt Pharmaceuticals",
    p35:"Factory Alkan Pharma Pharmaceuticals",
    p36:"The manufacturer of the wisdom of the medicine",
    p37:"Factory Kounkorit Clothing",
    p38:"Factory of the World Clothing",
    p39:"Factory Brands of clothes",
    p40:"Smart Village Building B4",
    p41:"The Smart Village Building Documentation of cultural and the mosque",
    p42:"Alfa Ceramica",
    p43:"Factory Hinkel Adhesfzmsr",
    p44:"Factory papyrus paper (FINE)",
    p45:"New Park Manor House School",
    p46:"Dar Al Fouad Hospital",
    p47:"Misr University for Science and Technology",
    p48:"6 October University",
    p49:"University of Nawal el Dogy",
    p50:"City of Culture and Science",
    p51:"Beverly Hills Villas",
    p52:"Villas neighborhood alnsaym October 6",
    p53:"Villas neighborhood Alrihanp October 6",
    p54:"Villas Jardnia October 6",
    p55:"Building workshops and stores the eastern area of smoke",
    p56:"Building Albenzinp eastern area of the smoke",
    p57:"Factory Rothman eastern area of the smoke",
    p58:"The manufacturer of the eastern area of Marlboro smoke",
    p59:"Royal Hills Villas",






  }
};
function changeLang(lang) {
  const t = translations[lang];
  if (!t) return;
  const d = document, h = d.documentElement;
  h.lang = lang;
  h.dir = lang === "ar" ? "rtl" : "ltr";
  d.querySelectorAll("[data-key]").forEach(el => {
    const v = t[el.dataset.key];
    if (v !== undefined && el.textContent !== v) el.textContent = v;
  });
  d.querySelectorAll("[data-alt]").forEach(el => { const v = t[el.dataset.alt]; if (v) el.alt = v; });
  d.querySelectorAll("[data-aria]").forEach(el => { const v = t[el.dataset.aria]; if (v) el.setAttribute("aria-label", v); });
  d.querySelectorAll(".lan").forEach(b => {
    const on = (b.getAttribute("onclick") || "").indexOf("'" + lang + "'") > -1;
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on);
  });
  try { localStorage.setItem("language", lang); } catch (e) {}
}

function toggleMenu(force) {
  const n = document.querySelector(".nav-links"), b = document.querySelector(".menu-btn");
  if (!n) return;
  const open = typeof force === "boolean" ? force : !n.classList.contains("active");
  n.classList.toggle("active", open);
  if (b) b.setAttribute("aria-expanded", open);
}

(function init() {
  const d = document, h = d.documentElement;

  const run = () => {
    let lang = "ar";
    try {
      lang = localStorage.getItem("language") || "ar";
    } catch (e) {}

    changeLang(lang);

    /* Images */
    d.querySelectorAll("img[data-img]").forEach(i => {
      const u = IMG[i.dataset.img];

      if (!u) {
        i.classList.add("missing");
        return;
      }

      i.addEventListener("error", () => i.classList.add("missing"));
      i.src = u;
    });

    if (IMG.logo) {
      h.style.setProperty("--img-logo", 'url("' + IMG.logo + '")');
    }

    if (IMG.cover) {
      h.style.setProperty("--img-cover", 'url("' + IMG.cover + '")');
    }

    /* Menu */
    d.addEventListener("keydown", e => {
      if (e.key === "Escape") toggleMenu(false);
    });

    d.addEventListener("click", e => {
      if (!e.target.closest(".navbar")) toggleMenu(false);
    });

    /* Loader: show only once per browsing session */
    const L = d.getElementById("loader");

    if (L) {
      let seen = false;

      try {
        seen = sessionStorage.getItem("seen") === "1";
      } catch (e) {}

      if (seen) {
        L.remove();
      } else {
        try {
          sessionStorage.setItem("seen", "1");
        } catch (e) {}

        const hide = () => {
          if (!L.isConnected || L.classList.contains("hide")) return;

          L.classList.add("hide");

          setTimeout(() => L.remove(), 700);
        };

        // Keep the loader visible for 2 seconds
        setTimeout(hide, 3000);
      }
    }

    /* Reveal sections + animate coins only while visible */
    const reduce = matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const rv = d.querySelectorAll(".reveal");
    const coins = d.querySelectorAll(".coin");

    if (!("IntersectionObserver" in window) || reduce) {
      rv.forEach(e => e.classList.add("in"));
    } else {
      const io = new IntersectionObserver(es => {
        es.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      }, {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08
      });

      rv.forEach(e => io.observe(e));

      const co = new IntersectionObserver(es => {
        es.forEach(e => {
          e.target.classList.toggle("run", e.isIntersecting);
        });
      });

      coins.forEach(c => co.observe(c));
    }
  };

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();


(() => {
  const header = document.querySelector("header");
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;
  const threshold = 8;

  function updateNavbar() {
    const currentY = window.scrollY;
    const difference = currentY - lastScrollY;

    if (currentY <= 100) {
      header.classList.remove("nav-hidden");
    } else if (Math.abs(difference) >= threshold) {
      if (difference > 0) {
        header.classList.add("nav-hidden");
      } else {
        header.classList.remove("nav-hidden");
      }

      lastScrollY = currentY;
    }

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    },
    { passive: true }
  );
})();

/* ---------- Safe internal-page prefetch: on intent (hover/touch/focus) + idle nav links; skipped on Save-Data / slow networks ---------- */
(() => {
  const c = navigator.connection;
  if (c && (c.saveData || /(^|-)2g$/.test(c.effectiveType || ""))) return;
  const done = new Set([location.pathname]);
  const prefetch = a => {
    if (!a || a.origin !== location.origin || !/\.html$|\/$/.test(a.pathname)) return;
    if (a.target === "_blank" || a.hasAttribute("download")) return;
    const key = a.pathname;
    if (done.has(key)) return;
    done.add(key);
    const l = document.createElement("link");
    l.rel = "prefetch"; l.href = a.pathname; l.as = "document";
    document.head.appendChild(l);
  };
  const intent = e => { const a = e.target.closest && e.target.closest("a[href]"); if (a) prefetch(a); };
  document.addEventListener("pointerover", e => { if (e.pointerType === "mouse") intent(e); }, { passive: true });
  document.addEventListener("touchstart", intent, { passive: true });
  document.addEventListener("focusin", intent);
  const idle = window.requestIdleCallback || (f => setTimeout(f, 1500));
  addEventListener("load", () => idle(() => document.querySelectorAll(".nav-links a[href]").forEach(prefetch)));
})();


/* ---------- Image preloading: after the page is idle, fetch every site image once so other pages show them instantly ---------- */
(() => {
  const c = navigator.connection;
  if (c && (c.saveData || /(^|-)2g$/.test(c.effectiveType || ""))) return;
  const urls = [...new Set([
    "https://ik.imagekit.io/ymkn/elmasria/WhatsApp%20Image%202026-07-01%20PM.jpeg", /* home hero */
    ...Object.values(IMG)
  ])].filter(u => /^https?:\/\//.test(u));
  const warm = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js")
        .then(() => navigator.serviceWorker.ready)
        .then(r => r.active && r.active.postMessage({ preload: urls }))
        .catch(() => fallback());
    } else fallback();
  };
  const fallback = () => urls.forEach(u => { const i = new Image(); i.decoding = "async"; i.src = u; });
  const idle = window.requestIdleCallback || (f => setTimeout(f, 1200));
  addEventListener("load", () => idle(warm));
})();
