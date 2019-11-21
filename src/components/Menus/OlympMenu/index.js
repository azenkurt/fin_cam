import React from 'react';
import './OlympMenu.css';

import { connect } from 'react-redux';

class OlympMenu extends React.Component {
    constructor ( props ) {
        super (props);
        this.state = {
            OlympList : [
                "Комплексная работа 8_кл"
            ]
        }
    }
    renderLinkList () {
        let i = 0;
        let x = [];
        this.state.OlympList.forEach(element => {
            x.push (
                <div 
                    className = "OlympMenu_el"
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
            <div className = "OlympMenu">                
                { this.renderLinkList() }
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
         ShowPDF : ( ff ) => dispatch({ type : "SHOW_PDF", sub: 'olymp' , fileName : ff, owner: 'LingvMenu'}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect(mapState, mapDispatch) (OlympMenu);