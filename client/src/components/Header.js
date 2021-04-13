import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ROUTER } from '../lib/constants';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: block;
  position: relative;

  button {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: #f0f0f0;
    padding: 10px;
    box-sizing: border-box;
    text-indent: -9999px;

    &[aria-expanded="true"] {
      span:before {
        transform: rotate(45deg);
        top: 24px
      }

      span:after {
        transform: rotate(-45deg);
        bottom: 24px;
      }

      + nav {
        display: flex;
      }
    }

    span {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    span:before,
    span:after {
      content: "";
      position: absolute;
      left: 50%;
      width: 30px;
      height: 2px;
      margin-left: -15px;
      background-color: #000;
      transition: transform .3s;
    }

    span:before {
      top: 14px;
    }

    span:after {
      bottom: 14px;
    }
  }

  nav {
    display: none;
  }
`;
const Header = _ => {
  const [nav, setNav] = useState(false);
  const handlerNav = ({state}) => {
    if (state === 'close') {
      return setNav(false);
    }
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
          {ROUTER.member.map(r =>
            <li key={r}>
              <Link
                to={r === 'home' ? '/' : `/member/${r}`}
                onClick={_ => {
                  handlerNav({state: 'close'})
                }}>
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
