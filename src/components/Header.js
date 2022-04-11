import styled from 'styled-components';
import { Link } from 'react-router-dom';

import person from '../icons/Person-icon.png';
import write from '../icons/Write-icon.png';
import login from '../icons/Login-icon.png';
import logo2 from '../icons/logo_transparent (1).png';
import Bars from '../images/bars.svg';

const HeaderContainer = styled.div`
  position: sticky;
  margin: auto;
  top: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 10px 10px;
  z-index: 1;

  /* .logo {
    max-width: 1200px;
    margin: auto;
    border: 1px solid black;
  } */

  .logo-image {
    width: 180px;
    height: 35px;
  }

  @media screen and (max-width: 750px) {
    justify-content: center;
    .logo-image {
      margin-left: 0px;
    }
  }
`;

const MenuContainer = styled.div`
  display: flex;
  > div a img {
    padding: 10px 10px;
    width: 45px;

    :hover {
      background-color: #faf2f2;
      border-radius: 10px;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (max-width: 750px) {
    > div a img {
      display: none;
    }
  }
`;
const MenuBars = styled.i`
  display: none;
  /* border:solid orange; */

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    /* border:solid orange; */
  }
`;

const Header = ({ toggle }) => {
  const usernickname = localStorage.getItem("nickname");

  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <a href="/main">
            <img className="logo-image" src={logo2} />
          </a>
        </div>
        <MenuContainer>
          <div className="write-icon">
            <a href="/createstudyroom">
              <img className="write-image" src={write} />
            </a>
          </div>
          <div className="person-icon">
            <a href="/mypage/myinfo">
              <img src={person} />
            </a>
          </div>
          <div className="login-icon">
             <a href="/login">{ usernickname || <img src={login} />}</a>
          </div>
          <MenuBars onClick={toggle} />
        </MenuContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
