import React from "react";

import hoc from '../components/hoc/withHOC';

function Player(props) {
    console.log(props)
    let url = "https://www.youtube.com/embed/" + props.data.v;
    return (
        <div className='player'>
            <iframe
                width="560"
                height="315"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
            <div className='dateField'>{props.date.toLocaleString()}</div>
        </div>
    );
}

export default hoc(Player);
