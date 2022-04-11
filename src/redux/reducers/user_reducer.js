import {
  LOGIN_USER,
  REGISTER_USER,
  GOOGLE_USER,
  CHECK_USERLOG,
  LOGOUT_USER,
  SIGNOUT_USER,
} from '../actions/types';

export default function user(
  state = {
    userId: null,
    email: null,
    nickname: null,
    image: null,
    isauth: null,
    accessToken: null,
  },
  action
) {
  switch (action.type) {
    case LOGIN_USER:
      console.log("user_reducer.js에서",action.payload.email)
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("nickname", action.payload.nickname);
      return {
        userId: action.payload.id,
        email: action.payload.email,
        nickname: action.payload.nickname,
        accessToken: action.payload.accessToken,
      };
      break;

    case REGISTER_USER:
      return { ...state };
      break;

    case GOOGLE_USER:
      return {
        ...state,
        userId: action.payload.data.id,
        email: action.payload.data.email,
        nickname: action.payload.data.nickname,
        image: action.payload.data.image,
        isauth: action.payload.data.isauth,
        accessToken: action.payload.accessToken,
      };
      break;


    case CHECK_USERLOG:
      return {
        ...state,
        userId: action.payload.id,
        email: action.payload.email,
        nickname: action.payload.nickname,
        image: action.payload.image,
        isauth: action.payload.isauth,
        accessToken: action.payload.accessToken,
        log: action.payload.log,
      }

    case LOGOUT_USER:
      return {
        userId: null,
        email: null,
        nickname: null,
        image: null,
        isauth: null,
        accessToken: null,
      };
      break;

    case SIGNOUT_USER:
      return {
        userId: null,
        email: null,
        nickname: null,
        image: null,
        isauth: null,
        accessToken: null,
      };
      break;

    default:
      return state;
  }
}
