import { Link } from 'react-router-dom';
import { ROUTER } from '../libs/constants';

const Header = _ => {
  return (
    <header>
      <button
        type="button"
        aria-expanded="false">
        <span>메뉴</span>
      </button>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          {ROUTER.member.map(r => <li><Link to={`/member/${r}`}>{r.toUpperCase()}</Link></li>)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
