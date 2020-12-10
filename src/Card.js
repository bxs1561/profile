import React from 'react';
import './Card.css'
import Button from "@material-ui/core/Button";

function Card({ src, title, description, live,git,gitlink,livelink }) {
    return (

        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{"-"}{description}</h4>
            </div>

            <div className="buttons">
                <div className="button">
                    <Button target="_blank" style={{borderRadius: 999,textTransform: "inherit"}} variant="outlined" color="primary" href={gitlink}>{git}</Button>
                </div>
                <div className="button">
                    <Button target="_blank" style={{borderRadius: 999,textTransform: "inherit"}} variant="outlined" color="primary" href={livelink}>{live}</Button>
                </div>
            </div>
        </div>
    )
}

export default Card
