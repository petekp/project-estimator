export const calculateTotalEstimate = ({
  estimates,
  paddingPercentage,
}: {
  estimates: Record<string, number>;
  paddingPercentage: number;
}): string => {
  let totalDays = 0;
  for (const key in estimates) {
    totalDays += estimates[key];
  }

  totalDays += Math.round((totalDays * paddingPercentage) / 100);

  const weeks = Math.floor(totalDays / 5);
  const days = totalDays % 5;

  const weekStr = weeks === 1 ? "1 week" : `${weeks} weeks`;
  const dayStr = days === 1 ? "1 day" : `${days} days`;

  if (weeks === 0) {
    return dayStr;
  } else if (days === 0) {
    return weekStr;
  } else {
    return `${weekStr} and ${dayStr}`;
  }
};
