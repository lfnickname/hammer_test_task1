import {FAILURE, FETCH_USERS, REQUEST, SUCCESS} from '../constants/Users'
  
  const initTheme = {
      entities: [],
      loading: null,
      loaded: null
  };
  
  const users = (state = initTheme, action) => {
    switch (action.type) {
        case FETCH_USERS + REQUEST:
            return {
            ...state,
            loading: true,
            }
        case FETCH_USERS + SUCCESS:
            return {
            ...state,
            entities: action.payload,
            loading: false,
            loaded: true,
            }
        case FETCH_USERS + FAILURE:
            console.log(action)
            return {
            ...state,
            loading:false,
            loaded: false,
            }
        default:
            return state;
    }
  };


export default users