import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header>
        <a href="/">Home | </a><Link to="/about">About | </Link><Link to="/pants/new">New |</Link><Link to="/pants">Products |</Link><a href=""></a>
      </header>
    </div>
  );
}
