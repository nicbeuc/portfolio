import type { ImageMetadata } from 'astro';

/* Video Lookup */

export const VIDEO_PLAYBACK_IDS = {
  demo: 'A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg',
  reel: 'M6N681neg02Bu5Gl1ziIHzMW8gH8sP2yL8XO019ngN1UM',
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
    title: 'R. Chiara',
    description: 'Fugiat ullamco commodo cillum nostrud velit amet minim qui nostrud qui laborum dolore eiusmod. Voluptate ex est labore id culpa amet voluptate consequat amet labore do sunt. Laborum nisi officia est nostrud dolor nisi ad labore mollit. Irure consequat esse esse.',
    agency: 'Make Me Modern',
    roles: ['Strategy', 'Design', 'Development'],
    media: [
      {
        type: 'video',
        name: 'demo',
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
        name: 'demo',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'demo',
        orientation: 'landscape',
        span: 'full',
      },
      {
        type: 'video',
        name: 'demo',
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
        name: 'demo',
        orientation: 'landscape',
        span: 'full',
      },
    ],
  },
  {
    title: 'Xül Beer Company',
    description: 'Fugiat ullamco commodo cillum nostrud velit amet minim qui nostrud qui laborum dolore eiusmod. Voluptate ex est labore id culpa amet voluptate consequat amet labore do sunt. Laborum nisi officia est nostrud dolor nisi ad labore mollit. Irure consequat esse esse.',
    agency: 'Make Me Modern',
    roles: ['Strategy', 'Design', 'Development'],
    media: [
      {
        type: 'video',
        name: 'demo',
        orientation: 'landscape',
        span: 'full',
      },
      {
        type: 'video',
        name: 'demo',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'demo',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'demo',
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
        name: 'demo',
        orientation: 'landscape',
        span: 'half',
      },
      {
        type: 'video',
        name: 'demo',
        orientation: 'landscape',
        span: 'half',
      },
      {
        type: 'video',
        name: 'demo',
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
        name: 'demo',
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
    title: 'Wide Eyes Paper Co.',
    description: 'Fugiat ullamco commodo cillum nostrud velit amet minim qui nostrud qui laborum dolore eiusmod. Voluptate ex est labore id culpa amet voluptate consequat amet labore do sunt. Laborum nisi officia est nostrud dolor nisi ad labore mollit. Irure consequat esse esse.',
    agency: 'Make Me Modern',
    roles: ['Strategy', 'Design', 'Development'],
    media: [
      {
        type: 'video',
        name: 'demo',
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
        name: 'demo',
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
        name: 'demo',
        orientation: 'landscape',
        span: 'half',
      },
      {
        type: 'video',
        name: 'demo',
        orientation: 'landscape',
        span: 'half',
      },
      {
        type: 'video',
        name: 'demo',
        orientation: 'portrait',
        span: 'half',
      },
      {
        type: 'video',
        name: 'demo',
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