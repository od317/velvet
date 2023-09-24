import React, { useState } from 'react'
import FIlters from './FIlters'
import Sort from './Sort'
import StoreGrid from './StoreGrid'
import items from '../../Data/items'

function StoreLayout({sortP,filterP}) {

     const [sort,setSort] = useState(sortP||'recomended')
     const [filter,setFilter] = useState(filterP||'')
     const [items_show,setItemsShow] = useState(
          sortP ? StartSort() : items
     )
     
     function StartFilter(){

     }

     function StartSort(){
          let nextItems = items
          switch(sort){
               case 'price low to high':
                         nextItems.sort((a,b)=>{
                             return a.price - b.price
                         })
                    break
               case 'price high to low':
                         nextItems.sort((a,b)=>{
                              return b.price - a.price
                         })
                    break
               case 'date':
                    nextItems.sort((a,b)=>{
                         return b.date - a.date
                    })
                    break          
               default :
               break
          }
           return nextItems
     }
     

    const handlefilterChange = (value)=>{
         if(filter === value){
          setFilter('')
          handleItemsChange('')
          return
         }
         setFilter(value)
         handleItemsChange(value)
    }

    const handleItemsChange = (value)=>{
      let nextItems = items
      switch(value){
          case 'sm':
               nextItems = nextItems.filter(i=>{
                    return i.size.has('sm')
               })
               break
          case 'medium':
               nextItems = nextItems.filter(i=>{
                    return i.size.has('medium')
               })
                    break  
          case 'lg':
               nextItems = nextItems.filter(i=>{
                         return i.size.has('lg')
                    })
                    break               
          default :
               break     
      }
      handleSortItemsChange(sort,nextItems)
    }


    const handleSortChange = (value)=>{
     setSort(value)
     handleSortItemsChange(value)
    } 
    
    const handleSortItemsChange = (value,nextItems = items_show)=>{
          switch(value){
               case 'price low to high':
                         nextItems.sort((a,b)=>{
                             return a.price - b.price
                         })
                    break
               case 'price high to low':
                         nextItems.sort((a,b)=>{
                              return b.price - a.price
                         })
                    break
               case 'date':
                    nextItems.sort((a,b)=>{
                         return b.date - a.date
                    })
                    break          
               default :
               break
          }
          setItemsShow(nextItems)
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
  return (<>
    <div className=' hidden phone:block'>
          <Sort sort={sort} numShow={items_show.length} handleSortChange={handleSortChange} />
    </div>
    <div className=' flex flex-col relative phone:flex-row'>
      
         <div className=' pb-[70%] relative phone:hidden  '>
                     <img className=' absolute w-full ' 
                     src="https://s3-media0.fl.yelpcdn.com/bphoto/s3J5l1SCn7p1fRY8zdU2cg/348s.jpg" alt="" />
         </div>
      
         <div className='phone:hidden bg-light2 z-[2] pl-[2%] flex flex-row justify-between rounded-tl-3xl w-[70%]'>
             <Sort sort={sort} handleSortChange={handleSortChange} />
             <FIlters filter={filter}  handlefilterChange={handlefilterChange} />
         </div>
   
         <div className=' hidden ms:block phone:w-[20%] ms:w-[18%]  phone:pl-[2%] z-[2]  top-[0%] phone:h-fit phone:sticky phone:top-[0%] pt-[1%] '>
              <FIlters filter={filter}  handlefilterChange={handlefilterChange} />
         </div>
      
         <div className=' phone:w-[100%] ms:w-[85%]  z-[1] bg-light2 px-[2%] pb-[100%]'>
              <StoreGrid items={items_show} />
         </div>

    </div>
    </>
  )
}





export default StoreLayout
