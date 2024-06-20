import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export const date = dayjs().tz(dayjs.tz.guess()).format('YYYY-MM-DD HH:mm:ss');
