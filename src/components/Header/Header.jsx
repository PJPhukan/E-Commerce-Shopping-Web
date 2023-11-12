
import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"

// import Search from './Search/Search'
// import Cart from '../Cart/Cart'
// import Context from '../../utails/context'
import "./Header.scss";
const Header = () => {
const [scrolled, setScrolled] = useState(false)
    const handleScroll=()=>{
        const offset=window.scrollY
        if (offset>150) {
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }
    useEffect(() => {
      window.addEventListener("scroll",handleScroll)
    }, [])
    
    return (
        <header className={`main-header ${scrolled?"sticky-header":""}`}>
            <div className="header-content">
                <ul className="left">
                    <li>home</li>
                    <li>about</li>
                    <li>categories</li>
                </ul>
                <div className="center">
                    PJSTORE.
                </div>
                <div className="right">
                    <TbSearch />
                    <AiOutlineHeart />
                    <span className="card-icon">
                        <CgShoppingCart />
                        <span>5</span>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
