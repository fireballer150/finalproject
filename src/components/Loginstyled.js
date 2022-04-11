
import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
export const Container = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  height: 100%;
  margin:0;
  align-items: center;
  /* border: green solid */
`;

export const LoginWrapper = styled.div`
 display: block;
 height: 100vh;
 width: 100vw;
 /* position: absolute; */
 top: auto;
 font-size: 32px;
 /* background-color: black; */
 `;

export const FormWrapper = styled.div`
   /* width: 40vw; */
  /* max-width: 700px; */
  width: 60%;
  margin: 30px auto 100px;
  padding-top: 30px;
  text-align: center;
  border: 1px solid;
  box-shadow: 3px 3px 3px 3px red;
  color: aliceblue;
  background-color: salmon;

   /* border: solid green; */
 `;

export const InputWrap = styled.input`
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
  margin-bottom: 10px;
`;
export const Title = styled.h3`
  margin: 19px auto;
  font-size: 14px;
  font-weight: 700;
  text-align:left;
`;
export const Title2 = styled.h2`
  display: inline-block;
  margin: 19px auto 10px;
  font-size: 25px;
  font-weight: 700;
  text-align:left;
`;
export const RowGroup = styled.div`
  font-family: Dotum, "돋움", Helvetica, sans-serif;
  font-size: 12px;
  min-width: 220px;
  max-width: 50%;
  margin: 0 auto;
`;
export const ClickBtn = styled.button`
  display: flex;
  color: #eee;
  background: #000;
  border: 10px solid #000;
  /* position: absolute; */
  bottom: 20%;
  margin-bottom: 20px;
  text-align: center;
`;

export const BoxWrapper = styled.div`
  display: block;
  margin: 20px auto;
`;
export const ListContainer2 = styled.div`
  max-width: 700px;
  margin: 10px auto 20px;
  padding-top: 10px;
  text-align: center;
`;
export const JoinBtn = styled.button`
  display: block;
  background: #ffffff;
  border: 2px solid red;
  width: 30%;
  height: 51px;
  margin: 0 auto;
  margin-top: 200px;
  margin-bottom: 200px;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    background: #aaa;
    /* text-decoration: underline; */
    
  }
`;