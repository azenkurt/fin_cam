import React from 'react';
import "./Author.css";

class Author extends React.Component {
    constructor (props) {
        super();
    }
    render() {
        return (
            <div className = "Author">
                { this.props.name }
            </div>
        )
    }
}

export default Author;