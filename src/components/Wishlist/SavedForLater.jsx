import React from 'react'
import Content from './Content'
function SavedForLater({items,handleSbSflChange}) {
  return (
    <div className='bg-p1 px-[4%] '>
       <div className=' py-[5%] border-b-[.1px] border-b-gray2 flex flex-row'>


       </div>
       
       <Content items={items} text={'Move to bag'} />


    </div>
  );
}

export default SavedForLater;
