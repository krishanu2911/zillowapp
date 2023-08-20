import React from "react";
import { useEffect } from "react";

export const Toast = ({ flag, setterFunc, message }) => {
  useEffect(() => {
    if (flag) {
      setTimeout(() => {
        setterFunc({ state: false, message: "" });
      }, 1500);
    }
  }, [flag]);
  return flag ? (
    <div className="fixed bottom-6 left-1/2 translate-x-[-50%] m-auto w-[25%] px-6 py-3 bg-black text-white text-center rounded-md">
      {message}
    </div>
  ) : null;
};
