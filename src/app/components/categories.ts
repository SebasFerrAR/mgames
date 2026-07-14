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
  video?: string; // ID de YouTube para el video hero superior (opcional)
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
    tag: "MGAMES Experience",
    word: "MGAMES",
    h1: ["Revolucionamos", "la manera de", "conectarnos"],
    sub: "Somos una Productora de Experiencias. Diseñamos encuentros que cambian la energía de un grupo.",
    cta: "Contanos tu evento",
    accent: RED,
    video: "k5jQlsqqemU",
    images: [mgGrp1, mgGrp2, mgGrp3, mgGrp4],
    marquee: [
      "Cumpleaños",
      "Despedidas de solterxs",
      "Team Building",
      "Casamientos",
      "Family Day",
      "Baby Shower",
      "Empresariales",
      "Stand de juegos",
    ],
    stats: [
      { num: "+600", label: "Eventos realizados" },
      { num: "+7", label: "Años de experiencia" },
      { num: "+25K", label: "Personas conectadas" },
      { num: "98%", label: "Volverían a reservar" },
    ],
    process: [
      { n: "01", title: "Escuchamos", body: "Nos sumergimos en tu idea para entender qué querés generar." },
      { n: "02", title: "Diseñamos", body: "Convertimos tu visión en una propuesta única." },
      { n: "03", title: "Hacemos", body: "Damos vida a cada detalle para que todo suceda." },
      { n: "04", title: "Disfrutamos", body: "Vos vivís la experiencia. Nosotros nos ocupamos del resto." },
    ],
    fears: [
      { q: "¿Se encargan de la organización completa?", a: "Sí, te acompañamos desde la idea inicial y te entregamos en mano la llave." },
      { q: "¿Puedo sumarlos a un evento que ya estoy organizando?", a: "Sí, estamos listos para ponerle el broche de oro." },
      { q: "¿Hacen eventos fuera de Buenos Aires?", a: "Sí, donde sea. Creemos en las relaciones a larga distancia." },
    ],
    manifesto: {
      line1: "El grupo cambia.",
      line2: "La experiencia no.",
      quote: "Somos el puente entre",
      quote2: "tu imaginación y la realidad.",
    },
  },

  empresas: {
    key: "empresas",
    label: "Empresas",
    tag: "Team Building",
    word: "Empresas",
    h1: ["Un antes", "y un después en la", "energía de tu equipo"],
    sub: "Una experiencia de integración que conecta, fortalece y motiva.",
    cta: "Quiero mi team building",
    accent: "#FFB400",
    images: [emp1, emp2, emp3, emp4],
    marquee: [
      "Team Building",
      "Kickoff",
      "Family Day",
      "Convenciones",
      "Cierre de año",
      "Off-site",
      "Workshops",
      "After Office",
      "Lanzamientos",
    ],
    stats: [
      { num: "+100", label: "Empresas confían" },
      { num: "10 – ∞", label: "Personas por evento" },
      { num: "2hs", label: "Duración promedio" },
      { num: "100%", label: "Indoor + Outdoor" },
    ],
    process: [
      { n: "01", title: "Escuchamos", body: "Nos alineamos con tus objetivos, el perfil del grupo y el propósito del evento." },
      { n: "02", title: "Diseñamos", body: "Creamos una propuesta a medida para tu equipo y cultura." },
      { n: "03", title: "Hacemos", body: "Ejecutamos cada detalle para generar conexión, compromiso e impacto en el equipo." },
      { n: "04", title: "Disfrutamos", body: "Vos conectás con tu equipo. Nosotros nos ocupamos del resto." },
    ],
    fears: [
      { q: "¿Aplica para equipos con distintos perfiles?", a: "Sí, la experiencia está diseñada para integrar personas de diferentes edades, roles y sectores." },
      { q: "¿Requiere esfuerzo físico?", a: "No, priorizamos la participación e integración por sobre el rendimiento físico." },
      { q: "¿Se necesita mucho espacio?", a: "No, nos adaptamos a cualquier espacio, ya sea interior o exterior." },
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
    tag: "Como anillo al dedo",
    word: "Bodas",
    h1: ["Donde se", "rompe el hielo", "y se enciende la chispa."],
    sub: "Prendemos la fiesta con juegos, desafíos y sorpresas.",
    cta: "Quiero mi boda inolvidable",
    accent: "#B8A27A",
    images: [bod1, bod2, bod3, bod4],
    marquee: [
      "Sorpresas",
      "Desafíos",
      "Merch",
      "Ruleta de Desafíos",
      "Shots",
      "Stand de Juegos",
      "Team Bride vs Team Groom",
    ],
    stats: [
      { num: "+80", label: "Bodas al año" },
      { num: "20min", label: "Y la pista explota" },
      { num: "0", label: "Tíos sentados" },
      { num: "1", label: "Recuerdo inolvidable" },
    ],
    process: [
      { n: "01", title: "Escuchamos", body: "Queremos saberlo todo. Nos sumergimos en su historia para entender qué quieren generar." },
      { n: "02", title: "Diseñamos", body: "Creamos la propuesta que te sienta como anillo al dedo." },
      { n: "03", title: "Hacemos", body: "La chispa que enciende el fuego. Mientras antes despeguemos, más alto volamos." },
      { n: "04", title: "Disfrutamos", body: "Más llenos que comer en la casa de la abuela." },
    ],
    fears: [
      { q: "¿Y si la boda es elegante?", a: "Nada más lindo para James Bond que una fiesta fina y elegante." },
      { q: "¿Hacen bodas destino?", a: "Sí. Creemos en las relaciones a larga distancia." },
      { q: "¿En qué momento se hace?", a: "En la recepción, como tanda, en la preboda o postboda. Danos pista y despegamos." },
    ],
    manifesto: {
      line1: "Construimos recuerdos",
      line2: "que duran para siempre.",
      quote: "Ustedes son la fiesta,",
      quote2: "nosotros le damos brillo.",
    },
  },

  despedidas: {
    key: "despedidas",
    label: "Despedidas",
    tag: "Que se pique",
    word: "Despedidas",
    h1: ["Una boda única", "empieza con", "una despedida épica."],
    sub: "Hay momentos en la vida para romper todo. Éste es uno de esos.",
    cta: "Quiero que se pique",
    accent: "#B14BFF",
    images: [des1, des2, des3, des4],
    marquee: ["Sin clichés", "Sin sashes ridículos", "Solo energía", "Que se pique"],
    stats: [
      { num: "0", label: "Disfraces vergonzosos" },
      { num: "+200", label: "Despedidas top" },
      { num: "12", label: "Dinámicas exclusivas" },
      { num: "∞", label: "Anécdotas garantidas" },
    ],
    process: [
      { n: "01", title: "Calentando motores", body: "Formación de equipos & lookeo." },
      { n: "02", title: "Son todos protagonistas", body: "Todos participan, nadie mira de afuera." },
      { n: "03", title: "La fórmula secreta", body: "La energía del juego. La fuerza del equipo." },
      { n: "04", title: "Cierre con impacto", body: "¿Cómo bajás algo que no para de subir?" },
    ],
    fears: [
      { q: "¿Hacen despedidas mixtas?", a: "¡Sí! Mixtas, solo chicas, solo chicos. La despedida que quieras." },
      { q: "¿Va con mi grupo?", a: "Diseñamos la propuesta a medida, pensada para adaptarse al espacio y características del grupo para que entre como anillo al dedo." },
      { q: "¿Tenemos que poner algún material?", a: "Nosotros nos encargamos de todo, lo único que necesitamos es conexión eléctrica." },
    ],
    manifesto: {
      line1: "No es joda.",
      line2: "Bueno, sí. Pero bien hecha.",
      quote: "Antes de firmar los papeles,",
      quote2: "festejamos como se debe.",
    },
  },

  cumple: {
    key: "cumple",
    label: "Cumpleaños",
    tag: "Cumpleaños Diferente",
    word: "Cumples",
    h1: ["No caigas", "en la de", "siempre."],
    sub: "Cuando tu cumple te pide un festejo de verdad, no lo pienses más. Es por acá.",
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
      { n: "01", title: "Calentando motores", body: "Formación de equipos & lookeo." },
      { n: "02", title: "Son todos protagonistas", body: "Todos participan, nadie mira de afuera." },
      { n: "03", title: "La fórmula secreta", body: "La energía del juego. La fuerza del equipo. Donde el desafío conecta." },
      { n: "04", title: "Cierre con impacto", body: "¿Cómo bajás algo que no para de subir?" },
    ],
    fears: [
      { q: "¿Va con mi grupo?", a: "Diseñamos la propuesta a medida, pensada para adaptarse al espacio y características del grupo." },
      { q: "¿Y si el evento es al aire libre y llueve?", a: "Somos flexibles. Un par de gotas no apagan el fuego: podemos realizarlo en un espacio cerrado o reprogramarlo. Si es única fecha y no hay plan B, te devolvemos la reserva." },
      { q: "¿Tenemos que poner algún material?", a: "Nosotros nos encargamos de todo, lo único que necesitamos es conexión eléctrica." },
    ],
    manifesto: {
      line1: "Si tu cumple no se siente",
      line2: "como la final del mundo…",
      quote: "…entonces fue",
      quote2: "una reunión.",
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

// Kids se retira del menú principal (minuta 10/06/26): es un formato dentro
// de Cumpleaños. Neon Night se mantiene como sección propia.
export const CATEGORY_ORDER: CategoryKey[] = [
  "mgames",
  "empresas",
  "bodas",
  "despedidas",
  "cumple",
  "neon",
];
