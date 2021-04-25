import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StartPage from './startpage';
import {Switch, Route} from "react-router-dom";
import SelectCards from './selectcard';
import FirstCards from './firstcards';
import SecondCards from './secondcards';
import ThirdCards from './thirdcards';
import Result from './result';




class App extends Component {
  constructor (props) {
    super(props);
    console.log('app');
    this.state = {
      imageNum: null
    }
  }


  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/selectcard" component={SelectCards}/>
          {/* <Route exact path="/firstcards" component = {FirstCards}/> */}
          <Route exact path ="/firstcards" component={FirstCards} />
          {/* <Route exact path="/secondcards" component = {SecondCards}/> */}
          <Route exact path ="/secondcards" component={SecondCards} />
          <Route exact path ="/thirdcards" component={ThirdCards} />
          <Route exact path ="/result" component={Result} />
          <Route path="/" component = {StartPage} />
        </Switch>
      </div>
      
    );
  }
}

export default App;