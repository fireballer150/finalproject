import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const textAnimation = keyframes` {

  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
            transform: translateZ(-800px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
`;

const BackgroundWrap = styled.div`
  background-image: url('https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/6e84ca5e-7f92-48ee-7225-c7bdddb26900/public');
  background-size: auto;
  background-attachment: fixed;
  background-position: center;
  background-color: #e2a3ae;
  height: 100vh;
  width: 100%;

  /* .background-img img {
    width: 100%;
    height: 100vh;
  }
  .background-text {
    position: absolute;

    font-size: 50px;
  } */
  @media screen and (max-width: 750px) {
    background-position: 50% center;
    background-size: cover;
  }
`;

const LandingTextWrap = styled.div`
  max-width: 1200px;
  margin-left: 5%;
  padding-top: 20%;
  /* border: 1px solid black; */
  text-shadow: 0 0 3px black;
  color: white;
  font-size: 20px;

  > h1 {
    animation-name: ${textAnimation};
    animation-duration: 1s;
    animation-delay: 0;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  }

  @media screen and (max-width: 500px) {
    padding-top: 20%;
    font-size: 15px;
    /* text-align: left; */
  }

  /* .start-btn-section {
    display: flex;
    background-color: red;
    width: 300px;
    justify-content: center;
    border-radius: 100px;
    cursor: pointer;
  } */
`;

const Button = styled.button`
  position: absolute;
  border: 2px solid white;
  background: transparent;
  color: white;
  width: 300px;
  height: 80px;
  font-size: 2em;
  border-radius: 20px;
  opacity: 0.5;
  top: 70vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  transition: 0.3s;
  text-align: center;
  letter-spacing: 0.1em;
  > a {
    color: inherit;
    text-decoration: inherit;
  }

  :hover {
    border: 2px solid #104f55;
    background-color: rgba(365, 365, 365, 0.5);
    cursor: pointer;
    color: #104f55;
    opacity: 0.8;
    transition: 0.3s;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  :focus {
    outline: none;
  }
`;

const LandingPart1 = () => {
  return (
    <BackgroundWrap>
      <LandingTextWrap>
        <h1>유튜브와 함께</h1>
        <h1>강의를 시작해보세요</h1>
      </LandingTextWrap>
      <Button>
        <Link to="/main">START</Link>
      </Button>
    </BackgroundWrap>
  );
};

export default LandingPart1;
