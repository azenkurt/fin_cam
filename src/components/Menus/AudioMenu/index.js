import React from 'react';
import './AudioMenu.css';

import { connect } from 'react-redux';

class AudioMenu extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            AudioList : [
                'Багдановіч Зорка Венера'
            ]
        }
    };
    genAudioList () {
        let list = [];
        this.state.AudioList.forEach( el => {
            list.push(
                <audio
                    className = "AudioMenu_el"
                    controls>
                        <source src = {"/audio/"+el+".mp3"}></source>
                    </audio>
                    
            )
        });
        return list
    }
    render() {        
        return (
            <div className = "AudioMenu">
                { this.genAudioList() }
                <button
                    className = "AudioMenu_but"
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
        BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect(mapState, mapDispatch) (AudioMenu);