import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <ul>
        <Link to="/"> <li>home page</li></Link>
         <Link to="/shop"> <li>go to shopping page</li></Link>
         <a href="/">home page with tag a </a>
      </ul>
    </div>
  );
}
