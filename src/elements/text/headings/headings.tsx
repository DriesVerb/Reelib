import { Txt } from "../textTypes";

interface Heading extends Txt {}

export const H1 = (props: Heading) => {
  const { children } = props;

  return <h1>{children}</h1>;
};

export const H2 = (props: Heading) => {
  const { children } = props;

  return <h2>{children}</h2>;
};

export const H3 = (props: Txt) => {
  const { children } = props;

  return <h3>{children}</h3>;
};
