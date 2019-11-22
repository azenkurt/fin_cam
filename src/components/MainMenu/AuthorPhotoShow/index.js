import React from 'react';
import './AuthorPhotoShow.css';

import { connect } from 'react-redux';

class AuthorPhotoShow extends React.Component {
    constructor ( props ) {
        super ( props );
    }
    render() {
        return (
            <div className = "AuthorPhotoShow">
                !!!
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
        BackToOwner : () => dispatch({ type : ""}),
        BackToMain : () => dispatch({ type : "SWITCH_TO_MAIN_MENU"})
    }
}

export default connect (mapState, mapDispatch) (AuthorPhotoShow);