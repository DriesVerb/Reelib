import { useRef } from "react";

interface BasicButton {
  label: string;
  onClick?: () => void;
}

export const Basic = (props: BasicButton) => {
  const { label } = props;

  const buttonRef = useRef(null);

  return (
    <>
      <button ref={buttonRef} {...props}>{label}</button>
    </>
  );
};
