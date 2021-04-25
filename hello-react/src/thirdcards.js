import React, {Component} from 'react';
import {Link} from "react-router-dom";
import backimg from './tarotcard_image/tarot_back.png';
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
import axios from 'axios';
import SecondCards from './secondcards.js';



var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
                    "Mine": "#405360",
};



class ThirdCards extends Component{
    constructor(props){
        super(props)

        this.state = {
            images : [ar00, ar01, ar02, ar03,ar04, ar05, ar06, ar07, ar08, ar09, ar10, ar11, ar12, ar13, ar14, ar15, ar16, ar17, ar18, ar19, ar20, ar21],
            backimages : [ar01, ar02, ar03,ar04, ar05, ar06, ar07, ar08, ar09, ar10, ar11, ar12, ar13, ar14, ar15, ar16, ar17, ar18, ar19, ar20, ar21],
            imageNum : props.location.state.imageNum,
            imageNum2 : props.location.state.imageNum2,
            final_name1 : props.location.state.final_name1,
            final_name2 : props.location.state.final_name2,
            final_name3 : null,
            imageNum3 : null
        }
        console.log('here is the third page and final name2');
        console.log(props.location.state.final_name2);        
    }

render(){

        const images = this.state.images;
        const backimages = this.state.backimages;
        const items=[];
        const imageNum = this.state.imageNum;
        const imageNum2 = this.state.imageNum2;
        const final_name1 = this.state.final_name1;
        const final_name2 = this.state.final_name2;
        const imageNum3 = this.state.images[Math.floor(Math.random() * this.state.images.length)];
        var splitstr3 = imageNum3.split('/')[3];
        const final_name3 = splitstr3.split('.')[0];


        
        // axios.post('http://localhost:8080/getCardByName',{
        //     name1 : final_name1,
        //     name2 : final_name2,
        //     name3 : final_name3
        //     // params: {name_short : encodeURIComponent(JSON.stringify([final_name1, final_name2, final_name3]))}
        // })
        // .then(response =>{//console.log(response)
        //     const resp = response.data;
        //     const meaning1 = resp[0];
        //     const meaning2 = resp[1];
        //     const meaning3 = resp[2];
        //     console.log(response);
        //     console.log('great!!');
        //     console.log(resp);
        //     return response;
        // })
        // .catch(response => {
        //     console.log('comse to error')
        //     console.log(response)            
        // });  //db에서 이름으로 자료 찾기위해 이름을 post함. 
        
        // const resp = response;
        // console.log('here is the out of the function')
        // console.log(resp);
        for(const [index] of backimages.entries()){
            items.push(<img id="backimg2" src = {backimg} alt="BackImg" onClick = {this.imageClick}/>)
        }
        return( 
            //const imageName = this.getImageName();
            <div id = "background" >
                <div>
                    <img id = "cardshow" src = {imageNum}/>
                    <img id = "cardshow" src = {imageNum2}/>
                    <img id = "cardshow" src = {imageNum3}/>
                </div>
                <div id = "choose1"><p>카드를 모두 선택하셨습니다.</p></div>
                <Link
                        to = {{
                            pathname: "/result",
                            state: {
                                imageNum: imageNum,
                                imageNum2: imageNum2,
                                imageNum3: imageNum3,
                                final_name1 : final_name1,
                                final_name2 : final_name2,
                                final_name3 : final_name3
                            }
                        }}
                    ><button id = "resultbutton">SHOW RESULT</button></Link>
            </div>
        )
    }
}


export default ThirdCards;