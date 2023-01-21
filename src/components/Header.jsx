import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 id="appTitle">
        <Link to="/">RT Movies Interface</Link>
      </h1>
    </div>
  );
};

export default Header;
