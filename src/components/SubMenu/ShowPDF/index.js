import React from 'react';
import './ShowPDF.css';

import { connect } from 'react-redux';

class ShowPDF extends React.Component {
    render() {
        return (
            <div className = "PDF">
                <embed 
                    src = {"/pdf/"+this.props.CurSub +"/" + this.props.CurFile+".pdf"}
                    width = "1000px"
                    height = "650px"
                    type = "application/pdf"></embed>
                <button
                    className = "ShowPDF_but"
                    onClick = { ()=> this.props.BackToMenu( this.props.CurOwner ) }>
                    Вярнуцца да выбару дакумента
                </button>
                <button
                    className = "ShowPDF_but2"
                    onClick = { ()=> this.props.BackToMainMenu() }>
                    Вярнуцца да галоўнага меню
                </button>
            </div>
        )
    }
}

let mapState = ( state ) => ({
    CurFile: state.curPDF,
    CurSub : state.curSub,
    CurOwner : state.curOwner
})
let mapDispatch = dispatch => {
    return {
        BackToMenu : ( owner ) => {
                switch ( owner ) {
                    case 'NPBMenu' : dispatch ({ type : "SWITCH_TO_NPB_MENU" }); break;
                    case 'TestsMenu' : dispatch ({ type : "SWITCH_TO_TESTS_MENU" }); break;
                }                
            },
        BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})      
    }
}
export default connect(mapState, mapDispatch) (ShowPDF);
