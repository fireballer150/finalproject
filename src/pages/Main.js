import { useState } from 'react';
import axios from 'axios';
// import { roomListReset } from '../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import StudyRoomList from '../components/MainComponents/StudyRoomList';

const Main = () => {
  const [tagData, setTagData] = useState('');

  const state = useSelector((state) => state.studyRoomListReducer);

  const [filterDate, setFilterData] = useState(state);

  // console.log(state);

  // const dispatch = useDispatch();

  // 카테고리 별 페이지 요청

  const handleFilterCategory = (event) => {
    console.log(event.target.getAttribute('data-value'));
    if (event.target.getAttribute('data-value') === '전체') {
      setTagData('');
    } else {
      setTagData(event.target.getAttribute('data-value'));
    }
  };

  return (
    <div>
      <StudyRoomList />
    </div>
  );
};

export default Main;
