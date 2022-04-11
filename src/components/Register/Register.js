import { useState, useRef,useEffect } from 'react';
import { Link, Redirect,useHistory} from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import { registerUser } from '../../redux/actions/user_action';
import {Container, LoginWrapper, FormWrapper,InputWrap,Title,RowGroup,ClickBtn} from './RegisterStyled.js';
import { useDispatch, useSelector } from "react-redux";
import { nickValidation,emailValidation,pwValidation } from '../../utils/validation';

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState("");


    const [userInfor, setuserInfor] = useState({
        email: "guest@guest.com",
        password: "12341234",
        passwordConfirm: "12341234",
        nickname:"게스트",
        tokenId:"",
        accessToken:""
      });

      const { email, password,passwordConfirm, nickname,tokenId } = userInfor;
    
      const handleChange = (e) => {
        let { name, value } = e.target;
        setuserInfor({ ...userInfor, [name]: value });
        // console.log(name,value)
        if(!emailValidation(email)){setErrorMessage("잘못된 형식의 이메일 입니다")}
        if(!nickValidation(nickname)){setErrorMessage("잘못된 형식의 닉네임 입니다")}
        if(!pwValidation(password)){setErrorMessage("잘못된 형식의 비밀번호 입니다")}

      };
    
      const onSubmitHandler = async (e) => {
        e.preventDefault();
        let body = {
          email: email,
          password: password,
          nickname: nickname,
        };
        console.log("Register.js에서 body",body);
        dispatch(registerUser(body))
          .then((res) => {
            // console.log(res);
            if (res.payload === '회원가입 성공') {
              history.push('/login');
              // localStorage.setItem("accessToken", res.data.data.accessToken);
              console.log("register.js에서",res)
            }
          })
          .catch((error) => {
            console.log("register.js에서 로그인요청디스패치 cathch error",error)
            alert("회원가입실패")
          });
      };

  return (
    <>
        <LoginWrapper>
            <Container>
                <FormWrapper id="logreg-forms">
                    <form className="form-signin" onSubmit={onSubmitHandler}>
                    <h1
                        className="h3 mb-3 font-weight-normal"
                        style={{ textAlign: "center" }}
                    >
                        {" "}
                        SIGNUP
                    </h1>
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
                     <Title>닉네임</Title>
                    <InputWrap
                        type="nickname"
                        id="inputNickname"
                        className="form-control"
                        placeholder="nickname"
                        value={nickname}
                        name="nickname"
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
                    <Title>비밀번호 확인</Title>
                    <InputWrap
                        type="password"
                        id="inputPasswordConfirm"
                        className="form-control"
                        placeholder="PasswordConfirm"
                        value={passwordConfirm}
                        name="passwordConfirm"
                        onChange={handleChange}
                        required
                    />
                    <div className="alert-box">{errorMessage}</div>
                    <br />
                    <ClickBtn className="btn btn-secondary btn-block" type="submit">
                    회원가입신청
                    </ClickBtn>
                    <ClickBtn className="btn btn-secondary btn-block" type="submit">
                    GUEST 모드
                    </ClickBtn>
                    </RowGroup>
                    </form>
                    <br />
                </FormWrapper>
            </Container>
        </LoginWrapper>
    </>
  );
}

export default Register;
