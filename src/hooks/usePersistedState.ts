import { useState, useEffect } from "react";
import { getItem, setItem } from "@/utils/localStorage";

export function usePersistedState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const item = getItem(key);

    if (item === null || item === undefined) return initialValue;

    return item as T;
  });

  useEffect(() => {
    setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
