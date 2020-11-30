import React from "react"
import "./Languages.css"

function Languages({src,name}) {
    return(
        <div className="languages">
            <img src={src} alt=""/>
            <p>{name}</p>
            <div className="languages_skill">
                {/*<img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"*/}
                {/*    alt=""*/}
                {/*/>*/}
                <p>Java Script</p>
                {/*<img src="https://www.flaticon.com/svg/static/icons/svg/226/226777.svg" alt=""/>*/}
                <p>Java</p>
                {/*<img src="https://www.flaticon.com/svg/static/icons/svg/402/402221.svg" alt=""/>*/}
                <p>ruby</p>
                {/*<img src="https://www.flaticon.com/svg/static/icons/svg/919/919852.svg" alt=""/>*/}
                <p>Python</p>
            </div>

        </div>
    )

}
export default Languages
