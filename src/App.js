import React from 'react';
import './App.css';

import MainMenu from './components/MainMenu';
import NPB from './components/Menus/NPBMenu';

import ShowPDF from './components/SubMenu/ShowPDF';

import { connect } from 'react-redux';
import AnimMenu from './components/Menus/AnimMenu';
import ShowAnim from './components/SubMenu/ShowAnim';
import TestsMenu from './components/Menus/TestsMenu';
import TrainingsMenu from './components/Menus/TrainingsMenu';
import SPMenu from './components/Menus/SPMenu';
import GamesMenu from './components/Menus/GamesMenu';
import LingvMenu from './components/Menus/LingvMenu';
import OlympMenu from './components/Menus/OlympMenu';
import LibrMenu from './components/Menus/LibrMenu';
import AudioMenu from './components/Menus/AudioMenu';
import Author from './components/MainMenu/Author';
import YoungMenu from './components/Menus/YoungMenu';

class App extends React.Component {
  showPage() {
    let comp = '';
    switch ( this.props.PropCurScreen ) {
      case 'MainMenu' : comp = <MainMenu />; break; 
      case 'NPB' : comp = <NPB />; break;    
      case 'ShowPDF' : comp = <ShowPDF />; break;
      case 'AnimMenu' : comp = <AnimMenu />; break;
      case 'ShowAnim' : comp = <ShowAnim />; break;
      case 'TestsMenu' : comp = <TestsMenu />; break;
      case 'TrainingsMenu' : comp = <TrainingsMenu />; break; 
      case 'SPMenu' : comp = <SPMenu />; break;
      case 'GamesMenu' : comp = <GamesMenu />; break;
      case 'LingvMenu' : comp = <LingvMenu />; break;
      case 'OlympMenu' : comp = <OlympMenu />; break;
      case 'LibrMenu' : comp = <LibrMenu />; break;
      case 'AudioMenu' : comp = <AudioMenu />; break;
      case 'Author' : comp = <Author />; break;
      case 'YoungMenu' : comp = <YoungMenu />; break;
    }
    return comp;
  }
  render() {
    return (
      <div className="App">   
        { this.showPage() }
    </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    PropCurScreen: state.curScreen
  }
}

export default connect(mapStateToProps) (App);
