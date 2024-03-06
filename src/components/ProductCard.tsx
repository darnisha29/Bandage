import React, { useState,FC } from 'react';
import './ProductCard.css';
import { useSelector } from 'react-redux';
import { RootState } from '../filters/store';
import { Link,To } from 'react-router-dom';

interface Product {
    id: number;
    category: string;
    Brand: string;
    image: string;
    design: string;
    department: string;
    price1: string;
    price2: string;
    colors: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    };
  }

const ProductCard: FC = () => {
  
//   const products: Product[] = useSelector((state: any) => state.filterdata);
  const products = useSelector((state: RootState) => state.filter.filterdata);
  // console.log(products);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(6); // You can adjust the number of items per page

  // Calculate the index of the first and last item to be displayed on the current page
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentProducts: any[] = products.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page navigation
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  // const clickHandler = (item: Product) => {
  //   // Navigate to Product-detail page with necessary props
  //   (history as any).push(`/product-detail/${item.id}`, { image: item.image, category: item.category });
  // };

  

  return (
    <div className='products_with_pagination '>
    <div className='product_cards'>
      {currentProducts.map((item:any) => {
        return (
          
          //  <div className='card' key={item.design} >
          //   <div>
          //     <img className='productcard-img' src={item.image} alt={item.design} />
          //   </div>
          //   <div>{item.design}</div>
          //   <div>{item.department}</div>
          //   <div>
          //     <span>
          //       {item.price1} {item.price2}
          //     </span>
          //   </div>
          //   <div></div>
          // </div>
          // <Link to={`/product-detail/${item.id}?category=${item.category} &&images=${item.images}`} key={item.id} className='card'>
          //     <div>
          //       <img className='productcard-img' src={item.image} alt={item.design} />
          //     </div>
          //     <div>{item.design}</div>
          //     <div>{item.department}</div>
          //     <div>
          //       <span>
          //         {item.price1} {item.price2}
          //       </span>
          //     </div>
          //   </Link>


          <Link to={{
            pathname: `/product-detail/id =${item.id}`,
            state: { product: item } // Pass the entire product object as state
          } as To} key={item.id} className='card'>
            <div>
              <img className='productcard-img' src={item.image} alt={item.design}  />
            </div>
            <p className='design'>{item.design}</p>
            <p className='department'>{item.department}</p>
            <div>
              <p>
               <span className='gray'>${item.price}</span> <span className='green'>${item.price}</span>
              </p>
            </div>
          </Link>
        );
      })}
    </div>


<div className='pagination'>
  <button className='First'>
    First
  </button>
    {/* Render pagination buttons */}
    {Array.from({ length: Math.ceil(products.length / itemsPerPage) }, (_, i) => i + 1).map((pageNumber: number) => (
      <button key={pageNumber} onClick={() => paginate(pageNumber)}>{pageNumber}</button>
    ))}
    <button className='Last'>
    Next
  </button>
  </div>
    
    </div>

   
    
  );
}

export default ProductCard;









// import React, { FC } from 'react';
// import { useSelector } from 'react-redux';
// import './ProductCard.css';
//  import { RootState } from '../filters/store';

// interface Product {
//   image: string;
//   design: string;
//   department: string;
//   price1: string;
//   price2: string;
// }

// const ProductCard: FC = () => {
// //   const products: Product[] = useSelector((state: any) => state.filterdata);
// const products = useSelector((state: RootState) => state.filter.filterdata);

//   // Add a conditional check to handle undefined products array
//   if (!products) {
//     return null; // or render a loading spinner, error message, etc.
//   }

//   return (
//     <div className='product_cards'>
    //   {products.map((item: Product) => {
    //     return (
    //       <div className='card' key={item.design}>
    //         <div>
    //           <img className='productcard-img' src={item.image} alt={item.design} />
    //         </div>
    //         <div>{item.design}</div>
    //         <div>{item.department}</div>
    //         <div>
    //           <span>
    //             {item.price1} {item.price2}
    //           </span>
    //         </div>
    //         <div></div>
    //       </div>
    //     );
    //   })}
//     </div>
//   );
// }

// export default ProductCard;
