const ravecarTeamData = {
  ar: { 
    title: "فريق العمل",
    subtitle: "هذا المشروع تم إنجازه بشكل جماعي ضمن فريق تطوير RAVECAR",

    members: [
      {
        id: 1,
        name: "فؤاد البقالى",
        role: "مطور ويب (Backend & Frontend)",
        description:
          "ساهم في تطوير منصة RAVECAR من حيث منطق التطبيق، التعامل مع قاعدة البيانات، ونظام التسجيل والتحقق عبر البريد الإلكتروني.",

        contact: {
          email: "fouad.bakkali@email.com",
          phone: "+212 6 00 00 00 00",
          github: "https://github.com/fouadbakkali",
          linkedin: "https://www.linkedin.com/in/fouad-bekkali-50a465384/",
        },

        avatar: "",
      },
      
    ],
  },

  fr: {
    title: "Équipe du projet",
    subtitle: "Ce projet a été réalisé en collaboration par l’équipe RAVECAR",

    members: [
      {
        id: 1,
        name: "Fouad Bakkali",
        role: "Développeur Web (Backend & Frontend)",
        description:
          "A contribué au développement de la plateforme RAVECAR, notamment la logique applicative, la base de données et le système d’inscription avec vérification par email.",

        contact: {
          email: "fouad.bakkali@email.com",
          phone: "+212 6 00 00 00 00",
          github: "https://github.com/fouadbakkali",
           linkedin: "https://www.linkedin.com/in/fouad-bekkali-50a465384/",
        },

        avatar: "",
      },
      
    ],
  },

  en: {
    title: "Project Team",
    subtitle: "This project was developed collaboratively by the RAVECAR team",

    members: [
      {
        id: 1,
        name: "Fouad Bakkali",
        role: "Web Developer (Backend & Frontend)",
        description:
          "Contributed to the development of the RAVECAR platform, including business logic, database management, and email verification system.",

        contact: {
          email: "fouad.bakkali@email.com",
          phone: "+212 6 00 00 00 00",
          github: "https://github.com/fouadbakkali",
          linkedin: "https://www.linkedin.com/in/fouad-bekkali-50a465384/",
        },

        avatar: "",
      },     
    ],
  },
};


const base = import.meta.env.BASE_URL;

const urbanImages = {
  about: `${base}images/urban/about.PNG`,
  home: `${base}images/urban/home.PNG`,
  create: `${base}images/urban/create.PNG`,
  login: `${base}images/urban/login.PNG`,
  explore: `${base}images/urban/explore.PNG`,
  exploreConnected: `${base}images/urban/exploreconnecter.PNG`,
  map: `${base}images/urban/map.PNG`,
  mapGoogle: `${base}images/urban/mapgoogle.PNG`,
};

const vpnImages = {
  home: `${base}images/vpn/home.PNG`,
  review: `${base}images/vpn/review.PNG`,
  detailsReview: `${base}images/vpn/detailsreview.PNG`,
  blog: `${base}images/vpn/blog.PNG`,
  about: `${base}images/vpn/about.PNG`,
  contact: `${base}images/vpn/contact.PNG`,
};

const ravecarImages = {
  home: `${base}images/ravecar/home.PNG`,
  details: `${base}images/ravecar/voirdetailsclient.PNG`,
  reserve: `${base}images/ravecar/reserver.PNG`,
  login: `${base}images/ravecar/signup.PNG`,
  signup: `${base}images/ravecar/inscription.PNG`,
  otpEmail: `${base}images/ravecar/email.PNG`,
  dashboardAgency: `${base}images/ravecar/homeagence.PNG`,
  addVehicle: `${base}images/ravecar/addvehicule.PNG`,
  editVehicle: `${base}images/ravecar/modifierarticle.PNG`,
  about: `${base}images/ravecar/about.PNG`,
  contact: `${base}images/ravecar/contact.PNG`,
};

const projectLinks = {
  urban: { github: "https://github.com/Mohamedredaber/urbanexplorer" },
  vpn: { github: "https://github.com/Mohamedredaber/vpnprojet" },
  ravecar: { github: "https://github.com/Mohamedredaber/agences_location_platform" }, 
};


const projectsEN = [
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
    links: projectLinks.urban,
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
    links: projectLinks.vpn,
    category: "Website",
    status: "Completed",
    date: "2024",
  },

  {
    id: "ravecar_platform",
    slug: "ravecar-car-rental-platform",
    title: "RAVECAR — Car Rental Platform",
    shortDescription:
      "Multi-role platform connecting car rental agencies with customers, with listing management and date-based reservations.",
    coverImage: ravecarImages.home,
    fullDescription:
      "RAVECAR is a web platform designed for car rental in Morocco. It connects rental agencies with customers looking for reliable vehicles. Customers can browse cars, apply advanced filters (brand, price, category, fuel type, gearbox, color, seats), view detailed vehicle pages with image carousel, choose rental dates, and book via WhatsApp contact. Agencies have a secure dashboard to sign up, verify email with OTP (PHPMailer), publish and edit vehicles through a multi-step form, upload images, and manage rental availability and listings.",
    technologies: ["PHP (Native)", "JavaScript", "MySQL", "PHPMailer", "HTML", "CSS"],
    features: [
      "Multi-role system (Customer / Agency)",
      "Agency signup with profile info + logo upload",
      "Email verification with OTP (PHPMailer)",
      "Login / Logout with protected dashboard",
      "Advanced vehicle filtering (brand, price, category, fuel, gearbox, color, seats)",
      "Vehicle details page with image carousel",
      "Date-based reservation flow",
      "WhatsApp booking/contact integration",
      "Agency dashboard: manage listings and rental status",
      "Multi-step form (wizard) to add/edit vehicles",
    ],
    gallery: [
      {
        image: ravecarImages.home,
        title: "Home — Vehicle Catalog",
        description:
          "Public catalog displaying vehicles as cards with key information and quick access to details.",
      },
      {
        image: ravecarImages.details,
        title: "Vehicle Details",
        description:
          "Detailed view with carousel, specs (fuel, gearbox, mileage, seats...), price per day and availability.",
      },
      {
        image: ravecarImages.reserve,
        title: "Reservation",
        description:
          "Reservation screen allowing users to select start/end dates and book via WhatsApp contact.",
      },
      {
        image: ravecarImages.login,
        title: "Login",
        description:
          "Authentication page for agencies/customers to access secured features and dashboards.",
      },
      {
        image: ravecarImages.signup,
        title: "Agency Signup",
        description:
          "Agency registration form collecting business info, social links, cities of activity and logo upload.",
      },
      {
        image: ravecarImages.otpEmail,
        title: "Email Verification (OTP)",
        description:
          "OTP code verification sent by email using PHPMailer to secure new accounts.",
      },
      {
        image: ravecarImages.dashboardAgency,
        title: "Agency Dashboard",
        description:
          "Back-office view to manage listings and monitor rentals (status, dates, actions).",
      },
      {
        image: ravecarImages.addVehicle,
        title: "Add Vehicle (Multi-step Wizard)",
        description:
          "Step-based form to publish a new vehicle (category, brand, specs, comfort, availability, images).",
      },
      {
        image: ravecarImages.editVehicle,
        title: "Edit Vehicle",
        description:
          "Edit flow with pre-filled fields using the same multi-step wizard for updates.",
      },
      {
        image: ravecarImages.about,
        title: "About",
        description:
          "About page describing the platform, mission and what it offers to agencies and customers.",
      },
      {
        image: ravecarImages.contact,
        title: "Contact",
        description:
          "Contact page with a simple form for inquiries and support requests.",
      },
    ],
    links: projectLinks.ravecar,
    category: "Web Application",
    status: "Completed",
    date: "2026",
    team : ravecarTeamData.en
  },
];

/* =========================
   4) ITEMS (FR) (SEPARÉS)
   ========================= */
const projectsFR = [
  // Urban
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
    links: projectLinks.urban,
    category: "Application Web",
    status: "Terminé",
    date: "2025",
  },

  // VPN
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
    links: projectLinks.vpn,
    category: "Site Web",
    status: "Terminé",
    date: "2024",
  },

  // RAVECAR
  {
    id: "ravecar_platform",
    slug: "ravecar-car-rental-platform",
    title: "RAVECAR — Plateforme de location de voitures",
    shortDescription:
      "Plateforme multi-rôles reliant agences de location et clients, avec gestion d’annonces et réservation par dates.",
    coverImage: ravecarImages.home,
    fullDescription:
      "RAVECAR est une plateforme web dédiée à la location de voitures au Maroc. Elle met en relation des agences de location et des clients à la recherche de véhicules fiables. Côté client : consultation du catalogue, filtres avancés (marque, prix, catégorie, carburant, boîte, couleur, places), page détail avec carousel d’images, choix des dates et réservation via WhatsApp. Côté agence : espace sécurisé avec inscription, vérification email par code OTP (PHPMailer), tableau de bord pour publier/modifier des véhicules via un formulaire multi-étapes, upload d’images et gestion de la disponibilité.",
    technologies: ["PHP (Natif)", "JavaScript", "MySQL", "PHPMailer", "HTML", "CSS"],
    features: [
      "Système multi-rôles (Client / Agence)",
      "Inscription agence avec infos + upload logo",
      "Vérification email par OTP (PHPMailer)",
      "Connexion / Déconnexion + dashboard protégé",
      "Filtres avancés (marque, prix, catégorie, carburant, boîte, couleur, places)",
      "Page détail véhicule avec carousel d’images",
      "Réservation avec sélection des dates",
      "Intégration WhatsApp (réserver/contacter)",
      "Dashboard agence : gestion des annonces + statut",
      "Formulaire multi-étapes (wizard) ajouter/modifier véhicule",
    ],
    gallery: [
      {
        image: ravecarImages.home,
        title: "Accueil — Catalogue",
        description:
          "Catalogue public affichant les véhicules sous forme de cartes avec infos clés et accès aux détails.",
      },
      {
        image: ravecarImages.details,
        title: "Détail du véhicule",
        description:
          "Vue détaillée avec carousel, caractéristiques, prix par jour et disponibilité.",
      },
      {
        image: ravecarImages.reserve,
        title: "Réservation",
        description:
          "Sélection des dates (début/fin) et réservation via contact WhatsApp.",
      },
      {
        image: ravecarImages.login,
        title: "Connexion",
        description:
          "Page de connexion pour accéder aux fonctionnalités sécurisées et au dashboard.",
      },
      {
        image: ravecarImages.signup,
        title: "Inscription agence",
        description:
          "Formulaire d’inscription agence avec infos, réseaux sociaux, villes d’activité et logo.",
      },
      {
        image: ravecarImages.otpEmail,
        title: "Vérification email (OTP)",
        description:
          "Envoi d’un code OTP par email via PHPMailer pour sécuriser les inscriptions.",
      },
      {
        image: ravecarImages.dashboardAgency,
        title: "Dashboard agence",
        description:
          "Espace de gestion : annonces, locations, statuts, dates et actions.",
      },
      {
        image: ravecarImages.addVehicle,
        title: "Ajouter véhicule (Wizard multi-étapes)",
        description:
          "Formulaire par étapes : catégorie/marque, specs, confort, disponibilité/tarif, images/validation.",
      },
      {
        image: ravecarImages.editVehicle,
        title: "Modifier véhicule",
        description:
          "Flux de modification avec champs préremplis via le même wizard.",
      },
      {
        image: ravecarImages.about,
        title: "À propos",
        description:
          "Présentation de la plateforme, mission et valeur ajoutée pour les agences et les clients.",
      },
      {
        image: ravecarImages.contact,
        title: "Contact",
        description:
          "Page contact avec formulaire pour demandes et support.",
      },
    ],
    links: projectLinks.ravecar,
    category: "Application Web",
    status: "Terminé",
    date: "2026",
    team : ravecarTeamData.fr
  },
];

const projectsAR = [
  // Urban
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
      { image: urbanImages.home, title: "الصفحة الرئيسية", description: "واجهة البداية التي تشرح هدف المشروع وتوفر تنقلاً بسيطاً وواضحاً نحو أهم خصائص المنصة." },
      { image: urbanImages.create, title: "إنشاء حساب", description: "صفحة إنشاء حساب للمستخدمين الجدد للوصول إلى الخصائص المخصصة مثل المفضلة والإعجابات." },
      { image: urbanImages.login, title: "تسجيل الدخول", description: "صفحة تسجيل الدخول للوصول إلى الحساب وإدارة المفضلة والإعجابات والتفضيلات." },
      { image: urbanImages.explore, title: "استكشاف (زائر)", description: "تعرض هذه الصفحة الأماكن وتفاصيلها، لكن للتفاعل ورؤية المواقع على الخريطة يجب تسجيل الدخول أو إنشاء حساب." },
      { image: urbanImages.exploreConnected, title: "استكشاف (مستخدم)", description: "نتائج البحث مع الفلاتر للمستخدم المسجل: عرض الأماكن على الخريطة، الإعجاب بها وإضافتها إلى المفضلة." },
      { image: urbanImages.map, title: "المسار", description: "صفحة تعرض المسار على خريطة تفاعلية بين موقع المستخدم الحالي والوجهة المختارة مع المسافة والوقت المتوقع." },
      { image: urbanImages.mapGoogle, title: "تكامل Google Maps", description: "توضح هذه الصفحة تكامل Google Maps داخل المشروع لعرض المسارات والاتجاهات نحو الأماكن." },
      { image: urbanImages.about, title: "حول المشروع", description: "صفحة تقديم المشروع: الفكرة، القيمة المضافة، ونظرة عامة على أهم الوظائف." },
    ],
    links: projectLinks.urban,
    category: "تطبيق ويب",
    status: "مكتمل",
    date: "2025",
  },

  // VPN
  {
    id: "top7_vpn_affiliate",
    slug: "top-7-vpn-affiliate",
    title: "Top 7 VPN — موقع أفلييت",
    shortDescription:
      "موقع مقارنة VPN بأسلوب الأفلييت مع صفحات مراجعات، مدونة، وصفحة تواصل.",
    coverImage: vpnImages.home,
    fullDescription:
      "Top 7 VPN هو موقع ثابت للتسويق بالعمولة يهدف إلى عرض خدمات VPN بشكل منظم وواضح. يتضمن المشروع صفحة رئيسية، صفحة مراجعات تحتوي على بطاقات VPN مرتبة مع تقييم ونقاط وأزرار CTA، وصفحات تفاصيل مع جدول محتويات للتنقل السريع، صفحة مقالات، صفحة من نحن، وصفحة تواصل. الهدف هو توجيه المستخدم عبر محتوى ومقارنات ثم دفعه نحو روابط خارجية.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "موقع متعدد الصفحات (الرئيسية، الخدمات، المراجعات، المدونة، من نحن، تواصل)",
      "بطاقات VPN مع تقييم ونجوم وأزرار CTA",
      "صفحة تفاصيل مع جدول محتويات",
      "قائمة مقالات كبطاقات مع تاريخ وملخص",
      "نموذج تواصل",
      "قائمة تنقل + ترويسة وتذييل",
      "زر الرجوع للأعلى",
    ],
    gallery: [
      { image: vpnImages.home, title: "الصفحة الرئيسية", description: "واجهة البداية التي تعرض فكرة الموقع مع تصميم بسيط وقائمة تنقل واضحة." },
      { image: vpnImages.review, title: "قائمة المراجعات", description: "بطاقات VPN مرتبة مع نقاط وتقييم بالنجوم وأزرار CTA." },
      { image: vpnImages.detailsReview, title: "تفاصيل المراجعة", description: "صفحة تفاصيل منظمة تعرض معلومات VPN مع تقييم وجدول محتويات." },
      { image: vpnImages.blog, title: "المدونة", description: "صفحة مقالات تعرض بطاقات مع عنوان وتاريخ وملخص." },
      { image: vpnImages.about, title: "من نحن", description: "صفحة تعريف بالمشروع وسبب اختيار موضوع الأمان والخصوصية." },
      { image: vpnImages.contact, title: "تواصل", description: "صفحة تواصل بنموذج بسيط لإرسال الاستفسارات." },
    ],
    links: projectLinks.vpn,
    category: "موقع ويب",
    status: "مكتمل",
    date: "2024",
  },

  // RAVECAR
  {
    id: "ravecar_platform",
    slug: "ravecar-car-rental-platform",
    title: "RAVECAR — منصة كراء السيارات",
    shortDescription:
      "منصة متعددة الأدوار تربط وكالات كراء السيارات بالزبناء مع إدارة الإعلانات وحجز حسب التاريخ.",
    coverImage: ravecarImages.home,
    fullDescription:
      "RAVECAR هي منصة ويب مخصصة لكراء السيارات بالمغرب، تربط وكالات الكراء بالزبناء الباحثين عن سيارات موثوقة. الزبون يمكنه تصفح السيارات مع فلاتر متقدمة، مشاهدة صفحة التفاصيل مع سلايدر للصور، اختيار تاريخ البداية والنهاية، والحجز عبر WhatsApp. الوكالات لديها لوحة تحكم آمنة تشمل التسجيل والتحقق عبر كود OTP بالـ Email (PHPMailer)، إضافة/تعديل السيارات عبر نموذج متعدد المراحل، رفع الصور، وإدارة حالة التوفر.",
    technologies: ["PHP (Native)", "JavaScript", "MySQL", "PHPMailer", "HTML", "CSS"],
    features: [
      "نظام أدوار متعددة (زبون / وكالة)",
      "تسجيل وكالة مع معلومات + رفع الشعار",
      "التحقق عبر البريد بكود OTP",
      "تسجيل الدخول والخروج + لوحة تحكم محمية",
      "فلاتر بحث متقدمة",
      "صفحة تفاصيل السيارة مع سلايدر صور",
      "حجز حسب تاريخ البداية والنهاية",
      "دمج WhatsApp للحجز/التواصل",
      "لوحة تحكم للوكالة لإدارة الإعلانات",
      "نموذج متعدد المراحل لإضافة/تعديل السيارة",
    ],
    gallery: [
      { image: ravecarImages.home, title: "الرئيسية — كتالوج السيارات", description: "كتالوج عام يعرض السيارات على شكل بطاقات مع أهم المعلومات." },
      { image: ravecarImages.details, title: "تفاصيل السيارة", description: "صفحة تفاصيل تحتوي على سلايدر صور ومواصفات وسعر اليوم وحالة التوفر." },
      { image: ravecarImages.reserve, title: "الحجز", description: "اختيار تاريخ البداية والنهاية ثم الحجز عبر WhatsApp للتواصل بسرعة." },
      { image: ravecarImages.login, title: "تسجيل الدخول", description: "واجهة تسجيل الدخول للوصول للخصائص المحمية ولوحة التحكم." },
      { image: ravecarImages.signup, title: "تسجيل الوكالة", description: "نموذج تسجيل وكالة مع معلومات العمل وروابط التواصل ورفع الشعار." },
      { image: ravecarImages.otpEmail, title: "التحقق عبر البريد (OTP)", description: "إرسال كود تحقق OTP عبر البريد لتأمين الحساب." },
      { image: ravecarImages.dashboardAgency, title: "لوحة تحكم الوكالة", description: "إدارة الإعلانات والكراءات: الحالة، التواريخ، والإجراءات." },
      { image: ravecarImages.addVehicle, title: "إضافة سيارة (مراحل متعددة)", description: "نموذج على مراحل لإضافة سيارة: الفئة/الماركة، المواصفات، التجهيزات، التوفر/السعر، الصور." },
      { image: ravecarImages.editVehicle, title: "تعديل سيارة", description: "تعديل بيانات السيارة مع تعبئة تلقائية للحقول." },
      { image: ravecarImages.about, title: "حول المنصة", description: "صفحة تقدم فكرة المنصة ورسالتها وما تقدمه للوكالات والزبناء." },
      { image: ravecarImages.contact, title: "تواصل", description: "صفحة تواصل تحتوي على نموذج لإرسال الاستفسارات." },
    ],
    links: projectLinks.ravecar,
    category: "تطبيق ويب",
    status: "مكتمل",
    date: "2026",
   team : ravecarTeamData.ar
  },
];

/* =========================
   6) META (SEPARÉ)
   ========================= */
const metaEN = {
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

    team: "Team",
    teamSubtitle: "Built with my team",
    name: "Name",
    role: "Role",
    contact: "Contact",
    email: "Email",
    phone: "Phone",
    github: "GitHub",
    linkedin: "LinkedIn"
  },
};


const metaFR = {
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

    team: "Équipe",
    teamSubtitle: "Projet réalisé en équipe",
    name: "Nom",
    role: "Rôle",
    contact: "Contact",
    email: "Email",
    phone: "Téléphone",
    github: "GitHub",
    linkedin: "LinkedIn"
  },
};


const metaAR = {
  pageTitle: "المشاريع",
  pageSubtitle: "مجموعة من المشاريع التي أنجزتها مؤخراً.",
  labels: {
    viewMore: "المزيد",
    back: "رجوع",
    liveDemo: "عرض مباشر",
    sourceCode: "الكود المصدري",
    features: "الخصائص",
    technologies: "التقنيات",
    gallery: "المعرض",
    team: "فريق العمل",
    teamSubtitle: "تم إنجاز هذا المشروع ضمن فريق",
    name: "الاسم",
    role: "الدور",
    contact: "التواصل",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    github: "GitHub",
    linkedin: "LinkedIn"
  },
};



const projectsData = {
  en: { meta: metaEN, items: projectsEN  },
  fr: { meta: metaFR, items: projectsFR },
  ar: { meta: metaAR, items: projectsAR  },
};

export default projectsData;
