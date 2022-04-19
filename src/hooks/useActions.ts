import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import  * as ContactActionCreator from'../store/action_creators/contacts'
import  * as UserActionCreator from "../store/action_creators/user"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ContactActionCreator, dispatch)
 }

export const useActionsUser = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreator, dispatch)
}

// export const useActionsUserLogo = () => {
//     const dispatch = useDispatch()
//     return bindActionCreators(UserActionCreator, dispatch)
// }