import React from 'react';

const filters = [{
  name:'sm'
  },
  {name:'medium'},
  {name:'lg'},
  { name:'xl'},
  {name:'2xl'},
  {name:'3xl'}
]

function FIlters({handlefilterChange,filter}) {
  return (<>
            <div className=' phone:block hidden border-r-[1px] border-gray'>
              
              <div className=' font-bold border-b-[1px] border-gray w-full pb-[1%]' htmlFor="">Filters</div>
              <div className=" flex flex-col">
                  {filters.map(f=>{
                    return(<div key={f.name}>
                        <div className='flex flex-row gap-[1%] items-center my-[.5%] '>
                            <div className={` ${f.name === filter ? 'bg-black':''} w-[4.5%] pb-[4.5%] rounded-full border-[1px]`}></div>
                            <button onClick={()=> handlefilterChange(f.name)} className='flex flex-row items-center justify-center'>{f.name}</button>
                        </div>
                    </div>)
                  })}

              </div>


            </div>


            <div className=' phone:hidden  w-[20%] text-white rounded-full relative  '>
                  <div className='  w-[110%] pb-[110%] translate-x-[50%] bg-dark2 rounded-full relative'>
                       <div className=' absolute flex items-center text-[150%] justify-center w-full h-full '>
                       <ion-icon name="filter-outline"></ion-icon>
                       </div>
                  </div>
            </div>

    </>
  );
}

export default FIlters;
