import React from 'react';

function SavedForLater({items,handleSbSflChange}) {
  console.log(items)
  return (
    <div>
       {items.map(i=>{
        return(<div key={i}>
            {i}
            <br />
            <button onClick={()=>handleSbSflChange(i)}>click</button>
        </div>)
       })}
    </div>
  );
}

export default SavedForLater;
