import { getWeeksInMonth, startOfMonth, startOfWeek } from 'date-fns';

export default function getCalendarMonth(date : Date, weekStartsOn : 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined) {
    const weeksInMonth = getWeeksInMonth(date, { weekStartsOn });
    const monthStart = startOfMonth(date);

    const monthFirstWeekStart = startOfWeek(monthStart, { weekStartsOn });

    // loop through weeks in month and generate dates
    const dates = [];
    const weeks = [];
    for (let i = 0; i < weeksInMonth; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
            const day = new Date(monthFirstWeekStart);
            day.setDate(day.getDate() + (i * 7) + j);
            week.push(day);

            // add day to dates
            dates.push(day);
        }
        weeks.push(week);
    }

    return { dates, weeks };
}