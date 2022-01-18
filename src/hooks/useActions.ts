import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import  * as ContactActionCreator from'../store/action_creators/contacts'

export const useActions = () => {                                 // оборачиваем асинхронный креертор дистпачем
    const dispatch = useDispatch()
    return bindActionCreators(ContactActionCreator, dispatch)
 }