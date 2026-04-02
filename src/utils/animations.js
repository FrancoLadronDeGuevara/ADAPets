export const fromLeft = (delay = 0) => ({
  initial:     { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport:    { once: false, amount: 0.1 },
  transition:  { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export const fromRight = (delay = 0) => ({
  initial:     { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport:    { once: false, amount: 0.1 },
  transition:  { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export const fromBottom = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: false, amount: 0.1 },
  transition:  { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export const fromTop = (delay = 0) => ({
  initial:     { opacity: 0, y: -24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: false, amount: 0.3 },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export const headingVariant = {
  hidden:  { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const cardVariant = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
  }),
};

export const heroSlowZoom = {
  initial:    { scale: 1.1 },
  animate:    { scale: 1 },
  transition: { duration: 15, ease: "easeOut" },
};

export const heroReveal = {
  initial:    { clipPath: "inset(0 100% 0 0)", opacity: 1 },
  animate:    { clipPath: "inset(0 0% 0 0)",   opacity: 1 },
  transition: { duration: 1.4, ease: [0.77, 0, 0.175, 1] },
};

export const heroFadeInUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" },
});

export const heroLineGrow = {
  initial:     { width: 0 },
  whileInView: { width: "4rem" },
  viewport:    { once: false, amount: 0.1 },
  transition:  { duration: 1.2, ease: "easeOut" },
};
