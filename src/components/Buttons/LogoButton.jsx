import { Link } from "react-router-dom";

function LogoButton() {
  return (
    <div className="easy-click">
      <Link to="/" className="easy-click-button">
        <img src="./CG1-64.png" alt="C inside G logo." />
      </Link>
    </div>
  );
}

export default LogoButton;
