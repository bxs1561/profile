import React from 'react';
import './AppCard.css'
import Button from "@material-ui/core/Button";

function AppCard({ src, title, description,git,gitlink }) {
    return (

        <div className='card_app'>
            <img src={src} alt=""  />
            <div className="card__infoApp">
                <h2>{title}</h2>
                <h4>-{description}</h4>
            </div>

            <div className="buttonsApp">
                <div className="buttonApp">
                    <Button target="_blank" style={{borderRadius: 999,textTransform: "inherit"}} variant="outlined" color="primary" href={gitlink}>{git}</Button>
                </div>
            </div>
        </div>
    )
}

export default AppCard
