import React, { useState } from 'react'
import FIlters from './FIlters'
import Sort from './Sort'
import StoreGrid from './StoreGrid'
import it from '../../Data/items'
import {m} from '../../Data/items'
import { changeFilterList, handleItemsChangeSwitch, handleSortItemsChangeSwitch } from '../../Data/handlers'
import { useEffect } from 'react'
import { Routes, Route, useParams, useSearchParams } from 'react-router-dom'
import SFilters from './SFilters'
import Pages from './Pages'
import getSearchedItems from '../../Data/getSearchedItems'
function StoreLayout({id,sortP,filterP,page,searchq}) {
     const [items,setItems] = useState( id ? filterMain(id) : (searchq ? filterSearchq(): it))
     const [filter,setFilter] = useState(filterP)
     const [curItems,setCurItems] = useState(StartFilter(items))
     const [sort,setSort] = useState(sortP||'featured')
     const [items_show,setItemsShow] = useState(curItems.slice(0,20))
     const [curPage,setCurPage] = useState(page||1)
     const [showSfilters,setShowSfilters] = useState(false)
     const [sFilter,setSFilter] = useState('')
     const [searchParams, setSearchParams] = useSearchParams() 

     function filterMain(id){
              let tmp = [...it]
              tmp = tmp.filter(t=>{
               return t.type == id || t.brand == id
              })
              return tmp             
     }

     function filterSearchq(){
          let tmp = getSearchedItems(searchq)
          tmp = tmp.map(t=>{
               return m[t]
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

    const handlefilterChange = (curFilters)=>{
     let newFilter = [...filter]
     curFilters.map(c=>{
           let name = c[0]
           let value = c[1]
           newFilter = newFilter.map(f=>{
               if(f.name == name){
                  return {
                    name:name,
                    val:changeFilterList(f.val,value)
               }  
               }
               return f
          })
     })
     setFilter(newFilter)
     handleItemsChange(newFilter)
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
          setCurPage(1)
    }


    const handelSfiltersChange = (value,state)=>{
          setShowSfilters(state)
          setSFilter(value)
          if(!showSfilters){
               document.querySelector('body').style.overflowY='hidden'
           }else 
             document.querySelector('body').style.overflowY='visible'
    }

    const handlePageChange = (value)=>{
          setCurPage(value)
          let start = (value-1)*20 
          setItemsShow(curItems.slice(start,start+20))
          window.scrollTo(0, 0)
     }

    
     useEffect(()=>{
     let curItems = id ? filterMain(id) : searchq ? filterSearchq(): it
     setItems(curItems)
     curItems = StartFilter(curItems)
     setFilter(filterP)
     setCurItems(curItems)
     setSort(sortP||'featured')
     setItemsShow(curItems.slice(0,20))
     setCurPage(1)
     window.scrollTo({top:0})
    },[id,searchq])
    
    useEffect(()=>{
     searchParams.set('page',curPage)
     let f = ''
     filter.map(f=>{
          let tmp = '' 
          if(f.val.length > 0){
             tmp = tmp.concat(f.val.reduce((p,c)=>{
               return p.concat(',').concat(c)
             }))
          }
          if(tmp != ''){
              searchParams.set(f.name,tmp) 
          }
          else{
               searchParams.delete(f.name)
          }
     })
     if(sort){
          searchParams.set('sort',sort) 
     }
     if(id){
          searchParams.delete('searchq')
     }
     setSearchParams(searchParams,{replace:true})
    },[curPage,filter,sort])

  return (<>

     <div className={` ${showSfilters ? 'translate-x-0':'translate-x-[100%]' } flex flex-row transition-all duration-200 h-screen fixed top-0 w-[100%]  z-[100] navmid:hidden`}>
              <div onClick={()=>handelSfiltersChange('',false)} className='w-[35%] h-screen bg-dark2 opacity-50'></div>
              <div className='bg-p1 w-[65%] flex flex-col items-center py-[5%]'>
               <button onClick={()=>handelSfiltersChange('',false)} className='py-[5%] border-black border-[1px] mb-[5%] w-[95%] text-center '>
                  done
               </button>
              <FIlters setSFilter={setSFilter} handelSfiltersChange={handelSfiltersChange} sFilter={sFilter} filter={filter}  handlefilterChange={handlefilterChange}></FIlters>
              </div>
      </div>
      
      

     <div className=' flex flex-col w-full   whitespace-nowrap ms:block navmid:px-[0%] px-[2%]'>
          <Sort sort={sort} numShow={items_show.length} totalNumShow={curItems.length} handleSortChange={handleSortChange} />
          <div className='navmid:hidden'>
          <SFilters handleClick={handelSfiltersChange}/>
          </div>
     </div>
    
    <div className=' flex flex-col relative ms:flex-row'>
      

   
         <div className='  hidden navmid:block ms:w-[18%]  ms:pl-[2%] z-[2]  top-[0%] ms:h-fit ms:sticky ms:top-[0%]  '>
              <FIlters setSFilter={setSFilter} handelSfiltersChange={handelSfiltersChange} sFilter={sFilter} filter={filter} searchq={searchq} handlefilterChange={handlefilterChange} />
         </div>
      
         <div className=' phone:w-[100%] navmid:w-[85%]  z-[1] bg-p1 px-[2%] h-auto '>
              <StoreGrid items={items_show} />
              <Pages page={curPage} length={curItems.length} handlePageChange={handlePageChange}></Pages>
         </div>

    </div>
    </>
  )
}





export default StoreLayout
