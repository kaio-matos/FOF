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
  const DefaultTime = 5000;
  const time = currentState.time ? currentState.time : DefaultTime;
  const [state, setState] = useState(false);

  useEffect(() => {
    if (currentState.message !== StandardMessage.message) {
      setState(true);
      setTimeout(() => {
        setState(false);
      }, time);
    }
  }, [currentState, time]);

  return (
    <div className={`modal text ${currentState.type} ${state ? "on" : "off"}`}>
      {currentState.message}
    </div>
  );
}
