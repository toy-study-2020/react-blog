import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MENU } from '../lib/constants';
import { HeaderStyle, NavStyle } from '../styles/headerStyle';

const Header = ({isLogin, logout}) => {
  const [nav, setNav] = useState(false);
  const {IS_LOGIN, IS_LOGOUT} = MENU;
  const routes = isLogin ? IS_LOGIN : IS_LOGOUT;
  const handlerNav = _ => setNav(!nav);
  return (
    <HeaderStyle>
      <button
        type="button"
        aria-expanded={nav}
        onClick={handlerNav}>
        <span>메뉴</span>
      </button>
      <NavStyle>
        <ul>
          {routes.map(menu =>
            <li key={menu.key}>
              <Link
                to={menu.link}
                onClick={
                  menu.name === 'LOGOUT'
                    ? _ => {
                      logout();
                      handlerNav();
                    }
                    : handlerNav}>
                {menu.name}
              </Link>
            </li>
          )}
        </ul>
      </NavStyle>
    </HeaderStyle>
  );
};

export default Header;
