'use client';

import { useState, useEffect } from "react";

const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const interval = setInterval(() => {
      setDebounce(text);
    }, delay);

    return () => clearInterval(interval);
  }, [text]);

  return debounce
};

export default useDebounce;