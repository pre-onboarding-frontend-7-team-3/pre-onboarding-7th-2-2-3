import { useEffect, useState } from "react";

export function useOnClickOutside(ref, callback) {
  const [isTouchEvent, setTouchEvent] = useState(false);
  const eventType = isTouchEvent ? "touchend" : "click";

  function handleEvent(event) {
    if (event.type === "click" && isTouchEvent) {
      return;
    }

    if (ref?.current && event.target !== null) {
      if (!ref.current.contains(event.target)) {
        callback(event);
      }
    }
  }

  useEffect(() => {
    document.addEventListener(eventType, handleEvent, true);

    return () => {
      document.removeEventListener(eventType, handleEvent, true);
    };
  });

  useEffect(() => {
    setTouchEvent("ontouchstart" in document.documentElement);
  }, []);
}
