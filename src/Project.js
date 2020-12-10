import React from "react"
import "./Project.css"
import Card from "./Card";
import img from "./Store-backend.png"
import nep from "./Nep App.png"
import AppCard from "./AppCard";
import Nepkarts from "./Nepkarts.png"


// const logo = require('.src/Store-backend.png');
function Project() {
    return(
        <div className="projects">
            <h3>Projects</h3>
            <h2>Here are some of the projects i've worked on recently.</h2>
            <div className="project">
                <Card
                    src={img}
                    title="Backend store information "
                    description="Create an API from information user submit, use this information to display in app"
                    git="Github"
                    live="Live"
                    gitlink={"https://github.com/bxs1561/nep-app-web"}
                    livelink={"https://nepali-stores.herokuapp.com/"}

                />
                <Card
                    src={Nepkarts}
                    title="E-commerce mern stack "
                    description="Buy product, send email to buyer using nodemailer, add product to cart using react context api, store order, user details
                     in database, jwtwebtoken for authentication, stripe is use for payment"
                    git="Github"
                    live="Live"
                    gitlink={"https://github.com/bxs1561/e-commerece-site"}
                    livelink={"https://nepkarts.herokuapp.com/"}
                />

            </div>

            <h3>Apps</h3>
            <div className="project">
                <AppCard
                    src={nep}
                    title="Nep App "
                    description="show coronavirus data of countries, trending youtube videos of each countries to watch, USA Citizenship question and answer with voice
                    search local community stores"
                    git="Github"
                    live="Live"
                    gitlink={"https://github.com/bxs1561/nep-app"}
                />

            </div>

        </div>




    )

}
export default Project
