import { Link } from "react-router-dom";
import "./styles/NavBar.css";

type NavBarProps = {
    isLoggedIn: boolean;
    counter: number;
};

const NavBar = ({ isLoggedIn, counter }: NavBarProps) => {
    return (
    <div className="NavigationBar">
        <Link to="/">Home</Link>
        <Link to="/category/mens">Mens</Link>
        <Link to="/category/womens">Womens</Link>
        {isLoggedIn ? (
            <>
                <Link to="/cart">My Cart {`(${counter})`}</Link>
                <Link to="/orders">Orders</Link>
            </>
        ) : (
            <Link to="/account">Account</Link>
        )}
    </div>
    )
};

export default NavBar
