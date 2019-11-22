import React from 'react';
import "./Author.css";

import { connect } from 'react-redux';

class Author extends React.Component {
    constructor (props) {
        super();        
        this.state = {
            authorsData :[
                {
                    "Name" : "Name0",
                    "bio" : "ddddd"
                }
            ]
        }
    }
    render() {
        return (
            <div className = "Author">
                <p className = "Author_header">{ this.state.authorsData[this.props.AuthorNum].Name }</p>
                <div 
                    className = "Author_photo">
                        <button 
                            className = "Author_photo_but">Усе фота</button>
                    </div>
                <video
                    width = "300px"
                    height = "200px" />
            <p>{ this.state.authorsData[this.props.AuthorNum].bio}</p>

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