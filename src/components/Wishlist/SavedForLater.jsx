import React from 'react'
import Content from './Content'
function SavedForLater({items,handleSbSflChange}) {
  return (
    <div className='bg-p1 px-[4%] mid:px-[2%] mid:w-[67%] mid:float-left mid:mb-[5%] mid:inline-block '>

       <Content items={items} text={'Move to bag'} />


    </div>
  );
}

export default SavedForLater;
