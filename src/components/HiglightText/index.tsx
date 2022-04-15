import { SpanText } from "./styles";

interface HightLightTextProps {
  text: string;
}

export const HighLightText = ({ text }: HightLightTextProps) => {
  return <SpanText>{text}</SpanText>;
};
