import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("ConnectCast-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("ConnectCast-theme", theme);
    set({theme});
  },
}))