import { ReactNode } from "react";
import { Content } from "./styles";

interface GridProps {
  width?: string | number;
  height?: string | number;
  background?: string;
  minHeight?: string;
  columns?: string | number;
  rows?: string | number;
  gap?: string | number;
  rowGap?: string | number;
  justify?:
    | "center"
    | "space-around"
    | "space-between"
    | "flex-start"
    | "flex-end";
  placeItems?: "center" | "normal start";
  borderRadius?: string;
  overflowY?: "scroll" | "hidden" | "auto";
  opacity?: string | number;
  position?: string | number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  padding?: string | number;
  margin?: string | number;
  children?: ReactNode;
  borderBottom?: string | number;
  border?: string | number;
  as?: any;
}

export const Grid = ({
  columns,
  rows,
  justify,
  placeItems,
  width,
  height,
  rowGap,
  gap,
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
  border,
  borderRadius,
  as,
}: GridProps) => {
  return (
    <Content
      as={as}
      columns={columns}
      rows={rows}
      gap={gap}
      rowGap={rowGap}
      justify={justify}
      placeItems={placeItems}
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
      padding={padding}
      margin={margin}
      borderBottom={borderBottom}
      border={border}
      borderRadius={borderRadius}
    >
      {children}
    </Content>
  );
};
