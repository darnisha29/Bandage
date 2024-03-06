
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import products from "../../ProductData";

interface Product {
  id: number;
  category: string;
  Brand: string;
  price: number;
}

interface FilterState {
  filterdata: Product[];
  
  
}

export const initialState: FilterState = {
  filterdata: [...products],
 
  
};

export const filterSlice = createSlice({
    name: "filtered product",
    initialState,
    reducers: {
    
    three: (state, action: PayloadAction<{ categories: string; pricefilter: number[]; brand: { [key: string]: boolean } }>) => {
      const { categories, pricefilter, brand } = action.payload;
    
      state.filterdata = [...products];
      console.log("in slice befor-------",state.filterdata);
      console.log("cate:",categories);
      console.log("brsnd:",brand);
      console.log("price:",pricefilter);
      state.filterdata = [...products];

      if(categories == '' ){
        state.filterdata = [...products];
        const [minPrice, maxPrice] = pricefilter;
          state.filterdata = state.filterdata.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
          );
      }
      if(categories != '' ){
        console.log("-----------------")
        console.log("categories are  defined")
        state.filterdata = [...products];
        state.filterdata = state.filterdata.filter((data) => {
          return data.category == categories;

          

        })
        const [minPrice, maxPrice] = pricefilter;
          state.filterdata = state.filterdata.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
          );
      }
      if(categories == '' || categories == 'All'  && Object.keys(brand).length != 0){
        state.filterdata = [...products];

        const [minPrice, maxPrice] = pricefilter;
          state.filterdata = state.filterdata.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
          );
        if (Object.keys(brand).length != 0) {
          // Object is empty
      

          const checkedBrands = Object.entries(brand)
          .filter(([key, value]) => value !== false)
          .map(([key]) => key);
          if (checkedBrands.includes("All")) {
            // state.filterdata = [...products];
            console.log("hello")
          } else {
            console.log("bye")
            state.filterdata = state.filterdata.filter((data) =>
              checkedBrands.includes(data.Brand)
            );
          }
        }
      }

      if(categories != ''  && Object.keys(brand).length != 0){
        state.filterdata = [...products];
        state.filterdata = state.filterdata.filter((data) => {
          return data.category === categories;

          
        })

        if(categories == '' && Object.keys(brand).length === 0){
          const [minPrice, maxPrice] = pricefilter;
          state.filterdata = state.filterdata.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
          );
        }
        if (Object.keys(brand).length != 0) {
          // Object is empty
      

          const checkedBrands = Object.entries(brand)
          .filter(([key, value]) => value !== false)
          .map(([key]) => key);
          if (checkedBrands.includes("All")) {
            // state.filterdata = [...products];
            console.log("hello")
          } else {
            console.log("bye")
            state.filterdata = state.filterdata.filter((data) =>
              checkedBrands.includes(data.Brand)
            );
          }

        }
        
          const [minPrice, maxPrice] = pricefilter;
          state.filterdata = state.filterdata.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
          );
        
          

      }

     
    }
    
    
  }
   
});

export const { three } = filterSlice.actions;
export default filterSlice.reducer;





 // if(categories && categories && pricefilter ){
      //   state.filterdata = state.filterdata.filter((data) => {
      //     return data.category === categories;
      //   })
       
      // }

      // state.filterdata = state.filterdata.filter((data) => {
      //   return data.category === categories;
      // });
    
      // const checkedBrands = Object.entries(brand)
      //   .filter(([key, value]) => value !== false)
      //   .map(([key]) => key);
    
      // if (checkedBrands.includes("All")) {
      //   state.filterdata = [...products];
      //   console.log("hello")
      // } else {
      //   console.log("bye")
      //   state.filterdata = state.filterdata.filter((data) =>
      //     checkedBrands.includes(data.Brand)
      //   );
      // }
    
      // const [minPrice, maxPrice] = pricefilter;
      // state.filterdata = state.filterdata.filter(
      //   (product) => product.price >= minPrice && product.price <= maxPrice
      // );

      // console.log("in slice-------------",state.filterdata);



// addTo: (state, action: PayloadAction<string>) => {
            
    //   state.filterdata = [...products];
    //   state.filterdata = state.filterdata.filter((data) => {
    //     return data.category === action.payload;
    //   });
    // },
    // brandTo: (state, action: PayloadAction<{ [key: string]: boolean }>) => {
    //   state.filterdata = [...products];
    //   const checkedBrands = Object.entries(action.payload)
    //     .filter(([key, value]) => value === true)
    //     .map(([key]) => key);

    //   if (checkedBrands.includes("All")) {
    //     state.filterdata = [...products];
    //   } else {
    //     state.filterdata = state.filterdata.filter((data) =>
    //       checkedBrands.includes(data.Brand)
    //     );
    //   }
    // },
    // price: (state, action: PayloadAction<number[]>) => {
    //   const [minPrice, maxPrice] = action.payload;
    //   state.filterdata = [...products].filter(
    //     (product) => product.price >= minPrice && product.price <= maxPrice
    //     );
    //     console.log(state.filterdata);
    //     // return  state.filterdata;
    // },