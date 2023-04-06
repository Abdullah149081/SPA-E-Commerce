import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => isActive && "text-2xl font-bold text-error"}>
      {children}
    </NavLink>
  );
};

export default ActiveLink;
