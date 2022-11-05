import PAGENAME from "constants/pageName";
import { useLocation } from "react-router-dom";

const HeaderNav = () => {
  const { pathname } = useLocation();

  return <span>{PAGENAME[pathname]}</span>;
};

export default HeaderNav;
