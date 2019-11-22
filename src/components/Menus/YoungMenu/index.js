import React from 'react';
import './YoungMenu.css';

import { connect } from 'react-redux';

class YoungMenu extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            list : [
                "Анатоль Івашчанка",
                "Андрусь Такінданг",
                "Андрэй Хадановіч",
                "Вiка Трэнас",
                "Валярына Кустава",
                "Вера Жыбуль (Джэці)",
                "Вольга Гапеева",
                "Віктар Жыбуль",
                "Віталь Рыжкоў",
                "Глеб Лабадзенка",
                "Дмитрий Строцев",
                "Катерина Зыкова",
                "Кірыла Анохін",
                "Марыя Мартысевіч",
                "Наста Манцэвіч",
                "Павал Свярдлоў",
                "Таццяна Нядбай",
                "Усевалад Сцебурака",
                "Цімур Хоміч"
            ]
        }
    };
    getRenderList () {
        let list = [];
        this.state.list.forEach( el => {
            list.push(
                <video
                    className = "YoungMenu_video"                    
                    width = "300px"
                    height = "200px"
                    controls
                    type="video/mp4" >
                        <source src={"/video/young/"+ el +".wmv" } type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'></source>
                    </video>
            )
        });
        return list;
    }
    render() {
        return (
            <div className = "YoungMenu">
                { this.getRenderList() }
            </div>
        )
    }
}

const mapState = ( state ) => ({
    AuthorNum : state.numb
})
const mapDispatch = dispatch => {
    return {       
        BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect(mapState, mapDispatch ) (YoungMenu);