import React from 'react';
import './AuthorPhotoShow.css';

import { connect } from 'react-redux';

class AuthorPhotoShow extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            curIndex : 0,
            curPhoto : this.props.curArr[ 0 ]
        }
    }
    moveLeft() {            
        if ( this.state.curIndex === 0) {            
            this.setState({
                    curIndex : this.props.curArr.length -1,
                    curPhoto : this.props.curArr[ this.state.curIndex ]})
        }
        else {
            this.setState({ 
                curIndex : this.state.curIndex - 1,
                curPhoto : this.props.curArr [ this.state.curIndex ]})
        }
    }
    moveRight () {
        if ( this.state.curIndex === this.props.curArr.length -1) {            
            this.setState({
                    curIndex : 0,
                    curPhoto : this.props.curArr[ this.state.curIndex ]})
        }
        else {
            this.setState({ 
                curIndex : this.state.curIndex + 1,
                curPhoto : this.props.curArr [ this.state.curIndex ]})
        } 
    }
    render() {
        return (
            <div className = "AuthorPhotoShow">
                <button
                  onClick = { ()=> this.moveLeft() }> {'<-'}
                </button>
                <button
                  onClick = { ()=> this.moveRight() }> {'->'}
                </button>
                <img
                    className = "AuthorPhotoShow_img"
                    src = {"/author/"+this.props.curTag+"/photo/"+this.state.curPhoto+".jpg"}></img>
                <button
                    className = "AuthorPhotoShow_back"
                    onClick = { ()=> this.props.BackToMainMenu() }>
                    Вярнуцца да галоўнага меню
                </button>                
            </div>
        )
    }
}

const mapState = (state) => ({
    curTag : state.ownerTag,
    curArr : state.photoArr
})

const mapDispatch = dispatch => {
    return {      
        BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})
    }
}

export default connect (mapState, mapDispatch) (AuthorPhotoShow);