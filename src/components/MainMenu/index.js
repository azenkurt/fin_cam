import React from 'react';
import "./MainMenu.css";

import Author from './Author';

import { connect } from 'react-redux';

class MainMenu extends React.Component {    
    constructor ( props ) {
       super( props );
       this.state = {};
    }
    genAuthorList() {
       let list = [];
       [0,1,2,3,4].forEach( el => {
          list.push (
             <div 
               className = "Authors_author"
               onClick = { () => this.props.switchToAuthor ( el ) }>
               </div>
          )
       })
       return list;
    }
    render() {
        return (
            <div className = "MainMenu">    
                <div className = "Authors">
                    { this.genAuthorList() }
                </div>           
             <div 
                className = "But L n00"
                onClick = { () => this.props.switchNPBMenu () }
                ><p>Нарматыўна-прававая база</p></div>
             <div 
                className = "But L n0"
               onClick = {() => this.props.switchAnimMenu ()} 
                ><p>Анімацыі</p></div>
             <div 
                className = "But L n1"
                onClick = { () => this.props.switchTestsMenu () }
                ><p>Тэсты</p></div>
             <div 
                className = "But L n2"
                onClick = { () => this.props.switchTrainingsMenu () }
                ><p>Трэнінгі</p></div>
             <div 
                className = "But L n3"
                onClick = { () => this.props.switchSPMenu () }
                ><p>Спробы пяра</p></div>
     
             <div 
                className = "But R n00"
                onClick = { () => this.props.switchGamesMenu () }
                ><p>Аўтарскія гульні</p></div>
             <div 
                className = "But R n0"
                onClick = { () => this.props.switchOlympMenu () }
                ><p>Алімпіядныя заданні</p></div>
             <div 
                className = "But R n1"
                onClick = { () => this.props.switchLingvMenu () }
                ><p>Лінгвістычныя заданні</p></div>
             <div 
                className = "But R n2"
                onClick = { () => this.props.switchLibrMenu () }
                ><p>Бібліятэка</p></div>
             <div 
                className = "But R n3"
                onClick = { () => this.props.switchAudioMenu () }
                ><p>Аўдыёлітаратура</p></div>
             <div                 
                onClick = { () => this.props.switchYoungMenu () }
                ><p>Young</p></div>
            </div>            
        )
    }
}

const mapState = ( state ) => ({

})
const mapDispatch = dispatch => {
    return {
        switchAnimMenu : () => dispatch({ type : 'SWITCH_TO_ANIM_MENU'}),
        switchNPBMenu : () => dispatch ({ type : 'SWITCH_TO_NPB_MENU'}),
        switchAudioMenu : () => dispatch ({ type : 'SWITCH_TO_AUDIO_MENU'}),
        switchGamesMenu : () => dispatch ({ type : 'SWITCH_TO_GAMES_MENU'}),
        switchLibrMenu : () => dispatch ({ type : 'SWITCH_TO_LIBR_MENU'}),
        switchLingvMenu : () => dispatch ({ type : 'SWITCH_TO_LINGV_MENU'}),
        switchOlympMenu : () => dispatch ({ type : 'SWITCH_TO_OLYMP_MENU'}),
        switchSPMenu : () => dispatch ({ type : 'SWITCH_TO_SP_MENU'}),
        switchTestsMenu : () => dispatch ({ type : 'SWITCH_TO_TESTS_MENU'}),
        switchTrainingsMenu : () => dispatch ({ type : 'SWITCH_TO_TRAININGS_MENU'}),
        switchYoungMenu : () => dispatch ({ type : 'SWITCH_TO_YOUNG_MENU'}),
        switchToAuthor :( n ) => dispatch({ type : 'SWITCH_TO_AUTHOR_MENU' , numb : n })
    }
}

export default connect( mapState, mapDispatch) (MainMenu);