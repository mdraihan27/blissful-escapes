export interface HolidayType {
  slug: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
}

export const holidayTypes: HolidayType[] = [
  {
    slug: "honeymoons",
    label: "Honeymoons",
    imageSrc: "/assets/images/banner/honeymoon-beach-couple-banner.jpg",
    imageAlt: "Couple walking on a private beach at sunset",
  },
  {
    slug: "safaris",
    label: "Safaris",
    imageSrc: "/assets/images/hero/elephants-crossing-river.jpeg",
    imageAlt: "Elephants crossing a river on an African safari",
  },
  {
    slug: "anniversaries",
    label: "Anniversaries",
    imageSrc: "/assets/images/banner/couple-outdoor-dinner-banner.jpg",
    imageAlt: "Couple enjoying a romantic outdoor dinner at dusk",
  },
  {
    slug: "family-holidays",
    label: "Family Holidays",
    imageSrc: "/assets/images/banner/beach-suitcase-family-holiday-banner.jpg",
    imageAlt: "Family luggage on a bright sandy beach",
  },
  {
    slug: "solo-travel",
    label: "Solo Travel",
    imageSrc: "/assets/images/banner/solo-traveler-banner.jpg",
    imageAlt: "Solo traveller gazing out over a scenic destination",
  },
  {
    slug: "group-trips",
    label: "Group & Friends Trips",
    imageSrc: "/assets/images/banner/bucket-list-banner.jpg",
    imageAlt: "Friends enjoying a travel experience together",
  },
  {
    slug: "wellness",
    label: "Wellness Retreats",
    imageSrc: "/assets/images/banner/stack-of-stones-banner.jpg",
    imageAlt: "Stacked stones at a spa and wellness retreat",
  },
  {
    slug: "milestone-celebrations",
    label: "Milestone Celebrations",
    imageSrc: "/assets/images/banner/hot-air-balloon-mountain-sunset-banner.jpg",
    imageAlt: "Hot air balloon over mountains at sunset, a bucket list experience",
  },
];
