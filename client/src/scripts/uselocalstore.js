import { useState } from "react";

export function useLocalstore(key, initialValue) {
  console.log("ingreso a l aufnciton uselocalstore");
  const [storedValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoreValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.log(error);
    }
  };
  return [storedValue, setStoreValue];
}
