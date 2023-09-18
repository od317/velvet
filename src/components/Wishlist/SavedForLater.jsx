import React from 'react'
import Content from './Content'
function SavedForLater({items,handleSbSflChange}) {
  return (
    <div>
       <Content items={items} text={'Move to bag'} />
    </div>
  );
}

export default SavedForLater;
