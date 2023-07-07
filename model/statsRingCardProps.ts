interface StatsRingCardProps {
  title: string;
  balance: number;
  total: number;
  stats: {
    value: number;
    label: string;
  }[];
}

export default StatsRingCardProps;
