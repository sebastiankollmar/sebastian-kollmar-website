
import React from "react";

function Navigation(props) {

    let content = {
        English: {
            title: "Welcome"
        },
        Deutsch: {
            title: "Willkommen"
        }
    };

    props.language === "Deutsch" ? (content = content.Deutsch) : (content = content.English);


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          {content.title}
        </a>
        <div className="language-select">
          <select
            className="custom-select"
            value={props.language}
            onChange={e => props.handleSetLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Deutsch">Deutsch</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;