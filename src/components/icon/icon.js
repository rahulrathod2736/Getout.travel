import { BiHome } from "react-icons/bi";
import "./icon.css";

export const Icon = ({
  icon,
  title,
  onClick,
  isLoading = false,
}) => {
  return (
    <>
      <span
        className="flex flex-col items-center justify-center icon-container cursor-pointer"
        onClick={onClick}
        data-testid={"icon-container"}
      >
        {isLoading ? (
          <div
            className="skeleton"
            data-testid={"icon-skeleton"}
          />
        ) : (
          <>
            {icon}
            {title && <span className="icon-title" data-testid={"icon-title"}>{title}</span>}
          </>
        )}
      </span>
    </>
  );
};
