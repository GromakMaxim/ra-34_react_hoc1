import React from "react";

export default function withHOC(Component) {


    function HOCWrapper(props) {
        let current = new Date();
        let time = props.data.date.getTime();

        let timeDiff = Math.abs(current.getTime() - time);
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        switch (diffDays) {
            case 0:
                return <Component {...props} date='Видео загружено сегодня'/>
            case 1:
                return <Component {...props} date='Видео загружено вчера'/>
            case 2:
                return <Component {...props} date='Видео загружено 2 дня назад'/>
            case 3:
                return <Component {...props} date='Видео загружено 3 дня назад'/>
            case 4:
                return <Component {...props} date='Видео загружено 4 дня назад'/>
            case 5:
                return <Component {...props} date='Видео загружено 5 дней назад'/>
            case 6:
                return <Component {...props} date='Видео загружено 6 дней назад'/>
            case 7:
                return <Component {...props} date='Видео загружено неделю назад'/>
            default:
                return <Component {...props} date='Видео загружено давно...'/>
        }

    }

    return HOCWrapper
}
