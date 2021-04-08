import { Link } from 'react-router-dom';
import { ROUTER } from '../libs/constants';
import styled from 'styled-components';
import { useState } from 'react';

const HeaderStyle = styled.header `
  display: block;
  position: relative;
  
  button {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: #f0f0f0;
    text-indent: -9999px;
    
    &[aria-expanded="true"] {
      + nav {
        display: flex;;
      }
    }
    
    span:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  
  nav {
    display: none;
  }
`;
const Header = _ => {
  const [nav, setNav] = useState(false);
  const handlerNav = _ => {
    setNav(!nav);
  };
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
          <li><Link to="/">HOME</Link></li>
          {ROUTER.member.map(r => <li key={r}><Link to={`/member/${r}`}>{r.toUpperCase()}</Link></li>)}
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
