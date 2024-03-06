import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import products from "../../ProductData";

interface BestSeller {
  id: number;
  category: string;
  Brand: string;
  price: number;
}

interface BestSellerData {
    BestSellerData: BestSeller[];
  
  
}

export const initialState: BestSellerData = {
    BestSellerData: [...products],
 
  
};

export const BestSellerSlice = createSlice({
    name: "BestSeller",
    initialState,
    reducers: {}
});

export default BestSellerSlice.reducer;

    