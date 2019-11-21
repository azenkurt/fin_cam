import React from 'react';
import './ShowAnim.css';

import { connect } from 'react-redux';

class ShowAnim extends React.Component {
    render() {
        return (
            <div className = "ShowAnim">                
                <iframe
                    className = "ShowAnim_screen"                   
                    src = {"/"+this.props.CurSub+"/"+this.props.CurFile + ".html"}                    
                    >                         
                    </iframe>

                 <button
                    className = "ShowAnim_but"
                    onClick = { ()=> this.props.BackToMenu( this.props.CurOwner) }>
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
    CurFile: state.curANIM,
    CurSub : state.curSub,
    CurOwner: state.curOwner
})
let mapDispatch = dispatch => {
    return {
        BackToMenu : ( owner ) => {
            switch ( owner ) {
                case 'AnimMenu' : dispatch ({ type : "SWITCH_TO_ANIM_MENU" }); break;
                case 'TrainingsMenu' : dispatch ({ type : "SWITCH_TO_TRAININGS_MENU" }); break;
            }                
        },
        BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})      
    }
}

export default connect(mapState, mapDispatch)(ShowAnim);