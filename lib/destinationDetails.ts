export interface DestinationExperience {
  title: string;
  description: string;
}

export interface DestinationHighlight {
  label: string;
  value: string;
}

export interface DestinationGalleryImage {
  src: string;
  alt: string;
}

export interface DestinationDetail {
  slug: string;
  name: string;
  /** Short evocative line shown under the name on the home card and hero */
  tagline: string;
  /** The one word or short phrase that sits behind the hero as an oversized watermark */
  heroWatermark: string;
  heroImage: string;
  heroImageAlt: string;
  /** Region descriptor, e.g. "Indian Ocean & Asia" */
  region: string;
  /** Two to three paragraph editorial intro */
  intro: string[];
  highlights: DestinationHighlight[];
  experiences: DestinationExperience[];
  gallery: DestinationGalleryImage[];
  /** Countries we plan across in this region, shown as a quiet list */
  countries: string[];
  bestTime: string;
}

export const destinationDetails: DestinationDetail[] = [
  {
    slug: "southeast-asia",
    name: "Southeast Asia",
    tagline: "Longtail boats, temple mornings and islands that do not feel real",
    heroWatermark: "Asia",
    heroImage: "/assets/images/banner/phi-island-longtail-boats-banner.jpg",
    heroImageAlt: "Wooden longtail boats moored beneath limestone cliffs in the Phi Phi Islands",
    region: "Indian Ocean and Southeast Asia",
    intro: [
      "Southeast Asia is the trip people come home from changed. It is early starts you will not resent, food you will still be talking about years later, and a warmth in the welcome that is impossible to manufacture.",
      "We plan across Thailand, Singapore, Sri Lanka and the islands in between, pairing the big set pieces with the quiet corners most itineraries skip. A morning in a working temple before the crowds, a longtail out to a beach with no name, a chef who cooks for eight and remembers yours.",
      "Whether it is a first honeymoon or a return you have promised yourself for a decade, we build the pace around you, so the trip feels indulgent rather than exhausting.",
    ],
    highlights: [
      { value: "5", label: "Countries we know intimately" },
      { value: "Nov to Apr", label: "The sweet spot for dry, warm days" },
      { value: "14 nights", label: "The length that gets it just right" },
    ],
    experiences: [
      {
        title: "Islands by longtail",
        description:
          "Skip the packed day boats. We arrange a private longtail and a local skipper who knows which bays empty out by mid morning and which hidden lagoon is worth the extra hour.",
      },
      {
        title: "Temple mornings, done properly",
        description:
          "Doors open, light low, almost nobody there. We time your temple visits for the hour that feels sacred rather than crowded, with a guide who tells the stories the plaques leave out.",
      },
      {
        title: "The food that never makes the guidebooks",
        description:
          "A night market run with someone who grew up eating there, a home kitchen dinner, a market to table cooking morning. This is the part people talk about for years.",
      },
      {
        title: "Tea country and the slow train",
        description:
          "In Sri Lanka we route you through the hill country on one of the loveliest rail journeys in the world, ending in a bungalow surrounded by tea and silence.",
      },
    ],
    gallery: [
      { src: "/assets/images/hero/thailand-longtail-boats.png", alt: "Longtail boats on a Thai beach" },
      { src: "/assets/images/banner/maya-bay-cliffs-banner.jpg", alt: "Towering cliffs above Maya Bay" },
      { src: "/assets/images/banner/tea-plantations-sunset-banner.jpg", alt: "Tea plantations at sunset in Sri Lanka" },
      { src: "/assets/images/banner/wooden-boat-phi-island-thailand-banner.jpg", alt: "Wooden boat beside a Phi Phi island beach" },
    ],
    countries: ["Thailand", "Singapore", "Sri Lanka", "Vietnam", "Malaysia"],
    bestTime: "November to April, for dry skies and warm seas",
  },
  {
    slug: "caribbean",
    name: "Caribbean",
    tagline: "The barefoot end of luxury, one island at a time",
    heroWatermark: "Islands",
    heroImage: "/assets/images/banner/tropical-beach-paradise-banner.jpg",
    heroImageAlt: "Palm fringed Caribbean beach with clear turquoise water",
    region: "The Caribbean",
    intro: [
      "The Caribbean is not one place, it is dozens, and the art is matching you to the right one. Barbados for polish and long lunches. St Lucia for drama and honeymoons. Antigua for a beach a day. Grenada for the version almost nobody has ruined yet.",
      "We have walked these islands, eaten in the rum shacks as well as the resorts, and we will tell you honestly which one fits the trip you actually want rather than the one on the brochure.",
      "Island hopping, a single blissful base, or a sailing week between the two. However you want to do it, we handle the flights, the transfers and the small print so all you carry is a book.",
    ],
    highlights: [
      { value: "12+", label: "Islands we plan across" },
      { value: "Dec to May", label: "Sunshine season, clear and dry" },
      { value: "1 or many", label: "One base or island to island" },
    ],
    experiences: [
      {
        title: "The right island, not the loudest",
        description:
          "We start with how you want to feel, then match the island to it. Lively or hushed, polished or barefoot, one beach or a different one each day. The match is the whole game.",
      },
      {
        title: "Sailing the Grenadines",
        description:
          "A crewed catamaran between islands you can only reach by water, dropping anchor off sandbars and beach bars that never see a tour bus. Days blur in the best possible way.",
      },
      {
        title: "The Pitons, up close",
        description:
          "In St Lucia we put you where the twin peaks fill the window, with a plunge pool between you and the view and a sunrise worth the early alarm.",
      },
      {
        title: "Rum, food and real island life",
        description:
          "Beyond the resort gates there is a whole culture of rum shacks, fish fries and Friday night limes. We point you to the ones locals actually go to.",
      },
    ],
    gallery: [
      { src: "/assets/images/hero/barbados-palm-tree-boat.jpg", alt: "Palm tree and boat on a Barbados beach" },
      { src: "/assets/images/hero/st-lucia-pitons-pool.jpg", alt: "Infinity pool framing the Pitons in St Lucia" },
      { src: "/assets/images/banner/salt-whistle-bay-mayreau-banner.jpg", alt: "Salt Whistle Bay sandbar in the Grenadines" },
      { src: "/assets/images/hero/grenada-harbor-town.jpg", alt: "Colourful harbour town in Grenada" },
    ],
    countries: ["Barbados", "St Lucia", "Antigua", "Grenada", "Jamaica", "The Grenadines"],
    bestTime: "December to May, the dry and sunny season",
  },
  {
    slug: "dubai-middle-east",
    name: "Dubai and the Middle East",
    tagline: "Desert silence, impossible skylines and service that anticipates you",
    heroWatermark: "Desert",
    heroImage: "/assets/images/banner/dubai-palm-jumeirah-aerial-banner.jpg",
    heroImageAlt: "Aerial view of the Palm Jumeirah in Dubai at dusk",
    region: "The Middle East",
    intro: [
      "Dubai does the spectacular better than anywhere, but the Middle East we love is quieter than its reputation. It is the hush of the desert at dusk, the grace of Abu Dhabi's Grand Mosque, a dinner where every detail was handled before you noticed it needed to be.",
      "It is also one of the easiest long haul trips to fall in love with. A short flight, no jet lag to speak of, guaranteed sun and a standard of hospitality that has to be experienced to be believed.",
      "We balance the headline moments with the calm ones, so you come home dazzled and rested in equal measure.",
    ],
    highlights: [
      { value: "7 hrs", label: "Flight time, almost no jet lag" },
      { value: "Oct to Apr", label: "Warm days without the summer heat" },
      { value: "Sun", label: "Guaranteed, all year round" },
    ],
    experiences: [
      {
        title: "The desert at golden hour",
        description:
          "A private drive out into the dunes as the heat drops, dinner under more stars than you thought the sky held, and a silence that stays with you long after the city noise returns.",
      },
      {
        title: "Skyline from the top",
        description:
          "We arrange the view most people queue hours for on your terms, at the hour the light is best, with a table waiting and the whole glittering grid at your feet.",
      },
      {
        title: "Abu Dhabi with grace",
        description:
          "The Grand Mosque at the right moment is one of the most beautiful buildings you will ever stand inside. We time it, guide it, and pair it with the culture the crowds rush past.",
      },
      {
        title: "Service that reads your mind",
        description:
          "The region's flagship hotels turn hospitality into an art form. We know which suites, which butlers and which restaurants are worth every penny, and which are simply expensive.",
      },
    ],
    gallery: [
      { src: "/assets/images/hero/dubai-palm-jumeirah-aerial.jpg", alt: "Palm Jumeirah from above" },
      { src: "/assets/images/banner/abu-dhabi-mosque-banner.jpg", alt: "The Grand Mosque in Abu Dhabi" },
      { src: "/assets/images/banner/misty-mountains-sunrise-banner.jpg", alt: "Mist over mountains at sunrise" },
      { src: "/assets/images/banner/maldivian-air-taxi-banner.jpg", alt: "Seaplane over turquoise water" },
    ],
    countries: ["United Arab Emirates", "Dubai", "Abu Dhabi", "Oman", "Qatar"],
    bestTime: "October to April, warm days without the summer heat",
  },
  {
    slug: "europe",
    name: "Europe",
    tagline: "Old towns, long lunches and coastlines worth the whole trip",
    heroWatermark: "Europe",
    heroImage: "/assets/images/banner/santorini-greece-banner.jpg",
    heroImageAlt: "Whitewashed Santorini village above the Aegean at golden hour",
    region: "Europe and the Mediterranean",
    intro: [
      "Europe is the trip you can take again and again and never repeat. A cliffside village on the Amalfi Coast, a Greek island where the day revolves around swimming and dinner, a Croatian old town lit gold at dusk, a corner of Spain where nobody is hurrying anywhere.",
      "The magic is in the pairing. We put a city beside a coast, a famous name beside somewhere quieter, a grand hotel beside a family run place with the best table in town. The contrast is what makes it sing.",
      "Short flights, no jet lag, and a lifetime of options. Tell us the feeling you are after and we will find the corner of the map that delivers it.",
    ],
    highlights: [
      { value: "10+", label: "Countries and counting" },
      { value: "May to Sep", label: "Long light and warm seas" },
      { value: "3 hrs", label: "Most of it, a short hop away" },
    ],
    experiences: [
      {
        title: "The coast that stops you mid sentence",
        description:
          "Amalfi, the Aegean, the Dalmatian shore. We put you on the right stretch at the right time, in a room where the view is the whole point, and arrange the boat day that makes the trip.",
      },
      {
        title: "Old towns after the day trips leave",
        description:
          "The magic hour in a medieval town is the evening, once the coaches have gone. We base you to stay when everyone else is leaving, table booked, streets yours.",
      },
      {
        title: "One island, properly",
        description:
          "Rather than racing between five Greek islands, we often pick one and let you sink into it. Swim, eat, nap, repeat. It is the holiday people quietly need most.",
      },
      {
        title: "The lunch that becomes the day",
        description:
          "A vineyard, a hilltop, a harbour table. We know the long lunches worth building an afternoon around, the ones you will still describe to people years from now.",
      },
    ],
    gallery: [
      { src: "/assets/images/hero/capri-clifftop-terrace.jpg", alt: "Clifftop terrace over the Bay of Naples in Capri" },
      { src: "/assets/images/hero/croatia-coastal-village.jpg", alt: "Terracotta rooftops of a Croatian coastal village" },
      { src: "/assets/images/banner/malaga-spain-sunset-banner.jpg", alt: "Malaga at sunset in southern Spain" },
      { src: "/assets/images/banner/lake-agios-nikolaos-crete-banner.jpg", alt: "Waterfront lake at Agios Nikolaos in Crete" },
    ],
    countries: ["Italy", "Greece", "Croatia", "Spain", "Portugal", "Malta"],
    bestTime: "May to September, for long light and warm seas",
  },
];

export function getDestinationDetail(slug: string): DestinationDetail | undefined {
  return destinationDetails.find((destination) => destination.slug === slug);
}
