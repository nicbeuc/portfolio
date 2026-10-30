export const videoPlaybackIds = {
  demo: 'A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg',
  reel: 'M6N681neg02Bu5Gl1ziIHzMW8gH8sP2yL8XO019ngN1UM',
} as const;

export type VideoName = keyof typeof videoPlaybackIds;

export const videos = Object.fromEntries(
  (Object.keys(videoPlaybackIds) as VideoName[]).map((name) => [
    name,
    {
      playbackId: videoPlaybackIds[name],
      thumbnailUrl: `https://image.mux.com/${videoPlaybackIds[name]}/thumbnail.webp`
    },
  ]),
) as Record<VideoName, { playbackId: string; thumbnailUrl: string }>;