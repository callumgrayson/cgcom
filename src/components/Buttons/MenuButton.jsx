import { ReactComponent as MenuIcon } from "../../svg/menu-icon.svg";
import { ReactComponent as CloseIcon } from "../../svg/close-icon.svg";

function MenuButton({ showMenu, handler }) {
  return (
    <div className="easy-click">
      <button className="easy-click-button show-menu-button" onClick={handler}>
        {showMenu ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
}

export default MenuButton;
