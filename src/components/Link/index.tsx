import Link from "next/link";

interface LinkProps {
  to: string;
  value: any;
}

export const NavLink = ({ to, value }: LinkProps) => {
  return (
    <Link href={to}>
      <a>{value}</a>
    </Link>
  );
};
