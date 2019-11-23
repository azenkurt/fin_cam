import React from 'react';
import './SPMenu.css';

import { connect } from 'react-redux';

class SPMenu extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            SPList : [
                "Верш Знічка Шукеловіч Н",
                "Верш Разон П",
                "Казка Даша на фантастычнай планеце (Дзенісенка Д.)",
                "Казка Дзіўныя прыгоды (Дзенісенка Д.)",
                "Казка Калядная ноч (Хромчанкава П.)",
                "Казка Новая гаспадыня Лупі (Бабраўніцкая Э.)",
                "Казка Правы чалавека (Дзенісенка Д.)",
                "Казка Фарбы (Іўлюшкіна М.)",
                "Казка Як жучок і рыбка вясну шукалі (Ганусевіч М.)"
            ]
        }
    }
    genTestsList() {
        let list = [];
        this.state.SPList.forEach( el => {
            list.push(
                <li>
                <a
                className = "SPMenu_el"
                onClick = { () => this.props.ShowPDF( 'SP', el ) }>{ el }</a>
                </li>
            )
        });
        return list;
    }
    render() {
        return (
            <div className = "SPMenu">
                <ul className = "SP_older">
                    { this.genTestsList() }
                </ul>               
                <button
                    className = "SPMenu_but"
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
         ShowPDF : ( sub, ff ) => dispatch({ type : "SHOW_PDF", sub: sub, fileName : ff, owner: 'SPMenu'}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect (mapState, mapDispatch) (SPMenu);