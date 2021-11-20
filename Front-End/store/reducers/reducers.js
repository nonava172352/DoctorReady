import { SET_DISE } from "../action/actions"

const initailState = [{
    dise: [],

}]

const disease = (state = initailState, action)=>{
    switch (action.type){
        case SET_DISE:
            return {
                dise:action.dise
            }


        default:
            return state
    }
}
export default disease