import React from 'react';
import './NPBMenu.css';

import { connect } from 'react-redux';

class NPBMenu extends React.Component {
    constructor ( props ) {
        super (props);
        this.state = {
            fileList : [
                "Кодакс Рэспублікі Беларусь аб адукацыі",
                "Правілы беларускай арфаграфіі",
                "Санітарныя нормы і правілы",
                "Вучэбная праграма Мова 9 клас",
                "Вучэбная праграма Літаратура 5-7 клас",
                "ІМП 2019-2020 п2.",
                "Вучэбная праграма Літаратура 8-9 клас",
                "Вучэбная праграма Мова 5-7 клас",
                "Тыпавы вучэбы план 2019-2020",
                "ІМП 2019-2020",
                "Нормы ацэнкі Мова",
                "Метадычныя рэкамендацыі па фарміраванні маўлення (слоўн. Дыкт)",
                "Вучэбная праграма Літаратура 10-11 клас",
                "Ацэнка вынікаў Беларуская мова",
                "Палажэнне аб установе агульнай сярэдняй адукацыі",
                "Вучэбная праграма Мова 10-11 клас",
                "Вучэбная праграма Літаратура 8 клас",
                "Вучэбная праграма Мова 8 клас",
                "Канцэпцыя Літаратура",
                "Юбіляры 2019-2020",
                "Канцэпцыя Мова",
                "Адукацыйны стандарт Літаратура 1-11 клас",
                "Ацэнка дзейнасці Літаратура"
            ]
        }
    }
    renderLinkList () {
        let i = 0;
        let x = [];
        this.state.fileList.forEach(element => {
            x.push (
                <li>
                    <a 
                        className = "NPBMenu_el"
                        id = {i}
                        onClick = {() => { this.props.ShowPDF( element ) }}
                        >
                        {element}
                    </a>
                </li>)
        i += 1;
        });
        return x;
    }
    render() {
        return (
            <div className = "NPBMenu">    
                <ul className = "NPB_older">
                    { this.renderLinkList() }
                </ul>       
               
                <button
                    className = "NPBMenu_but"
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
         ShowPDF : ( ff ) => dispatch({ type : "SHOW_PDF", sub: 'npb' , fileName : ff, owner: 'NPBMenu'}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect(mapState, mapDispatch) (NPBMenu);