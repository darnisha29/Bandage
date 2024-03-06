import product1 from './components/productListing-images/fixed-height (3).svg';
import product2 from './components/productListing-images/fixed-height (4).svg';
import product3 from './components/productListing-images/fixed-height (5).svg';
import product4 from './components/productListing-images/fixed-height (6).svg';
import product5 from './components/productListing-images/fixed-height (7).svg';
import product6 from './components/productListing-images/product-cover-5 (12).svg';
import crokery1 from './components/productListing-images/crokery1.svg';
import crokery2 from './components/productListing-images/crokery2.svg';
import crokery3 from './components/productListing-images/crokery3.svg';
import crokery4 from './components/productListing-images/crokery4.svg';
import crokery5 from './components/productListing-images/crokery5.svg';
import crokery6 from './components/productListing-images/crokery6.svg';
import crokery7 from './components/productListing-images/crokery7.svg';
import crokery8 from './components/productListing-images/crokery8.svg';
interface Product {
  id: number;
  category: string;
  Brand: string;
  images:Array<String>;
  image: string;
  design: string;
  department: string;
  price1: string;
  price2: string;
  colors: Array<String>;
  name: string;
  price: number;
  rates :string;
  description:string;
  
}

const products: Product[] = [
  {
    id: 1,
    category: "women",
    Brand: 'Zara',
    image: product1,
    design: "Graphics design",
    department: "English Department",
    price1: "$2333.48",
    price2: "$16.48",
    colors: [
       "sky",
       "green",
       "orange",
       "green",
    ],

    name: "Floating Phone",
      price:400.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          product1,    
       ],

  },
  {
    id: 2,
    category: "men",
    Brand: "Adidas",
    image: product2,
    design: "Graphics design",
    department: "English Department",
    price1: "$26.48",
    price2: "$16.48",
    colors: [
      "sky",
       "green",
       "orange",
       "green",
    ],
    name: "Floating Phone",
      price:16.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          product2,
           
       ],

  },
  {
    id: 3,
    category: "men",
    Brand: "Levins",
    image: product3,
    design: "Graphics design",
    department: "English Department",
    price1: "$216.48",
    price2: "$16.48",
    colors: [
       'sky',
       'green',
       'orange',
       'green',
    ],
    name: "Floating Phone",
      price:26.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          product3,
         
       ],

  },
  {
    id: 4,
    category: "men",
    Brand: "Levins",
    image: product4,
    design: "Graphics design",
    department: "English Department",
    price1: "$1116.48",
    price2: "$16.48",
    colors: [
      'sky',
      'green',
      'orange',
      'green',
   ],
    name: "Floating Phone",
      price:139.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          product4
           
       ],

  },
  {
    id: 5,
    category: "women",
    Brand: "Adidas",
    image: product5,
    design: "Graphics design",
    department: "English Department",
    price1: "$16.48",
    price2: "$16.48",
    colors: [
      'sky',
      'green',
      'orange',
      'green',
   ],
    name: "Floating Phone",
      price:500.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          product5,
       ],

  },
  {
    id: 6,
    category: "women",
    Brand: "Adidas",
    image: product6,
    design: "Graphics design",
    department: "English Department",
    price1: "$16.48",
    price2: "$16.48",
    colors: [
      'sky',
      'green',
      'orange',
      'green',
   ],
    name: "Floating Phone",
      price:39.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          product6,
       ],

  },
  {
    id: 7,
    category: "crokery",
    Brand: "Levis",
    image: crokery1,
    design: "Graphics design",
    department: "English Department",
    price1: "$16.48",
    price2: "$16.48",
    colors: [
      'sky',
      'green',
      'orange',
      'green',
   ],
    name: "Floating Phone",
      price:11.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          crokery1
       ],

  },
  {
    id: 8,
    category: "crokery",
    Brand: "Levis",
    image: crokery2,
    design: "Graphics design",
    department: "English Department",
    price1: "$16.48",
    price2: "$16.48",
    colors: [
      'sky',
      'green',
      'orange',
      'green',
   ],
    name: "Floating Phone",
      price:39.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          crokery1
       ],
        
  },
  {
    id: 9,
    category: "crokery",
    Brand: "Levis",
    image: crokery3,
    design: "Graphics design",
    department: "English Department",
    price1: "$16.48",
    price2: "$16.48",
    colors: [
      'sky',
      'green',
      'orange',
      'green',
   ],
    name: "Floating Phone",
      price:9.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          crokery1
       ],

  },
  {
    id: 10,
    category: "crokery",
    Brand: "Levis",
    image: crokery4,
    design: "Graphics design",
    department: "English Department",
    price1: "$16.48",
    price2: "$16.48",
    colors: [
      'sky',
      'green',
      'orange',
      'green',
   ],
    name: "Floating Phone",
      price:39.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          crokery1
       ],

  },
  {
    id: 11,
    category: "crokery",
    Brand: "Levis",
    image: crokery5,
    design: "Graphics design",
    department: "English Department",
    price1: "$16.48",
    price2: "$16.48",
    colors: [
      'sky',
      'green',
      'orange',
      'green',
   ],
    name: "Floating Phone",
      price:39.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          crokery1
       ],

  },
  {
    id: 12,
    category: "crokery",
    Brand: "Levis",
    image: crokery6,
    design: "Graphics design",
    department: "English Department",
    price1: "$16.48",
    price2: "$16.48",
    colors: [
      'sky',
      'green',
      'orange',
      'green',
   ],
    name: "Floating Phone",
      price:39.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          crokery1
       ],

  },
  {
    id: 13,
    category: "crokery",
    Brand: "Levis",
    image: crokery7,
    design: "Graphics design",
    department: "English Department",
    price1: "$16.48",
    price2: "$16.48",
    colors: [
      'sky',
      'green',
      'orange',
      'green',
   ],
    name: "Floating Phone",
      price:114.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          crokery1
       ],


  },
  {
    id: 14,
    category: "crokery",
    Brand: "Levis",
    image: crokery8,
    design: "Graphics design",
    department: "English Department",
    price1: "$16.48",
    price2: "$16.48",
    colors: [
      'sky',
      'green',
      'orange',
      'green',
   ],
    name: "Floating Phone",
      price:1139.33,
      rates:'10 reviews',
        // Availability:'',
        description:'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        images:[
          crokery1
       ],

  },
];

export default products;