import { MenuItem } from "../models/types";

const KEY = "menu_items_v1";

export const saveMenu = (items: MenuItem[]) => {
  localStorage.setItem(KEY, JSON.stringify(items));
};

export const loadMenu = (): MenuItem[] => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};
