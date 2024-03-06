import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { remove ,increaseQuantity, decreaseQuantity} from '../filters/filtred-product/CartSlice';
import './CartItem.css';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Dispatch, SetStateAction } from 'react';
// import './Product.css';


// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { Dispatch, SetStateAction } from 'react';
// import './CartItem.css';
// import { remove } from '../filters/filtred-product/CartSlice'; 
// import { addItem, removeItem,increaseQuantity, decreaseQuantity  } from "../filters/filtred-product/CartSlice";
// import { CartItem } from '../filters/filtred-product/CartSlice';


// interface CartItemProps {
//   item: {
//     id: number;
//     name: string;
//     image: string;
//     title: string;
//     description: string;
//     price: number;
//   };
//   itemIndex: number;
// }
export interface CartItemProps {
  item: {
    id: number;
    name:string
    image: string;
    title: string;
    description: string;
    price: number;
    quantity?:number;
    subprices: number;
    TotalPrice: number;
    color: any;
    
    
  };
  itemIndex: number;
  // setSubtotal: any;
  // subtotal:any;
  // counter:any;
  // setCounter:any;
  sendDataToParent: (data: any) => void;
  setCounter: Dispatch<SetStateAction<number>>;
  counter: number;
  setSubtotal?: (subtotal: number) => void;
  subtotal?: number;
  receiveDataFromChild?: () => void;
  
}




const CartItem: React.FC<CartItemProps> = ({ item, itemIndex ,setSubtotal,subtotal,counter,setCounter,sendDataToParent }) => {

  const[st,setSt] = useState(item.price);
  // const [counter,setCounter] = useState(1);

  // setSubtotal(item.price);
  if (setSubtotal !== undefined) {
    setSubtotal(item.price);
  }
  
  
    // sendDataToParent(item.price);
  
 
  const dispatch = useDispatch();
  
  // const removeFromCart = () => {
  //   dispatch(remove(item.id));
  //   // toast.success("Item Removed");
  // };
  // const incHandler = () => {
    
  //   setCounter(counter + 1);
  //   // setSubtotal(item.price * (counter+1));
  //   // console.log(item.price * (counter+1));
  //   setSt(item.price * (counter+1));
  //   sendDataToParent(item.price * (counter+1));
    
  // }
  // const decHandler = () =>{
  //   if (counter <= 1) return;
  //   setCounter(counter - 1);
  //   // setSubtotal(item.price * (counter-1));
  //   setSt(item.price * (counter -1));
  //   sendDataToParent(item.price * (counter -1));
  // }


  const handleIncreaseQuantity = (itemId: number) => {
    dispatch(increaseQuantity(itemId));
    
  };

  const handleDecreaseQuantity = (itemId: number) => {
    dispatch(decreaseQuantity(itemId));
    
  };

  useEffect(() => {
    sendDataToParent(item.TotalPrice);
  }, [item.TotalPrice]);

  const removeFromcart = (id: number) => {
    dispatch(remove(id));
  };

  return (


      <div>

                  

                  <div className='detail'>
                  
                        <div>
                          <img src={item.image} width={160} height={120} alt={item.title} />
                        </div>

                        <div className='cart-info'>
                          <p>{item.name}</p>
                          <div className='color-container'>Color: <div className='item-color' style={{ backgroundColor: item.color }}></div></div>
                          <p>${item.price}</p>
                          <button onClick={() => removeFromcart(item.id)}>Remove</button>
                        </div>

                        <div>
                          <p>{item.subprices.toFixed(2)}</p>
                        </div>

                        <div className='quantity'>
                              <p>{item.quantity} </p>
                              <div className='quantity-btn'>
                                <button onClick={() => handleIncreaseQuantity(item.id)}><MdOutlineKeyboardArrowUp /></button>
                                <button onClick={() => handleDecreaseQuantity(item.id)}><MdOutlineKeyboardArrowDown /></button>
                              </div>
                        </div>


                  

              </div>
                        <div className='hr'></div>

      </div>

      




   
   
  );
};

export default CartItem;

  