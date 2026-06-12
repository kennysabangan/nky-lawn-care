/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
 */

export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

export interface City {
  name: string;
  slug: string;
  lat: string;
  lng: string;
  intro: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Lawn Care Pros",
  phone: "(859) 900-8065",
  phoneE164: "+18599008065",
  domain: "nkylawncarepros.com",
  siteUrl: "https://nkylawncarepros.com",

  // ── Form Webhook ───────────────────────────────────────────────
  // Google Sheets web app URL (set after deploying google-sheets-webhook.gs)
  formWebhookUrl: "",

  // ── Analytics ───────────────────────────────────────────────────────
  // Set these to your real GA4 / GTM IDs to enable tracking.
  // Leave as placeholders (or empty) to disable — the site still works.
  ga4MeasurementId: "G-YWG2DC42BW",   // Google Analytics 4
  gtmContainerId: "",      // Google Tag Manager

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
  heroTagline: "Northern Kentucky Lawn Care Service",
  heroSubtext: "Beautiful, healthy lawns all year round. Call us for a free estimate.",
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
        "Regular mowing, edging, and blowing for homes across NKY. We show up every week like clockwork so your lawn always looks its best. Serving Florence, Covington, Fort Mitchell, and all of Northern Kentucky.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Lawn Fertilization & Weed Control",
      slug: "fertilization-weed-control",
      description:
        "Custom 7-step fertilization program that keeps your grass thick, green, and weed-free. We use professional-grade products safe when dry. Licensed applicators serving all of NKY.",
      photo: "/photos/aeration.jpg",
    },
    {
      title: "Aeration & Overseeding",
      slug: "aeration-overseeding",
      description:
        "Core aeration and overseeding in fall to thicken thin lawns and fix bare spots. A great thing you can do for your lawn in Northern Kentucky. We serve residential properties across the region.",
      photo: "/photos/commercial.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does lawn care cost in Northern Kentucky?",
      answer:
        "Pricing varies based on yard size and services needed. Call us at (859) 900-8065 for a free quote.",
    },
    {
      question: "How often should I mow my lawn?",
      answer:
        "During peak growing season (April-October), weekly mowing is best. In slower months, every 2 weeks works fine. We adjust our schedule based on growth rate.",
    },
    {
      question: "Is your fertilizer safe when dry?",
      answer:
        "Yes. We use professional-grade products that are safe once dry. We recommend staying off the lawn for 1-2 hours after application, then it's completely safe.",
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
        "Just call us at (859) 900-8065. We can usually start within a few days. We serve Florence, Covington, Fort Mitchell, Erlanger, and all of Northern Kentucky.",
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
        "Florence homeowners trust NKY Lawn Care Pros to keep their yards looking great through every season. Whether your home is near Florence Mall or tucked into one of the residential neighborhoods off US-42, our crew handles weekly mowing, fertilization, and seasonal cleanups with dependable service. We know the clay-heavy soil and humid summers in Florence can make lawn care tricky, and we tailor our approach to help your grass thrive year after year.",
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
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect their lawns to match. NKY Lawn Care Pros delivers meticulous lawn care from the stately homes along Dixie Highway to the well-maintained colonials in the side streets. Our fertilization programs keep Fort Mitchell yards thick, green, and weed-free all season long, and our crews are trained to treat your property with the same care they'd treat their own.",
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
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new homes — and NKY Lawn Care Pros is here to keep every yard looking great. From newer subdivisions near Taylor Mill Road to established properties closer to downtown, we provide lawn care services that homeowners depend on. Independence properties often sit on larger lots with mature trees, which means more shade and tougher growing conditions. Our team knows how to work with that.",
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
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities, and NKY Lawn Care Pros helps keep it that way. We've served Edgewood homeowners for years with dependable lawn care that produces real results. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, our weekly mowing and seasonal lawn treatments keep Edgewood yards thick, green, and the envy of the block.",
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
      name: "Bellevue, KY",
      slug: "bellevue-ky",
      lat: "39.1042",
      lng: "-84.4762",
      intro:
        "Bellevue's revitalized Fairfield Avenue corridor and charming hillside homes make it a standout community in Northern Kentucky. NKY Lawn Care Pros serves Bellevue homeowners with lawn care that keeps yards neat and healthy despite the sloped terrain many properties sit on. From the panoramic views along the river hills to the cozy bungalows in the side streets, we bring dependable weekly mowing and seasonal lawn treatments to every appointment in Bellevue.",
    },
    {
      name: "Cold Spring, KY",
      slug: "cold-spring-ky",
      lat: "39.0114",
      lng: "-84.4369",
      intro:
        "Cold Spring's rolling hills and spacious properties are beautiful — but they also mean your lawn faces constant exposure to the elements along Alexandria Pike and beyond. NKY Lawn Care Pros provides Cold Spring homeowners with thorough lawn care that builds thick, healthy turf year after year. Whether your home sits on a large lot near the Cold Spring Crossing area or in a peaceful residential development, we keep your grass green and your yard looking sharp.",
    },
    {
      name: "Taylor Mill, KY",
      slug: "taylor-mill-ky",
      lat: "39.0003",
      lng: "-84.5013",
      intro:
        "Taylor Mill has grown into a thriving community, and NKY Lawn Care Pros is proud to serve the homes that make this city special. From established neighborhoods along Taylor Mill Road to newer developments, we provide lawn care that residents trust. Our team understands the local environment — the clay soil, the seasonal weeds, and the way Northern Kentucky's changing seasons affect your grass throughout the year. We tailor our approach to each property for the best possible results.",
    },
    {
      name: "Villa Hills, KY",
      slug: "villa-hills-ky",
      lat: "39.0625",
      lng: "-84.5916",
      intro:
        "Villa Hills is one of Northern Kentucky's premier residential communities, and the lawns here deserve quality service. NKY Lawn Care Pros delivers premium lawn care that matches Villa Hills' high standards. The elevated terrain and river-adjacent location near the Ohio River floodplain create unique growing conditions, and our team is equipped to handle them all. From weekly mowing to full-season fertilization programs, Villa Hills homeowners trust us to keep their yards beautiful.",
    },
    {
      name: "Crescent Springs, KY",
      slug: "crescent-springs-ky",
      lat: "39.0544",
      lng: "-84.5829",
      intro:
        "Crescent Springs residents appreciate quality, and NKY Lawn Care Pros delivers it with every visit. We've been serving this close-knit community along Buttermilk Pike and in the surrounding neighborhoods with lawn care that homeowners and businesses rely on. Our crew handles everything from weekly mowing to fall aeration and overseeding, working efficiently and delivering results that keep your yard looking its best all season long.",
    },
    {
      name: "Lakeside Park, KY",
      slug: "lakeside-park-ky",
      lat: "39.0331",
      lng: "-84.5711",
      intro:
        "Lakeside Park may be one of Northern Kentucky's smaller cities, but its residents expect top-tier lawn care — and NKY Lawn Care Pros delivers. The tree-lined streets and well-maintained properties that define Lakeside Park require a careful touch, and our technicians provide exactly that. From routine weekly mowing to seasonal fertilization and weed control, Lakeside Park homeowners know they can count on us to keep their yards in pristine condition.",
    },
    {
      name: "Park Hills, KY",
      slug: "park-hills-ky",
      lat: "39.0667",
      lng: "-84.5285",
      intro:
        "Park Hills' hilltop location near Devou Park offers some of the best views in Northern Kentucky, but it also means your lawn faces the full force of the elements. NKY Lawn Care Pros provides Park Hills homeowners with expert lawn care that builds healthy turf despite the challenging terrain. Our team handles the steep grades, shaded areas, and soil conditions that Park Hills properties are known for, delivering thick green lawns that complement the stunning surroundings.",
    },
    // ── Cincinnati-area cities ────────────────────────────────────────
    {
      name: "Walnut Hills, OH",
      slug: "walnut-hills-oh",
      lat: "39.1212",
      lng: "-84.4872",
      intro:
        "Walnut Hills is one of Cincinnati's most historic neighborhoods near Eden Park, and it's just minutes from Northern Kentucky across the river. NKY Lawn Care Pros is proud to extend our lawn care services to Walnut Hills homeowners and businesses. From the stately homes along Gilbert Avenue to the properties near Peeble's Corner, we bring the same dependable lawn care that NKY residents trust. Our team keeps Walnut Hills yards looking neat and healthy despite the varied terrain.",
    },
    {
      name: "Hyde Park, OH",
      slug: "hyde-park-oh",
      lat: "39.1373",
      lng: "-84.4463",
      intro:
        "Hyde Park is one of Cincinnati's most desirable neighborhoods, known for its beautiful homes and vibrant town square. NKY Lawn Care Pros brings our lawn care expertise right across the river to serve Hyde Park residents. Whether you own a historic craftsman near the square or a stately home in the surrounding hills, we understand the high standards homeowners expect. Our team delivers thick, green lawns every time — because a neighborhood this nice deserves yards to match.",
    },
    {
      name: "Norwood, OH",
      slug: "norwood-oh",
      lat: "39.1556",
      lng: "-84.4597",
      intro:
        "Norwood is a thriving independent city surrounded by Cincinnati, just a short drive from Northern Kentucky. NKY Lawn Care Pros serves Norwood's dense residential neighborhoods and growing commercial district with reliable, affordable lawn care. Norwood's mix of older homes, duplexes, and small lots means tight spaces and compacted soil — our team handles it all with professional equipment, leaving every lawn in Norwood green and well-maintained.",
    },
    {
      name: "Montgomery, OH",
      slug: "montgomery-oh",
      lat: "39.2289",
      lng: "-84.3541",
      intro:
        "Montgomery's tree-canopied streets near Heritage Village and stately homes make it one of the Cincinnati area's premier residential communities. NKY Lawn Care Pros extends our premium lawn care services to Montgomery homeowners who expect quality service. The large lots, mature landscaping, and varied terrain throughout Montgomery require a careful, experienced approach — and our team delivers exactly that, from weekly mowing to full-season fertilization programs.",
    },
    {
      name: "Deer Park, OH",
      slug: "deer-park-oh",
      lat: "39.2053",
      lng: "-84.3922",
      intro:
        "Deer Park is a welcoming, family-friendly community just north of Cincinnati, and NKY Lawn Care Pros is proud to bring our lawn care services to this great neighborhood. From the well-kept ranch homes along Blue Ash Road to the two-story colonials in the side streets, Deer Park homes deserve thick, healthy lawns. We offer flexible scheduling and the kind of dependable service that Deer Park homeowners appreciate.",
    },
    {
      name: "Amberly, OH",
      slug: "amberly-oh",
      lat: "39.1987",
      lng: "-84.4281",
      intro:
        "Amberley Village is one of the Cincinnati area's most exclusive residential communities, with large estates and beautifully maintained properties. NKY Lawn Care Pros provides the premium lawn care that Amberley homes demand. The spacious lots, mature trees, and high-end finishes throughout this community require a professional touch — and our fully insured, background-checked technicians deliver exactly that. Amberley homeowners choose us because we treat every lawn like it's our own.",
    },
    {
      name: "Westwood, OH",
      slug: "westwood-oh",
      lat: "39.1531",
      lng: "-84.6164",
      intro:
        "Westwood is one of Cincinnati's largest and most established neighborhoods, anchored by Westwood Town Hall and a strong sense of community. NKY Lawn Care Pros serves Westwood with the same reliable lawn care that Northern Kentucky residents have come to trust. From the charming Victorians along Harrison Avenue to the mid-century homes throughout the neighborhood, we keep every Westwood lawn green, trimmed, and looking great all season long.",
    },
    {
      name: "Fort Heights, OH",
      slug: "fort-heights-oh",
      lat: "39.0947",
      lng: "-84.5256",
      intro:
        "Fort Wright and the Fort Mitchell Heights area sit just across the river from Northern Kentucky, making them a natural extension of our service area. NKY Lawn Care Pros brings our professional lawn care expertise to Fort Heights homeowners who want the same quality service their NKY neighbors enjoy. The elevated terrain here means exposed slopes and wind — our team builds thick turf that holds up against the elements year after year.",
    },
    {
      name: "Mt. Adams, OH",
      slug: "mt-adams-oh",
      lat: "39.1089",
      lng: "-84.4981",
      intro:
        "Mt. Adams is one of Cincinnati's most iconic hilltop neighborhoods near Holy Cross-Immaculata Church, with steep streets and a mix of historic and modern properties. NKY Lawn Care Pros brings expert lawn care to Mt. Adams homeowners who want to keep their yards looking great despite the challenging terrain. Whether you're in a renovated Victorian or a modern condo with a small lawn, we'll keep your grass green and trimmed.",
    },
    {
      name: "Mt. Lookout, OH",
      slug: "mt-lookout-oh",
      lat: "39.1283",
      lng: "-84.4317",
      intro:
        "Mt. Lookout is a charming, walkable neighborhood on Cincinnati's east side near Ault Park, just across the river from Northern Kentucky. NKY Lawn Care Pros serves Mt. Lookout homeowners with professional lawn care that keeps homes looking their best. The neighborhood's mix of older bungalows, updated colonials, and new construction means we've seen every lawn type Mt. Lookout has to offer. Our seasonal programs build thick, healthy turf that stays beautiful all year.",
    },
    {
      name: "Oakley, OH",
      slug: "oakley-oh",
      lat: "39.1536",
      lng: "-84.4228",
      intro:
        "Oakley is one of Cincinnati's fastest-growing neighborhoods around Oakley Square, with a thriving business district, new developments, and a strong sense of community. NKY Lawn Care Pros serves Oakley's homes and businesses with lawn care that matches the neighborhood's upward trajectory. From the homes around the square to the new builds throughout the area, we provide lawn care that's thorough, affordable, and reliable.",
    },
    {
      name: "Columbia-Tusculum, OH",
      slug: "columbia-tusculum-oh",
      lat: "39.1128",
      lng: "-84.4136",
      intro:
        "Columbia-Tusculum is Cincinnati's oldest neighborhood, nestled along the Ohio River near Lunken Airport on the city's east side. NKY Lawn Care Pros brings our lawn care services to this historic riverfront community, where homes range from restored 19th-century cottages to modern river-view properties. The Ohio River proximity brings extra moisture and humidity, and our lawn care programs are tailored to handle those conditions for a thick, healthy lawn.",
    },
    {
      name: "Pleasant Ridge, OH",
      slug: "pleasant-ridge-oh",
      lat: "39.1842",
      lng: "-84.4403",
      intro:
        "Pleasant Ridge is a vibrant, family-friendly neighborhood on Cincinnati's north side near the Kenwood corridor, known for its well-kept homes and strong community spirit. NKY Lawn Care Pros is happy to extend our lawn care services to Pleasant Ridge residents. The neighborhood's diverse housing stock — from classic foursquares to updated ranches — means we adapt our lawn care approach to each property, delivering thick green grass every single time.",
    },
  ] as City[],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "NKY Lawn Care Pros has been mowing our lawn in Florence for two years now. They show up every Thursday like clockwork. Our yard has never looked this good. Highly recommend their weekly service.",
      name: "Jennifer M.",
      city: "Florence, KY",
    },
    {
      quote:
        "We hired them for aeration and overseeding last fall and the difference this spring was incredible. Our lawn in Covington went from patchy to thick and green. Great lawn care company.",
      name: "Robert T.",
      city: "Covington, KY",
    },
    {
      quote:
        "Finally found a lawn care company that actually shows up when they say they will. Fast, professional, and our Fort Mitchell yard looks amazing every week. Professional lawn care service in Northern Kentucky.",
      name: "Sarah K.",
      city: "Fort Mitchell, KY",
    },
    {
      quote:
        "We use NKY Lawn Care Pros for mowing and fertilization. They always do a great job and our home in Edgewood has a beautiful lawn. Reliable and affordable.",
      name: "Karen L.",
      city: "Edgewood, KY",
    },
  ] as Testimonial[],

  // ── Reviews (for reviews page) ────────────────────────────────────
  reviews: [
    {
      name: "Jennifer M.",
      location: "Florence, KY",
      text: "NKY Lawn Care Pros has been mowing our lawn in Florence for two years now. They show up every Thursday like clockwork. Our yard has never looked this good. Highly recommend their weekly service.",
    },
    {
      name: "Robert T.",
      location: "Covington, KY",
      text: "We hired them for aeration and overseeding last fall and the difference this spring was incredible. Our lawn in Covington went from patchy to thick and green. Great lawn care company.",
    },
    {
      name: "Sarah K.",
      location: "Fort Mitchell, KY",
      text: "Finally found a lawn care company that actually shows up when they say they will. Fast, professional, and our Fort Mitchell yard looks amazing every week. Professional lawn care service in Northern Kentucky.",
    },
    {
      name: "Mike D.",
      location: "Erlanger, KY",
      text: "Hired them for weekly mowing at our home in Erlanger. They show up on time, do a thorough job, and our lawn has never looked better. Great lawn care service at a competitive price.",
    },
    {
      name: "Jennifer P.",
      location: "Independence, KY",
      text: "We just moved to Independence and needed lawn care fast. NKY Lawn Care Pros started the same week we called. Their fertilization program turned our thin, weedy lawn into a great yard on the street. Highly recommend.",
    },
    {
      name: "Dave S.",
      location: "Newport, KY",
      text: "Called for weekly mowing on our home in Newport. They gave us a competitive price over the phone and came out the same week. Our lawn looks great and they always clean up after themselves. Great service.",
    },
    {
      name: "Karen L.",
      location: "Edgewood, KY",
      text: "We use NKY Lawn Care Pros for mowing and fertilization. They always do a great job and our home in Edgewood has a beautiful lawn. Reliable and affordable lawn care in Northern Kentucky.",
    },
    {
      name: "Tom W.",
      location: "Fort Thomas, KY",
      text: "Our Fort Thomas lawn was struggling with all the shade from mature trees. NKY Lawn Care Pros did aeration and overseeding last fall and the results this spring were amazing. Thick, green grass where there used to be bare spots.",
    },
  ] as { name: string; location: string; text: string }[],
};
