import React from 'react'
import {m} from '../../Data/items'
import Content from './Content'
import OrderSum from './OrderSum';

function ShoppingBag({items,handleSbSflChange}) {

  return (
    <>
    <div className='bg-p1 px-[4%] '>
       <div className=' py-[5%] border-b-[.1px] border-b-gray2 flex flex-row'>
            <div className='w-[10%]'>
              s
            </div>
            <div className='flex flex-col'>
                <h2 className=' font-bold text-[140%] w-[70%]'>Shipping ({items.length}) items</h2>
                <label htmlFor="">International shipping</label>
            </div>
       </div>
       
       <Content items={items} text={'save for later'} />


    </div>
    <OrderSum items={items}/>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    </>
  )
}

export default ShoppingBag