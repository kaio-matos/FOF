import { useEffect, useState } from "react";
import "./styles.css";

type LoadingProps = {
  state: boolean;
  size: string;
};

export default function Loading({ state, size }: LoadingProps) {
  const [unmount, setUnmount] = useState(true);

  useEffect(() => {
    if (!state) {
      setTimeout(() => {
        setUnmount(true);
      }, 1000);
    } else {
      setUnmount(false);
    }
  }, [state]);

  if (unmount) return <div />;

  return (
    <div className={`${state ? "loading_on" : "loading_off"}`}>
      <div style={{ width: size, height: size }} className="circle"></div>
    </div>
  );
}
