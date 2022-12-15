import React,{ useState } from 'react';
import Card from '../UI/Card';
import './ShoppingItem.css';
import { useDispatch,useSelector } from 'react-redux';
import { deleteTodo } from '../../actions';



const ShoppingItem = () => {

  const {shop_listt} = useSelector((Appstate) => 
  ({shop_listt: Appstate.user.shop_items
  }));
  console.log("Shop_List ", shop_listt)
  const dispatch = useDispatch();

  console.log(props);
  return (
    {
      shop_listt.map((elem) => {
      <Card className='shopping-item'>
      {elem.opn_date} 
        <div className='shopping-item__description'>
          <h2>{elem.title}</h2>
          <div className='shopping-item__area'>{elem.area}</div>
          <div className='shopping-item__cat'>{elem.category}</div>
        </div>
        {elem.cls_date}
        <button onClick={() => dispatch(deleteTodo(elem.id))}>Delete</button>
      </Card>
      })
    }
    
  );
}
 
export default ShoppingItem;