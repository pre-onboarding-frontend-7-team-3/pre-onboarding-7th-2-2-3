import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const path = useLocation();

  useEffect(() => {
    const delayRender = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => {
      setIsLoading(true);
      clearTimeout(delayRender);
    };
  }, [path, setIsLoading]);

  return { isLoading };
};

export default useLoading;
