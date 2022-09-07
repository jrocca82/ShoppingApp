import { Link } from "react-router-dom";
import { ProductInstance } from "../models/product";
import "./styles/NavBar.css";

type NavBarProps = {
    isLoggedIn: boolean;
    itemsInCart: ProductInstance[];
};

const NavBar = ({ isLoggedIn, itemsInCart }: NavBarProps) => {
    return (
    <div className="NavigationBar">
        <Link to="/home">Home</Link>
        <Link to="/category/mens">Mens</Link>
        <Link to="/category/womens">Womens</Link>
        {isLoggedIn ? (
            <>
                <Link to="/cart">My Cart {`(${itemsInCart})`}</Link>
                <Link to="/orders">Orders</Link>
            </>
        ) : (
            <Link to="/account">Account</Link>
        )}
    </div>
    )
};

export default NavBar
