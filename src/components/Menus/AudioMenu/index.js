import React from 'react';
import './AudioMenu.css';

import { connect } from 'react-redux';

class AudioMenu extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            AudioList : [
                'К.Крапіва Дыпламаваны баран',
                "М.Багдановіч Ад родных ніў",
                "М.Багдановіч Зорка Венера",
                "М.Багдановіч Зімовая дарога",
                "М.Багдановіч Зімой",
                "М.Багдановіч Санет",
                "М.Барадулін Вераю",
                "На Беларусі Бог жыве",
                "О край родны",
                "Роднае слова",
                "Я. Колас Мой дом",
                "Я. Колас Не тужы",
                "Я. Колас Новая зямля",
                "Я. Колас Новая зямля (Ліпава)",
                "Я. Колас Новая зямля (Міхал)",
                "Я. Колас Новая зямля (Прырода)",
                "Я. Колас Новая зямля (сустрэча з воўкам)",
                "Я. Колас Новая зямля (Танцы)",
                "Я. Колас Новая зямля (Чалавек)",
                "Я. Колас Новая зямля (частка)",
                "Я. Колас Родныя вобразы",
                "Я. Колас Ручэй",
                "Я. Колас Сымон-музыка",
                "Я. Колас Топаль",
                "Я.Купала Беларусь! Твой народ дачакаецца",
                "Я.Купала Спадчына",
                "Я Колас З Новай зямлі",
                "Я Колас На растонях",
                "Я Колас Новая зямля",
                "Я Колас Новая зямля Мой родны кут",
                "Янка Брыль Мова"
            ]
        }
    };
    genAudioList () {
        let list = [];
        this.state.AudioList.forEach( el => {
            list.push(
                <li>              
                <p className = "AudioMenu_el_header">{ el }</p>          
                <audio
                    className = "AudioMenu_el_audio"
                    controls>
                        <source src = {"/audio/"+el+".mp3"}></source>
                    </audio>                           
                </li>    
            )
        });
        return list
    }
    render() {        
        return (
            <div className = "AudioMenu">
                <ul className = "AudioMenu_older">
                { this.genAudioList() }
                </ul>
                
                <button
                    className = "AudioMenu_but"
                    onClick = { ()=> this.props.BackToMainMenu() }>
                    Вярнуцца да галоўнага меню
                </button>
            </div>
        )
    }
}

const mapState = ( state ) => {

}
const mapDispatch = dispatch => {
    return {
        BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect(mapState, mapDispatch) (AudioMenu);