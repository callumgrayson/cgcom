import { Link, Outlet } from "react-router-dom";
import MenuButton from "../Buttons/MenuButton";
import LogoButton from "../Buttons/LogoButton";
import useMenuState from "./useMenuState";
import Nav from "./Nav";
import "./Layout.css";

function Layout() {
  const [showMenu, handler] = useMenuState();

  return (
    <div className="full-page">
      <header className="header">
        <LogoButton />
        <MenuButton showMenu={showMenu} handler={handler} />
      </header>
      <div className="flex-row-box">
        <div className="outlet-box">
          <Outlet />
        </div>
        <Nav showMenu={showMenu} handler={handler} />
      </div>
      {/* <footer className="footer">Footer stuff</footer> */}
    </div>
  );
}

export default Layout;
