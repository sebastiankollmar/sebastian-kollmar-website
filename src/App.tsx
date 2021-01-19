import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Navigation, Footer, Header, WhatWeDo, Contact, Coop } from "./components";

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
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <Coop language={language} />
                    </div>
                </div>
              <div className="row">
                    <div className="col-md-12 mb-2">
                        <WhatWeDo language={language} />
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-2">
                    <Contact language={language} />
                </div>
          </div>
          <Footer />

        <img src={logo} className="App-logo" alt="logo" />
        
      
    </div>
  );
}

function storeLanguageInLocalStorage(language: string) {
    localStorage.setItem("language", language);
}

export default App;
