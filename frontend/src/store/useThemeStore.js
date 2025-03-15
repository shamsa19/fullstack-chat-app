import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee", // ✅ Default theme
  setTheme: (theme) => {
    console.log("Setting theme to:", theme); // ✅ Debugging
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));
