import { useEffect, useState } from "react";
import "./styles.css";

export type MessageType = {
  message: string;
  time?: number;
  type: "error" | "success";
};

export const StandardMessage: MessageType = {
  message: "",
  type: "error",
};

export type ModalMessageProps = {
  currentState: MessageType;
};

export default function ModalMessage({ currentState }: ModalMessageProps) {
  const time = 5000;
  const [state, setState] = useState(false);

  useEffect(() => {
    if (currentState.message !== StandardMessage.message) {
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
