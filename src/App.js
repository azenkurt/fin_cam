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
