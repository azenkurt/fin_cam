import React from 'react';
import './TrainingsMenu.css';

import { connect } from 'react-redux';

class TrainingsMenu extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            trainingsList : [
                'Адушаўлёныя і неадушаўлёныя назоўнікі',
                'Аўтары і іх героі (6 клас)',
                'Беларускія пісьменнікі',
                'Правапіс суфіксаў прыметнікаў',
                'Прыказкі пра гасціннасць',
                'Прыметнік ( 6 клас )',
                'Псеўданімы пісьменнікаў',
                'Рэкі Беларусі',
                'Якуб Колас',
                'І, Ы, Й пасля прыставак'
            ]
        }
    }
    genTrainingsMenuList () {
        let list = [];
        this.state.trainingsList.forEach ( el => {
            list.push(
                <li>
                    <a 
                    className = "TrainingsMenu_el"
                    onClick = { () => this.props.ShowAnim( 'trainings', el)} 
                    >{ el }</a>
                </li>               
            )
        })
        return list;
    }
    render() { 
        return (
            <div className = "TrainingsMenu">
                <ul className = "TRAININGS_older">
                    { this.genTrainingsMenuList() }
                </ul>                
                <button
                    className = "TrainingsMenu_but"
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
         ShowAnim : ( sub, ff ) => dispatch({ type : "SHOW_ANIM", sub: sub, fileName : ff, owner: 'TrainingsMenu'}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect (mapState, mapDispatch ) (TrainingsMenu);