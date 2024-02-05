export const userCurrentDate = new Date();

export const firstDayOfWeek = new Date(userCurrentDate);
firstDayOfWeek.setDate(userCurrentDate.getDate() - userCurrentDate.getDay());

export const firstDayOfMonth = new Date(
  userCurrentDate.getFullYear(),
  userCurrentDate.getMonth(),
  1
);

export const firstDayOfYear = new Date(userCurrentDate.getFullYear(), 0, 1);

export const thisWeek = 'Esta semana';
export const thisMonth = 'Este mes';
export const thisYear = 'Este año';
