import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { Switch } from "@headlessui/react";

const ThemeSwitcher = () => {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Check if the user's system prefers dark mode
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setEnabled(prefersDarkMode);

    // Retrieve the user's preference from localStorage, if available
    const userPreference = localStorage.getItem("themePreference");
    if (userPreference !== null) {
      setEnabled(userPreference === "dark");
      setTheme(userPreference);
    }
  }, [setTheme]);

  const handleSwitchChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setEnabled(newTheme === "dark");
    setTheme(newTheme);

    // Store the user's preference in localStorage
    localStorage.setItem("themePreference", newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={handleSwitchChange}
        className={`${
          enabled ? "bg-[#e7e5e5]" : "bg-[#373636]"
        } relative inline-flex h-7 w-16 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-9" : "translate-x-1"
          } flex items-center justify-center h-6 w-6 transform rounded-full transition bg-[#aeaeae] hover:text-[#3a9194]`}
        >
          <span className="flex items-center justify-center">
            {theme === "dark" ? (
              <RiSunLine className="text-[1rem] md:text-[1rem]" />
            ) : (
              <RiMoonLine className="text-[1rem] md:text-[1rem]" />
            )}
          </span>
        </span>
      </Switch>
    </div>
  );
};

export default ThemeSwitcher;
