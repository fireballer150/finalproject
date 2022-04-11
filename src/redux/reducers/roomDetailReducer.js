// import { initiaRoomDetail } from './initialState';
// import { ROOM_DETAIL } from '../actions/actions';

// const roomDetailReducer = (state = initiaRoomDetail, action) => {
//   switch (action.type) {
//     case ROOM_DETAIL:
//       let room = action.payload;
//       return Object.assign({}, state, {
//         room: {
//           id: room.id,
//           tag: room.tag,
//           title: room.title,
//           channel: room.channel,
//           link: room.link,
//           start_date: room.start_date,
//           end_date: room.end_date,
//           question: room.question,
//           FCFS: room.FCFS,
//           user_id: room.user_id,
//           number_of_lectures: room.number_of_lectures,
//           number_of_persons: room.number_of_persons,
//           is_full: room.is_full,
//           comment: room.comment,
//           image: room.image,
//         },
//       });

//     default:
//       return state;
//   }
// };

// export default roomDetailReducer;

/////////////////////////////////////////////////////////////////////////////리팩토링///

import { initialState } from './initialState';
import { ROOM_DETAIL } from '../actions/actions';

const roomDetailReducer = (state = initialState, action) => {
  // console.log('state', state);
  switch (action.type) {
    case ROOM_DETAIL:

    default:
      return state;
  }
};

export default roomDetailReducer;

// import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
// import { initialState } from "./initialState";

// const itemReducer = (state = initialState, action) => {

//   switch (action.type) {
//     case ADD_TO_CART:
//       return Object.assign({}, state, {
//         cartItems: [...state.cartItems, action.payload]
//       })
//     case REMOVE_FROM_CART:
//       return Object.assign({}, state, {
//         cartItems: state.cartItems.filter(el => el.itemId !== action.payload.itemId)
//       });
//     case SET_QUANTITY:
//       let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
//       return Object.assign({}, state, {
//         cartItems: [...state.cartItems.slice(0, idx), action.payload,
//         ...state.cartItems.slice(idx + 1)]
//       });
//     default:
//       return state;
//   }
// }

// export default itemReducer;
