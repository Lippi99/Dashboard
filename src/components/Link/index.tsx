import Link from "next/link";

interface LinkProps {
  to: string;
  value: any;
  color?: string;
}

export const NavLink = ({ to, value, color }: LinkProps) => {
  return (
    <Link href={to}>
      <a style={{ color: color }}>{value}</a>
    </Link>
  );
};
