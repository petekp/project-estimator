import { Phase } from "./types";

export const sizing: Phase[] = [
  {
    phase: "Discovery",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 3 },
      { size: "M", days: 7 },
      { size: "L", days: 10 },
      { size: "XL", days: 14 },
    ],
  },
  {
    phase: "Requirements",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 1 },
      { size: "M", days: 2 },
      { size: "L", days: 3 },
      { size: "XL", days: 7 },
    ],
  },
  {
    phase: "Ideation",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 2 },
      { size: "M", days: 4 },
      { size: "L", days: 7 },
      { size: "XL", days: 14 },
    ],
  },
  {
    phase: "Xfn design reviews",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 1 },
      { size: "M", days: 2 },
      { size: "L", days: 3 },
      { size: "XL", days: 7 },
    ],
  },
  {
    phase: "Prototyping",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 2 },
      { size: "M", days: 4 },
      { size: "L", days: 7 },
      { size: "XL", days: 14 },
    ],
  },
  {
    phase: "User testing",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 1 },
      { size: "M", days: 2 },
      { size: "L", days: 3 },
      { size: "XL", days: 7 },
    ],
  },
  {
    phase: "Deliverables + documentation",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 1 },
      { size: "M", days: 2 },
      { size: "L", days: 3 },
      { size: "XL", days: 7 },
    ],
  },
  {
    phase: "Implementation support + housekeeping",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 1 },
      { size: "M", days: 2 },
      { size: "L", days: 3 },
      { size: "XL", days: 7 },
    ],
  },
];
