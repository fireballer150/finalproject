import ImageOne from '../images/ImageOne.jpg';
import ImageTwo from '../images/ImageTwo.jpg';
import ImageThree from '../images/ImageThree.jpg';
import ImageFour from '../images/ImageFour.jpg';



export const SliderData = [
    {
        title : 'U-LearningMate란?',
        text : '유튜브(U) + 학습(Learning) + 친구(Mate) 를 합친 U-LearnigMate입니다.',
        path : '/',
        label: 'U-LearingMate',
        image: ImageOne,
        alt: '유튜브아이콘1'
    },
    {
        title : 'GOOGLE ID로 간편하게 시작해보세요!',
        text : '너(U)튜브로 자기계발하고 싶은 당신!자기계발은 하고 싶은데, 혼자라서 불가능한가요?',
        path : '/register',
        label: '회원가입하러 가기',
        image: ImageTwo,
        alt: '유튜브아이콘2'
    },
    {
        title : '원하는 영상링크로 스터디룸을 만들어보세요!',
        text : '가볍게 너튜브 동영상으로 학습 할 사람을 구하고 싶으신가요?',
        path : '/createstudyroom',
        label: '스터디룸만들러가기',
        image: ImageThree,
        alt: '유튜브아이콘3'
    },
    {
        title : '게스트모드로 먼저 구경해보세요',
        text : '로그인해서 시작해볼까요?',
        path : '/login',
        label: '로그인하기',
        image: ImageFour,
        alt: '유튜브아이콘4'
    },
]