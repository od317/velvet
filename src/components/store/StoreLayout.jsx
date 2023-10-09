import React, { useState } from 'react'
import FIlters from './FIlters'
import Sort from './Sort'
import StoreGrid from './StoreGrid'
import it from '../../Data/items'
import { changeFilterList, handleItemsChangeSwitch, handleSortItemsChangeSwitch } from '../../Data/handlers'
import { useEffect } from 'react'
import SFilters from './SFilters'
function StoreLayout({id,sortP,filterP}) {
     const [items,setItems] = useState( id ? filterMain(id) : it)
     const [filter,setFilter] = useState(filterP)
     const [curItems,setCurItems] = useState(StartFilter(items))
     const [sort,setSort] = useState(sortP||'featured')
     const [items_show,setItemsShow] = useState(curItems.slice(0,20))
     const [curPage,setCurPage] = useState(1)
     const [showSfilters,setShowSfilters] = useState(false)
     const [sFilter,setSFilter] = useState('')
    
     function filterMain(id){
              let tmp = [...it]
              tmp = tmp.filter(t=>{
               return t.type == id
              })
              return tmp             
     }

    function StartFilter(items1){
     let nextItems = [...items1]  
     nextItems = handleItemsChangeSwitch(nextItems,filterP)
     return StartSort(nextItems)
    } 

    function StartSort(nextItems){
          handleSortItemsChangeSwitch(nextItems,sortP ? sortP : 'featured')
          return nextItems
    }
    const handlefilterChange = (name,value)=>{
     let newFilter = [...filter]
     newFilter = newFilter.map(f=>{
          if(f.name == name){
             return {
               name:name,
               val:changeFilterList(f.val,value)
          }  
          }
          return f
     })
     setFilter(newFilter)
     handleItemsChange(newFilter)
     // if(filter === value){
     //      setFilter('')
     //      handleItemsChange('')
     //      return
     //     }
     //     setFilter(value)
     //     handleItemsChange(value)
    }

    const handleItemsChange = (newFilter)=>{
      let nextItems = [...items]
      nextItems = handleItemsChangeSwitch(nextItems,newFilter)
      handleSortItemsChange(sort,nextItems)
    }

    const handleSortChange = (value)=>{
     setSort(value)
     handleSortItemsChange(value)
    } 
    
    const handleSortItemsChange = (value,nextItems = curItems)=>{
          handleSortItemsChangeSwitch(nextItems,value)
          setCurItems(nextItems)
          setItemsShow(nextItems.slice(0,20))
    }

    const handleItemsHover = (id,index)=>{
          setItemsShow(prev=>prev.map(p=>{
             console.log(p.id)
               if(p.id === id){
               return {...p,
                       index:index}
             }
             return p
          }))
    }

    const handelSfiltersChange = (value)=>{
          setShowSfilters(s=> !s)
          setSFilter(value)
          if(!showSfilters){
               console.log('ok')
               document.querySelector('body').style.overflowY='hidden'
           }else 
             document.querySelector('body').style.overflowY='visible'
    }

    useEffect(()=>{
     let curItems = id ? filterMain(id) : it
     setItems(curItems)
     curItems = StartFilter(curItems)
     setFilter(filterP)
     setCurItems(curItems)
     setSort(sortP||'featured')
     setItemsShow(curItems.slice(0,20))
    },[id])
  return (<>

      <div className={` ${showSfilters ? 'translate-x-0':'translate-x-[100%]' } flex flex-row transition-all duration-200 h-screen fixed top-0 w-[100%]  z-[100] ms:hidden`}>
              <div className='w-[35%] h-screen bg-dark2 opacity-50'></div>
              <div className='bg-p1 w-[65%] flex flex-col items-center py-[5%]'>
               <button onClick={()=>handelSfiltersChange('')} className='py-[5%] border-black border-[1px] mb-[5%] w-[95%] text-center '>
                  done
               </button>
              <FIlters sFilter={sFilter} filter={filter}  handlefilterChange={handlefilterChange}></FIlters>
              </div>
      </div>
      
     <div className='px-[5%] flex flex-col w-full   whitespace-nowrap ms:block ms:px-[0%]  phone:px-[5%]'>
          <Sort sort={sort} numShow={items_show.length} totalNumShow={curItems.length} handleSortChange={handleSortChange} />
          <div className='ms:hidden'>
          <SFilters handleClick={handelSfiltersChange}/>
          </div>
    </div>
    
    <div className=' flex flex-col relative ms:flex-row'>
      

   
         <div className='  hidden ms:block ms:w-[18%]  ms:pl-[2%] z-[2]  top-[0%] ms:h-fit ms:sticky ms:top-[0%] pt-[1%] '>
              <FIlters filter={filter}  handlefilterChange={handlefilterChange} />
         </div>
      
         <div className=' phone:w-[100%] ms:w-[85%] mb-[30%] z-[1] bg-p1 px-[2%] h-fit'>
              <StoreGrid items={items_show} />
         </div>

    </div>
    </>
  )
}





export default StoreLayout
