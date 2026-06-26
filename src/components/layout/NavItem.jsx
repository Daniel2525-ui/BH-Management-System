import { NavLink } from "react-router-dom";

function NavItem({ icon, label, path }) {
  return (
    <NavLink
      to={path}
      className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer"
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}

export default NavItem;
