import { SET_DISE, SET_USER } from "../action/actions"
const initailState = {
    dise: [],
}
const reducers = (state = initailState, action) => {
    switch (action.type){
        case SET_DISE:
            return {
                dise:{dise: action.dise}
            }

        case SET_USER:
            return{
                user: {user: action.user}
            }
        default:
            return state
    }
}
export default reducers;