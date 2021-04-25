import React, {Component} from 'react';
import {Link} from "react-router-dom";

import ar00 from './tarotcard_image/ar00.jpg';

class StartPage extends Component{
    render(){
        return(
        
        <div id = "startbackground">
            <div id = "startsmall">OUR WEB SITE WILL GIVE YOU TAROT</div>
            <div id = "startback">Welcome to Our Tarot Wolrd!</div>
            <div id = "startsmall2">provided by Ha Hyeonjung and JeonJungyeon</div>
            <div>
                <Link to="/selectcard">
                    <button id = "startbutton">START Tarot</button>
                </Link>
            </div>

        </div>
        )
    }
}

export default StartPage;