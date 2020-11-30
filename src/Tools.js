import React from "react"
import "./Tools.css"

function Tools({src,name}) {
    return(
        <div className="Tools">
            <img src={src} alt=""/>
            <p>{name}</p>

            <div className="Tools_skill">
                {/*<img src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" alt=""/>*/}
                <p>Github</p>
                {/*<img src="https://www.flaticon.com/svg/static/icons/svg/1136/1136105.svg"/>*/}
                <p>webstorm</p>
                <p>pycharm</p>
                <p>IntelliJ</p>
                <p>RubyMine</p>
                <p>Atom</p>
                <p>Vim</p>
                <p>Slack</p>
                <p>TrelloBoard</p>
            </div>
        </div>
    )

}
export default Tools
