import { useEffect } from "react";

export const useInterval = (callback: Function, isRun: boolean) => {
  useEffect(() => {
    if (isRun === true) {
      const interval = setInterval(() => callback(), 50);
      return () => clearInterval(interval);
    }
  }, [callback, isRun]);
};
