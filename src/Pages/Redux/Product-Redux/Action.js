import axios from "axios"
import { ERROR, LOADING, SUCCESS } from "./ActionType";


export const fetchData = (dispatch) => {
    dispatch({type : LOADING})
    axios.get(`https://fakestoreapi.com/products`)
    .then((res)=>{
        console.log(res.data);
        dispatch({type : SUCCESS,payload : res.data});
    })
    .catch((err)=>{
        console.log(err);
        dispatch({type : ERROR})
    })

}  