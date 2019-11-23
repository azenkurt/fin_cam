import React from 'react';
import './LibrMenu.css';

import { connect } from 'react-redux';

class LibrMenu extends React.Component {
    constructor ( props ) {
        super (props);
        this.state = {
            LibrList : [
                "А_Дудараў.Чорная панна Нясвіжа",
                "А_Дудараў Князь Вітаўт",
                "А_Дудараў Князь Вітаўт,З. Бядуля, Я.Колас",
                "А_Куляшоў Цыкл вершаў Маналог ",
                "Алесь Разанаў Мова",
                "В_Быкаў Знак бяды 1",
                "В_Быкаў Знак бяды 2",
                "В_Казько Дзікае паляванне ліхадзея",
                "В_Карамазаў ЧЫРВОНАЯ БРАМА",
                "Вершы М_Танк",
                "Вершы М_Танка",
                "Вершы Максiма Танка",
                "Вершы пра мову",
                "Г_Бёль Дом без гаспадара",
                "Г_Марчук",
                "З_Бядуля Бондар",
                "К_Крапіва Байкі",
                "Карамазаў Зачараваная душа",
                "М_Стральцоў На чацвётрым годзе вайны",
                "М_Стральцоў Сена на асфальце",
                "М_Танк Завушніцы",
                "Міхась Стральцоў Сена на асфальце",
                "Н_Гілевіч (крытыка+твор)",
                "Н_Гілевіч Вершы",
                "Н_Гілевіч Родныя дзеці",
                "П_Броўка memento mori",
                "П_Панчанка Вершы",
                "Р_Барадулін Вершы",
                "Рыгор Барадулін_Творы",
                "С_Цвейг Нябачная калекцыя",
                "Сучасная беларуская драматургія",
                "У_Караткевіч Каласы...1",
                "У_Караткевіч Каласы...2",
                "У_Караткевіч Чазенія",
                "У Бутрамееўс Страсці па Аўдзею",
                "Цётка ВЕРА БЕЛАРУСА",
                "Шлях да Бутлеемею",
                "Э_Хемінгуэй Стары і мора",
                "Энеіда навыварат",
                "Я_Брыль Галя",
                "Я_Купала На сход",
                "Я_Янішчыц Вершы",
                "Ядвігін Ш_Раны",
                "І_Мележ Людзі на балоце",
                "І_Навуменка Апавяданні",
                "І_Чыгрынаў Дзівак з Ганчарнай вуліцы",
                "І_Шамякін Сэрца на далоні1",
                "І_Шамякін Сэрца на далоні2",
                "І_Шамякін Сэрца на далоні 3",
                "Іван Пташнікаў Францужанкі"
            ]
        }
    }
    renderLinkList () {
        let i = 0;
        let x = [];
        this.state.LibrList.forEach(element => {
            x.push (
                <li>
                <a
                    className = "LibrMenu_el"
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
            <div className = "LibrMenu">      
            <ul className = "LibrMenu_older">          
                { this.renderLinkList() }
                </ul>
                <button
                    className = "OlympMenu_but"
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
         ShowPDF : ( ff ) => dispatch({ type : "SHOW_PDF", sub: 'libr' , fileName : ff, owner: 'LingvMenu'}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect(mapState, mapDispatch) (LibrMenu);