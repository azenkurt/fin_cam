import InitState from './initState';

let initRed = ( state = InitState, action) => {
    switch ( action.type ) {
        case "MAIN_MENU" : 
            state = { ...state, curScreen : "MainMenu" };
            break;
        case "PAGE0" : 
            state = { ...state, curScreen : "page0" };
            break;
        case "SWITCH_TO_NPB_MENU" :
            state = { ...state, curScreen : "NPB"};
            break;
        case "SHOW_PDF" :
            state = {...state, curScreen : "ShowPDF", curPDF : action.fileName};
            break;
    }           
    return state;
}

export default initRed;