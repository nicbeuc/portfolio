/**
 * Checks if the user has enabled reduced motion.
 * @returns True if the user has enabled reduced motion, false otherwise.
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}