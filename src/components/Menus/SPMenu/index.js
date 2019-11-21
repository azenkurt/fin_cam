import React from 'react';
import './SPMenu.css';

import { connect } from 'react-redux';

class SPMenu extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            SPList : [
                "Верш_Разон П"
            ]
        }
    }
    genTestsList() {
        let list = [];
        this.state.SPList.forEach( el => {
            list.push(
                <div 
                className = "SPMenu_el"
                onClick = { () => this.props.ShowPDF( 'SP', el ) }>{ el }</div>
            )
        });
        return list;
    }
    render() {
        return (
            <div className = "SPMenu">
                { this.genTestsList() }
                <button
                    className = "SPMenu_but"
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
         ShowPDF : ( sub, ff ) => dispatch({ type : "SHOW_PDF", sub: sub, fileName : ff, owner: 'SPMenu'}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect (mapState, mapDispatch) (SPMenu);