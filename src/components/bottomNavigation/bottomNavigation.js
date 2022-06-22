import { BiCategory, BiSearchAlt } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { MdManageAccounts } from "react-icons/md";
import { Icon } from "../icon/icon";
import "./bottomNavigation.css";

export const BottomNavigation = ({ isLoading }) => {
  return (
    <div className="flex bg-white bottom-navigation items-center">
      <div className="mx-auto">
        <Icon icon={<GrHomeRounded className="icon" />} isLoading={isLoading} />
      </div>
      <div className="mx-auto">
        <Icon icon={<BiSearchAlt className="icon" />} isLoading={isLoading} />
      </div>
      <div className="mx-auto">
        <Icon icon={<BiCategory className="icon" />} isLoading={isLoading} />
      </div>
      <div className="mx-auto">
        <Icon icon={<BsCartCheck className="icon" />} isLoading={isLoading} />
      </div>
      <div className="mx-auto">
        <Icon
          icon={<MdManageAccounts className="icon" />}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
