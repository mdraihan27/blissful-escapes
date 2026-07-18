export interface Testimonial {
  id: string;
  name: string;
  destination: string;
  quote: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-maldives",
    name: "Sarah & Tom",
    destination: "Maldives",
    quote:
      "Blissful Escapes sorted absolutely everything. We gave them a rough idea of what we wanted and they came back with options we would never have found on our own. We came home completely refreshed and already planning the next one.",
    imageSrc: "/assets/images/banner/woman-maldives-jetty-banner.jpg",
    imageAlt: "Holiday in the Maldives",
  },
  {
    id: "james-safari",
    name: "James & Family",
    destination: "Kenya Safari",
    quote:
      "Travelling with three kids felt daunting, but every detail was mapped out for us, down to the best seats on the jeep. The kids are still talking about the wildebeest crossing. Worth every penny.",
    imageSrc: "/assets/images/hero/elephants-crossing-river.jpeg",
    imageAlt: "Wildlife crossing on a Kenya safari",
  },
  {
    id: "claire-santorini",
    name: "Claire & Mark",
    destination: "Santorini",
    quote:
      "Our anniversary trip was everything we hoped for and more. They recommended a hotel we would never have found ourselves, and the little extras arranged for us made the whole trip feel incredibly special.",
    imageSrc: "/assets/images/banner/santorini-greece-banner.jpg",
    imageAlt: "Sunset views in Santorini, Greece",
  },
  {
    id: "rachel-thailand",
    name: "Rachel",
    destination: "Thailand",
    quote:
      "I went solo for the first time and was honestly quite nervous. They put together an itinerary that felt adventurous but never overwhelming. I trusted them completely and they delivered.",
    imageSrc: "/assets/images/hero/phi-island-longtail-boats.png",
    imageAlt: "Phi Phi Islands, Thailand",
  },
  {
    id: "the-andersons-dubai",
    name: "The Andersons",
    destination: "Dubai",
    quote:
      "We have used Blissful Escapes for three trips now and will not go to anyone else. They just get it right first time. No endless back and forth, no generic packages. Proper, personal service.",
    imageSrc: "/assets/images/hero/dubai-palm-jumeirah-aerial.jpg",
    imageAlt: "Dubai Palm Jumeirah from above",
  },
  {
    id: "lucy-st-lucia",
    name: "Lucy & Ben",
    destination: "St Lucia",
    quote:
      "Honeymoon of our dreams. Every preference from our first call was remembered and built into something we could never have put together ourselves. Ten out of ten, without question.",
    imageSrc: "/assets/images/hero/st-lucia-pitons-pool.jpg",
    imageAlt: "Infinity pool overlooking the Pitons in St Lucia",
  },
];
