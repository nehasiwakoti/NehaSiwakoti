import React from 'react';
import loadingGif from '../images/loading-gear.gif'

export default function Loading(){
    return(
        <div className="loading">
            <h4> rooms data are loading....</h4>
            <img src={loadingGif} alt="neha"/>

        </div>
    )

}