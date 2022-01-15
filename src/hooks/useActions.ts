import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import  * as ContactActionCreator from'../store/action_creators/contacts'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ContactActionCreator, dispatch)
 }