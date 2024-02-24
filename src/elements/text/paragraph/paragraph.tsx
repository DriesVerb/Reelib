import { Txt } from "../textTypes";

import "./paragraph.css";

interface ParagraphProps extends Txt {}

export const Paragraph = (props: ParagraphProps) => {
  const { children } = props

  return (
    <>
      <p className="paragraph-el">{children}</p>
    </>
  );
};
