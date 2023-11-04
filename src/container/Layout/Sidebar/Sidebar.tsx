import batLogo from "../../../assets/logo.svg";
import "../layout.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={batLogo} alt="Logo de Morcego" className="logo" />
      <nav></nav>

      <button>BatTweet</button>
    </aside>
  );
}

export default Sidebar;
