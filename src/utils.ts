/**
 * Checks if the user has enabled reduced motion.
 * @returns True if the user has enabled reduced motion, false otherwise.
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Checks if the browser supports the animation-timeline property.
 * @returns True if the browser supports the animation-timeline property, false otherwise.
 */
export function supportsAnimationTimeline(): boolean {
  return CSS.supports('animation-timeline: view()');
}

/**
 * Checks if the browser supports the animation-trigger property.
 * @returns True if the browser supports the animation-trigger property, false otherwise.
 */
export function supportsAnimationTrigger(): boolean {
  return CSS.supports('timeline-trigger-name: --t');
}

/**
 * Checks if the browser supports the attribute function.
 * @returns True if the browser supports the attribute function, false otherwise.
 */
export function supportsAttributeFunction(): boolean {
  return CSS.supports('(opacity: attr(data-opacity type(<number>))) and at-rule(@property)');
}