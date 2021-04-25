import React, {Component} from 'react';
import backimg from './tarotcard_image/tarot_back_final.jpg';
import {Link} from "react-router-dom";
//import blink from './tarotacard_image/a.png';
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


class SelectCards extends Component{
    /*state = {
        open : true
    }*/
    constructor(props){
        super(props)
        this.state = {
            images : [ar00, ar01, ar02, ar03,ar04, ar05, ar06, ar07, ar08, ar09, ar10, ar11, ar12, ar13, ar14, ar15, ar16, ar17, ar18, ar19, ar20, ar21]
        }
    }

    // imageClick = (index) => {
    //     this.setState(state => ({ open: !state.open }))
    //   }
    
    /*getImageName = () => this.state.open ? 'backimage' : 'afterimage'*/

    render(){
        const images = this.state.images;
        const items=[];

        for(const [index] of images.entries()){
            items.push(<img id="backimg2" src = {backimg} alt="BackImg" onClick = {this.imageClick}/>)
        }
        //const imageName = this.getImageName();
        return(
            <div id = "background" onClick={() => console.log('root')}>
                <div id = "choose"><p>이번에 선택하실 카드</p><p>첫번째 카드, 오늘과 관련있는 가까운 과거를 보여줍니다.</p></div>
                
                <Link to = "/firstcards"><div  onClick={(e) => console.log('hi')}>
                    <img id = "backimg1" src = {backimg} alt = "BackImg" onClick={this.imageClick} />
                    {items}
                </div></Link>
            </div>
        )
    }
}

export default SelectCards;