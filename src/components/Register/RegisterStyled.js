
import styled from 'styled-components';
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
   width: 55vw;
   height: 70vh;
   padding-top: 2%;
   padding-bottom: 5%;
   position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
   background: salmon;
   border-radius: 16px;
   box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
 
   margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
 
   margin-top: 96px;
   margin-bottom: 42px;
   display: flex;
   flex-direction: column;
   /* border: solid green; */
 `;

export const InputWrap = styled.input`
  display: block;
  position: relative;
  width: 90%;
  /* height: 51px; */
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  /* margin: auto; */
  margin-bottom: 30px;
`;
export const Title = styled.h3`
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
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
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
`;