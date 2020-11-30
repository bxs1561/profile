import React from "react"
import "./Project.css"
import Card from "./Card";
import img from "./Store-backend.png"
import nep from "./Nep App.png"
import AppCard from "./AppCard";


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
                    description="Create an API from information user submit "
                    git="Github"
                    live="Live"

                />
            <Card
                src={img}
                title="Nep App "
                description="show coronavirus data of countries, trending youtube videos, learn test"
                git="Github"
                live="Live"
            />
            <Card
                src={img}
                title="Backend store information"
                description="Create an API from information user submit"
                git="Github"
                live="Live"
            />
            </div>
            <div className="project">
                <Card
                    src={img}
                    title="Backend store information"
                    description="Create an API from information user submit"
                    git="Github"
                    live="Live"
                />
                <Card
                    src={img}
                    title="Backend store information"
                    description="Create an API from information user submit"
                    git="Github"
                    live="Live"
                />
                <Card
                    src={img}
                    title="Backend store information"
                    description="Create an API from information user submit"
                    git="Github"
                    live="Live"
                />

            </div>
            <div className="project">
                <AppCard
                    src={nep}
                    title="Nep App "
                    description="show coronavirus data of countries, trending youtube videos, learn test"
                    git="Github"
                    live="Live"
                />
                <AppCard
                    src={nep}
                    title="Nep App "
                    description="show coronavirus data of countries, trending youtube videos, learn test"
                    git="Github"
                    live="Live"
                />
                <AppCard
                src={nep}
                title="Nep App "
                description="show coronavirus data of countries, trending youtube videos, learn test"
                git="Github"
            />


            </div>

        </div>




    )

}
export default Project
