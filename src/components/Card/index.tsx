import { Container } from "./styles";

interface CardProps {
  width: string;
  height: string;
  padding?: string;
  title: string;
  description: string;
  children: any;
}

export const Card = ({
  title,
  description,
  children,
  width,
  height,
  padding,
}: CardProps) => {
  return (
    <Container width={width} height={height} padding={padding}>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </Container>
  );
};
