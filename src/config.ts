/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
 *
 * Content rules (these keep the site out of trouble with Google and the FTC):
 * - No invented reviews, ratings, review counts, or "years in business".
 * - No credentials (licensed, insured, background-checked, guarantees) until
 *   the service partner actually has them — add them then.
 */

export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

/** An extra block of city-specific content rendered on that city's page. */
export interface CitySection {
  heading: string;
  paragraphs: string[];
}

export interface City {
  name: string;
  slug: string;
  lat: string;
  lng: string;
  intro: string;
  /** Optional H1 / title phrase. Defaults to "Lawn Care in {name}". */
  headline?: string;
  /** Optional meta description. Defaults to the shared city template. */
  metaDescription?: string;
  /** Optional extra content sections, rendered after the intro only when present. */
  extraSections?: CitySection[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Lawn Care Pros",
  /** Short brand used in <title> tags when the full name would push them past 60 chars. */
  shortBrand: "NKY Lawn Care",
  phone: "(714) 494-9486",
  phoneE164: "+17144949486",
  domain: "nkylawncarepros.com",
  siteUrl: "https://www.nkylawncarepros.com",

  // ── Form Webhook ───────────────────────────────────────────────
  // Google Sheets web app URL (set after deploying google-sheets-webhook.gs)
  formWebhookUrl: "",

  // ── Analytics ───────────────────────────────────────────────────────
  // Set these to your real GA4 / GTM IDs to enable tracking.
  // Leave as placeholders (or empty) to disable — the site still works.
  ga4MeasurementId: "G-YWG2DC42BW",   // Google Analytics 4
  gtmContainerId: "",      // Google Tag Manager

  // Google Search Console → Add property → URL prefix → "HTML tag" method.
  // Paste only the content="..." value here. Leave empty if verified via DNS.
  googleSiteVerification: "aACcngfDtswg5CY-aVhUehh1ZH2vdfnKwoyoUr7Tb2s",

  // helper: truthy only when the value looks like a real ID
  get hasGA4() {
    return this.ga4MeasurementId && !this.ga4MeasurementId.startsWith('G-XX');
  },
  get hasGTM() {
    return this.gtmContainerId && !this.gtmContainerId.startsWith('GTM-XX');
  },

  // ── Location ───────────────────────────────────────────────────────
  city: "Northern Kentucky",
  state: "KY",
  region: "NKY",
  geoLat: "39.0",
  geoLng: "-84.5",

  // ── SEO keywords ──────────────────────────────────────────────────
  serviceKeyword: "lawn care",
  serviceKeywordPlural: "lawn care services",
  brandColor: "#1a6bb5",

  // ── Hero content ─────────────────────────────────────────────────
  heroTagline: "Lawn Care in Cincinnati & Northern Kentucky",
  heroSubtext: "Weekly mowing, fertilization, weed control, and fall aeration for homes across Boone, Kenton, and Campbell counties. Book today — free estimates.",
  heroAlt: "Professional lawn care service mowing a green lawn",

  // ── Computed city lists ──────────────────────────────────────────
  get cityListShort() {
    return this.cities.slice(0, 4).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },
  get cityListLong() {
    return this.cities.slice(0, 8).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },

  // ── Opening hours ─────────────────────────────────────────────────
  openingHours: "Mo-Sa 08:00-18:00",

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      title: "Weekly Lawn Mowing",
      slug: "weekly-mowing",
      description:
        "Regular mowing, edging, and blowing for homes across NKY. Visits are scheduled on the same day each week through the growing season, so the lawn never gets ahead of you. Serving Florence, Covington, Fort Mitchell, and all of Northern Kentucky.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Lawn Fertilization & Weed Control",
      slug: "fertilization-weed-control",
      description:
        "A 7-step seasonal fertilization and weed control program timed to how cool-season grass grows in Northern Kentucky — spring pre-emergent, broadleaf weed control, and feedings through fall. Professional-grade products applied according to label directions.",
      photo: "/photos/aeration.jpg",
    },
    {
      title: "Aeration & Overseeding",
      slug: "aeration-overseeding",
      description:
        "Core aeration and overseeding in fall to thicken thin lawns and fill in bare spots. Pulling soil cores loosens compacted clay so water, air, and new seed can reach the roots. Available for residential properties across the region.",
      photo: "/photos/commercial.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does lawn care cost in Northern Kentucky?",
      answer:
        "Pricing varies based on yard size and services needed. Call us at (714) 494-9486 for a free quote.",
    },
    {
      question: "How often should I mow my lawn?",
      answer:
        "During peak growing season (April-October), weekly mowing is best. In slower months, every 2 weeks works fine. We adjust our schedule based on growth rate.",
    },
    {
      question: "Is your fertilizer safe when dry?",
      answer:
        "Products are applied according to label directions. Most labels say to keep people and pets off the lawn until the application has dried — usually 1-2 hours. Ask about the specific product being used if you have concerns.",
    },
    {
      question: "Do you offer one-time mowing?",
      answer:
        "Yes. We offer both recurring weekly service and one-time mowing. No contracts required.",
    },
    {
      question: "What's included in a mowing visit?",
      answer:
        "Mowing, edging along driveways and walkways, blowing clippings off hard surfaces, and cleanup. Full service every visit.",
    },
    {
      question: "When should I aerate my lawn?",
      answer:
        "Fall is the best time for aeration in Northern Kentucky — usually September through October. The cool weather and fall rains help new seed establish quickly.",
    },
    {
      question: "Do you remove leaves in fall?",
      answer:
        "Yes. We offer fall leaf removal as an add-on service. We can bag, blow, or mulch leaves depending on your preference.",
    },
    {
      question: "How do I schedule service?",
      answer:
        "Just call us at (714) 494-9486. We can usually start within a few days. We serve Florence, Covington, Fort Mitchell, Erlanger, and all of Northern Kentucky.",
    },
  ] as FAQ[],

  // ── Cities served ─────────────────────────────────────────────────
  cities: [
    {
      name: "Florence, KY",
      slug: "florence-ky",
      lat: "38.9989",
      lng: "-84.6266",
      intro:
        "NKY Lawn Care Pros keeps Florence yards in shape through every season. Whether your home is near Florence Mall or tucked into one of the residential neighborhoods off US-42, our crew handles weekly mowing, fertilization, and seasonal cleanups. We know the clay-heavy soil and humid summers in Florence can make lawn care tricky, and we tailor our approach to help your grass thrive year after year.",
      headline: "Lawn Care & Lawn Service in Florence, KY",
      metaDescription:
        "Lawn care and lawn service in Florence, KY: weekly mowing, fertilization, weed control, and fall aeration and overseeding for Boone County homes.",
      extraSections: [
        {
          heading: "Lawn Care for Florence and Boone County Yards",
          paragraphs: [
            "Most Florence homes sit in established subdivisions with modest suburban lots, while newer developments elsewhere in Boone County tend to have larger yards. Newer lots often have turf that was seeded or sodded over compacted construction soil, so it can stay thin for years without aeration and overseeding.",
            "Like the rest of Northern Kentucky, Florence lawns are almost all cool-season grasses — mostly tall fescue, often mixed with Kentucky bluegrass and some perennial ryegrass. These grasses grow fastest in spring and fall and slow down in the heat of July and August, so we raise the mowing height in midsummer to help the lawn hold moisture and crowd out weeds.",
            "Mowing season in Florence usually runs from about April through October, depending on the weather. Spring is when growth is fastest and weekly visits matter most; in a dry late summer, growth slows and some visits are lighter.",
            "Fall is the best time to aerate and overseed a fescue lawn in Boone County — usually September through October. Warm soil helps new seed germinate, cooler air is easier on young grass, and there's less weed competition than in spring. Florence's heavy clay soil compacts easily, so core aeration before overseeding gives the seed and roots room to grow.",
          ],
        },
      ],
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "From the historic homes of Licking Riverside to the well-kept yards along Madison Avenue, Covington properties need lawn care that respects the character of the neighborhood. NKY Lawn Care Pros provides Covington residents with reliable mowing, weed control, and aeration services that keep lawns healthy and tidy. The older properties near the Roebling Bridge often have compacted soil and thin turf, and our overseeding program helps bring those lawns back to life.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views, historic homes, and tree-canopied streets near Tower Park — but all that shade means your lawn needs extra care. NKY Lawn Care Pros specializes in helping Fort Thomas homeowners grow healthy grass even in challenging conditions. Our overseeding and aeration services are perfect for thin lawns under mature hardwoods, and our fertilization program helps grass compete with tree roots for nutrients and moisture.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport has transformed into one of the region's most vibrant communities, and NKY Lawn Care Pros helps keep the yards looking as good as the neighborhoods. From the Newport on the Levee district to the residential streets near General James Taylor Park, we provide expert lawn care for homes throughout the city. Newport's position along the Ohio River brings extra moisture and humidity, and our fertilization and weed control programs are tailored to handle those conditions.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect their lawns to match. NKY Lawn Care Pros provides careful lawn care from the stately homes along Dixie Highway to the well-maintained colonials in the side streets. Our fertilization programs help Fort Mitchell yards stay thick, green, and weed-free all season long, and every mowing visit ends with clippings blown off drives and walks.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger homeowners know that a well-maintained lawn makes the whole property look better. NKY Lawn Care Pros serves this thriving community with weekly mowing, lawn treatments, and seasonal aeration that keep yards looking their best. Whether you're near Erlanger Community Park or off Stevenson Road, we adjust our schedule to match the growing season so your lawn gets exactly what it needs, when it needs it.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities, and NKY Lawn Care Pros helps keep it that way. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, our weekly mowing and seasonal lawn treatments keep Edgewood yards thick, green, and the envy of the block.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new homes — and NKY Lawn Care Pros is here to keep every yard looking great. From newer subdivisions near Taylor Mill Road to established properties closer to downtown, we provide mowing, fertilization, and aeration for yards of every size. Independence properties often sit on larger lots with mature trees, which means more shade and tougher growing conditions. Our team knows how to work with that.",
    },
  ] as City[],
};

/**
 * Build a page <title> that stays within 60 characters (the length Google
 * shows before truncating). Uses "main | Full Brand" when it fits, then
 * "main | Short Brand", then the main phrase alone.
 */
export function fitTitle(main: string, max = 60): string {
  for (const brand of [siteConfig.businessName, siteConfig.shortBrand]) {
    const t = `${main} | ${brand}`;
    if (t.length <= max) return t;
  }
  return main;
}
