export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';
export const CREATE_ROOM = 'CREATE_ROOM';
export const SHOW_ROOM_LIST = 'SHOW_ROOM_LIST';
export const ROOM_LIST_RESET = 'ROOM_LIST_RESET';
export const ROOM_DETAIL = 'ROOM_DETAIL';


export const createRoom = (payload) => {
  return {
    type: CREATE_ROOM,
    payload,
  };
};

export const showRoomList = (payload) => {
  return {
    type: SHOW_ROOM_LIST,
    payload,
  };
};

export const roomListReset = (payload) => {
  return {
    type: ROOM_LIST_RESET,
    payload,
  };
};

export const roomDetail = (payload) => {
  return {
    type: ROOM_DETAIL,
    payload,
  };
};
