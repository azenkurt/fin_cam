import React from 'react';
import './KufarMenu.css';

import { connect } from 'react-redux';

class KufarMenu extends React.Component {
    constructor ( props ) {
        super (props);
        this.state = {
            KufarList : [
                "Асацыятыўны малюнак_Рамейка М@_ на верш Я@Співакова !Жыццё!",
                "Асацыятыўны малюнак_Тарасевіч Ю@_ на верш Я@Співакова !Жыццё!"                
            ]
        }
    }
    renderLinkList () {
        let i = 0;
        let x = [];
        this.state.KufarList.forEach(element => {
            x.push (
                <li>
                <a
                    className = "KufarMenu_el"
                    id = {i}
                    onClick = {() => { this.props.ShowPDF( element ) }}
                    >
                    {element.replace(/!/g, '"').replace(/_/g, ' ').replace(/@/g, '.')}
                </a>
                </li>)
        i += 1;
        });
        return x;
    }
    render() {
        return (
            <div className = "KufarMenu">      
            <ul className = "KufarMenu_older">          
                { this.renderLinkList() }
                <li><a href ={"/video/booktrailer/Рыгор Барадулін(М.Вайткевіч).webm"}>Буктрэйлер Вайткевіч М. "Рыгор Барадулін"</a></li>
                <li><a href ={"/video/booktrailer/Мая Ашмяншчына Хам'юк Антон.webm"}>Буктрэйлер Хам'юк А. "Мая Ашмяншчына"</a></li>
                <li><a href ={"/video/booktrailer/Буктрэйлер___.webm"}>Буктрэйлер "Трэба дома бываць не госцем..."</a></li>
                <li><a href ={"/video/booktrailer/Буктрэйлер Хам'юка А..webm"}>Буктрэйлер Хам'юк А. "Рыгор Барадулін"</a></li>
                <li><a href ={"/video/booktrailer/Буктрэйлер Разон П..webm"}>Буктрэйлер Разон П.</a></li>
                </ul>
                <button
                    className = "KufarMenu_but"
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
         ShowPDF : ( ff ) => dispatch({ type : "SHOW_PDF", sub: 'kufar' , fileName : ff, owner: 'KufarMenu'}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect(mapState, mapDispatch) (KufarMenu);