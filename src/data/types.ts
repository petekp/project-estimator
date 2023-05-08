export type PhaseOption = {
  size: string;
  days: number;
};

export type Phase = {
  phase: string;
  options: PhaseOption[];
};

export type SizingOption = {
  phase: string;
  size: string;
  days: number;
};
