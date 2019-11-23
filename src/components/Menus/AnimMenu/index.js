import React from 'react';
import './AnimMenu.css';

import { connect } from 'react-redux';

class AnimMenu extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            animList : [
                'Cкладаныя сказы',
                'Аднасастаўныя сказы',
                'Аднасастаўныя і двухсастаўныя сказы',
                'Мастація сродкі',
                'Партэты'
            ]
        }
    }
    genLinkList() {
        let list = [];
        this.state.animList.forEach ( el => {
            list.push (
                <li>
                    <a 
                    className = "AnimMenu_anim"
                    onClick = { () => {this.props.ShowAnim( 'AnimMenu', 'tests', el)} }>{el}</a> 
                </li>                
            )
        })
        return list;
    };
    render() {
        return (
            <div className = "AnimMenu">
                <div className = "AnimMenu_cont">
                    <ul className = "ANIM_older">
                    { this.genLinkList() }  
                    </ul>                   
                </div>
                <button
                    className = "AnimMenu_but"
                    onClick = { ()=> this.props.BackToMainMenu() }>
                    Вярнуцца да галоўнага меню
                </button>
            </div>
        )
    }
}

const mapState = ( state ) => ({

})
const mapDispatch = dispatch => {
    return {
         ShowAnim : ( owner, sub, ff ) => dispatch({ type : "SHOW_ANIM", owner: owner, sub : sub, fileName : ff}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}
export default connect( mapState, mapDispatch) (AnimMenu);