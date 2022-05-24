import { Link } from "react-router-dom";

function LogoButton() {
  return (
    <div className="easy-click">
      <Link to="/" className="easy-click-button" aria-label="App logo button">
        <img src="./CG1-trans-512.svg" alt="C inside G logo." />
      </Link>
    </div>
  );
}

export default LogoButton;
