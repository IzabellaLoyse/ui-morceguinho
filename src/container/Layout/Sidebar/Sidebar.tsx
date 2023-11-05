import { Pencil } from "phosphor-react";
import batLogo from "../../../assets/bat.png";
import Navigation from "../Navigation/Navigation";
import "../layout.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        <img src={batLogo} alt="Logo de Morcego" className="logo" />
        <h1>Morceguinho</h1>
      </div>

      <Navigation />

      <button className="btn-battweet" type="button">
        <Pencil />
        <span>BatTweet</span>
      </button>
    </aside>
  );
}

export default Sidebar;
