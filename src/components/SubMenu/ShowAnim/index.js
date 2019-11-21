import React from 'react';
import './ShowAnim.css';

import { connect } from 'react-redux';

class ShowAnim extends React.Component {
    render() {
        return (
            <div className = "ShowAnim">                
                <iframe
                    className = "ShowAnim_screen"                   
                    src = {"/anim/"+this.props.CurFile + ".html"}                    
                    >                         
                    </iframe>

                 <button
                    className = "ShowAnim_but"
                    onClick = { ()=> this.props.BackToAnimMenu() }>
                    Вярнуцца да выбару анімацыі
                </button>
                <button
                    className = "ShowAnim_but2"
                    onClick = { ()=> this.props.BackToMainMenu() }>
                    Вярнуцца да галоўнага меню
                </button>
            </div>
        )
    }
}

let mapState = ( state ) => ({
    CurFile: state.curANIM
})
let mapDispatch = dispatch => {
    return {
        BackToAnimMenu : () => dispatch ({ type : "SWITCH_TO_ANIM_MENU" }),
        BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})      
    }
}

export default connect(mapState, mapDispatch)(ShowAnim);