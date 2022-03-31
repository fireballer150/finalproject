import { useState, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { useGoogleLogin } from 'react-google-login'
import loginicon from '../../icons/Login-icon.png';

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
`;

const Box = styled.input`
  display: block;
  position: relative;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
`;

const LoginBtn = styled.button`
  display: block;
  background: #000;
  color: #eee;
  width: 100%;
  height: 51px;
  margin: 19px 0 8px;
  text-decoration: none;
  &:hover {
    background: #ffffff;
    text-decoration: underline;
    color: #000;
  }
`;

const JoinBtn = styled.button`
  display: block;
  background: #ffffff;
  border: 1px solid #000;
  width: 100%;
  height: 51px;
  margin: 19px 0 8px;
  text-decoration: none;
  &:hover {
    background: #aaa;
    text-decoration: underline;
  }
`;

const ModalContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  height: 100%;
  margin:0;
  align-items: center;
  /* border: green solid */
`;

const ModalBackdrop = styled.div`
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    /* border: blue solid */
`;

export const ModalBtn = styled.button`
  text-decoration: none;
  /* position: absolute; */
  /* align-items: center; */
  /* box-sizing: border-box; */
  border: none;
  margin: 0;
  padding: 0;
  border-radius: 15px;
  cursor: grab;
  height:100%;
  width:100%;
  /* overflow:hidden; */
  line-height:10px;
  vertical-align:top;
  /* border: violet solid; */
  background-color: transparent;
  /* background-size: cover; */
`;

const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
// TODO : Modal창 CSS를 구현합니다.
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border: none;
border-radius: 10px;
color: black;
width: 1200px;
height: 600px; 
position: absolute;
left: 50%;
top:50%;
transform: translate(-50%, -50%);
z-index:100;
border: grey 1px solid;
box-shadow: 3px 3px 3px 3px gray;
`;
const loginicon1 = styled.img`
  src : loginicon;
  position: absolute;
  width: 100%;
  /* height: 100%; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;




export const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignup,setIsSignup] = useState(true);
  const [isLogin,setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("좋은출발");
  const messagehandler = (message)=>{
    console.log("message",message);
    setErrorMessage(message);
  };
  const outSection = useRef();
  // const handleLogin = () => {setIsLogin(!isLogin);setIsOpen(!isOpen);};
  const handleSignup = () => {setIsSignup(!isSignup)};
  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen)
  };
  const { signIn, loaded } = useGoogleLogin({
  });

const responseGoogle = (response) => {
  setIsOpen(!isOpen);
  console.log("response",response);
}
const [loginInfo, setLoginInfo] = useState({
  email: "",
  password: "",
});



        const handleInputValue = (key) => (e) => {
          setLoginInfo({ ...loginInfo, [key]: e.target.value });
          // console.log("lofinInfo",loginInfo)
        };
        const handleLogin = () => {
          console.log("res0")
          const { email, password } = loginInfo;
          if (!email || !password) {
            messagehandler("이메일과 비밀번호를 입력하세요");
            console.log("이메일과 비밀번호를 입력하세요")
          } else {
            console.log("서버에 이제요청 보낼겁니다")
            axios
              .post(`${process.env.REACT_APP_API_URL}/users/signin`, {
                email,
                password,
              })
              .then((res) => {
                // console.log("res1",res)
                if (res.data.message !== "ok") {
                  messagehandler("계정 정보가 일치하지 않습니다.");
                  return false;
                } else {
                  // setUserAccessToken(res.data.data.accessToken);
                  localStorage.setItem("accessToken", res.data.data.accessToken);
                  axios
                    .post(
                      `${process.env.REACT_APP_API_URL}/users/auth`,
                      {
                        accessToken: res.data.data.accessToken,
                      },
                      {
                        withCredentials: true,
                      }
                    )
                    .then((res) => {
                      // console.log("res2",res)
                      if (res.data.message !== "ok") {
                        messagehandler(
                          "access token이 만료되어 불러올 수 없습니다."
                        );
                        return false;
                      } else {
                        // setUserInfo(res.data.data.userInfo); 
                        setIsLogin(!isLogin);setIsOpen(!isOpen);
                      }
                    });
                }
                setErrorMessage("");
                // handleResponseSuccess();
              });
          }
        };
            

                const [emailCheckText, setEmailCheckText] = useState("");
                const [pwdCheckText, setPwdCheckText] = useState("");
                const [pwdCheckConfirmText, setPwdCheckConfirmText] = useState("");
                const [signInfo, setSignInfo] = useState({
                  email: "",
                  password: "",
                  nickname: "",
                  mobile: "010-1234-1234",
                  level: "고급자",
                  team: "kt wiz",
                });
                
                const handleSInputValue = (key) => (e) => {
                  // console.log("signInfo",e.target.value,key)
                  setSignInfo({ ...signInfo, [key]: e.target.value });
                  console.log("signInfo",signInfo)
                };
                
                const checkEmail = (e) => {
                  let email = e.target.value;
                  let expect_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
              
                  if (expect_email.test(email) === false) {
                    setEmailCheckText("이메일 형식이 올바르지 않습니다.");
                    return false;
                  }
                  setEmailCheckText("올바른 형식입니다.");
                  setSignInfo({ ...signInfo, email: e.target.value });
                };
              
                const checkPassword = (e) => {
                  let pwd = e.target.value;
              
                  if (pwd.length < 8 || pwd.length > 12) {
                    setPwdCheckText("비밀번호를 8~12자 사이로 입력하세요.");
                    return false;
                  } else {
                    setPwdCheckText("사용이 가능합니다.");
                  }
                  setSignInfo({ ...signInfo, password: pwd });
                };
              
                const isSamePwd = (e) => {
                  if (signInfo.password !== "") {
                    if (signInfo.password !== e.target.value) {
                      setPwdCheckConfirmText("비밀번호가 서로 일치하지 않습니다.");
                      return false;
                    }
                    setPwdCheckConfirmText("서로 일치합니다.");
                  }
                };
                const post_ok = () => {
                  if (
                    !signInfo.email ||
                    !signInfo.password ||
                    !signInfo.nickname
                    ) {
                      return false;
                    }
                    return true;
                  };
                  const warning = () => {
                    alert("입력 정보를 다시 확인하세요.");
                  };
                  const signInfoPost = () => {
                    axios
                    .post(`${process.env.REACT_APP_API_URL}/users/signup`, signInfo,{
                      withCredentials: true,
                    })
                    .then((res) => {
                      console.log("res",res);
                    })
                    .catch(error=>console.log("ERROR",error));
                };
              
                
  return (
    <>
    <ModalBtn 
    // TODO : 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다. 
    onClick={()=>{openModalHandler()}}
    >
    {<img src={loginicon} width="70%" align="top"/>}
    </ModalBtn>
    <ModalContainer>
    { isOpen === true ? 
      <ModalBackdrop 
            ref={outSection}
            onClick={e=>{if(outSection.current === e.target){openModalHandler()}}} > 
            <ModalView onClick={(e) => e.stopPropagation()}>
            <RowGroup>
                <Title>이메일</Title>
                <Box
                    type="email"
                    id="email"
                    title="email"
                    maxlength="30"
                    className="int"
                    placeholder="이메일"
                    onChange={handleInputValue("email")}
                ></Box>
                <Title>비밀번호</Title>
                <Box
                    type="password"
                    id="password"
                    title="password"
                    maxlength="20"
                    className="int"
                    placeholder="비밀번호"
                    onChange={handleInputValue("password")}
                ></Box>

                <div className="alert-box">{errorMessage}</div>

                    <LoginBtn onClick={handleLogin}>LOGIN</LoginBtn>
                <JoinBtn onClick={handleSignup}>회원가입</JoinBtn>
                <GoogleLogin
                clientId="133857767007-bbfmnq7mf9t27c3ugkm10ukf0l5cgqdb.apps.googleusercontent.com"
                buttonText="구글로 LOGIN 시작하기"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </RowGroup>
            {isSignup === true?null:<RowGroup>
            <Title>이메일</Title>
                <Box
                    type="email"
                    id="email"
                    title="email"
                    maxlength="30"
                    className="int"
                    placeholder="이메일"
                    onChange={checkEmail}
                ></Box>
                <div>{emailCheckText}</div>
                <Title>비밀번호</Title>
                <Box
                    type="password"
                    id="password"
                    title="password"
                    maxlength="20"
                    className="int"
                    placeholder="비밀번호"
                    onChange={checkPassword}
                ></Box>
                <div>{pwdCheckText}</div>
                <Title>비밀번호확인</Title>
                <Box
                    type="password"
                    id="password_confirm"
                    title="password_confirm"
                    maxlength="20"
                    className="int"
                    placeholder="비밀번호확인"
                    onChange={isSamePwd}
                ></Box>
                <div>{pwdCheckConfirmText}</div>
                <Title>닉네임</Title>
                <Box
                    type="text"
                    id="text"
                    title="nickname"
                    maxlength="30"
                    className="int"
                    placeholder="닉네임"
                    onChange={handleSInputValue("nickname")}
                ></Box>
                {post_ok() ?
                <JoinBtn onClick={signInfoPost}>회원가입</JoinBtn>
                  :<JoinBtn onClick={warning}>회원가입</JoinBtn>}
            </RowGroup>}
            </ModalView> 
            </ModalBackdrop>
        :null }
      </ModalContainer>
    </>
  );
};