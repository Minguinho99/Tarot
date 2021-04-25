import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(<Router><App /></Router>, document.getElementById('root')); //브라우저 상에 우리의 리액트 컴포넌트를 보여주기 위해서 ReactDOM.render함수를 사용한다.
// 첫번째 parameter는 rendering한 결과물이고 두번째 parameter는 컴포넌트를 어떤 DOM에 그릴지를 결정
//id가 root인 DOM을 찾아서 그리는데 이때 DOM은 public/index.html에서 찾을 수 있음

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
