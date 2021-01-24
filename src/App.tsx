import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Navigation, Footer, Header, WhatWeDo, Contact, Coop, Card } from "./components";
import codingLogo from "./coding.png";
import biLogo from "./bi.png";
import dataLogo from "./dataLogo.png";

function App() {

    let languageStoredInLocalStorage = localStorage.getItem("language");
    let [language, setLanguage] = useState(
        languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
    );

  return (
    <div className="App">
      
            <Navigation 
                language={language}
                handleSetLanguage={(language: string) => {
                    setLanguage(language);
                    storeLanguageInLocalStorage(language);
                }}
            />
            <Header language={language} className="App-header" />
            <div className="container">
                    
                <div className="row mt-5">
                    <div className="col-md-4 mb-2 mt-3">
                        <Card 
                            titleGerman={"Software-Entwicklung"}
                            titleEnglish={"Software-Development"}
                            descriptionGerman={"Design, Projektplanung und Programmierung von Anwendungen für Privatpersonen und Unternehmer"}
                            descriptionEnglish={"Design, project planning and programming of applications for individuals and entrepeneurs"}
                            language={language}
                            itemsGerman={["Software für Windows, Linux und Mac","App-Entwicklung (Android)","Webanwendungen", "Webseitengestaltung und -verwaltung"]}
                            itemsEnglish={["Software for Windows, Linux and Mac", "App-Development (Android)", "Webapplications", "Domaindesign and -administration"]}
                            imgLink={codingLogo}
                            itemsGerman2={["Java", "Python", "PHP, HTML & JavaScript", "JS Frameworks: React & Vue", "Android-Apps für Augmented-Reality"]}
                            itemsEnglish2={["Java", "Python", "PHP, HTML & JavaScript", "JS frameworks: React & Vue", "Android apps for augmented reality"]}
                        />
                    </div>
                    <div className="col-md-4 mb-2 mt-3">
                        <Card 
                            titleGerman={"Business Intelligence"}
                            titleEnglish={"Business Intelligence"}
                            descriptionGerman={"Planung, Unterstützung und Umsetzung von Business Intelligence und Business Analytics Projekten"}
                            descriptionEnglish={"Planning, support and implementation of business intelligence and business analytics projects"}
                            language={language}
                            itemsGerman={["Performancekennzahlen und Frühindikatoren aufstellen", "Anbindung von Anwendersystemen", "Aufbau von Data Warehouses", "Rohdatenprozessierung", "Datenvisualisierung"]}
                            itemsEnglish={["Establish performance metrics and leading indicators", "Connection von user systems", "Building data warehouses", "Raw data processing", "Data visualization"]}
                            imgLink={biLogo}
                            itemsGerman2={["Microsoft PowerBI", "Grafana", "Plotly & Pandas für Eigenentwicklungen", "InfluxDB & TICK-Netzwerk"]}
                            itemsEnglish2={["Microsoft PowerBI", "Grafana", "Plotly & pandas for self development", "InfluxDB & TICK network"]}
                        />
                    </div>
                    <div className="col-md-4 mb-2 mt-3">
                        <Card 
                            titleGerman={"Data Science"}
                            titleEnglish={"Data Science"}
                            descriptionGerman={"Datenanalysen und Statistische Auswertungen von großen und kleinen Datenmengen"}
                            descriptionEnglish={"Data analysis and statistical evaluation of large and small data sets"}
                            language={language}
                            itemsGerman={["Korrelationsanalysen", "Big Data Projekte", "Auswertungen von Maschinen- und Sensordaten", "Exploratives Datamining", "Aufbau und Verwaltung von Datenbanken"]}
                            itemsEnglish={["Correlation analysis", "Big data projects", "Evaluations of machine and sensor data", "Explorative data mining", "Construction and management of databases"]}
                            imgLink={dataLogo}
                            itemsGerman2={["Python", "R", "Java", "Julia", "pandas, numpy, plotly","Grafana", "InfluxDB, MySQL, SQLServer, PostgreSQL"]}
                            itemsEnglish2={["Python", "R", "Java", "Julia", "pandas, numpy, plotly","Grafana", "InfluxDB, MySQL, SQLServer, PostgreSQL"]}
                        />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12 mb-5 mt-5">
                        <Coop language={language} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 pb-3 mb-5 mt-4">
                        <Contact language={language} />
                    </div>
                </div>
            </div>
            <Footer />

        
      
    </div>
  );
}

function storeLanguageInLocalStorage(language: string) {
    localStorage.setItem("language", language);
}

export default App;
