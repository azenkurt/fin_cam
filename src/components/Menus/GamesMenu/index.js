import React from 'react';
import './GamesMenu.css';

import { connect } from 'react-redux';

class GamesMenu extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            GamesList : [
                'Аматар слова',
                'Вандроўка ў Мудраград',
                'Палёт у казку'
            ]
        }
    }
    genGamesList() {
        let list = [];
        this.state.GamesList.forEach( el => {
            list.push(
                <li>
                    <a 
                className = "GamesMenu_el"
                onClick = { () => this.props.ShowAnim( 'Games', el ) }>{ el }</a>
                </li>
                
            )
        });
        return list;
    }
    render() {
        return (
            <div className = "GamesMenu">
                <ul className = "GamesMenu_older">
                { this.genGamesList() }
                </ul>                
                <button
                    className = "GamesMenu_but"
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
         ShowAnim : ( sub, ff ) => dispatch({ type : "SHOW_ANIM", sub: sub, fileName : ff, owner: 'GamesMenu'}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect (mapState, mapDispatch) (GamesMenu);