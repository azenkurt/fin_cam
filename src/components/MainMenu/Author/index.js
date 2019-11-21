import React from 'react';
import "./Author.css";

import { connect } from 'react-redux';

class Author extends React.Component {
    constructor (props) {
        super();        
        this.state = {
            authorsData :[
                {
                    "Name" : "Name0"
                }
            ]
        }
    }
    render() {
        return (
            <div className = "Author">
                { this.state.authorsData[this.props.AuthorNum].Name }
                <button
                    className = "Author_but"
                    onClick = { ()=> this.props.BackToMainMenu() }>
                    Вярнуцца да галоўнага меню
                </button>
            </div>
        )
    }
}


const mapState = ( state ) => ({
    AuthorNum : state.numb
})
const mapDispatch = dispatch => {
    return {       
        BackToMainMenu : () => dispatch ({ type : "MAIN_MENU"})        
    }
}

export default connect(mapState, mapDispatch) (Author);