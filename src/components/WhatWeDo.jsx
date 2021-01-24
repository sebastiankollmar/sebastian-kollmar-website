import React, { Fragment } from "react";
import ReactHtmlParser from "react-html-parser";

function WhatWeDo(props) {
    let content = {
        English: {
            title: "Services",
            whatWeDo: '<p></p>\
                        <p></p>'
        },
        Deutsch: {
            title: "Kompetenzbereiche",
            software: '<div style="float: left; margin-right: 5%;">\
                        <h3  >Software-Entwicklung</h3>\
                            <p >Software für Windows, Linux und Mac</p>\
                            <p >App-Entwicklung</p>\
                            </div>',
            intelligence: '<div  style="float: left; margin-right: 5%;">\
                                <h3 >Business Intelligence</h3>\
                            <p  >Performancekennzahlen und Frühindikatoren bestimmen</p>\
                            <p >Anbindung von Anwendersystemen</p>\
                            <p >Aufbau von Data Warehouses</p>\
                            <p >Transformation von Rohdaten</p>\
                            <p >Datenvisualisierung</p>\
                        </div>',
            analyze: '<div  style=" float: left; margin-right: 5%;">\
                            <h3 >Datenanalyse</h3>\
                            <p >Korrelationsanalysen</p>\
                            <p >Big Data</p>\
                            <p >Auswerten von Maschinen- und Sensordaten</p>\
                            <p c>Exploratives Datamining</p>\
                        </div>',
            webdesign: '<div style="float: left; margin-right: 5%;">\
                            <h3 >Webdesign</h3>\
                            <p >Webseiten von Grund auf erstellen</p>\
                            <p >Webseiten- und Datenbankverwaltung</p>\
                            <p >Front-End und Back-End</p>\
                        </div>',

        }
    };

    props.language === "Deutsch" ? (content = content.Deutsch) : (content = content.English);
    return (
    <Fragment className="container" >
      <h2>{content.title}</h2>
      <hr />
      <div >
          <div >
      {ReactHtmlParser(content.software)}
      {ReactHtmlParser(content.intelligence)}
      {ReactHtmlParser(content.analyze)}
      {ReactHtmlParser(content.webdesign)}
         </div>
      </div>
        <br/> <br/>
      
    </Fragment>
    );
}

export default WhatWeDo;