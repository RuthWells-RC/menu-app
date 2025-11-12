import { MenuItem } from "../models/types";

// Calculate average price per course
export const averagePriceByCourse = (items: MenuItem[]) => {
  const grouped: { [course: string]: MenuItem[] } = {};

  items.forEach((item) => {
    if (!grouped[item.course]) {
      grouped[item.course] = [];
    }
    grouped[item.course].push(item);
  });

  const averages: { [course: string]: number } = {};

  for (const course in grouped) {
    const total = grouped[course].reduce((sum, item) => sum + item.price, 0);
    averages[course] = total / grouped[course].length;
  }

  return averages;
};
