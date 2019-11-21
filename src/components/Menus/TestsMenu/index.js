import React from 'react';
import './TestsMenu.css';

import { connect } from 'react-redux';

class TestsMenu extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            testsList : [
                "1"
            ]
        }
    }
    genTestsList() {
        let list = [];
        this.state.testsList.forEach( el => {
            list.push(
                <div 
                className = "TestsMenu_el"
                onClick = { () => this.props.ShowPDF( 'tests/lang', el ) }>{ el }</div>
            )
        });
        return list;
    }
    render() {
        return (
            <div className = "TestsMenu">
                { this.genTestsList() }
                <button
                    className = "TestsMenu_but"
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
         ShowPDF : ( sub, ff ) => dispatch({ type : "SHOW_PDF", sub: sub, fileName : ff, owner: 'TestsMenu'}),
         BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect(mapState, mapDispatch) (TestsMenu);