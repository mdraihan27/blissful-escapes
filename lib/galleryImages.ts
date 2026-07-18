export interface GalleryImage {
  src: string;
  alt: string;
  aspectRatio: "tall" | "wide" | "square";
}

export const galleryImages: GalleryImage[] = [
  { src: "/assets/images/hero/capri-clifftop-terrace.jpg", alt: "Clifftop terrace overlooking the Bay of Naples in Capri", aspectRatio: "wide" },
  { src: "/assets/images/hero/maldives-atoll-aerial.jpeg", alt: "Aerial view of a Maldives atoll, turquoise lagoon and reef", aspectRatio: "square" },
  { src: "/assets/images/hero/st-lucia-pitons-pool.jpg", alt: "Infinity pool framing the Piton mountains in St Lucia", aspectRatio: "square" },
  { src: "/assets/images/banner/santorini-greece-banner.jpg", alt: "Santorini windmill and whitewashed village at golden hour", aspectRatio: "wide" },
  { src: "/assets/images/hero/croatia-coastal-village.jpg", alt: "Aerial view of a coastal village with terracotta rooftops in Croatia", aspectRatio: "square" },
  { src: "/assets/images/banner/cappadocia-hot-air-balloons-banner.jpg", alt: "Hot air balloons drifting over the rock formations of Cappadocia at sunrise", aspectRatio: "tall" },
  { src: "/assets/images/hero/dubai-palm-jumeirah-aerial.jpg", alt: "Palm Jumeirah from above at dusk, Dubai", aspectRatio: "square" },
  { src: "/assets/images/hero/elephants-crossing-river.jpeg", alt: "Herd of elephants crossing a river in Africa", aspectRatio: "wide" },
  { src: "/assets/images/banner/venice-aerial-canal-banner.jpg", alt: "Aerial view of Venice canals and historic buildings", aspectRatio: "tall" },
  { src: "/assets/images/banner/machu-picchu-sunrise-banner.jpg", alt: "Machu Picchu citadel at sunrise with mist rising from the valley", aspectRatio: "square" },
  { src: "/assets/images/hero/turkey-oludeniz-lagoon.jpg", alt: "The famous Blue Lagoon at Oludeniz, Turkey, seen from above", aspectRatio: "wide" },
  { src: "/assets/images/hero/antalya-coast-paraglider.jpeg", alt: "Paraglider soaring above the turquoise Antalya coast, Turkey", aspectRatio: "square" },
  { src: "/assets/images/banner/lake-agios-nikolaos-crete-banner.jpg", alt: "Lake Voulismeni in Agios Nikolaos, Crete, with colourful waterfront buildings", aspectRatio: "tall" },
  { src: "/assets/images/banner/seychelles-palm-beach-banner.jpg", alt: "Pristine palm fringed beach in the Seychelles", aspectRatio: "square" },
  { src: "/assets/images/hero/singapore-marina-bay-night.jpg", alt: "Singapore skyline and Marina Bay Sands at night", aspectRatio: "wide" },
  { src: "/assets/images/banner/golden-gate-bridge-sunset-banner.jpg", alt: "Golden Gate Bridge at sunset, San Francisco", aspectRatio: "square" },
  { src: "/assets/images/hero/antigua-aerial-harbor.jpg", alt: "Aerial view of Antigua harbour with yachts at anchor", aspectRatio: "square" },
];
