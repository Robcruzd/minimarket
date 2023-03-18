import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/product";

const initialState: IProduct[] = [];

export const productsSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productExist = state.find((element:any) => element.id === action.payload.id);
            if(productExist) {
                const position = state.findIndex(element => element.id === productExist.id);
                state[position].quantity++;
            }else{
                const product = {
                    id: action.payload.id, 
                    name: action.payload.name,
                    price: action.payload.price,
                    description: action.payload.description,
                    urlImage: action.payload.urlImage,
                    quantity: 1,
                };
                state.push(product);
            }
        },
        rmProduct: (state, action) => {
            const productExist = state.find((element:any) => element.id === action.payload.id);
            if(productExist && productExist.quantity>1) {
                const position = state.findIndex(element => element.id === productExist.id);
                state[position].quantity--;
            }else if(productExist && productExist.quantity===1){
                const position = state.findIndex(element => element.id === action.payload.id);
                state.splice(position,1);
            }
        }
    }
})

export const {addProduct, rmProduct} = productsSlice.actions;

export default productsSlice.reducer;