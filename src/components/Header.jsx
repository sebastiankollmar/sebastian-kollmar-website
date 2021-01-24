import React from "react";
import profile from '../profile.jpg';

function Header(props) {
    let content = {
        English: {
            title: "Sebastian Kollmar",
            description: "Self-employed business information scientist",
            addon: "in the fields of software development, business intelligence and data science"
        },
        Deutsch: {
            title: "Sebastian Kollmar",
            description: "Selbstständiger Wirtschaftsinformatiker",
            addon: "in den Bereichen Software-Entwicklung, Business Intelligence und Data Science"
        }
    };

    props.language === "Deutsch" ? (content = content.Deutsch) : (content = content.English);

    return (
        <header class="bg py-3 mb-4" style={{ backgroundColor: "#5096F2"}}>
      <div class="container h-100 align-items-center">
        <div class="row h-100">
          <div class="col-lg-12 pt-5">
          <img src={profile} alt="profilepicture" class="img-thumbnail rounded float-left mb-4 mt-4" style={{width: '20%'}}></img>
            <h2 class="display-4 text-white text-center pt-2 mt-5 mb-4">{content.title}</h2>
            <p class="lead text-white-50 text-center">{content.description}</p>
            <p class="lead mb-5 text-white-50 text-center">{content.addon}</p>
          </div>
        </div>
      </div>
    </header>
    );
}

export default Header;