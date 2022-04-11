import {
  LOGIN_USER,
  REGISTER_USER,
  GOOGLE_USER,
  CHECK_USERLOG,
  LOGOUT_USER,
  SIGNOUT_USER,
} from './types';
import axios from 'axios';
axios.defaults.withCredentials = true;

function loginUser(dataToSubmit) {
  console.log("user_action.js에서 loginUser함수에서 dataToSubmi",dataToSubmit);
  const request = axios
    .post(`${process.env.REACT_APP_SERVER}:8080/user/signin`, dataToSubmit)
    .then((response) => {
      return response.data;
    })
    .catch((e) => console.log("user_action.js에서 loginUser함수에서 서버에서온 error",e));
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

function registerUser(dataToSubmit) {
  const request = axios
    .post(`${process.env.REACT_APP_SERVER}:8080/user/signup`, dataToSubmit)
    .then((response) => {
      if(response.data === "회원가입 성공"){
        alert("회원가입 성공!")
      }else{
        alert(response.data)
      }
      return response.data;
    });
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

async function googleUser(dataToSubmit,tokenId) {
  const { email, imageUrl, name } = dataToSubmit;
  const id_token = tokenId;
  console.log("user_actions.js파일에서 googleUser함수의 파라미터",dataToSubmit);

  const request = await axios
    .post(`${process.env.REACT_APP_SERVER}:8080/auth/auth`, {
      id_token
    })
    .then((response) => {
      console.log(response)
      return response.data;
    })
    .catch((e) => console.log(e));
  return {
    type: GOOGLE_USER,
    payload: request,
  };
}



async function checkUserLog(dataTosubmit) {
  const request = await axios
    .get(`${process.env.REACT_APP_SERVER}/user/${dataTosubmit}`)
    .then((res) => {
      // console.log('받아오는 로그', res.data.data)
      return res.data.data
    })
    .catch((e) => console.log(e));

  return {
    type: CHECK_USERLOG,
    payload: request,
  };
}

async function logoutUser(dataToSubmit) {
  const request = await axios
    .post(`${process.env.REACT_APP_SERVER}/user/logout`, dataToSubmit)
    .then((response) => {
      return response.data;
    })
    .catch((e) => console.log(e));

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

async function signoutUser(userId) {
  const request = await axios
    .delete(`${process.env.REACT_APP_SERVER}/user/signout/${userId}`)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => console.log(e));

  return {
    type: SIGNOUT_USER,
    payload: request,
  };
}

export {
  loginUser,
  registerUser,
  googleUser,
  checkUserLog,
  logoutUser,
  signoutUser,
};
