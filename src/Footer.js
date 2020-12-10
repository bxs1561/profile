import React from "react";
import "./Footer.css"
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
    const email="bsx1561@g.rit.edu"
    return(
        <div className="footer">
            <p>Bikram Subedi</p>
            <div className="logo">
                <a href={`mailto:${email}`}>
                <EmailIcon className="email"/>
                </a>
            </div>

        </div>
    )

}
export default Footer
