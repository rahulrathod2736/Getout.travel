import { Icon } from "../icon/icon";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import "./navBar.css";

export const NavBar = ({ isLoading = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const changeMenuState = () => {
    if (!isLoading) {
      setIsMenuOpen((val) => !val);
    }
  };

  return (
    <div>
      <div className="header flex flex-row justify-between items-center">
        <div className="hamburger" onClick={changeMenuState} data-testid={"hamburger"}>
          <Icon icon={<HiOutlineMenuAlt1 size={26} />} isLoading={isLoading} />
        </div>
        <div className="header-title">Shoppy</div>
        {!isLoading && <div className="menu" data-testid={"drawer-menu"}>
          <span className="menu-item">Home</span>
          <span className="menu-item">Products</span>
          <span className="menu-item">Sales</span>
          <span className="menu-item">Trending</span>
          <span className="menu-item">Profile</span>
        </div>}
        <div className="flex flex-row items-center">
          <Icon
            icon={<BiSearchAlt className="icon" />}
            isLoading={isLoading}
          />
          <Icon
            icon={<RiNotification2Line className="icon" />}
            isLoading={isLoading}
          />
          <span className="relative">
            <Icon icon={<BsHandbag className="icon" />} isLoading={isLoading} />
            {!isLoading && (
              <span className="badge flex items-center justify-center">2</span>
            )}
          </span>
        </div>
      </div>
      <div>
        <nav
          className={`flex flex-col mb-menu ${isMenuOpen ? "menu-show" : ""}`}
        >
          <span>Profile</span>
          <span>Order History</span>
          <span>Feedback</span>
          <span>Customer Support</span>
          <span>Logout</span>
        </nav>
      </div>
    </div>
  );
};
