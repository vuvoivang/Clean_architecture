/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { title } = props;
  return <div>{title}</div>;
};

export default Header;
