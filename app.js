const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const navMapButton = document.querySelector(".nav-map-button");
const navMapMenu = document.querySelector("#nav-map-menu");
const miniOrbit = document.querySelector(".mini-orbit");
const miniOrbitItems = Array.from(document.querySelectorAll(".mini-item"));
const languageButton = document.querySelector(".language-button");
const languageMenu = document.querySelector("#language-menu");
const currentLang = document.querySelector(".current-lang");
const productTabs = Array.from(document.querySelectorAll(".product-tab"));
const orbitStage = document.querySelector(".orbit-stage");
const orbitItems = Array.from(document.querySelectorAll(".orbit-item"));
const productCarousel = document.querySelector(".product-carousel");
let carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));
const productVisual = document.querySelector("[data-product-visual]");
const productTag = document.querySelector("[data-product-detail='tag']");
const productTitle = document.querySelector("[data-product-detail='title']");
const productSummary = document.querySelector("[data-product-detail='summary']");
const productSpecs = document.querySelector("[data-product-detail='specs']");
const productApps = document.querySelector("[data-product-detail='apps']");
const addProductButton = document.querySelector("[data-add-product]");
const productSelect = document.querySelector("select[name='product']");
const leadForm = document.querySelector(".lead-form");
const feedback = document.querySelector(".form-feedback");
const scrollTopButton = document.querySelector(".scroll-top");

const translations = {
  es: {
    "brand.claim": "High Voltage Battery Systems",
    "nav.applications": "Aplicaciones",
    "nav.products": "Productos",
    "nav.company": "Empresa",
    "nav.process": "Como trabajamos",
    "nav.docs": "Documentacion",
    "nav.contact": "Contacto",
    "nav.map": "Mapa web",
    "hero.eyebrow": "Sistemas de baterias de alto voltaje",
    "hero.title": "Soluciones avanzadas para fabricantes que electrifican aplicaciones exigentes.",
    "hero.text": "Arquitecturas modulares, packs en serie, gestion multipack y soporte tecnico para OEMs que necesitan integrar bateria, comunicacion, seguridad y rendimiento desde fases tempranas de diseno.",
    "hero.products": "Ver sistemas",
    "hero.contact": "Solicitar analisis tecnico",
    "metric.energy": "Energia por pack",
    "metric.voltage": "Tensiones nominales",
    "metric.protection": "Envolvente industrial",
    "metric.management": "Gestion multipack",
    "orbit.core": "Arquitectura modular",
    "orbit.eyebrow": "Mapa de la web",
    "orbit.title": "Un recorrido visual por las areas clave.",
    "orbit.text": "La navegacion principal se presenta como una orbita de secciones: productos, aplicaciones, empresa, proceso y documentacion. Al pasar sobre cada punto, aparece el contexto sin obligar a entrar todavia.",
    "orbit.products": "Productos",
    "orbit.productsText": "NMC, LFP y BMS con datos clave.",
    "orbit.apps": "Aplicaciones",
    "orbit.appsText": "Bus, marino, agricola, VCL, carga y rail.",
    "orbit.process": "Proceso",
    "orbit.processText": "Presupuesto, integracion y puesta en marcha.",
    "orbit.company": "Empresa",
    "orbit.companyText": "Capacidades para OEMs exigentes.",
    "orbit.docs": "Documentacion",
    "orbit.docsText": "CAD, CAN, HV y puesta en marcha.",
    "intro.eyebrow": "Propuesta base desarrollada",
    "intro.title": "La misma logica industrial, con una web mas clara, mas tecnica y mas comercial.",
    "intro.text": "Esta version conserva el mapa de la web actual: aplicaciones, productos, empresa, proceso, documentacion y contacto. La diferencia esta en la jerarquia, la lectura rapida y la capacidad de convertir una visita tecnica en una solicitud cualificada.",
    "products.eyebrow": "Productos",
    "products.title": "Packs y sistemas para integracion profesional.",
    "products.text": "Las familias se presentan con datos clave, compatibilidad de aplicacion y CTA tecnico. La informacion esta ordenada para quien compara arquitectura, dimensiones, energia, tension y soporte.",
    "products.nmcShort": "Alta densidad y formato slim",
    "products.lfpShort": "Seguridad, vida util y escalado",
    "products.bmsShort": "Control central multipack",
    "products.add": "Incluir en consulta",
    "products.docs": "Ver documentacion",
    "carousel.eyebrow": "Vista rapida",
    "carousel.title": "Una cinta visual para reconocer la familia antes de leer la ficha.",
    "carousel.nmc": "Alta densidad y formato slim.",
    "carousel.lfp": "Vida util, seguridad y escalado.",
    "carousel.bms": "Control multipack centralizado.",
    "apps.eyebrow": "Casos de uso",
    "apps.title": "Aplicaciones de movilidad electrica donde la integracion importa.",
    "apps.text": "La navegacion por aplicacion reproduce la logica actual, pero con tarjetas mas escaneables, mensajes mas consistentes y CTA orientado a validacion tecnica.",
    "apps.busTitle": "Autobuses electricos e hidrogeno",
    "apps.busText": "Solucion multi-rack compatible con estandares del mercado para vehiculos urbanos e interurbanos.",
    "apps.seaTitle": "Marino electrico e hibrido",
    "apps.seaText": "Arquitecturas paralelizadas para unidades de potencia electricas e hibridas en entornos exigentes.",
    "apps.agrTitle": "Agricola",
    "apps.agrText": "Sistemas para demandas de energia y potencia sobre el terreno, con foco en robustez e integracion.",
    "apps.vclTitle": "Vehiculos comerciales ligeros",
    "apps.vclText": "Pack compatible con integracion en automocion, series cortas y medias y necesidades de industrializacion.",
    "apps.chargeTitle": "Estaciones de carga moviles",
    "apps.chargeText": "Baterias para estaciones semiestacionarias, eventos temporales y soporte energetico local.",
    "apps.railTitle": "Ferrocarril",
    "apps.railText": "Solucion multipack para grandes necesidades energeticas en operaciones electricas ferroviarias.",
    "apps.cta": "Validar aplicacion",
    "company.eyebrow": "Empresa",
    "company.title": "Capacidades centradas en OEMs con aplicaciones exigentes.",
    "company.text": "La web debe explicar mejor para quien es la solucion: fabricantes que no quieren adaptar su vehiculo a una bateria cerrada, equipos que necesitan agilidad, compatibilidad de mercado, soporte tecnico y produccion de series cortas o medias.",
    "company.capOneTitle": "Flexibilidad de integracion",
    "company.capOneText": "Montaje vertical u horizontal, datos CAD y validacion temprana de envolvente.",
    "company.capTwoTitle": "Soporte tecnico cercano",
    "company.capTwoText": "Acompanamiento en diseno, comunicacion, instalacion inicial y puesta en marcha.",
    "company.capThreeTitle": "Series cortas y medias",
    "company.capThreeText": "Orientacion a proyectos que necesitan industrializacion sin perder capacidad de adaptacion.",
    "company.capFourTitle": "Arquitectura multipack",
    "company.capFourText": "Escalado modular de energia y control coordinado de comunicacion, seguridad y rendimiento.",
    "process.eyebrow": "Como trabajamos",
    "process.title": "Tres momentos claros desde el presupuesto hasta la primera instalacion.",
    "process.text": "La version desarrollada convierte el proceso actual en una lectura ordenada: antes de la oferta, tras el pedido y durante la puesta en marcha.",
    "process.oneTitle": "Presupuesto y viabilidad",
    "process.oneA": "Validacion mecanica con datos CAD de envolvente.",
    "process.oneB": "Revision de comunicacion con vehiculo o aplicacion.",
    "process.oneC": "Simulacion de prestaciones segun perfil de uso.",
    "process.oneD": "Definicion del grado de personalizacion viable.",
    "process.twoTitle": "Pedido e integracion detallada",
    "process.twoA": "Entrega de manual y documentacion tecnica pertinente.",
    "process.twoB": "Definicion mecanica, electrica, termica y de comunicaciones.",
    "process.twoC": "Alineacion de datos macro acordados en presupuesto.",
    "process.threeTitle": "Puesta en marcha",
    "process.threeA": "Recepcion: integridad mecanica, electrica y comunicaciones.",
    "process.threeB": "Capacitacion en uso del producto.",
    "process.threeC": "Soporte in situ para la integracion inicial.",
    "docs.eyebrow": "Documentacion tecnica",
    "docs.title": "Informacion tecnica estructurada para decidir el siguiente paso.",
    "docs.text": "Ficha de producto, dimensiones, energia, tension, comunicacion, requisitos de integracion y rango operativo deben aparecer vinculados a una consulta clara, no dispersos en bloques repetidos.",
    "docs.cardOne": "Datos de envolvente",
    "docs.cardTwo": "Comunicacion y control",
    "docs.cardThree": "Arquitectura de tension",
    "docs.cardFour": "Manual y puesta en marcha",
    "contact.eyebrow": "Contacto tecnico-comercial",
    "contact.title": "Cuanto mejor llegue la necesidad, mas rapida sera la propuesta.",
    "contact.text": "El formulario recoge aplicacion, fase, familia de producto y contexto tecnico. Es el punto donde la web deja de ser escaparate y empieza a cualificar una oportunidad real.",
    "form.name": "Nombre",
    "form.company": "Empresa",
    "form.email": "Correo profesional",
    "form.country": "Pais",
    "form.application": "Aplicacion",
    "form.product": "Producto de interes",
    "form.stage": "Fase del proyecto",
    "form.volume": "Volumen estimado",
    "form.message": "Necesidad tecnica",
    "form.placeholder": "Energia requerida, tension, restricciones mecanicas, comunicaciones, plazos o contexto del vehiculo.",
    "form.select": "Selecciona una opcion",
    "form.optional": "Opcional",
    "form.privacy": "Acepto el tratamiento de mis datos para responder a esta solicitud.",
    "form.submit": "Enviar consulta",
    "option.bus": "Autobuses",
    "option.sea": "Marino",
    "option.agr": "Agricola",
    "option.vcl": "Vehiculos comerciales ligeros",
    "option.charge": "Estaciones de carga moviles",
    "option.rail": "Ferrocarril",
    "option.unknown": "A definir",
    "option.system": "Sistema completo",
    "option.compare": "Comparar alternativas",
    "option.quote": "Presupuesto inicial",
    "option.design": "Diseno de integracion",
    "option.validation": "Validacion tecnica",
    "option.purchase": "Compra o industrializacion",
    "option.prototype": "Prototipo",
    "option.short": "Serie corta",
    "option.medium": "Serie media",
    "option.open": "A definir",
    "footer.text": "Sistemas de baterias de alto voltaje para aplicaciones exigentes de movilidad electrica.",
    "footer.apps": "Aplicaciones",
    "footer.products": "Productos",
    "footer.company": "Empresa",
    "footer.process": "Proceso",
    "footer.contact": "Contacto",
    "footer.mailTitle": "Contacto directo",
    "footer.scope": "Prototipo web base desarrollada",
    "feedback.invalid": "Revisa los campos obligatorios para poder enviar la consulta.",
    "feedback.invalidValue": "El formulario contiene valores no contemplados. Revisa los campos marcados.",
    "feedback.sent": "Consulta preparada. En una version final se conectaria con el canal comercial.",
    "feedback.added": "Producto incluido en la consulta tecnica."
  },
  en: {},
  eu: {},
  fr: {}
};

translations.en = {
  ...translations.es,
  "nav.applications": "Applications",
  "nav.products": "Products",
  "nav.company": "Company",
  "nav.process": "How we work",
  "nav.docs": "Documentation",
  "nav.contact": "Contact",
  "nav.map": "Website map",
  "hero.eyebrow": "High-voltage battery systems",
  "hero.title": "Advanced solutions for manufacturers electrifying demanding applications.",
  "hero.text": "Modular architectures, serial packs, multipack management and technical support for OEMs integrating battery, communication, safety and performance from early design stages.",
  "hero.products": "View systems",
  "hero.contact": "Request technical analysis",
  "orbit.core": "Modular architecture",
  "orbit.eyebrow": "Website map",
  "orbit.title": "A visual route through the key areas.",
  "orbit.text": "The main navigation is presented as an orbit of sections: products, applications, company, process and documentation. Hovering each point reveals context before entering.",
  "orbit.products": "Products",
  "orbit.productsText": "NMC, LFP and BMS with key data.",
  "orbit.apps": "Applications",
  "orbit.appsText": "Bus, marine, agricultural, LCV, charging and rail.",
  "orbit.process": "Process",
  "orbit.processText": "Quotation, integration and commissioning.",
  "orbit.company": "Company",
  "orbit.companyText": "Capabilities for demanding OEMs.",
  "orbit.docs": "Documentation",
  "orbit.docsText": "CAD, CAN, HV and commissioning.",
  "intro.eyebrow": "Developed base proposal",
  "intro.title": "The same industrial logic, with a clearer, more technical and more commercial website.",
  "products.title": "Packs and systems for professional integration.",
  "carousel.eyebrow": "Quick view",
  "carousel.title": "A visual ribbon to recognize the family before reading the datasheet.",
  "carousel.nmc": "High density and slim format.",
  "carousel.lfp": "Lifetime, safety and scaling.",
  "carousel.bms": "Centralized multipack control.",
  "apps.title": "Electric mobility applications where integration matters.",
  "company.title": "Capabilities focused on OEMs with demanding applications.",
  "process.title": "Three clear moments from quotation to first installation.",
  "docs.title": "Structured technical information to decide the next step.",
  "contact.title": "The clearer the need arrives, the faster the proposal becomes.",
  "form.name": "Name",
  "form.company": "Company",
  "form.email": "Professional email",
  "form.country": "Country",
  "form.application": "Application",
  "form.product": "Product of interest",
  "form.stage": "Project stage",
  "form.volume": "Estimated volume",
  "form.message": "Technical need",
  "form.select": "Select an option",
  "form.optional": "Optional",
  "form.privacy": "I accept the processing of my data to answer this request.",
  "form.submit": "Send enquiry",
  "footer.process": "Process",
  "footer.mailTitle": "Direct contact",
  "footer.scope": "Developed base web prototype",
  "feedback.invalid": "Review the required fields before sending the enquiry.",
  "feedback.invalidValue": "The form contains unsupported values. Review the marked fields.",
  "feedback.sent": "Enquiry prepared. In a final version it would connect with the commercial channel.",
  "feedback.added": "Product included in the technical enquiry."
};

translations.eu = {
  ...translations.es,
  "nav.applications": "Aplikazioak",
  "nav.products": "Produktuak",
  "nav.company": "Enpresa",
  "nav.process": "Nola lan egiten dugu",
  "nav.docs": "Dokumentazioa",
  "nav.contact": "Kontaktua",
  "nav.map": "Web mapa",
  "hero.eyebrow": "Tentsio handiko bateria sistemak",
  "hero.title": "Aplikazio zorrotzak elektrifikatzen dituzten fabrikatzaileentzako soluzio aurreratuak.",
  "hero.products": "Sistemak ikusi",
  "hero.contact": "Analisi teknikoa eskatu",
  "orbit.core": "Arkitektura modularra",
  "orbit.eyebrow": "Web mapa",
  "orbit.title": "Arlo nagusietatik ibilbide bisuala.",
  "orbit.text": "Nabigazio nagusia sekzioen orbita gisa aurkezten da: produktuak, aplikazioak, enpresa, prozesua eta dokumentazioa. Puntu bakoitzean pasatzean testuingurua agertzen da.",
  "orbit.products": "Produktuak",
  "orbit.productsText": "NMC, LFP eta BMS datu nagusiekin.",
  "orbit.apps": "Aplikazioak",
  "orbit.appsText": "Bus, itsas, nekazaritza, VCL, karga eta trena.",
  "orbit.process": "Prozesua",
  "orbit.processText": "Aurrekontua, integrazioa eta martxan jartzea.",
  "orbit.company": "Enpresa",
  "orbit.companyText": "OEM zorrotzentzako gaitasunak.",
  "orbit.docs": "Dokumentazioa",
  "orbit.docsText": "CAD, CAN, HV eta martxan jartzea.",
  "products.title": "Integrazio profesionalerako pack eta sistemak.",
  "carousel.eyebrow": "Ikuspegi azkarra",
  "carousel.title": "Fitxa irakurri aurretik familia ezagutzeko zinta bisuala.",
  "carousel.nmc": "Dentsitate handia eta formatu slim.",
  "carousel.lfp": "Bizitza erabilgarria, segurtasuna eta eskalatzea.",
  "carousel.bms": "Multipack kontrol zentralizatua.",
  "apps.title": "Integrazioa garrantzitsua den mugikortasun elektrikoko aplikazioak.",
  "company.title": "Aplikazio zorrotzak dituzten OEMentzat bideratutako gaitasunak.",
  "process.title": "Hiru une argi aurrekontutik lehen instalaziora.",
  "docs.title": "Hurrengo urratsa erabakitzeko informazio tekniko egituratua.",
  "contact.title": "Beharra zenbat eta argiago iritsi, orduan eta azkarrago proposamena.",
  "form.name": "Izena",
  "form.company": "Enpresa",
  "form.email": "Laneko posta",
  "form.country": "Herrialdea",
  "form.application": "Aplikazioa",
  "form.product": "Intereseko produktua",
  "form.stage": "Proiektuaren fasea",
  "form.volume": "Aurreikusitako bolumena",
  "form.message": "Behar teknikoa",
  "form.select": "Aukeratu aukera bat",
  "form.optional": "Aukerakoa",
  "form.privacy": "Nire datuen tratamendua onartzen dut eskaera honi erantzuteko.",
  "form.submit": "Bidali kontsulta",
  "footer.process": "Prozesua",
  "footer.mailTitle": "Kontaktu zuzena",
  "footer.scope": "Web base garatuaren prototipoa",
  "feedback.invalid": "Berrikusi derrigorrezko eremuak kontsulta bidali aurretik.",
  "feedback.invalidValue": "Formularioak aurreikusi gabeko balioak ditu. Berrikusi markatutako eremuak.",
  "feedback.sent": "Kontsulta prestatuta. Azken bertsioan kanal komertzialarekin konektatuko litzateke.",
  "feedback.added": "Produktua kontsulta teknikoan gehitu da."
};

translations.fr = {
  ...translations.es,
  "nav.applications": "Applications",
  "nav.products": "Produits",
  "nav.company": "Entreprise",
  "nav.process": "Notre methode",
  "nav.docs": "Documentation",
  "nav.contact": "Contact",
  "nav.map": "Carte du site",
  "hero.eyebrow": "Systemes de batteries haute tension",
  "hero.title": "Solutions avancees pour fabricants electrifiant des applications exigeantes.",
  "hero.products": "Voir les systemes",
  "hero.contact": "Demander une analyse technique",
  "orbit.core": "Architecture modulaire",
  "orbit.eyebrow": "Carte du site",
  "orbit.title": "Un parcours visuel des zones cles.",
  "orbit.text": "La navigation principale se presente comme une orbite de sections: produits, applications, entreprise, processus et documentation. Au survol, chaque point affiche son contexte.",
  "orbit.products": "Produits",
  "orbit.productsText": "NMC, LFP et BMS avec donnees cles.",
  "orbit.apps": "Applications",
  "orbit.appsText": "Bus, marine, agricole, VCL, recharge et rail.",
  "orbit.process": "Processus",
  "orbit.processText": "Devis, integration et mise en service.",
  "orbit.company": "Entreprise",
  "orbit.companyText": "Capacites pour OEM exigeants.",
  "orbit.docs": "Documentation",
  "orbit.docsText": "CAD, CAN, HV et mise en service.",
  "products.title": "Packs et systemes pour integration professionnelle.",
  "carousel.eyebrow": "Vue rapide",
  "carousel.title": "Un ruban visuel pour reconnaitre la famille avant la fiche.",
  "carousel.nmc": "Haute densite et format slim.",
  "carousel.lfp": "Duree de vie, securite et mise a l'echelle.",
  "carousel.bms": "Controle multipack centralise.",
  "apps.title": "Applications de mobilite electrique ou l'integration compte.",
  "company.title": "Capacites centrees sur les OEM avec applications exigeantes.",
  "process.title": "Trois moments clairs du devis a la premiere installation.",
  "docs.title": "Information technique structuree pour decider la suite.",
  "contact.title": "Plus le besoin arrive clairement, plus la proposition est rapide.",
  "form.name": "Nom",
  "form.company": "Entreprise",
  "form.email": "Email professionnel",
  "form.country": "Pays",
  "form.application": "Application",
  "form.product": "Produit d'interet",
  "form.stage": "Phase du projet",
  "form.volume": "Volume estime",
  "form.message": "Besoin technique",
  "form.select": "Selectionner une option",
  "form.optional": "Optionnel",
  "form.privacy": "J'accepte le traitement de mes donnees pour repondre a cette demande.",
  "form.submit": "Envoyer la demande",
  "footer.process": "Processus",
  "footer.mailTitle": "Contact direct",
  "footer.scope": "Prototype web base developpee",
  "feedback.invalid": "Verifiez les champs obligatoires avant d'envoyer la demande.",
  "feedback.invalidValue": "Le formulaire contient des valeurs non prevues. Verifiez les champs marques.",
  "feedback.sent": "Demande preparee. Dans une version finale, elle serait connectee au canal commercial.",
  "feedback.added": "Produit inclus dans la demande technique."
};

const productData = {
  es: {
    nmc: {
      tag: "Series NMC",
      title: "Pack compacto de alta densidad energetica",
      summary: "Baterias fabricadas en serie con espesor compacto, montaje versatil e integracion horizontal o vertical para aplicaciones exigentes.",
      specs: [
        ["35 kWh", "Energia"],
        ["333 V / 666 V", "Tensiones nominales"],
        ["170 Wh/kg", "Energia especifica"],
        ["1320 x 810 x 133 mm", "Dimensiones"]
      ],
      apps: ["BUS", "SEA", "AGR", "VCL", "CHG", "RAIL"]
    },
    lfp: {
      tag: "Series LFP",
      title: "Pack robusto para vida util, seguridad y escalado",
      summary: "Solucion basada en quimica LFP para aplicaciones que priorizan sostenibilidad, estabilidad, seguridad y rendimiento fiable.",
      specs: [
        ["56 kWh", "Energia"],
        ["335 V", "Tension nominal"],
        ["155 Wh/kg", "Energia especifica"],
        ["1185 x 880 x 240 mm", "Dimensiones"]
      ],
      apps: ["BUS", "SEA", "AGR", "VCL", "CHG", "RAIL"]
    },
    bms: {
      tag: "Supermaster BMS",
      title: "Interfaz unica para sistemas de baterias en paralelo",
      summary: "Modulo de gestion que coordina comunicacion con VCU, rendimiento, seguridad y monitorizacion en arquitecturas multipack.",
      specs: [
        ["2-20 packs", "Gestion paralela"],
        ["CANbus 2.0b", "Comunicacion"],
        ["SAE J1939", "Protocolo"],
        ["-40 a 105 C", "Rango operativo"]
      ],
      apps: ["MULTIPACK", "VCU", "SAFETY", "OPS"]
    }
  }
};

productData.en = productData.es;
productData.eu = productData.es;
productData.fr = productData.es;

let selectedLanguage = "es";
let selectedProduct = "nmc";
let orbitPaused = false;
let miniOrbitPaused = false;
let orbitFrame = null;
let miniOrbitFrame = null;

const formRules = {
  fields: new Set(["name", "company", "email", "country", "application", "product", "stage", "volume", "message", "privacy", "website"]),
  required: new Set(["name", "company", "email", "application", "product", "stage", "privacy"]),
  application: new Set(["bus", "sea", "agr", "vcl", "charge", "rail", "unknown"]),
  product: new Set(["nmc", "lfp", "bms", "system", "compare"]),
  stage: new Set(["quote", "design", "validation", "purchase"]),
  volume: new Set(["", "prototype", "short", "medium", "open"]),
  privacy: new Set(["accepted"]),
  name: { min: 2, max: 80, pattern: /^[\p{L}\p{M} .'-]+$/u },
  company: { min: 2, max: 120, pattern: /^[\p{L}\p{M}0-9 .,&()/-]+$/u },
  country: { min: 0, max: 80, pattern: /^[\p{L}\p{M} .'-]*$/u },
  message: { min: 0, max: 1400, pattern: /^[^<>{}[\]`]*$/ }
};

function getText(key) {
  return translations[selectedLanguage][key] || translations.es[key] || "";
}

function isEditableControl(element) {
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLSelectElement ||
    element instanceof HTMLTextAreaElement
  );
}

function isValidLength(value, rule) {
  const length = value.trim().length;
  return length >= rule.min && length <= rule.max;
}

function validateTextField(element, rule) {
  const value = element.value.trim().replace(/\s+/g, " ");
  if (!isValidLength(value, rule)) return false;
  return rule.pattern.test(value);
}

function normalizeFieldValue(element) {
  if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
    element.value = element.value.trim().replace(/\s+/g, " ");
  }
}

function renderProduct(productKey) {
  const data = productData[selectedLanguage][productKey] || productData.es.nmc;
  selectedProduct = productKey;

  productTabs.forEach((tab) => {
    const isActive = tab.dataset.product === productKey;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  if (productVisual) {
    productVisual.className = `product-machine product-machine-${productKey}`;
  }

  if (productTag) productTag.textContent = data.tag;
  if (productTitle) productTitle.textContent = data.title;
  if (productSummary) productSummary.textContent = data.summary;

  if (productSpecs) {
    productSpecs.replaceChildren();
    data.specs.forEach(([value, label]) => {
      const card = document.createElement("div");
      const strong = document.createElement("strong");
      const span = document.createElement("span");
      card.className = "spec-card";
      strong.textContent = value;
      span.textContent = label;
      card.append(strong, span);
      productSpecs.appendChild(card);
    });
  }

  if (productApps) {
    productApps.replaceChildren();
    data.apps.forEach((item) => {
      const badge = document.createElement("span");
      badge.textContent = item;
      productApps.appendChild(badge);
    });
  }
}

function setupProductCarousel() {
  if (!productCarousel || productCarousel.dataset.loopReady === "true") return;

  carouselSlides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    clone.dataset.clone = "true";
    productCarousel.appendChild(clone);
  });

  productCarousel.dataset.loopReady = "true";
  carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));
}

function setActiveCarouselSlide(productKey) {
  carouselSlides.forEach((slide) => {
    slide.classList.toggle("is-active", slide.dataset.product === productKey);
  });
}

function startOrbit() {
  if (!orbitStage || orbitItems.length === 0) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const start = performance.now();
  const baseAngles = orbitItems.map((_, index) => (Math.PI * 2 * index) / orbitItems.length - Math.PI / 2);

  function tick(now) {
    const rect = orbitStage.getBoundingClientRect();
    const radiusX = Math.max(142, Math.min(rect.width * 0.36, 330));
    const radiusY = Math.max(104, Math.min(rect.height * 0.3, 176));
    const speed = reducedMotion || orbitPaused ? 0 : (now - start) / 9800;

    orbitItems.forEach((item, index) => {
      const angle = baseAngles[index] + speed;
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;
      item.style.setProperty("--orbit-x", `${x}px`);
      item.style.setProperty("--orbit-y", `${y}px`);
    });

    orbitFrame = window.requestAnimationFrame(tick);
  }

  orbitFrame = window.requestAnimationFrame(tick);
}

function startMiniOrbit() {
  if (!miniOrbit || miniOrbitItems.length === 0) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const start = performance.now();
  const baseAngles = miniOrbitItems.map((_, index) => (Math.PI * 2 * index) / miniOrbitItems.length - Math.PI / 2);

  function tick(now) {
    const rect = miniOrbit.getBoundingClientRect();
    const radiusX = Math.max(104, Math.min(rect.width * 0.31, 160));
    const radiusY = Math.max(58, Math.min(rect.height * 0.24, 78));
    const speed = reducedMotion || miniOrbitPaused ? 0 : (now - start) / 7600;

    miniOrbitItems.forEach((item, index) => {
      const angle = baseAngles[index] + speed;
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;
      item.style.setProperty("--mini-x", `${x}px`);
      item.style.setProperty("--mini-y", `${y}px`);
    });

    miniOrbitFrame = window.requestAnimationFrame(tick);
  }

  miniOrbitFrame = window.requestAnimationFrame(tick);
}

function applyLanguage(lang) {
  selectedLanguage = translations[lang] ? lang : "es";
  document.documentElement.lang = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getText(element.dataset.i18n);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getText(element.dataset.i18nPlaceholder);
    if (value) element.setAttribute("placeholder", value);
  });

  if (currentLang) currentLang.textContent = selectedLanguage.toUpperCase();
  renderProduct(selectedProduct);
}

function validateLeadForm(form) {
  let firstInvalid = null;
  const controls = Array.from(form.elements).filter(isEditableControl);

  controls.forEach((element) => element.setCustomValidity(""));
  controls.forEach(normalizeFieldValue);

  const unexpected = controls.find((element) => element.name && !formRules.fields.has(element.name));
  if (unexpected) {
    unexpected.setCustomValidity(getText("feedback.invalidValue"));
    return { valid: false, firstInvalid: unexpected };
  }

  const namedControls = controls.filter((element) => element.name);
  const seen = new Set();
  const duplicate = namedControls.find((element) => {
    if (element.type === "radio") return false;
    if (seen.has(element.name)) return true;
    seen.add(element.name);
    return false;
  });

  if (duplicate) {
    duplicate.setCustomValidity(getText("feedback.invalidValue"));
    return { valid: false, firstInvalid: duplicate };
  }

  const missingRequired = Array.from(formRules.required).find((field) => !form.elements[field]);
  if (missingRequired) return { valid: false, firstInvalid: null };

  const data = new FormData(form);
  for (const key of data.keys()) {
    if (!formRules.fields.has(key)) return { valid: false, firstInvalid: null };
  }

  const name = form.elements.name;
  const company = form.elements.company;
  const email = form.elements.email;
  const country = form.elements.country;
  const application = form.elements.application;
  const product = form.elements.product;
  const stage = form.elements.stage;
  const volume = form.elements.volume;
  const message = form.elements.message;
  const privacy = form.elements.privacy;
  const website = form.elements.website;

  const checks = [
    [name, validateTextField(name, formRules.name)],
    [company, validateTextField(company, formRules.company)],
    [email, email.value.trim().length <= 160 && email.validity.valid],
    [country, validateTextField(country, formRules.country)],
    [application, formRules.application.has(application.value)],
    [product, formRules.product.has(product.value)],
    [stage, formRules.stage.has(stage.value)],
    [volume, formRules.volume.has(volume.value)],
    [message, validateTextField(message, formRules.message)],
    [privacy, privacy.checked && formRules.privacy.has(privacy.value)],
    [website, website.value === ""]
  ];

  checks.forEach(([element, valid]) => {
    if (!valid) {
      element.setCustomValidity(getText("feedback.invalidValue"));
      if (!firstInvalid) firstInvalid = element;
    }
  });

  return { valid: !firstInvalid, firstInvalid };
}

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      mainNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      navMapMenu?.classList.remove("is-open");
      navMapButton?.setAttribute("aria-expanded", "false");
    }
  });
}

if (navMapButton && navMapMenu) {
  navMapButton.addEventListener("click", () => {
    const isOpen = navMapMenu.classList.toggle("is-open");
    navMapButton.setAttribute("aria-expanded", String(isOpen));
  });

  navMapMenu.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest("a");
    if (!link) return;
    navMapMenu.classList.remove("is-open");
    navMapButton.setAttribute("aria-expanded", "false");
    mainNav?.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
}

if (miniOrbit) {
  miniOrbit.addEventListener("mouseenter", () => {
    miniOrbitPaused = true;
  });

  miniOrbit.addEventListener("mouseleave", () => {
    miniOrbitPaused = false;
  });

  miniOrbit.addEventListener("focusin", () => {
    miniOrbitPaused = true;
  });

  miniOrbit.addEventListener("focusout", () => {
    miniOrbitPaused = false;
  });
}

if (languageButton && languageMenu) {
  languageButton.addEventListener("click", () => {
    const isOpen = languageMenu.classList.toggle("is-open");
    languageButton.setAttribute("aria-expanded", String(isOpen));
  });

  languageMenu.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLButtonElement)) return;
    applyLanguage(event.target.dataset.lang);
    languageMenu.classList.remove("is-open");
    languageButton.setAttribute("aria-expanded", "false");
  });
}

if (orbitStage) {
  orbitStage.addEventListener("mouseenter", () => {
    orbitPaused = true;
  });

  orbitStage.addEventListener("mouseleave", () => {
    orbitPaused = false;
  });

  orbitStage.addEventListener("focusin", () => {
    orbitPaused = true;
  });

  orbitStage.addEventListener("focusout", () => {
    orbitPaused = false;
  });
}

productTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const product = tab.dataset.product || "nmc";
    renderProduct(product);
    setActiveCarouselSlide(product);
  });
});

if (productCarousel) {
  productCarousel.addEventListener("mouseover", (event) => {
    if (!(event.target instanceof Element)) return;
    const slide = event.target.closest(".carousel-slide");
    if (!slide) return;
    productCarousel.classList.add("is-paused");
    renderProduct(slide.dataset.product || "nmc");
    setActiveCarouselSlide(slide.dataset.product || "nmc");
  });

  productCarousel.addEventListener("focusin", (event) => {
    if (!(event.target instanceof Element)) return;
    const slide = event.target.closest(".carousel-slide");
    if (!slide) return;
    productCarousel.classList.add("is-paused");
    renderProduct(slide.dataset.product || "nmc");
    setActiveCarouselSlide(slide.dataset.product || "nmc");
  });

  productCarousel.addEventListener("mouseleave", () => {
    productCarousel.classList.remove("is-paused");
  });

  productCarousel.addEventListener("focusout", () => {
    productCarousel.classList.remove("is-paused");
  });
}

if (addProductButton && productSelect) {
  addProductButton.addEventListener("click", () => {
    productSelect.value = selectedProduct;
    if (feedback) feedback.textContent = getText("feedback.added");
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (leadForm && feedback) {
  leadForm.addEventListener("input", (event) => {
    if (isEditableControl(event.target)) event.target.setCustomValidity("");
  });

  leadForm.addEventListener("change", (event) => {
    if (isEditableControl(event.target)) event.target.setCustomValidity("");
  });

  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = validateLeadForm(leadForm);

    if (!result.valid || !leadForm.checkValidity()) {
      feedback.textContent = result.valid ? getText("feedback.invalid") : getText("feedback.invalidValue");
      result.firstInvalid?.focus();
      leadForm.reportValidity();
      return;
    }

    feedback.textContent = getText("feedback.sent");
    leadForm.reset();
  });
}

if (scrollTopButton) {
  const updateScrollTopVisibility = () => {
    const threshold = Math.max(420, window.innerHeight * 0.65);
    scrollTopButton.classList.toggle("is-visible", window.scrollY > threshold);
  };

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });
  window.addEventListener("resize", updateScrollTopVisibility);
  updateScrollTopVisibility();
}

setupProductCarousel();
applyLanguage("es");
renderProduct("nmc");
setActiveCarouselSlide("nmc");
startOrbit();
startMiniOrbit();
