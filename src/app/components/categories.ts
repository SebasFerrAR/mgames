// mgames (general brand)
import mgGrp1 from 'figma:asset/magnetico (184).jpg'
import mgGrp2 from 'figma:asset/magnetico (212).jpg'
import mgGrp3 from 'figma:asset/magnetico (227).jpg'
import mgGrp4 from 'figma:asset/magnetico (251).jpg'
// empresas (corporate team building)
import emp1 from 'figma:asset/DSC_7105.jpg'
import emp2 from 'figma:asset/DSC_7130.jpg'
import emp3 from 'figma:asset/DSC_7170.jpg'
import emp4 from 'figma:asset/DSC_7180.jpg'
// bodas (weddings)
import bod1 from 'figma:asset/CAR&MARTIN-2647.JPEG'
import bod2 from 'figma:asset/T&D_0354.JPEG'
import bod3 from 'figma:asset/T&D_0362.JPEG'
import bod4 from 'figma:asset/4 -  (338).jpg'
// despedidas (bachelorette/bachelor)
import des1 from 'figma:asset/3 -  (618).jpg'
import des2 from 'figma:asset/3 -  (629).jpg'
import des3 from 'figma:asset/3 -  (633).jpg'
import des4 from 'figma:asset/3 -  (636).jpg'
// cumple (birthdays)
import cum1 from 'figma:asset/30 de Herni-156.jpg'
import cum2 from 'figma:asset/30 de Herni-160.jpg'
import cum3 from 'figma:asset/30 de Herni-199.jpg'
import cum4 from 'figma:asset/30 de Herni-209.jpg'
// kids
import kid1 from 'figma:asset/Actividades 1.jpg'
import kid2 from 'figma:asset/Actividades 7.jpg'
import kid3 from 'figma:asset/Actividades 9.jpg'
import kid4 from 'figma:asset/magnetico (193) (1).jpg'
// neon
import neo1 from 'figma:asset/XXX_8644.jpg'
import neo2 from 'figma:asset/XXX_8710.jpg'
import neo3 from 'figma:asset/DJI_0028.jpg'
import neo4 from 'figma:asset/DJI_0048.jpg'

export type CategoryKey =
  | "mgames"
  | "empresas"
  | "bodas"
  | "despedidas"
  | "cumple"
  | "kids"
  | "neon";

export type Category = {
  key: CategoryKey;
  label: string;
  tag: string;
  word: string;
  h1: string[];
  sub: string;
  cta: string;
  accent: string;
  images: string[];
  marquee: string[];
  stats: { num: string; label: string }[];
  process: { n: string; title: string; body: string }[];
  fears: { q: string; a: string }[];
  manifesto: { line1: string; line2: string; quote: string; quote2: string };
};

const RED = "#E51A2E";

export const CATEGORIES: Record<CategoryKey, Category> = {
  mgames: {
    key: "mgames",
    label: "MGAMES",
    tag: "Experiencias Lúdicas",
    word: "MGAMES",
    h1: ["Revolucionamos", "la manera de", "conectarnos."],
    sub: "No organizamos eventos. Diseñamos experiencias que cambian la energía de un grupo.",
    cta: "Contanos tu evento",
    accent: RED,
    images: [mgGrp1, mgGrp2, mgGrp3, mgGrp4],
    marquee: ["+500 eventos", "Energía diseñada", "Nadie mira de afuera", "El grupo cambia"],
    stats: [
      { num: "+500", label: "Eventos realizados" },
      { num: "98%", label: "Volverían a reservar" },
      { num: "+20K", label: "Personas conectadas" },
      { num: "0", label: "Eventos iguales" },
    ],
    process: [
      { n: "01", title: "Rompehielo", body: "Formación de equipos, colores, lookeo." },
      { n: "02", title: "En Simultáneo", body: "Todos juegan al mismo tiempo. Nadie mira de afuera." },
      { n: "03", title: "Pasan Cosas", body: "Tarjetas, dinámicas, el grupo se suelta." },
      { n: "04", title: "Cierre con Impacto", body: "La experiencia termina. Las historias quedan." },
    ],
    fears: [
      { q: "¿Va con mi grupo?", a: "Adaptamos la energía según el perfil, la edad y el momento." },
      { q: "¿No va a ser incómodo?", a: "No obligamos. Generamos las ganas de participar." },
      { q: "¿Y si no funciona?", a: "No improvisamos. Diseñamos la energía de principio a fin." },
    ],
    manifesto: {
      line1: "El grupo cambia.",
      line2: "La experiencia no.",
      quote: "Jugar no es perder el tiempo.",
      quote2: "Es una forma de vivir mejor.",
    },
  },

  empresas: {
    key: "empresas",
    label: "Empresas",
    tag: "Team Building Real",
    word: "Empresas",
    h1: ["Un antes", "y un después", "en tu equipo."],
    sub: "Team building diseñado para mover la energía de la oficina al lunes siguiente.",
    cta: "Quiero un team building",
    accent: "#FFB400",
    images: [emp1, emp2, emp3, emp4],
    marquee: ["Onboarding", "Kickoff", "Off-site", "Cierre de año", "Convención"],
    stats: [
      { num: "+120", label: "Empresas confían" },
      { num: "10-500", label: "Personas por evento" },
      { num: "2hs", label: "Duración promedio" },
      { num: "100%", label: "Indoor + Outdoor" },
    ],
    process: [
      { n: "01", title: "Diagnóstico", body: "Entendemos al equipo, el momento y el objetivo." },
      { n: "02", title: "Diseño", body: "Armamos la experiencia a medida de tu cultura." },
      { n: "03", title: "Producción", body: "Llevamos todo. Vos disfrutás como uno más." },
      { n: "04", title: "Insights", body: "Te dejamos un mapa de lo que pasó en tu equipo." },
    ],
    fears: [
      { q: "¿Y si mi equipo es serio?", a: "Diseñamos progresión. Empieza suave y escala." },
      { q: "¿Sirve para remotos?", a: "Tenemos formato híbrido y presencial específico." },
      { q: "¿Cuánto interrumpe?", a: "Lo justo. Energía sin agotamiento." },
    ],
    manifesto: {
      line1: "Tu equipo no es",
      line2: "una planilla.",
      quote: "Mover la energía",
      quote2: "es mover el negocio.",
    },
  },

  bodas: {
    key: "bodas",
    label: "Bodas",
    tag: "Experiencia Nupcial",
    word: "Bodas",
    h1: ["Donde se", "rompe el hielo", "y se enciende la chispa."],
    sub: "Una experiencia que transforma la celebración en un recuerdo imborrable.",
    cta: "Quiero mi boda inolvidable",
    accent: "#B8A27A",
    images: [bod1, bod2, bod3, bod4],
    marquee: ["Familia + amigos", "Sin protocolo", "Pista llena", "Sorpresa elegante"],
    stats: [
      { num: "+80", label: "Bodas al año" },
      { num: "20min", label: "Y la pista explota" },
      { num: "0", label: "Tíos sentados" },
      { num: "1", label: "Recuerdo inolvidable" },
    ],
    process: [
      { n: "01", title: "Bienvenida", body: "Romper el hielo entre familias que no se conocen." },
      { n: "02", title: "Activación", body: "Dinámica sutil que se infiltra en la previa." },
      { n: "03", title: "Explosión", body: "Pista llena en 20 minutos. Todos." },
      { n: "04", title: "Memoria", body: "Lo que tus invitados van a contar por años." },
    ],
    fears: [
      { q: "¿Va con la onda elegante?", a: "Adaptamos la estética al lookbook de tu boda." },
      { q: "¿Interrumpe el flow?", a: "Lo amplificamos. No competimos con el DJ, lo potenciamos." },
      { q: "¿Mis tíos lo harán?", a: "Sí. Tenemos el diseño exacto para que no quede nadie afuera." },
    ],
    manifesto: {
      line1: "La pista se llena.",
      line2: "Sola.",
      quote: "El sí es de ustedes.",
      quote2: "La fiesta, de todos.",
    },
  },

  despedidas: {
    key: "despedidas",
    label: "Despedidas",
    tag: "Que se pique",
    word: "Despedidas",
    h1: ["Una boda única", "empieza con", "una despedida épica."],
    sub: "La despedida que todos van a recordar. Sin caer en lo de siempre.",
    cta: "Quiero que se pique",
    accent: "#FF3D7F",
    images: [des1, des2, des3, des4],
    marquee: ["Sin clichés", "Sin sashes ridículos", "Solo energía", "Que se pique"],
    stats: [
      { num: "0", label: "Disfraces vergonzosos" },
      { num: "+200", label: "Despedidas top" },
      { num: "12", label: "Dinámicas exclusivas" },
      { num: "∞", label: "Anécdotas garantidas" },
    ],
    process: [
      { n: "01", title: "Brief Secreto", body: "Hablamos con quien organiza. El/la protagonista no sabe." },
      { n: "02", title: "Recepción", body: "Llegan. Caen. Se sueltan en 5 minutos." },
      { n: "03", title: "Picada", body: "Dinámicas, retos, sorpresas a medida del grupo." },
      { n: "04", title: "Final Glorioso", body: "Pasan a la fiesta o al boliche ya cargados de historias." },
    ],
    fears: [
      { q: "¿Va a ser cringe?", a: "Diseñamos sin clichés. Nada de vergüenza ajena." },
      { q: "¿Funciona si somos pocos?", a: "Desde 8 personas. Cuanto más íntimo, más fuerte." },
      { q: "¿Y si la protagonista es tímida?", a: "Justamente. La dinámica la incluye sin exponerla." },
    ],
    manifesto: {
      line1: "Despedirse",
      line2: "no es despedida.",
      quote: "Es la primera fiesta",
      quote2: "de la próxima vida.",
    },
  },

  cumple: {
    key: "cumple",
    label: "Cumpleaños",
    tag: "Cumpleaños Diferente",
    word: "Cumples",
    h1: ["No caigas", "en la de", "siempre."],
    sub: "Este año vas por algo distinto. Una experiencia que realmente sorprende.",
    cta: "Quiero un cumple distinto",
    accent: "#3AD0FF",
    images: [cum1, cum2, cum3, cum4],
    marquee: ["30s", "40s", "50s", "Cumple sorpresa", "Que no sea karaoke"],
    stats: [
      { num: "0", label: "Karaokes obligados" },
      { num: "+150", label: "Cumpleaños top" },
      { num: "2hs", label: "Que pasan volando" },
      { num: "1", label: "Cumple inolvidable" },
    ],
    process: [
      { n: "01", title: "Brief con cómplice", body: "Si es sorpresa, hablamos con quien organiza." },
      { n: "02", title: "Activación", body: "Los invitados llegan y caen en la dinámica sin avisar." },
      { n: "03", title: "Punto Alto", body: "Momento dedicado al cumpleañero/a, sin papelones." },
      { n: "04", title: "Cierre", body: "Quedan con ganas de más. Eso es éxito." },
    ],
    fears: [
      { q: "¿Y si somos un grupo viejo?", a: "Hicimos cumples de 50 y 70. Adaptamos todo." },
      { q: "¿En mi casa entra?", a: "Sí. Tenemos formato chico para living." },
      { q: "¿Se hace cuando ya están tomados?", a: "Justamente cuando se relaja, entra mejor." },
    ],
    manifesto: {
      line1: "Otro año.",
      line2: "Otra cosa.",
      quote: "Soplar velitas",
      quote2: "no es un plan.",
    },
  },

  kids: {
    key: "kids",
    label: "Kids",
    tag: "Experiencia Infantil",
    word: "Kids",
    h1: ["El cumple", "que van a contar", "en el aula."],
    sub: "Energía, juegos y dinámicas pensadas para los más chicos. Sin animador chillón.",
    cta: "Quiero un cumple kids",
    accent: "#3AD06A",
    images: [kid1, kid2, kid3, kid4],
    marquee: ["6 a 12 años", "Sin pantallas", "Sin papelones", "Padres tranquilos"],
    stats: [
      { num: "+200", label: "Cumples kids" },
      { num: "0", label: "Animadores cringe" },
      { num: "6-12", label: "Edad recomendada" },
      { num: "1.5hs", label: "Energía pura" },
    ],
    process: [
      { n: "01", title: "Equipos", body: "Lookeo de colores, sentido de pertenencia." },
      { n: "02", title: "Juegos", body: "Mini-misiones diseñadas para que jueguen todos." },
      { n: "03", title: "Reto Final", body: "Trabajo en equipo + sorpresa." },
      { n: "04", title: "Premiación", body: "Todos ganan algo. Lo importante: lo vivido." },
    ],
    fears: [
      { q: "¿Y si hay tímidos?", a: "Dinámicas que NO los exponen, los integran." },
      { q: "¿Llueve?", a: "Tenemos formato indoor 100% reemplazable." },
      { q: "¿Edades mezcladas?", a: "Diseñamos para que los grandes ayuden a los chicos." },
    ],
    manifesto: {
      line1: "Los chicos",
      line2: "no necesitan más pantallas.",
      quote: "Necesitan",
      quote2: "más historias para contar.",
    },
  },

  neon: {
    key: "neon",
    label: "Neon Night",
    tag: "Neon Experience",
    word: "Neon",
    h1: ["Cuando se", "apagan las luces,", "empieza el juego."],
    sub: "Una experiencia inmersiva bajo luz negra, glow y adrenalina pura.",
    cta: "Quiero la Neon Night",
    accent: "#B14BFF",
    images: [neo1, neo2, neo3, neo4],
    marquee: ["UV", "Glow", "Adrenalina", "Cero realidad", "Solo neón"],
    stats: [
      { num: "UV", label: "Luz negra inmersiva" },
      { num: "+50", label: "Eventos Neon" },
      { num: "100%", label: "Otro mundo" },
      { num: "1", label: "Concepto único" },
    ],
    process: [
      { n: "01", title: "Black-Out", body: "Apagamos las luces. Cambia el set." },
      { n: "02", title: "Glow Up", body: "Pintura UV, accesorios, lookeo del grupo." },
      { n: "03", title: "Misiones", body: "Retos que solo se pueden ver bajo luz negra." },
      { n: "04", title: "Reveal", body: "Lights on. Lo que viste. Lo que no." },
    ],
    fears: [
      { q: "¿Necesito un salón especial?", a: "Llevamos todo: UV, props, ambientación." },
      { q: "¿Y si soy alérgico a la pintura?", a: "Usamos pintura cosmética testeada." },
      { q: "¿Funciona en cualquier edad?", a: "De 18 en adelante. Es +18 y se siente." },
    ],
    manifesto: {
      line1: "Hay realidades",
      line2: "que solo se ven",
      quote: "Cuando apagás",
      quote2: "todo lo demás.",
    },
  },
};

export const CATEGORY_ORDER: CategoryKey[] = [
  "mgames",
  "empresas",
  "bodas",
  "despedidas",
  "cumple",
  "kids",
  "neon",
];
