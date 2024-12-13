export const rocketParts = {
  noses: [
    "M50 0 L90 50 L10 50 Z", // Example triangular nose
    "M50 0 C60 20, 40 20, 50 50 Z", // Curved nose
  ],
  bodies: [
    "M20 50 L80 50 L80 150 L20 150 Z", // Rectangular body
    "M30 50 C70 100, 70 100, 30 150 Z", // Tapered body
  ],
  fins: [
    "M20 150 L50 130 L50 150 Z", // Simple fin
    "M80 150 L50 130 L50 150 Z", // Mirrored fin
  ],
  exhausts: [
    "M30 150 C40 180, 60 180, 70 150 Z", // Rounded exhaust
    "M40 150 L50 170 L60 150 Z", // Pointed exhaust
  ],
};
