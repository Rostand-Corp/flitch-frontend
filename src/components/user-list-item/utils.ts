import { formatDistanceStrict } from 'date-fns';

export const getDateDistance = (date: Date | string | number) => {
  const time = formatDistanceStrict(new Date(date), new Date());
  if (time.includes('seconds') && parseInt(time) <= 30) {
    return 'Now';
  }
  return time;
};
