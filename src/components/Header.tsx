import React from "react";

export interface IHeader {
  text: string;
  icon: string;
}

export const Header: React.FC<IHeader> = ({ text, icon }) => {
  return (
    <div className="flex items-center ">
      {icon && <img className="mr-5" src={icon} />}
      <span className="text-primaryText text-sm">{text}</span>
    </div>
  );
};

export default Header;
