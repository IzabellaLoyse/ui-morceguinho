import { Outlet } from "react-router-dom";
import "../layout.css";

function ContentMain() {
  return (
    <main className="content">
      <Outlet />
    </main>
  );
}

export default ContentMain;
