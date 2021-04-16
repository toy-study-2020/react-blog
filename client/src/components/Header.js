import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ROUTER } from '../lib/constants';
import { HeaderStyle } from '../styles/headerStyle';

const Header = ({isLogin, logout}) => {
const Header = _ => {
  const [nav, setNav] = useState(false);
  const handlerNav = _ => setNav(!nav);
  return (
    <HeaderStyle>
      <button
        type="button"
        aria-expanded={nav}
        onClick={handlerNav}>
        <span>메뉴</span>
      </button>
      <nav>
        <ul>
          {ROUTER.member.map(r =>
            <li key={r}>
              <Link
                to={r === 'home' ? '/' : `/member/${r}`}
                onClick={handlerNav}>
                {r.toUpperCase()}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
