import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomDetail } from '../../redux/actions/actions';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Container = styled.div`
  max-width: 700px;
  margin: 100px auto 100px;
  text-align: center;
  border: 1px solid #cdcaca;
  box-shadow: 3px 3px 3px 3px gray;

  @media screen and (max-width: 750px) {
    margin-top: 20px;
  }

  .room-title {
    color: #858080;

    @media screen and (max-width: 500px) {
      font-size: 13px;
    }
  }

  .room-info {
    > div img {
      width: 95%;
    }
  }

  .user-info {
    text-align: -webkit-center;
    margin: 20px;

    > table {
      flex-direction: column;
      border-collapse: collapse;
      text-align: center;
      line-height: 1.5;
      border-top: 1px solid #ccc;
      border-left: 3px solid #369;

      > tr {
        width: 100%;
      }

      > tr th {
        min-width: 120px;
        padding: 10px;
        font-weight: bold;
        color: #153d73;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      }

      > tr td {
        width: 480px;
        padding: 10px;
        vertical-align: top;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      }
    }
  }

  .room-answer {
    padding: 10px;
    margin: 20px;

    > textarea {
      width: 50%;
      height: 50px;

      @media screen and (max-width: 750px) {
        width: 68%;
      }
    }
  }

  .room-request-button {
    margin: 20px;

    > button {
      width: 45%;
      height: 50px;
      border-radius: 2em;
      background-color: #faf2f2;
      border: 1px solid #fa9898;
      cursor: pointer;

      :hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

const ReqStudyPage = () => {
  const state = useSelector((state) => state.studyRoomListReducer);

  const { id } = useParams();

  const roomId = Number(id);

  const history = useHistory();
  return (
    <Container>
      <div>
        {state.map((el, idx) =>
          el.id === roomId ? (
            <>
              <div className="room-title">
                <h1>{el.title}</h1>
              </div>
              <div className="room-info">
                <div>
                  <img src={el.image} />
                </div>
                <div className="user-info">
                  <table>
                    <tr>
                      <th>작성자</th>
                      <td>{el.user_id}</td>
                    </tr>
                    <tr>
                      <th>유튜브 채널명</th>
                      <td>{el.channel}</td>
                    </tr>
                    <tr>
                      <th>카테고리</th>
                      <td>{el.tag}</td>
                    </tr>
                    <tr>
                      <th>스터디 시작일</th>
                      <td>{el.start_date}</td>
                    </tr>
                    <tr>
                      <th>스터디 마감일</th>
                      <td>{el.end_date}</td>
                    </tr>
                    <tr>
                      <th>작성자 질문</th>
                      <td>{el.question}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="room-answer">
                <div>작성자 질문에 대한 답변을 입력해주세요</div>
                <br />
                <textarea></textarea>
              </div>
              <div className="room-request-button">
                <button onClick={() => history.push(`/Main`)}>신청완료</button>
              </div>
            </>
          ) : null
        )}
      </div>
    </Container>
  );
};

export default ReqStudyPage;
