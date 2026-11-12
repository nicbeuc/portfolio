import type { ImageMetadata } from 'astro';

/* Video Lookup */

export const VIDEO_PLAYBACK_IDS = {
  'demo': 'A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg',
  'reel': 'M6N681neg02Bu5Gl1ziIHzMW8gH8sP2yL8XO019ngN1UM',
  'rchiara-overview': 'SccJhIoYgTvQ5h4IcTPLrFhlfJRXNIV7yTntize4JEY',
  'rchiara-banners': 'UyrXEUofZ6iu4EbhPPIi1wC902s00WNXloX6JUggcFk9E',
  'rchiara-cards': 'SIb5aEh1NX1ZGbUsqspH3tFhallmJyg11NUaqnn3pfg',
  'rchiara-pdp-showcase': 'NWOUDBGRcl8lrhnwKMD655ZqxsHi9xufdxHS6PO7zfQ',
  'rchiara-typography': 'wNqcOYm4uY7metS5cdKzVtOxuEvFUGE3Na6jo3009Kls',
  'xul-beers': 'n00Q6lRS5uTj3UIf9F9do6mZXxDsabXJy01rhWGVzaMSY',
  'xul-button': 'Rtw00iHD91iFWuCWBEO01w9EPU1RbTkwxRHFPtFkVo02rQ',
  'xul-crew': 'U02MGUTVUyzGLIX00dkw202UFbq9ffsHec01sATjo7xlj6g',
  'xul-foil': 'zqF3Rr4f02CQrZcGnzeEc3aRZOMWwKAsPSosdEnlEyzY',
  'xul-index': 'nyfRRFNr7Jd27WebvefrCft8xNb00KR4LGRjFdJ7dBuo',
  'xul-menu': '02cTxqtJWTBnBLCNs9J8AtNy5481HrczNgyrwyRchrxE',
  'xul-pagination': 'DeLmgvR02ZmcZf3spxWliQGiiSlo2GyRTN01q6ghGpQdc',
  'xul-scroll': 'jvSB601kOm01NlGQ3ZHnpa1VXKYoG16dH3392QNXNy4n4',
  'wepco-faq': 'x02C7k00aKF8rRO15x4mvFX1cH2PmqY01EVRDXdxOWGfWY',
  'wepco-hover': 'sJ9LBNM58gFZgZSize16iBDcIfDsEA2kJMQQ02EIu6uo',
  'wepco-inspiration': 'X1YyYqwYhMuLCAOPyDfBOKHXW74300uZBRNugPMGi00KY',
  'wepco-services': '5qS02KH4s02148v0000joQE3wV7PlAo00xkFPBYoNc15I5WM',
  'wepco-showcase': 'Yeqk5sshP00YVZUEjrO1c1tsqpw156p48MZipkP3LdyQ',
  'wepco-stamps': 'eNqC00h76Vo8B4uIvOh7chpS02gHK8Qji02jRMGUCTCmzQ'
} as const;

export type VideoName = keyof typeof VIDEO_PLAYBACK_IDS;

export const VIDEOS = Object.fromEntries(
  (Object.keys(VIDEO_PLAYBACK_IDS) as VideoName[]).map((name) => [
    name,
    {
      playbackId: VIDEO_PLAYBACK_IDS[name],
      thumbnailUrl: `https://image.mux.com/${VIDEO_PLAYBACK_IDS[name]}/thumbnail.webp`
    },
  ]),
) as Record<VideoName, { playbackId: string; thumbnailUrl: string }>;

/* Project Images */

const PROJECT_IMAGE_MODULES = import.meta.glob<ImageMetadata>(
  './assets/project-images/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, import: 'default' },
);

export const PROJECT_IMAGES = Object.fromEntries(
  Object.entries(PROJECT_IMAGE_MODULES).map(([path, image]) => {
    const filename = path.split('/').pop()!;
    const name = filename.replace(/\.[^.]+$/, '');
    return [name, image];
  }),
);

export function getProjectImage(name: string) {
  const image = PROJECT_IMAGES[name];
  if (!image) throw new Error(`Unknown project image: ${name}`);
  return image;
}

/* Projects */

export type Span = 'half' | 'full';

export type Orientation = 'landscape' | 'portrait';

export type ProjectRole = 'Strategy' | 'Design' | 'Development';

type ProjectMediaBase = {
  orientation: Orientation;
  span: Span;
};

type ProjectVideo = ProjectMediaBase & {
  type: 'video';
  name: VideoName;
};

type ProjectImage = ProjectMediaBase & {
  type: 'image';
  name: string;
};

export type ProjectMedia = ProjectVideo | ProjectImage;

export type Project = {
  title: string;
  description: string;
  agency: string;
  roles: ProjectRole[];
  media: ProjectMedia[];
};

export const PROJECTS: Project[] = [
  {
    title: 'Xül Beer Company',
    description: 'Fugiat ullamco commodo cillum nostrud velit amet minim qui nostrud qui laborum dolore eiusmod. Voluptate ex est labore id culpa amet voluptate consequat amet labore do sunt. Laborum nisi officia est nostrud dolor nisi ad labore mollit. Irure consequat esse esse.',
    agency: 'Make Me Modern',
    roles: ['Design', 'Development'],
    media: [
      {
        type: 'video',
        name: 'xul-scroll',
        orientation: 'landscape',
        span: 'full',
      },
      {
        type: 'video',
        name: 'xul-foil',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'xul-menu',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'xul-beers',
        orientation: 'landscape',
        span: 'full',
      },
      {
        type: 'image',
        name: 'xul-beer-mobile',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'xul-pagination',
        orientation: 'landscape',
        span: 'half',
      },
      {
        type: 'video',
        name: 'xul-button',
        orientation: 'landscape',
        span: 'half',
      },
      {
        type: 'video',
        name: 'xul-index',
        orientation: 'landscape',
        span: 'full',
      },
      {
        type: 'image',
        name: 'xul-password',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'xul-crew',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'image',
        name: 'xul-finder',
        orientation: 'landscape',
        span: 'full',
      },
    ],
  },
  {
    title: 'R. Chiara',
    description: 'Fugiat ullamco commodo cillum nostrud velit amet minim qui nostrud qui laborum dolore eiusmod. Voluptate ex est labore id culpa amet voluptate consequat amet labore do sunt. Laborum nisi officia est nostrud dolor nisi ad labore mollit. Irure consequat esse esse.',
    agency: 'Make Me Modern',
    roles: ['Design', 'Development'],
    media: [
      {
        type: 'video',
        name: 'rchiara-overview',
        orientation: 'landscape',
        span: 'full',
      },
      {
        type: 'image',
        name: 'rchiara-plp-pdp',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'rchiara-typography',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'rchiara-pdp-showcase',
        orientation: 'landscape',
        span: 'full',
      },
      {
        type: 'video',
        name: 'rchiara-banners',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'image',
        name: 'rchiara-resetting',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'rchiara-cards',
        orientation: 'landscape',
        span: 'full',
      },
    ],
  },
  {
    title: 'Wide Eyes Paper Co.',
    description: 'Fugiat ullamco commodo cillum nostrud velit amet minim qui nostrud qui laborum dolore eiusmod. Voluptate ex est labore id culpa amet voluptate consequat amet labore do sunt. Laborum nisi officia est nostrud dolor nisi ad labore mollit. Irure consequat esse esse.',
    agency: 'Make Me Modern',
    roles: ['Design', 'Development'],
    media: [
      {
        type: 'video',
        name: 'wepco-showcase',
        orientation: 'landscape',
        span: 'full',
      },
      {
        type: 'image',
        name: 'wepco-details',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'wepco-stamps',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'image',
        name: 'wepco-design-system',
        orientation: 'landscape',
        span: 'full',
      },
      {
        type: 'video',
        name: 'wepco-faq',
        orientation: 'landscape',
        span: 'half',
      },
      {
        type: 'video',
        name: 'wepco-hover',
        orientation: 'landscape',
        span: 'half',
      },
      {
        type: 'video',
        name: 'wepco-inspiration',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'wepco-services',
        orientation: 'landscape',
        span: 'full',
      },
      {
        type: 'image',
        name: 'wepco-mobile-views',
        orientation: 'landscape',
        span: 'full',
      },
    ],
  },
];