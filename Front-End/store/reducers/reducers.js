import { SET_DISE, SET_USER } from "../action/actions"

const initailState = [{
    dise: [],
    user: []

}]

const disease = (state = initailState, action)=>{
    switch (action.type){
        case SET_DISE:
            return {
                dise:action.dise
            }
        case SET_USER:
            return{
            user:action.user
            }    
        default:
            return state
    }
}
export default disease