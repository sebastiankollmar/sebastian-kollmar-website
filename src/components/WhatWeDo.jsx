import React, { Fragment } from "react";
import ReactHtmlParser from "react-html-parser";

function WhatWeDo(props) {
    let content = {
        English: {
            title: "Services",
            whatWeDo: '<p></p><p></p>'
        },
        Deutsch: {
            title: "Leistungen",
            whatWeDo: '<h3>Privatpersonen/Einzelprojekte</h3><p></p><h3>Gewerblich</h3><p></p>'
        }
    };

    props.language === "Deutsch" ? (content = content.Deutsch) : (content = content.English);
    return (
    <Fragment>
      <h2>{content.title}</h2>
      <hr /> {ReactHtmlParser(content.whatWeDo)}
      
    </Fragment>
    );
}

export default WhatWeDo;