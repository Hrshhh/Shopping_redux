import React, { useState } from 'react';
import Card from '../UI/Card';
import ShoppingFilter from './ShoppingFilter';
import './Shopping.css';
import ShoppingItem from './ShoppingItem';

const Shopping = () => {
  
  const [shop_listt] = useSelector((state) => state.shoppingReducers.shop_items);

 console.log("props",props)
  const [filteredArea, setFilteredArea] = useState('Thane');
  const [filteredCategory, setFilteredCategory] = useState('Grocery');

  const filterAreaHandler = (selectedArea) => {
    setFilteredArea(selectedArea);
  };

  const filterCategoryHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory);
  };

  const filteredShop = shop_listt.filter((shop) => {
    return (shop.area === filteredArea && shop.category === filteredCategory);
  });

  // const filteredExpCat = props.items.filter((expense) => {
  //   return expense.category === filteredCategory;
  // });

  

  return (
    <div>
      <Card className='shops'>
        <ShoppingFilter
          selectedArea={filteredArea}
          onChangeAreaFilter={filterAreaHandler}
          selectedCat={filteredCategory}
          onChangeCatFilter={filterCategoryHandler}
        />
        <ShoppingItem />
      </Card>
    </div>
  );
};

export default Shopping;