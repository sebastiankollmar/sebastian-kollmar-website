
import React, {Fragment} from "react";
import boLogo from "../bo_logo.jpg";
import merchiersLogo from "../merchiers_logo.jpg";
import ialLogo from "../ial_logo.png";

function Coop(props) {

    let content = {
        English: {
            title: "In cooperation with"
        },
        Deutsch: {
            title: "In Zusammenarbeit mit"
        }
    };

    props.language === "Deutsch" ? (content = content.Deutsch) : (content = content.English);


  return (
    <Fragment>
        <h2>{content.title}</h2>
        <hr />
        <a href="https://www.hochschule-bochum.de"><img class="img float-right mt-5" src={boLogo} alt="www.hochschule-bochum.de" style={{width: '20%'}}></img></a>
        <a href="https://www.ial.ruhr"><img class="img float-center mt-3" src={ialLogo} alt="www.ial.ruhr" style={{width: '15%'}}></img></a>
        <a href="https://www.merchiers-consulting.de"><img class="img float-left mt-5" src={merchiersLogo} alt="www.merchiers-consulting.de" style={{width: '20%'}}></img></a>
        
    </Fragment>
  );
}

export default Coop;