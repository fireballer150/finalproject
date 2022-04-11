import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import { Link, Redirect } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 120px auto 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  /* box-shadow: 3px 3px 3px 3px red; */
  color: aliceblue;
  background-color: salmon;
  @media screen and (max-width: 700px) {
    justify-content: center;
    margin: 20px auto;
  }
`;

const UserContainer = styled.div`
  width: 49%;
  min-width: 350px;
  text-align: center;
  border: 1px solid #cdcaca;
  box-shadow: 3px 3px 3px 3px gray;

  @media screen and (max-width: 700px) {
    width: 80%;
    margin: 20px;
  }

  .input-section {
    margin: 30px;

    > textarea {
      width: 80%;
      height: 100px;
      box-sizing: border-box;
      border-style: inset;
      outline: none;
    }
  }

  .note-button button {
    width: 50%;
    height: 50px;
    border-radius: 2em;
    background-color: #faf2f2;
    border: 1px solid #fa9898;
    cursor: pointer;
    margin-bottom: 50px;

    :hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

const TextContainer1 = styled.div`
  max-width: 50%;
  margin: 0 auto;
  min-width: 90%;
  min-height: 65vh;
  border: 1px solid blanchedalmond;
  border-radius: 10px;
  background-color: blanchedalmond;
  box-shadow: 3px 7px 7px 2px #ffc671;


  > div h1 {
    font-size: 20px;
    color: #938f8f;
  }
`;
const TextContainer2 = styled.div`
  max-width: 50%;
  margin: 0 auto;
  min-width: 90%;
  min-height: 65vh;
  border: 1px solid blanchedalmond;
  border-radius: 10px;
  background-color: #bcdeb0;
  box-shadow: 3px 7px 7px 2px green;


  > div h1 {
    font-size: 20px;
    color: #938f8f;
  }
`;
const Butt1 = styled.div`
border: none;
text-decoration: none;

&:active{
        transform: translateY(-10px)
    }

`;

const Memo1 = styled.div`
  padding-top: 10px;
  max-width: 80%;
  margin: 0 auto;
  min-width: 45%;
  min-height: 20vh;
  border: 1px solid blanchedalmond;
  border-radius: 10px;
  background-color: skyblue;
  box-shadow: 3px 7px 7px 2px #ffc671;
  overflow: auto;
  color: black;
  font-family:sans-serif;
  font-weight: 600;
  font-size: x-large;
`;
const ShareNote = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [note1, setNote1] = useState('');
  const [note2, setNote2] = useState('');


  const changeInput = (e, name) => {
    const value = e.target.value;

    if (name === 'user1') {
      const newValue = value;
      setInput1(newValue);
    } else if (name === 'user2') {
      const newValue = value;
      setInput2(newValue);
    }
  };

  const changeValue1 = () => {
    setNote1(input1);
  };
  const changeValue2 = () => {
    setNote2(input2);
  };
  return (
    <>
    <GlobalStyle />
      <Container>
        <UserContainer>
          <div className="user-section">
          <h1>user1<Butt1>👍</Butt1></h1>
          </div>
          <TextContainer1>
            <div className="note-section">
              <h1>스터디 후기를 남겨주세요</h1>
            </div>
            <Memo1>{note1}</Memo1>
          </TextContainer1>
          <div className="input-section">
            <textarea
              name="user1"
              form="user1"
              autofocus
              onChange={(e) => changeInput(e, 'user1')}
              placeholder="영상을 보게된 이유/알게된것 3가지"
              // style="background-color:yellow"
            ></textarea>
          </div>
          <div className="note-button">
            <button onClick={changeValue1}>작성 완료</button>
          </div>
        </UserContainer>
        <UserContainer>
          <div className="user-section">
            <h1>user2<Butt1>👍</Butt1></h1>
          </div>
          <TextContainer2>
            <div className="note-section">
              <h1>스터디 후기를 남겨주세요</h1>
            </div>
            <Memo1>{note2}</Memo1>
          </TextContainer2>
          <div className="input-section">
            <textarea
              name="user2"
              form="user2"
              autofocus
              onChange={(e) => changeInput(e, 'user2')}
              placeholder="영상을 보게된 이유/알게된것 3가지"
            ></textarea>
          </div>
          <div className="note-button">
            <button onClick={changeValue2}>작성 완료</button>
          </div>
        </UserContainer>
      </Container>
    </>
  );
};

export default ShareNote;
