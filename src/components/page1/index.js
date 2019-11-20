import React from 'react';

import { connect } from 'react-redux';

class Page1 extends React.Component {
    render() {
        return (
            <div
                onClick = { ()=> this.props.SwitchToPage0() }>page1</div>
        )
    }
} 


let mapState = ( state ) => {

}

let mapDispatch = dispatch =>{
    return {
        SwitchToPage0 : () =>dispatch({ type : "PAGE0"})
    }
}

export default connect(mapState, mapDispatch) (Page1);