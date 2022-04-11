import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomDetail } from '../../redux/actions/actions';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Container = styled.div`
  max-width: 1200px;
  border: 2px solid #cdcaca;
  margin: 120px auto 100px;
  text-align: center;

  box-shadow: 3px 3px 3px 3px gray;

  .title {
    padding: 20px;
    color: #868282;

    @media screen and (max-width: 500px) {
      padding: 0;
      font-size: 26px;
    }
  }

  @media screen and (max-width: 750px) {
    margin-top: 20px;
  }

  .video-section {
    > iframe {
      width: 80%;
      height: 50vh;
      border: 1px;

      @media screen and (max-width: 750px) {
        width: 100%;
      }
    }
  }

  .user-info-section {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 40px auto;
    width: 80%;
    padding: 10px;
    color: #7c7b7b;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }

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
        vertical-align: top;
        color: #153d73;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      }

      > tr td {
        width: 220px;
        padding: 10px;
        vertical-align: top;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      }
    }

    .user-comment {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 30%;
      color: #525050;
      align-content: center;
      margin-top: 10px;

      @media screen and (max-width: 900px) {
        align-items: center;
      }

      .comment {
        border: 1px solid #ccc;
        align-content: center;
        height: 180px;

        @media screen and (max-width: 900px) {
          width: 360px;
          height: 50px;
        }
      }
    }
  }

  .button-section {
    > button {
      width: 25%;
      height: 60px;
      border-radius: 2em;
      background-color: #faf2f2;
      border: 1px solid #fa9898;
      cursor: pointer;
      margin: 30px 30px 50px;
      font-size: 17px;

      :hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }

      @media screen and (max-width: 500px) {
        margin: 0px 20px 30px;
        font-size: 13px;
        width: 30%;
      }
    }
  }
`;

const StudyRoomDetail = () => {
  const state = useSelector((state) => state.studyRoomListReducer);

  const { id } = useParams();

  const roomId = Number(id);

  const history = useHistory();

  const embed = 'https://www.youtube.com/embed/';

  return (
    <Container>
      <div>
        {state.map((el, idx) =>
          el.id === roomId ? (
            <>
              <h1 className="title" key={idx}>
                {el.title}
              </h1>
              <div className="video-section">
                <iframe
                  src={embed + el.link.substring(17)}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="user-info-section">
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
                </table>
                <div className="user-comment">
                  <div>작성자 코멘트</div>
                  <br />
                  <div className="comment">{el.comment}</div>
                </div>
              </div>
              <div className="button-section">
                <button onClick={() => history.push(`/reqstudyroom/${el.id}`)}>
                  신청하기🖋
                </button>
                <button onClick={() => history.push(`/note/${el.id}`)}>
                  공유 노트📖
                </button>
              </div>
            </>
          ) : null
        )}
      </div>
      {/* <div className="video-section">
        <iframe
          src={embedLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="user-info-section">
        <h1>유저 정보</h1>
        <h1>유저 정보</h1>
        <h1>유저 정보</h1>
      </div>
      <div className="button-section">
        <a href="/reqstudyroom/:id">
          <button>신청하기</button>
        </a>
        <a href="/note/1">
          <button>공유 노트</button>
        </a>
      </div> */}
    </Container>
  );
};

export default StudyRoomDetail;
