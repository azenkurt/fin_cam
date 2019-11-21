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
            state = {...state, 
                    curScreen : "ShowPDF", 
                    curSub: action.sub, 
                    curPDF : action.fileName,
                    curOwner : action.owner};
            break;
        case "SWITCH_TO_ANIM_MENU" : 
            state = { ...state, curScreen : "AnimMenu"};
            break;
        case "SHOW_ANIM" :
            state = {...state, 
                    curScreen : "ShowAnim", 
                    curSub: action.sub, 
                    curANIM : action.fileName};
            break;
        case "SWITCH_TO_TESTS_MENU" :
            state = { ...state, curScreen : "TestsMenu"};
            break;
    }           
    return state;
}

export default initRed;