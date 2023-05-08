import { Phase, PhaseOption } from "./types";

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
    phase: "Define",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 1 },
      { size: "M", days: 2 },
      { size: "L", days: 3 },
      { size: "XL", days: 7 },
    ],
  },
  {
    phase: "Ideate",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 2 },
      { size: "M", days: 4 },
      { size: "L", days: 7 },
      { size: "XL", days: 14 },
    ],
  },
  {
    phase: "Xfn Design Reviews",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 1 },
      { size: "M", days: 2 },
      { size: "L", days: 3 },
      { size: "XL", days: 7 },
    ],
  },
  {
    phase: "Prototype",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 2 },
      { size: "M", days: 4 },
      { size: "L", days: 7 },
      { size: "XL", days: 14 },
    ],
  },
  {
    phase: "User Test",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 1 },
      { size: "M", days: 2 },
      { size: "L", days: 3 },
      { size: "XL", days: 7 },
    ],
  },
  {
    phase: "Handoff",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 1 },
      { size: "M", days: 2 },
      { size: "L", days: 3 },
      { size: "XL", days: 7 },
    ],
  },
  {
    phase: "Implementation Reviews, Support,  Housekeeping",
    options: [
      { size: "XS", days: 1 },
      { size: "S", days: 1 },
      { size: "M", days: 2 },
      { size: "L", days: 3 },
      { size: "XL", days: 7 },
    ],
  },
];
