export interface BlogDestination {
  slug: string;
  destination: "Cairo & Giza" | "Luxor" | "Aswan" | "Alexandria" | "Sinai" | "Hurghada" | "Siwa Oasis" | "Fayoum" | "White Desert" | "Black Desert" | "Saint Catherine" | "Marsa Alam" | "Abu Simbel" | "El Gouna";
  nameEn: string;
  nameAr: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  metaDescriptionEn: string;
  metaDescriptionAr: string;
  keywordsEn: string;
  keywordsAr: string;
  heroImage: string;
  gallery: string[];
  introEn: string;
  introAr: string;
  historyEn: string;
  historyAr: string;
  cultureEn: string;
  cultureAr: string;
  activitiesEn: { title: string; desc: string }[];
  activitiesAr: { title: string; desc: string }[];
  foodEn: { name: string; desc: string }[];
  foodAr: { name: string; desc: string }[];
  hotelsEn: { name: string; tier: "Luxury" | "Mid-Range" | "Budget"; desc: string }[];
  hotelsAr: { name: string; tier: "Luxury" | "Mid-Range" | "Budget"; desc: string }[];
  transportEn: string;
  transportAr: string;
  tipsEn: string[];
  tipsAr: string[];
  bestTimeEn: string;
  bestTimeAr: string;
  nearByEn: { name: string; desc: string; slug: string }[];
  nearByAr: { name: string; desc: string; slug: string }[];
  faqEn: { q: string; a: string }[];
  faqAr: { q: string; a: string }[];
  ctaEn: { text: string; linkText: string; url: string };
  ctaAr: { text: string; linkText: string; url: string };
  relatedTourIds?: number[];
  
  // Custom Dynamic Upgrades
  hiddenGemsEn?: string[];
  hiddenGemsAr?: string[];
  safetyEn?: string[];
  safetyAr?: string[];
  itineraryEn?: { day: string; title: string; desc: string }[];
  itineraryAr?: { day: string; title: string; desc: string }[];
}

export const egyptDestinationsBlogs: BlogDestination[] = [
  {
    slug: "cairo-tourism-guide",
    destination: "Cairo & Giza",
    nameEn: "Cairo",
    nameAr: "القاهرة",
    titleEn: "The Ultimate Cairo Travel Guide: History, Culture, and Secrets of the City of a Thousand Minarets",
    titleAr: "دليل السفر الشامل إلى القاهرة: التاريخ، الثقافة، وأسرار مدينة الألف مئذنة",
    subtitleEn: "Unraveling the layers of Egypt's chaotic, beautiful, and monumental medieval capital",
    subtitleAr: "اكتشف تفاصيل العاصمة المصرية التاريخية الساحرة النابضة بالحياة",
    metaDescriptionEn: "Discover Cairo's rich history, top attractions, traditional foods, best hotels, transport options, and expert travel tips in our comprehensive premium guide.",
    metaDescriptionAr: "اكتشف تاريخ القاهرة الغني، وأبرز المعالم السياحية، والمأكولات الشعبية، وأفضل الفنادق، ووسائل النقل، ونصائح السفر الخبيرة في دليلنا المتميز.",
    keywordsEn: "Cairo tourism, Cairo travel guide, Egypt capital, Khan El Khalili, Coptic Cairo, Islamic Cairo, travel Egypt",
    keywordsAr: "السياحة في القاهرة, دليل سفر القاهرة, عاصمة مصر, خان الخليلي, القاهرة القبطية, القاهرة الإسلامية",
    heroImage: "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600577916048-804c9191e36c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Cairo, Egypt's massive and chaotic capital, is a sensory explosion that captures the absolute essence of human history. Spanned across the majestic Nile River, this ancient city acts as a gateway to antiquity and a living, breathing testament to the Islamic, Coptic, and Pharaonic eras. Known locally as 'Umm al-Dunya' (the Mother of the World), Cairo is a sprawling metropolis of over twenty million people where modern skyscrapers stand in stark contrast to medieval fortresses and towering stone minarets. It is a city that never sleeps, filled with the aroma of roasting coffee, the sound of car horns, and the soothing, melodic call to prayer drifting across the rooftops. Walking through Cairo is not simply a sightseeing trip; it is an immersive, temporal journey through layers of civilizations that have shaped the course of human development. To get the most out of your holiday, you can easily <a href='/tours?destination=Cairo' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Book Cairo Tour</a> through our front desk and enjoy premium day packages.",
    introAr: "تعد القاهرة، عاصمة مصر الصاخبة والمهيبة، انفجاراً حسياً يجسد الجوهر الحقيقي للتاريخ البشري. تمتد هذه المدينة القديمة على طول نهر النيل العظيم، وتعمل كبوابة إلى العصور القديمة وشهادة حية على العصور الفرعونية والقبطية والإسلامية. تُعرف القاهرة محلياً باسم \"أم الدنيا\"، وهي مدينة مترامية الأطراف يقطنها أكثر من عشرين مليون نسمة، حيث تتجاور ناطحات السحاب الحديثة مع القلاع القروسطية والمآذن الحجرية الشاهقة. إنها مدينة لا تنام أبداً، تمتلئ برائحة القهوة المحمصة، وأصوات حركة المرور الصاخبة، وأصوات الأذان العذبة المنسابة فوق الأسطح. يمكنك بسهولة <a href='/tours?destination=Cairo' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز جولة القاهرة</a> مباشرة للحصول على تجربة فاخرة.",
    historyEn: "Founded in 969 CE by the Fatimid dynasty under Caliph Al-Mu'izz li-Din Allah, the walled city of Al-Qahira ('The Victorious') was designed as a royal enclosure for the caliph and his elite army. However, the region's history goes back thousands of years. Just south of modern Cairo lies Babylon Fortress, a massive Roman stronghold built around 30 BCE that marked the border between Upper and Lower Egypt. Following the Arab conquest in 641 CE led by Amr ibn al-Aas, the capital shifted between Fustat, Al-Askar, and Al-Qata'i, before the Fatimids solidified Al-Qahira as the ultimate capital. During the Ayyubid and Mamluk periods (12th to 16th centuries), Cairo grew into the undisputed intellectual, religious, and economic capital of the Islamic world, a key hub on the global spice trade routes. Legendary rulers like Saladin fortified the city, erecting the spectacular Citadel of Cairo, which served as the seat of government for nearly 700 years. Modern Cairo was heavily influenced by Khedive Ismail in the 19th century, who hired European architects to construct 'Paris on the Nile'—the elegant Downtown district characterized by wide grand avenues, circular plazas, and French neoclassical facades.",
    historyAr: "تأسست القاهرة في عام 969 ميلادي على يد السلالة الفاطمية في عهد الخليفة المعز لدين الله، وقد صُممت مدينة القاهرة المسورة لتكون مقراً ملكياً خاصاً للخليفة وجيشه النخبة. ومع ذلك، فإن تاريخ المنطقة يمتد لآلاف السنين قبل ذلك. فإلى الجنوب مباشرة من القاهرة الحديثة تقع حصن بابليون، وهو معقل روماني ضخم بُني حوالي عام 30 قبل الميلاد وكان يمثل الحدود بين مصر العليا والسفلى. بعد الفتح العربي في عام 641 ميلادي بقيادة عمرو بن العاص، تنقلت العاصمة بين الفسطاط والعسكر والقطائع قبل أن يستقر الفاطميون على القاهرة كعاصمة نهائية. خلال العصرين الأيوبي والمملوكي (القرنين الثاني عشر إلى السادس عشر)، نمت القاهرة لتصبح العاصمة الفكرية والدينية والاقتصادية بلا منازع للعالم الإسلامي، ومركزاً رئيسياً على طرق تجارة التوابل العالمية.",
    cultureEn: "Cairo's culture is a stunning, syncretic mosaic of ancient traditions and fast-paced contemporary arts. The heart of Cairene life is the social culture centered around the traditional 'ahwa' (street cafe), where locals gather for hours to sip mint tea, play backgammon, smoke shisha, and engage in high-spirited debates. Hospitalities run deep here; the welcoming phrase 'Ahlan wa Sahlan' is extended with genuine warmth to every traveler. The city has produced some of the Arab world's greatest cultural icons, including Nobel laureate novelist Naguib Mahfouz, who set his famous Cairo Trilogy in the historic alleys of the old city, and the legendary singer Um Kulthum, whose powerful voice still echoes from radios in taxi cabs and cafes across the city. Religious traditions are beautiful and highly respected; during Ramadan, the city transforms with colorful paper lanterns ('fanoos') hanging from balconies and massive charity banquets ('Mawaed el-Rahman') laid out on the sidewalks for anyone to eat for free.",
    cultureAr: "تعد ثقافة القاهرة فسيفساء مذهلة وتكاملية من التقاليد القديمة والفنون المعاصرة المتسارعة. قلب الحياة القاهرية هي الثقافة الاجتماعية المتمحورة حول \"القهوة\" التقليدية (المقهى الشعبي)، حيث يجتمع السكان المحليون لساعات لاحتساء شاي النعناع، ولعب الطاولة، والتدخين، والمشاركة في نقاشات حيوية. كرم الضيافة متأصل بعمق هنا؛ وعبارة \"أهلاً وسهلاً\" تُقال بصدق ودفء لكل مسافر. أنجبت المدينة بعضاً من أعظم الرموز الثقافية في العالم العربي، بما في ذلك الروائي الحائز على جائزة نوبل نجيب محفوظ، الذي كتب ثلاثيته الشهيرة في الأزقة التاريخية للمدينة القديمة.",
    activitiesEn: [
      { title: "Explore the Citadel of Saladin & Alabaster Mosque", desc: "Perched on the hills overlooking the city, the Citadel offers breathtaking panoramic views of Cairo. Visit the Mosque of Muhammad Ali, built with beautiful alabaster stone in the Ottoman style, with its towering pencil-thin minarets." },
      { title: "Get Lost in Khan El Khalili Bazaar", desc: "Step back into the Middle Ages in this sprawling labyrinth of aromatic spices, glittering brassware, handmade carpets, and gold jewelry shops. Stop by El Fishawy Cafe, operating continuously since 1773, for hot mint tea." },
      { title: "Tour the Grand Egyptian Museum (GEM) & National Museum of Egyptian Civilization (NMEC)", desc: "Stand in awe before the world's most extensive collection of ancient Pharaonic treasures, including the spectacular Royal Mummies Hall at NMEC and the colossal 3,200-year-old statue of Ramesses II at GEM." },
      { title: "Wander Coptic Cairo's Sacred Sanctuary", desc: "Explore the peaceful, narrow cobblestone streets of old Babylon. Visit the famous Hanging Church, built suspended over Roman bastions, the Church of St. Sergius, which sheltered the Holy Family, and the historic Ben Ezra Synagogue." }
    ],
    activitiesAr: [
      { title: "استكشاف قلعة صلاح الدين ومسجد المرمر", desc: "تقع القلعة على التلال المطلة على المدينة، وتوفر إطلالات بانورامية خلابة على القاهرة. تفضل بزيارة مسجد محمد علي، المبني من حجر المرمر الجميل على الطراز العثماني بمآذنه الشاهقة الرفيعة كقلم الرصاص." },
      { title: "التجول في بازار خان الخليلي", desc: "عد إلى العصور الوسطى في هذه المتاهة المترامية الأطراف المليئة بالتوابل العطرية، والنحاسيات البراقة، والسجاد اليدوي، ومحلات الذهب. توقف عند مقهى الفيشاوي، الذي يعمل منذ عام 1773، لتناول شاي النعناع الساخن." },
      { title: "زيارة المتحف المصري الكبير ومتحف الحضارة المصرية", desc: "قف في ذهول أمام المجموعة الأكثر شمولاً في العالم من الكنوز الفرعونية القديمة، بما في ذلك قاعة المومياوات الملكية المذهلة في متحف الحضارة، وتمثال رمسيس الثاني الضخم الذي يبلغ عمره 3200 عام في المتحف المصري الكبير." },
      { title: "التجول في القاهرة القبطية القديمة ومقدساتها", desc: "استكشف الشوارع الهادئة الضيقة المرصوفة بالحصى في حصن بابليون القديم. قم بزيارة الكنيسة المعلقة الشهيرة، المبنية فوق الأبراج الرومانية، وكنيسة أبي سرجة، التي أوت العائلة المقدسة، وكنيس بن عزرا التاريخي." }
    ],
    foodEn: [
      { name: "Koshary", desc: "Egypt's legendary national dish—a hearty, comforting mix of rice, lentils, macaroni, and chickpeas, topped with spicy tomato sauce, garlic vinegar, and crispy caramelized onions." },
      { name: "Molokhia", desc: "A rich, viscous soup made from finely minced jute leaves simmered in chicken or rabbit broth, seasoned with a fried 'tasha' of garlic and coriander, served with white rice and fresh pita." },
      { name: "Falafel & Ful Medames", desc: "The ultimate Egyptian breakfast. Egyptian falafel ('Taameya') is made from crushed fava beans rather than chickpeas, making it incredibly light, green, and crispy. Served with slow-cooked fava beans dressed in olive oil, cumin, and fresh lemon." }
    ],
    foodAr: [
      { name: "الكشري", desc: "الطبق الوطني الأسطوري لمصر - خليط شهي ومريح من الأرز والعدس والمعكرونة والحمص، يعلوه صلصة الطماطم الحارة، دقة الثوم والخل، والبصل المقرمش المكرمل." },
      { name: "الملوخية", desc: "حساء غني وشهير مصنوع من أوراق الملوخية المفرومة فرماً ناعماً والمطهوة في مرق الدجاج أو الأرانب، ومتبلة بـ \"طشة\" مقلية من الثوم والكزبرة، تقدم مع الأرز الأبيض والخبز البلدي الساخن." },
      { name: "الفول والفلافل (الطعمية)", desc: "الإفطار المصري المثالي. تُصنع الفلافل المصرية من الفول المجروش بدلاً من الحمص، مما يجعلها خفيفة للغاية، خضراء من الداخل ومقرمشة من الخارج. تقدم مع الفول المطهو ببطء والمتبل بزيت الزيتون والكمون والليمون الطازج." }
    ],
    hotelsEn: [
      { name: "Marriott Mena House, Giza", tier: "Luxury", desc: "A legendary 5-star palace hotel nestled right at the foot of the Giza Pyramids, offering lush royal gardens, historic interiors, and private balconies directly overlooking the monuments." },
      { name: "Steigenberger El Tahrir, Downtown", tier: "Mid-Range", desc: "A highly modern, comfortable hotel located right in Tahrir Square, perfect for walking to the Egyptian Museum and exploring the vibrant restaurants of Downtown Cairo." },
      { name: "Venus Pyramids Inn, Giza", tier: "Budget", desc: "Our premium boutique hotel featuring a magnificent rooftop terrace directly facing the Sphinx and Pyramids, offering cozy air-conditioned rooms and warm Egyptian family-style hospitality." }
    ],
    hotelsAr: [
      { name: "ماريوت مينا هاوس، الجيزة", tier: "Luxury", desc: "فندق قصر أسطوري فئة 5 نجوم يقع مباشرة عند قدم أهرامات الجيزة، ويتميز بحدائق ملكية مورقة، وتصميمات داخلية تاريخية، وشرفات خاصة تطل مباشرة على الأهرامات." },
      { name: "شتيجنبرجر التحرير، وسط البلد", tier: "Mid-Range", desc: "فندق عصري ومريح للغاية يقع في ميدان التحرير مباشرة، وهو مثالي للسير إلى المتحف المصري واستكشاف المطاعم النابضة بالحياة بوسط القاهرة." },
      { name: "فينوس بيراميدز إن، الجيزة", tier: "Budget", desc: "فندقنا المتميز الذي يتميز بتراس رائع على السطح يواجه أبو الهول والأهرامات مباشرة، ويوفر غغرفاً مريحة ومكيفة وضيافة عائلية مصرية دافئة." }
    ],
    transportEn: "Getting around Cairo is an adventure in itself. The easiest, most comfortable option is to use Uber, which is highly affordable and widely available throughout the city. For a true local experience, Cairo Metro is incredibly clean, fast, and traffic-free, linking major districts like Maadi, Downtown, and Heliopolis with dedicated carriages for women. White Taxis are abundant, but always request the driver to run the taximeter before departing. Avoid driving at all costs—Cairo's traffic is famously chaotic and unregulated.",
    transportAr: "التنقل في القاهرة مغامرة بحد ذاتها. الخيار الأسهل والأكثر راحة هو استخدام تطبيق \"أوبر\"، فهو رخيص للغاية ومتوفر بكثرة في جميع أنحاء المدينة. للحصول على تجربة محلية حقيقية، فإن مترو أنفاق القاهرة نظيف للغاية وسريع وخالٍ من الاختناقات المرورية، ويربط الأحياء الرئيسية مثل المعادي ووسط البلد ومصر الجديدة، ويحتوي على عربات مخصصة للسيدات.",
    tipsEn: [
      "Always carry small cash notes (Egyptian Pounds) for tipping ('Baksheesh') and buying street food.",
      "Dress modestly when visiting historic sites and mosques. Women should carry a light scarf to cover their hair inside mosques.",
      "Cross the streets carefully! The trick is to walk at a slow, steady pace across traffic and let drivers navigate around you.",
      "Bargain politely at Khan El Khalili. Offer around 40-50% of the initial price and negotiate with a smile.",
      "Drink bottled water only, and avoid ice cubes in street establishments to keep your stomach safe."
    ],
    tipsAr: [
      "احمل دائماً فئات نقدية صغيرة (الجنيه المصري) للإكراميات (البقشيش) وشراء أطعمة الشارع.",
      "احرص على ارتداء ملابس محتشمة عند زيارة المواقع التاريخية والمساجد. يُفضل أن تحمل السيدات شالاً خفيفاً لتغطية الرأس داخل المساجد.",
      "اعبر الشوارع بحذر! الحيلة هي السير بخطوات بطيئة وثابتة عبر حركة المرور ودع السائقين يتفادونك.",
      "تفاوض بأدب في خان الخليلي. اعرض حوالي 40-50% من السعر المبدئي وتفاوض بابتسامة.",
      "اشرب المياه المعبأة فقط، وتجنب مكعبات الثلج في المحلات الشعبية للحفاظ على سلامة معدتك."
    ],
    bestTimeEn: "The absolute best time to visit Cairo is between October and April, when the weather is beautifully warm during the day (ranging from 18°C to 25°C) and cool at night. Avoid the peak summer months of July and August, when temperatures can soar past 40°C, combined with high humidity and urban dust.",
    bestTimeAr: "أفضل وقت على الإطلاق لزيارة القاهرة هو بين أكتوبر وأبريل، حيث يكون الطقس دافئاً وجميلاً خلال النهار (تتراوح الحرارة بين 18 و 25 درجة مئوية) وبارداً في الليل. تجنب أشهر الصيف الحارة في يوليو وأغسطس حيث يمكن أن تتجاوز درجات الحرارة 40 درجة مئوية مصحوبة برطوبة عالية.",
    nearByEn: [
      { name: "The Giza Pyramids Plateau", desc: "Located just across the city line, containing the world's most famous monuments.", slug: "giza-pyramids-guide" },
      { name: "Fayoum Oasis & Magic Lake", desc: "A lush agricultural basin featuring ancient fossils and waterfalls.", slug: "fayoum-oasis-travel-guide" },
      { name: "The Mediterranean Capital of Alexandria", desc: "Alexander the Great's romantic, sea-breezed cosmopolitan capital.", slug: "alexandria-travel-guide" }
    ],
    nearByAr: [
      { name: "هضبة أهرامات الجيزة", desc: "تقع مباشرة على أطراف المدينة، وتضم المعالم الأثرية الأكثر شهرة في العالم.", slug: "giza-pyramids-guide" },
      { name: "واحة الفيوم والبحيرة السحرية", desc: "حوض زراعي مورق يتميز بالحفريات القديمة والشلالات الطبيعية.", slug: "fayoum-oasis-travel-guide" },
      { name: "العاصمة المتوسطية الإسكندرية", desc: "عاصمة الإسكندر الأكبر الرومانسية المطلة على البحر المتوسط.", slug: "alexandria-travel-guide" }
    ],
    faqEn: [
      { q: "Is Cairo safe for solo female travelers?", a: "Yes, Cairo is generally very safe, but solo female travelers will experience staring and persistent vendors. Dressing modestly, wearing sunglasses, planning your routes in advance, and using Uber rather than walking alone at night will make your trip highly comfortable." },
      { q: "How many days are needed to explore Cairo?", a: "We recommend spending at least 3 full days in Cairo to explore the Pyramids of Giza, the Grand Egyptian Museum, Islamic and Coptic Cairo, and the Citadels/Medieval bazaars without rushing." },
      { q: "Can I enter inside the Great Pyramid?", a: "Yes, you can buy an extra ticket to climb inside the Great Pyramid of Khufu. However, it requires hunched climbing through narrow, steep, warm shafts and is not recommended for anyone with claustrophobia or heart conditions." }
    ],
    faqAr: [
      { q: "هل القاهرة آمنة للمسافرات بمفردهن؟", a: "نعم، القاهرة آمنة بشكل عام، ولكن قد تواجه المسافرات بمفردهن بعض التحديق وإلحاح البائعين. إن ارتداء ملابس محتشمة، وارتداء نظارات شمسية، والتخطيط لمساراتك مسبقاً، واستخدام تطبيق أوبر بدلاً من السير بمفردك ليلاً سيجعل رحلتك مريحة وآمنة للغاية." },
      { q: "كم يوماً أحتاج لاستكشاف القاهرة؟", a: "نوصي بقضاء 3 أيام كاملة على الأقل في القاهرة لاستكشاف أهرامات الجيزة، المتحف المصري الكبير، القاهرة الإسلامية والقبطية، والقلعة والبازارات التاريخية دون تسرع." },
      { q: "هل يمكنني الدخول داخل الهرم الأكبر؟", a: "نعم، يمكنك شراء تذكرة إضافية للتسلق داخل الهرم الأكبر (خوفو). ومع ذلك، فإن ذلك يتطلب الانحناء والتسلق عبر ممرات ضيقة وحارة وشديدة الانحدار، ولا يُنصح به لمن يعانون من رهاب الأماكن المغلقة أو مشاكل القلب." }
    ],
    ctaEn: {
      text: "Experience the magic of Cairo with our highly-rated private day tours, including professional Egyptologists, private luxury transport, and gourmet lunches.",
      linkText: "See all Cairo trips",
      url: "/#tours"
    },
    ctaAr: {
      text: "اختبر سحر القاهرة مع جولاتنا الخاصة ذات التقييمات العالية، والتي تشمل مرشدين متخصصين في علم المصريات، وسيارات فاخرة خاصة، ووجبات غداء فاخرة.",
      linkText: "شاهد جميع رحلات القاهرة",
      url: "/#tours"
    },
    relatedTourIds: [1, 2, 7],
    hiddenGemsEn: [
      "The Nilometer on Rhoda Island - A 9th-century scale designed to measure the Nile's rise and predict tax rates.",
      "El Mokattam Cliffs - Offers a breathtaking panoramic view of the Cairo skyline, especially at sunset.",
      "Beit El Suhaymi - A fully restored Ottoman merchant mansion inside Islamic Cairo showing hidden courtyards."
    ],
    hiddenGemsAr: [
      "مقياس النيل في جزيرة الروضة - مقياس رائع يعود للقرن التاسع الميلادي صمم لقياس منسوب النيل.",
      "تلال المقطم - توفر إطلالة بانورامية رائعة على أفق القاهرة وتاريخها المتشابك عند الغروب.",
      "بيت السحيمي - منزل تاجر عثماني تم ترميمه بالكامل في قلب القاهرة التاريخية يضم أفنية داخلية ساحرة."
    ],
    safetyEn: [
      "Avoid walking in dark alleys alone at night; stick to well-lit busy commercial avenues.",
      "Use Uber rather than standard white street taxis to guarantee fixed pricing and monitored transit.",
      "Stay hydrated! Carry a bottle of fresh mineral water and apply sunscreen frequently during summer."
    ],
    safetyAr: [
      "تجنب السير في الأزقة المظلمة بمفردك ليلاً؛ التزم بالشوارع التجارية المزدحمة والمضاءة جيداً.",
      "استخدم تطبيق أوبر بدلاً من التاكسي الأبيض في الشوارع لضمان أسعار ثابتة ومراقبة الرحلة.",
      "حافظ على رطوبة جسمك! احمل زجاجة مياه معدنية واستخدم واقي الشمس بانتظام خلال الصيف."
    ],
    itineraryEn: [
      { day: "Day 1", title: "Pharaonic Glories", desc: "Start the day visiting the Citadel of Saladin, then spend the afternoon exploring the Grand Egyptian Museum and Giza Pyramids Plateau." },
      { day: "Day 2", title: "Historic Alleys", desc: "Wander through the narrow lanes of Coptic Cairo, check the Hanging Church, then shop at Khan El Khalili Medieval Bazaar at sunset." },
      { day: "Day 3", title: "Modern & Culinary Cairo", desc: "Walk the neoclassical streets of Downtown, enjoy authentic Egyptian Koshary, and take a sunset felucca ride on the Nile." }
    ],
    itineraryAr: [
      { day: "اليوم الأول", title: "الأمجاد الفرعونية", desc: "ابدأ جولتك بزيارة قلعة صلاح الدين، ثم اقضِ فترة ما بعد الظهر في استكشاف المتحف المصري الكبير وهضبة أهرامات الجيزة." },
      { day: "اليوم الثاني", title: "الأزقة التاريخية", desc: "تجول في الحارات الضيقة للقاهرة القبطية، وشاهد الكنيسة المعلقة، ثم تسوق في بازار خان الخليلي التاريخي عند الغروب." },
      { day: "اليوم الثالث", title: "القاهرة الحديثة والمطبخ الشعبي", desc: "سر في الشوارع الكلاسيكية بوسط البلد، وتناول الكشري المصري الأصيل، وقم بجولة فلوكة عند الغروب في النيل." }
    ]
  },
  {
    slug: "giza-pyramids-guide",
    destination: "Cairo & Giza",
    nameEn: "Giza Necropolis",
    nameAr: "الجيزة والأهرامات",
    titleEn: "Giza Necropolis Travel Guide: Stand Before the Last Remaining Ancient Wonder of the World",
    titleAr: "دليل أهرامات الجيزة: قف أمام الأعجوبة الوحيدة الباقية من العالم القديم",
    subtitleEn: "A profound journey to the monumental tombs of Khufu, Khafre, Menkaure, and the silent Sphinx",
    subtitleAr: "رحلة عميقة إلى المقابر الملكية الضخمة لخوفو وخفرع ومنقرع وأبو الهول الصامت",
    metaDescriptionEn: "The complete, expert-written travel guide for the Giza Pyramids Plateau, including ticket prices, opening hours, photography spots, and avoiding scams.",
    metaDescriptionAr: "دليل السفر الشامل المكتوب على يد خبراء لهضبة أهرامات الجيزة، بما في ذلك أسعار التذاكر، ساعات العمل، مواقع التصوير، وتجنب الاحتيال.",
    keywordsEn: "Giza Pyramids, Great Sphinx, Pyramids of Egypt, Khufu tomb, Saqqara step pyramid, Memphis capital, Giza tickets",
    keywordsAr: "أهرامات الجيزة, أبو الهول, أهرامات مصر, هرم خوفو, هرم سقارة المدرج, منف العاصمة, تذاكر الجيزة",
    heroImage: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Nothing on Earth can truly prepare you for the scale and mathematical perfection of the Giza Plateau. Rising from the desert limestone, the Great Pyramids have stood as silent, monumental sentinels for over 4,500 years, surviving the rise and fall of empires, the shifts of climates, and the countless generations of travelers who have gazed up at them in absolute wonder. Commissioned by the pharaohs of the Old Kingdom's 4th Dynasty, these colossal structures are not merely graves; they were cosmic launching pads designed to propel the kings' divine souls into the circumpolar stars of the night sky, guaranteeing eternal life. Together with the enigmatic, lion-bodied Sphinx, Giza stands as the ultimate, crowning achievement of human engineering and architectural audacity. Before you go, we highly recommend you <a href='/tours?destination=Giza' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Book Cairo Tour</a> to secure direct access with an Egyptologist guide.",
    introAr: "لا شيء على وجه الأرض يمكن أن يجهزك حقاً لضخامة الدقة الهندسية والرياضية لهضبة الجيزة. ترتفع أهرامات الجيزة العظيمة فوق الحجر الجيري للصحراء، وقد وقفت كحراس صامتين ومهيبين لأكثر من 4500 عام. للحصول على أفضل تجربة، نوصيك بـ <a href='/tours?destination=Giza' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز جولة القاهرة والجيزة</a> مباشرة مع مرشد مرخص.",
    historyEn: "Constructed during the golden age of the Old Kingdom, between 2580 and 2500 BCE, the Giza Plateau was transformed from a barren limestone quarry into a highly structured sacred landscape. The oldest and largest, the Great Pyramid of Khufu (Cheops), stands 138.8 meters tall and was built from an estimated 2.3 million limestone blocks, representing a staggering weight of 6 million tons. It was aligned with near-perfect cardinal accuracy, pointing toward true north with a minute error of only a fraction of a degree. Khufu's son, Khafre (Chephren), constructed the second pyramid, which appears taller because it sits on a slightly higher elevation of the bedrock and retains its original polished white Tura limestone casing stones at its peak. Khafre also constructed the Valley Temple and the monumental Sphinx, carved from a single outcropping of the natural limestone bedrock. The third and smallest of the main pyramids belonged to Menkaure (Mykerinus), distinguished by its lower tiers of rich red Aswan granite. Surrounding these royal giants are fields of flat-topped mastaba tombs for the kings' wives, court officials, and royal architects, as well as the recently excavated villages of the thousands of highly skilled paid builders who constructed the site.",
    historyAr: "بُنيت هضبة الجيزة في العصر الذهبي للدولة القديمة، بين عامي 2580 و 2500 قبل الميلاد، وتحولت من محجر حجر جيري قاحل إلى مشهد مقدس منظم للغاية. الهرم الأكبر لخوفو هو الأقدم والأكبر، ويبلغ ارتفاعه 138.8 متراً وبُني من حوالي 2.3 مليون كتلة حجرية بوزن إجمالي مذهل يقارب 6 ملايين طن.",
    cultureEn: "To Egyptians, the Pyramids are more than tourist attractions; they are the ultimate source of national pride and cultural identity. The local Bedouin communities living in the adjacent Nazlet El Samman village have worked as guardians, horse breeders, and camel drivers on the plateau for hundreds of years, passing down traditional equestrian skills and storytelling from father to son. Their deep connection to the land is visible in the proud, traditional horse shows performed on the desert edge at sunset. The site is a living laboratory of architectural archaeology, recently hosting major contemporary art exhibitions like 'Forever is Now', where international modern sculptures are set against the ancient monuments, bridging the millennial divide between ancient heritage and modern creativity.",
    cultureAr: "بالنسبة للمصريين، الأهرامات أكثر من مجرد معلم سياحي; إنها المصدر المطلق للفخر الوطني والهوية الثقافية. تعمل المجتمعات المحلية في نزلة السمان المجاورة كحراس وسائسي خيل وجمال على الهضبة لمئات السنين، متوارثين مهارات الفروسية التقليدية ورواية القصص من الآباء إلى الأبناء.",
    activitiesEn: [
      { title: "Walk the Giza Plateau & Climb Inside the Great Pyramid", desc: "Buy the comprehensive ticket and climb through the Grand Gallery to stand inside the King's Chamber, home to the empty red granite sarcophagus of Khufu." },
      { title: "Behold the Great Sphinx & Valley Temple", desc: "Stand face-to-face with the legendary sentinel. Visit the adjacent Valley Temple of Khafre, where the king's body was purified and mummified in ancient times." },
      { title: "Watch the Sunset from the Panorama Point", desc: "Ride a camel or walk deep into the desert sand dunes to reach the ultimate panoramic viewpoint, where all nine pyramids align perfectly on the horizon." },
      { title: "Experience the Pyramids Sound & Light Show", desc: "As night falls, watch the monuments illuminate in vibrant, dramatic colors while a booming voice narrates the history of the pharaohs and Sphinx." }
    ],
    activitiesAr: [
      { title: "السير في الهضبة والدخول إلى الهرم الأكبر", desc: "اشترِ التذكرة الشاملة وتسلق عبر البهو العظيم للوقوف داخل غرفة الملك، التي تضم تابوت الملك خوفو الفارغ المصنوع من الجرانيت الأحمر." },
      { title: "مشاهدة أبو الهول العظيم ومعبد الوادي", desc: "قف وجهاً لوجه مع الحارس الأسطوري. قم بزيارة معبد الوادي المجاور لخفرع، حيث تم تحنيط وتطهير جسد الملك في العصور القديمة." },
      { title: "مشاهدة غروب الشمس من نقطة البانوراما", desc: "اركب جملاً أو امشِ عميقاً في الكثبان الرملية للوصول إلى أفضل نقطة رؤية بانورامية حيث تظهر الأهرامات التسعة مصطفة على الأفق." },
      { title: "حضور عرض الصوت والضوء بالأهرامات", desc: "مع حلول الليل، شاهد الآثار تضاء بألوان نابضة ودرامية بينما يروي صوت رخيم مهيب تاريخ الفراعنة وقصة أبو الهول." }
    ],
    foodEn: [
      { name: "Meshwi (Mixed Grill)", desc: "Succulent seekh kebab and kofta (spiced minced lamb) grilled to perfection over natural charcoal embers, served with fresh tahini paste, garlic dip, and charred flatbread." },
      { name: "Feteer Meshaltet", desc: "Often called 'Egyptian pancake'—a flaky, multi-layered pastry rolled thin, baked in traditional clay ovens, served with black cane molasses, fresh cream, or salty old cheese." },
      { name: "Hamam Mahshi", desc: "A prized delicacy—whole pigeons stuffed with spiced freekeh (cracked green wheat) or seasoned rice, boiled, then pan-fried to a deep golden, crispy perfection." }
    ],
    foodAr: [
      { name: "المشويات المشكلة", desc: "قطع الكباب اللذيذة والكفتة المتبلة والمشوية بشكل مثالي على جمر الفحم الطبيعي، تقدم مع سلطة الطحينة الطازجة، الثومية، والخبز البلدي الساخن." },
      { name: "الفطير المشلتت", desc: "فطير مورق مصنوع من طبقات رقيقة للغاية من العجين والزبد البلدي، يُخبز في أفران الطين التقليدية، ويقدم مع العسل الأسود، القشطة الطازجة، أو الجبن القديم." },
      { name: "الحمام المحشي", desc: "وجبة فاخرة ومفضلة - حمام محشي بالفريك المتبل أو الأرز المبهر، يُسلق ثم يُحمر في السمن البلدي حتى يكتسب لوناً ذهبياً مقرمشاً رائعاً." }
    ],
    hotelsEn: [
      { name: "Marriott Mena House", tier: "Luxury", desc: "The grandest historic palace hotel in Egypt. Dine next to the illuminated pyramids in their royal gardens." },
      { name: "Great Pyramid Inn", tier: "Mid-Range", desc: "An excellent, highly comfortable hotel offering front-row rooftop terrace seats directly facing the Sphinx." },
      { name: "Venus Pyramids Inn", tier: "Budget", desc: "Our beautiful boutique hotel featuring family-style hospitality, exceptionally cozy rooms, and an unrivaled rooftop view of the nightly Sound & Light show." }
    ],
    hotelsAr: [
      { name: "فندق ماريوت مينا هاوس", tier: "Luxury", desc: "أفخم فندق قصر تاريخي في مصر. استمتع بتناول العشاء بجوار الأهرامات المضاءة في حدائق القصر الملكية." },
      { name: "جريت بيراميد إن", tier: "Mid-Range", desc: "فندق ممتاز ومريح للغاية يوفر إطلالات مباشرة ومقاعد في الصف الأول على تراس السطح المواجه لأبو الهول." },
      { name: "فينوس بيراميدز إن", tier: "Budget", desc: "فندقنا الجميل الذي يوفر ضيافة عائلية دافئة، غرفاً مريحة للغاية، وإطلالة غير مسبوقة من السطح على عرض الصوت والضوء الليلي مجاناً." }
    ],
    transportEn: "Giza sits about 15km west of Cairo city center. The fastest way to arrive is via Uber or private hotel transfer, which takes about 30-45 minutes. Alternatively, Cairo Metro Line 2 runs directly to Giza Station, from where you can take a quick microbus or taxi to the Pyramids entrance. Once inside the plateau, the best way to move is on foot, or by hiring an authorized horse-drawn carriage or camel at the official ticket counter, where prices are regulated.",
    transportAr: "تقع الجيزة على بعد حوالي 15 كم غرب وسط القاهرة. أسرع طريقة للوصول هي عبر تطبيق \"أوبر\" أو النقل الخاص بالفندق، وتستغرق الرحلة حوالي 30-45 دقيقة.",
    tipsEn: [
      "Arrive early! The Giza Plateau gates open at 08:00 AM. Arriving early lets you beat both the scorching desert midday heat and the tour bus crowds.",
      "Buy tickets only at the official metal booths near the entrance gates. Ignore anyone on the road claiming to sell tickets or official passes.",
      "Bargain firmly for camel rides. Always agree on the total price and duration before mounting, and ensure it includes getting off!",
      "Beware of heatstroke. Carry plenty of bottled water, wear a wide-brimmed hat, and apply high-factor sunscreen frequently.",
      "Hire an authorized tourist guide in advance to enjoy a deep, hassle-free historical narration without being constantly bothered by vendors."
    ],
    tipsAr: [
      "احرص على الوصول مبكراً! تفتح بوابات هضبة الجيزة في الساعة 08:00 صباحاً. الوصول مبكراً يجنبك حرارة الصحراء الشديدة الحارقة وازدحام الحافلات السياحية.",
      "اشترِ التذاكر فقط من المنافذ المعدنية الرسمية عند بوابات المدخل. تجاهل أي شخص في الطريق يدعي بيع التذاكر أو التصاريح الرسمية.",
      "تفاوض بحزم لركوب الجمال. اتفق دائماً على السعر الإجمالي والمدة قبل الركوب، وتأكد من أن السعر يشمل النزول أيضاً!"
    ],
    bestTimeEn: "October to April is absolute bliss, characterized by warm breezes and clear, comfortable blue skies. If visiting in summer, ensure you complete your exploration before 11:00 AM as there is absolutely no shade on the limestone plateau.",
    bestTimeAr: "الفترة من أكتوبر إلى أبريل هي الأفضل تماماً، وتتميز بنسائم دافئة وسماء زرقاء مريحة. إذا كنت تزور في الصيف، فتأكد من إنهاء جولاتك قبل الساعة 11:00 صباحاً.",
    nearByEn: [
      { name: "The Step Pyramid of Saqqara", desc: "The oldest monumental stone structure in the world, located 20km south.", slug: "cairo-tourism-guide" },
      { name: "The Grand Egyptian Museum", desc: "The largest archaeological museum in the world housing Tutankhamun's collection.", slug: "cairo-tourism-guide" },
      { name: "Fayoum Oasis & Wadi El Hitan", desc: "A beautiful desert basin containing fossilized prehistoric whales.", slug: "fayoum-oasis-travel-guide" }
    ],
    nearByAr: [
      { name: "هرم سقارة المدرج", desc: "أقدم بناء حجري ضخم في العالم، ويقع على بعد 20 كم جنوباً.", slug: "cairo-tourism-guide" },
      { name: "المتحف المصري الكبير", desc: "أكبر متحف أثري في العالم يضم مجموعة الفرعون توت عنخ آمون الكاملة.", slug: "cairo-tourism-guide" },
      { name: "واحة الفيوم ووادي الحيتان", desc: "منخفض صحراوي رائع يحتوي على هياكل متحجرة لحيتان ما قبل التاريخ.", slug: "fayoum-oasis-travel-guide" }
    ],
    faqEn: [
      { q: "How much are Giza Pyramids entrance tickets?", a: "As of 2026, the general entrance ticket to the plateau is 540 EGP (approximately $18 USD) for foreign visitors. A separate ticket is required to enter inside the Great Pyramid, which costs 900 EGP." },
      { q: "Is it allowed to climb the pyramids?", a: "No, climbing on the exterior stone blocks of the pyramids is strictly illegal and highly dangerous, carrying heavy fines and prison sentences. You can only climb inside the designated internal shafts." },
      { q: "How do I avoid scams on the Giza Plateau?", a: "Simply walk past vendors with a polite, firm 'La, Shukran' (No, thank you). Never hand your camera or ticket to anyone except official uniformed park staff, and avoid hiring camels from random individuals on the sand." }
    ],
    faqAr: [
      { q: "كم تبلغ أسعار تذاكر دخول أهرامات الجيزة؟", a: "في عام 2026، تبلغ تذكرة الدخول العامة للهضبة 540 جنيهاً مصرياً للزائر الأجنبي. وتتطلب الدخول إلى داخل الهرم الأكبر تذكرة منفصلة تبلغ 900 جنيه مصري." },
      { q: "هل يُسمح بتسلق الأهرامات؟", a: "لا، تسلق الكتل الحجرية الخارجية للأهرامات غير قانوني تماماً وخطير للغاية، ويعاقب عليه بغرامات مالية كبيرة." }
    ],
    ctaEn: {
      text: "Enjoy a stress-free royal experience at the Pyramids. Book our signature private tour featuring front-door pickup, luxury private vehicle, certified Egyptologist guide, and gourmet Pyramids-view lunch.",
      linkText: "See all Cairo & Giza trips",
      url: "/#tours"
    },
    ctaAr: {
      text: "استمتع بتجربة ملكية خالية من المتاعب في الأهرامات. احجز جولتنا الخاصة المميزة التي تشمل التوصيل من الباب للباب، سيارة فاخرة، مرشد معتمد، ووجبة غداء فاخرة مطلة على الأهرامات.",
      linkText: "شاهد جميع جولات القاهرة والجيزة",
      url: "/#tours"
    },
    relatedTourIds: [1, 2, 7],
    hiddenGemsEn: [
      "The Tombs of the Pyramids Builders - Excavated tombs proving the pyramids were built by highly cared-for paid workers, not slaves.",
      "The Khufu Boat Museum Area - The exact pit where the magnificent 4,500-year-old intact cedar wood solar barge of King Khufu was discovered.",
      "The Desert Dunes panorama - Walk or take a camel about 1km past the Panorama point for an incredible, silent view of the desert landscape."
    ],
    hiddenGemsAr: [
      "مقابر بناة الأهرام - مقابر محفورة تثبت أن الأهرام بُنيت بسواعد بناة مدفوعي الأجر ومكرمين وليسوا عبيداً.",
      "منطقة حفرة مركب خوفو - الحفرة الدقيقة حيث عُثر على سفينة خوفو الشمسية المصنوعة من خشب الأرز وسليمة بالكامل.",
      "كثبان الرمل البعيدة - امشِ أو اركب جملاً لمسافة 1 كم خلف البانوراما لرؤية هادئة وسحرية للأهرامات بلا ضجيج."
    ],
    safetyEn: [
      "Ignore 'official guides' near the ticket counter unless they have a clear badge showing official credentials.",
      "Always set the price of your camel or horse ride beforehand in writing if possible to avoid price inflation.",
      "Carry sunglasses, high UV sunscreen, and plenty of water as there is no shade or shops once on the plateau sands."
    ],
    safetyAr: [
      "تجاهل 'المرشدين الرسميين' بالقرب من كاونتر التذاكر إلا إذا كانوا يحملون تصاريح رسمية صادرة من وزارة السياحة.",
      "حدد دائماً سعر ركوب الجمال أو الخيل مسبقاً وتأكد من أن السعر يشمل النزول والصعود.",
      "احمل نظاراتك الشمسية، واقي شمس ذو حماية عالية، والماء الوفير حيث لا يوجد أي ظل أو محلات على رمال الهضبة."
    ],
    itineraryEn: [
      { day: "Morning", title: "The Great Plateau Walk", desc: "Arrive at 8:00 AM, buy the comprehensive ticket, and enter inside the Great Pyramid of Khufu. Take photos at the Sphinx." },
      { day: "Afternoon", title: "Camel Safari & Views", desc: "Hire an authorized Bedouin camel driver from the ticket office and ride deep into the dunes to see all nine pyramids align." },
      { day: "Evening", title: "Rooftop Dinner at Venus", desc: "Return to Venus Pyramids Inn and enjoy a delicious traditional dinner on our rooftop overlooking the illuminated pyramids." }
    ],
    itineraryAr: [
      { day: "صباحاً", title: "التجول في الهضبة الكبرى", desc: "احرص على الوصول في الثامنة صباحاً، واشترِ التذكرة الشاملة، وادخل داخل الهرم الأكبر لخوفو. التقط أجمل الصور مع أبو الهول." },
      { day: "ظهراً", title: "سفاري الجمال والبانوراما", desc: "استأجر جملاً مرخصاً من كاونتر التذاكر وانطلق في عمق الكثبان الرملية لرصد الأهرامات التسعة مصطفة على الأفق." },
      { day: "مساءً", title: "عشاء السطح في فينوس", desc: "عد إلى فندق فينوس بيراميدز إن واستمتع بعشاء تقليدي شهير على تراس السطح المفتوح لدينا مع إطلالة ساحرة ومباشرة مجانية لعرض الصوت والضوء." }
    ]
  },
  {
    slug: "luxor-travel-guide",
    destination: "Luxor",
    nameEn: "Luxor",
    nameAr: "الأقصر",
    titleEn: "Luxor Travel Guide: Step Inside the World's Greatest Open-Air Museum",
    titleAr: "دليل الأقصر: ادخل إلى أكبر متحف مفتوح في العالم",
    subtitleEn: "Discover the glorious capital of ancient Thebes, home to Karnak, Valley of the Kings, and Hatshepsut",
    subtitleAr: "اكتشف عاصمة طيبة الذهبية مهد الفراعنة وموطن الكرنك ووادي الملوك ومعبد حتشبسوت",
    metaDescriptionEn: "The comprehensive luxury guide to Luxor, Egypt. Explore the Valley of the Kings, Karnak Temple, Hatshepsut, Luxor Temple, hot air balloons, and Nile cruises.",
    metaDescriptionAr: "دليل السفر الفاخر والأشمل للأقصر، مصر. استكشف وادي الملوك، معبد الكرنك، معبد حتشبسوت، معبد الأقصر، المناطيد الهوائية، ورحلات النيل.",
    keywordsEn: "Luxor tourism, Valley of the Kings, Karnak Temple, Hatshepsut Temple, Luxor Egypt guide, Nile cruise Luxor, Thebes capital",
    keywordsAr: "السياحة في الأقصر, وادي الملوك, معبد الكرنك, معبد حتشبسوت, دليل الأقصر مصر, كروز النيل الأقصر, عاصمة طيبة",
    heroImage: "https://images.unsplash.com/photo-1600577916048-804c9191e36c?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Divided by the shimmering, life-giving waters of the Nile, Luxor stands on the ruins of ancient Thebes, the majestic capital of Egypt's New Kingdom. It is a city of staggering monumental beauty where the East Bank represents the land of the living—where the sun rises over colossal stone temples—and the West Bank is the silent kingdom of the dead—where the sun sets behind the rugged limestone peaks of the Libyan desert. Walking through Luxor is like stepping directly onto the gilded pages of history. It is a sanctuary of Pharaonic genius, housing the largest religious complex ever built by human hands, and rock-cut tombs preserving original, vibrant mineral paint that has stayed glowing for three thousand years. For the absolute journey of a lifetime, you can <a href='/tours?destination=Nile' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Reserve Nile Cruise</a> departing directly from our luxury network.",
    introAr: "تقسم مياه النيل المتلألئة مدينة الأقصر، التي ترقد على أنقاض طيبة القديمة عاصمة مصر العظيمة في الدولة الحديثة. الأقصر عبارة عن متحف حي مذهل يمثل ضفته الشرقية أرض الأحياء والضفة الغربية مملكة الموتى الصامتة. يمكنك بسهولة <a href='/tours?destination=Nile' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز كروز النيل</a> الفاخر المنطلق من الأقصر لأسوان.",
    historyEn: " Luxor's history is inextricably linked to the New Kingdom (1550–1069 BCE), the golden empire of ancient Egypt. Following the expulsion of the Hyksos, the Theban princes united Egypt, making Thebes the political, intellectual, and religious capital of the empire. Dedicating their primary devotion to Amun-Ra, the king of the gods, rulers like Hatshepsut, Amenhotep III, and Ramesses II poured massive wealth into erecting colossal temples. On the West Bank, they abandoned the pyramid design to avoid tomb robbers, electing instead to chisel deep, secretive, rock-cut tunnels inside the dry desert valleys to secure their mummies and golden treasures for eternity.",
    historyAr: "يرتبط تاريخ الأقصر ارتباطاً وثيقاً بالدولة الحديثة (1550-1069 قبل الميلاد)، الإمبراطورية الذهبية لمصر القديمة. بعد طرد الهكسوس، وحد أمراء طيبة مصر وجعلوها العاصمة السياسية والدينية والدبلوماسية الأقوى في العالم القديم.",
    cultureEn: "Luxor's modern culture is deeply rooted in Upper Egyptian hospitality ('Sa'idi'). The local communities pride themselves on ancient traditions, beautiful folk music featuring the rababa, and the traditional Upper Egyptian 'Tahtib' stick dance performed at weddings and celebrations. Life in Luxor is slow and graceful, tied to the agricultural rhythms of sugar cane harvesting and the daily movement of sails on the Nile. The local hosts extend immense warmth, welcoming visitors into their homes to share a cup of strong, dark 'Koshary' tea.",
    cultureAr: "تتأصل الثقافة الحديثة للأقصر في الضيافة الصعيدية الأصيلة. يفخر السكان المحليون بتقاليدهم القديمة، وموسيقاهم الشعبية التي تعتمد على الربابة، ورقصة التحطيب الصعيدية التقليدية التي تؤدى في الاحتفالات والمناسبات العامة.",
    activitiesEn: [
      { title: "Walk the Great Hypostyle Hall of Karnak", desc: "Perch yourself in the middle of the 134 colossal sandstone columns rising 21 meters high, chiseled with spectacular, towering hieroglyphics representing pharaonic wars and victories." },
      { title: "Descend into the Valley of the Kings", desc: "Explore the beautifully preserved rock-cut tombs of Egypt's greatest pharaohs, including Tutankhamun, Ramesses V/VI, and Seti I, featuring exceptionally vivid ceiling astronomical maps." },
      { title: "Ascend in a Sunrise Hot Air Balloon", desc: "Take a hot air balloon flight at dawn. Drift silently over the West Bank desert cliffs, the lush green sugar cane fields, the Colossi of Memnon, and the Nile." }
    ],
    activitiesAr: [
      { title: "التجول في بهو معبد الكرنك العظيم", desc: "قف في قلب بهو الأعمدة الذي يضم 134 عموداً حجرياً عملاقاً بارتفاع 21 متراً، منقوشة بالكامل بالكتابات الهيروغليفية التي تروي معارك وانتصارات الملوك." },
      { title: "الهبوط إلى أعماق مقابر وادي الملوك", desc: "استكشف المقابر الصخرية المحفورة لملوك مصر العظام، بما في ذلك توت عنخ آمون، ورمسيس الخامس والسادس، وسيتي الأول، وتأمل ألوان السقوف الفلكية المذهلة." },
      { title: "التحليق بالمناطيد الهوائية عند شروق الشمس", desc: "احجز رحلة بالمنطاد الهوائي فجراً وحلق فوق المعابد والجبال والوديان الخضراء ونهر النيل والتمثالين العملاقين لممنون." }
    ],
    foodEn: [
      { name: "Sayadeya (Fish Rice)", desc: "Fresh Nile perch baked in clay pots with spiced onions, garlic, and tomato paste, served over a bed of fragrant brownish fish rice." },
      { name: "Karkadeh (Hibiscus)", desc: "A refreshing crimson drink brewed from local Upper Egyptian dried hibiscus flowers, served chilled as a sweet refreshing tonic or hot like tea." }
    ],
    foodAr: [
      { name: "طاجن الصيادية الصعيدي", desc: "سمك قشر البياض الطازج من النيل يُطهى في طاجن فخاري مع البصل المكرمل والثوم والصلصة، ويقدم مع الأرز البني الشهير." },
      { name: "الكركديه الأسواني واللقيمات", desc: "مشروب قرمزي منعش ومقوي يُحضر من أزهار الكركديه الأسوانية المجففة الفاخرة، ويقدم بارداً أو ساخناً." }
    ],
    hotelsEn: [
      { name: "Sofitel Legend Old Cataract", tier: "Luxury", desc: "A world-famous, exceptionally historic palace hotel combining Victorian elegance and French art deco, overlooking the Nile granite islands. The setting for Agatha Christie's Death on the Nile." },
      { name: "Hilton Luxor Resort & Spa", tier: "Luxury", desc: "A magnificent luxury resort nestled directly on the Nile, featuring stunning infinity pools, private cabanas, and a world-class wellness spa." }
    ],
    hotelsAr: [
      { name: "سوفيتيل ليجند أولد كاتاراكت، أسوان", tier: "Luxury", desc: "فندق قصر تاريخي أسطوري يجمع بين الأناقة الفيكتورية والديكور الفرنسي، يطل على الجزر الجرانيتية الفاخرة بالنيل. شهد كتابة رواية أجاثا كريستي الشهيرة." },
      { name: "منتجع وهيلتون الأقصر وسبا", tier: "Luxury", desc: "منتجع فاخر رائع يقع مباشرة على ضفاف النيل، ويتميز بمسابح إنفينيتي ساحرة، وأكواخ خاصة وسبا صحي ذو مستوى عالمي." }
    ],
    transportEn: "Luxor is located 650km south of Cairo. The fastest option is to take a direct 1-hour flight from Cairo Airport to Luxor International. Alternatively, the luxury Sleeper Train departs from Giza Station nightly, taking about 9 hours of scenic, comfortable travel. Within Luxor, white-and-blue taxis are abundant, and traditional horse carriages ('Hantour') are popular for exploring the Nile Corniche.",
    transportAr: "تقع الأقصر على بعد 650 كم جنوب القاهرة. الخيار الأسرع هو رحلة طيران مباشرة لمدة ساعة من مطار القاهرة للأقصر. أو ركوب قطار النوم الفاخر ليلاً من محطة الجيزة (حوالي 9 ساعات).",
    tipsEn: [
      "Buy the 'Luxor Pass' if you plan to visit multiple sites over 2 days; it offers unlimited entry to the Valley of the Kings, Karnak, and Luxor temples.",
      "Explore the West Bank monuments in the morning starting at 06:00 AM; the tombs can get extremely warm and humid as midday approaches.",
      "Hire a traditional wooden felucca at sunset to enjoy the quiet breeze of the Nile away from traffic."
    ],
    tipsAr: [
      "اشترِ تذكرة 'Luxor Pass' إذا كنت تخطط لزيارة مواقع متعددة على مدار يومين، حيث توفر دخولاً غير محدود لجميع المقابر والمعابد.",
      "ابدأ زيارة معالم الضفة الغربية مبكراً في الساعة 06:00 صباحاً لتجنب درجات الحرارة المرتفعة والرطوبة العالية داخل المقابر.",
      "استأجر فلوكة خشبية تقليدية عند الغروب للاستمتاع بنسيم النيل الهادئ بعيداً عن صخب المدينة."
    ],
    bestTimeEn: "October to March is absolutely perfect, with warm, beautiful blue skies during the day and crisp fresh nights. Summer should be avoided as temperatures routinely exceed 45°C in the desert valleys.",
    bestTimeAr: "أكتوبر إلى مارس هو الوقت المثالي، مع سماء زرقاء دافئة نهاراً وليالي منعشة باردة. يجب تجنب الصيف حيث تتجاوز الحرارة 45 درجة مئوية.",
    nearByEn: [
      { name: "The Sacred Temple of Dendera", desc: "Hathor's spectacular temple containing the famous zodiac astronomical ceiling, located 1 hour north.", slug: "luxor-travel-guide" },
      { name: "The Ancient City of Aswan", desc: "Located 3 hours south, home to Philae Temple and the beautiful Nubian villages.", slug: "aswan-travel-guide" }
    ],
    nearByAr: [
      { name: "معبد دندرة المقدس بقنا", desc: "معبد الإلهة حتحور الرائع الذي يضم السقف الفلكي الشهير للأبراج الفلكية، ويقع على بعد ساعة شمالاً.", slug: "luxor-travel-guide" },
      { name: "مدينة أسوان القديمة", desc: "تقع على بعد 3 ساعات جنوباً، وهي موطن لمعبد فيلة والقرى النوبية الجميلة.", slug: "aswan-travel-guide" }
    ],
    faqEn: [
      { q: "Is Tutankhamun's mummy in Luxor?", a: "Yes! While his golden treasures are housed in the Cairo museum, the actual mummified body of King Tutankhamun is still preserved inside his original tomb (KV62) in the Valley of the Kings." },
      { q: "How do you cross from the East Bank to the West Bank?", a: "You can easily take the public ferry boat, which costs only a few Egyptian pounds and takes 5 minutes, or cross via the modern road bridge in a taxi." }
    ],
    faqAr: [
      { q: "هل مومياء توت عنخ آمون موجودة في الأقصر؟", a: "نعم! في حين أن كنوزه الذهبية معروضة في متحف القاهرة، فإن الجسد المحنط للملك توت عنخ آمون لا يزال محفوظاً داخل مقبرته الأصلية (KV62) في وادي الملوك." },
      { q: "كيف يمكنني العبور بين الضفتين الشرقية والغربية؟", a: "يمكنك بسهولة ركوب المعدية النهرية العامة التي تستغرق 5 دقائق فقط، أو العبور عبر كوبري الأقصر العلوي بالتاكسي." }
    ],
    ctaEn: {
      text: "Embark on an unforgettable historical journey. Book our private signature Luxor day tour, including private luxury transport, certified Egyptologist guide, and gourmet Nile-view lunch.",
      linkText: "Explore our Nile Cruise packages",
      url: "/#tours"
    },
    ctaAr: {
      text: "ابدأ رحلة تاريخية لا تُنسى. احجز جولتنا الخاصة المميزة للأقصر، تشمل سيارة فاخرة خاصة، ومرشداً معتمداً، ووجبة غداء فاخرة مطلة على النيل.",
      linkText: "استكشف باقات كروز النيل الخاصة بنا",
      url: "/#tours"
    },
    relatedTourIds: [3, 4, 8],
    hiddenGemsEn: [
      "The Carter House Museum - The perfectly preserved mud-brick cottage where Howard Carter lived during his search for Tutankhamun's tomb.",
      "The Ramesseum - Ramesses the Great's monumental mortuary temple, home to the colossal fallen statue that inspired Shelley's Ozymandias.",
      "The Valley of the Artisans (Deir El Medina) - The ancient village of the workers who decorated the royal tombs, showing beautifully painted daily-life scenes."
    ],
    hiddenGemsAr: [
      "متحف منزل كارتر - منزل رائع مبني من الطوب اللبن عاش فيه هوارد كارتر أثناء بحثه الملحمي عن مقبرة توت عنخ آمون.",
      "معبد الرمسيوم - معبد رمسيس الثاني الجنائزي الضخم الذي يضم بقايا تمثاله العملاق المنهار والذي ألهم الشاعر شيلي لكتابة قصيدته أوزيماندياس.",
      "وادي الحرفيين (دير المدينة) - القرية القديمة للعمال والنحاتين الذين زينوا المقابر الملكية، وتضم مقابرهم رسوماً بديعة للحياة اليومية."
    ],
    safetyEn: [
      "Respect local conservative dress codes, especially when visiting ancient temples and religious sanctuaries.",
      "Drink plenty of electrolyte-rich fluids; Upper Egypt dry desert heat can cause silent dehydration very quickly.",
      "Bargain firmly and politely with horse carriage drivers; agree on the total price including tip beforehand."
    ],
    safetyAr: [
      "احرص على ارتداء ملابس محتشمة ومناسبة احتراماً للعادات والتقاليد المحلية عند زيارة المعابد الأثرية والمزارات الدينية.",
      "اشرب كميات كافية من السوائل والعصائر الطبيعية؛ حيث يمكن لحرارة الصعيد الجافة أن تسبب جفافاً سريعاً وصامتاً.",
      "تفاوض بوضوح وبأدب مع سائقي الحناطير، وحدد السعر الإجمالي شاملاً كل شيء قبل الركوب."
    ],
    itineraryEn: [
      { day: "Day 1", title: "Valley of Kings & Hatshepsut", desc: "Cross to the West Bank at dawn, explore royal rock-cut tombs, visit Hatshepsut Terraced Temple, and behold the Colossi of Memnon." },
      { day: "Day 2", title: "Karnak & Luxor East Bank", desc: "Spend the morning walking the monumental columns of Karnak, then visit Luxor Temple at sunset when it glows with warm gold lights." }
    ],
    itineraryAr: [
      { day: "اليوم الأول", title: "وادي الملوك ومعبد حتشبسوت", desc: "اعبر إلى الضفة الغربية فجراً، استكشف المقابر الملكية، وقم بزيارة معبد حتشبسوت المتدرج، وتأمل التمثالين العملاقين لممنون." },
      { day: "اليوم الثاني", title: "الكرنك والأقصر (الشرق)", desc: "اقضِ الصباح في التجول بين أعمدة الكرنك المهيبة، ثم قم بزيارة معبد الأقصر عند الغروب عندما يضاء بالأنوار الذهبية الدافئة." }
    ]
  },
  {
    slug: "aswan-travel-guide",
    destination: "Aswan",
    nameEn: "Aswan",
    nameAr: "أسوان",
    titleEn: "Aswan Travel Guide: The Tranquil Jewel of the Nile & Nubian Culture",
    titleAr: "دليل أسوان: جوهرة النيل الهادئة وبوابة بلاد النوبة الساحرة",
    subtitleEn: "Experience the majestic granite islands, romantic temples of Isis, and the peaceful southern breeze",
    subtitleAr: "استمتع بالجزر الجرانيتية المهيبة ومعابد إيزيس الرومانسية ونسيم الجنوب الهادئ الساحر",
    metaDescriptionEn: "The ultimate luxury guide to Aswan, Egypt. Discover Philae Island, the Unfinished Obelisk, Nubian Villages, felucca sailing, Elephantine island, and top desert hotels.",
    metaDescriptionAr: "دليل السفر الفاخر والأشمل لأسوان، مصر. اكتشف جزيرة فيلة، المسلة الناقصة، القرى النوبية الملونة، جولات الفلوكة، وجزر الجرانيت.",
    keywordsEn: "Aswan travel guide, Philae Temple, Nubian Village Aswan, High Dam Egypt, Unfinished Obelisk, Elephantine Island, felucca Aswan",
    keywordsAr: "دليل أسوان, معبد فيلة, القرية النوبية أسوان, السد العالي مصر, المسلة الناقصة, جزيرة الفنتين, فلوكة أسوان",
    heroImage: "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600577916048-804c9191e36c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "In Aswan, the majestic Nile River is at its most beautiful, flowing gracefully through dramatic black granite boulders and lush emerald islands topped by swaying date palms. This is the historic borderland between Egypt and the ancient, vibrant kingdom of Nubia—a peaceful, southern haven where life slows down to the rhythmic, soothing pace of traditional wooden felucca sailboats drifting across the water. Aswan is a sanctuary of profound, romantic beauty, home to sacred island temples dedicated to the goddess of magic, massive dams that reshaped the geography of Upper Egypt, and the Unfinished Obelisk showing how pharaohs chiseled stone. To experience the deep south fully, you can <a href='/tours?destination=Aswan' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Explore Luxor & Aswan Trip</a> through our hotel travel network.",
    introAr: "في أسوان، يظهر نهر النيل بأجمل حلة له، حيث يتدفق بنعومة بين الصخور الجرانيتية السوداء الضخمة والجزر الخضراء المورقة. يمكنك بسهولة <a href='/tours?destination=Aswan' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز رحلة الأقصر وأسوان</a> للاستمتاع برحلة نيلية دافئة لا تُنسى.",
    historyEn: "Known in antiquity as 'Swenet', Aswan was the southern gateway of ancient Egypt, serving as a vital garrison town, trade market on the caravan routes, and the primary quarry site for the ancient empire. It was from Aswan's rich quarries that pharaohs extracted the magnificent red granite used to build the colossal statues, obelisks, and temple chambers in Giza, Luxor, and Cairo. In the 20th century, Aswan became the focus of global engineering with the construction of the High Dam, which successfully tamed the Nile's annual floods, creating Lake Nasser, one of the largest man-made reservoirs in the world.",
    historyAr: "عُرفت أسوان في العصور القديمة باسم \"سويت\"، وكانت البوابة الجنوبية لمصر ومحجراً رئيسياً لاستخراج الجرانيت الأحمر الفاخر المستخدم في تشييد المسلات والمعابد الفرعونية في جميع أنحاء الإمبراطورية.",
    cultureEn: "Aswan is the proud cultural capital of Nubia. Following the flooding of their ancestral lands by the High Dam, the Nubian communities established vibrant, colorful mud-brick villages along the Nile banks. Characterized by beautiful domed roofs, hand-painted geometric walls, and friendly domestic crocodiles kept as traditional pets, the Nubians preserve their own unique language, beautiful music, and extraordinary hospitality. Visiting a Nubian home to enjoy hot mint tea and traditional music is a highlight of any trip to Aswan.",
    cultureAr: "أسوان هي العاصمة الثقافية لبلاد النوبة الساحرة. وتتميز القرى النوبية ببيوتها الملونة المبنية من الطين والأسقف القبوية الدائرية، والرسومات الهندسية البديعة على الجدران، والضيافة الدافئة الفائقة.",
    activitiesEn: [
      { title: "Tour the Romantic Philae Island Temple of Isis", desc: "Take a traditional wooden motorboat to Philae Island and explore the beautiful Temple of Isis, salvaged stone-by-stone by UNESCO in a monumental ten-year effort." },
      { title: "Sail the Nile in a Traditional Felucca", desc: "Relax as a traditional wooden sailboat drifts silently between the granite islands of Elephantine and Lord Kitchener's Botanical Garden at sunset." },
      { title: "Explore a Colorful Nubian Village", desc: "Take a scenic boat ride south to Gharb Soheil Nubian Village. Shop for colorful spices, handmade Nubian baskets, and learn about the local culture and language." }
    ],
    activitiesAr: [
      { title: "زيارة معبد فيلة الرومانسي بجزيرة أجيلكيا", desc: "اركب قارباً خشبياً لزيارة معبد إيزيس الرائع الذي تم نقله بالكامل قطعة بقطعة تحت رعاية اليونسكو لإنقاذه من الغرق." },
      { title: "جولة الفلوكة التقليدية عند الغروب", desc: "استرخِ بينما تنساب فلوكة خشبية شراعية تقليدية بصمت بين جزر الجرانيت وجزيرة النباتات الاستوائية عند الغروب." },
      { title: "التجول في القرية النوبية الملونة بغرب سهيل", desc: "قم بجولة بالقارب لزيارة قرية غرب سهيل النوبية الشهيرة. تسوق من التوابل الملونة والمصنوعات اليدوية واستمتع بالضيافة النوبية." }
    ],
    foodEn: [
      { name: "Nubian Spiced Chicken & Tajines", desc: "Succulent chicken drumsticks slow-roasted in traditional clay pots with local spices, served with fresh tahini and Nubian sun-dried bread." },
      { name: "Karkadeh tea & Mint", desc: "A strong, deep crimson herbal infusion brewed from high-quality Upper Egyptian hibiscus, served hot or iced with fresh desert mint." }
    ],
    foodAr: [
      { name: "الدجاج والأرز النوبي في الطاجن", desc: "قطع الدجاج المتبلة والمطهوة ببطء في الطواجن الفخارية مع البصل والطماطم والتوابل النوبية الخاصة." },
      { name: "مشروب الكركديه والنعناع الأسواني", desc: "مشروب كركديه أسواني مركز وقوي يُقدم ساخناً أو بارداً مع النعناع والليمون." }
    ],
    hotelsEn: [
      { name: "Sofitel Legend Old Cataract", tier: "Luxury", desc: "Agatha Christie's favorite luxury palace hotel in Egypt, featuring spectacular terraces overlooking the Nile granite boulders and Elephantine island." },
      { name: "Mövenpick Resort Aswan, Elephantine Island", tier: "Luxury", desc: "A modern, premium resort located directly on Elephantine Island, featuring panoramic views, beautiful pools, and luxury spa services." }
    ],
    hotelsAr: [
      { name: "فندق قصر سوفيتيل ليجند أولد كاتاراكت", tier: "Luxury", desc: "أشهر قصر تاريخي فاخر في صعيد مصر، شهد كتابة أجاثا كريستي لروايتها الشهيرة ويتميز بإطلالة غير مسبوقة على الجزر الجرانيتية." },
      { name: "منتجع موفنبيك أسوان بجزيرة الفنتين", tier: "Luxury", desc: "منتجع فاخر عصري يقع مباشرة في قلب جزيرة الفنتين ويضم مسابح ممتازة وغرفاً ذات إطلالات كاملة ومريحة." }
    ],
    transportEn: "Aswan is located 220km south of Luxor. You can easily arrive via a 1-hour domestic flight from Cairo, or by taking the scenic 3-hour local train or private car ride south from Luxor. Once in Aswan, public ferry boats and motorboats are the main way to travel between the Nile islands.",
    transportAr: "تقع أسوان على بعد 220 كم جنوب الأقصر. يمكنك الوصول طيراناً من القاهرة أو بالقطار أو بالسيارة من الأقصر (حوالي 3 ساعات). قوارب الموتور هي وسيلة التنقل الأساسية بين جزر النيل.",
    tipsEn: [
      "Spend a sunset at the terrace of the Old Cataract Hotel, enjoying a royal high tea overlooking the classic feluccas.",
      "Bring cash in Egyptian Pounds; many Nubian village market vendors and local motorboat captains do not accept cards.",
      "Explore the Unfinished Obelisk to see the monumental red granite cracks that halted its ancient erection."
    ],
    tipsAr: [
      "اقضِ وقت الغروب في تراس فندق أولد كاتاراكت التاريخي واستمتع بالشاي الإنجليزي الفاخر مع إطلالة النيل الساحرة.",
      "احرص على حمل الكاش بالجنيه المصري؛ حيث لا تقبل معظم محلات القرية النوبية وقوارب الموتور الدفع بالبطاقات."
    ],
    bestTimeEn: "October to April is the absolute prime season. Winter days are beautifully warm and sunny (25°C), while nights are cool and fresh. Avoid summer as temperatures soar past 45°C.",
    bestTimeAr: "أكتوبر إلى أبريل هو الموسم الأفضل تماماً، وتتميز الأيام بالدفء المشمس بينما الليالي لطيفة ومنعشة.",
    nearByEn: [
      { name: "Abu Simbel Temples", desc: "Ramesses II's towering mountaintop masterpiece, 3 hours south.", slug: "abu-simbel-travel-guide" },
      { name: "Luxor City", desc: "The ancient capital of Thebes, 3 hours north by train.", slug: "luxor-travel-guide" }
    ],
    nearByAr: [
      { name: "معبد أبو سمبل الكبير", desc: "معجزة الملك رمسيس الثاني المنحوتة في الجبل على بحيرة ناصر، ويقع على بعد 3 ساعات جنوباً.", slug: "abu-simbel-travel-guide" },
      { name: "مدينة الأقصر الأثرية", desc: "العاصمة الفرعونية القديمة لـ طيبة، وتقع على بعد 3 ساعات شمالاً بالقطار.", slug: "luxor-travel-guide" }
    ],
    faqEn: [
      { q: "Is the water in Aswan clean to swim?", a: "Yes! In Aswan, the Nile is clean, fast-flowing, and beautiful. Many Nubian beaches (like Barbar beach) offer beautiful, safe spots to swim in the cool river waters." },
      { q: "How long is the trip to Abu Simbel?", a: "Abu Simbel is located 280km south of Aswan near the Sudan border. It takes about 3 hours each way by private tourist coach or hotel transfer." }
    ],
    faqAr: [
      { q: "هل مياه النيل في أسوان صالحة للسباحة؟", a: "نعم! النيل في أسوان نظيف وسريع الجريان ومبهر. وتوفر العديد من الشواطئ النوبية (مثل شاطئ بربر) مواقع آمنة ورائعة للسباحة." }
    ],
    ctaEn: {
      text: "Experience the tranquil magic of Aswan. Book our custom private day tours, including professional Nubian guides, private motorboats, and traditional Nubian dining.",
      linkText: "See all Luxor & Aswan tours",
      url: "/#tours"
    },
    ctaAr: {
      text: "اختبر سحر أسوان الهادئ والجميل. احجز جولاتنا الخاصة المميزة النوبية، تشمل قوارب الموتور، ومرشداً نوبياً خبيراً، وعشاءً نوبياً تقليدياً.",
      linkText: "شاهد جميع جولات الأقصر وأسوان",
      url: "/#tours"
    },
    relatedTourIds: [3, 4, 8],
    hiddenGemsEn: [
      "The Temple of Kalabsha - A magnificent Roman-era temple dedicated to the Nubian god Mandulis, located on a quiet island near Aswan High Dam.",
      "The Tombs of the Nobles - Rock-cut tombs of ancient governors of Elephantine Island, offering spectacular desert views after a scenic climb.",
      "Sehel Island Famine Stela - An ancient rock carving near the first cataract documenting a seven-year famine solved by dedicating lands to Khnum."
    ],
    hiddenGemsAr: [
      "معبد كلابشة الأثري - معبد رائع يعود للعصر الروماني مخصص للإله النوبي ماندوليس ويقع على جزيرة هادئة قرب السد العالي.",
      "مقابر النبلاء - مقابر صخرية محفورة لحكام جزيرة الفنتين القدامى وتوفر إطلالة صحراوية مبهرة بعد تسلق هادئ.",
      "لوحة المجاعة بجزيرة سهيل - صخرة منقوشة قديمة توثق مجاعة استمرت 7 سنوات تم حلها بتخصيص أراضٍ للإله خنوم."
    ],
    safetyEn: [
      "Avoid swimming in the Nile near the High Dam or unrecognized deep channels due to strong undertows.",
      "Negotiate and agree on motorboat prices clearly with the captain before stepping on board.",
      "Use high-protection sunscreen and stay in the shade during midday peaks."
    ],
    safetyAr: [
      "تجنب السباحة في النيل بالقرب من السد العالي أو الممرات العميقة غير المحددة بسبب التيارات المائية القوية.",
      "اتفق بوضوح على سعر قارب الموتور مع القبطان قبل الصعود على متن القارب لتفادي المفاجآت.",
      "استخدم واقي الشمس لحماية بشرتك، وتجنب التعرض المباشر لأشعة الشمس الحارقة ظهراً."
    ],
    itineraryEn: [
      { day: "Day 1", title: "Philae Temple & High Dam", desc: "Take a scenic boat ride to Philae Temple in the morning, visit the High Dam and Unfinished Obelisk, and sail the Nile in a felucca at sunset." },
      { day: "Day 2", title: "Nubian Culture & Island Hikes", desc: "Explore Elephantine Island, visit the Nubian Museum, and enjoy a traditional dinner in a colorful Nubian Village on the West Bank." }
    ],
    itineraryAr: [
      { day: "اليوم الأول", title: "معبد فيلة والسد العالي", desc: "قم بجولة بالقارب لزيارة معبد فيلة صباحاً، ثم زر السد العالي والمسلة الناقصة، واستمتع بجولة فلوكة في النيل عند الغروب." },
      { day: "اليوم الثاني", title: "الثقافة النوبية وجولات الجزر", desc: "استكشف جزيرة الفنتين، وقم بزيارة المتحف النوبي، واستمتع بعشاء نوبي تقليدي في قرية غرب سهيل الملونة." }
    ]
  },
  {
    slug: "alexandria-travel-guide",
    destination: "Alexandria",
    nameEn: "Alexandria",
    nameAr: "الإسكندرية",
    titleEn: "Alexandria Travel Guide: Romance and History on the Mediterranean Coast",
    titleAr: "دليل الإسكندرية: الرومانسية والتاريخ العريق على ساحل البحر المتوسط",
    subtitleEn: "Walk the grand seaside Corniche of Alexander the Great's romantic, cosmopolitan capital",
    subtitleAr: "سر على الكورنيش البحري العريق لعاصمة الإسكندر الأكبر الرومانسية الساحرة",
    metaDescriptionEn: "The ultimate luxury guide to Alexandria, Egypt. Discover the Citadel of Qaitbay, the Bibliotheca Alexandrina, Roman catacombs, Pompey's pillar, and seafood dining.",
    metaDescriptionAr: "دليل السفر الشامل للإسكندرية، مصر. اكتشف قلعة قايتباي، مكتبة الإسكندرية الحديثة، مقابر كوم الشقافة الرومانية، وعشاء المأكولات البحرية.",
    keywordsEn: "Alexandria travel guide, Qaitbay Citadel, Bibliotheca Alexandrina, Roman Catacombs Egypt, Pompey's pillar, Corniche Alexandria, Alexandria day trip",
    keywordsAr: "دليل الإسكندرية, قلعة قايتباي, مكتبة الإسكندرية, مقابر كوم الشقافة, عمود السواري, كورنيش الإسكندرية, رحلة الإسكندرية",
    heroImage: "https://images.unsplash.com/photo-1629813589332-9cb77353f868?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Founded by Alexander the Great in 331 BCE, Alexandria was once the intellectual capital of the ancient world. It was a legendary melting pot of Egyptian, Greek, Jewish, and Roman cultures, home to the Great Library of antiquity and the colossal Pharos Lighthouse, one of the Seven Wonders of the Ancient World. While the ancient lighthouse and library have long vanished beneath the waves and the sands, Alexandria's romantic coastal charm remains. Walking along the seaside Corniche, enjoying fresh Mediterranean breeze-swept air, and visiting ancient fortresses built on the lighthouse's foundations offer a distinct, cooling contrast to the desert heat of Cairo. To explore the pearl of the Mediterranean, you can easily <a href='/tours?destination=Alexandria' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Discover Alexandria Tour</a> directly through our booking concierge.",
    introAr: "تأسست الإسكندرية على يد الإسكندر الأكبر في عام 331 قبل الميلاد، وكانت عاصمة الفكر والثقافة في العالم القديم. يمكنك بسهولة <a href='/tours?destination=Alexandria' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز جولة الإسكندرية</a> الفاخرة للاستمتاع برحلة نسيم البحر المذهلة.",
    historyEn: "Alexandria rose to power as the capital of the Ptolemaic Kingdom under Ptolemy I Soter, growing into the center of Hellenistic civilization. For centuries, it housed the spectacular Library of Alexandria, attracting the world's greatest philosophers, mathematicians, and astronomers. The city witnessed the epic romance of Cleopatra and Mark Antony, the Roman conquest, and the erection of massive fortresses by Sultan Qaitbay in the 15th century using the ancient granite stones of the fallen Pharos Lighthouse.",
    historyAr: "صعدت الإسكندرية كعاصمة للمملكة البطلمية تحت حكم بطليموس الأول، ونمت لتصبح مركز الحضارة الهيلينية ومهد العلوم الفلكية والرياضية بفضل مكتبتها الأسطورية التي ضمت ملايين المخطوطات.",
    cultureEn: "Alexandria's modern culture is a romantic, cosmopolitan blend of Mediterranean lifestyle and Egyptian charm. The city is famous for its grand, vintage neoclassical cafes, historic tramways linking districts, and a deeply-rooted seafood culinary tradition. Cairenes routinely flee the summer heat to enjoy the romantic seaside breeze of Alexandria, sipping coffee at Trianon Cafe or eating gelato along the harbor.",
    cultureAr: "ثقافة الإسكندرية الحديثة هي مزيج رائع يجمع بين روح البحر الأبيض المتوسط المتوسطية والضيافة المصرية العريقة. وتشتهر المدينة بترامها الأزرق والمقاهي الكلاسيكية القديمة.",
    activitiesEn: [
      { title: "Explore the Citadel of Qaitbay", desc: "Walk the stone battlements of this 15th-century maritime fortress built right on the foundations of the ancient Pharos Lighthouse, enjoying majestic views of the sea." },
      { title: "Visit the Stunning Bibliotheca Alexandrina", desc: "Tour the spectacular, sun-disk-shaped modern library housing millions of books, multiple museums, and a world-class planetarium." },
      { title: "Descend into the Catacombs of Kom El Shoqafa", desc: "Explore the largest Roman burial site in Egypt, chiseled three levels deep inside solid rock, showing a unique fusion of Roman and Pharaonic art." }
    ],
    activitiesAr: [
      { title: "استكشاف قلعة قايتباي البحرية المهيبة", desc: "تجول في الممرات الحجرية والأبراج الدفاعية لهذه القلعة التي تعود للقرن الخامس عشر والمبنية على أنقاض منارة الإسكندرية الأثرية." },
      { title: "زيارة مكتبة الإسكندرية الحديثة الشاهقة", desc: "قم بجولة داخل هذا الصرح المعماري المدهش المصمم على شكل قرص الشمس، ويضم ملايين الكتب ومتاحف أثرية وقبة سماوية." },
      { title: "الهبوط لمقابر كوم الشقافة الرومانية", desc: "استكشف أضخم موقع دفن روماني في مصر محفور في الصخر لثلاثة مستويات تحت الأرض، ويظهر مزيجاً فنياً فريداً بين الفن الفرعوني والروماني." }
    ],
    foodEn: [
      { name: "Alexandrian Seafood Feast", desc: "Fresh Mediterranean sea bass and red mullet seasoned with garlic, cumin, lemon, and chili, grilled over wood coals, served alongside sizzling Alexandrian shrimp." },
      { name: "Alexandrian Kebda (Liver)", desc: "Succulent chopped beef liver flash-fried with hot green chilies, garlic, and vinegar, served inside fresh, warm local bread rolls." }
    ],
    foodAr: [
      { name: "وليمة الأسماك الإسكندرانية", desc: "أسماك القاروص والبربوني الطازجة المتبلة بالثوم والليمون والكمون والمشوية على جمر الفحم، وتقدم مع الجمبري الإسكندراني الحار." },
      { name: "الكبدة الإسكندراني الشهيرة", desc: "شرائح الكبدة الرفيعة المقلية بسرعة مع الفلفل الحار، الثوم، الخل والليمون، وتقدم في الخبز الفينو الساخن." }
    ],
    hotelsEn: [
      { name: "Four Seasons Hotel Alexandria at San Stefano", tier: "Luxury", desc: "An exceptionally luxurious seaside resort featuring private beach access, lavish neoclassical suites, a spectacular infinity pool, and premium dining overlooking the sea." },
      { name: "Steigenberger Cecil Hotel", tier: "Mid-Range", desc: "A legendary, historic hotel located right in Saad Zaghloul Square, famous for hosting Winston Churchill and Somerset Maugham." }
    ],
    hotelsAr: [
      { name: "فندق فورسيزونز الإسكندرية بسان ستيفانو", tier: "Luxury", desc: "منتجع بحري فاخر للغاية يضم شاطئاً خاصاً، وأجنحة ملكية كلاسيكية ومسبحاً إنفينيتي خلاباً يطل على البحر مباشرة." },
      { name: "فندق شتيجنبرجر سيسيل التاريخي", tier: "Mid-Range", desc: "فندق تاريخي أسطوري يقع مباشرة في ميدان سعد زغلول، اشتهر باستضافة ونستون تشرشل والمشاهير على مر العصور." }
    ],
    transportEn: "Alexandria is located 220km north of Cairo. The most convenient way to arrive is to book a private hotel day transfer or take the high-speed Talgo train from Cairo Ramses Station, which takes about 2 hours. Within the city, the historic tramway and yellow-and-black cabs are widely available.",
    transportAr: "تقع الإسكندرية على بعد 220 كم شمال القاهرة. الطريقة الأكثر راحة للوصول هي حجز سيارة خاصة أو ركوب قطار تالجو السريع من محطة رمسيس (ساعتان فقط).",
    tipsEn: [
      "Eat fresh seafood at Fish Market or Greek Club overlooking the harbor for a premium culinary experience.",
      "Bring a light jacket for summer evenings; the Mediterranean sea breeze can get surprisingly cool.",
      "Explore Pompey's Pillar to see the giant red granite column and the surrounding subterranean galleries."
    ],
    tipsAr: [
      "تناول الأسماك الطازجة في النادي اليوناني المطل على المرسى للحصول على تجربة طعام فريدة وخلابة.",
      "أحضر سترة خفيفة لليالي الصيف؛ حيث يمكن لنسيم البحر الأبيض المتوسط أن يصبح بارداً بشكل مدهش."
    ],
    bestTimeEn: "September to November and March to May are ideal for exploring. Summer is lively but very crowded as half of Egypt arrives to enjoy the beach.",
    bestTimeAr: "الفترة من سبتمبر إلى نوفمبر ومارس إلى مايو هي الأفضل للاستكشاف الهادئ. الصيف حيوي ومزدحم للغاية بالزوار المحليين.",
    nearByEn: [
      { name: "The Roman Amphitheater of Kom El Dikka", desc: "The only Roman amphitheater discovered in Egypt, located right in the center.", slug: "alexandria-travel-guide" },
      { name: "Montaza Palace Gardens", desc: "A magnificent royal palace park featuring beautiful Italianate gardens and beaches.", slug: "alexandria-travel-guide" }
    ],
    nearByAr: [
      { name: "المسرح الروماني بكوم الدكة", desc: "المسرح الروماني الوحيد المكتشف في مصر ويقع مباشرة في وسط المدينة.", slug: "alexandria-travel-guide" },
      { name: "حدائق قصر المنتزه الملكية", desc: "حدائق ملكية شاسعة تضم قصر المنتزه الرائع وشواطئ خلابة.", slug: "alexandria-travel-guide" }
    ],
    faqEn: [
      { q: "Is the ancient Library of Alexandria still standing?", a: "No, the ancient library was destroyed by fires in antiquity. However, the magnificent modern Bibliotheca Alexandrina stands as a stunning architectural tribute." },
      { q: "Can I swim in Alexandria's beaches?", a: "Yes, there are multiple private hotel beaches and public sand strips along the coast, though they get highly crowded during summer." }
    ],
    faqAr: [
      { q: "هل مكتبة الإسكندرية القديمة لا تزال قائمة؟", a: "لا، دُمرت المكتبة القديمة بسبب الحرائق في العصور الغابرة. ولكن المكتبة الحديثة شُيدت كإحياء علمي وثقافي مذهل." }
    ],
    ctaEn: {
      text: "Discover the pearl of the Mediterranean. Book our private day trip from Cairo or Giza, including a professional guide, luxury private car, and a gourmet seafood lunch.",
      linkText: "Discover Alexandria Tour",
      url: "/#tours"
    },
    ctaAr: {
      text: "اكتشف عروس البحر المتوسط. احجز رحلتك الخاصة ليوم واحد من القاهرة أو الجيزة، تشمل مرشداً خبيراً، سيارة خاصة فاخرة، وغداء مأكولات بحرية فاخراً.",
      linkText: "شاهد جميع جولات الإسكندرية",
      url: "/#tours"
    },
    relatedTourIds: [1, 2, 7],
    hiddenGemsEn: [
      "The Royal Jewelry Museum - Housed in a spectacular royal palace in Zizinia, containing the dazzling, diamond-studded crown jewels of the Muhammad Ali dynasty.",
      "The Underwater ruins of Cleopatra's Palace - Embark on a scuba diving tour in the Eastern Harbor to see sphinxes and columns lying on the seabed.",
      "El-Mursi Abul Abbas Mosque - A spectacular Sufi mosque featuring highly intricate plasterwork carvings and towering domes."
    ],
    hiddenGemsAr: [
      "متحف المجوهرات الملكية - يقع في قصر زيزينيا الفاخر ويضم مجوهرات الأسرة العلوية المرصعة بالألماس والذهب.",
      "الآثار الغارقة بقصر كليوباترا - قم برحلة غوص في الميناء الشرقي لمشاهدة التماثيل والأعمدة الرومانية المستلقية في قاع البحر.",
      "مسجد المرسي أبو العباس - مسجد صوفي مهيب يتميز بنقوش الجبس المتشابكة المدهشة والمآذن والقباب الشاهقة."
    ],
    safetyEn: [
      "Stick to authorized yellow-and-black cabs or use Uber to avoid transport rate disputes.",
      "Cross the busy Corniche road only at designated pedestrian crossings or tunnels; traffic is fast-moving.",
      "Dress modestly when wandering in the historic downtown markets and alleyways."
    ],
    safetyAr: [
      "التزم بالتاكسي الأصفر والأسود المرخص أو استخدم تطبيق أوبر لتفادي نزاعات الأسعار.",
      "اعبر الكورنيش فقط من خلال ممرات المشاة أو الأنفاق المخصصة؛ حيث تسير السيارات بسرعة كبيرة.",
      "ارتدِ ملابس محتشمة عند التجول في الأسواق الشعبية والشوارع التاريخية القديمة."
    ],
    itineraryEn: [
      { day: "Morning", title: "Citadel & Catacombs", desc: "Visit the stunning Citadel of Qaitbay early in the morning, then drive to the Catacombs of Kom El Shoqafa." },
      { day: "Afternoon", title: "Bibliotheca & Seafood", desc: "Explore the massive halls of the Bibliotheca Alexandrina, then enjoy a premium fresh seafood lunch overlooking the harbor." },
      { day: "Evening", title: "Montaza Walk", desc: "Take a relaxing walk through the royal gardens of Montaza Palace, and watch the sunset over the sea." }
    ],
    itineraryAr: [
      { day: "صباحاً", title: "القلعة والمقابر الرومانية", desc: "ابدأ جولتك بزيارة قلعة قايتباي البحرية صباحاً، ثم توجه بالسيارة لمقابر كوم الشقافة الرائعة." },
      { day: "ظهراً", title: "المكتبة وعشاء الأسماك", desc: "استكشف ممرات وقاعات مكتبة الإسكندرية الحديثة، ثم تناول غداء المأكولات البحرية الفاخر المطل على المرسى." },
      { day: "مساءً", title: "حدائق المنتزه والغروب", desc: "قم بجولة مشي مريحة بين أشجار حدائق قصر المنتزه الملكية، وشاهد الغروب الساحر على الأمواج." }
    ]
  },
  {
    slug: "hurghada-travel-guide",
    destination: "Hurghada",
    nameEn: "Hurghada",
    nameAr: "الغردقة",
    titleEn: "Hurghada & Red Sea Travel Guide: Turquoise Waters and Desert Safaris",
    titleAr: "دليل الغردقة والبحر الأحمر: المياه الفيروزية وسفاري الصحراء الساحرة",
    subtitleEn: "Submerge yourself in the crystal-clear coral gardens and explore the massive desert dunes",
    subtitleAr: "اغمس نفسك في حدائق المرجان المتلألئة واستكشف الكثبان الرملية الذهبية الشاسعة",
    metaDescriptionEn: "The ultimate premium travel guide to Hurghada, Egypt. Discover Giftun Island, Orange Bay, scuba diving, quad biking, and top luxury resorts.",
    metaDescriptionAr: "دليل السفر الشامل للغردقة، مصر. اكتشف جزيرة جفتون، أورنج باي، الغوص بين الشعاب المرجانية، رحلات السفاري بالبيتش باجي، وأفخم المنتجعات.",
    keywordsEn: "Hurghada travel guide, Giftun Island, Red Sea diving, Orange Bay Hurghada, Hurghada marina, desert safari Hurghada, Red Sea resorts",
    keywordsAr: "دليل الغردقة, جزيرة جفتون, غوص البحر الأحمر, أورنج باي الغردقة, مارينا الغردقة, سفاري الغردقة, منتجعات البحر الأحمر",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Where the dramatic desert mountains meet the cool, turquoise waters of the Red Sea lies Hurghada. Once a sleepy fishing village, it has transformed into a world-class resort paradise, famous for having some of the richest and most accessible marine biodiversity on the globe. The Red Sea is a biological marvel, characterized by warm, highly saline water that allows thousands of species of colorful fish and vibrant coral reefs to thrive. Just a short speedboat ride from Hurghada Marina, the islands of Giftun, Orange Bay, and Paradise Island offer pristine white sand beaches and shallow, turquoise lagoons that feel like a tropical dream, perfect for snorkeling with wild dolphins, sea turtles, and glowing schools of fish. To add some action to your stay, you can <a href='/tours?destination=Hurghada' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Book Hurghada Adventure</a> directly with our front desk team.",
    introAr: "تقع الغردقة حيث تلتقي الجبال الصحراوية الشاهقة مع مياه البحر الأحمر الفيروزية اللطيفة. للحصول على مغامرة بحرية متكاملة، نوصيك بـ <a href='/tours?destination=Hurghada' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز مغامرة الغردقة</a> والاستمتاع بجمال المرجان والرمال.",
    historyEn: "Founded in the early 20th century as a tiny fishing village, Hurghada grew rapidly following the discovery of oil in the region and the subsequent rise of international tourism in the 1980s. Today, it stretch over 40km along the coastline, representing a massive hub of luxury hotels, maritime yacht marinas, and world-renowned marine biology centers researching the Red Sea's highly resilient coral reefs.",
    historyAr: "تأسست الغردقة في أوائل القرن العشرين كقرية صغيرة لصيد السمك، ونمت بسرعة مذهلة في الثمانينيات لتصبح أحد أشهر مقاصد السياحة الشاطئية والرياضات المائية والمنتجعات الفاخرة على مستوى العالم.",
    cultureEn: "Hurghada's culture is a vibrant mix of coastal maritime life, international tourism, and the deep traditions of the Eastern Desert Bedouins (the Ma'aza and Ababda tribes). The local marina boulevard showcases a high-end, cosmopolitan atmosphere lined with luxury yachts and dining, while the desert interior preserves ancient nomadic tracking, cooking, and stargazing traditions.",
    cultureAr: "تعد ثقافة الغردقة مزيجاً فريداً يجمع بين حياة البحر العصرية والسياحة الدولية الفاخرة، وبين التقاليد البدوية الأصيلة لبدو الصحراء الشرقية.",
    activitiesEn: [
      { title: "Snorkel Giftun Island & Orange Bay", desc: "Take a premium yacht cruise to Giftun Island. Relax on the pristine sands of Orange Bay, swim in shallow crystal-clear lagoons, and snorkel key coral walls." },
      { title: "Go Scuba Diving in the Red Sea", desc: "Whether a beginner or certified diver, explore Hurghada's world-class dive sites like Careless Reef or the underwater shipwrecks of El Gouna." },
      { title: "Embark on an ATV Quad Desert Safari", desc: "Race quad bikes over deep desert sand dunes at sunset, visit a traditional Bedouin camp, ride camels, and enjoy a traditional BBQ dinner." }
    ],
    activitiesAr: [
      { title: "الرحلة البحرية لجزيرة جفتون وأورنج باي", desc: "استقل يختاً فاخراً لجزيرة جفتون. استمتع بالاسترخاء على شاطئ أورنج باي المدهش والسباحة والسنوركلينج بين الأسماك الملونة." },
      { title: "تجربة الغوص في شعاب البحر الأحمر", desc: "سواء كنت مبتدئاً أو محترفاً، استكشف مواقع الغوص العالمية بالغردقة مثل شعاب 'كارليس ريف' أو حطام السفن الغارقة." },
      { title: "سفاري البيتش باجي وعشاء البدو", desc: "انطلق بالدراجات الرباعية وسط الجبال والصخور الصحراوية عند الغروب، وزر مخيماً بدوياً تقليدياً لتناول عشاء المشويات الشهير." }
    ],
    foodEn: [
      { name: "Red Sea Singary Fish", desc: "Local sea bream or sea bass split open, seasoned with fresh garlic, tomato, bell pepper, and cumin, baked in clay ovens, served with hot pita and tahini." },
      { name: "Bedouin Feteer", desc: "Crispy, multi-layered flatbread baked over hot sheet metal on firewood, served with black honey and goat cheese." }
    ],
    foodAr: [
      { name: "السمك السنجاري على طريقة البحر الأحمر", desc: "سمك دنيس أو قاروص طازج يُفتح ويُتبل بالثوم، الطماطم، الفلفل الأخضر، والكمون، ويُخبز في أفران الحطب." },
      { name: "الفطير البدوي وشاي الأعشاب", desc: "فطير مورق رقيق يُخبز على الصاج الساخن فوق الحطب المشتعل ويقدم مع العسل الأسود والجبن." }
    ],
    hotelsEn: [
      { name: "Steigenberger ALDAU Beach Hotel", tier: "Luxury", desc: "A magnificent 5-star luxury resort featuring a massive lazy river pool, private sandy beach, a premium 9-hole golf course, and top-tier dining." },
      { name: "Baron Palace Sahl Hasheesh", tier: "Luxury", desc: "An exceptionally lavish, palace-style resort nestled in Sahl Hasheesh bay, offering royal suites, private pools, and pristine beachfronts." }
    ],
    hotelsAr: [
      { name: "فندق شتيجنبرجر الداو بيتش، الممشي السياحي", tier: "Luxury", desc: "منتجع فاخر فئة 5 نجوم يتميز بمسبح شاسع (Lazy River)، وشاطئ رملي خاص، وملعب جولف متميز ومطاعم عالمية." },
      { name: "بارون بالاس سهل حشيش الفاخر", tier: "Luxury", desc: "منتجع قصر غاية في الفخامة والجمال يقع في خليج سهل حشيش، ويوفر أجنحة ملكية وشواطئ رملية بكر ومسابح خاصة." }
    ],
    transportEn: "Hurghada is located 450km southeast of Cairo. The fastest way to arrive is to take a direct 1-hour flight from Cairo Airport to Hurghada International. Alternatively, luxury GoBus coaches depart Cairo daily, taking about 5 hours. Within the city, private hotel cars, Uber, and local white microbuses are widely available.",
    transportAr: "تبعد الغردقة حوالي 450 كم جنوب شرق القاهرة. الخيار الأفضل هو الطيران المباشر (ساعة واحدة) أو حجز حافلات جو باص الفاخرة (حوالي 5 ساعات).",
    tipsEn: [
      "Book your Giftun Island boat trip in advance to secure a high-quality yacht with a professional dive guide.",
      "Wear water shoes when walking near shorelines to protect your feet from sharp stones and sea urchins.",
      "Enjoy a sunset walk along the Hurghada Marina Boulevard, stopping for fresh juice or coffee."
    ],
    tipsAr: [
      "احرص على حجز رحلة جزيرة جفتون مسبقاً لضمان يخت فاخر ومجهز مع أدوات السنوركلينج الكاملة.",
      "ارتدِ حذاء البحر الواقي عند المشي على الشواطئ لحماية قدميك من الصخور الحادة وقنافذ البحر."
    ],
    bestTimeEn: "September to November and March to May are the absolute best months, featuring perfect warm water and beautiful breezes. Winter is sunny but can get windy, while summer is very hot (40°C).",
    bestTimeAr: "الفترة من سبتمبر إلى نوفمبر ومارس إلى مايو هي الأفضل تماماً، حيث تكون حرارة المياه مثالية والنسائم لطيفة للغاية.",
    nearByEn: [
      { name: "The Luxury Lagoon Town of El Gouna", desc: "An exclusive, modern resort town characterized by turquoise lagoons and marinas, located 25km north.", slug: "el-gouna-travel-guide" },
      { name: "The Imperial Temples of Luxor", desc: "The ancient capital of Thebes, reachable via a scenic 4-hour mountain day trip.", slug: "luxor-travel-guide" }
    ],
    nearByAr: [
      { name: "مدينة الجونة السياحية الفاخرة", desc: "مدينة منتجعات عصرية حصرية تتميز بالبحيرات المائية الفيروزية واليخوت، وتقع على بعد 25 كم شمالاً.", slug: "el-gouna-travel-guide" },
      { name: "معابد الأقصر الإمبراطورية", desc: "العاصمة الأثرية الفرعونية لطيبة، ويمكن الوصول إليها في رحلة جبلية مدتها 4 ساعات.", slug: "luxor-travel-guide" }
    ],
    faqEn: [
      { q: "Can I do a day trip to Luxor from Hurghada?", a: "Yes! Luxor is about a 4-hour drive from Hurghada. Many visitors book private day transfers to explore the Valley of the Kings and Karnak Temple in a single day." },
      { q: "Is the Red Sea safe from sharks?", a: "Yes, shark attacks are exceptionally rare in the shallow coastal lagoons and reefs where snorkeling and diving tours operate under professional supervision." }
    ],
    faqAr: [
      { q: "هل يمكنني القيام برحلة يومية للأقصر من الغردقة؟", a: "نعم! تبعد الأقصر حوالي 4 ساعات بالسيارة من الغردقة. ويوفر فندقنا رحلات خاصة ليوم واحد لاستكشاف وادي الملوك ومعبد الكرنك." }
    ],
    ctaEn: {
      text: "Experience the ultimate Red Sea holiday. Book our signature premium Giftun Island yacht cruise or sunset ATV quad sand safari directly with our travel experts.",
      linkText: "See all Hurghada trips",
      url: "/#tours"
    },
    ctaAr: {
      text: "استمتع بعطلة البحر الأحمر المثالية. احجز جولتنا البحرية الفاخرة لجزيرة جفتون أو سفاري البيتش باجي عند الغروب مباشرة مع خبرائنا.",
      linkText: "شاهد جميع رحلات الغردقة",
      url: "/#tours"
    },
    relatedTourIds: [5, 6, 9],
    hiddenGemsEn: [
      "The Hurghada Grand Aquarium - An impressive conservation center housing a massive shark tunnel and local Red Sea marine species.",
      "El Dahar Old Town Markets - The historic heart of Hurghada where you can shop for traditional spices, teas, and local leather goods away from hotels.",
      "Soma Bay Coral Wall - A spectacular, untouched coral barrier wall famous for sea turtle and eagle ray sightings."
    ],
    hiddenGemsAr: [
      "متحف الغردقة المائي (جراند أكواريوم) - مركز أبحاث رائع يضم نفق القروش العملاق ومختلف الفصائل البحرية للبحر الأحمر.",
      "أسواق الدهار القديمة - القلب الشعبي والتاريخي للغردقة حيث تجد التوابل والشاي والجلود التقليدية بأفضل الأسعار.",
      "جدار مرجان سوما باي - حاجز مرجاني بكر خلاب يشتهر برصد السلاحف البحرية والأسماك الكبيرة."
    ],
    safetyEn: [
      "Avoid touching or stepping on the delicate coral reefs; marine ecosystems are protected by environmental law.",
      "Always wear a life jacket during snorkeling boat trips if you are not a strong swimmer.",
      "Apply high-factor coral-friendly sunscreen to protect both your skin and the reefs."
    ],
    safetyAr: [
      "تجنب لمس أو الوقوف على الشعاب المرجانية الحساسة؛ لحمايتها وحماية يديك من الخدوش واللسعات.",
      "احرص على ارتداء لايف جاكت (سترة نجاة) أثناء السنوركلينج إذا لم تكن سباحاً قوياً.",
      "استخدم واقي شمس صديق للبيئة البحرية لحماية الشعاب المرجانية من الكيماويات."
    ],
    itineraryEn: [
      { day: "Day 1", title: "Orange Bay Snorkeling", desc: "Take a luxury yacht day cruise, spend 2 hours relaxing on the wooden swings of Orange Bay, and snorkel two pristine reefs." },
      { day: "Day 2", title: "ATV Quad Safari & Bedouin Starry Night", desc: "Spend the afternoon racing quad bikes in the desert, ride a camel, and enjoy Bedouin barbecue under the stars." }
    ],
    itineraryAr: [
      { day: "اليوم الأول", title: "الرحلة البحرية وأورنج باي", desc: "استمتع بيوم كامل على يخت فاخر، واقضِ ساعتين في أورنج باي مع الغداء والسنوركلينج بين المرجان." },
      { day: "اليوم الثاني", title: "سفاري البيتش باجي والنجوم", desc: "اقضِ فترة بعد الظهر في ركوب الدراجات النارية بالصحراء، واركب جملاً، واستمتع بالمشويات البدوية تحت نجوم الليل." }
    ]
  },
  {
    slug: "sharm-el-sheikh-travel-guide",
    destination: "Sinai",
    nameEn: "Sharm El Sheikh",
    nameAr: "شرم الشيخ",
    titleEn: "Sharm El Sheikh Travel Guide: The City of Peace and Luxury Marine Reserves",
    titleAr: "دليل شرم الشيخ: مدينة السلام والمنتجعات البحرية الفاخرة المحمية",
    subtitleEn: "Discover the spectacular coral cliffs of Ras Mohammed and the luxury bays of Sinai",
    subtitleAr: "اكتشف جدار المرجان الأسطوري بمحمية رأس محمد والخلجان الفاخرة في سيناء",
    metaDescriptionEn: "The ultimate luxury guide to Sharm El Sheikh, Egypt. Discover Ras Mohammed, Tiran Island, Naama Bay, Soho Square, scuba diving, and luxury 5-star beachfront resorts.",
    metaDescriptionAr: "دليل السفر الشامل لشرم الشيخ، مصر. اكتشف رأس محمد، جزيرة تيران، خليج نعمة، سوهو سكوير، الغوص، وأفخم الفنادق والمنتجعات العالمية.",
    keywordsEn: "Sharm El Sheikh travel, Ras Mohammed national park, Tiran Island snorkel, Naama Bay, Soho Square Sharm, Red Sea dive Sinai",
    keywordsAr: "دليل شرم الشيخ, محمية رأس محمد, جزيرة تيران, خليج نعمة, سوهو سكوير شرم, غوص البحر الأحمر سيناء",
    heroImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Nestled at the southern tip of the sacred Sinai Peninsula, Sharm El Sheikh is a world-famous luxury resort capital renowned for its dramatic desert mountains, pristine sandy bays, and unparalleled marine reserves. Known globally as the 'City of Peace' for hosting international peace summits, Sharm is the ultimate playground for luxury travelers, divers, and sun-seekers. It is bordered by Ras Mohammed National Park, a protected marine reserve containing breathtaking vertical coral walls that drop one thousand meters into the deep blue ocean, home to thousands of species of sharks, barracudas, and glowing anemones. To experience the magic of Sinai, you can easily <a href='/tours?destination=Sinai' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Book Hurghada Adventure</a> or coordinate a Sinai tour directly from our portal.",
    introAr: "تقع شرم الشيخ عند الطرف الجنوبي لشبه جزيرة سيناء المقدسة، وهي عاصمة المنتجعات الفاخرة الشهيرة بجمال جبالها الصحراوية وشواطئها البكر. يمكنك بسهولة <a href='/tours?destination=Sinai' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز مغامرة سيناء والبحر الأحمر</a> للحصول على باقة عطلة ساحرة.",
    historyEn: "Initially a strategic military port, Sharm El Sheikh transformed into a world-class tourism paradise in the 1980s. Following the return of Sinai to Egypt, the government heavily invested in creating eco-conscious luxury hotels, preserving the surrounding marine sanctuaries like Ras Mohammed (established as Egypt's first national park in 1983) and developing Naama Bay into a lively seaside promenade.",
    historyAr: "كانت شرم الشيخ في الأصل ميناء عسكرياً استراتيجياً، وتحولت في الثمانينيات إلى مدينة سياحية عالمية ومركز للمؤتمرات الدولية والقمم العالمية لحفظ السلام والمنتجعات الفاخرة.",
    cultureEn: "Sharm El Sheikh offers a high-end, international cosmopolitan atmosphere combined with deep Sinai Bedouin traditions. The city is home to spectacular modern landmarks like the Al Sahaba Mosque, which features a stunning fusion of Ottoman, Fatimid, and Mamluk architecture, alongside Bedouin-themed desert camps in the Sinai valleys offering traditional tea and drumming.",
    cultureAr: "تقدم شرم الشيخ ثقافة عصرية عالمية راقية، ممتزجة مع التقاليد البدوية لجنوب سيناء. ويعد مسجد الصحابة بأيقونته المعمارية الفريدة بـ خليج المايا شاهداً مذهلاً.",
    activitiesEn: [
      { title: "Dive Ras Mohammed National Park", desc: "Take a boat trip to Ras Mohammed. Snorkel or dive at Yolanda Reef to see spectacular vertical coral walls, ancient ship cargo, and giant barracudas." },
      { title: "Spend an Evening at Soho Square", desc: "Enjoy a premium family evening out. Soho Square features a spectacular dancing fountain, high-end international restaurants, ice skating, and duty-free shopping." },
      { title: "Visit the Majestic Al Sahaba Mosque", desc: "Explore the historic market of Sharm and visit Al Sahaba Mosque, a spectacular architectural masterpiece with minarets soaring 76 meters high." }
    ],
    activitiesAr: [
      { title: "الرحلة البحرية لمحمية رأس محمد العالمية", desc: "قم بجولة بالقارب لمحمية رأس محمد. مارس السنوركلينج في 'يولاندا ريف' وتأمل حوائط المرجان العمودية المدهشة والأسماك العملاقة." },
      { title: "قضاء سهرة في سوهو سكوير الفاخر", desc: "استمتع بسهرة عائلية راقية في سوهو سكوير الذي يضم النافورة الراقصة المضيئة، والمطاعم الفاخرة، ومحلات التسوق الحرة." },
      { title: "زيارة مسجد الصحابة المعماري البديع", desc: "استكشف السوق القديم وتأمل مسجد الصحابة الذي يمثل تحفة هندسية فريدة بمآذنه التي ترتفع 76 متراً." }
    ],
    foodEn: [
      { name: "Charcoal Grilled Sea Bream", desc: "Fresh sea bream stuffed with fresh herbs, garlic, and tomato, grilled slowly over hot charcoal, served with fresh local sesame tahini." },
      { name: "Bedouin Herbal Tea (Habak)", desc: "Sweet black tea brewed with fresh, wild Habak herb harvested from the Sinai valleys, known for its digestive and soothing properties." }
    ],
    foodAr: [
      { name: "سمك الدنيس المشوي على الفحم", desc: "سمك دنيس طازج محشي بالأعشاب والليمون والثوم ومجمر ببطء فوق الفحم ويقدم مع سلطة الطحينة الساخنة." },
      { name: "شاي الحبق البدوي الصحراوي", desc: "الشاي الأسود المحلى بالحبق البري العطري الذي يُقطف من وديان جبال سيناء وله طعم مهدئ رائع." }
    ],
    hotelsEn: [
      { name: "Four Seasons Resort Sharm El Sheikh", tier: "Luxury", desc: "Egypt's most exclusive, ultra-luxury beachfront resort featuring private villa suites, an incredible house reef, multiple infinity pools, and world-class dining." },
      { name: "Rixos Premium Seagate", tier: "Luxury", desc: "An exceptionally lavish, all-inclusive luxury resort located in Nabq, famous for its private pier, water parks, and premium entertainment." }
    ],
    hotelsAr: [
      { name: "منتجع فورسيزونز شرم الشيخ الملكي", tier: "Luxury", desc: "أرقى وأفخم منتجع في مصر يضم فيلات خاصة مع مسابح، وشعاباً مرجانية بكر خاصة ممتازة ومطاعم حاصلة على جوائز عالمية." },
      { name: "فندق ريكسوس بريميوم سيجيت، نبق", tier: "Luxury", desc: "منتجع فاخر متكامل الخدمات يقع في منطقة نبق، ويشتهر برصيف اليخوت الخاص الممتد والألعاب المائية والترفيه الراقي." }
    ],
    transportEn: "Sharm El Sheikh is located 500km southeast of Cairo. The fastest route is to take a direct 1-hour flight from Cairo Airport to Sharm El Sheikh International. Alternatively, premium buses operate daily, taking about 6 hours through the Ahmed Hamdi tunnel. Within the city, private hotel transfers and blue-and-white local taxis are the primary transit.",
    transportAr: "تبعد شرم الشيخ حوالي 500 كم عن القاهرة. أفضل طريقة للوصول هي الطيران المباشر (ساعة واحدة) أو ركوب حافلات السوبر جيت الفاخرة (حوالي 6 ساعات).",
    tipsEn: [
      "Coordinate a boat trip to Tiran Island to snorkel near the famous underwater shipwrecks and enjoy clear deep blue lagoons.",
      "Respect the marine reserve rules: never stand on, touch, or take shells and coral from the national parks.",
      "Bargain politely in the Old Market, where shop owners love to chat over hot mint tea."
    ],
    tipsAr: [
      "احرص على حجز رحلة بحرية لجزيرة تيران للسنوركلينج بالقرب من حطام السفن الغارقة والتمتع بصفاء المياه.",
      "احترم قواعد المحميات الطبيعية: لا تقف أبداً على المرجان أو تلمسه، ولا تجمع القواقع البحرية من الشواطئ."
    ],
    bestTimeEn: "October to April is the prime season, offering warm, sunny days (24°C-28°C) and fresh sea breezes. Summer can be very hot, though the dry breeze makes it more comfortable than Cairo.",
    bestTimeAr: "أكتوبر إلى أبريل هو الموسم المثالي تماماً، حيث تكون الحرارة دافئة ومعتدلة ومثالية للاستجمام والسباحة.",
    nearByEn: [
      { name: "The Bohemian Dive Town of Dahab", desc: "A laid-back seaside haven famous for the Blue Hole, located 1 hour north.", slug: "dahab-travel-guide" },
      { name: "Mount Sinai & St. Catherine's", desc: "The sacred biblical peaks and ancient monastery, located 2.5 hours north.", slug: "saint-catherine-travel-guide" }
    ],
    nearByAr: [
      { name: "بلدة دهب الهادئة والمقدسات", desc: "ملاذ سياحي رائع يشتهر بـ البلو هول والغطس، ويقع على بعد ساعة شمالاً.", slug: "dahab-travel-guide" },
      { name: "جبل موسى وسانت كاترين الأثرية", desc: "القمم الجبلية المقدسة ودير سانت كاترين التاريخي، ويقع على بعد ساعتين ونصف شمالاً.", slug: "saint-catherine-travel-guide" }
    ],
    faqEn: [
      { q: "Is Sharm El Sheikh safe for foreign tourists?", a: "Yes, Sharm El Sheikh is exceptionally safe and highly secured, with dedicated tourist police throughout the resort zones and airports ensuring a peaceful vacation." },
      { q: "Can I enter Ras Mohammed National Park by land?", a: "Yes! Ras Mohammed is accessible by both boat trips and land tours, which allow you to visit the famous Earthquake Crack and the Magic Lake." }
    ],
    faqAr: [
      { q: "هل شرم الشيخ آمنة تماماً للسياح؟", a: "نعم، شرم الشيخ مدينة آمنة للغاية وتتمتع بحراسة دقيقة وشرطة سياحة مخصصة في كل مكان لضمان راحة وسلامة الزوار." }
    ],
    ctaEn: {
      text: "Plan your dream Red Sea escape. Book our signature private yacht trip to Ras Mohammed or a luxury Soho Square evening directly with our resort planners.",
      linkText: "See all Sinai & Sharm tours",
      url: "/#tours"
    },
    ctaAr: {
      text: "خطط لعطلة أحلامك على البحر الأحمر. احجز جولتنا البحرية الخاصة لرأس محمد أو سهرة سوهو سكوير الفاخرة مباشرة مع خبرائنا.",
      linkText: "شاهد جميع جولات سيناء وشرم الشيخ",
      url: "/#tours"
    },
    relatedTourIds: [5, 6, 9],
    hiddenGemsEn: [
      "Hadaba Cliff view - Offers a jaw-dropping view of the cliffs crashing directly into the Red Sea at sunset.",
      "The Heavenly Cathedral - A spectacular Coptic Cathedral featuring breathtaking hand-painted fresco murals covering its ceilings and walls.",
      "Nabq Protected Area - A quiet mangrove forest reserve located north of the city, offering pristine desert beaches."
    ],
    hiddenGemsAr: [
      "تراس الهضبة - يوفر إطلالة خلابة تحبس الأنفاس للمنحدرات الصخرية التي تلتقي مع البحر الأحمر مباشرة عند الغروب.",
      "كاتدرائية السمائيين - كاتدرائية قبطية مذهلة تتميز برسوماتها الجدارية اليدوية المبهرة التي تغطي الجدران والأسقف بالكامل.",
      "محمية نبق الطبيعية - غابة مانجروف هادئة تقع شمال المدينة وتضم شواطئ برية وطيوراً مهاجرة نادرة."
    ],
    safetyEn: [
      "Always wear protective water shoes if wading near rocky shorelines to avoid stonefish.",
      "Drink bottled mineral water exclusively and apply coral-friendly sunscreen.",
      "Stick to designated swimming flags on hotel beaches to avoid deep drops."
    ],
    safetyAr: [
      "احرص على ارتداء أحذية البحر الواقية عند السير قرب الشواطئ الصخرية لتفادي قنافذ البحر.",
      "اشرب المياه المعدنية المعبأة فقط وتجنب مياه الحنفية المباشرة للحفاظ على سلامة معدتك."
    ],
    itineraryEn: [
      { day: "Day 1", title: "Ras Mohammed Exploration", desc: "Take a premium day boat tour to Ras Mohammed National park, snorkel Yolanda reef, and see the mangroves." },
      { day: "Day 2", title: "Old Market & Soho Square", desc: "Visit Al Sahaba Mosque in the Old Market, shop for souvenirs, and spend a lively evening enjoying the Soho Square fountain." }
    ],
    itineraryAr: [
      { day: "اليوم الأول", title: "محمية رأس محمد والسنوركلينج", desc: "قم بجولة بحرية كاملة لمحمية رأس محمد وتأمل حوائط المرجان والأسماك النادرة واستمتع بوجبة الغداء على اليخت." },
      { day: "اليوم الثاني", title: "السوق القديم وسوهو سكوير", desc: "قم بزيارة مسجد الصحابة بالسوق القديم وتسوق الهدايا، ثم اقضِ سهرة عائلية ممتعة في سوهو سكوير." }
    ]
  },
  {
    slug: "dahab-travel-guide",
    destination: "Sinai",
    nameEn: "Dahab",
    nameAr: "دهب",
    titleEn: "Dahab Travel Guide: Bohemian Coastal Magic and Sacred Peaks",
    titleAr: "دليل دهب: سحر شواطئ دهب البوهيمية والمغامرات الجبلية في سيناء",
    subtitleEn: "Unwind on the laid-back shores of the Gulf of Aqaba and plunge into the legendary Blue Hole",
    subtitleAr: "استرخِ على شواطئ خليج العقبة الهادئة واغطس في أعماق البلو هول الأسطوري",
    metaDescriptionEn: "The ultimate travel guide to Dahab, Egypt. Discover the Blue Hole, the Blue Lagoon, Canyon hike, Bedouin seaside cafes, windsurfing, and top budget eco-lodges.",
    metaDescriptionAr: "دليل السفر الشامل لدهب، مصر. اكتشف البلو هول، البلو لاجون، محمية أبو جالوم، مقاهي البدو الشاطئية، والتزلج على الماء.",
    keywordsEn: "Dahab travel guide, Blue Hole Dahab, Blue Lagoon Egypt, Dahab windsurfing, Dahab diving, Sinai desert safari, Abu Galum",
    keywordsAr: "دليل دهب, البلو هول دهب, البلو لاجون مصر, تزلج دهب, غوص دهب, سفاري صحراء سيناء, أبو جالوم",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1629813589332-9cb77353f868?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "On the eastern coast of the sacred Sinai Peninsula, Dahab is a former Bedouin fishing village that has preserved a legendary, laid-back bohemian charm. Bordered by dramatic rust-colored mountains that crash directly into the deep blue waters of the Gulf of Aqaba, Dahab is a mystical sanctuary for free-divers, windsurfers, and travelers looking to escape commercial tourism. The rhythm of life here is slow and beautiful, spent resting in low-key Bedouin-style cushions along the waterfront, sipping herbal tea, and gazing across the water to the mountains of Saudi Arabia. Dahab is home to the Blue Hole—a legendary 120-meter-deep marine sinkhole that attracts divers from across the globe—and the pristine shallow waters of the Blue Lagoon. To start your adventure, you can <a href='/tours?destination=Sinai' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Book Desert Safari</a> or secure local Dahab packages directly through our hotel desk.",
    introAr: "على الساحل الشرقي لشبه جزيرة سيناء، تقع بلدة دهب الساحرة التي كانت في الأصل قرية صيد بدوية هادئة. يمكنك بسهولة <a href='/tours?destination=Sinai' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز سفاري الصحراء</a> واستكشاف شواطئ دهب البوهيمية الرائعة.",
    historyEn: "Historically inhabited by the Muzeina Bedouins, Dahab ('Gold' in Arabic, referring to its golden sands or historical trade) was a key oasis outpost. Following the rise of adventure tourism in the late 20th century, the Bedouin families actively shaped Dahab's development, preserving their land ownership and maintaining a sustainable, low-rise eco-friendly layout that contrasts with the massive commercial resort developments of Sharm El Sheikh.",
    historyAr: "كانت دهب واحة بدوية وميناء تجارياً صغيراً سكنته قبيلة المزينة البدوية العريقة، ونمت كبلدة سياحية بيئية تحافظ على البساطة والجمال الطبيعي بعيداً عن صخب المنتجعات التجارية الكبيرة.",
    cultureEn: "Dahab's culture is a beautiful, peaceful blend of Bedouin hospitality and international artistic lifestyle. The seaside Corniche is lined with low-key cafes where local Bedouins, expat artists, and travelers sit together on traditional carpets. Music, yoga, environmental cleanups, and a deep respect for the surrounding marine life are the cornerstones of Dahab's unique communal culture.",
    cultureAr: "تعد ثقافة دهب مزيجاً رائعاً وودياً يجمع بين كرم الضيافة البدوية العميقة وأساليب الحياة الفنية والصحية العالمية للوافدين وعشاق الطبيعة واليوغا.",
    activitiesEn: [
      { title: "Snorkel or Dive the Legendary Blue Hole", desc: "Visit the Blue Hole marine sinkhole. Snorkel the colorful shallow reef saddle, or take a scuba diving excursion through 'The Bells' tunnel entrance." },
      { title: "Journey to the Pristine Blue Lagoon & Abu Galum", desc: "Take a scenic boat or camel ride north to Abu Galum Protected Area. Swim in the shallow, turquoise, wind-swept waters of the Blue Lagoon and sleep in a Bedouin beach hut." },
      { title: "Hike the Stunning Canyon of Dahab", desc: "Embark on a desert expedition to walk through the dramatic Colored Canyon, a narrow sandstone gorge showcasing vibrant mineral swirls." }
    ],
    activitiesAr: [
      { title: "السنوركلينج والغوص في البلو هول الأسطوري", desc: "قم بزيارة البلو هول (الحفرة الزرقاء)، وامشِ عبر الحاجز المرجاني لمشاهدة التشكيلات المذهلة والأسماك الملونة." },
      { title: "الرحلة لمحمية أبو جالوم والبلو لاجون", desc: "اركب قارب موتور أو جملاً متجهاً لشمال دهب لمحمية أبو جالوم. اسبح في مياه البلو لاجون الفيروزية الضحلة الهادئة." },
      { title: "المشي واستكشاف الكانيون الملون", desc: "انطلق في رحلة صحراوية للمشي داخل الكانيون الملون، وهو شق صخري رائع يظهر تموجات الألوان المعدنية الطبيعية في الصخور." }
    ],
    foodEn: [
      { name: "Bedouin Charcoal Baked Fish", desc: "Fresh fish stuffed with local mountain herbs and garlic, wrapped in foil and baked directly under charcoal embers in the desert sand." },
      { name: "Sinai Mountain Honey & Cheese", desc: "Sweet, high-value honey harvested from wild mountain flowers, served with local salted goat cheese and fresh flatbread." }
    ],
    foodAr: [
      { name: "السمك المدفون في الرمال على الطريقة البدوية", desc: "السمك الطازج المحشو بأعشاب الجبل والثوم ويُلف بورق القصدير ويُدفن تحت جمر الفحم في الرمال الساخنة بالصحراء." },
      { name: "العسل الجبلي السيناوي والجبن", desc: "عسل نحل نقي يُجمع من زهور جبال سيناء البرية، ويقدم مع الجبن الأبيض البلدي والخبز البلدي الساخن." }
    ],
    hotelsEn: [
      { name: "Le Méridien Dahab Resort", tier: "Luxury", desc: "A beautiful, premium luxury resort designed by legendary architect Alain Jaouen, featuring stunning pools, windsurfing schools, and private terraces facing the Gulf." },
      { name: "Coral Coast Hotel", tier: "Mid-Range", desc: "A highly comfortable, friendly beachfront hotel located near Eel Garden, perfect for yoga retreats and scuba diving packages." }
    ],
    hotelsAr: [
      { name: "منتجع لوميريديان دهب الفاخر", tier: "Luxury", desc: "منتجع فاخر رائع يتميز بمسابح إنفينيتي ساحرة، ومدارس تزلج شراعي وغرف تواجه البحر مباشرة بتصميمات معمارية نوبية فريدة." },
      { name: "فندق كورال كوست الشاطئي", tier: "Mid-Range", desc: "فندق مريح للغاية يقع مباشرة على شاطئ إيل جاردن، وهو مثالي لعشاق اليوغا ومجموعات الغوص والسنوركلينج." }
    ],
    transportEn: "Dahab is located 85km north of Sharm El Sheikh. The most convenient way to arrive is to book a private hotel transfer from Sharm El Sheikh Airport, which takes about 1 hour of scenic mountain drive. Within Dahab, passenger pick-up trucks ('Dahab Taxis') are the primary way to travel between Naqb and the Blue Hole.",
    transportAr: "تبعد دهب حوالي 85 كم شمال شرم الشيخ. أفضل طريقة للوصول هي حجز سيارة خاصة من مطار شرم الشيخ (حوالي ساعة واحدة).",
    tipsEn: [
      "Rent a bicycle to easily navigate the pedestrian seaside Corniche and explore local shops.",
      "Always wear water shoes near the Blue Hole; the limestone entry reef can be exceptionally slippery.",
      "Spend a night stargazing in the desert of Wadi Qnai, enjoying a Bedouin barbecue."
    ],
    tipsAr: [
      "استأجر دراجة هوائية للتنقل بسهولة على طول الكورنيش المخصص للمشاة واستكشاف المحلات المحلية القديمة.",
      "احرص على ارتداء أحذية البحر دائماً بالقرب من البلو هول؛ حيث يمكن للصخور الجيرية عند المدخل أن تكون زلقة للغاية."
    ],
    bestTimeEn: "October to April is ideal for fresh weather and comfortable hiking. March to June is the prime season for windsurfing and kiteboarding as the Gulf wind gets incredibly consistent.",
    bestTimeAr: "الفترة من أكتوبر إلى أبريل هي الأفضل للاستمتاع بالطقس المعتدل والأنشطة الجبلية كـ السفاري والمشي.",
    nearByEn: [
      { name: "Saint Catherine & Mt. Sinai", desc: "The sacred mountain peaks and ancient wilderness just 2 hours inland.", slug: "saint-catherine-travel-guide" },
      { name: "Sharm El Sheikh Coastal Resorts", desc: "World-class coral reefs and modern shopping plazas 85km south.", slug: "sharm-el-sheikh-travel-guide" }
    ],
    nearByAr: [
      { name: "سانت كاترين وجبل موسى", desc: "القمم الجبلية المقدسة والبرية القديمة على بعد ساعتين فقط بالداخل.", slug: "saint-catherine-travel-guide" },
      { name: "شرم الشيخ ومنتجعاتها الساحلية", desc: "شعاب مرجانية عالمية ومراكز تسوق حديثة على بعد 85 كم جنوباً.", slug: "sharm-el-sheikh-travel-guide" }
    ],
    faqEn: [
      { q: "Is Dahab safe for solo travelers?", a: "Yes, Dahab is famous for being incredibly friendly and safe. The community of Bedouins and international expats is very tight-knit and welcoming, making it one of the safest destinations in Egypt." },
      { q: "How do I get to the Blue Lagoon?", a: "You can take a taxi to the Blue Hole, then ride a boat or hike/ride a camel along the coast to Abu Galum. From Abu Galum, a short 10-minute truck ride or walk takes you directly to the Blue Lagoon." },
      { q: "Can I learn to dive in Dahab?", a: "Dahab is one of the cheapest and best places in the world to get certified. There are dozens of professional, PADI-certified dive centers along the beachfront offering open water courses." }
    ],
    faqAr: [
      { q: "هل دهب آمنة للمسافرين بمفردهم؟", a: "نعم، تشتهر دهب بأنها ودية وآمنة للغاية. المجتمع المترابط من البدو والوافدين الأجانب يرحب بالجميع، مما يجعلها واحدة من أكثر الوجهات أماناً في مصر." },
      { q: "كيف أصل إلى البلو لاجون؟", a: "يمكنك ركوب تاكسي إلى البلو هول، ثم ركوب قارب أو المشي/ركوب الجمل على طول الساحل إلى أبو جالوم. ومن هناك، تأخذك سيارة نقل قصيرة لمدة 10 دقائق مباشرة إلى البلو لاجون." },
      { q: "هل يمكنني تعلم الغوص في دهب؟", a: "دهب هي واحدة من أفضل وأرخص الأماكن في العالم للحصول على رخص الغوص. توجد عشرات مراكز الغوص الاحترافية المعتمدة من PADI على طول الشاطئ تقدم دورات للمبتدئين والمحترفين." }
    ],
    ctaEn: {
      text: "Embark on an unforgettable desert safari, hike the mountaintops of Saint Catherine, or dive the deep Blue Hole with our customized premium adventure packages.",
      linkText: "Book Dahab Adventure",
      url: "/#tours"
    },
    ctaAr: {
      text: "انطلق في مغامرة سفاري صحراوية لا تُنسى، أو تسلق قمم جبال سانت كاترين، أو غص في أعماق البلو هول مع باقات المغامرة الممتازة المخصصة لدينا.",
      linkText: "احجز مغامرة دهب",
      url: "/#tours"
    }
  },
  {
    slug: "siwa-oasis-travel-guide",
    destination: "Siwa Oasis",
    nameEn: "Siwa Oasis",
    nameAr: "واحة سيوة",
    titleEn: "Siwa Oasis Travel Guide: The Mystical Desert Sanctuary of Alexander the Great",
    titleAr: "دليل واحة سيوة: ملاذ الصحراء الغامض ومهد الإسكندر الأكبر",
    subtitleEn: "Venture to a lush paradise of salt lakes, olive groves, and the ancient oracle of Amun",
    subtitleAr: "انطلق إلى جنة أشجار الزيتون وبحيرات الملح الفيروزية ومعبد الوحي التاريخي للإسكندر",
    metaDescriptionEn: "The ultimate premium travel guide to Siwa Oasis, Egypt. Discover salt lakes, Cleopatra's pool, Shali fortress, Temple of Oracle, Great Sand Sea, and top eco-lodges.",
    metaDescriptionAr: "دليل السفر الشامل لواحة سيوة، مصر. اكتشف بحيرات الملح المتلألئة، عين كليوباترا، قلعة شالي الأثرية، معبد الوحي، وبحر الرمال الأعظم.",
    keywordsEn: "Siwa Oasis travel guide, Siwa salt lakes, Shali Fortress, Cleopatra's pool Siwa, Temple of Oracle Alexander, Great Sand Sea safari, Adrere Amellal eco-lodge",
    keywordsAr: "دليل سيوة, بحيرات ملح سيوة, قلعة شالي, عين كليوباترا سيوة, معبد الوحي الإسكندر, سفاري بحر الرمال الأعظم, فندق أدرير أملال",
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Deep within the vast expanse of Egypt's Western Desert, just fifty kilometers from the Libyan border, lies Siwa Oasis—a mystical, isolated paradise of over three hundred thousand palm trees, lush olive groves, and shimmering turquoise salt lakes. Siwa is a place of powerful, timeless stories. It is where Alexander the Great made an epic desert pilgrimage in 331 BCE to consult the legendary Oracle of Amun, who declared him the divine son of God. Bordered by the towering golden dunes of the Great Sand Sea, Siwa preserves its own unique Berber culture, language, and mud-brick architecture. Floating effortlessly in its hyper-saline salt pools and watching the sunset illuminate the ruins of Shali Fortress offer an adventure that feels entirely removed from the modern world. To plan a custom desert journey, you can easily <a href='/tours?destination=Desert' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Book Desert Safari</a> directly through our hotel specialists.",
    introAr: "تقع واحة سيوة في أعماق الصحراء الغربية لمصر، وهي واحة بكر معزولة وساحرة تضم مئات عيون المياه الطبيعية وبحيرات الملح فائقة الملوحة. يمكنك بسهولة <a href='/tours?destination=Desert' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز سفاري الصحراء</a> لخوض رحلة العمر في سيوة وبحر الرمال الأعظم.",
    historyEn: "Siwa remained largely independent of central Egyptian authority for thousands of years, known in antiquity as 'Sekhet-am' (Palm Land). The oasis rose to global prominence with the construction of the Temple of the Oracle of Amun in the 6th century BCE. In 331 BCE, Alexander the Great marched his elite troops across the desert sands from Alexandria to consult the oracle, seeking divine validation for his global conquests. In the medieval era, the locals constructed Shali Fortress—a massive, labyrinthine mud-brick castle built from 'kersheef' (a natural mixture of salt, clay, and gypsum) designed to protect the community from nomadic desert raiders.",
    historyAr: "عُرفت سيوة في العصور القديمة باسم \"واحة آمون\"، واكتسبت شهرة عالمية بعد زيارة الإسكندر الأكبر التاريخية لمعبد الوحي ليستمد الشرعية الإلهية لغزواته العالمية.",
    cultureEn: "Siwi culture is entirely unique, representing Egypt's only Berber-speaking community. The locals speak Siwi (a Berber dialect) alongside Arabic, and preserve distinct wedding customs, beautiful silver jewelry designs, and intricate embroidery. Their hospitality is legendary; hosts routinely offer visitors sweet local dates stuffed with almonds and fresh mint tea around wood fires.",
    cultureAr: "الثقافة السيوية فريدة للغاية؛ حيث ينحدر سكان الواحة من أصول أمازيغية ويتحدثون اللغة السيوية الأمازيغية فيما بينهم، ويحافظون على تقاليدهم العريقة وصناعة الحلي الفضية البديعة.",
    activitiesEn: [
      { title: "Float in the Hyper-Saline Salt Lakes", desc: "Experience the magic of floating effortlessly in Aswan's active salt pans. The water is so saline that it is physically impossible to sink, creating a surreal feeling." },
      { title: "Swim in Cleopatra's Bath & Spring of Sun", desc: "Soak your body in the historic natural stone spring of Cleopatra, where the queen herself is believed to have bathed. Enjoy fresh organic juices at adjacent palm cafes." },
      { title: "Explore the Mud-Brick Ruins of Shali Fortress", desc: "Climb the towering mud-brick ruins of the 13th-century Shali castle located in the center of the town, enjoying spectacular panoramic views of the palm groves." }
    ],
    activitiesAr: [
      { title: "الطفو والسباحة في بحيرات الملح الفيروزية", desc: "اختبر شعور الطفو المطلق دون جهد في مناجم الملح الكبيرة بسيوة؛ حيث تجعلك الملوحة العالية تطفو فوق المياه كالفلين تماماً." },
      { title: "الاستحمام في عين كليوباترا الطبيعية الحارة", desc: "اغطس في العين الصخرية الطبيعية الدائرية التي تتدفق بمياه كبريتية دافئة علاجية، وتناول عصير الرمان الطازج في المقاهي المحيطة." },
      { title: "تسلق أطلال قلعة شالي التاريخية بالمركز", desc: "تسلق درجات القلعة القديمة المبنية من الكرشيف في قلب سيوة واستمتع برصد الواحة بأكملها وغابات النخيل عند الغروب." }
    ],
    foodEn: [
      { name: "Siwi Lamb & Abugraag", desc: "Succulent local mountain lamb slow-cooked in clay pots buried under sand with hot coals, seasoned with wild Siwi mountain herbs." },
      { name: "Siwi Stuffed Dates & Almonds", desc: "Plump, sun-dried sweet dates stuffed with roasted almonds, coated with local dark sesame oil." }
    ],
    foodAr: [
      { name: "اللحم المدفون والكسكسي السيوي", desc: "لحم الضأن السيوي الشهير المطهو ببطء في حفر الرمال تحت جمر الحطب، ويقدم مع الكسكسي السيوي الفاخر والمكسرات." },
      { name: "البلح السيوي باللوز والسمسم", desc: "أفخر أنواع البلح والتمور السيوية المجففة المحشوة باللوز المحمص والمغلفة بالسمسم." }
    ],
    hotelsEn: [
      { name: "Adrère Amellal Eco-Lodge", tier: "Luxury", desc: "A world-famous, exceptionally luxurious eco-lodge built entirely from kersheef and palm trunks at the foot of a white mountain. It has no electricity; illuminated entirely by hundreds of beeswax candles at night. A favorite of royalty." },
      { name: "Taziry Ecolodge Siwa", tier: "Mid-Range", desc: "A beautiful, organic eco-lodge built overlooking the Shali and salt lakes, featuring highly comfortable traditional rooms and sustainable practices." }
    ],
    hotelsAr: [
      { name: "أدرير أملال (Eco-Lodge)", tier: "Luxury", desc: "فندق بيئي فاخر ذو شهرة عالمية مبني بالكامل من الكرشيف وجذوع النخيل عند قدم الجبل الأبيض. لا يحتوي على كهرباء ويضاء ليلاً بوعي بـ مئات شموع عسل النحل. مفضل للملوك والمشاهير." },
      { name: "فندق تازيري البيئي بسيوة", tier: "Mid-Range", desc: "فندق بيئي رائع وعضوي مبني بإطلالة على قلعة شالي وبحيرات الملح، ويتميز بغرفه التقليدية المريحة للغاية وممارساته المستدامة." }
    ],
    transportEn: "Siwa is located 750km northwest of Cairo and 300km south of Marsa Matrouh. The primary way to arrive is to book a private hotel car or take the overnight direct West & Delta coach from Cairo, which takes about 9 hours. There are no commercial flights to the oasis, preserving its pristine isolation.",
    transportAr: "تقع سيوة على بعد 750 كم شمال غرب القاهرة و 300 كم جنوب مرسى مطروح. الطريقة الأساسية للوصول هي حجز سيارة خاصة أو ركوب حافلة غرب ووسط الدلتا الليلية المباشرة من القاهرة (حوالي 9 ساعات). لا توجد رحلات طيران تجارية للواحة مما يحافظ على عزلتها البكر.",
    tipsEn: [
      "Carry high-factor biodegradable sunscreen and insect repellent, as mosquitoes can be active near salt lakes.",
      "Bring conservative clothing for walking through town streets, respecting the highly traditional local culture.",
      "Rent a local tricycle ('TukTuk') for a cheap, fun way to navigate between the oasis landmarks.",
      "Floating in the salt lakes is highly dehydrating; always shower immediately with fresh water and drink lots of fluids."
    ],
    tipsAr: [
      "احرص على ارتداء ملابس محتشمة عند التجول في شوارع البلدة احتراماً للثقافة المحلية التقليدية للغاية.",
      "استأجر تروسيكل محلي (توك توك) كوسيلة رخيصة وممتعة للتنقل بين معالم الواحة.",
      "الطفو في بحيرات الملح يسبب الجفاف الشديد؛ احرص دائماً على الاستحمام فوراً بالماء العذب وشرب الكثير من السوائل."
    ],
    bestTimeEn: "October to March is ideal. Days are warm and sunny while nights are cool and perfect for campfires. Avoid summer, when temperatures routinely exceed 42°C.",
    bestTimeAr: "أكتوبر إلى مارس هو الموسم المثالي. الأيام دافئة ومشمسة بينما الليالي باردة ومثالية لإشعال النيران. تجنب الصيف حيث تتجاوز الحرارة بانتظام 42 درجة مئوية.",
    nearByEn: [
      { name: "The Majestic Great Sand Sea", desc: "Towering golden dunes perfect for high-speed desert 4x4 safaris.", slug: "siwa-oasis-travel-guide" },
      { name: "Shali Fortress Ruins", desc: "The mud-brick castle located right in the center of the oasis.", slug: "siwa-oasis-travel-guide" }
    ],
    nearByAr: [
      { name: "بحر الرمال الأعظم المهيب", desc: "كثبان رملية ذهبية شاهقة مثالية لرحلات سفاري الدفع الرباعي الصحراوية السريعة.", slug: "siwa-oasis-travel-guide" },
      { name: "أطلال قلعة شالي الأثرية", desc: "القلعة المبنية من الكرشيف وتقع مباشرة في قلب الواحة.", slug: "siwa-oasis-travel-guide" }
    ],
    faqEn: [
      { q: "Is it safe to swim in the salt lakes?", a: "Yes! Swim in the deep active salt pans, but avoid getting the highly concentrated saltwater in your eyes or ears, as it will sting intensely." },
      { q: "Do locals in Siwa speak Arabic?", a: "Yes, all locals speak fluent Egyptian Arabic, although they speak their own Berber dialect (Siwi) among themselves." }
    ],
    faqAr: [
      { q: "هل السباحة في بحيرات الملح آمنة؟", a: "نعم! يمكنك السباحة والطفو في بحيرات الملح العميقة، ولكن تجنب ملامسة المياه شديدة الملوحة لعينيك أو أذنيك لتجنب الحرقة الشديدة." },
      { q: "هل يتحدث سكان سيوة اللغة العربية؟", a: "نعم، جميع السكان يتحدثون العربية بطلاقة، إلى جانب لغتهم الأمازيغية المحلية (السيوية) التي يتحدثون بها فيما بينهم." }
    ],
    ctaEn: {
      text: "Journey to the mystical sands of Siwa. Book your custom Western Desert expedition or Siwa Oasis safari package directly through our travel experts.",
      linkText: "Explore our Nile Cruise packages",
      url: "/#tours"
    },
    ctaAr: {
      text: "انطلق في رحلة إلى رمال سيوة الساحرة. احجز رحلتك الخاصة للصحراء الغربية أو باقة سفاري واحة سيوة مباشرة من خلال خبراء السفر لدينا.",
      linkText: "استكشف باقات كروز النيل الخاصة بنا",
      url: "/#tours"
    }
  },
  {
    slug: "fayoum-oasis-travel-guide",
    destination: "Fayoum",
    nameEn: "Fayoum",
    nameAr: "الفيوم",
    titleEn: "Fayoum Oasis Travel Guide: Ancient Whales, Waterfalls, and Pottery Art",
    titleAr: "دليل واحة الفيوم: حفريات الحيتان، شلالات الصحراء، وفنون الفخار في قرية تونس",
    subtitleEn: "Venture to a lush agricultural depression framed by prehistoric deserts and magic lakes",
    subtitleAr: "انطلق إلى منخفض زراعي مورق تحيط به صحراء ما قبل التاريخ والبحيرة السحرية",
    metaDescriptionEn: "The ultimate premium guide to Fayoum, Egypt. Discover Wadi El Hitan whale fossils, Tunis Village pottery, Wadi El Rayan waterfalls, and Magic Lake sandboarding.",
    metaDescriptionAr: "دليل السفر الشامل للفيوم، مصر. اكتشف حفريات وادي الحيتان، فخار قرية تونس، شلالات وادي الريان، والتزلج على الرمال في البحيرة السحرية.",
    keywordsEn: "Fayoum travel guide, Wadi El Hitan whales, Tunis Village pottery, Magic Lake Fayoum, Wadi El Rayan waterfalls, Karanis ruins, Fayoum day trip",
    keywordsAr: "دليل الفيوم, وادي الحيتان, قرية تونس الفخار, البحيرة السحرية الفيوم, شلالات وادي الريان, آثار كرانيس, رحلة الفيوم",
    heroImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Located just a hundred kilometers southwest of Cairo, Fayoum is Egypt's oldest city and a stunning geological anomaly. Fed by a canal from the Nile known since Pharaonic times as the Bahr Yussef, this massive, lush agricultural basin is filled with fruit orchards, vegetable fields, and historic wooden waterwheels, bordered directly by a dramatic, ancient desert landscape. Fayoum is a place of powerful, prehistoric stories. It is home to Egypt's only desert waterfalls, a stunning saltwater lake that changes colors depending on the sun, and a UNESCO World Heritage valley preserving the fossilized skeletons of hundreds of prehistoric whales that swam here forty million years ago. To plan an unforgettable weekend getaway, you can easily <a href='/tours?destination=Desert' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Book Desert Safari</a> from our travel counter.",
    introAr: "تقع الفيوم على بعد 100 كم فقط جنوب غرب القاهرة، وهي أقدم مدينة في مصر وواحدة من الظواهر الجيولوجية المذهلة. يمكنك بسهولة <a href='/tours?destination=Desert' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز سفاري الصحراء</a> واستكشاف وادي الحيتان والبحيرة السحرية بالفيوم.",
    historyEn: "Fayoum was the agricultural heart of Egypt during the Middle Kingdom, when pharaohs like Amenemhat III executed massive land reclamation and irrigation works, creating Lake Moeris (modern Lake Qarun). The region rose to artistic fame during the Roman period as the source of the breathtaking 'Fayoum Portraits'—exquisitely lifelike, realistic encaustic panel paintings of locals that were wrapped over the faces of mummies. Deep in the desert lies Wadi El Hitan (The Valley of Whales), a paleontological wonder containing the fossilized skeletons of the earliest sub-order of whales (Basilosaurus), preserving their evolutionary transition from land-dwelling mammals to ocean giants with fully intact hind legs and feet.",
    historyAr: "كانت الفيوم القلب الزراعي لمصر خلال الدولة الوسطى عندما قام ملوك مثل أمنمحات الثالث بمشاريع ري واستصلاح أراضٍ ضخمة شيدت بحيرة قارون الأثرية.",
    cultureEn: "Fayoum's culture is a rich mix of rural farming traditions, desert Bedouin life, and a vibrant contemporary art scene. The village of Tunis, perched on a hill overlooking Lake Qarun, has become Egypt's artistic capital. In the 1980s, Swiss ceramicist Evelyne Porret established a pottery school in the village, teaching local children the art of clay. Today, the village is filled with beautiful mud-brick villas, world-class pottery workshops, and galleries, hosting an annual international pottery festival that attracts artists from around the world.",
    cultureAr: "تعد ثقافة الفيوم مزيجاً رائعاً من التقاليد الريفية، حياة البدو الصحراوية، وحركة الفن المعاصر الناشطة. أصبحت قرية تونس العاصمة الفنية للواحة.",
    activitiesEn: [
      { title: "Walk Wadi El Hitan Paleontological Museum", desc: "Explore the open-air desert museum to see the spectacular fossilized skeletons of 40-million-year-old whales, sharks, and turtles lying in the sand." },
      { title: "Sandboard at Magic Lake & Visit Wadi El Rayan", desc: "Drive 4x4 vehicles over towering sand dunes to reach Magic Lake. Enjoy sandboarding down the dunes, and visit the nearby desert waterfalls of Wadi El Rayan." },
      { title: "Take a Pottery Workshop in Tunis Village", desc: "Visit the clay workshops in Tunis. Learn to shape pottery on a traditional wheel, and shop for beautifully painted plates, cups, and vases." }
    ],
    activitiesAr: [
      { title: "استكشاف وادي الحيتان والتحف الجيولوجية", desc: "تجول في المتحف المفتوح في الصحراء لمشاهدة الهياكل العظمية المتحجرة لحيتان وقروش وسلاحف عمرها 40 مليون عام مستلقية في الرمال الذهبية." },
      { title: "التزلج على الرمال في البحيرة السحرية وشلالات الريان", desc: "اركب سيارات الدفع الرباعي فوق الكثبان الرملية للوصول للبحيرة السحرية. استمتع بالتزلج من الكثبان المرتفعة، وقم بزيارة شلالات وادي الريان الصحراوية المجاورة." },
      { title: "المشاركة في ورشة عمل فخار بقرية تونس", desc: "قم بزيارة ورش الطين بقرية تونس. تعلم تشكيل الفخار على العجلة التقليدية، واشترِ الأطباق والأواني والمزهريات الملونة يدوياً." }
    ],
    foodEn: [
      { name: "Fayoumi Duck & Rice", desc: "Prized Egyptian duck roasted in clay ovens until crispy, seasoned with local spices, served over a bed of aromatic Egyptian rice with roasted nuts." },
      { name: "Qarun Lake Tilapia", desc: "Fresh lake tilapia seasoned with garlic, cumin, and hot green chili, grilled over natural wood fire, served with local tahini." }
    ],
    foodAr: [
      { name: "البط الفيومي بالأرز والخلطة", desc: "البط الفيومي الشهير المشوي في أفران الطين حتى الاحمرار والمقرمشة، والمتبل بالتوابل المحلية، ويقدم فوق أرز مصري مع المكسرات المحمصة." },
      { name: "سمك بحيرة قارون المشوي", desc: "سمك البلطي الطازج من البحيرة المتبل بالثوم والكمون والفلفل الأخضر الحار، والمشوي على نار الخشب الطبيعي." }
    ],
    hotelsEn: [
      { name: "Lazib Inn Resort & Spa, Tunis Village", tier: "Luxury", desc: "An exceptionally luxurious, boutique resort designed in traditional Nubian mud-brick style, featuring private pools, spectacular suites, and a premium spa overlooking Lake Qarun." },
      { name: "Byoum Cozy Hotel", tier: "Mid-Range", desc: "A modern, highly comfortable hotel located inside the Byoum lakeside community, featuring a beautiful pool and direct access to Qarun lake." }
    ],
    hotelsAr: [
      { name: "منتجع وسبا لازيب إن، قرية تونس", tier: "Luxury", desc: "فندق بوتيك فاخر للغاية مصمم بطراز نوبي رائع من الطوب الطيني، ويتميز بمسابح خاصة وأجنحة فاخرة مجهزة بأرقى وسائل الراحة وإطلالة على بحيرة قارون." },
      { name: "فندق بيوم المريح", tier: "Mid-Range", desc: "فندق عصري ومريح للغاية يقع داخل مجمع بيوم السكني على ضفاف البحيرة، ويتميز بمسبح جميل وإطلالة مباشرة على بحيرة قارون." }
    ],
    transportEn: "Fayoum is located 100km southwest of Cairo. The most convenient way to arrive is to book a private hotel car or 4x4 day trip from Cairo (which takes about 1.5 hours). Within the region, 4x4 vehicles are required to navigate the desert dunes of Wadi El Hitan and Magic Lake.",
    transportAr: "تقع الفيوم على بعد 100 كم جنوب غرب القاهرة. الطريقة الأكثر راحة للوصول هي حجز سيارة خاصة أو رحلة دفع رباعي يومية من القاهرة (تستغرق ساعة ونصف).",
    tipsEn: [
      "Rent a 4x4 vehicle with an experienced local desert driver, as passenger cars cannot reach Wadi El Hitan.",
      "Visit the Tunis Village pottery shops in the afternoon when artists are active in their studios.",
      "Wear sunglasses and long socks if you plan to try sandboarding down the dunes near Magic Lake.",
      "Bring warm jackets for winter evenings, as desert temperatures drop very quickly after sunset."
    ],
    tipsAr: [
      "احرص على حجز سيارة دفع رباعي مع سائق محلي خبير بالصحراء، حيث لا يمكن للسيارات العادية الوصول إلى وادي الحيتان.",
      "قم بزيارة محلات الفخار في قرية تونس بعد الظهر عندما يكون الفنانون نشطين في ورشهم الخاصة.",
      "ارتدِ نظارة شمسية وجوارب طويلة إذا كنت تخطط لتجربة التزلج على الرمال بالقرب من البحيرة السحرية."
    ],
    bestTimeEn: "October to April is the best time for pleasant outdoor exploration and hiking. Summer is extremely hot for walking in open desert valleys.",
    bestTimeAr: "أكتوبر إلى أبريل هو الوقت الأفضل للاستمتاع بالأنشطة الخارجية والمشي. الصيف حار للغاية للمشي في الوديان الصحراوية المفتوحة.",
    nearByEn: [
      { name: "Wadi El Hitan Valley of Whales", desc: "UNESCO World Heritage fossil site, located 1.5 hours deep in the desert.", slug: "fayoum-oasis-travel-guide" },
      { name: "Tunis Village and Lake Qarun", desc: "Perched art enclave overlooking the beautiful historic saltwater lake.", slug: "fayoum-oasis-travel-guide" }
    ],
    nearByAr: [
      { name: "محمية وادي الحيتان الأثرية", desc: "موقع حفريات مصنف كإرث عالمي لليونسكو، ويقع على بعد ساعة ونصف في عمق الصحراء.", slug: "fayoum-oasis-travel-guide" },
      { name: "قرية تونس وبحيرة قارون", desc: "واحة فنية مميزة تطل على بحيرة قارون التاريخية المالحة الرائعة.", slug: "fayoum-oasis-travel-guide" }
    ],
    faqEn: [
      { q: "How far is Fayoum from Cairo?", a: "Fayoum is approximately 100km southwest of Cairo, which takes about 1.5 to 2 hours of scenic drive through rural and desert roads." },
      { q: "Can I buy pottery directly from Tunis Village?", a: "Yes! There are dozens of local showrooms in the village where you can buy beautiful plates, cups, and custom ceramic art directly from the artists." }
    ],
    faqAr: [
      { q: "كم تبعد الفيوم عن القاهرة؟", a: "تبعد الفيوم حوالي 100 كم جنوب غرب القاهرة، وتستغرق الرحلة بالسيارة حوالي ساعة ونصف إلى ساعتين عبر الطرق الزراعية والصحراوية." }
    ],
    ctaEn: {
      text: "Discover the prehistoric secrets of Fayoum. Book your private day trip to Wadi El Hitan and Tunis Village, including 4x4 sand safari and pottery training.",
      linkText: "See all Cairo trips",
      url: "/#tours"
    },
    ctaAr: {
      text: "اكتشف أسرار ما قبل التاريخ في الفيوم. احجز رحلتك الخاصة ليوم واحد لوادي الحيتان وقرية تونس، تشمل سفاري الدفع الرباعي وتجربة صناعة الفخار.",
      linkText: "شاهد جميع رحلات القاهرة",
      url: "/#tours"
    }
  },
  {
    slug: "white-desert-travel-guide",
    destination: "White Desert",
    nameEn: "White Desert National Park",
    nameAr: "الصحراء البيضاء",
    titleEn: "The White Desert Travel Guide: Egypt's Surreal Cosmic Sahara",
    titleAr: "دليل الصحراء البيضاء: مشهد الفضاء الخارجي الساحر في مصر",
    subtitleEn: "Sleep under a canopy of billions of stars inside a natural chalk-sculpted gallery",
    subtitleAr: "نم تحت سقف من مليارات النجوم المتلألئة وسط منحوتات الطباشير الطبيعية المذهلة",
    metaDescriptionEn: "The complete premium travel guide to the White Desert National Park, Egypt. Learn about Black Desert, Crystal Mountain, Bahariya Oasis, and Bedouin camping.",
    metaDescriptionAr: "دليل السفر الشامل للمحمية الطبيعية للصحراء البيضاء، مصر. تعرف على الصحراء السوداء، جبل الكريستال، واحة البحرية، والتخييم البدوي.",
    keywordsEn: "White Desert Egypt, Bahariya Oasis guide, Black Desert Egypt, Crystal Mountain, desert camping Egypt, stargazing Sahara, Farafra Oasis",
    keywordsAr: "الصحراء البيضاء مصر, واحة البحرية, الصحراء السوداء مصر, جبل الكريستال, تخييم الصحراء, رصد النجوم الصحراء الكبرى, واحة الفرافرة",
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "The White Desert National Park of Egypt is a landscape that defies human imagination. Located in the Farafra depression of the Western Desert, this blindingly white chalk desert looks like a frozen, snow-covered wilderness dropped into the middle of the scorching Sahara. Over millions of years, fierce desert sandstorms and wind erosion have carved massive deposits of ancient marine limestone into bizarre, colossal organic sculptures that rise from the sand dunes like ghostly icebergs. It is a cosmic natural art gallery, where monuments shaped like giant mushrooms, chickens, sphinxes, and ice cream cones change color from blinding white in the midday sun to soft pastel pinks at sunset, and glow with an otherworldly luminescence under a full moon. Sleeping here under a sky so clear that the Milky Way appears as a solid glowing band is a bucket-list adventure that borders on the spiritual. To experience the best sand safaris, you can <a href='/tours?destination=Desert' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Book Desert Safari</a> from our website today.",
    introAr: "تعد المحمية الطبيعية للصحراء البيضاء في مصر مشهداً يتحدى الخيال البشري. يمكنك بسهولة <a href='/tours?destination=Desert' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز سفاري الصحراء</a> لخوض مغامرة خيالية والتخييم تحت النجوم.",
    historyEn: "Millions of years ago during the Late Cretaceous period, the entire Western Desert of Egypt lay at the bottom of a vast prehistoric ocean. Microscopic marine shells and skeletal remains accumulated on the ocean bed, forming a thick deposit of white chalk and limestone. As the ocean receded and the climate dried, desert winds became the primary sculptors. Adjacent to this white wonderland lies the Black Desert, a volcanic landscape of iron-covered dark hills, and Crystal Mountain, a unique geological ridge composed entirely of sparkling, ancient calcite crystals.",
    historyAr: "قبل ملايين السنين خلال العصر الطبشوري المتأخر، كانت الصحراء الغربية بأكملها تقع في قاع محيط ضخم ما قبل التاريخ. تراكمت القواقع البحرية المجهرية وبقايا الهياكل في قاع المحيط لتشكل ترسبات سميكة من الطباشير والحجر الجيري الأبيض.",
    cultureEn: "The culture of the Western Desert oases (Bahariya and Farafra) is deeply Bedouin, characterized by absolute self-reliance, high honor, and deep connection to the desert. The local guides possess exceptional knowledge of navigation across the trackless dunes, vehicle rescue, and desert survival. When camping in the desert, they prepare food cooked over natural wood embers, sing traditional Bedouin folk songs accompanied by the oud, and share stories of oasis history around the warmth of the campfire.",
    cultureAr: "ثقافة واحات الصحراء الغربية (البحرية والفرافرة) بدوية بامتياز، وتتميز بالاعتماد الكامل على النفس والشهامة وكرم الضيافة الاستثنائي.",
    activitiesEn: [
      { title: "Embark on a 4x4 Desert Safari", desc: "Race over massive sand dunes in modified 4x4 vehicles. Visit the volcanic cones of the Black Desert and climb the basalt hills for panoramic views." },
      { title: "Overnight Bedouin Camping & Stargazing", desc: "Set up camp next to the famous Mushroom chalk formation. Dine on chicken cooked in Bedouin ovens under the sand, and sleep under a sky of billions of sparkling stars." },
      { title: "Visit Crystal Mountain & Bahariya Hot Springs", desc: "Explore the shimmering caves of Crystal Mountain. After a long desert expedition, soak your body in the natural, mineral-rich hot springs of Bahariya Oasis." }
    ],
    activitiesAr: [
      { title: "القيام بسفاري الدفع الرباعي في الصحراء والرمال", desc: "تسابق فوق الكثبان الرملية الضخمة بسيارات الدفع الرباعي المجهزة. قم بزيارة التلال البركانية للصحراء السوداء وتسلق قممها لمشاهدة إطلالة بانورامية رائعة." },
      { title: "المبيت والتخييم البدوي ورصد النجوم", desc: "أقم مخيمك بجوار صخرة الفطر الطباشيرية الشهيرة. تناول عشاء الدجاج المطهو في الأفران البدوية تحت الرمال (الزرب)، ونم تحت سماء مرصعة بمليارات النجوم." },
      { title: "زيارة جبل الكريستال وعيون المياه الساخنة بالبحرية", desc: "استكشف الكهوف المتلألئة لجبل الكريستال. وبعد رحلة صحراوية طويلة، استحم في عيون المياه الكبريتية الساخنة الطبيعية الغنية بالمعادن في واحة البحرية." }
    ],
    foodEn: [
      { name: "Zarb (Underground Desert BBQ)", desc: "A legendary Bedouin feast—seasoned chicken and vegetables placed on metal racks, lowered into steel drums buried deep in the hot desert sand, covered with charcoal and blankets, slow-roasted for hours until incredibly tender and smokey." },
      { name: "Bedouin Dates & Mint Tea", desc: "Plump dates dried in the desert sun, served alongside sweet, strong black tea brewed with fresh desert mint over hot firewood embers." }
    ],
    foodAr: [
      { name: "الزرب البدوي الصحراوي", desc: "وليمة بدوية أسطورية - دجاج متبل وخضروات توضع على رفوف معدنية، وتُنزل داخل برميل مدفون تحت الرمال الساخنة مغطى بالفحم والبطانيات ويطهى ببطء لساعات." },
      { name: "البلح البدوي وشاي الحطب", desc: "البلح السيوي الحلو المجفف تحت شمس الصحراء، يقدم بجانب الشاي الأسود القوي المطهو مع النعناع الصحراوي على جمر الحطب الطبيعي." }
    ],
    hotelsEn: [
      { name: "International Hot Spring Hotel, Bahariya", tier: "Mid-Range", desc: "A highly comfortable desert hotel located in Bahariya Oasis, featuring private natural hot spring pools, clean traditional rooms, and expert safari coordination." },
      { name: "Bedouin Valley Eco-Lodge", tier: "Budget", desc: "A beautiful, rustic eco-lodge built overlooking the Bahariya hills, offering cozy rooms and authentic local desert hospitality." }
    ],
    hotelsAr: [
      { name: "فندق عيون المياه الساخنة الدولي، البحرية", tier: "Mid-Range", desc: "فندق صحراوي مريح للغاية يقع في واحة البحرية، ويتميز بمسابح طبيعية خاصة كبريتية، وغرف نظيفة وتنسيق رحلات سفاري ممتازة." },
      { name: "فندق وادي البدو البيئي", tier: "Budget", desc: "فندق بيئي بسيط وجميل مبني بإطلالة على تلال واحة البحرية، ويوفر غرفاً مريحة وضيافة صحراوية محلية أصيلة." }
    ],
    transportEn: "The White Desert is located 370km southwest of Cairo. The primary way to arrive is to book a private hotel 4x4 expedition starting from Cairo (which takes about 4.5 hours to Bahariya Oasis, and another 2 hours to the National Park). Modified 4x4 vehicles are mandatory as public passenger cars cannot navigate the deep soft sands of the park.",
    transportAr: "تقع الصحراء البيضاء على بعد 370 كم جنوب غرب القاهرة. الطريقة الأساسية للوصول هي حجز رحلة دفع رباعي خاصة تنطلق من القاهرة (تستغرق 4.5 ساعة لواحة البحرية وساعتين إضافيتين للمحمية).",
    tipsEn: [
      "Always travel with a licensed Bedouin guide and experienced driver in a well-equipped 4x4 vehicle.",
      "Bring high-power power banks to charge your electronic devices, as there is zero electricity in the national park.",
      "Use wet wipes and a high-factor sunscreen; desert water is extremely scarce and precious during expeditions.",
      "Do not litter! Keep the national park perfectly clean by carrying all waste back to the oasis."
    ],
    tipsAr: [
      "احرص دائماً على السفر برفقة مرشد بدوي مرخص وسائق خبير في سيارة دفع رباعي مجهزة بالكامل.",
      "أحضر معك بنوك طاقة (شواحن متنقلة) قوية لشحن أجهزتك الإلكترونية، حيث لا توجد كهرباء داخل المحمية الطبيعية.",
      "حافظ على نظافة المحمية! لا تترك أي مخلفات خلفك واحمل جميع النفايات معك مرة أخرى للواحة."
    ],
    bestTimeEn: "October to April is the best time for comfortable camping, with beautiful daytime temperatures and fresh evenings. Winter nights can get very cold (around 5°C).",
    bestTimeAr: "أكتوبر إلى أبريل هو الوقت الأفضل للتخييم المريح، حيث درجات الحرارة نهاراً معتدلة وليلاً منعشة.",
    nearByEn: [
      { name: "The Surreal Black Desert", desc: "Volcanic basalt-draped hills located 1 hour north of the white formations.", slug: "black-desert-travel-guide" },
      { name: "Bahariya Oasis Hot Springs", desc: "Natural therapeutic mineral springs perfect for relaxing after camping.", slug: "white-desert-travel-guide" }
    ],
    nearByAr: [
      { name: "الصحراء السوداء الساحرة", desc: "تلال بركانية مغطاة بالبازلت الأسود وتقع على بعد ساعة شمال التشكيلات البيضاء.", slug: "black-desert-travel-guide" },
      { name: "عيون واحة البحرية الاستشفائية", desc: "عيون معدنية كبريتية علاجية طبيعية مثالية للاسترخاء بعد عناء التخييم.", slug: "white-desert-travel-guide" }
    ],
    faqEn: [
      { q: "Is camping in the White Desert safe?", a: "Yes, camping is extremely safe. The local Bedouin guides have generations of experience in navigating the desert and securing camp setups." },
      { q: "What should I wear for sleeping in the desert?", a: "Bring thermal layers, a warm fleece jacket, a beanie, and heavy socks, as desert temperatures drop dramatically during the night." }
    ],
    faqAr: [
      { q: "هل التخييم في الصحراء البيضاء آمن؟", a: "نعم، التخييم آمن للغاية. يمتلك المرشدون البدو المحليون أجيالاً من الخبرة في الملاحة الصحرائية وتأمين المخيمات وحراستها." }
    ],
    ctaEn: {
      text: "Embark on a surreal cosmic journey. Book your premium 2-day White Desert private expedition starting from Cairo or Giza directly with our expert planners.",
      linkText: "See all Cairo trips",
      url: "/#tours"
    },
    ctaAr: {
      text: "انطلق في رحلة كونية ساحرة. احجز رحلتك الاستكشافية الخاصة والمميزة لمدة يومين للصحراء البيضاء من القاهرة أو الجيزة مباشرة مع خبرائنا.",
      linkText: "شاهد جميع رحلات القاهرة",
      url: "/#tours"
    }
  },
  {
    slug: "black-desert-travel-guide",
    destination: "Black Desert",
    nameEn: "Black Desert",
    nameAr: "الصحراء السوداء",
    titleEn: "The Black Desert Travel Guide: Volcanic Peaks and Basalt Craters",
    titleAr: "دليل الصحراء السوداء: القمم البركانية وفوهات البازلت الأسود في مصر",
    subtitleEn: "Witness a spectacular, dark basalt-draped volcanic landscape inside the Western Sahara",
    subtitleAr: "شاهد التلال البركانية المذهلة المغطاة بالبازلت الأسود في قلب الصحراء الغربية",
    metaDescriptionEn: "The ultimate luxury guide to the Black Desert, Egypt. Discover basalt-covered volcanic hills, therapeutic thermal springs, and desert off-road safaris.",
    metaDescriptionAr: "دليل السفر الشامل للصحراء السوداء، مصر. اكتشف التلال البركانية المغطاة بالبازلت، عيون المياه الكبريتية، ورحلات سفاري الطرق الوعرة.",
    keywordsEn: "Black Desert Egypt, Bahariya Oasis safari, volcanic hills Sahara, basalt crater Egypt, off-road desert safari",
    keywordsAr: "الصحراء السوداء مصر, سفاري واحة البحرية, التلال البركانية الصحراء الكبرى, فوهة البازلت مصر, سفاري الطرق الوعرة",
    heroImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Nestled in the Bahariya depression of Egypt's massive Western Desert, the Black Desert is a spectacular, dramatic landscape of towering volcanic hills covered entirely in dark basalt stones. It looks like a mystical charred wasteland dropped into the middle of the glowing golden Sahara sands. Formed millions of years ago by volcanic eruptions, these spectacular dark mounds provide a breathtaking, alien sight. Climbing the famous English Mountain reveals a sweeping panoramic view of black basalt craters stretching endlessly to the horizon. To explore this dramatic landscape, you can easily <a href='/tours?destination=Desert' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Book Desert Safari</a> directly through our hotel specialists.",
    introAr: "تقع الصحراء السوداء في منخفض الواحات البحرية، وهي عبارة عن سلسلة من التلال البركانية المدهشة المغطاة بالكامل بصخور البازلت السوداء القاتمة. يمكنك بسهولة <a href='/tours?destination=Desert' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز سفاري الصحراء</a> وخوض جولة سفاري الدفع الرباعي البديعة.",
    historyEn: "The Black Desert was formed during the Jurassic period by intense volcanic activity. Hot basalt lava poured across the limestone basin, cooling down to form dense black volcanic rocks. Over millennia, sand dunes piled up around the basalt craters, creating the beautiful, high-contrast black-and-gold mounds we see today.",
    historyAr: "نشأت الصحراء السوداء نتيجة للأنشطة البركانية المكثفة خلال العصر الجوراسي، حيث تدفقت الحمم البازلتية الساخنة فوق صخور الحجر الجيري، ومع مرور الوقت تحللت لتغطي التلال بغطاء أسود فريد.",
    cultureEn: "Like the neighboring oases, the Black Desert is home to the proud Bahariya Bedouins, who manage desert camps, prepare food in traditional underground ovens, and guide tourists across the trackless basalt tracks with absolute safety.",
    cultureAr: "ثقافة الصحراء السوداء مرتبطة بالبدو الرحل في الواحات البحرية، الذين يقودون قوافل الدفع الرباعي ويوفرون الخيام البدوية والاستضافة البسيطة الدافئة.",
    activitiesEn: [
      { title: "Climb the English Mountain Peak", desc: "Hike to the peak of the highest volcanic hill in the Black Desert to see a magnificent panoramic view of the volcanic craters." },
      { title: "Explore Crystal Mountain Shimmer", desc: "Visit Crystal Mountain, a unique geological ridge composed entirely of sparkling, ancient calcite crystals formed inside a natural desert cave." }
    ],
    activitiesAr: [
      { title: "تسلق قمة جبل الإنجليز البركاني", desc: "امشِ وصعد لقمة جبل الإنجليز وهو التل البركاني الأعلى في الصحراء السوداء لرؤية بانورامية لفوهات البراكين الخامدة." },
      { title: "تأمل بلورات جبل الكريستال المتلألئة", desc: "قم بزيارة جبل الكريستال الأثري الذي يمثل صخرة كاملة تشكلت من كالسيت الكريستال اللامع المتوهج تحت أشعة الشمس." }
    ],
    foodEn: [
      { name: "Bedouin Charcoal Baked Bread (Mella)", desc: "Traditional flatbread baked on hot flat stones covered with glowing coals and clean sand, served with sweet mountain honey." }
    ],
    foodAr: [
      { name: "خبز الملة البدوي الساخن", desc: "الخبز البدوي التقليدي الذي يُخبز مباشرة على الأحجار الساخنة المغطاة بالجمر والرماد ويقدم مع العسل أو السمن." }
    ],
    hotelsEn: [
      { name: "International Hot Spring Hotel", tier: "Mid-Range", desc: "Featuring therapeutic warm mineral springs and clean rooms inside Bahariya Oasis." }
    ],
    hotelsAr: [
      { name: "فندق عيون المياه الساخنة الدولي", tier: "Mid-Range", desc: "يتميز بمسابح المياه المعدنية الدافئة والغرف المريحة والنظيفة بقلب واحة البحرية." }
    ],
    transportEn: "Located 350km southwest of Cairo, the Black Desert is best explored as part of a 4x4 private hotel desert safari starting from Cairo.",
    transportAr: "تقع الصحراء السوداء على بعد 350 كم جنوب غرب القاهرة، وأفضل وسيلة لزيارتها هي باقة سفاري الدفع الرباعي الخاصة من فندقنا.",
    tipsEn: [
      "Wear sturdy hiking shoes; the basalt stones can be sharp and loose on the hills.",
      "Bring polarized sunglasses to fully appreciate the high-contrast black basalt and golden sand scenery."
    ],
    tipsAr: [
      "ارتدِ حذاء مشي متين وقوي؛ حيث يمكن لصخور البازلت أن تكون حادة ومتناثرة على منحدرات التلال."
    ],
    bestTimeEn: "October to April. Avoid summer as desert heat gets intense on the black rocks.",
    bestTimeAr: "أكتوبر إلى أبريل. تجنب الصيف حيث تمتص الصخور البازلتية السوداء حرارة الشمس الشديدة وتصبح لافحة.",
    nearByEn: [
      { name: "The Surreal White Desert", desc: "Blinding white chalk monoliths located 1 hour south.", slug: "white-desert-travel-guide" }
    ],
    nearByAr: [
      { name: "محمية الصحراء البيضاء السحرية", desc: "صخور الطباشير البيضاء الناصعة المدهشة وتقع على بعد ساعة جنوباً.", slug: "white-desert-travel-guide" }
    ],
    faqEn: [
      { q: "Is the Black Desert volcanic?", a: "Yes, the mounds are extinct volcanic cones that erupted millions of years ago, scattering black basalt stones over the sand." }
    ],
    faqAr: [
      { q: "هل الصحراء السوداء بركانية بالفعل؟", a: "نعم، التلال عبارة عن فوهات بركانية خامدة منذ ملايين السنين قذفت بصخور البازلت الأسود على الرمال الذهبية." }
    ],
    ctaEn: {
      text: "Embark on an off-road volcanic adventure. Book your private 4x4 safari to the Black & White Deserts directly through our experts.",
      linkText: "See all Cairo trips",
      url: "/#tours"
    },
    ctaAr: {
      text: "انطلق في مغامرة التلال البركانية. احجز سفاري الدفع الرباعي الخاصة للصحراء السوداء والبيضاء مباشرة من خبرائنا.",
      linkText: "شاهد جميع رحلات القاهرة",
      url: "/#tours"
    }
  },
  {
    slug: "saint-catherine-travel-guide",
    destination: "Saint Catherine",
    nameEn: "Saint Catherine",
    nameAr: "سانت كاترين وجبل موسى",
    titleEn: "Saint Catherine Travel Guide: Sacred Mountains and the Burning Bush",
    titleAr: "دليل سانت كاترين: الجبال المقدسة ودير سانت كاترين وشجرة العليقة",
    subtitleEn: "Embark on a spiritual pilgrimage to Mount Sinai and the oldest continuously active monastery",
    subtitleAr: "انطلق في رحلة روحية مهيبة لتسلق جبل موسى ودير سانت كاترين الأقدم في العالم",
    metaDescriptionEn: "The ultimate travel guide to Saint Catherine and Mount Sinai, Egypt. Learn about the Burning Bush, Moses Mountain sunrise hike, and ancient manuscripts.",
    metaDescriptionAr: "دليل السفر الشامل لسانت كاترين وجبل موسى، مصر. تعرف على شجرة العليقة المقدسة، صعود جبل سيناء فجراً، والمخطوطات الأثرية.",
    keywordsEn: "Saint Catherine Egypt, Mount Sinai hike, Burning Bush monastery, Moses Mountain pilgrimage, oldest Christian monastery, Sinai trekking",
    keywordsAr: "سانت كاترين مصر, صعود جبل موسى, دير شجرة العليقة, رحلة جبل سيناء, أقدم دير مسيحي, المشي في سيناء",
    heroImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Nestled high inside the rugged granite peaks of the Sinai Peninsula lies Saint Catherine—a place of profound spiritual power and biblical history. Here stands Mount Sinai (Jebel Musa), the legendary peak where Moses is believed to have received the Ten Commandments from God. At the foot of the mountain sits Saint Catherine's Monastery, a UNESCO World Heritage site and the oldest continuously inhabited Christian monastery in the world, guarding the legendary Burning Bush. Climbing Mount Sinai under a star-strewn sky to witness the sunrise illuminate the endless red granite peaks below is an adventure that defies description. To coordinate your pilgrimage, you can <a href='/tours?destination=Sinai' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Book Desert Safari</a> or contact our hotel travel planners today.",
    introAr: "تقع مدينة سانت كاترين في مرتفعات جبال جنوب سيناء، وهي بقعة مقدسة ذات قيمة روحية وتاريخية بالغة. يمكنك بسهولة <a href='/tours?destination=Sinai' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز سفاري الصحراء</a> والانطلاق لتسلق جبل موسى فجراً.",
    historyEn: "Founded in the 6th century CE by Byzantine Emperor Justinian I, Saint Catherine's Monastery was built around the chapel of the Burning Bush, which was originally erected by Empress Helena in the 4th century. The monastery has survived wars and empires, protected by a decree (the 'Achtiname') signed by the Prophet Muhammad himself, guaranteeing the safety of the monks.",
    historyAr: "شيد الإمبراطور البيزنطي جوستنيان الأول دير سانت كاترين في القرن السادس الميلادي لحماية الرهبان وحراسة شجرة العليقة المقدسة التي كلم الله عندها نبيه موسى.",
    cultureEn: "The region is home to the Jebeliya Bedouins (the 'Mountain Bedouins'), descendants of the Roman soldiers sent by Emperor Justinian to protect the monastery. They have lived in these red valleys for 1,500 years, working as guardians, mountain guides, and keepers of spectacular high-altitude fruit orchards.",
    cultureAr: "يسكن المنطقة قبيلة الجبالية البدوية العريقة، وهم أحفاد الحراس الرومانيين الذين بعثهم الإمبراطور جوستنيان لحراسة الدير، ويعملون اليوم كأفضل أدلة للمرتفعات الجبلية.",
    activitiesEn: [
      { title: "Climb Mount Sinai for Sunrise", desc: "Hike the 7km Camel Path under a canopy of stars. Reach the summit (2,285m) at dawn to watch the rising sun illuminate the endless red granite peaks." },
      { title: "Visit Saint Catherine's Monastery", desc: "Explore the ancient church, behold the legendary Burning Bush, and visit the museum housing ancient icons and Byzantine manuscripts second only to the Vatican." }
    ],
    activitiesAr: [
      { title: "صعود جبل موسى ورصد شروق الشمس", desc: "اسلك طريق الجمال الجبلي لمسافة 7 كم تحت النجوم البراقة. صل للقمة (2285 متراً) فجراً لتأمل الشروق البديع وهو يضيء جبال سيناء الحمراء." },
      { title: "زيارة دير سانت كاترين وشجرة العليقة", desc: "استكشف الكنيسة الكبرى الأثرية، وشاهد شجرة العليقة الخضراء المقدسة، وزر قاعة الأيقونات الفنية والمخطوطات النادرة." }
    ],
    foodEn: [
      { name: "Sinai Mountain Herb Tea & Bread", desc: "Warm flatbread baked by Jebeliya Bedouins over wood coals, served with wild mountain thyme tea and sweet dates." }
    ],
    foodAr: [
      { name: "فراشيح البدو وشاي الحبق الجبلي", desc: "الفطير البدوي الرقيق المخبوز على صاج الحطب ويقدم ساخناً مع شاي الحبق المهدئ." }
    ],
    hotelsEn: [
      { name: "Sheikh Moussa Bedouin Guesthouse", tier: "Budget", desc: "A cozy, authentic Bedouin guesthouse offering clean traditional rooms, warm hospitality, and direct mountain guides coordination." }
    ],
    hotelsAr: [
      { name: "دار ضيافة الشيخ موسى البدوية", tier: "Budget", desc: "دار ضيافة بدوية دافئة وجميلة توفر غرفاً نظيفة وضيافة بدوية عائلية ممتازة بالقرب من الدير." }
    ],
    transportEn: "Located 230km north of Sharm El Sheikh, Saint Catherine is best reached via a private hotel transfer or tourist coach (which takes about 2.5 hours).",
    transportAr: "تبعد سانت كاترين حوالي 230 كم شمال شرم الشيخ. أفضل وسيلة للوصول هي حجز سيارة خاصة من فندقنا (حوالي ساعتين ونصف).",
    tipsEn: [
      "Bring extremely warm winter layers (jacket, beanie, gloves) as summit temperatures routinely drop below freezing in winter.",
      "Wear sturdy hiking shoes with a good grip; the final 750 stone steps ('Steps of Penitence') are steep and uneven."
    ],
    tipsAr: [
      "أحضر معك ملابس شتوية ثقيلة للغاية (سترة، قبعة، قفازات)؛ حيث تنخفض درجات الحرارة على القمة لتحت الصفر شتاءً."
    ],
    bestTimeEn: "October to April. The weather is cool and perfect for climbing. Avoid summer midday climbs as the open granite peaks offer zero shade.",
    bestTimeAr: "أكتوبر إلى أبريل هو الموسم الأفضل لل تسلق المريح. تجنب الصيف ظهراً حيث تكون الصخور لافحة الحرارة.",
    nearByEn: [
      { name: "The Bohemian Town of Dahab", desc: "A laid-back seaside diving paradise located just 2 hours drive east.", slug: "dahab-travel-guide" },
      { name: "Sharm El Sheikh Coastal Resorts", desc: "Vibrant beach nightlife and premium diving spots, 2.5 hours south.", slug: "sharm-el-sheikh-travel-guide" }
    ],
    nearByAr: [
      { name: "مدينة دهب البوهيمية", desc: "ملاذ غوص ساحلي مريح يقع على بعد ساعتين بالسيارة شرقاً.", slug: "dahab-travel-guide" },
      { name: "منتجعات شرم الشيخ الساحلية", desc: "حياة ليلية نابضة بالحياة ومواقع غوص ممتازة، على بعد ساعتين ونصف جنوباً.", slug: "sharm-el-sheikh-travel-guide" }
    ],
    faqEn: [
      { q: "How difficult is the hike up Mount Sinai?", a: "The climb is a moderate 7km hike on a wide, winding dirt camel path, taking about 2.5 to 3 hours. The final section consists of 750 steep stone steps which require a slower pace and extra care." },
      { q: "What is the history of the Burning Bush?", a: "The Burning Bush inside St. Catherine's Monastery is believed to be the exact plant from which God spoke to Moses. It is a rare species of bramble native to Sinai, and attempts to transplant it elsewhere have historically failed." },
      { q: "Are there facilities on the mountain trail?", a: "Yes, there are several Bedouin-run rest huts along the trail selling hot mint tea, water, snacks, and renting thick woolen blankets and mattresses for the cold summit." }
    ],
    faqAr: [
      { q: "ما هي صعوبة صعود جبل موسى؟", a: "الصعود عبارة عن مشي متوسط لمسافة 7 كم على طريق ممهد للجمال يستغرق حوالي ساعتين ونصف إلى 3 ساعات. ويتكون الجزء الأخير من 750 درجة حجرية شديدة الانحدار تتطلب الحذر." },
      { q: "ما هو تاريخ شجرة العليقة المقدسة؟", a: "يُعتقد أن شجرة العليقة داخل الدير هي النبات ذاته الذي كلم الله عنده نبيه موسى. وهي فصيلة نادرة تنمو فقط في سيناء وفشلت محاولات زرعها في مكان آخر." },
      { q: "هل توجد مرافق على طول مسار صعود الجبل؟", a: "نعم، توجد عدة استراحات بدوية على طول الطريق تبيع الشاي والماء والوجبات الخفيفة، وتقدم بطانيات صوفية دافئة للإيجار لمواجهة برودة القمة." }
    ],
    ctaEn: {
      text: "Experience the profound spiritual energy of Mount Sinai at sunrise and tour the world's oldest operating Christian monastery with our private premium guides.",
      linkText: "Book Saint Catherine Pilgrimage",
      url: "/#tours"
    },
    ctaAr: {
      text: "اختبر الطاقة الروحية العميقة لجبل موسى عند شروق الشمس وزر أقدم دير مسيحي يعمل باستمرار مع أدلتنا الخاصة الممتازة.",
      linkText: "احجز رحلة سانت كاترين",
      url: "/#tours"
    }
  },
  {
    slug: "marsa-alam-travel-guide",
    destination: "Marsa Alam",
    nameEn: "Marsa Alam",
    nameAr: "مرسى علم",
    titleEn: "Marsa Alam Travel Guide: The Pristine Coral Reef Frontier",
    titleAr: "دليل مرسى علم: واحة الشعاب المرجانية البكر والبحار الفيروزية",
    subtitleEn: "Submerge yourself in the crystal-clear waters of Elphinstone Reef and meet wild dugongs",
    subtitleAr: "اغطس في شعاب الفنستون الأسطورية وتأمل أبقار البحر والسلحفاة البرية النادرة",
    metaDescriptionEn: "The ultimate premium guide to Marsa Alam, Egypt. Discover Elphinstone Reef, Abu Dabbab bay, wild dugongs, spinner dolphins, and luxury eco-resorts.",
    metaDescriptionAr: "دليل السفر الشامل لمرسى علم، مصر. اكتشف شعاب الفنستون، خليج أبو دباب، السلاحف البحرية العملاقة، أبقار البحر (الدوجونج)، والمنتجعات الفاخرة.",
    keywordsEn: "Marsa Alam travel, Elphinstone Reef diving, Abu Dabbab dugong, dolphin house Samadai, Red Sea luxury resorts, Marsa Alam diving",
    keywordsAr: "دليل مرسى علم, غوص شعاب الفنستون, دوجونج أبو دباب, بيت الدلافين صمداي, منتجعات البحر الأحمر الفاخرة",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1629813589332-9cb77353f868?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Located in Egypt's deep south, where the Eastern Sahara meets the sparkling, untouched waters of the Red Sea, lies Marsa Alam—the ultimate frontier of pristine marine biodiversity. Far less commercialized than other resort towns, Marsa Alam is a world-class sanctuary for scuba divers, nature lovers, and eco-travelers looking for untouched coral reefs. It is home to the legendary Elphinstone Reef—a vertical deep-sea wall famous for sightings of oceanic whitetip sharks and manta rays—and the peaceful shallow seagrass bays of Abu Dabbab, home to giant green sea turtles and the rare, gentle dugong (sea cow). To experience the ultimate marine safari, you can <a href='/tours?destination=Hurghada' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Book Hurghada Adventure</a> or explore Marsa Alam dynamic packages on our portal.",
    introAr: "تقع مرسى علم في أقصى جنوب البحر الأحمر، وهي عبارة عن ملاذ طبيعي بكر يضم أندر فصائل الكائنات البحرية والشعاب المرجانية الساحرة. يمكنك بسهولة <a href='/tours?destination=Hurghada' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز مغامرة البحر الأحمر</a> والتمتع برياضة الغوص.",
    historyEn: "Marsa Alam was famous in antiquity for its rich mineral deposits, particularly gold and emeralds mined from the surrounding Eastern Desert hills. It remained a quiet fishing harbor until the opening of Marsa Alam International Airport in 2001, which catalyzed eco-conscious premium resorts along its 100km shoreline.",
    historyAr: "اشتهرت مرسى علم في العصور القديمة بمناجم الفحم والذهب والزمرد في الجبال المحيطة بالصحراء الشرقية، وبقيت قرية هادئة حتى افتتاح مطارها الدولي الذي اجتذب الفنادق البيئية الراقية.",
    cultureEn: "The region is home to the proud Ababda Bedouins, who preserve ancient desert tracking skills, camel breeding, and high-hospitality traditions. Their local crafts, featuring handmade leather goods and silver jewelry, show a rich southern heritage.",
    cultureAr: "يسكن المنطقة قبائل العبابدة والبشارية البدوية العريقة، ويشتهرون بمهارات الملاحة الصحراوية، وكرم الضيافة وتقديم القهوة التقليدية (الجبنة) للضيوف.",
    activitiesEn: [
      { title: "Dive with Sharks at Elphinstone Reef", desc: "Embark on an advanced scuba diving tour to Elphinstone Reef to see vertical coral walls drop into the deep blue, surrounded by oceanic whitetip sharks and hammerheads." },
      { title: "Meet Wild Dugongs at Abu Dabbab Bay", desc: "Snorkel the crystal-clear seagrass meadows of Abu Dabbab Bay. Stand face-to-face with giant green sea turtles and the rare, friendly dugong." }
    ],
    activitiesAr: [
      { title: "الغوص في شعاب الفنستون الأسطورية", desc: "قم بجولة غوص احترافية لشعاب الفنستون لتأمل حوائط المرجان العمودية والسباحة بجوار القروش والأسماك الكبيرة." },
      { title: "رؤية أبقار البحر في خليج أبو دباب", desc: "مارس السنوركلينج فوق الحشائش البحرية بخليج أبو دباب لتأمل السلاحف العملاقة وأبقار البحر (الدوجونج) النادرة." }
    ],
    foodEn: [
      { name: "Bedouin Gabana Coffee", desc: "Traditional coffee roasted with fresh ginger and cardamom in a clay pot over hot wood embers, served in tiny porcelain cups." }
    ],
    foodAr: [
      { name: "قهوة الجبنة البدوية بالزنجبيل", desc: "قهوة بدوية تقليدية تُحمص حبوبها وتُغلى مع الزنجبيل والحبهان في إناء فخاري خاص فوق الحطب وتقدم ساخنة." }
    ],
    hotelsEn: [
      { name: "The Palace Port Ghalib", tier: "Luxury", desc: "A spectacular, palace-style luxury resort nestled directly inside Port Ghalib marina, offering royal suites, private lagoons, and high-end dining." }
    ],
    hotelsAr: [
      { name: "فندق قصر بورت غالب الفاخر", tier: "Luxury", desc: "منتجع فاخر للغاية مبني بطراز قصر عربي رائع داخل مارينا بورت غالب، ويوفر غرفاً ملكية ومطاعم فاخرة." }
    ],
    transportEn: "Marsa Alam is located 280km south of Hurghada. The fastest option is a direct domestic flight, or a private 3-hour car transfer south from Hurghada.",
    transportAr: "تبعد مرسى علم حوالي 280 كم جنوب الغردقة. يمكن الوصول طيراناً أو بحجز سيارة خاصة من فندقنا (حوالي 3 ساعات).",
    tipsEn: [
      "Always hire a certified local guide or join a dive boat to visit Elphinstone Reef, as deep-sea currents can be exceptionally strong.",
      "Bring reef-safe mineral sunscreen and avoid touching any coral reef or marine life while snorkeling.",
      "Keep an eye out for Abu Dabbab's green sea turtles—stay at a respectful distance and never try to ride or touch them."
    ],
    tipsAr: [
      "احرص دائماً على مرافقة مدرب غوص معتمد عند زيارة شعاب الفنستون بسبب التيارات البحرية القوية.",
      "استخدم واقي الشمس الصديق للبيئة وتجنب لمس الشعاب المرجانية أو الكائنات البحرية تماماً."
    ],
    bestTimeEn: "October to April is the absolute best time for mild air temperatures. For water visibility, spring and autumn offer excellent diving conditions.",
    bestTimeAr: "الفترة من أكتوبر إلى أبريل هي الأفضل للاستمتاع بجو معتدل ولطيف، بينما يوفر فصلا الربيع والخريف أفضل ظروف للغوص والرؤية المائية.",
    nearByEn: [
      { name: "Pristine Qulaan Mangroves & El Nayzak", desc: "A spectacular natural rock pool and coastal mangroves, located 1.5 hours south.", slug: "marsa-alam-travel-guide" },
      { name: "The Imperial City of Luxor", desc: "The ancient capital of Thebes, reachable via a scenic 4.5-hour desert road trip.", slug: "luxor-travel-guide" }
    ],
    nearByAr: [
      { name: "شاطئ القلعان والنيزك الطبيعي", desc: "حمام سباحة طبيعي مذهل في الصخر وغابات منجروف ساحلية، على بعد ساعة ونصف جنوباً.", slug: "marsa-alam-travel-guide" },
      { name: "مدينة الأقصر التاريخية", desc: "العاصمة القديمة طيبة، يمكن الوصول إليها عبر رحلة صحراوية مدتها 4 ساعات ونصف.", slug: "luxor-travel-guide" }
    ],
    faqEn: [
      { q: "Where can I see the rare dugong in Marsa Alam?", a: "Dugongs are regularly sighted feeding on seagrass at Abu Dabbab Bay and Marsa Mubarak. Booking a guided snorkeling boat tour increases your chances of swimming alongside these gentle giants." },
      { q: "Is Marsa Alam suitable for beginner divers?", a: "Yes! While famous for advanced deep-sea sites like Elphinstone, Marsa Alam has dozens of shallow, sheltered bays with pristine house reefs directly accessible from the sandy shore, perfect for beginners." },
      { q: "What is the Nayzak pool?", a: "The Nayzak is a natural pool carved out of the coastal reef, filled with crystal-clear turquoise waters. Local legend says it was formed by a meteor strike, making it a highly popular swimming spot." }
    ],
    faqAr: [
      { q: "أين يمكنني رؤية أبقار البحر (الدوجونج) النادرة؟", a: "تُشاهد أبقار البحر بانتظام وهي تتغذى على الحشائش البحرية في خليج أبو دباب ومرسى مبارك. حجز جولة سنوركلينج يزيد من فرص السباحة معها." },
      { q: "هل مرسى علم مناسبة للغواصين المبتدئين؟", a: "نعم! على الرغم من شهرتها بمواقع الغوص العميقة مثل الفنستون، تضم مرسى علم عشرات الخلجان الضحلة المحمية ذات الشعاب المرجانية البكر مباشرة من الشاطئ." },
      { q: "ما هو حمام سباحة النيزك الطبيعي؟", a: "النيزك هو حمام سباحة طبيعي محفور في الشعاب المرجانية الساحلية وممتلئ بمياه فيروزية صافية. تقول الأسطورة المحلية إنه تشكل نتيجة اصطدام نيزك." }
    ],
    ctaEn: {
      text: "Uncover the pristine underwater frontier of Marsa Alam. Book a world-class diving or snorkeling safari to Elphinstone and Abu Dabbab with our premium marine experts.",
      linkText: "Reserve Marsa Alam Dive Safari",
      url: "/#tours"
    },
    ctaAr: {
      text: "اكتشف الجمال المائي البكر في مرسى علم. احجز جولة غوص أو سنوركلينج عالمية لشعاب الفنستون وأبو دباب مع خبرائنا الممتازين.",
      linkText: "احجز رحلة مرسى علم",
      url: "/#tours"
    }
  },
  {
    slug: "abu-simbel-travel-guide",
    destination: "Abu Simbel",
    nameEn: "Abu Simbel",
    nameAr: "أبو سمبل المعجزة",
    titleEn: "Abu Simbel Travel Guide: Ramesses II's Mountain-Cut Masterpiece",
    titleAr: "دليل أبو سمبل: معجزة رمسيس الثاني المنحوتة في الجبل",
    subtitleEn: "Behold the colossal statues of Ramesses II and Queen Nefertari on the shores of Lake Nasser",
    subtitleAr: "تأمل التماثيل العملاقة لرمسيس الثاني والملكة نفرتاري على ضفاف بحيرة ناصر",
    metaDescriptionEn: "The ultimate guide to Abu Simbel Temples, Egypt. Discover the sun alignment phenomenon, UNESCO salvage rescue, Nefertari temple, and Lake Nasser cruises.",
    metaDescriptionAr: "دليل السفر الشامل لمعابد أبو سمبل، مصر. اكتشف ظاهرة تعامد الشمس الفريدة، قصة إنقاذ اليونسكو الأسطورية، ومعبد نفرتاري الفاخر.",
    keywordsEn: "Abu Simbel temples, Ramesses II temple, Nefertari temple Egypt, sun alignment phenomenon, Lake Nasser cruise, UNESCO salvage Abu Simbel",
    keywordsAr: "معابد أبو سمبل, هرم رمسيس الثاني, معبد نفرتاري مصر, ظاهرة تعامد الشمس, كروز بحيرة ناصر, إنقاذ اليونسكو أبو سمبل",
    heroImage: "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600577916048-804c9191e36c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Deep in the desert sands of southern Egypt, near the border with Sudan, lies Abu Simbel—the absolute crowning achievement of Pharaonic engineering and royal hubris. Carved directly into a solid sandstone mountain on the shores of Lake Nasser, four giant twenty-meter-tall statues of Pharaoh Ramesses II guard the entrance to the Great Temple. Twice a year, on February 22 and October 22, the rising sun penetrates sixty meters deep into the inner sanctuary to illuminate the statues of the gods inside, leaving only Ptah, the god of darkness, in shadow. Salvaged from flooding by UNESCO in a monumental ten-year effort, every single stone of the temples was carefully numbered and moved to higher ground. To stand before these colossal giants is a profound experience. You can easily <a href='/tours?destination=Nile' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Reserve Nile Cruise</a> or book a private transfer to Abu Simbel with our experts.",
    introAr: "يرقد معبد أبو سمبل في أقصى جنوب مصر كمعجزة فريدة للهندسة الفرعونية القديمة منحوتة في الصخر. يمكنك بسهولة <a href='/tours?destination=Nile' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز كروز النيل</a> والاستمتاع بزيارة المعبد الأسطوري.",
    historyEn: "Constructed by King Ramesses II during his 66-year reign in the 13th century BCE, the temples were designed to immortalize his victory at the Battle of Kadesh and strike awe into the southern Nubian kingdoms. Over the centuries, the temples were covered by desert sands until their discovery in 1813 by Swiss explorer Jean-Louis Burckhardt.",
    historyAr: "شيد الملك رمسيس الثاني المعبد في القرن الثالث عشر قبل الميلاد لتخليد انتصاره في معركة قادش وإظهار هيبته لبلاد النوبة الجنوبية، وظل المعبد مغطى بالرمال حتى اكتشافه عام 1813.",
    cultureEn: "Abu Simbel's culture is deeply Nubian, celebrating beautiful southern folk music, traditional colorful crafts, and a peaceful desert pace. Visiting the town during the Sun Festival (February and October) offers a vibrant showcase of traditional dancing and street music.",
    cultureAr: "تعد ثقافة أبو سمبل نوبية خالصة، ويحتفل السكان المحليون بمهرجان تعامد الشمس مرتين سنوياً بمشاركة فرق الموسيقى الشعبية والرقص التقليدي.",
    activitiesEn: [
      { title: "Witness the Grand Temple of Ramesses II", desc: "Walk between the four massive 20-meter-tall seated statues of Ramesses II guarding the mountain entrance, and explore the inner battle relief chambers." },
      { title: "Tour the Beautiful Temple of Nefertari", desc: "Visit the adjacent Small Temple dedicated to Queen Nefertari and the goddess Hathor, featuring standing statues of the queen equal in size to the king." }
    ],
    activitiesAr: [
      { title: "استكشاف معبد رمسيس الثاني العظيم", desc: "قف مذهولاً أمام التماثيل الأربعة الضخمة لرمسيس الثاني بارتفاع 20 متراً، وتجول داخل قاعة الأعمدة الكبرى المنقوشة بالكامل." },
      { title: "زيارة معبد الملكة نفرتاري الجميل", desc: "قم بزيارة المعبد الصغير المجاور المخصص لـ الملكة نفرتاري وإلهة الحب حتحور، وتأمل التماثيل الشامخة للملكة بنفس حجم الملك." }
    ],
    foodEn: [
      { name: "Nubian Baked Nile Perch", desc: "Fresh fish baked in clay ovens with tomatoes, onions, garlic, and hot green pepper, served with fresh local pita." }
    ],
    foodAr: [
      { name: "سمك قشر البياض النوبي بالفرن", desc: "طاجن سمك قشر البياض الطازج المطهو في أفران الطين مع الطماطم، البصل، الثوم والليمون." }
    ],
    hotelsEn: [
      { name: "Seti Abu Simbel Lake Resort", tier: "Luxury", desc: "A spectacular, premium resort designed in traditional Nubian style, featuring beautiful pools directly overlooking Lake Nasser." }
    ],
    hotelsAr: [
      { name: "منتجع ستي أبو سمبل المطل على البحيرة", tier: "Luxury", desc: "منتجع فاخر رائع مصمم بالكامل على الطراز النوبي الجميل ويضم مسابح وإطلالات مباشرة على بحيرة ناصر." }
    ],
    transportEn: "Located 280km south of Aswan, Abu Simbel is best reached via a 3-hour private car or tourist coach ride from Aswan, or a short 30-minute flight.",
    transportAr: "تبعد أبو سمبل 280 كم جنوب أسوان. أفضل وسيلة للوصول هي حجز سيارة خاصة من فندقنا (حوالي 3 ساعات) أو بالطيران الداخلي.",
    tipsEn: [
      "Try to visit the temples at sunrise or late afternoon; tourist day-trip coaches from Aswan arrive between 10 AM and 1 PM, making it very crowded.",
      "Bring a wide-brimmed hat, high-factor sunscreen, and plenty of water—the southern desert sun is exceptionally intense.",
      "Consider staying overnight in the town of Abu Simbel to experience the incredible evening sound and light show at the temples."
    ],
    tipsAr: [
      "حاول زيارة المعابد عند شروق الشمس أو في وقت متأخر من بعد الظهر لتجنب أفواج حافلات اليوم الواحد التي تصل من أسوان بين 10 صباحاً و 1 ظهراً.",
      "احرص على ارتداء قبعة عريضة واستخدام واقي الشمس وشرب كميات وفيرة من المياه."
    ],
    bestTimeEn: "October to April is the absolute best time. The temperatures are mild and dry. Avoid visiting in summer when temperatures regularly exceed 45°C.",
    bestTimeAr: "أكتوبر إلى أبريل هو الوقت المثالي؛ حيث تكون درجات الحرارة معتدلة وجافة. تجنب الزيارة في الصيف الحار.",
    nearByEn: [
      { name: "The Ancient City of Aswan", desc: "Located 3 hours north, home to Philae Temple and the beautiful Nubian villages.", slug: "aswan-travel-guide" },
      { name: "Philae Temple & High Dam", desc: "The beautiful island sanctuary of Isis located on Aswan's northern border.", slug: "aswan-travel-guide" }
    ],
    nearByAr: [
      { name: "مدينة أسوان التاريخية", desc: "تقع على بعد 3 ساعات شمالاً، وتضم معبد فيلة والقرى النوبية الساحرة.", slug: "aswan-travel-guide" },
      { name: "معبد فيلة والسد العالي", desc: "المعبد الجميل للإلهة إيزيس على جزيرة في الطرف الشمالي لأسوان.", slug: "aswan-travel-guide" }
    ],
    faqEn: [
      { q: "What is the Sun Alignment phenomenon?", a: "Twice a year on February 22 (the king's coronation) and October 22 (the king's birthday), the rising sun shines directly through the temple entrance, illuminating the statues of Ra-Horakhty, Amun, and Ramesses II in the innermost chamber." },
      { q: "How did UNESCO save the Abu Simbel temples?", a: "In the 1960s, the construction of the Aswan High Dam threatened to submerge the temples under Lake Nasser. UNESCO launched an extraordinary $40M salvage operation, cutting the entire sandstone temples into 16,000 blocks and rebuilding them 65 meters higher up the hillside." },
      { q: "Is it worth staying overnight in Abu Simbel?", a: "Yes! Most tourists visit as a rushed day trip from Aswan. Staying overnight allows you to experience the magnificent sound and light show at the temples after dark, and explore the monuments at sunrise before crowds arrive." }
    ],
    faqAr: [
      { q: "ما هي ظاهرة تعامد الشمس في معبد أبو سمبل؟", a: "مرتين في السنة في 22 فبراير (تتويج الملك) و22 أكتوبر (ميلاد الملك)، تتعامد الشمس مباشرة داخل المعبد لتضيء تماثيل رع حور أختي، آمون، ورمسيس الثاني." },
      { q: "كيف أنقذت منظمة اليونسكو معابد أبو سمبل؟", a: "في الستينيات هدد بناء السد العالي بغمر المعابد. أطلقت اليونسكو عملية إنقاذ بقيمة 40 مليون دولار، حيث تم تقطيع المعبد بالكامل إلى 16 ألف كتلة وإعادة بنائها على ارتفاع 65 متراً." },
      { q: "هل يستحق الأمر قضاء ليلة في أبو سمبل؟", a: "نعم! يزور معظم السياح المعبد في رحلة يومية سريعة. يتيح لك المبيت الاستمتاع بعرض الصوت والضوء الساحر ليلاً، وزيارة المعابد عند الشروق قبل وصول الزحام." }
    ],
    ctaEn: {
      text: "Journey to the absolute pinnacle of ancient Pharaonic power. Book your private luxury tour or Lake Nasser cruise to Abu Simbel with our expert Egyptologists.",
      linkText: "Reserve Abu Simbel Tour",
      url: "/#tours"
    },
    ctaAr: {
      text: "سافر إلى قمة المجد الفرعوني القديم. احجز جولتك الفاخرة الخاصة أو كروز بحيرة ناصر إلى أبو سمبل مع خبرائنا في علم المصريات.",
      linkText: "احجز جولة أبو سمبل",
      url: "/#tours"
    }
  },
  {
    slug: "el-gouna-travel-guide",
    destination: "El Gouna",
    nameEn: "El Gouna",
    nameAr: "الجونة الفاخرة",
    titleEn: "El Gouna Travel Guide: The Luxury Venice of the Red Sea",
    titleAr: "دليل الجونة: فينيسيا البحر الأحمر الفاخرة والبحيرات الفيروزية",
    subtitleEn: "Unwind inside Egypt's most exclusive lagoon resort town characterized by yacht marinas and golf courses",
    subtitleAr: "استرخِ في أفخم مدينة منتجعات مغلقة بالبحر الأحمر تتميز بالبحيرات واليخوت والجولف",
    metaDescriptionEn: "The ultimate premium guide to El Gouna, Egypt. Discover turquoise lagoons, Abu Tig Marina, premium golf courses, kiteboarding, and luxury 5-star beachfront boutique resorts.",
    metaDescriptionAr: "دليل السفر الشامل للجونة، مصر. اكتشف البحيرات المائية الفيروزية، مارينا أبو تيج، ملاعب الجولف العالمية، التزلج على الماء، وأفخم فنادق البوتيك.",
    keywordsEn: "El Gouna travel guide, El Gouna lagoons, Abu Tig Marina, El Gouna golf, kiteboarding Egypt, luxury resort Red Sea",
    keywordsAr: "دليل الجونة, بحيرات الجونة, مارينا أبو تيج, جولف الجونة, تزلج شراعي مصر, منتجع فاخر البحر الأحمر",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1629813589332-9cb77353f868?w=800&h=600&fit=crop&q=80"
    ],
    introEn: "Located just twenty-five kilometers north of Hurghada, El Gouna is Egypt's most exclusive, fully gated luxury lagoon resort town. Designed by world-renowned architects to harmonize with the dry desert sands, this premium coastal haven is built across a spectacular network of turquoise saltwater lagoons and emerald channels linked by stone bridges. El Gouna is a sanctuary of absolute tranquility and refined elegance, famous for its upscale Abu Tig Marina lined with superyachts, championship 18-hole golf courses, and world-class kiteboarding beaches. To experience a premium beach vacation, you can easily <a href='/tours?destination=Hurghada' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>Book Hurghada Adventure</a> and enjoy El Gouna's luxury amenities.",
    introAr: "تقع الجونة على بعد 25 كم شمال الغردقة، وهي أفخم مدينة منتجعات مغلقة ومخططة بالكامل في مصر. يمكنك بسهولة <a href='/tours?destination=Hurghada' style='color:var(--gold);font-weight:bold;text-decoration:underline;'>حجز مغامرة البحر الأحمر</a> والتمتع بجمال الجونة الحصرية.",
    historyEn: "Established in 1989 as a private holiday paradise by Egyptian entrepreneur Samih Sawiris, El Gouna grew rapidly into an award-winning eco-conscious town. It has received multiple global awards for its sustainable practices, zero-waste recycling programs, and architectural design that blends modern luxury with traditional Nubian and Mediterranean aesthetics.",
    historyAr: "تأسست الجونة في عام 1989 كملاذ شاطئي خاص للمهندس سميح ساويرس، ونمت لتصبح مدينة بيئية نموذجية حائزة على جوائز استدامة عالمية وتصميمات معمارية متناسقة.",
    cultureEn: "El Gouna showcases a highly sophisticated, international cosmopolitan culture. Home to the famous El Gouna Film Festival (GFF), it attracts global actors, directors, and artists, hosting world-class squash tournaments, musical concerts, and luxury lifestyle exhibitions along the marina.",
    cultureAr: "تتميز الجونة بـ ثقافة عصرية راقية وعالمية، وتشتهر باستضافة مهرجان الجونة السينمائي الدولي (GFF) الذي يستقطب كبار نجوم الفن والسينما من العالم.",
    activitiesEn: [
      { title: "Stroll Abu Tig Marina & Cruise Lagoons", desc: "Take a traditional lagoon boat cruise through the emerald channels, then enjoy a sunset walk along Abu Tig Marina lined with luxury yachts." },
      { title: "Play Golf on Championship Courses", desc: "Enjoy a round of golf at the magnificent El Gouna Golf Club, designed by Fred Couples and Gene Bates, featuring ocean breezes and water hazards." }
    ],
    activitiesAr: [
      { title: "التجول في مارينا أبو تيج وجولة البحيرات", desc: "قم بجولة بحرية في قارب البحيرة عبر القنوات الفيروزية الرائعة، ثم تجول في مارينا أبو تيج المليئة باليخوت الفخار عند الغروب." },
      { title: "ممارسة الجولف في الملاعب العالمية للجونة", desc: "استمتع بجولة جولف في ملعب الجونة الفاخر المكون من 18 حفرة والمصمم من خبراء عالميين مع إطلالة النيل والبحر." }
    ],
    foodEn: [
      { name: "Gourmet Mediterranean Fusion", desc: "Fresh Red Sea calamari and prawns cooked in white wine, garlic, and fresh basil, served in upscale harbor-front establishments." }
    ],
    foodAr: [
      { name: "مأكولات البحر المتوسط الراقية", desc: "جمبري البحر الأحمر الطازج والكابوريا المطهوة بالزبد، الثوم والأعشاب الطازجة في مطاعم مارينا أبو تيج الفاخرة." }
    ],
    hotelsEn: [
      { name: "The Chedi El Gouna", tier: "Luxury", desc: "An exceptionally luxurious, Asian-inspired beachfront boutique hotel featuring lavish suites, private pools, and a premium wellness spa." }
    ],
    hotelsAr: [
      { name: "فندق ذا شيدي الجونة البوتيكي الفاخر", tier: "Luxury", desc: "فندق بوتيك ساحر على الشاطئ مصمم بطراز آسيوي دافئ وهادئ، ويتميز بأجنحته الفاخرة ومسابح خاصة وسبا علاجي ذو مستوى عالمي." }
    ],
    transportEn: "Located 25km north of Hurghada Airport, El Gouna is easily reached via a 20-minute private hotel transfer. Within the town, electric tricycles ('TokTuk') are easily ordered via a dedicated app.",
    transportAr: "تبعد الجونة 25 كم شمال مطار الغردقة. أفضل وسيلة للوصول هي سيارة خاصة من فندقنا (حوالي 20 دقيقة).",
    tipsEn: [
      "Rent an electric TukTuk or bicycle to easily explore different neighborhoods, lagoons, and plazas across the town.",
      "Book a lagoon boat tour at sunset for a beautiful view of the architect-designed villas and stone bridges.",
      "Check out Abu Tig Marina in the evening for upscale dining and beautiful views of superyachts."
    ],
    tipsAr: [
      "استأجر دراجة هوائية أو توك توك كهربائي للتنقل بحرية ومتعة بين جزر الجونة ومختلف أحيائها المائية.",
      "احرص على القيام بجولة بحرية في القنوات المائية بالبحيرات عند الغروب لالتقاط أفضل الصور."
    ],
    bestTimeEn: "October to April is the absolute best season for cool coastal breezes. For windsurfing and kiteboarding, March to June offers highly consistent wind speeds.",
    bestTimeAr: "الفترة من أكتوبر إلى أبريل هي الأفضل للاستمتاع بجو معتدل ونسيم بحري لطيف، بينما يوفر فصلا الربيع والصيف أفضل رياح للتزلج الشراعي.",
    nearByEn: [
      { name: "Hurghada Coastal Resort", desc: "Vibrant beach nightlife and premium diving spots, located 25km south.", slug: "hurghada-travel-guide" },
      { name: "The Imperial Temples of Luxor", desc: "The ancient capital of Thebes, reachable via a scenic 4-hour mountain day trip.", slug: "luxor-travel-guide" }
    ],
    nearByAr: [
      { name: "مدينة الغردقة الساحلية", desc: "حياة ليلية شاطئية صاخبة ومواقع غوص ممتازة، على بعد 25 كم جنوباً.", slug: "hurghada-travel-guide" },
      { name: "مدينة الأقصر ومعابدها التاريخية", desc: "العاصمة القديمة طيبة، يمكن الوصول إليها عبر رحلة جبلية مدتها 4 ساعات.", slug: "luxor-travel-guide" }
    ],
    faqEn: [
      { q: "Why is El Gouna called the Venice of the Red Sea?", a: "El Gouna is built across a stunning network of natural lagoons and man-made canals, meaning almost every hotel, villa, and restaurant has a direct waterfront view. Transportation between different islands is primarily done via lagoon boats or electric TukTuks." },
      { q: "What are the best water sports in El Gouna?", a: "El Gouna is a world-famous capital for kiteboarding and windsurfing, thanks to its shallow, warm lagoons and highly consistent winds. It is also home to premium wakeboarding at Sliders Cable Park, one of the largest wake parks in the world." },
      { q: "Is El Gouna open to public visitors?", a: "El Gouna is a fully gated private town. While day visitors are welcome, they must pass through security gates. This ensures absolute safety, order, and a clean, serene environment throughout the town." }
    ],
    faqAr: [
      { q: "لماذا تُسمى الجونة فينيسيا البحر الأحمر؟", a: "بُنيت الجونة على شبكة من البحيرات المائية الفيروزية والقنوات المائية، مما يجعل لكل فندق أو مطعم إطلالة مباشرة على الماء. والتنقل يتم بالقوارب أو التوك توك الكهربائي." },
      { q: "ما هي أفضل الرياضات المائية في الجونة؟", a: "تعد الجونة عاصمة عالمية للتزلج الشراعي على الماء (Kiteboarding) بفضل الرياح الثابتة والبحيرات الضحلة، وتضم ملاعب جولف ورياضة التزلج بالكيبل (Sliders Cable Park) الأكبر عالمياً." },
      { q: "هل الجونة مفتوحة للزوار العامين؟", a: "الجونة مدينة مغلقة وبوابة خاصة تضمن أعلى مستويات الأمن والنظافة. يُرحب بالزوار اليوميين عبر بوابات الأمن والاستمتاع بالمطاعم والشواطئ الرائعة." }
    ],
    ctaEn: {
      text: "Unwind inside Egypt's most exclusive premium resort town. Book a private yacht cruise, golf tee time, or professional kiteboarding package in El Gouna today.",
      linkText: "Book El Gouna Luxury Escape",
      url: "/#tours"
    },
    ctaAr: {
      text: "استرخِ في أفخم مدينة منتجعات ساحلية في مصر. احجز يختك الخاص، جولة جولف، أو باقة تزلج شراعي في الجونة اليوم.",
      linkText: "احجز رحلة الجونة الفاخرة",
      url: "/#tours"
    }
  }
];

export const blogCategories = [
  "All", 
  "Cairo & Giza", 
  "Luxor", 
  "Aswan", 
  "Alexandria", 
  "Sinai", 
  "Hurghada", 
  "Fayoum", 
  "White Desert", 
  "Black Desert", 
  "Saint Catherine", 
  "Marsa Alam", 
  "Abu Simbel", 
  "El Gouna"
];

export const getBlogBySlug = (slug: string): BlogDestination | undefined => {
  return egyptDestinationsBlogs.find((blog) => blog.slug === slug);
};
