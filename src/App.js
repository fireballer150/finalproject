import './App.css';
import React,{useState} from "react";
import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Main from './pages/Main';
import Myinfo from './pages/MyPage-myinfo';
import Mylist from './pages/MyPage-mylist';
import StudyRoom from './pages/StudyRoom';
import Note from './pages/Note';
import ReqStudyRoom from './pages/ReqStudyRoom';
import CreateStudyRoom from './pages/CreateStudyRoom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dropdown from "./components/Dropdown";
import { SliderData } from "./data/SliderData";
import { useDispatch, useSelector } from "react-redux";


function App() {

  const userInfo = useSelector((state) => state.user_reducer.nickname);
  let nickdata = "";
  
  if(userInfo){nickdata = userInfo};
  
  
  const [HamIsOpen,SetHamIsOPen] = useState(false);
  console.log("1HamIsOpen",HamIsOpen);
  
  const toggle = ()=>{
    SetHamIsOPen(!HamIsOpen)
    console.log("2HamIsOpenIntoggle",HamIsOpen);
  };
  

  return (
    <>
      <Header toggle={toggle}/>
      <BrowserRouter>
        <Dropdown HamIsOpen={HamIsOpen} toggle={toggle}/>
        <Switch>
          <Route exact path="/">
            <Landing slides={SliderData}/>
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/mypage/myinfo">
            <Myinfo />
          </Route>
          <Route path="/mypage/mylist">
            <Mylist />
          </Route>
          <Route path="/studyroom/:id">
            <StudyRoom />
          </Route>
          <Route path="/note/:id">
            <Note />
          </Route>
          <Route path="/createstudyroom">
            <CreateStudyRoom />
          </Route>
          <Route path="/reqstudyroom/:id">
            <ReqStudyRoom />
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
        </Switch>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
