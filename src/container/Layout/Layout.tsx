import ContentMain from "./ContentMain/ContentMain";
import Sidebar from "./Sidebar/Sidebar";
import "./layout.css";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <ContentMain />
    </div>
  );
}

export default Layout;
