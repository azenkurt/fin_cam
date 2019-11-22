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
                    curAnim : action.fileName,
                    curOwner : action.owner};
            break;
        case "SWITCH_TO_TESTS_MENU" :
            state = { ...state, curScreen : "TestsMenu"};
            break;
        case "SWITCH_TO_TRAININGS_MENU" :
            state = { ...state, curScreen : "TrainingsMenu"};
            break;
        case "SWITCH_TO_SP_MENU" :
            state = { ...state, curScreen : "SPMenu"};
            break;
        case "SWITCH_TO_GAMES_MENU" :
            state = { ...state, curScreen : "GamesMenu"};
            break;
        case "SWITCH_TO_LINGV_MENU" :
            state = { ...state, curScreen : "LingvMenu"};
            break;
        case "SWITCH_TO_OLYMP_MENU" :
            state = { ...state, curScreen : "OlympMenu"};
            break;
        case "SWITCH_TO_LIBR_MENU" :
            state = { ...state, curScreen : "LibrMenu"};
            break;
        case "SWITCH_TO_AUDIO_MENU" :
            state = { ...state, curScreen : "AudioMenu"};
            break;
        case "SWITCH_TO_AUTHOR_MENU" :
            state = { ...state, 
                        curScreen : "Author",
                        numb : action.numb
                    };
            break;
        case "SWITCH_TO_YOUNG_MENU" :
            state = { ...state, curScreen : "YoungMenu"};
            break;
        case "SHOW_SLIDESHOW" :
            state = { ...state, 
                        cusScreen: "SlideShow",
                        photoArr : action.photoArr,
                        ownerTag : action.Tag
                    };
            break;
            
    }           
    return state;
}

export default initRed;