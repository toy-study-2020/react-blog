import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
  opacity: .9;

  button {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: #f0f0f0;
    padding: 10px;
    box-sizing: border-box;
    text-indent: -9999px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5);
    cursor: pointer;
    transform: translateX(0);
    transition: transform .3s;

    &[aria-expanded="true"] {
      position: absolute;
      transform: translateX(300px);

      span:before {
        transform: rotate(45deg);
        top: 24px
      }

      span:after {
        transform: rotate(-45deg);
        bottom: 24px;
      }

      span:before,
      span:after {
        transition: transform .3s;
      }

      + nav {
        transform: translateX(0);
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
    }

    span:before {
      top: 14px;
    }

    span:after {
      bottom: 14px;
    }
  }
`;

export const NavStyle = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  transform: translateX(-300px);
  transition: transform .3s;
  padding: 20px 0 20px 20px;
  box-sizing: border-box;

  ul {
    flex: 1;
    padding: 20px;
    background-color: #1d1d1d;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5);
    border-radius: 10px;
  }

  li {
    border-top: solid 1px #4e4e4e;

    &:first-child {
      border-top: none;
    }
  }

  a {
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 20px;
    font-size: 20px;
  }
`;