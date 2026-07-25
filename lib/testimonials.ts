export interface Testimonial {
  id: string;
  name: string;
  destination: string;
  tripType: string;
  rating: number;
  date: string;
  consultant: string;
  quote: string;
  storyDetail: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "matt-carrigan-tanzania",
    name: "Matt Carrigan",
    destination: "Tanzania Safari & Zanzibar",
    tripType: "Multi-Stop Safari",
    rating: 5,
    date: "Verified Google Review",
    consultant: "Emma",
    quote:
      "Thank you to Emma at Blissful Escapes for organising our amazing trip to Tanzania and Zanzibar. Emma meticulously planned our multi-stop trip which involved a 2-day safari, 4 hotel stays and 5 different flights.",
    storyDetail:
      "Emma helped us pick out the perfect itinerary which suited our budget, leading to a seamless travelling experience and unforgettable memories! Emma remained on hand throughout the trip to assist with any questions we had, and her bespoke service and travel agent experience really did prove useful. 10/10, would highly recommend!",
    highlights: ["2-Day Serengeti Safari", "4 Hotel Stays", "5 Seamless Flights"],
    imageSrc: "/assets/images/testimonials/matt-carrigan-lions-safari.webp",
    imageAlt: "Wild lions on game drive in Tanzania",
    heroImage: "/assets/images/testimonials/matt-carrigan-lions-safari.webp",
    heroImageAlt: "Wild lions on game drive in Tanzania",
    secondaryImage: "/assets/images/testimonials/matt-carrigan-zanzibar-beach.webp",
    secondaryImageAlt: "Zanzibar palm beach resort",
  },
  {
    id: "donna-brown-thailand",
    name: "Donna Brown & Family",
    destination: "Phuket, Elephant Hills & Krabi",
    tripType: "Family Adventure",
    rating: 5,
    date: "Verified Google Review",
    consultant: "Emma",
    quote:
      "Not only was the quote cheaper, the care and attention that went into personalising our requests was above all expectations. Elephant Hills was a phenomenal experience that I don't think we'll ever top!",
    storyDetail:
      "Emma kept in touch throughout the booking process and confirmed our itinerary. Transfer from the airport to the hotel was exactly where it was supposed to be (they even waited around after an hour delay). As it was a special birthday for my husband, Emma arranged an amazing 2-bedroom suite at Amari Phuket which was beyond any form of luxury we have ever experienced! Loved this experience 🥰",
    highlights: ["Amari Phuket Luxury Suite", "Elephant Hills Sanctuary", "Krabi Private Villa"],
    imageSrc: "/assets/images/testimonials/donna-brown-elephant-hills-thailand.webp",
    imageAlt: "Feeding elephants at Elephant Hills sanctuary in Thailand",
    heroImage: "/assets/images/testimonials/donna-brown-elephant-hills-thailand.webp",
    heroImageAlt: "Feeding elephants at Elephant Hills sanctuary in Thailand",
    secondaryImage: "/assets/images/testimonials/donna-brown-phuket-amari-beach.webp",
    secondaryImageAlt: "Amari Phuket beach front resort",
  },
  {
    id: "clair-blackhurst-iceland",
    name: "Clair Blackhurst",
    destination: "Iceland Northern Lights & Lagoons",
    tripType: "Winter Adventure",
    rating: 5,
    date: "Verified Google Review",
    consultant: "Emma",
    quote:
      "Huge Thank you to Emma, from Blissful Escapes! Emma could not have done enough for our trip, Emma took care of absolutely everything, nothing was too much trouble.",
    storyDetail:
      "Booking the best excursions, transport and a beautiful hotel. Emma made the whole trip person centred to us. From snowmobiling across glaciers to watching the green aurora borealis, it was absolutely amazing. We can't thank you enough.",
    highlights: ["Gullfoss Waterfall Tour", "Glacier Snowmobiling", "Northern Lights & Blue Lagoon"],
    imageSrc: "/assets/images/testimonials/clair-blackhurst-gullfoss-waterfall-iceland.webp",
    imageAlt: "Gullfoss waterfall surrounded by snow in Iceland",
    heroImage: "/assets/images/testimonials/clair-blackhurst-gullfoss-waterfall-iceland.webp",
    heroImageAlt: "Gullfoss waterfall surrounded by snow in Iceland",
    secondaryImage: "/assets/images/testimonials/clair-blackhurst-northern-lights-iceland.webp",
    secondaryImageAlt: "Aurora Borealis Northern Lights in Iceland night sky",
  },
  {
    id: "helen-flynn-sicily",
    name: "Helen Flynn",
    destination: "Sicily 10-Day Escape",
    tripType: "Luxury Break",
    rating: 5,
    date: "Verified Google Review",
    consultant: "Emma",
    quote:
      "Amazing is all I can say! A volcano erupted 1 day before our flight, Emma was there to find everything out for us. Everything was fine and we enjoyed our amazing holiday in the most gorgeous hotel.",
    storyDetail:
      "Amazing services & Emma the owner goes above and beyond. We will now be using Emma all the time, Blissful Escapes is the new future 💕",
    highlights: ["Cefalù Cathedral Square", "Taormina Balcony Sea View", "24/7 Crisis Support"],
    imageSrc: "/assets/images/testimonials/helen-flynn-cefalu-cathedral-square.webp",
    imageAlt: "Cefalu Cathedral square at golden hour in Sicily",
    heroImage: "/assets/images/testimonials/helen-flynn-cefalu-cathedral-square.webp",
    heroImageAlt: "Cefalu Cathedral square at golden hour in Sicily",
    secondaryImage: "/assets/images/testimonials/helen-flynn-sicily-balcony-view.webp",
    secondaryImageAlt: "Sicily seaside resort terrace view",
  },
  {
    id: "claire-torr-switzerland",
    name: "Claire Torr",
    destination: "Italian Lakes & Switzerland",
    tripType: "Two-Centre Holiday",
    rating: 5,
    date: "Verified Google Review",
    consultant: "Emma",
    quote:
      "Having been recommended to Emma of Blissful Escapes I have to say she was great! We wanted to do a two centre holiday in the Italian lakes and Switzerland and the advice and information she gave was so needed.",
    storyDetail:
      "Her genuine help which went above and beyond was so needed. Thanks Emma and here's to you booking our next trip to the Christmas markets! 👍😍 xx",
    highlights: ["Alpine Cable Car", "Chalet Stream Village", "Panoramic Mountain Terrace"],
    imageSrc: "/assets/images/testimonials/claire-torr-switzerland-alpine-terrace.webp",
    imageAlt: "Swiss Alpine mountain terrace lounge with scenic views",
    heroImage: "/assets/images/testimonials/claire-torr-switzerland-alpine-terrace.webp",
    heroImageAlt: "Swiss Alpine mountain terrace lounge with scenic views",
    secondaryImage: "/assets/images/testimonials/claire-torr-switzerland-chalet-river.webp",
    secondaryImageAlt: "Swiss chalet village alongside mountain stream",
  },
  {
    id: "jeremy-simm-australia-dubai",
    name: "Jeremy Simm",
    destination: "Australia & Dubai Multi-Stop",
    tripType: "Multi-Stop Luxury",
    rating: 5,
    date: "Verified Google Review",
    consultant: "Emma",
    quote:
      "The service provided by Emma was 1st class and ideally suited my requirements for a multi stop life changing holiday in Australia and Dubai. No stone was left unturned.",
    storyDetail:
      "All accommodation booked in Coogee (Sydney), Melbourne, Jervis Bay and rounded off in Dubai was excellent. Emma booked my flights with Emirates from Manchester and scheduled my layover in Dubai perfectly to minimise jet lag. My trip back was rounded off with a business class upgrade which Emma secured at a price I could not refuse! A welcoming bottle of wine in Coogee after a 15hr flight was a great touch.",
    highlights: ["Emirates Business Class Upgrade", "Coogee Beachfront Stay", "Dubai Private Boat Charter"],
    imageSrc: "/assets/images/hero/dubai-palm-jumeirah-aerial.jpg",
    imageAlt: "Aerial view of Palm Jumeirah in Dubai",
    heroImage: "/assets/images/hero/dubai-palm-jumeirah-aerial.jpg",
    heroImageAlt: "Aerial view of Palm Jumeirah in Dubai",
    secondaryImage: "/assets/images/banner/dubai-palm-jumeirah-aerial-banner.jpg",
    secondaryImageAlt: "Dubai skyline at sunset",
  },
  {
    id: "helen-jones-south-america",
    name: "Helen Jones",
    destination: "Machu Picchu, Galápagos & Costa Rica",
    tripType: "Bespoke Expedition",
    rating: 5,
    date: "Verified Google Review",
    consultant: "Emma",
    quote:
      "Thank you Emma for really listening to and fulfilling our needs whilst carefully planning our trip to South America, trekking Machu Picchu then onto the Galápagos Islands and Costa Rica.",
    storyDetail:
      "Yours and the teams you work with expertise and knowledge have been second to none and extremely reassuring when we are planning our trip of a lifetime and spending the budget to go with it! We cannot wait to plan where to next...",
    highlights: ["Inca Trail Trek", "Galápagos Cruise", "Costa Rica Rainforest"],
    imageSrc: "/assets/images/banner/bucket-list-banner.jpg",
    imageAlt: "Scenic mountain peaks and rainforest valley",
    heroImage: "/assets/images/banner/bucket-list-banner.jpg",
    heroImageAlt: "Scenic mountain peaks and rainforest valley",
    secondaryImage: "/assets/images/banner/misty-mountains-sunrise-banner.jpg",
    secondaryImageAlt: "Misty mountain peaks at sunrise",
  },
  {
    id: "sheryl-sharratt-cyprus",
    name: "Sheryl Sharratt",
    destination: "Leonardo Cypria Maris, Paphos",
    tripType: "Beach & Spa",
    rating: 5,
    date: "Verified Google Review",
    consultant: "Sylvia",
    quote:
      "We booked a 10 day holiday to Paphos through Blissful Escapes staying at the Leonardo Cypria Maris Hotel and Spa. The booking was effortless!",
    storyDetail:
      "Our travel agent Sylvia Broxston was amazing, she went above and beyond to make sure our holiday was perfect. Thank you Sylvia and Blissful Escapes for making our holiday so special, we will be booking again!",
    highlights: ["Leonardo Cypria Maris Hotel & Spa", "Sea View Suite", "Full Concierge Support"],
    imageSrc: "/assets/images/testimonials/sheryl-sharratt-cyprus-paphos-resort.webp",
    imageAlt: "Leonardo Cypria Maris Hotel and Spa illuminated at dusk in Paphos Cyprus",
    heroImage: "/assets/images/testimonials/sheryl-sharratt-cyprus-paphos-resort.webp",
    heroImageAlt: "Leonardo Cypria Maris Hotel and Spa illuminated at dusk in Paphos Cyprus",
    secondaryImage: "/assets/images/banner/tropical-beach-paradise-banner.jpg",
    secondaryImageAlt: "Turquoise waters and palm resort",
  },
  {
    id: "howard-tenerife",
    name: "Howard (Howa308)",
    destination: "Costa Adeje, Tenerife",
    tripType: "Anniversary / Birthday",
    rating: 5,
    date: "Verified Google Review",
    consultant: "Sylvia",
    quote:
      "Planned this holiday with Sylvia as a surprise 50th Birthday for my Wife. I hadn't been abroad for over 25 years. Sylvia was amazing and couldn't do enough for me!",
    storyDetail:
      "Sylvia took care of everything, offered great advice, and made sure it all went very smoothly, which it did. We had a great holiday in Tenerife, Costa Adeje. Thank you Sylvia, everything you did was very much appreciated!",
    highlights: ["Surprise 50th Birthday Plan", "Costa Adeje Resort Pool", "Ocean Sunset View"],
    imageSrc: "/assets/images/testimonials/howard-tenerife-resort-sunset.webp",
    imageAlt: "Sunset over Costa Adeje resort pool in Tenerife",
    heroImage: "/assets/images/testimonials/howard-tenerife-resort-sunset.webp",
    heroImageAlt: "Sunset over Costa Adeje resort pool in Tenerife",
    secondaryImage: "/assets/images/testimonials/howard-tenerife-pool-daytime.webp",
    secondaryImageAlt: "Daytime resort pool surrounded by palm trees in Tenerife",
  },
  {
    id: "bethany-flynn-greece",
    name: "Bethany Flynn",
    destination: "Greek Islands Boat Escape",
    tripType: "Bespoke Journey",
    rating: 5,
    date: "Verified Google Review",
    consultant: "Emma",
    quote:
      "Recently booked holiday with Emma to Greece. Amazing experience, will definitely be booking all my future holidays with Emma, very smooth & easy process 💕",
    storyDetail:
      "From chartered boat trips in emerald coves to traditional seafood dinners overlooking the sea, every recommendation was spot-on.",
    highlights: ["Private Boat Charter", "Greek Seafood Dining", "Emerald Bay Cove"],
    imageSrc: "/assets/images/testimonials/bethany-flynn-greece-boat-cove.webp",
    imageAlt: "Private boat anchored in emerald cove in Greece",
    heroImage: "/assets/images/testimonials/bethany-flynn-greece-boat-cove.webp",
    heroImageAlt: "Private boat anchored in emerald cove in Greece",
    secondaryImage: "/assets/images/testimonials/bethany-flynn-greece-seafood-lunch.webp",
    secondaryImageAlt: "Fresh seafood dining by the water in Greece",
  },
  {
    id: "ruby-munro-barcelona",
    name: "Ruby Munro",
    destination: "Barcelona Cultural Break",
    tripType: "City Break",
    rating: 5,
    date: "Verified Google Review",
    consultant: "Emma & Sylvia",
    quote:
      "Amazing service. Extremely helpful and very knowledgeable about our destination.. 5star plus.. 👍👍👍",
    storyDetail:
      "Expert knowledge made all the difference in securing fast-track passes to Sagrada Familia and staying in a fantastic central location.",
    highlights: ["Sagrada Familia VIP Entry", "Boutique Hotel", "Bespoke Travel Guide"],
    imageSrc: "/assets/images/testimonials/ruby-munro-barcelona-sagrada-familia.webp",
    imageAlt: "Sagrada Familia towers in Barcelona against blue sky",
    heroImage: "/assets/images/testimonials/ruby-munro-barcelona-sagrada-familia.webp",
    heroImageAlt: "Sagrada Familia towers in Barcelona against blue sky",
    secondaryImage: "/assets/images/banner/santorini-greece-banner.jpg",
    secondaryImageAlt: "Mediterranean town landscape",
  },
];
