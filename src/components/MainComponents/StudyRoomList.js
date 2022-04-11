import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// import Rooms from './Room';

import all from '../../icons/All-icon.png';
import economy from '../../icons/Economy-icon.png';
import english from '../../icons/English-icon.png';
import historyicon from '../../icons/History-icon.png';
import it from '../../icons/IT-icon.png';
import science from '../../icons/Science-icon.png';
import exercise from '../../icons/Exercise-icon.png';
import cooking from '../../icons/Cooking-icon.png';
import art from '../../icons/Art-icon.png';
import etc from '../../icons/Etc-icon.png';

import { useDispatch, useSelector } from 'react-redux';
import { initialState } from '../../redux/reducers/initialState';

const TagContainer = styled.div`
  max-width: 1200px;
  border: 2px;
  margin: 120px auto 20px;

  .tag-container-box {
    width: 100%;
  }
  .tag-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    list-style: none;
    padding-left: 0%;
  }
  .tag-box {
    text-align: center;
    cursor: pointer;

    :hover {
      background-color: #faf2f2;
      border-radius: 50px;
      transform: translateY(-3px);
    }
  }
  .tag-Image {
    width: 85px;
    opacity: 1;
  }
  .tag-name {
    text-align: center;
    color: #656873;
  }

  @media screen and (max-width: 750px) {
    margin: 40px auto 20px;

    .tag-Image {
      width: 50px;
    }
    .tag-name {
      font-size: 13px;
    }
  }
`;

const ListContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto 20px;

  @media screen and (max-width: 450px) {
    margin-top: 40px;
  }

  .list-container-box {
    width: 100%;
  }

  .list-section {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0%;
  }

  .list-box {
    margin: auto;
    margin-top: 2%;
    min-width: 386px;
    min-height: 300px;
    text-align: center;
    border: 1px solid #9d9898;

    box-shadow: 2px 2px 2px 2px gray;

    :hover {
      background-color: #faf2f2;
      border-radius: 15px;
      transform: translateY(-3px);
    }

    @media screen and (max-width: 450px) {
      min-width: 60%;
      min-height: 170px;
      font-size: 14px;
    }
    .image {
      width: 386px;
      height: 217px;
    }
  }
`;

const StudyRoomList = ({ handleFilterCategory }) => {
  const initial = initialState;

  let list = initialState;

  const [listData, setListData] = useState(list);

  const filterData = () => {
    let result = initial.filter((el) => el.tag === '외국어');
    setListData(result);
    console.log(result);
  };

  const filterDataHistory = () => {
    let result = initial.filter((el) => el.tag === '역사');
    setListData(result);
    console.log(result);
  };

  const filterDataIT = () => {
    let result = initial.filter((el) => el.tag === 'IT');
    setListData(result);
    console.log(result);
  };

  list = listData;

  console.log(listData);

  const history = useHistory();

  // const roomList = () => {
  //   axios
  //     .get(
  //       'http://ec2-3-38-101-82.ap-northeast-2.compute.amazonaws.com/matches/ullist'
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       dispatch({ type: 'SHOW_ROOM_LIST', payload: res.data });
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(roomList, []);

  // useEffect(() => {
  //   return () => {
  //     dispatch(roomListReset());
  //   };
  // }, []);
  // console.log(list);

  const tagData = ['경제', '과학', '운동', '요리', '문화/예술', '기타'];
  const tagImageData = [economy, science, exercise, cooking, art, etc];

  // let [selectCategory, setSelectCategory] = useState('');
  // const getDataKey = (event) => {
  //   let num = event.target.getAttribute('data-key');
  //   if (num !== selectCategory) {
  //     handleFilterCategory(event);
  //   }
  //   setSelectCategory(num);
  // };

  return (
    <>
      <TagContainer>
        <div className="tag-container-box">
          <ul className="tag-section">
            <li
              className="tag-box"
              data-value="전체"
              onClick={() => setListData(initial)}
            >
              <img className="tag-Image" src={all} />
              <div className="tag-name">전체</div>
            </li>
            <li className="tag-box" data-value="외국어" onClick={filterData}>
              <img className="tag-Image" src={english} />
              <div className="tag-name">외국어</div>
            </li>
            <li
              className="tag-box"
              data-value="역사"
              onClick={filterDataHistory}
            >
              <img className="tag-Image" src={historyicon} />
              <div className="tag-name">역사</div>
            </li>
            <li className="tag-box" data-value="IT" onClick={filterDataIT}>
              <img className="tag-Image" src={it} />
              <div className="tag-name">IT</div>
            </li>
            {tagData.map((tag, idx) => {
              return (
                <li
                  className="tag-box"
                  data-value={tag}
                  key={idx}
                  data-key={idx}
                >
                  <img
                    className="tag-Image"
                    src={tagImageData[idx]}
                    data-value={tag}
                    data-key={idx}
                  />
                  <div className="tag-name" data-value={tag} data-key={idx}>
                    {tag}
                  </div>
                </li>
              );
            })}
            {/* <li>
              <button>전체</button>
            </li>
            <li>
              <button>외국어</button>
            </li>
            <li>
              <button>요리</button>
            </li> */}
          </ul>
        </div>
      </TagContainer>
      <ListContainer>
        <div className="list-container-box">
          <ul className="list-section">
            {/* {tagData.map((tag, idx) => {
              return (
                <li
                  className="list-box"
                  data-value={tag}
                  key={idx}
                  data-key={idx}
                >
                  <a href="/studyroom/1">
                    <img
                      className="list-Image"
                      src={tagImageData[idx]}
                      data-value={tag}
                      data-key={idx}
                    />
                  </a>
                  <div className="list-name" data-value={tag} data-key={idx}>
                    {tag}
                  </div>
                </li>
              );
            })} */}

            {list.map((room, idx) => {
              return (
                <li
                  className="list-box"
                  key={idx}
                  onClick={() => {
                    history.push(
                      room.room_state === '모집 중'
                        ? `/studyroom/${room.id}`
                        : alert('모집이 마감되었습니다.')
                    );
                  }}
                >
                  {room.room_state === '모집 완료' ? (
                    <img
                      className="image"
                      src={room.image}
                      style={{ opacity: '0.5' }}
                    />
                  ) : (
                    <img className="image" src={room.image} />
                  )}

                  <div>
                    {room.channel} / {room.tag}
                  </div>
                  <div>{room.title}</div>
                  <div>{room.room_state}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </ListContainer>
    </>
  );
};
export default StudyRoomList;
