import { Sparkle } from "phosphor-react";
import { IHeaderProps } from "../../../interfaces/header";
import "../layout.css";

function Header({ title }: IHeaderProps) {
  return (
    <div className="timeline__header">
      {title}
      <Sparkle />
    </div>
  );
}

export default Header;
