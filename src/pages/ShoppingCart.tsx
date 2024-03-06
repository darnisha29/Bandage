import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import '../CSS/ShoppingCart.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartItemProps from '../components/CartItem';
import { UseSelector } from 'react-redux';
import { RootState } from '../filters/store';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Popup from '../components/Popup';

 
interface CartItemProps {
   id: number;
   quantity: number;
   subprices : number;
   price :number;
   TotalPrice: number;
   // Define other properties here...
 }
 interface PopupProps {
  trigger: React.ReactNode;
  modal?: boolean;
}

const ShoppingCart: React.FC = () => {
  const [counter,setCounter] = useState(1);
  const [subtotal,setSubtotal] = useState(0);
  const { cart } = useSelector((state: any) => state);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [childData, setChildData] = useState(0);
  const[ids,setIds] = useState<string[]>([]);
  const[total, setTotal] = useState(0);
  // const [data,setData] = useState(0);
  

  const cartData = useSelector( (state :RootState )=> state.cart);
  console.log("cartData for total-----------",cartData);

  useEffect(() => {
        const cartTotal = cartData.map((item: CartItemProps) => { return item.subprices} );
        console.log(cartTotal);
        const result  = cartTotal.reduce((accumulator: number, currentValue: number) => accumulator + currentValue , 0);
        if(!cartTotal.length){
          setTotal(0);  
          }else{
            setTotal(result);
          };
  },[cart])

  const receiveDataFromChild = (data:any) => {
    console.log('Received data from child:', data);
    // Do something with the data in the parent component, such as updating state
    setChildData(data);
  };


  const checkoutHandler = () => {

  }

  const checkid = (ID:any) => {
      setIds(prev=>[...prev, ID]);
  }

  

  

  return (
    <div>
      {/* <Navbar/> */}

     <div className='cart-to-home'>
         <span> <Link to='/'>Home </Link>   /   Cart  </span>

      </div>
      {cart.length > 0  ? (
              <div className='Cart-container'>
                <div className='title'>

                    <p>Product</p>

                    <div className='title-cont'>
                        <p>SubTotal</p>
                        <p>Quantity</p>
                    </div>

                </div>

        <div className='cart-products'>

            <div className='cart-products-list' >
              {cart.map((item: any, index: number) => (
                
              
             <div className='product'>
                <CartItem key={item.id} item={item} setSubtotal={setSubtotal} sendDataToParent = {receiveDataFromChild} itemIndex={index} setCounter ={setCounter} counter = {counter} />
                </div>
                
                
              ))}
            </div>

          <div className='total'>
                    <h4>Cart Total</h4>
                    <div className='total-cont'>
                      <p>SubTotal</p>
                      <p>{total.toFixed(2)}</p>
                    </div>

                      <hr/>

                    <div className='total-cont'>
                      <p>Shipping</p>
                      <p>free</p>
                    </div>

                    <hr/>
                    
                    <div className='total-cont'>
                      <p>Total</p>
                      <p>{total.toFixed(2)}</p>
                    </div>


                    <Popup trigger={<button>Checkout</button>} modal={true} />

                   
                    
                    {/* <button onClick={checkoutHandler}>Checkout</button> */}
                    {/* <Popup trigger={<button> Checkout</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup> */}
            </div>
      </div>

</div>
          
      ) : (
        <div className='empty-cart'>
          <h1>Cart empty</h1>
          <Link to='/'>
            <button>Shop Now</button>
          </Link>
        </div>
      )}

      <Footer/>
    </div>
  );
};

export default ShoppingCart;

{/* <div>
            <div>Your Cart</div>
            <div>Summary</div>

            <p>
              <span>Total Items: {cart.length}</span>
            </p>
          </div>

          <div>
            <p>Total Amount: {totalAmount}</p>
            <button>CheckOut Now</button>
          </div>
        </div> */}

        // import React from 'react';
        // import { useSelector, useDispatch } from 'react-redux';
        // import { Link } from 'react-router-dom';
        // import CartItem from '../components/CartItem';
        // import { RootState } from '../app/store';
        // import '../CSS/ShoppingCart.css';
        // import Footer from '../components/Footer';
        // import { removeItem } from '../cartSlice';
        
  //       const ShoppingCart: React.FC = () => {
  //         const cart = useSelector((state: any) => state.cart);
  //         const dispatch = useDispatch();

  // // Calculate subtotal
  // const subtotal = cart.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);

  // // Shipping rules
  // const shipping = subtotal > 100 ? 0 : 10; // Example: Free shipping for orders over $100

  // // Total calculation
  // const total = subtotal + shipping;
        
  //         return (
  //           <div>
  //             <div className='cart-to-home'>
  //               <span><Link to='/'>Home</Link> / Cart</span>
  //             </div>
  //             {cart.length > 0 ? (
  //               <div className='Cart-container'>
  //                 <div className='title'>
  //                   <p>Product</p>
  //                   <div className='title-cont'>
  //                     <p></p>
  //                     <p>Quantity</p>
  //                   </div>
  //                 </div>
  //                 <div className='cart-products'>
  //                   <div className='cart-products-list'>
  //                     {cart.map((item, index) => (
  //                       <div className='product' key={item.id}>
  //                         <CartItem item={item} itemIndex={index} />
  //                         <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
  //                       </div>
  //                     ))}
  //                   </div>
  //                   <div className='total'>
  //                     <h4>Cart Total</h4>
  //                     <div className='total-cont'>
  //                       <p>SubTotal</p>
  //                       <p>{subtotal.toFixed(2)}</p>
  //                     </div>
  //                     <hr />
  //                     <div className='total-cont'>
  //                       <p>Shipping</p>
  //                       <p>{shipping.toFixed(2)}</p>
  //                     </div>
  //                     <hr />
  //                     <div className='total-cont'>
  //                       <p>Total</p>
  //                       <p>{total.toFixed(2)}</p>
  //                     </div>
  //                     <button>Checkout</button>
  //                   </div>
  //                 </div>
  //               </div>
  //             ) : (
  //               <div className='empty-cart'>
  //                 <h1>Cart empty</h1>
  //                 <Link to='/'>
  //                   <button>Shop Now</button>
  //                 </Link>
  //               </div>
  //             )}
  //             <Footer />
  //           </div>
  //         );
  //       };
        
  //       export default ShoppingCart;
        
