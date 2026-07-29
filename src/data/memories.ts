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
    photo: '/photos/8.JPEG',
    accent: 'rose',
  },
  {
    id: 'college-fest',
    title: 'College Fest Chaos',
    date: 'March 2020',
    place: 'The Main Stage',
    blurb: '',
    photo: '/photos/21.jpg',
    accent: 'gold',
  },
  {
    id: 'late-night-calls',
    title: 'My favorite view wasn\'t outside the window.',
    date: 'The Whole Semester',
    place: 'Two Ends of a Phone Call',
    blurb: '',
    photo: '/photos/5.JPG',
    accent: 'sage',
  },
  {
    id: 'farewell',
    title: 'The Farewell',
    date: 'May 2022',
    place: 'The Campus Gates',
    blurb: '',
    photo: '/photos/13.JPEG',
    accent: 'rose',
  },
  {
    id: 'last-birthday',
    title: 'Her Last Birthday — The Kundvada Kere',
    date: 'July 2024',
    place: 'The Shore at Dusk',
    blurb: '',
    photo: '/photos/19.JPEG',
    accent: 'gold',
  },
  {
    id: 'everyday-magic',
    title: 'The In-Between Days',
    date: 'All Along',
    place: 'Every Road We Walked',
    blurb: '',
    photo: '/photos/6.JPG',
    accent: 'sage',
  },
];

export type GalleryShot = { src: string; caption: string; span?: boolean };

export const gallery: GalleryShot[] = [
  {
    src: '/photos/1.JPG',
    caption: 'A little piece of us',
    span: true,
  },
  {
    src: '/photos/2.JPG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/3.JPG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/4.JPG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/5.JPG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/6.JPG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/7.JPG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/8.JPEG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/9.JPEG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/16.JPEG',
    caption: 'A little piece of us',
    span: true,
  },
  {
    src: '/photos/11.JPEG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/12.JPEG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/13.JPEG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/14.jpg',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/15.jpg',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/16.JPEG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/17.JPEG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/18.JPEG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/19.JPEG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/20.JPEG',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/21.jpg',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/22.jpg',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/ethnic_day.jpg',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/IMG-20250512-WA0035.jpg',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/redsea.jpg',
    caption: 'A little piece of us',
  },
  {
    src: '/photos/us.JPEG',
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
