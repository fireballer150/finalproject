import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { initialState1 } from "../../redux/reducers/initialState";
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Section = styled.section`
  position: relative;
  /* background: red; */
  min-height: 100%;
`;

const Inner = styled.div`
  max-width: 980px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  /* background: blue; */
`;

const Box = styled.input`
  display: block;
  position: relative;
  width: 30%;
  height: 51px;
  /* border: solid 1px #dadada; */
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
  /* margin-right: 20px; */
  &:disabled {
    background: #ffffff;
  }
  & + & {
    margin-left: 20px;
  }
`;

const Subject = styled.div`
  text-align: center;
  color: #767676;
  max-width: 220px;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 32px;
`;
const ContentsBlock = styled.div`
  width: 700px;
  /* height: 768px; */

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: blanchedalmond;
  /* border-radius: 16px; */
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 30px;
  /* margin-bottom: 10px; */
  /* padding-bottom: 20px; */
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const RowGroup = styled.div`
  font-family: Dotum, "돋움", Helvetica, sans-serif;
  font-size: 12px;
  /* min-width: 600px; */
  /* max-width: 100%;
  margin: 0 auto; */
  width: 100%;
`;

const ContentBox = styled.div`
  color: black;
  position: relative;
  width: 80%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
  margin: 0 auto;
  &:disabled {
    background: #ffffff;
  }
  /* & + & {
    margin-left: 20px;
  } */
`;
const ListContainer = styled.div`
  max-width: 1200px;
  margin: 10px auto 20px;
  background: blanchedalmond;
  color: black;

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
const MateInfo = styled.ul`
  padding: 5px;
  background-color: salmon;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  /* justify-content: space-evenly; */
  align-items: center;
  border-radius: 10px;
  list-style: none;
  color: khaki;
  margin: 0 auto;
  margin-bottom: 0.2rem;
  /* margin-left: 0; */
  width:40%;
  /* text-align: left; */

  .submenu {
    ${'이건 뭐하는거지' /* 기본 Tabmenu 에 대한 CSS를 구현합니다. */}
  }

  .focused {
    background-color: blanchedalmond;
    color: purple;
    padding: 10px;
    border: 3px solid palevioletred;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px khaki;


    &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  };

  & div {
    text-align: left;
  }
  }
`;

function ContentsHost(props) {
  let list = [...initialState1];
  const [listData, setListData] = useState(list);



    let  list1 = list.filter((el) => el.user_id === 'user1');

  const history = useHistory();

  return (
    <Section>
      <Inner>
        {/* <Box type="date" name="startday"></Box> */}
        {/* <ContentsBlock>
          <RowGroup>
            <ContentBox>글1<button>선택</button></ContentBox>
            <ContentBox>글1<button>선택</button></ContentBox>
            <ContentBox>글1<button>선택</button></ContentBox>
            <ContentBox>글1<button>선택</button></ContentBox>
          </RowGroup>
        </ContentsBlock> */}
         <ListContainer>
        <div className="list-container-box">
          <ul className="list-section">
            {list1.map((room, idx) => {
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
                  <hr/>
                  <MateInfo>
                    <div>
                      MATE1
                    </div>
                  <div>MATE 닉네임 : {room.mate_nickname}</div>
                  <div>
                  MATE 정보 : {room.mate_info}
                  </div>
                  <div>
                  MATE 답변 : {room.mate_answer}
                  </div>
                  </MateInfo>
                  <hr/>
                  <MateInfo>
                    스터디룸 삭제
                  </MateInfo>
                </li>
              );
            })}
          </ul>
        </div>
      </ListContainer>
      </Inner>
    </Section>
  );
}

export default ContentsHost;