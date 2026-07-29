const photoBaseUrl =
  'https://raw.githubusercontent.com/vishnu119147/final/main/public/photos/';

export type Memory = {
  id: string;
  title: string;
  date: string;
  place: string;
  blurb: string;
  photo: string;
  accent: 'rose' | 'gold' | 'sage';
};

export const memories: Memory[] = [
  {
    id: 'first-meet',
    title: 'The Day We Met',
    date: 'August 2019',
    place: 'College Corridor',
    blurb: '',
    photo: `${photoBaseUrl}8.JPEG`,
    accent: 'rose',
  },
  {
    id: 'college-fest',
    title: 'College Fest Chaos',
    date: 'March 2020',
    place: 'The Main Stage',
    blurb: '',
    photo: `${photoBaseUrl}21.jpg`,
    accent: 'gold',
  },
  {
    id: 'late-night-calls',
    title: 'My favorite view wasn\'t outside the window.',
    date: 'The Whole Semester',
    place: 'Two Ends of a Phone Call',
    blurb: '',
    photo: `${photoBaseUrl}5.JPG`,
    accent: 'sage',
  },
  {
    id: 'farewell',
    title: 'The Farewell',
    date: 'May 2022',
    place: 'The Campus Gates',
    blurb: '',
    photo: `${photoBaseUrl}13.JPEG`,
    accent: 'rose',
  },
  {
    id: 'last-birthday',
    title: 'Her Last Birthday — The Kundvada Kere',
    date: 'July 2024',
    place: 'The Shore at Dusk',
    blurb: '',
    photo: `${photoBaseUrl}19.JPEG`,
    accent: 'gold',
  },
  {
    id: 'everyday-magic',
    title: 'The In-Between Days',
    date: 'All Along',
    place: 'Every Road We Walked',
    blurb: '',
    photo: `${photoBaseUrl}6.JPG`,
    accent: 'sage',
  },
];

export type GalleryShot = { src: string; caption: string; span?: boolean };

export const gallery: GalleryShot[] = [
  {
    src: `${photoBaseUrl}1.JPG`,
    caption: 'A little piece of us',
    span: true,
  },
  {
    src: `${photoBaseUrl}2.JPG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}3.JPG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}4.JPG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}5.JPG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}6.JPG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}7.JPG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}8.JPEG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}9.JPEG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}16.JPEG`,
    caption: 'A little piece of us',
    span: true,
  },
  {
    src: `${photoBaseUrl}11.JPEG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}12.JPEG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}13.JPEG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}14.jpg`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}15.jpg`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}16.JPEG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}17.JPEG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}18.JPEG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}19.JPEG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}20.JPEG`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}21.jpg`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}22.jpg`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}ethnic_day.jpg`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}IMG-20250512-WA0035.jpg`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}redsea.jpg`,
    caption: 'A little piece of us',
  },
  {
    src: `${photoBaseUrl}us.JPEG`,
    caption: 'A little piece of us',
  },
];

export type Reason = { front: string; back: string };

export const reasons: Reason[] = [
  {
    front: 'You laugh at your own jokes first',
    back: 'and somehow that makes mine land better. The world is funnier with you in it.',
  },
  {
    front: 'You remember the tiny things',
    back: 'my coffee order, the song I had on loop, the day I was dreading. You make me feel seen.',
  },
  {
    front: 'You show up. Every. Single. Time.',
    back: 'Rain, exams, bad days, worse nights. You are the first call and the safest place.',
  },
  {
    front: 'You dream out loud',
    back: 'and somehow make me believe my dreams are reasonable too. Your belief is contagious.',
  },
  {
    front: 'You are unapologetically you',
    back: 'weird, warm, fierce, tender. Thank you for never shrinking to fit a room.',
  },
  {
    front: 'You make ordinary days feel like keepsakes',
    back: "a Tuesday with you hits harder than most people's holidays. That is a rare gift.",
  },
];
