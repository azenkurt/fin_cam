import React from 'react';
import './NPBMenu.css';

import { connect } from 'react-redux';

class NPBMenu extends React.Component {
    constructor ( props ) {
        super (props);
        this.state = {
            fileList : [
                "ІМП 2019-2020",
                "ІМП 2019-2020-pril-2-bel-mova-i-lit",
                "ЮБІЛЯРЫ 2019-2020",
                "Тыпавы вучэб. план (ГАДЗІНЫ) 2019-2020",
                "Санітарныя нормы і правілы",
                "Правілы бел.арф.",
                "Палажэнне аб установе агульнай сярэдняй адукацыі",
                "Метадычныя рэкамендацыі па фарміраванні маўлення (слоўн. Дыкт)",
                "Кодакс Рэспублікі Беларусь аб адукацыі"
            ]
        }
    }
    renderLinkList () {
        let i = 0;
        let x = [];
        this.state.fileList.forEach(element => {
            x.push (
                <div 
                    className = "NPBMenu_el"
                    id = {i}
                    onClick = {() => { this.props.ShowPDF( element ) }}
                    >
                    {element}
                </div>)
        i += 1;
        });
        return x;
    }
    render() {
        return (
            <div className = "NPBMenu">                
                { this.renderLinkList() }
            </div>
        )
    }
}

const mapState = ( state ) => {

}
const mapDispatch = dispatch => {
    return {
         ShowPDF : ( ff ) => dispatch({ type : "SHOW_PDF", fileName : ff})
    }
}

export default connect(mapState, mapDispatch) (NPBMenu);