export const NOW = new Date();

export const A_WEEK_AGO = new Date();
A_WEEK_AGO.setDate(NOW.getDate() - 7);

export const A_MONTH_AGO = new Date();
A_MONTH_AGO.setDate(NOW.getDate() - 30); // close enough
