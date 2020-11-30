import React from "react"
import "./Skill.css"
import Languages from "./Languages";
import Frontend from "./Frontend";
import Tools from "./Tools";

function Skill() {
    return(
        <div className="skill">
            <h2>Skill</h2>
            <p>
                Tecnologies i use
            </p>
            <div className="technology">
                <Languages src="https://www.flaticon.com/svg/static/icons/svg/823/823431.svg" name="Language"/>
                <Frontend src= "https://www.flaticon.com/svg/static/icons/svg/2905/2905983.svg" name="front and back end"/>
                <Tools src="https://www.flaticon.com/svg/static/icons/svg/1085/1085707.svg" name="Tools"/>

            </div>
        </div>
    )

}
export default Skill
