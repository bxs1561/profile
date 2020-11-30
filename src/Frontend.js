import React from "react"
import "./Frontend.css"

function Frontend({src,name}) {
    return(
        <div className="frontend">
            <img src={src} alt=""/>
            <p>{name}</p>
            <div className="frontend_skill">
                {/*<img src="https://www.flaticon.com/svg/static/icons/svg/919/919851.svg" alt=""/>*/}
                <p>React</p>
                {/*<img src="https://www.flaticon.com/svg/static/icons/svg/474/474948.svg" alt=""/>*/}
                <p>Rails</p>
                {/*<img src="https://www.flaticon.com/svg/static/icons/svg/919/919827.svg" alt=""/>*/}
                <p>HTML</p>
                <p>CSS</p>
                {/*<img src="https://www.flaticon.com/premium-icon/icons/svg/2581/2581838.svg" alt=""/>*/}
                <p>Semantic UI</p>
                <p>Node</p>
                <p>Mangodb</p>
                <p>Express</p>




                {/*<img src="https://www.flaticon.com/svg/static/icons/svg/718/718064.svg" alt=""/>*/}
                <p>Rest API</p>
                {/*<img src="https://www.flaticon.com/svg/static/icons/svg/1265/1265531.svg" alt=""/>*/}
                <p>SQL</p>

            </div>
        </div>
    )

}
export default Frontend
