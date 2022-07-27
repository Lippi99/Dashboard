import { ReactNode } from "react";
import { Content } from "./styles";

interface BoxProps {
  maxWidth?: string | number;
  width?: string | number;
  height?: string | number;
  background?: string;
  minHeight?: string | number;
  overflowY?: string | number;
  opacity?: string | number;
  position?: "absolute" | "relative" | "fixed";
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  padding?: string | number;
  margin?: string | number;
  borderBottom?: string | number;
  borderRadius?: string;
  border?: string | number;
  zIndex?: 1 | 100 | 1000;
  children?: ReactNode;
  transform?: string;
  as?: any;
}

export const Box = ({
  maxWidth,
  width,
  height,
  background,
  minHeight,
  overflowY,
  opacity,
  position,
  top,
  right,
  bottom,
  left,
  children,
  padding,
  margin,
  borderBottom,
  borderRadius,
  zIndex,
  border,
  transform,
  as,
}: BoxProps) => {
  return (
    <Content
      width={width}
      height={height}
      background={background}
      minHeight={minHeight}
      overflowY={overflowY}
      opacity={opacity}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      as={as}
      padding={padding}
      margin={margin}
      borderBottom={borderBottom}
      border={border}
      borderRadius={borderRadius}
      zIndex={zIndex}
      transform={transform}
    >
      {children}
    </Content>
  );
};
