import React from "react";

const Lorem = (props) =>{
    return(

        <div className="overlay-lorem">
            <button onClick={props.generateNew} className="button-new-lorem">New Lorem</button>
 
            <p>{props.paragraphs[0]}</p>
            <p>{props.paragraphs[1]}</p>
            <p>{props.paragraphs[2]}</p>
            <p>{props.paragraphs[3]}</p>
            <p>{props.paragraphs[4]}</p>
        </div>

    );
};

export default Lorem;