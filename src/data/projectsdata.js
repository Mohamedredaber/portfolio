const urbanImages = {
  about: "/images/urban/about.PNG",
  home: "/images/urban/home.PNG",
  create: "/images/urban/create.PNG",
  login: "/images/urban/login.PNG",
  explore: "/images/urban/explore.PNG",
  exploreConnected: "/images/urban/exploreconnecter.PNG",
  map: "/images/urban/map.PNG",
  mapGoogle: "/images/urban/mapgoogle.PNG",
};
const vpnImages = {
  home: "/images/vpn/home.PNG",
  review: "/images/vpn/review.PNG",
  detailsReview: "/images/vpn/detailsreview.PNG",
  blog: "/images/vpn/blog.PNG",
  about: "/images/vpn/about.PNG",
  contact: "/images/vpn/contact.PNG",
};
const giturban="https://github.com/Mohamedredaber/urbanexplorer"
const gitvpn= "https://github.com/Mohamedredaber/vpnprojet";
const projectsData = {
  en: {
    meta: {
      pageTitle: "Projects",
      pageSubtitle: "A selection of projects I've built recently.",
      labels: {
        viewMore: "More",
        back: "Back",
        liveDemo: "Live Demo",
        sourceCode: "Source Code",
        features: "Features",
        technologies: "Technologies",
        gallery: "Gallery",
      },
    },
    items: [
      {
        id: "urban_explorer",
        slug: "urban-explorer",
        title: "Urban Explorer",
        shortDescription:
          "Interactive web app to discover and filter urban places on a map.",
        coverImage: urbanImages.home,
        fullDescription:
          "Urban Explorer is an interactive web platform that helps users discover nearby places such as cafés, restaurants, parks, and attractions. Users can search by category, filter by rating and distance, visualize results on an interactive map, and view detailed information. Authenticated users can like places and save them as favorites. The app also provides an itinerary page showing distance and estimated travel time.",
        technologies: ["React", "Google Maps API"],
        features: [
          "Search places by category",
          "Filter by rating and distance",
          "Interactive map visualization",
          "Authentication (login & register)",
          "Favorites and likes system",
          "Route and itinerary with distance and duration",
        ],
        gallery: [
          {
            image: urbanImages.home,
            title: "Home",
            description:
              "Main entry page introducing the goal of Urban Explorer and guiding users to the core features.",
          },
          {
            image: urbanImages.create,
            title: "Create account",
            description:
              "Registration page for new users to unlock personalized features such as favorites and likes.",
          },
          {
            image: urbanImages.login,
            title: "Login",
            description:
              "Login page allowing users to access their account, favorites, likes, and preferences.",
          },
          {
            image: urbanImages.explore,
            title: "Explore (Guest)",
            description:
              "Exploration page showing places and details. To interact (favorites/likes) and view map position, users must sign in or create an account.",
          },
          {
            image: urbanImages.exploreConnected,
            title: "Explore (User)",
            description:
              "Search results with filters for logged-in users: map view, liking places, and adding them to favorites.",
          },
          {
            image: urbanImages.map,
            title: "Route & Itinerary",
            description:
              "Interactive route page showing navigation between the user's current location and the selected destination, including distance and estimated travel time.",
          },
          {
            image: urbanImages.mapGoogle,
            title: "Google Maps Integration",
            description:
              "Demonstrates the Google Maps integration used to display routes and itineraries within the application.",
          },
          {
            image: urbanImages.about,
            title: "About",
            description:
              "Project overview page highlighting the concept, key value, and the main experience of Urban Explorer.",
          },
        ],
        links: { github: giturban },
        category: "Web Application",
        status: "Completed",
        date: "2025",
      },
      {
        id: "top7_vpn_affiliate",
        slug: "top-7-vpn-affiliate",

        title: "Top 7 VPN — Affiliate Marketing Website",
        shortDescription:
          "Affiliate-style VPN comparison website with reviews, blog posts, and contact page.",

        coverImage: vpnImages.home,

        fullDescription:
          "Top 7 VPN is a static affiliate marketing website designed to present VPN services in a clear, structured way. The project includes a home section introducing the value proposition, a review section displaying ranked VPN cards with ratings and call-to-action buttons, detailed review pages with table of contents, a blog listing page, an about page, and a contact form for inquiries. The goal is to guide users through content and reviews and drive them toward external affiliate CTAs (e.g., “Visit Site” / “Visit Review”).",

        technologies: ["HTML", "CSS", "JavaScript"],

        features: [
          "Multi-page website (Home, Service, Review, Blogs, About, Contact)",
          "VPN review cards with rating, stars, and affiliate CTA buttons",
          "Detailed review layout with table of contents (sidebar)",
          "Blog listing with preview cards and dates",
          "Contact form UI (name, email, message)",
          "Navigation menu + consistent header/footer",
          "Back-to-top button for better navigation",
        ],

        gallery: [
          {
            image: vpnImages.home,
            title: "Home",
            description:
              "Landing section presenting the main promise (best VPNs) with a clean hero layout and navigation links.",
          },
          {
            image: vpnImages.review,
            title: "VPN Review List",
            description:
              "Ranked VPN cards with scores, star ratings, and affiliate call-to-action buttons such as “Visit Review”.",
          },
          {
            image: vpnImages.detailsReview,
            title: "Review Details",
            description:
              "Detailed review page layout showing a highlighted VPN profile, score, and a table of contents for quick navigation.",
          },
          {
            image: vpnImages.blog,
            title: "Blogs",
            description:
              "Blog listing page with multiple article cards (title, publish date, excerpt) and a “Read More” link.",
          },
          {
            image: vpnImages.about,
            title: "About",
            description:
              "About page explaining the team/project vision and why the website focuses on VPN security and privacy.",
          },
          {
            image: vpnImages.contact,
            title: "Contact",
            description:
              "Contact page with a simple form (name, email, message) designed for inquiries and support requests.",
          },
        ],

        links: {
  
          github:gitvpn
        },

        category: "Website",
        status: "Completed",
        date: "2024",
      },
    ],
  },
  
  

  fr: {
    meta: {
      pageTitle: "Projets",
      pageSubtitle: "Une sélection de projets que j’ai réalisés récemment.",
      labels: {
        viewMore: "Plus",
        back: "Retour",
        liveDemo: "Démo",
        sourceCode: "Code Source",
        features: "Fonctionnalités",
        technologies: "Technologies",
        gallery: "Galerie",
      },
    },
    items: [
      {
        id: "urban_explorer",
        slug: "urban-explorer",
        title: "Urban Explorer",
        shortDescription:
          "Application web interactive pour découvrir et filtrer des lieux urbains sur une carte.",
        coverImage: urbanImages.home,
        fullDescription:
          "Urban Explorer est une plateforme web interactive qui permet aux utilisateurs de découvrir des lieux proches comme les cafés, restaurants, parcs et attractions. Les utilisateurs peuvent rechercher par catégorie, filtrer par note et distance, visualiser les résultats sur une carte interactive et consulter les détails. Les utilisateurs connectés peuvent aimer des lieux et les ajouter aux favoris. L’application propose également une page d’itinéraire avec distance et durée estimée.",
        technologies: ["React", "Google Maps API"],
        features: [
          "Recherche par catégorie",
          "Filtrage par note et distance",
          "Carte interactive",
          "Authentification (connexion & inscription)",
          "Système de favoris et likes",
          "Itinéraire avec distance et durée",
        ],
        gallery: [
          {
            image: urbanImages.home,
            title: "Accueil",
            description:
              "Cette page d’accueil constitue le point d’entrée principal de l’application Urban Explorer ; elle présente de manière claire et attractive l’objectif du projet et offre une navigation simple et intuitive vers les différentes fonctionnalités.",
          },
          {
            image: urbanImages.create,
            title: "Créer un compte",
            description:
              "Cette page permet aux nouveaux utilisateurs de créer un compte afin d’accéder aux fonctionnalités personnalisées de la plateforme.",
          },
          {
            image: urbanImages.login,
            title: "Connexion",
            description:
              "Cette page permet aux utilisateurs de se connecter à leur compte pour accéder à leurs favoris, faire des likes et gérer leurs préférences.",
          },
          {
            image: urbanImages.explore,
            title: "Exploration (Invité)",
            description:
              "Cette page d'exploration affiche des lieux avec leurs détails, mais pour interagir (favoris, likes) et voir leur position sur la carte, vous devez vous connecter ou créer un compte.",
          },
          {
            image: urbanImages.exploreConnected,
            title: "Exploration (Connecté)",
            description:
              "Cette page montre les résultats de recherche avec filtres pour un utilisateur connecté, qui peut voir les lieux sur la carte, liker et ajouter aux favoris.",
          },
          {
            image: urbanImages.map,
            title: "Itinéraire",
            description:
              "Cette page permet à l’utilisateur de visualiser sur une carte interactive l’itinéraire vers un lieu sélectionné. Elle affiche le trajet, ainsi que la distance par la route et la durée estimée, afin de faciliter la planification du parcours.",
          },
          {
            image: urbanImages.mapGoogle,
            title: "Google Maps",
            description:
              "Cette page met en avant l’intégration de Google Maps dans le projet pour afficher les itinéraires vers les lieux de la plateforme.",
          },
          {
            image: urbanImages.about,
            title: "À propos",
            description:
              "Page de présentation du projet : concept, valeur ajoutée et aperçu des principales fonctionnalités d’Urban Explorer.",
          },
        ],
        links: { github: giturban},
        category: "Application Web",
        status: "Terminé",
        date: "2025",
      },
      {
        id: "top7_vpn_affiliate",
        slug: "top-7-vpn-affiliate",

        title: "Top 7 VPN — Site d’affiliation",
        shortDescription:
          "Site comparatif de VPN (affiliation) avec avis, articles de blog et page contact.",

        coverImage: vpnImages.home,

        fullDescription:
          "Top 7 VPN est un site statique d’affiliate marketing conçu pour présenter des services VPN de manière claire et structurée. Le projet inclut une page d’accueil, une section d’avis (reviews) avec des cartes classées et notées, des pages de détail avec table des matières, une page blogs, une page à propos, ainsi qu’une page contact. L’objectif est de guider l’utilisateur via du contenu et des comparatifs, puis de l’orienter vers des CTA externes (ex : « Visit Site » / « Visit Review »).",

        technologies: ["HTML", "CSS", "JavaScript"],

        features: [
          "Site multi-pages (Accueil, Service, Review, Blogs, À propos, Contact)",
          "Cartes de VPN classées avec score, étoiles et boutons CTA d’affiliation",
          "Page détail avec table des matières (sidebar) pour naviguer rapidement",
          "Page blogs sous forme de cartes (titre, date, extrait, « Read More »)",
          "Formulaire de contact (nom, email, message)",
          "Menu de navigation + header/footer cohérents",
          "Bouton retour en haut (back-to-top)",
        ],

        gallery: [
          {
            image: vpnImages.home,
            title: "Accueil",
            description:
              "Page d’entrée présentant la promesse du site (meilleurs VPN) avec une mise en page claire et un menu de navigation.",
          },
          {
            image: vpnImages.review,
            title: "Liste des avis VPN",
            description:
              "Cartes de VPN classées avec notes, étoiles et boutons d’action orientés affiliation (« Visit Review »).",
          },
          {
            image: vpnImages.detailsReview,
            title: "Détail d’un avis",
            description:
              "Page de détail structurée avec un bloc VPN mis en avant, une note et une table des matières pour une lecture rapide.",
          },
          {
            image: vpnImages.blog,
            title: "Blogs",
            description:
              "Liste d’articles sous forme de cartes (titre, date, extrait) avec un lien « Read More ».",
          },
          {
            image: vpnImages.about,
            title: "À propos",
            description:
              "Page de présentation expliquant l’équipe, l’objectif du projet et le choix du thème (sécurité, confidentialité).",
          },
          {
            image: vpnImages.contact,
            title: "Contact",
            description:
              "Page contact avec formulaire simple (nom, email, message) pour les demandes et le support.",
          },
        ],

        links: {
     
          github: gitvpn
        },

        category: "Site Web",
        status: "Terminé",
        date: "2024",
      },
    ],
  },

  ar: {
    meta: {
      pageTitle: "المشاريع",
      pageSubtitle: "مجموعة من المشاريع التي قمت بإنجازها مؤخراً.",
      labels: {
        viewMore: "المزيد",
        back: "رجوع",
        liveDemo: "عرض مباشر",
        sourceCode: "الكود المصدري",
        features: "الخصائص",
        technologies: "التقنيات",
        gallery: "المعرض",
      },
    },
    items: [
      {
        id: "urban_explorer",
        slug: "urban-explorer",
        title: "Urban Explorer",
        shortDescription:
          "تطبيق ويب تفاعلي لاكتشاف الأماكن الحضرية وعرضها على الخريطة.",
        coverImage: urbanImages.home,
        fullDescription:
          "Urban Explorer هو تطبيق ويب تفاعلي يساعد المستخدمين على اكتشاف الأماكن القريبة مثل المقاهي والمطاعم والحدائق والمعالم السياحية. يمكن للمستخدم البحث حسب الفئة، التصفية حسب التقييم والمسافة، وعرض النتائج على خريطة تفاعلية مع تفاصيل كل مكان. المستخدمون المسجلون يمكنهم إضافة الأماكن إلى المفضلة والإعجاب بها. كما يوفر التطبيق صفحة للمسار توضح المسافة والمدة التقديرية للوصول.",
        technologies: ["React", "Google Maps API"],
        features: [
          "البحث حسب الفئة",
          "التصفية حسب التقييم والمسافة",
          "عرض الأماكن على خريطة تفاعلية",
          "تسجيل الدخول وإنشاء حساب",
          "نظام المفضلة والإعجاب",
          "عرض المسار مع المسافة والمدة",
        ],
        gallery: [
          {
            image: urbanImages.home,
            title: "الصفحة الرئيسية",
            description:
              "واجهة البداية التي تشرح هدف المشروع وتوفر تنقلاً بسيطاً وواضحاً نحو أهم خصائص المنصة.",
          },
          {
            image: urbanImages.create,
            title: "إنشاء حساب",
            description:
              "صفحة إنشاء حساب للمستخدمين الجدد للوصول إلى الخصائص المخصصة مثل المفضلة والإعجابات.",
          },
          {
            image: urbanImages.login,
            title: "تسجيل الدخول",
            description:
              "صفحة تسجيل الدخول للوصول إلى الحساب وإدارة المفضلة والإعجابات والتفضيلات.",
          },
          {
            image: urbanImages.explore,
            title: "استكشاف (زائر)",
            description:
              "تعرض هذه الصفحة الأماكن وتفاصيلها، لكن للتفاعل (إعجاب/مفضلة) ورؤية المواقع على الخريطة يجب تسجيل الدخول أو إنشاء حساب.",
          },
          {
            image: urbanImages.exploreConnected,
            title: "استكشاف (مستخدم)",
            description:
              "نتائج البحث مع الفلاتر للمستخدم المسجل: عرض الأماكن على الخريطة، الإعجاب بها وإضافتها إلى المفضلة.",
          },
          {
            image: urbanImages.map,
            title: "المسار",
            description:
              "صفحة تعرض المسار على خريطة تفاعلية بين موقع المستخدم الحالي والوجهة المختارة مع المسافة والوقت المتوقع للوصول لتسهيل التخطيط.",
          },
          {
            image: urbanImages.mapGoogle,
            title: "تكامل Google Maps",
            description:
              "توضح هذه الصفحة تكامل Google Maps داخل المشروع لعرض المسارات والاتجاهات نحو الأماكن.",
          },
          {
            image: urbanImages.about,
            title: "حول المشروع",
            description:
              "صفحة تقديم المشروع: الفكرة، القيمة المضافة، ونظرة عامة على أهم الوظائف في Urban Explorer.",
          },
        ],
        links: {  github: giturban },
        category: "تطبيق ويب",
        status: "مكتمل",
        date: "2025",
      },
      {
        id: "top7_vpn_affiliate",
        slug: "top-7-vpn-affiliate",

        title: "Top 7 VPN — موقع أفلييت",
        shortDescription:
          "موقع مقارنة VPN بأسلوب الأفلييت مع صفحات مراجعات، مدونة، وصفحة تواصل.",

        coverImage: vpnImages.home,

        fullDescription:
          "Top 7 VPN هو موقع ثابت (Static) للتسويق بالعمولة يهدف إلى عرض خدمات VPN بشكل منظم وواضح. يتضمن المشروع صفحة رئيسية، صفحة مراجعات تحتوي على بطاقات VPN مرتبة مع تقييم ونقاط وأزرار CTA، وصفحات تفاصيل مع جدول محتويات للتنقل السريع، صفحة مقالات (Blogs)، صفحة من نحن، وصفحة تواصل بنموذج بسيط. الهدف هو توجيه المستخدم عبر محتوى ومقارنات ثم دفعه نحو روابط خارجية (مثل: Visit Site / Visit Review).",

        technologies: ["HTML", "CSS", "JavaScript"],

        features: [
          "موقع متعدد الصفحات (الرئيسية، الخدمات، المراجعات، المدونة، من نحن، تواصل)",
          "بطاقات VPN مع تقييم، نجوم، وأزرار CTA للأفلييت",
          "صفحة تفاصيل مراجعة مع جدول محتويات (Sidebar)",
          "صفحة مدونة تعرض المقالات كبطاقات مع تاريخ وملخص",
          "نموذج تواصل (الاسم، البريد، الرسالة)",
          "قائمة تنقل + ترويسة وتذييل موحدين",
          "زر الرجوع للأعلى لتحسين التصفح",
        ],

        gallery: [
          {
            image: vpnImages.home,
            title: "الصفحة الرئيسية",
            description:
              "واجهة البداية التي تعرض فكرة الموقع (أفضل VPN) مع تصميم بسيط وقائمة تنقل واضحة.",
          },
          {
            image: vpnImages.review,
            title: "قائمة المراجعات",
            description:
              "بطاقات VPN مرتبة مع نقاط وتقييم بالنجوم وأزرار CTA مثل « Visit Review ».",
          },
          {
            image: vpnImages.detailsReview,
            title: "تفاصيل المراجعة",
            description:
              "صفحة تفاصيل منظمة تعرض معلومات VPN مع تقييم وجدول محتويات للتنقل السريع داخل الصفحة.",
          },
          {
            image: vpnImages.blog,
            title: "المدونة",
            description:
              "صفحة مقالات تعرض بطاقات (عنوان، تاريخ، ملخص) مع رابط « Read More ».",
          },
          {
            image: vpnImages.about,
            title: "من نحن",
            description:
              "صفحة تعريف بالمشروع/الفريق وسبب اختيار موضوع VPN (الأمان والخصوصية).",
          },
          {
            image: vpnImages.contact,
            title: "تواصل",
            description:
              "صفحة تواصل بنموذج بسيط لإرسال الاستفسارات أو طلب الدعم.",
          },
        ],

        links: {
    
          github:gitvpn
        },

        category: "موقع ويب",
        status: "مكتمل",
        date: "2024",
      },
    ],
  },
};

export default projectsData;
