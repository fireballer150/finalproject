import styled from 'styled-components';

import landing2 from './LandingImages/Landing-Part2.png';

const BackgroundWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    rgb(220 91 148) 0%,
    rgb(201 163 219) 25%,
    rgb(141 37 74) 51%,
    rgb(167 100 112) 100%
  );
  animation: Animation 20s cubic-bezier(0.74, 0.38, 0.27, 0.69) infinite;

  @keyframes Animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* overflow: hidden; 스크롤 안보이기 */

  .background-img img {
    width: 700px;
    height: 500px;

    @media screen and (max-width: 700px) {
      display: none;
    }
  }
  .background-text {
  }
`;

const LandingPart2 = () => {
  return (
    <BackgroundWrap>
      <div className="background-img">
        <img src={landing2} alt="" />
      </div>
      <div className="background-text">
        <h1>페이지 설명 페이지 설명 페이지 설명 페이지 설명 페이지 설명</h1>
      </div>
    </BackgroundWrap>
  );
};

export default LandingPart2;
