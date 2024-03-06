import React, { FC, useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import data from '../data';
import shopIcon from '../components/productListing-images/Vector (56).svg';
import Slidercard from '../components/Slidercard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import filterIcon from "../components/productListing-images/Vector (57).svg";
import Brands from '../components/Brand';
import { IoIosArrowBack } from "react-icons/io";
import Brand from '../components/Brand';
import ProductCard from '../components/ProductCard';
// import { addTo, brandTo } from '../filters/filtred-product/filterSlice';

import brand3 from '../components/productListing-images/Vector (52).svg';
import  brand2 from '../components/productListing-images/fa-brands-2.svg';
import brand1 from '../components/productListing-images/Vector (51).svg';
import brand4 from '../components/productListing-images/Vector (53).svg';
import brand5 from '../components/productListing-images/Vector (54).svg';
import brand6 from '../components/productListing-images/Vector (55).svg'; 
import { IoIosArrowDown } from "react-icons/io";
import DropdownMenu from '../components/DropdownMenu';
import { RiMenu5Fill } from "react-icons/ri";
// import InputRange from 'react-input-range';
import   'react-range-slider-input/dist/index';
import RangeSlider from 'react-range-slider-input';
// import 'react-rangeslider/lib/index.css'
import  './ProductListing.css';
import Price from '../components/Price';
// import { price } from "../filters/filtred-product/filterSlice";
import { three } from '../filters/filtred-product/filterSlice'; 
import { RootState } from '../filters/store';

interface CheckedItems {
  [key: string]: boolean;
}
interface Option {
  id: number;
  label: string;
}
interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  low: number;
  high: number;
  onChange: (low: number, high: number) => void;
}

interface ExtendedSliderProps extends RangeSliderProps {
  onChange: (low: number, high: number) => void;
}



const ProductListing: FC = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});
  const [category, setCategory] = useState<string>('');
  const [Option, setOption] = useState('');
  const [filter,setFilter] = useState(false);
 
  // const [value, setValue] = useState([10, 500]);
  const [value, setValue] = useState<number[]>([0, 2000]);

  const handlePriceChange = (newValue: number[]) => {
    console.log("priceChange called..........");
    // dispatch(price(newValue));
  };
  
  
  
  const dispatch = useDispatch();
  
  const categories = category;
  const pricefilter = value; 
  const brand = checkedItems; 
  console.log("cate:",categories);
  console.log(brand)
  console.log(pricefilter);
  
  // const products = useSelector((state: RootState) => state.filter.filterdata);
 
  const getItem = { categories: categories, pricefilter: pricefilter, brand: brand };
  useEffect(() => {
    console.log("printing useeffect for one time----------");
    dispatch(three(getItem));
  });
  useEffect(() => {
    console.log(getItem);
    dispatch(three(getItem));
    // const filterData = useSelector()
  },[categories,pricefilter,brand]);
  
  // Dispatch an action with the payload
  
  
  
  const clickHandler = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const id = event.currentTarget.id;
    setCategory(id);
    // dispatch(addTo(id));
  };

  const optionss = [
    { id: 1, value: 'option1', label: 'Option 1' },
    { id: 2, value: 'option2', label: 'Option 2' },
    { id: 3, value: 'option3', label: 'Option 3' },
  ];

  const handleOptionChange = (selectedValue: string) => {
    console.log('Selected option:', selectedValue);
    // Handle option selection here
  };

  // const handlePriceChange = (newValues: [number, number]) => {
  //   setLowValue(newValues[0]);
  //   setHighValue(newValues[1]);
  // };
 

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, checked } = event.target;
  //   setCheckedItems({ ...checkedItems, [name]: checked });
  //   let brandName = name.split(" ").join("");
  //   if (!checked) delete checkedItems[brandName];
  //   dispatch(brandTo(brandName));
  // };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const options: Option[] = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 const handleFilter = () => {
  if(filter == false){
  setFilter(true);
  }
else { setFilter(false);}
 }

 


  return (

    <div>
      <Navbar/>
      <div className='caurasole'>
      <div className='shop'>
        <h4>Shop</h4>
        <div className='shop-icon'>
          <h5 className='shop-home'>Home</h5>
          <img src={shopIcon} alt='Shop Icon'/>
          <h5 className='shop-shop'>Shop</h5>
        </div>
      </div>

      <div className='slider-container'>
        <Slider {...settings} className='sliding'>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.image} alt={`Shop ${item.id}` } />
              </div>
            );
          })}
        </Slider>
      </div>
      </div>
          
      <div className='Filter-container'>

        <div className='filter'>

                  <div className='filter-by' >
                        <h4>Filter by</h4>
                    <div><img src={filterIcon} alt='Filter Icon' onClick={clickHandler} id='All' /> <span>All Categories</span> </div>
                        <div className='category'>
                          <p id="men" onClick={clickHandler}>All Men's Clothing</p>
                          <p id= "women" onClick={clickHandler}>Women's Clothing</p>
                          <p id='footwear' onClick={clickHandler}>Footwear</p>
                          <p id='watches' onClick={clickHandler}>Watches</p>
                          <p id='beauty' onClick={clickHandler}>Beauty</p>
                          <p id='kid' onClick={clickHandler}>Kid's clothing</p>
                          <p id='bag' onClick={clickHandler}>Hand bags</p>
                          <p id='jwellery' onClick={clickHandler}>Jwellery</p>
                        </div> 

                  </div>

               
   
              
                        <Price handlePriceChange = {handlePriceChange}  value = {value} setValue= {setValue} />

                  <div className='Brands'>
                    {/* <h3> Brands</h3> */}
                    <Brand checkedItems = {checkedItems} setCheckedItems ={setCheckedItems} />
                  </div>

        </div>

        <div className='filtered-content'>
              <div className='filter-heading'>
                    <div>
                      <h3>{category}</h3>
                      <p>text will be here</p>
                    </div>

                    <div className='sort-by'>
                    <p>Sort by</p>
                  
                    <div className="dropdown-container">

                        <button onClick={toggleDropdown} className="dropdown-toggle">
                          {selectedOption ? selectedOption.label : 'Select an option'} <IoIosArrowDown/>
                        </button>

                          {isOpen && (
                                  <div className="dropdown-menu">
                                      {options.map(option => (
                                        <div
                                          key={option.id}
                                          onClick={() => handleOptionClick(option)}
                                          className="dropdown-item"
                                        >
                                          {option.label}
                                        </div>
                                      ))}
                                  </div>
                            )}
                        </div>
              </div>

          </div>
          <div className='filter-heading-mob'>
          
          <button onClick={handleFilter}>Filter <RiMenu5Fill/></button>
          <DropdownMenu optionss={optionss} handleOptionChange={handleOptionChange} />

          </div>
          {filter && <div className='filter-mob' style={{display :  'block'}}>
          

<div className='filter-by'  >
      {/* <h4>Filter by</h4> */}
  <div><span>All Categories</span> </div>
      <div className='category'>
        <p id="men" onClick={clickHandler}>All Men's Clothing</p>
        <p id= "women" onClick={clickHandler}>Women's Clothing</p>
        <p id='footwear' onClick={clickHandler}>Footwear</p>
        <p id='watches' onClick={clickHandler}>Watches</p>
        <p id='beauty' onClick={clickHandler}>Beauty</p>
        <p id='kid' onClick={clickHandler}>Kid's clothing</p>
        <p id='bag' onClick={clickHandler}>Hand bags</p>
        <p id='jwellery' onClick={clickHandler}>Jwellery</p>
      </div> 


                  <Price  handlePriceChange = {handlePriceChange} value= {value} setValue={setValue} />

                  <div className='Brands'>
                    {/* <h3> Brands</h3> */}
                    <Brand  checkedItems = {checkedItems} setCheckedItems={setCheckedItems}/>
                  </div>

                  <div>

                  <button className='reset-btn'>Reset</button>
                  </div>
                  

</div>
          </div>}
          

          <ProductCard/>  
        </div>
      
      </div>

      <div className='brands'>
            <img src = {brand1}/>
            <img src = {brand2}/>
            <img src = {brand3}/>
            <img src = {brand4}/>
            <img src = {brand5}/>
            <img src = {brand6}/>
          </div>

      <Footer/>
    </div>
  );
}

export default ProductListing;