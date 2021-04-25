import React, {Component} from 'react';
import {Link} from "react-router-dom";
import backimg from './tarotcard_image/tarotcard_back.png';
import ar01 from './tarotcard_image/ar01.jpg';
import ar02 from './tarotcard_image/ar02.jpg';
import ar03 from './tarotcard_image/ar03.jpg';
import ar04 from './tarotcard_image/ar04.jpg';
import ar05 from './tarotcard_image/ar05.jpg';
import ar06 from './tarotcard_image/ar06.jpg';
import ar07 from './tarotcard_image/ar07.jpg';
import ar08 from './tarotcard_image/ar08.jpg';
import ar09 from './tarotcard_image/ar09.jpg';
import ar10 from './tarotcard_image/ar10.jpg';
import ar11 from './tarotcard_image/ar11.jpg';
import ar12 from './tarotcard_image/ar12.jpg';
import ar13 from './tarotcard_image/ar13.jpg';
import ar14 from './tarotcard_image/ar14.jpg';
import ar15 from './tarotcard_image/ar15.jpg';
import ar16 from './tarotcard_image/ar16.jpg';
import ar17 from './tarotcard_image/ar17.jpg';
import ar18 from './tarotcard_image/ar18.jpg';
import ar19 from './tarotcard_image/ar19.jpg';
import ar20 from './tarotcard_image/ar20.jpg';
import ar21 from './tarotcard_image/ar21.jpg';
import ar00 from './tarotcard_image/ar00.jpg';

import ThirdCards from './thirdcards.js';




console.log(backimg);

var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
                    "Mine": "#405360",
};



class Result extends Component{
    constructor(props){
        super(props)

        this.state = {imageNum : props.location.state.imageNum,
            imageNum2 : props.location.state.imageNum2,
            imageNum3 : props.location.state.imageNum3
        }
        
    }
render(){
        const images = this.state.images;
        const backimages = this.state.backimages;
        const items=[];
        const imageNum = this.state.imageNum
        const imageNum2 = this.state.imageNum2
        const imageNum3 = this.state.imageNum3

        return( 
            //const imageName = this.getImageName();
            <div>
                <div>
                    <img id = "cardresult" src = {imageNum}/>
                    <img id = "cardresult" src = {imageNum2}/>
                    <img id = "cardresult" src = {imageNum3}/>
                </div>
                <div id = "textresult1" >
                    <div >1. THE MAGICIAN.--Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male. Reversed: Physician, Magus, mental disease, disgrace, disquiet.</div>
                    <div >1. THE MAGICIAN.--Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male. Reversed: Physician, Magus, mental disease, disgrace, disquiet.</div>
                    <div>1. THE MAGICIAN.--Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male. Reversed: Physician, Magus, mental disease, disgrace, disquiet.</div>
                </div>
                <div><Link to = "/"><button id = "gohome">Go HOME</button></Link></div>
            </div>
        )
    }
}
export default Result;