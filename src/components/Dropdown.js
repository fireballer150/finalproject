import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import {FaTimes} from 'react-icons/fa';
import { Button } from './Button';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 35%;
    height: 70%;
    background: darkorchid;
    border-radius: 10px;
    display: grid;
    align-items: center;
    top:60px;
    right: 0;
    transition: 0.3s ease-in-out;
    /* border: blue; */
    /* opacity: 1;
    top:0; */
    opacity: ${({HamIsOpen})=>(HamIsOpen ? '0.8':'0')};
    right: ${({HamIsOpen})=>(HamIsOpen ? '0': '-100%')};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    /* border: solid green; */
`;
const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;
const DropdownWrapper = styled.div`
    /* border: solid yellow; */
`;
const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;
    margin-top: 40px;
    margin-bottom: 0.2rem;
    /* border: solid black; */

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 60px);
    }
`;
const DropdownLink = styled(Link)`
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2 ease-in-out;
    /* border: solid red; */


    &:hover{
        color: #000d1a;
    }
`;
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Dropdown = ({HamIsOpen,toggle}) => {
  return (
    <DropdownContainer HamIsOpen={HamIsOpen}>
      <Icon onClick={toggle}>
          <CloseIcon />
      </Icon>
      <DropdownWrapper>
          <DropdownMenu>
              {menuData.map((item,index)=>(
                  <DropdownLink to={item.link} key={index}>
                      {item.title}
                  </DropdownLink>
              ))}
          </DropdownMenu>
          <BtnWrap>
              <Button primary='false' round='true' big='true' to='/mypage/myinfo'>
                  Mypage
              </Button>
          </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
}

export default Dropdown;
