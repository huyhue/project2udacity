import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Page404 from './Page404';
import { handleInitData } from '../actions/shared';
import LoadingBar from "react-redux-loading-bar";
import { useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import NavigateBar from './NavigateBar';
import ChooseAnswerPage from "./ChooseAnswerPage";
import CreateNewQuestion from './CreateNewQuestion';
import Topboard from "./Topboard";

function App({ dispatch, loggedUser }) {

  useEffect(() => {
    dispatch(handleInitData());
  });

  const redirection = window.location.href.toString().split(window.location.host)[1];

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
      {loggedUser && <NavigateBar />}
          <Routes>
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="*" element={loggedUser ? <Page404 /> : <Navigate to={`/login?redirectTo=${redirection}`}/>} />
            <Route path="/" exact element={loggedUser ? <Dashboard /> : <Navigate to={`/login?redirectTo=${redirection}`}/>} />
            <Route path="/add" element={loggedUser ? <CreateNewQuestion /> : <Navigate to={`/login?redirectTo=${redirection}`}/>} />
            <Route path="/questions/:id" element={loggedUser ? <ChooseAnswerPage /> : <Navigate to={`/login?redirectTo=${redirection}`}/>} />
            <Route path="/leaderboard" element={loggedUser ? <Topboard /> : <Navigate to={`/login?redirectTo=${redirection}`}/>} />
          </Routes>
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({authedUser}) => ({
  loggedUser: !!authedUser,
});

export default connect(mapStateToProps)(App);
