import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FavItem {
  id: number;
  // Define other properties here...
}

const initialState: FavItem[] = [];

export const WishListSlice = createSlice({
  name: "Whishlist",
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<FavItem>) => {
        console.log("addFav calling......",action.payload);
        state = [...state, action.payload];
   
      console.log("after adding  fav item to wishlist : ",state);
      return state
    },
    removeFav: (state, action: PayloadAction<number>) => {
      state = state.filter((item) => item.id !== action.payload);
      console.log("after removing fav item to wishlist : ",state);
      return state
    },
  },
});

export const { addFav, removeFav } = WishListSlice.actions;
// Selectors
export const selectWishlist = (state: RootState) => state.Whishlist;

export default WishListSlice.reducer;
