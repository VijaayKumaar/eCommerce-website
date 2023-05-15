// import axios from "axios";
// import * as actiontype from "../action//reducers/constants/productConstant"

// const URL ='http://localhost:5000';
// export const getProduts = ()=> async(dispatch)=>{
//     try{
//      const {data}= await axios.get(`${URL}/products`);
     
//      dispatch({type:actiontype.GET_PRODUCTS_SUCCESS,payload:data})
   
//     }catch(error){
       
//     dispatch({type:actiontype.GET_PRODUCTS_FAIL,payload: error.massage})
// }
// }


// export const getprodutsDetails=(id)=> async(dispatch)=>{
//     try{
//      dispatch({type:actiontype.GET_PRODUCT_DETAILS_REQUEST})   
//      const {data}= await axios.get(`${URL}/product/${id}`);
//      dispatch({type:actiontype.GET_PRODUCT_DETAILS_SUCCESS,payload:data})
//      dispatch({type:actiontype.GET_PRODUCT_DETAILS_FAIL,payload:data})
//     } catch(error){
//      console.log(error.message);
//     }
// }