// app/components/ThemeSwitcher.tsx
"use client";

import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "./toggle/SunIcon";
import { MoonIcon } from "./toggle/MoonIcon";



export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="flex gap-4">      
      <button onClick={() => setTheme('light')}><SunIcon /></button>
      <button onClick={() => setTheme('dark')}><MoonIcon /></button>
    </div>
  )
};