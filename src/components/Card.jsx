import React, { useContext } from "react";
import './Card.css';
import { AppContext } from "./Context";


const Card = (props) => {

    const data = useContext(AppContext)
    return (
        <>
            {data.map((DataItems) => {
                return (
                    <div className={!props.onDarkState?"main-container-card":"main-container-card-mode"} key = {DataItems.id}>
                        <div className="card-title"><h2>{DataItems.title}</h2></div>
                        <div className="card-body"><p>{DataItems.body}</p></div>
                    </div>
                )
            })}
        </>
    )
}

export default Card;