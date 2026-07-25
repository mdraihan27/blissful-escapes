export interface HolidayTypeFeature {
  title: string;
  description: string;
}

export interface HolidayGalleryImage {
  src: string;
  alt: string;
  title: string;
}

export interface HolidayTypeDetail {
  slug: string;
  name: string;
  /** Short evocative line shown under the name on the hero */
  tagline: string;
  watermark: string;
  heroImage: string;
  heroImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  galleryImages: HolidayGalleryImage[];
  /** Three paragraph editorial intro, first paragraph is the lead */
  intro: string[];
  /** Three quiet features describing how we plan this kind of trip */
  features: HolidayTypeFeature[];
  /** Short phrases describing who this style of holiday suits */
  idealFor: string[];
}

export const holidayTypeDetails: HolidayTypeDetail[] = [
  {
    slug: "adventure-touring",
    name: "Adventure & Touring",
    tagline: "Trips that move, planned so you never feel rushed",
    watermark: "ADVENTURE",
    heroImage: "/assets/images/banner/machu-picchu-sunrise-banner.jpg",
    heroImageAlt: "Sunrise over the ruins of Machu Picchu in Peru",
    secondaryImage: "/assets/images/banner/cappadocia-hot-air-balloons-banner.jpg",
    secondaryImageAlt: "Hot air balloons over the landscape of Cappadocia",
    galleryImages: [
      { src: "/assets/images/triptych/adventure-triptych.jpg", alt: "Trekking through mountain terrain", title: "Scenic Trails" },
      { src: "/assets/images/triptych/adventure-triptych-2.jpg", alt: "Exploring ancient ruins", title: "Cultural Highlights" },
      { src: "/assets/images/triptych/adventure-triptych-3.jpg", alt: "Outdoor adventure activities", title: "Off-the-Beaten-Track" },
    ],
    intro: [
      "Some holidays are about staying still. This one is about covering ground, seeing the places you have read about and coming home with stories.",
      "We build touring itineraries with breathing room. Long enough in each place to actually feel it, short enough that the momentum never fades, with the logistics handled quietly in the background.",
      "Whether it is a first big adventure or the next one on a long list, we shape the route around your pace rather than a coach timetable.",
    ],
    features: [
      {
        title: "A route that flows",
        description:
          "We sequence the stops so travel days feel like part of the trip, not a cost of it, with rest built in where you will want it.",
      },
      {
        title: "Guides worth listening to",
        description:
          "The right local guide changes a place. We book the ones who tell the stories the plaques leave out.",
      },
      {
        title: "The details handled",
        description:
          "Transfers, permits, early starts and luggage. Everything arranged before you land, so you just travel.",
      },
    ],
    idealFor: ["First big trips", "Bucket list routes", "Curious travellers"],
  },
  {
    slug: "all-inclusive",
    name: "All Inclusive",
    tagline: "One decision at booking, then none at all",
    watermark: "INCLUSIVE",
    heroImage: "/assets/images/banner/woman-on-vacation-pool-banner.jpg",
    heroImageAlt: "Guest relaxing at a resort pool on holiday",
    secondaryImage: "/assets/images/banner/cancun-aerial-beach.jpg",
    secondaryImageAlt: "Aerial view of turquoise waters at a beachfront resort in Cancun",
    galleryImages: [
      { src: "/assets/images/banner/bvi-couple-sunbathing-banner.jpg", alt: "Couple relaxing on beach sunbeds", title: "Beachfront Relaxation" },
      { src: "/assets/images/banner/beach-wedding-couple.jpg", alt: "Couple dining by the ocean", title: "Gourmet Dining" },
      { src: "/assets/images/triptych/concierge-triptych.jpg", alt: "Resort concierge and amenities", title: "Tailored Service" },
    ],
    intro: [
      "The best all inclusive holidays feel effortless rather than excessive. You settle in on day one and the trip simply takes care of itself.",
      "The difference is in the resort. We only recommend the ones where the food stays interesting all week, the service stays warm and the small print stays small.",
      "Tell us what matters most, a quiet pool, great restaurants, things for the kids, and we will match you to the place that does it well.",
    ],
    features: [
      {
        title: "Resorts we would return to",
        description:
          "We separate the genuinely good from the merely big, and tell you honestly which is which.",
      },
      {
        title: "Everything counted in",
        description:
          "We check what the price really covers, so there are no surprises waiting on the final bill.",
      },
      {
        title: "The right room, not just a room",
        description:
          "Position, view and quiet matter more at a resort than anywhere. We book the rooms worth having.",
      },
    ],
    idealFor: ["Easy family weeks", "Switching off completely", "Fixed budgets"],
  },
  {
    slug: "beach-holidays",
    name: "Beach Holidays",
    tagline: "The right stretch of sand changes everything",
    watermark: "BEACH",
    heroImage: "/assets/images/banner/tropical-beach-paradise-banner.jpg",
    heroImageAlt: "Palm fringed beach with clear turquoise water",
    secondaryImage: "/assets/images/hero/barbados-palm-tree-boat.jpg",
    secondaryImageAlt: "Palm trees framing turquoise waters and boats in Barbados",
    galleryImages: [
      { src: "/assets/images/banner/seychelles-palm-beach-banner.jpg", alt: "Secluded beach in Seychelles with granite boulders", title: "Secluded Bays" },
      { src: "/assets/images/banner/salt-whistle-bay-mayreau-banner.jpg", alt: "Curved sandy bay with palm trees in the Caribbean", title: "Crystal Clear Waters" },
      { src: "/assets/images/banner/trunk-bay-st-john-banner.jpg", alt: "Trunk Bay beach in St John", title: "Pristine Sands" },
    ],
    intro: [
      "A beach holiday sounds simple, which is exactly why the details matter so much. The wrong beach is just sand. The right one is the whole holiday.",
      "We know which coasts stay calm in which months, which resorts sit on the quiet end of the bay and which sunsets are worth planning dinner around.",
      "From the Caribbean to the Indian Ocean to the Mediterranean, we match the beach to the mood you are after.",
    ],
    features: [
      {
        title: "The beach itself, checked",
        description:
          "Sand, swimming, shade and crowds. We recommend beaches we know, not ones that photograph well.",
      },
      {
        title: "Timed to the season",
        description:
          "Warm seas and clear skies move around the calendar. We put you in the right place for your dates.",
      },
      {
        title: "More than a sun lounger",
        description:
          "A boat day, a beach dinner, a slow morning walk to a bay nobody else found. Small additions that make the week.",
      },
    ],
    idealFor: ["Proper rest", "Winter sun", "Couples and families alike"],
  },
  {
    slug: "cities-short-breaks",
    name: "Cities & Short Breaks",
    tagline: "A few days away that feel like a real holiday",
    watermark: "CITIES",
    heroImage: "/assets/images/banner/times-square-taxis-nyc-banner.jpg",
    heroImageAlt: "Yellow taxis passing through Times Square in New York",
    secondaryImage: "/assets/images/banner/venice-aerial-canal-banner.jpg",
    secondaryImageAlt: "Aerial view of Grand Canal and classic architecture in Venice",
    galleryImages: [
      { src: "/assets/images/banner/empire-state-building-night-banner.jpg", alt: "New York skyline lit up at night", title: "Iconic Skylines" },
      { src: "/assets/images/hero/havana-pink-classic-car.jpg", alt: "Classic pink car on historic street in Havana", title: "Historic Quarters" },
      { src: "/assets/images/banner/singapore-skyline-night-banner.jpg", alt: "Futuristic Singapore city lights reflection", title: "Vibrant Evenings" },
    ],
    intro: [
      "A great city break is dense with good moments. The trick is fitting them into a few days without the trip feeling like a checklist.",
      "We plan short breaks the way locals would spend a perfect weekend. The neighbourhood worth staying in, the table worth booking, the one museum actually worth queueing for.",
      "New York, Venice, Istanbul, Singapore or somewhere you have not considered yet. Tell us the dates and we will make them count.",
    ],
    features: [
      {
        title: "Stay in the right quarter",
        description:
          "In a city, location is the luxury. We put you where the evenings happen, not beside the ring road.",
      },
      {
        title: "Booked before you land",
        description:
          "The restaurants, shows and viewpoints that sell out are arranged in advance, so your evenings are already sorted.",
      },
      {
        title: "Room to wander",
        description:
          "We plan the anchors and leave the gaps. The best city memories are usually the unplanned ones.",
      },
    ],
    idealFor: ["Long weekends", "Anniversaries", "A quick reset"],
  },
  {
    slug: "cruise-holidays",
    name: "Cruise Holidays",
    tagline: "Unpack once, wake somewhere new",
    watermark: "CRUISE",
    heroImage: "/assets/images/banner/british-virgin-islands-aerial.jpg",
    heroImageAlt: "Aerial view of boats moored off the British Virgin Islands",
    secondaryImage: "/assets/images/hero/niagara-falls-boat-tour.png",
    secondaryImageAlt: "Passengers on a boat tour near Niagara Falls",
    galleryImages: [
      { src: "/assets/images/banner/wooden-boat-phi-island-thailand-banner.jpg", alt: "Traditional wooden longtail boat anchored in turquoise waters", title: "Island Voyages" },
      { src: "/assets/images/banner/maldivian-air-taxi-banner.jpg", alt: "Seaplane over coral atolls", title: "Seaborne Transfers" },
      { src: "/assets/images/banner/antigua-header-banner.jpg", alt: "Harbor views from a cruise destination", title: "Coastal Harbors" },
    ],
    intro: [
      "A cruise done well is one of the easiest ways to see a lot of the world in comfort. A cruise done badly is a floating queue. The line, the ship and the cabin decide which one you get.",
      "We match you to the style of cruising that fits you, from small ships that slip into harbours the big ones cannot reach, to family lines where the kids never want to come home.",
      "Ocean or river, first cruise or fifteenth, we handle the flights, the cabin choice and the shore days so the whole thing just works.",
    ],
    features: [
      {
        title: "The line that fits you",
        description:
          "Every cruise line has a personality. We make sure yours matches, before anything is booked.",
      },
      {
        title: "The cabin worth paying for",
        description:
          "Deck, position and balcony make a real difference at sea. We know which cabins to ask for by name.",
      },
      {
        title: "Shore days, done properly",
        description:
          "We plan the ports worth exploring independently and the ones where the right excursion earns its price.",
      },
    ],
    idealFor: ["Seeing several places in one trip", "Multi generation groups", "Effortless logistics"],
  },
  {
    slug: "family-holidays",
    name: "Family Holidays",
    tagline: "Trips the whole family actually enjoys, adults included",
    watermark: "FAMILY",
    heroImage: "/assets/images/banner/beach-suitcase-family-holiday-banner.jpg",
    heroImageAlt: "Family luggage on a bright sandy beach",
    secondaryImage: "/assets/images/triptych/families-triptych.jpg",
    secondaryImageAlt: "Family enjoying time together at a sunny resort",
    galleryImages: [
      { src: "/assets/images/triptych/families-triptych-2.jpg", alt: "Kids playing on the sandy beach", title: "Kids Activities" },
      { src: "/assets/images/triptych/families-triptych-3.jpg", alt: "Family relaxing by the swimming pool", title: "Family Suites & Pools" },
      { src: "/assets/images/banner/barbados-header-banner.jpg", alt: "Sunny Caribbean coastline ideal for family beach days", title: "Safe & Calm Beaches" },
    ],
    intro: [
      "A family holiday has to work for everyone at once, which is harder than any brochure admits. The right trip gives the kids their best week of the year and still feels like a holiday for you.",
      "We plan around the ages you are travelling with now. Pools and kids clubs that are genuinely good, flight times that avoid meltdowns, rooms that actually fit everyone.",
      "From easy beach weeks to bigger adventures once the kids are older, we build trips the whole family talks about afterwards.",
    ],
    features: [
      {
        title: "Planned around the ages",
        description:
          "What works with a toddler fails with a teenager. We shape every trip around the family you are travelling as today.",
      },
      {
        title: "Rooms that fit real families",
        description:
          "Connecting rooms, real space and cots confirmed in writing, not promised at check in.",
      },
      {
        title: "Time off for the adults",
        description:
          "The best family resorts give parents an actual break too. We know which ones deliver it.",
      },
    ],
    idealFor: ["School holiday escapes", "First trips with young kids", "Teens who are hard to impress"],
  },
  {
    slug: "honeymoons",
    name: "Honeymoons",
    tagline: "The one trip that has to be right, handled with care",
    watermark: "HONEYMOON",
    heroImage: "/assets/images/banner/honeymoon-header-banner.jpg",
    heroImageAlt: "Couple on a quiet beach at sunset on their honeymoon",
    secondaryImage: "/assets/images/banner/honeymoon-beach-couple-banner.jpg",
    secondaryImageAlt: "Honeymoon couple embracing on a tropical beach",
    galleryImages: [
      { src: "/assets/images/triptych/couples-triptych.jpg", alt: "Couple enjoying a private sunset view", title: "Private Moments" },
      { src: "/assets/images/triptych/couples-triptych-2.jpg", alt: "Romantic dinner setting on the sand", title: "Candlelit Dinners" },
      { src: "/assets/images/banner/honeymoon-hotel-room-banner.jpg", alt: "Luxury oceanfront honeymoon suite", title: "Overwater & Ocean Suites" },
    ],
    intro: [
      "A honeymoon carries more expectation than any other holiday, and you are usually planning it in the busiest year of your life. That is where we come in.",
      "We take the time to understand the trip you two actually want, pure rest, a little adventure, or one of each, then plan every detail so nothing lands on your list.",
      "One island done beautifully, or two contrasting stops. Either way, we make sure the trip feels like yours and the small touches land at the right moments.",
    ],
    features: [
      {
        title: "Planned while you plan a wedding",
        description:
          "We carry the whole itinerary so the honeymoon never becomes another task on the spreadsheet.",
      },
      {
        title: "The touches that matter",
        description:
          "The room upgrade quietly requested, the private dinner on the sand, the late checkout on the last morning.",
      },
      {
        title: "Rest and adventure, balanced",
        description:
          "A few days of something memorable, then the beach. The classic honeymoon shape exists because it works.",
      },
    ],
    idealFor: ["Newlyweds", "Minimoons", "Vow renewals"],
  },
  {
    slug: "luxury-holidays",
    name: "Luxury Holidays",
    tagline: "Quiet, considered and worth every penny",
    watermark: "LUXURY",
    heroImage: "/assets/images/banner/dubai-palm-jumeirah-aerial-banner.jpg",
    heroImageAlt: "Aerial view of the Palm Jumeirah in Dubai at dusk",
    secondaryImage: "/assets/images/banner/woman-maldives-jetty-banner.jpg",
    secondaryImageAlt: "Guest walking along a luxury overwater villa jetty in the Maldives",
    galleryImages: [
      { src: "/assets/images/triptych/concierge-triptych.jpg", alt: "Personal concierge service at five star resort", title: "Bespoke Concierge" },
      { src: "/assets/images/hero/st-lucia-pitons-pool.jpg", alt: "Infinity pool overlooking mountain peaks", title: "Private Infinity Pools" },
      { src: "/assets/images/banner/dubai-header-banner.jpg", alt: "Skyline views from a luxury suite", title: "World-Class Dining" },
    ],
    intro: [
      "Real luxury is rarely loud. It is the transfer already waiting, the suite with the right view, the restaurant that remembers how you take your coffee by day two.",
      "We know which hotels genuinely deliver at the top end and which are simply expensive, and we will always tell you the difference.",
      "From the Maldives to Dubai to the great hotels of Europe, we plan trips where every layer, flights, rooms, dining, feels considered.",
    ],
    features: [
      {
        title: "Honest recommendations",
        description:
          "At this level everything looks beautiful online. We recommend from experience, not photography.",
      },
      {
        title: "Access and upgrades",
        description:
          "Our relationships with hotels mean the requests that matter get made, and more often than not, met.",
      },
      {
        title: "Seamless from door to door",
        description:
          "Lounge access, private transfers and timings that never feel tight. The travel is part of the luxury.",
      },
    ],
    idealFor: ["Milestone trips", "Once a year escapes", "Travellers who value their time"],
  },
  {
    slug: "rail-holidays",
    name: "Rail Holidays",
    tagline: "The journey as the destination, at a civilised pace",
    watermark: "RAIL",
    heroImage: "/assets/images/banner/tea-plantations-sunset-banner.jpg",
    heroImageAlt: "Tea plantations at sunset seen from the hill country railway",
    secondaryImage: "/assets/images/banner/misty-mountains-sunrise-banner.jpg",
    secondaryImageAlt: "Misty mountain valleys at sunrise",
    galleryImages: [
      { src: "/assets/images/triptych/sri-lanka-triptych.png", alt: "Scenic railway passing through lush green hills", title: "Scenic Express Routes" },
      { src: "/assets/images/banner/cappadocia-hot-air-balloons-banner.jpg", alt: "Landscape view from high altitude", title: "Breathtaking Panoramas" },
      { src: "/assets/images/banner/fraser-river-winter-canada-banner.jpg", alt: "River flowing through mountain landscape", title: "Alpine Journeys" },
    ],
    intro: [
      "There is a particular pleasure in watching a country go by from a train window. No airports, no motorways, just landscape unspooling at a pace you can actually take in.",
      "From the great scenic lines of Europe to the slow train through Sri Lanka's tea country, we build holidays around the journeys worth taking for their own sake.",
      "We handle the seat reservations, the connections and the hotels at either end, so all you do is watch the view change.",
    ],
    features: [
      {
        title: "The routes worth riding",
        description:
          "Some famous lines earn their reputation and some do not. We plan around the ones that do.",
      },
      {
        title: "The right seats, reserved",
        description:
          "Window side, direction of travel, the scenic side of the carriage. Small details that make the whole day.",
      },
      {
        title: "Stops that earn their place",
        description:
          "We pair each leg with towns and hotels worth lingering in, so the trip breathes between journeys.",
      },
    ],
    idealFor: ["Unhurried travellers", "Scenery lovers", "Anyone tired of airports"],
  },
  {
    slug: "safari-wildlife",
    name: "Safari & Wildlife",
    tagline: "Wild mornings you will be describing for the rest of your life",
    watermark: "SAFARI",
    heroImage: "/assets/images/hero/elephants-crossing-river.jpeg",
    heroImageAlt: "Elephants crossing a river on an African safari",
    secondaryImage: "/assets/images/banner/deer-island-mauritius-banner.jpg",
    secondaryImageAlt: "Pristine nature reserve with lush green foliage and clear water",
    galleryImages: [
      { src: "/assets/images/banner/great-barrier-reef-banner.jpg", alt: "Aerial view of marine life and coral reef", title: "Marine Sanctuaries" },
      { src: "/assets/images/banner/cappadocia-hot-air-balloons-banner.jpg", alt: "Panoramic nature views from above", title: "Panoramic Wildlife Valleys" },
      { src: "/assets/images/banner/tea-plantations-sunset-banner.jpg", alt: "Sunset over African wilderness slopes", title: "Bush & Nature Lodges" },
    ],
    intro: [
      "Nothing else in travel compares to the first time an elephant crosses the track in front of your vehicle. A safari is less a holiday than an experience that stays with you.",
      "The camp, the guide and the season decide everything. We plan around all three, putting you in the right reserve at the right time of year with people who know it intimately.",
      "Many of our safaris pair the bush with a beach, a few wild days followed by a few still ones. It is a combination that is hard to better.",
    ],
    features: [
      {
        title: "Guides who make the trip",
        description:
          "A great guide turns a game drive into a story. We book camps where the guiding is the point of pride.",
      },
      {
        title: "Seasons, taken seriously",
        description:
          "Wildlife moves with the water. We time your trip to where the animals actually are in your month.",
      },
      {
        title: "Bush and beach, paired",
        description:
          "Safari first, ocean second. We arrange the connection so the contrast feels effortless.",
      },
    ],
    idealFor: ["Bucket list trips", "Photographers", "Honeymoons with a wild side"],
  },
  {
    slug: "ski-winter-sports",
    name: "Ski & Winter Sports",
    tagline: "Snow, mountains and the good kind of tired",
    watermark: "WINTER",
    heroImage: "/assets/images/banner/fraser-river-winter-canada-banner.jpg",
    heroImageAlt: "Snow covered winter landscape along the Fraser River in Canada",
    secondaryImage: "/assets/images/banner/central-park-winter-banner.jpg",
    secondaryImageAlt: "Snowy trees and winter landscape",
    galleryImages: [
      { src: "/assets/images/banner/misty-mountains-sunrise-banner.jpg", alt: "Snow-capped alpine peaks emerging above clouds", title: "Alpine Slopes" },
      { src: "/assets/images/banner/toronto-skyline-purple-light-banner.jpg", alt: "Winter resort skyline at twilight", title: "Chalet Living" },
      { src: "/assets/images/banner/boston-harbor-skyline-banner.jpg", alt: "Crisp winter skies over mountain resorts", title: "Mountain Towns" },
    ],
    intro: [
      "A ski holiday lives or dies on the details. The right resort for your level, a bed close to the lifts, and snow you can rely on in the week you can actually travel.",
      "We plan winter trips for everyone from first timers to families to groups chasing their annual week on the mountain, in the Alps and further afield.",
      "Passes, lessons, kit hire and transfers all arranged before you fly, so the first morning starts on the slope rather than in a queue.",
    ],
    features: [
      {
        title: "Matched to your level",
        description:
          "Gentle blues or long reds, lively resort or quiet village. We match the mountain to the group.",
      },
      {
        title: "Close to the lifts",
        description:
          "Nothing improves a ski week like a short walk to the gondola. We prioritise position over glossy brochures.",
      },
      {
        title: "Sorted before the snow",
        description:
          "Lift passes, ski school and equipment booked in advance, at better prices than the resort window.",
      },
    ],
    idealFor: ["Family ski weeks", "Groups of friends", "First time skiers"],
  },
  {
    slug: "spa-wellness",
    name: "Spa & Wellness",
    tagline: "Come home more rested than you can remember being",
    watermark: "WELLNESS",
    heroImage: "/assets/images/banner/relaxing-spa-pool-render-banner.jpg",
    heroImageAlt: "Calm spa pool surrounded by soft light",
    secondaryImage: "/assets/images/banner/stack-of-stones-banner.jpg",
    secondaryImageAlt: "Balanced zen stones on a peaceful beach",
    galleryImages: [
      { src: "/assets/images/triptych/spa-triptych.jpg", alt: "Tranquil outdoor hydrotherapy pool", title: "Hydrotherapy Pools" },
      { src: "/assets/images/triptych/spa-triptych-2.jpg", alt: "Peaceful treatment room with soft lighting", title: "Holistic Therapies" },
      { src: "/assets/images/triptych/spa-triptych-3.jpg", alt: "Meditation and yoga deck overlooking nature", title: "Mindful Retreats" },
    ],
    intro: [
      "Some trips are about seeing things. This one is about how you feel when you get home, lighter, clearer and properly rested.",
      "Wellness travel covers a wide spectrum, from a beautiful hotel with an exceptional spa to fully structured retreats with programmes built around you. We help you find the right point on that spectrum.",
      "Tell us what you need, deep rest, a reset, or simply quiet, and we will find the place designed to deliver it.",
    ],
    features: [
      {
        title: "Retreats vetted properly",
        description:
          "The word wellness gets attached to everything. We separate genuine expertise from a nice pool and a smoothie menu.",
      },
      {
        title: "As structured as you want",
        description:
          "Full programmes or simply space and silence. You choose the level, we build around it.",
      },
      {
        title: "Calm from the moment you leave",
        description:
          "Smooth flights and quiet transfers, because arriving frazzled defeats the purpose.",
      },
    ],
    idealFor: ["Recharging solo", "A reset with a friend", "Anyone running on empty"],
  },
  {
    slug: "tailor-made-bespoke",
    name: "Tailor Made & Bespoke Holidays",
    tagline: "A trip designed from a blank page, around you",
    watermark: "BESPOKE",
    heroImage: "/assets/images/banner/hot-air-balloon-mountain-sunset-banner.jpg",
    heroImageAlt: "Hot air balloon drifting over mountains at sunset",
    secondaryImage: "/assets/images/banner/solo-traveler-banner.jpg",
    secondaryImageAlt: "Traveler standing on a scenic overlook contemplating the horizon",
    galleryImages: [
      { src: "/assets/images/banner/bucket-list-banner.jpg", alt: "Inspirational landmark destination view", title: "Bucket List Routes" },
      { src: "/assets/images/triptych/concierge-triptych-2.jpg", alt: "Private travel consultation and custom itinerary creation", title: "Custom Itineraries" },
      { src: "/assets/images/banner/airplane-travel-exotic-destination-banner.jpg", alt: "Airplane flying over scenic islands", title: "Multi-Destination Journeys" },
    ],
    intro: [
      "Sometimes the trip you want does not exist in any brochure. A milestone birthday across three countries, a route built around a passion, a once in a lifetime journey with no template to follow.",
      "This is the work we enjoy most. We start with a conversation about what you want the trip to feel like, then design it from scratch, every flight, stay and moment chosen deliberately.",
      "Nothing is fixed until it is right. You will see the itinerary evolve with your feedback until it reads like the trip you imagined, then better.",
    ],
    features: [
      {
        title: "A blank page, not a package",
        description:
          "No template underneath. The itinerary starts from your dates, your interests and your pace.",
      },
      {
        title: "Refined until it is right",
        description:
          "We iterate the plan with you as many times as it takes. The final version should feel inevitable.",
      },
      {
        title: "One person, start to finish",
        description:
          "The person who designs your trip is the person you call while you are on it.",
      },
    ],
    idealFor: ["Milestone celebrations", "Multi country journeys", "Ideas that do not fit a brochure"],
  },
  {
    slug: "villa-holidays",
    name: "Villa Holidays",
    tagline: "Your own pool, your own pace, your own front door",
    watermark: "VILLAS",
    heroImage: "/assets/images/hero/st-lucia-pitons-pool.jpg",
    heroImageAlt: "Private infinity pool with a view of the Pitons in St Lucia",
    secondaryImage: "/assets/images/banner/santorini-greece-banner.jpg",
    secondaryImageAlt: "Whitewashed villas with private terraces overlooking the Aegean sea in Santorini",
    galleryImages: [
      { src: "/assets/images/triptych/santorini-triptych.png", alt: "Luxury villa pool terrace with sea view", title: "Private Pools" },
      { src: "/assets/images/banner/couple-outdoor-dinner-banner.jpg", alt: "Al fresco dining area on a villa patio", title: "Al Fresco Dining" },
      { src: "/assets/images/banner/st-lucia-pitons-rainbow-banner.jpg", alt: "Villa view of dramatic mountain peaks", title: "Panoramic Views" },
    ],
    intro: [
      "A villa gives you the one thing no hotel can, a place that is entirely yours for the week. Breakfast when you like, music you chose, and a pool with nobody else in it.",
      "The catch is that villas are hard to judge from photographs. We recommend properties we know, with the pool, the view and the distances exactly as described.",
      "For families, groups of friends or several generations travelling together, it is often the most relaxed way to holiday, and frequently the best value too.",
    ],
    features: [
      {
        title: "Villas we can vouch for",
        description:
          "Photographs flatter. We recommend properties where the reality matches or beats the listing.",
      },
      {
        title: "The location, checked",
        description:
          "Walking distance to a town or gloriously remote, we make sure you know exactly which you are getting.",
      },
      {
        title: "Help on hand if you want it",
        description:
          "Chefs, housekeeping, boat days and babysitting can all be arranged, as much or as little as suits you.",
      },
    ],
    idealFor: ["Groups of friends", "Big family gatherings", "Travellers who like their own space"],
  },
];

export function getHolidayTypeDetail(slug: string): HolidayTypeDetail | undefined {
  return holidayTypeDetails.find((holidayType) => holidayType.slug === slug);
}
