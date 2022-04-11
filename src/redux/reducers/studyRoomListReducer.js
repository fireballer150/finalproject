// import { initialList } from './initialState';
// import { SHOW_ROOM_LIST, ROOM_LIST_RESET } from '../actions/actions';

// const studyRoomListReducer = (state = initialList, action) => {
//   switch (action.type) {
//     case SHOW_ROOM_LIST:
//       //   return Object.assign({}, state, {
//       //     room: [...state.room, action.payload],
//       //   });
//       // default:
//       //   return state;
//       let data = action.payload;
//       return [...state, ...data];

//     case ROOM_LIST_RESET:
//       let listResult = [];
//       return listResult;

//     default:
//       return state;
//   }
// };

// export default studyRoomListReducer;

///////////// 리팩토링 시 위에 해제 /////////////////////////////////////////////////////////////

import { initialState } from './initialState';
import { SHOW_ROOM_LIST, ROOM_LIST_RESET } from '../actions/actions';

const studyRoomListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ROOM_LIST:
      //   return Object.assign({}, state, {
      //     room: [...state.room, action.payload],
      //   });
      // default:
      //   return state;
      let data = action.payload;
      return [...state, ...data];

    case ROOM_LIST_RESET:
      let listResult = [];
      return listResult;

    default:
      return state;
  }
};

export default studyRoomListReducer;
