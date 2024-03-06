import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItem from "../../components/CartItem";

export interface CartItem {
  id: number;
  quantity: number;
  subprices : number;
  price :number;
  TotalPrice: number;
  color:any;
}

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload);
      console.log(action.payload);

      
    },
    
    remove: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.subprices = item.subprices + item.price
 
      }
      

    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.subprices = item.subprices - item.price;

      }
    },
    // color: (state,action: PayloadAction){
      
    // }
  },
});

export const { add, remove,increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;






// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export interface CartItem {
//   id: number;
//   name: string;
//   // Add other properties if needed
//   quantity: number;
// }

// interface CartState {
//   items: CartItem[];
//   counter: number;
//   productIds: number[]; // Array to store product IDs
// }

// const initialState: CartState = {
//   items: [],
//   counter: 0,
//   productIds: [], // Initialize product IDs array
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem: (state, action: PayloadAction<CartItem>) => {
//       const { id } = action.payload;
//       const existingItem = state.items.find(item => item.id === id);
//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         state.items.push(action.payload);
//         state.productIds.push(id); // Add product ID to the array
//       }
//       state.counter++;
//     },
//     removeItem: (state, action: PayloadAction<number>) => {
//       const index = state.items.findIndex(item => item.id === action.payload);
//       if (index !== -1) {
//         state.items.splice(index, 1);
//         state.counter--;
//         state.productIds = state.productIds.filter(productId => productId !== action.payload); // Remove product ID from the array
//       }
//     },
//     increaseQuantity: (state, action: PayloadAction<number>) => {
//       const item = state.items.find(item => item.id === action.payload);
//       if (item) {
//         item.quantity++;
//       }
//     },
//     decreaseQuantity: (state, action: PayloadAction<number>) => {
//       const item = state.items.find(item => item.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity--;
//       }
//     },
//   },
// });

// export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
// export default cartSlice.reducer;

