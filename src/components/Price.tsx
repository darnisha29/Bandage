// import React, { FC, useState } from "react";
// import "../pages/ProductListing.css";
// import RangeSlider from "react-range-slider-input";
// import { useDispatch } from "react-redux";
// // import { price } from "../filters/filtred-product/filterSlice";

// interface PriceProps {
//   onPriceChange: (priceRange: number[]) => void;
// }

// const Price: FC<PriceProps> = () => {
//   const [value, setValue] = useState<number[]>([0, 1000]); // Set initial price range
//   const dispatch = useDispatch();

//   const handlePriceChange = (newValue: number[]) => {
//     setValue(newValue);
//     onPriceChange(newValue);
//   };

//   return (
//     <div>
//       <p className={"price_text"}>Price</p>
//       <div className={"range-slider-container"}>
//         <RangeSlider min={0} max={1000} value={value} onInput={handlePriceChange} />
//         <div className={"value_container"}>
//           <p>${value[0]}</p>
//           <p>${value[1]}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Price;
















import { FC, useEffect, useState } from "react";
import "../pages/ProductListing.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useDispatch, useSelector } from "react-redux"; // Importing useSelector
// import { price } from "../filters/filtred-product/filterSlice";
import { RootState } from "../filters/store";
import { Dispatch } from "react";
import { SetStateAction } from "react";
interface PriceProps {
  handlePriceChange: (newPriceRange: number[]) => void;
  value:number[];
  setValue: Dispatch<SetStateAction<number[]>>

}
const Price = ({handlePriceChange,value,setValue} : PriceProps) => {
  // const [value, setValue] = useState<number[]>([10, 500]);
  const dispatch = useDispatch();

  // Accessing filtered data from the Redux store
  const filteredProducts = useSelector((state: RootState) => state.filter.filterdata);
  

  // const handlePriceChange = (newValue: number[]) => {
  //   console.log("priceChange called..........");
  //   dispatch(price(newValue));
  // };

  // useEffect(() => {
  //   console.log("fbdhj");
  // }, [])
  // useEffect(() => {
  //   console.log("fbdhj");
  // }, [])

  return (
    <div>
      <p className={"price_text"}>Price</p>
      <div className={"range-slider-container"}>
        <RangeSlider min={0} max={2000} value={value}  onInput={setValue}  onThumbDragStart={ () => handlePriceChange(value)} />
        
        <div className={'value_container'}>
          <p>${value[0]}</p>
          <p>${value[1]}</p>
        </div>

      </div>
      {/* Displaying filtered data */}
     
    </div>
  );
}

export default Price;
