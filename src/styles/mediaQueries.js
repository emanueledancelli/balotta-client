const breakpoints = [576, 768, 940, 1200];

export const mq = breakpoints.map(e => `@media (min-width: ${e}px)`);
