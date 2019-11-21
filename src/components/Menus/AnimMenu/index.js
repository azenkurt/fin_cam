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
                <div 
                    className = "AnimMenu_anim"
                    onClick = { () => {this.props.ShowAnim(el)} }>{el}</div> 
            )
        })
        return list;
    };
    render() {
        return (
            <div className = "AnimMenu">
                <div className = "AnimMenu_cont">
                    { this.genLinkList() }  
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
         ShowAnim : ( ff ) => dispatch({ type : "SHOW_ANIM", fileName : ff}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}
export default connect( mapState, mapDispatch) (AnimMenu);