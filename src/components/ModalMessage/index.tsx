import { useEffect, useRef, useState } from "react";
import "./styles.css";

export type ErrorType = {
  message: string;
  time?: number;
  type: "error" | "success";
};

export const StandardError: ErrorType = {
  message: "",
  type: "error",
};

export type ErrorProps = {
  currentState: ErrorType;
};

export default function ModalMessage({ currentState }: ErrorProps) {
  const time = 5000;
  const [state, setState] = useState(false);

  useEffect(() => {
    if (currentState.message !== StandardError.message) {
      setState(true);
      setTimeout(
        () => {
          setState(false);
        },
        currentState.time ? currentState.time : time
      );
    }
  }, [currentState]);

  return (
    <div className={`modal text ${currentState.type} ${state ? "on" : "off"}`}>
      {currentState.message}
    </div>
  );
}
