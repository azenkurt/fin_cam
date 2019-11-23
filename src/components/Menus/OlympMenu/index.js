import React from 'react';
import './OlympMenu.css';

import { connect } from 'react-redux';

class OlympMenu extends React.Component {
    constructor ( props ) {
        super (props);
        this.state = {
            OlympList : [
                "5 кл 2011-2012 Раён",
                "5 клаc 2018 ",
                "5 клас 2009 Раён",
                "5 клас 2009-2010 Школа",
                "5 клас 2012 Раён",
                "5 клас 2012 Школа",
                "5 клас 2015 Раён",
                "5 клас 2016 Раён",
                "5 клас 2017 Раён",
                "5 клас 2018",
                "5 клас 2018 Школа",
                "5 клас 2019",
                "5 клас 2019 Раён",
                "6 клас 2009 Раён",
                "6 клас 2010 Раён",
                "6 клас 2015 Раён",
                "6 клас 2016 Раён",
                "6 клас 2016 Раён ключы",
                "6 клас 2017 Раён",
                "6 клас 2017 Раён ключы",
                "6 клас 2018 Раён",
                "6 клас 2018 Раён ключы",
                "7 клас 2008 Раён",
                "7 клас 2009 Раён",
                "7 клас 2009 Раён2",
                "7 клас 2010 Раён",
                "7 клас 2010 Раён 2",
                "7 клас 2011 Раён",
                "7 клас 2012 Раён",
                "7 клас 2012 Раён 2",
                "7 клас 2013 Раён",
                "7 клас 2014 Раён",
                "7 клас 2016 ",
                "7 клас 2017 Школа",
                "7 клас 2018 Раён",
                "7 клас 2019 Раён",
                "8 клас",
                "8 клас 2009 Раён",
                "8 клас 2010 ",
                "8 клас 2010 Раён",
                "8 клас 2011",
                "8 клас 2012",
                "8 клас 2017",
                "8 клас 2018",
                "8 клас 2018 Лінгвістычны этап",
                "8 клас 2018 Раён",
                "8 клас Комплексаная работа",
                "9 клас 2014",
                "9 клас 2014 2",
                "10 клас 2014",
                "11 клас 2014",
                "11 клас 2014 Водгук",
                "11 клас 2014 Вусныя выказванні"
            ]
        }
    }
    renderLinkList () {
        let i = 0;
        let x = [];
        this.state.OlympList.forEach(element => {
            x.push (
                <li>
                <a 
                    className = "OlympMenu_el"
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
            <div className = "OlympMenu">      
            <ul className = "OlympMenu_older">
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
         ShowPDF : ( ff ) => dispatch({ type : "SHOW_PDF", sub: 'olymp' , fileName : ff, owner: 'OlympMenu'}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect(mapState, mapDispatch) (OlympMenu);