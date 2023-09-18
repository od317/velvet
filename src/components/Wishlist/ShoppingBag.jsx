import React from 'react'
import {m} from '../../Data/items'
import Content from './Content'
function ShoppingBag({items,handleSbSflChange}) {

  return (
    <div>
       <Content items={items} text={'save for later'} />
    </div>
  );
}

export default ShoppingBag