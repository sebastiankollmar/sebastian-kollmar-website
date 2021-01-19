import React, { Fragment } from "react";

function Contact(props) {
    let content = {
        English: {
            title: "Contact Information",
            address: "Germany, 44799 Bochum, Glücksburger Straße 37",
            phone: {
                label: "Phone",
                value: "+49 1520/5348258"
            },
            email: {
                label: "E-Mail",
                value: "info.kollmar@web.de"
            }
        },
        Deutsch: {
            title: "Kontakt",
            address: "Glücksburger Straße 37, 44799 Bochum",
            phone: {
                label: "Telefon",
                value: "+49 (0) 1520/5348258"
            },
            email: {
                label: "E-Mail-Adresse",
                value: "info.kollmar@web.de"
            }
        }
    };

    props.language === "Deutsch" ? (content = content.Deutsch) : (content = content.English);
    return (
        <Fragment>
      <h2>{content.title}</h2>
      <hr />
      <address>{content.address}</address>
      <address>
        <abbr title="Phone">{content.phone.label}: </abbr>
        {content.phone.value}
        <br />
        <abbr title="Email">{content.email.label}: </abbr>
        <a href={`mailto:${content.email.value}`}>{content.email.value}</a>
      </address>
    </Fragment>
    );
}

export default Contact;