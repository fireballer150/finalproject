import styled, { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
const JoinBtn = styled.button`
  display: block;
  background: #ffffff;
  border: 2px solid red;
  width: 100%;
  height: 51px;
  margin: 19px 0 8px;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    background: #aaa;
    /* text-decoration: underline; */
    
  }
`;
const ListContainer = styled.div`
  max-width: 700px;
  margin: 10px auto 100px;
  padding-top: 10px;
  text-align: center;
  border: 1px solid;
  box-shadow: 3px 3px 3px 3px red;
  color: aliceblue;
  background-color: salmon;
   /* border: solid green; */
`;
const RowGroup = styled.div`
  font-family: Dotum, "돋움", Helvetica, sans-serif;
  font-size: 12px;
  min-width: 220px;
  max-width: 30%;
  margin: 10px auto;
  /* border: red solid; */
`;

const Title = styled.h3`
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
  text-align:left;
`;

const Box = styled.input`
  display: block;
  position: relative;
  width: 100%;
  height: 51px;
  border: solid 1px red;
  border-radius: 5px;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
  /* z-index:1; */
  background-color: blanchedalmond;
`;
const Title2 = styled.h3`
  display: inline-block;
  margin: 19px 0 8px;
  font-size: 20px;
  font-weight: 700;
  text-align:left;
`;
const Box1 = styled.button`
  text-align: center;
  display: inline-block;
  font-size: 15px;
  font-weight: 400;
  position: relative;
  width: 20%;
  height: 60px;
  border: solid 3px red;
  padding: 10px 10px 10px 10px;
  box-sizing: border-box;
  border-radius: 10px;
  color: aliceblue;
  background-color: black;
  box-shadow: 3px 3px 3px 3px #e2a3ae;
  margin-right: 1rem;
  margin-left: 1rem;
  text-decoration: none;
  overflow: auto;

  &:hover {
    cursor: pointer;
    background: white;
    color: black;
    transform: translateY(-3px);
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
    background-color: white;
    color: black;
  }
  & + & {
    margin-top: 20px;
    text-decoration: none;
  }

`;
const BoxWrapper = styled.div`
  /* margin: 50px 50px 0px 700px;
  padding: .5rem; */
  display: block;
  margin: 0 auto;
`;
const ListContainer2 = styled.div`
  max-width: 700px;
  margin: 10px auto 20px;
  padding-top: 10px;
  text-align: center;
`;
const Title3 = styled.h2`
  display: inline-block;
  margin: 10px auto;
  font-size: 20px;
  font-weight: 700;
  text-align:left;
`;
const Myinfolist = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const usernickname = localStorage.getItem("nickname");
  // const userSession = sessionStorage.getItem("persist:root");
  // const userSessionInfo = JSON.parse(userSession.user_reducer)
  // console.log("$$$$$$$$$$$$",userSessionInfo);
  return (
    <>
    <GlobalStyle />
    <ListContainer2>
    <BoxWrapper>
          <Link to="/mypage/myinfo">
          <Box1>✍️회원정보</Box1>
          </Link>
          <Link to="/mypage/mylist">
          <Box1>📋내역 관리</Box1>
          </Link>
    </BoxWrapper>
    </ListContainer2>
      <ListContainer>
        <div>
            <RowGroup>
            <Title3>{usernickname}님</Title3>
            <br/>
            <Title3>획득한👍6개!!</Title3>
            <Title>이메일</Title>
                <Box
                    type="email"
                    id="email"
                    title="email"
                    maxlength="30"
                    class="int"
                    placeholder="이메일"
                    onChange={(e)=>{console.log(e.target.value)}}
                ></Box>
                <Title>비밀번호</Title>
                <Box
                    type="password"
                    id="password"
                    title="password"
                    maxlength="20"
                    class="int"
                    placeholder="비밀번호"
                    onChange={(e)=>{console.log("비밀번호",e.target.value)}}
                ></Box>
                <Title>비밀번호확인</Title>
                <Box
                    type="password"
                    id="passwordConfirm"
                    title="passwordConfirm"
                    maxlength="20"
                    class="int"
                    placeholder="비밀번호확인"
                    onChange={(e)=>{console.log("비밀번호확인",e.target.value)}}
                ></Box>
                <Title>닉네임</Title>
                <Box
                    type="text"
                    id="text"
                    title="nickname"
                    maxlength="30"
                    class="int"
                    placeholder={usernickname||"닉네임"}
                    onChange={(e)=>{console.log(e.target.value)}}
                ></Box>
                <div className="alert-box">{errorMessage}</div>
                <Link to="/mypage/myinfo">
                <JoinBtn onClick={()=>{}}>수정하기</JoinBtn>
                <JoinBtn onClick={()=>{}}>회원탈퇴</JoinBtn>
                </Link>
            </RowGroup>
        </div>
      </ListContainer>
    </>
  );
};
export default Myinfolist;
