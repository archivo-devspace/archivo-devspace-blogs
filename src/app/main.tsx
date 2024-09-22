// Container.tsx
"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import { Colors } from "@/theme";
import React, { useEffect } from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeContext();

  useEffect(() => {
    const root = document.documentElement;

    const colors = Colors[theme];

    root.style.setProperty("--primary-color", colors.primary);
    root.style.setProperty("--secondary-color", colors.secondary);
    root.style.setProperty("--tertiary-color", colors.tertiary);
    root.style.setProperty("--primaryText-color", colors.primaryText);
    root.style.setProperty("--secondaryText-color", colors.secondaryText);
    root.style.setProperty("--tertiaryText-color", colors.tertiaryText);

    root.style.setProperty("--success-color", colors.success);
    root.style.setProperty("--warnning-color", colors.warnning);
    root.style.setProperty("--danger-color", colors.danger);
    root.style.setProperty("--gray-color", colors.gray);
  }, [theme]);

  return <>{children}</>;
};

export default Main;
