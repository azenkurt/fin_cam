import React from 'react';
import './LibrMenu.css';

import { connect } from 'react-redux';

class LibrMenu extends React.Component {
    constructor ( props ) {
        super (props);
        this.state = {
            LibrList : [
                "І.Шамякін Сэрца на далоні 3"
            ]
        }
    }
    renderLinkList () {
        let i = 0;
        let x = [];
        this.state.LibrList.forEach(element => {
            x.push (
                <div 
                    className = "LibrMenu_el"
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
            <div className = "LibrMenu">                
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
         ShowPDF : ( ff ) => dispatch({ type : "SHOW_PDF", sub: 'libr' , fileName : ff, owner: 'LingvMenu'}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect(mapState, mapDispatch) (LibrMenu);