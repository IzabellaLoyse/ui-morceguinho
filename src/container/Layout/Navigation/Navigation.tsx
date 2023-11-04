import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import "../layout.css";

function Navigation() {
  return (
    <nav className="main-navigation">
      <NavLink to="/">
        <House weight="fill" />
        Home
      </NavLink>
      <a href="#">
        <Hash />
        Explore
      </a>
      <a href="#">
        <Bell />
        Notifications
      </a>
      <a href="#">
        <Envelope />
        Messages
      </a>
      <a href="#">
        <BookmarkSimple />
        Bookmarks
      </a>
      <a href="#">
        <FileText />
        Lists
      </a>
      <a href="#">
        <User />
        Profiles
      </a>
      <a href="#">
        <DotsThreeCircle />
        More
      </a>
    </nav>
  );
}

export default Navigation;
