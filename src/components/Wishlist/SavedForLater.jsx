import React from 'react'
import Content from './Content'
function SavedForLater({items,handleSbSflChange}) {
  return (
    <div className='bg-p1 px-[4%] phone:px-[2%] phone:w-[67%] phone:float-left phone:mb-[5%] phone:inline-block '>

       <Content items={items} text={'Move to bag'} />


    </div>
  );
}

export default SavedForLater;
