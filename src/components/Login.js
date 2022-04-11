import { useState, useRef,useEffect } from 'react';
import { Link, Redirect,useHistory} from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import { loginUser } from '../redux/actions/user_action';
import {JoinBtn, BoxWrapper, ListContainer2, Title2, Container, LoginWrapper, FormWrapper,InputWrap,Title,RowGroup,ClickBtn,GlobalStyle} from './Loginstyled.js';
import { useDispatch, useSelector } from "react-redux";
import SocialLoginGoogle from './SocialLogin/Google.js';

const Login = () => {
    const usernickname = localStorage.getItem("nickname");
    const dispatch = useDispatch();
    const history = useHistory();
    const userInfo = useSelector((state) => state.user_reducer.nickname);
    const [errorMessage, setErrorMessage] = useState("");
    console.log(userInfo)


    const [userInfor, setuserInfor] = useState({
        email: "guest@guest.com",
        password: "12341234",
        nickname:"게스트",
        tokenId:"",
        accessToken:""
      });

      const { email, password, nickname,tokenId } = userInfor;
    
      const handleChange = (e) => {
        let { name, value } = e.target;
        setuserInfor({ ...userInfor, [name]: value });
        // console.log(name,value)
      };
    
      const onSubmitHandler = async (e) => {
        e.preventDefault();
        if(!email || !password){
          setErrorMessage("이메일과 비밀번호를 입력하세요");
        }else{
          let body = {
            email: email,
            password: password,
          };
          console.log("login.js에서 body",body);
          dispatch(loginUser(body))
            .then((res) => {
              // console.log(res);
              if (res.payload.message === 'ok') {
                window.location.href='/main';
                // console.log("$$$$$$$$$$$",res)
                alert("로그인성공!")
              }
            })
            .catch((error) => {
              console.log("login.js에서 로그인요청디스패치 cathch error",error)
              alert("로그인실패")
            });
        }
      };

  return (
    <>
    <GlobalStyle />
        <BoxWrapper>
            <Container>{
              usernickname !== null ?
              <FormWrapper>
                <Title2>
                  {usernickname}님 환영합니다!
                </Title2>
                <Link to="/mypage/myinfo">
                 <JoinBtn onClick={()=>{}}>MYPAGE</JoinBtn>
                </Link>
              </FormWrapper>
              :
                <FormWrapper id="logreg-forms">
                    <form className="form-signin" onSubmit={onSubmitHandler}>
                    <h1
                        className="h3 mb-3 font-weight-normal"
                        style={{ textAlign: "center" }}
                    >
                        {" "}
                        LOGIN
                    </h1>
                    <br />
                  <RowGroup>
                    <Title>이메일</Title>
                    <InputWrap
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        value={email}
                        name="email"
                        onChange={handleChange}
                        required
                        />
                    <Title>비밀번호</Title>
                    <InputWrap
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        required
                    />
                    <div className="alert-box">{errorMessage}</div>
                    <br/>
                    <ClickBtn type="submit">
                        <i className="fas fa-sign-in-alt">Sign in</i>
                    </ClickBtn>
                    <hr/>
                    <br/>
                    <br/>
                    <SocialLoginGoogle />
                    <br/>
                    <br/>
                    <Title2>Don't have an account!</Title2>
                    <br/>
                    <Title2>
                    <Link to="/register">
                        <ClickBtn
                        className="btn btn-primary btn-block"
                        type="button"
                        id="btn-signup"
                        onClick={()=>{}}
                        >
                        Sign up New Account
                        </ClickBtn>
                    <ClickBtn type="submit">
                        <i className="fas fa-sign-in-alt">GUEST모드 이용하기</i>
                    </ClickBtn>
                    </Link>
                    </Title2>
                  </RowGroup>
                    </form>
                    <br />
                </FormWrapper>
              }
            </Container>
        </BoxWrapper>
    </>
  );
}

export default Login;
