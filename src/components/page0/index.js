import React from 'react';

import { connect } from 'react-redux';

class Page0 extends React.Component {
    render() {
        return (
            <div
                onClick = {()=> this.props.SwitchToPage1() }>
                    page0</div>
        )
    }
} 

let mapState = ( state ) => {

}

let mapDispatch = dispatch =>{
    return {
        SwitchToPage1 : () =>dispatch({ type : "PAGE1"})
    }
}

export default connect(mapState, mapDispatch) (Page0);