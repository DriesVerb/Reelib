import { useRef, ReactNode } from "react";

interface IconButton {
  icon: ReactNode;
  onClick?: () => void;
}

export const Icon = (props: IconButton) => {
  const { icon } = props;
  
  const iconButtonRef = useRef(null);

  return (
    <div>
      <button ref={iconButtonRef}>{icon}</button>
    </div>
  );
};
