import { CSSProperties, FC } from 'react';

import Link from "next/link";
import { useRouter } from "next/router";

interface Props  {
  text: string;
  href: string;
};

const styles: CSSProperties = {
  color: "blue",
  textDecoration: "underline",
};

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? styles : undefined}>{text}</a>
    </Link>
  );
};
