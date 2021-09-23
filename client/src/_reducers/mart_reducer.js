import * as actionTypes from "./actions";
import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    INCREMENT_PRODUCT,
    DECREMENT_PRODUCT,
    ADD_MART_INFO,
    RESET_PRODUCT
} from '../_actions/types';
// products: [{name: "진라면", total_price : 3000, count : 1}]
const initialState = {
    mart: "",
    products: [],
    total_price: 0, 
    product_number: 0
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.RESET_PRODUCT: {
            return {
                mart: "",
                products: [],
                total_price: 0, 
                product_number: 0
            }
        }

        case actionTypes.ADD_MART_INFO: { 
            return { 
                ...state, 
                restaurant : action.mart_info 
            } 
        } 

        case actionTypes.INCREMENT_PRODUCT: {
            let updatedProducts = [...state.products];
            for(let i = 0; i < updatedProducts.length; i++) {
                if(updatedProducts[i].id === action.incremented_product_id) {
                    updatedProducts[i].count += 1;
                    updatedProducts[i].total_price = updatedProducts[i].count * updatedProducts[i].price;
                }
            }

            return {
                ...state, 
                products : updatedProducts,
                total_price : calcTotalPrice(updatedProducts),
                product_number : calcNumberOfProducts(updatedProducts)
            }
        }

        case actionTypes.DECREMENT_PRODUCT: {
            let updatedProducts = [...state.products];
            for(let i = 0; i < updatedProducts.length; i++) {
                if(updatedProducts[i].id === action.decremented_product_id) {
                    if(updatedProducts[i].count > 1) {
                        updatedProducts[i].count -= 1;
                        updatedProducts[i].total_price = updatedProducts[i].count * updatedProducts[i].price;
                    }
                }
            }

            return {
                ...state, 
                products : updatedProducts,
                total_price : calcTotalPrice(updatedProducts),
                product_number : calcNumberOfProducts(updatedProducts)
            }
        }

        case actionTypes.ADD_PRODUCT: {

            let updatedProducts = [
                ...state.products
            ]
            
            for(let i = 0; i < updatedProducts.length; i++) {
                if(updatedProducts[i].id === action.added_Product.id) {
                    updatedProducts[i].count += 1;
                    updatedProducts[i].total_price = updatedProducts[i].count * updatedProducts[i].price;
                    return {
                        ...state,
                        products: updatedProducts,
                        total_price : calcTotalPrice(updatedProducts),
                        product_number : calcNumberOfProducts(updatedProducts)
                    }
                }   
            }

            updatedProducts.push(action.added_product)
            
            return {
                ...state, 
                products: updatedProducts,
                total_price : calcTotalPrice(updatedProducts),
                product_number : calcNumberOfProducts(updatedProducts)
            }
        }

        case actionTypes.REMOVE_PRODUCT: {

            let updatedProducts = [
                ...state.products
            ]
            
            for(let i = 0; i < updatedProducts.length; i++) {
                if(updatedProducts[i].id === action.removed_product_id) {
                    updatedProducts.splice(i, 1)
                }   
            }
            
            return {
                ...state, 
                Products: updatedProducts,
                total_price : calcTotalPrice(updatedProducts),
                Product_number : calcNumberOfProducts(updatedProducts)
            }
        }

        default:
            return state;
    }
};

const calcTotalPrice = (products) => {
    let totalPrice = 0;
    for(let i = 0; i < products.length; i++) {
        totalPrice += products[i].total_price;
    }
    return totalPrice;
}

const calcNumberOfProducts = (products) =>{
    
    let product_count = 0
    for(let i = 0; i < products.length; i++) {
        product_count += products[i].count;
    }
    return product_count;
}

export default mart_reducer;