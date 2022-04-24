import React from "react";
import Player from "./Player";

export default function Widget(props) {

    let videoArr = [
        {
            id: 0,
            v: "KHQr27xsOD0",
            date: new Date(2022, 3, 23, 1, 20, 30)
        },

        {
            id: 1,
            v: "Hx9AfGs5cX4",
            date: new Date(2022, 3, 22, 1, 20, 30)
        },

        {
            id: 2,
            v: "l557BwTjLII",
            date: new Date(2022, 3, 21, 1, 20, 30)
        },

        {
            id: 3,
            v: "xYAHb0QvxVk", date: new Date(2022, 3, 23, 1, 20, 30)

        },

        {
            id: 4,
            v: "_ef78ndnotA",
            date: new Date(2022, 3, 12, 1, 20, 30)
        },

        {
            id: 5,
            v: "4uO72SjFbqo",
            date: new Date(2022, 3, 11, 1, 20, 30)
        },

    ]

    let arr = [];
    videoArr.forEach(video => {
            arr.push(<Player key={video.id} data={video}/>);
        }
    );
    return (
        <div className='list flex-row'>
            {arr}
        </div>
    );

}
