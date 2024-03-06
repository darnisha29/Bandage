
import { Dispatch,SetStateAction } from 'react';
import '../pages/ProductListing.css';
import React, { useEffect, ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTo, brandTo } from '../filters/filtred-product/filterSlice';
import './Brand.css'


interface CheckedItems {
  
  checkedItems: { [key: string]: boolean };
  setCheckedItems: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
}

const Brand = ({checkedItems ,setCheckedItems}:CheckedItems) => {
  const dispatch = useDispatch();
  // const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setCheckedItems(prevCheckedItems => {
      const updatedItems = { ...prevCheckedItems, [name]: checked };
      const brandName = name.split(" ").join("");

      if (!checked) {
        delete updatedItems[brandName];
      }

      // dispatch(brandTo(updatedItems));
      return updatedItems;
    });
  };

  return (
    <>
      <div className='Brands'>
        <h3> Brands</h3>
        <label>
          <input
            type="checkbox"
            name='All'
            checked={checkedItems.All || false}
            onChange={handleChange}
          />
          All
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name='Zara'
            checked={checkedItems.Zara || false}
            onChange={handleChange}
          />
          Zara
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name='Levins'
            checked={checkedItems.Levins || false}
            onChange={handleChange}
          />
          Levins
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name='Adidas'
            checked={checkedItems.Adidas || false}
            onChange={handleChange}
          />
          Adidas
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name='PeterEngland'
            checked={checkedItems.PeterEngland || false}
            onChange={handleChange}
          />
          Peter England
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name='AllenSolley'
            checked={checkedItems.AllenSolley || false}
            onChange={handleChange}
          />
          Allen Solley
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name='Fabindia'
            checked={checkedItems.Fabindia || false}
            onChange={handleChange}
          />
          Fabindia
        </label>
        <br />
      </div>
    </>
  );
}

export default Brand;