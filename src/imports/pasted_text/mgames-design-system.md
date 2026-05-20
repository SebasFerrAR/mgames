MGAMES — Figma AI Design Prompt
Version: 1.0 | Language: English (technical) | Content: Spanish

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — GLOBAL STYLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COLOR SYSTEM (strict HEX usage):
- Primary Red:       #E51A2E  → CTAs, highlights, active tabs, hover states
- Deep Dark:         #111820  → page background, nav background, footer
- Navy Blue Dark:    #0D1B2A  → secondary sections, card backgrounds, overlays
- White:             #FFFFFF  → body text on dark bg, form inputs
- Mid Gray:          #3A3A3A  → secondary text, inactive states
- Red Overlay:       #E51A2E at 15% opacity → hero overlays, section dividers

COLOR RULES:
- Background is always dark (#111820 or #0D1B2A). No light backgrounds.
- Red (#E51A2E) is used sparingly as accent — buttons, underlines, active indicators.
- Never use red as a full background section.
- Cards use #0D1B2A with a 1px border #E51A2E at 30% opacity.

TYPOGRAPHY:
- Display / Headlines: AGENCY BOLD — all caps, wide letter-spacing (0.05em–0.1em)
- Sub-headlines / Labels: UNITED SANS COND BOLD — condensed, strong vertical rhythm
- Body copy: UNITED SANS COND BOLD or system fallback "Helvetica Neue Condensed Bold"
- Font scale:
    H1: 72–96px / AGENCY BOLD / White
    H2: 48–64px / AGENCY BOLD / White or Red
    H3: 28–36px / UNITED SANS COND BOLD / White
    Body: 16–18px / UNITED SANS COND BOLD / #CCCCCC
    Label/Tag: 11–13px / UNITED SANS COND BOLD / Red, uppercase, letter-spacing 0.15em
    CTA Button: 14–16px / AGENCY BOLD / uppercase

SPACING SYSTEM:
- Base unit: 8px
- Section padding: 120px top/bottom (desktop), 64px (mobile)
- Content max-width: 1280px, centered
- Column grid: 12-column, 24px gutter

BUTTON STYLES:
- Primary CTA: background #E51A2E, text white, AGENCY BOLD, uppercase,
  border-radius 0px (sharp corners), padding 16px 40px, hover: darken 10%
- Secondary CTA: transparent bg, 2px solid #E51A2E, text #E51A2E,
  hover: fill red, text white
- Ghost/Tertiary: text only, underline in red, no background

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — PAGE STRUCTURE & LAYOUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NAVIGATION BAR:
- Full-width sticky nav, background #111820, height 72px
- Left: MGAMES logotype in AGENCY BOLD, white, 28px
- Right: text links (Empresas / Bodas / Despedidas / Contacto),
  UNITED SANS COND BOLD, 14px, uppercase, letter-spacing 0.1em
- Far right: Primary CTA button "Reservá tu experiencia"
- Bottom border: 1px solid #E51A2E at 40% opacity

---

HERO SECTION (Dynamic Component — see Section 3 for variants):

Layout: Full viewport height (100vh), dark background with full-bleed
atmospheric image overlay at 50% opacity.

Structure:
- Left column (60%): headline, sub-headline, event-type selector tabs,
  primary CTA button
- Right column (40%): mood image (changes per event type)
- Red accent diagonal stripe: 4px wide, runs 45° across the hero,
  subtle, decorative

Content (default state):
- Label tag: "EXPERIENCIAS LÚDICAS" in red, uppercase, 12px
- H1: "REVOLUCIONANDO LA MANERA DE CONECTARNOS"
  AGENCY BOLD, 80px, white, max 3 lines
- Sub-H1: "Diseñamos experiencias lúdicas para potenciar tu encuentro."
  UNITED SANS COND BOLD, 22px, #CCCCCC
- Event Selector Tabs (horizontal pill group):
  [Empresas] [Bodas] [Despedidas] [Cumpleaños] [Kids] [Neon Night]
  Active tab: red background, white text
  Inactive tab: transparent, white border, white text
  Spacing: 8px between tabs
- Primary CTA: "Contanos tu evento →" — red button, AGENCY BOLD

---

SECTION: COPYWRITING PER CATEGORY
(Secondary description text, appears below tabs on Hero click or as
separate feature cards in a split-screen layout below Hero)

Layout: 3-column card grid on desktop, 1-column stack on mobile
Each card: background #0D1B2A, border 1px #E51A2E 30% opacity, padding 40px

Cards:
Card 1 — EMPRESAS:
  Tag: "TEAM BUILDING"
  H3: "Un antes y un después en la energía de tu equipo."
  CTA link: "Conocé la experiencia →"

Card 2 — BODAS:
  Tag: "EXPERIENCIA NUPCIAL"
  H3: "Donde se rompe el hielo y se enciende la chispa."
  CTA link: "Ver experiencia →"

Card 3 — DESPEDIDAS:
  Tag: "DESPEDIDA DE SOLTERA/O"
  H3: "Una boda única empieza con una despedida increíble."
  CTA link: "¡Que se pique! →"

Card 4 — CUMPLEAÑOS:
  Tag: "CUMPLEAÑOS"
  H3: "No caigas en la de siempre. Este año vas por algo diferente."
  CTA link: "Quiero saber más →"

---

SECTION: CÓMO FUNCIONA (Step-by-step visual)

Layout: Horizontal stepper on desktop (4 steps in a row),
vertical timeline on mobile.
Background: #0D1B2A, full-width.
Section label: "EL PROCESO" — red, uppercase, 12px, centered

Steps (each step: large number, icon area, title, body):

Step 01 — "ROMPEHIELO"
Body: Formación de equipos, colores, lookeo.
Icon: abstract group formation symbol

Step 02 — "EN SIMULTÁNEO"
Body: Todos juegan al mismo tiempo, nadie mira de afuera.
Icon: multiple simultaneous action symbol

Step 03 — "PASAN COSAS"
Body: Tarjetas, dinámicas, el grupo se suelta.
Icon: dynamic cards / sparks symbol

Step 04 — "CIERRE CON IMPACTO"
Body: La experiencia termina, las historias quedan.
Icon: trophy / memory symbol

Connector: dashed red line (#E51A2E, 2px dashed) linking each step number
Step number style: 96px, AGENCY BOLD, #E51A2E at 20% opacity (decorative background)

---

SECTION: DERRIBANDO MIEDOS (Trust / FAQ Section)

Layout: 3-column accordion or expandable cards on desktop
Background alternates: #111820
Section headline: "¿TENÉS DUDAS?" — H2, AGENCY BOLD, white, centered
Sub-headline: "Diseñamos contexto, ritmo y progresión para que nadie quede afuera."
  UNITED SANS COND BOLD, 20px, #CCCCCC, centered

Fear Cards (each: question label in red, answer in white body text):

Fear 1:
  Q: "¿Va con mi grupo?"
  A: Adaptamos la energía según el perfil, la edad y el momento del evento.

Fear 2:
  Q: "¿No va a ser incómodo?"
  A: No obligamos. Generamos las ganas de participar.

Fear 3:
  Q: "¿Y si no funciona?"
  A: No improvisamos. Diseñamos la energía de principio a fin.

Card style: left-border 3px solid #E51A2E, background #0D1B2A, padding 32px

---

SECTION: MANIFIESTO MGAMES (Editorial / Full-width)

Layout: Full-width, full-bleed dark section. Editorial magazine style.
Background: #111820 with subtle noise texture overlay (grain effect, 8% opacity)
Typography: Oversized, dramatic. Text spans full width.

Content layout:
- Large decorative quote mark: #E51A2E, 200px, AGENCY BOLD, absolute positioned
- Main manifesto text blocks (stacked, alternating alignment left/center/right):

  Line 1 (H1 scale, 80px): "EL GRUPO CAMBIA."
  Line 2 (H1 scale, 80px, red): "LA EXPERIENCIA NO."
  Spacer (32px)
  Body block, 22px: "Diseñamos contexto, ritmo y progresión para que nadie quede afuera."
  Spacer (48px)
  Pull quote, 36px, AGENCY BOLD:
    "JUGAR NO ES PERDER EL TIEMPO."
  Pull quote continued, 36px, red:
    "ES UNA FORMA DE VIVIR MEJOR."

- Add a horizontal red divider line (2px, #E51A2E, full width) above and below section

---

SECTION: FORMULARIO MULTI-STEP (Contact / Quote)

Layout: Centered container, max-width 720px. Dark card (#0D1B2A).
Section label: "HABLEMOS DE TU EVENTO" — red, uppercase
H2: "Contanos lo que tenés en mente."

Step indicator: pill progress bar at top, 2 steps, red active color

STEP 1 — "Tu evento":
Fields (each: label in UNITED SANS COND BOLD uppercase 12px red,
input: full-width, background #111820, border 1px #3A3A3A,
focus border 1px #E51A2E, text white, border-radius 0px):
  - Tipo de evento: [dropdown] Empresas / Bodas / Despedidas / Cumpleaños / Kids / Neon Night
  - Cantidad de personas: [number input] placeholder "Ej: 50"
  - Ubicación: [text input] placeholder "Ciudad o salón"
  - Fecha tentativa: [date picker]
  - Tu nombre: [text input]
  - Email o WhatsApp: [text input]
CTA: "Siguiente →" — primary red button, full-width

STEP 2 — "Los detalles":
  - ¿Juegos con alcohol?: [toggle switch] Sí / No
  - Edad promedio del grupo: [dropdown] -18 / 18-35 / 35-50 / 50+
  - ¿Aire libre o indoor?: [radio buttons] Aire libre / Indoor / Indistinto
CTA: "Recibir la propuesta" — primary red button, full-width
Below CTA: micro-copy "Te respondemos en menos de 24hs." — gray, 13px, centered

---

FOOTER:

Background: #0D1B2A
Left: MGAMES logotype + tagline "El grupo cambia. La experiencia no."
Center: nav links (Empresas / Bodas / Despedidas / Contacto)
Right: Social icons (Instagram, WhatsApp) in white, hover red
Bottom bar: "© 2025 MGAMES. Todos los derechos reservados." — gray, 12px
Top border: 1px solid #E51A2E

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — DYNAMIC HERO VARIANTS (Component States)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a Figma COMPONENT SET for the Hero Section with the following
VARIANTS (property: "Event Type"):

VARIANT 1 — Default / General:
  Background image: abstract crowd in motion, dark-toned
  H1: "REVOLUCIONANDO LA MANERA DE CONECTARNOS"
  Sub: "Diseñamos experiencias lúdicas para potenciar tu encuentro."
  Active tab: none (all neutral)
  Mood: energetic, bold

VARIANT 2 — Empresas:
  Background image: corporate team, professional setting, dark tones
  H1: "UN ANTES Y UN DESPUÉS EN LA ENERGÍA DE TU EQUIPO."
  Sub: "Experiencias de team building diseñadas para resultados reales."
  Active tab: [Empresas] highlighted in red
  Mood: professional, authoritative, sleek
  UI adjustment: reduce saturation, increase structure

VARIANT 3 — Bodas:
  Background image: elegant wedding reception, candles, dark romantic setting
  H1: "DONDE SE ROMPE EL HIELO Y SE ENCIENDE LA CHISPA."
  Sub: "Una experiencia que transforma tu celebración en un recuerdo imborrable."
  Active tab: [Bodas] highlighted in red
  Mood: elegant, disruptive yet refined
  UI adjustment: add subtle gold tint (#B8A27A) as secondary accent in typography only

VARIANT 4 — Despedidas:
  Background image: vibrant party energy, confetti, dark background
  H1: "UNA BODA ÚNICA EMPIEZA CON UNA DESPEDIDA INCREÍBLE."
  Sub: "La despedida que todos van a recordar. ¡Que se pique!"
  Active tab: [Despedidas] highlighted in red
  Mood: loud, vibrant, fun, daring
  UI adjustment: add animated pulse effect on CTA button (keyframe: scale 1 → 1.04)

VARIANT 5 — Cumpleaños:
  Background image: birthday celebration, energetic, dark-themed
  H1: "NO CAIGAS EN LA DE SIEMPRE."
  Sub: "Este año vas por algo diferente. Una experiencia que realmente sorprende."
  Active tab: [Cumpleaños] highlighted in red
  Mood: playful, confident, youthful

INTERACTION NOTES FOR FIGMA AI:
- Tab clicks trigger a SWAP prototype action linking to the corresponding Hero variant
- Add HOVER state to each tab: underline in red, slight scale 1.02 on tab label
- Background image transition: use DISSOLVE transition, 300ms ease-in-out
- CTA button hover: background darkens 10%, adds right arrow shift (+4px, translateX)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — COMPONENT INVENTORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Generate the following reusable components in the Figma component panel:

1. NavBar (sticky, dark, with logo + links + CTA)
2. HeroSection (Component Set with 5 variants as described above)
3. EventSelectorTabs (Component Set: Default / Active / Hover per tab)
4. CategoryCard (with Tag, H3, CTA link — 4 variants)
5. StepCard (icon + number + title + body — 4 instances)
6. FearCard (left red border, Q&A — 3 instances)
7. ManifestoBlock (full-width editorial text)
8. MultiStepForm (Step 1 + Step 2 frames, progress indicator)
9. PrimaryButton (Default / Hover / Active states)
10. SecondaryButton (Default / Hover states)
11. FormField (Label + Input + Focus state)
12. Footer (full-width)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — RESPONSIVE BREAKPOINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Desktop: 1440px frame width
Tablet: 768px — 2 column grids, hero stacks vertically
Mobile: 390px — full single column, tabs become horizontal scroll,
  H1 drops to 48px, section padding 48px

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END OF PROMPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━