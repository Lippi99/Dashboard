import { ReactNode } from "react";
import { Content } from "./styles";

interface FlexProps {
  width?: string | number;
  background?: string;
  justify?:
    | "center"
    | "space-around"
    | "space-between"
    | "flex-start"
    | "flex-end";
  align?: "center" | "flex-start" | "flex-end";
  wrap?: "flex-wrap" | "wrap" | "wrap-reverse";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  gap?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
  height?: string | number;
  borderRadius?: string;
  overflowY?: "scroll" | "hidden" | "auto";
  minHeight?: string | number;
  opacity?: string | number;
  position?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  children?: ReactNode;
  padding?: string | number;
  margin?: string | number;
  borderBottom?: string | number;
  borderTop?: string | number;
  border?: string | number;
  as?: any;
}

export const Flex = ({
  direction,
  justify,
  align,
  wrap,
  width,
  height,
  rowGap,
  columnGap,
  gap,
  borderRadius,
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
  borderTop,
  border,
  as,
}: FlexProps) => {
  return (
    <Content
      as={as}
      direction={direction}
      align={align}
      wrap={wrap}
      justify={justify}
      width={width}
      height={height}
      rowGap={rowGap}
      columnGap={columnGap}
      gap={gap}
      background={background}
      borderRadius={borderRadius}
      minHeight={minHeight}
      overflowY={overflowY}
      opacity={opacity}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      padding={padding}
      margin={margin}
      borderBottom={borderBottom}
      borderTop={borderTop}
      border={border}
    >
      {children}
    </Content>
  );
};
