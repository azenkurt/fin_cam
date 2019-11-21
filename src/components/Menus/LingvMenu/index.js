import React from 'react';
import './LingvMenu.css';

import { connect } from 'react-redux';

class LingvMenu extends React.Component {
    constructor ( props ) {
        super (props);
        this.state = {
            LingvList : [
                "Сложносочиненное предложение"
            ]
        }
    }
    renderLinkList () {
        let i = 0;
        let x = [];
        this.state.LingvList.forEach(element => {
            x.push (
                <div 
                    className = "LingvMenu_el"
                    id = {i}
                    onClick = {() => { this.props.ShowPDF( element ) }}
                    >
                    {element}
                </div>)
        i += 1;
        });
        return x;
    }
    render() {
        return (
            <div className = "LingvMenu">                
                { this.renderLinkList() }
                <button
                    className = "LingvMenu_but"
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
         ShowPDF : ( ff ) => dispatch({ type : "SHOW_PDF", sub: 'lingv' , fileName : ff, owner: 'LingvMenu'}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect(mapState, mapDispatch) (LingvMenu);