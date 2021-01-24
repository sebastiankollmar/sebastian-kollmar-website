import { NONAME } from "dns";
import React, {useState} from "react";
import {Animated} from "react-animated-css";


function Card(props) {

    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [fade, setFade] = useState(true);
    const [plusMinus, setPlusMinus] = useState("+");
    const [plusMinus2, setPlusMinus2] = useState("+");

    let content = {
        English: {
            title: props.titleEnglish,
            description: props.descriptionEnglish,
            items: props.itemsEnglish,
            items2: props.itemsEnglish2,
            detailTitle: "Technical details",
        },
        Deutsch: {
            title: props.titleGerman,
            description: props.descriptionGerman,
            items: props.itemsGerman,
            items2: props.itemsGerman2,
            detailTitle: "Technische Details"
        }
    };

    props.language === "Deutsch" ? (content = content.Deutsch) : (content = content.English);

    var itemList = content.items;
    
    const listItems = itemList.map((itemList) => <li class="list-group-item list-group-item-secondary">{itemList}</li>);
    
    var itemList2 = content.items2;
    
    const listItems2 = itemList2.map((itemList2) => <li class="list-group-item list-group-item-secondary">{itemList2}</li>);


    function hideMe() {
        if(visible) {
            setTimeout(() => setVisible(false), 200);
            setPlusMinus("+");
        } else {
            setTimeout(() => setVisible(true), 200);
            setPlusMinus("-");
        }
    }

    function hideMe2() {
        if(visible2) {
            setTimeout(() => setVisible2(false), 200);
            setPlusMinus2("+");
        } else {
            setTimeout(() => setVisible2(true), 200);
            setPlusMinus2("-");
        }
    }

    return (
        <div class="card">
            <img class="card-img-top text-center" src={props.imgLink} style={{width: 'auto', maxHeight: '100px', marginLeft: 'auto', marginRight: 'auto'}} alt=""></img>
            <div class="card-body">
                <h3>{content.title}</h3>
                <p>{content.description}</p>
                <button class="btn btn-dark mb-3" onClick={hideMe}>{plusMinus}</button>
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={visible} style={visible ? null : { display: "none"}}>
                    <div class="list-group">
                        {listItems}
                    </div>
                    <button class="btn btn-dark mb-3 mt-3" onClick={hideMe2}>{plusMinus2}</button>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={visible2} style={visible2 ? null: { display: "none"}}>
                    <p>{content.detailTitle}</p>
                    <div class="list-group">
                        {listItems2}
                    </div>
                    </Animated>
                </Animated>
            </div>
        </div>
    )
}

export default Card;