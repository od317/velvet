
const handleItemsChangeSwitch = (nextItems1,filters)=>{
    console.log(filters)
    let ans = []
    for(let i =0;i<filters.length;i++){ 
               if(!filters[i].val || filters[i].val.length==0){
                    continue
               }
               ans = []
               let list = filters[i].val
               let nextItems = [...nextItems1]
               console.log(filters[i].name,nextItems)
               for(let value of list){
               switch(value){
                    case 'sm':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.size.has('sm') 
                         })]
                         break
                    case 'medium':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.size.has('medium')
                         })]
                              break  
                    case 'large':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.size.has('large')
                         })]
                              break  
                    case 'xl':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.size.has('xl')
                         })]
                              break  
                    case '2xl':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.size.has('2xl')
                         })]
                              break  
                    case '3xl':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.size.has('3xl')
                         })]
                              break  
                    case 'Lauren Ralph Lauren':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.brand === 'Lauren Ralph Lauren'
                         })]
                              break  
                    case 'Canada Goose':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.brand === 'Canada Goose'
                         })]
                              break  

                    default :
                         break     
               }
          }
          nextItems1 = [...ans]
   }
    ans = Array.from(new Set(ans))
    if(ans.length == 0){
     ans = [...nextItems1]
    }
    return ans
}

const handleSortItemsChangeSwitch = (nextItems,value)=>{
       switch(value){
        case 'price low to high':
                  nextItems.sort((a,b)=>{
                    return price(a) - price(b)
                })
             break
        case 'price high to low':
                  nextItems.sort((a,b)=>{
                       
                       return price(b) - price(a)
                  })
             break
        case 'date':
             nextItems.sort((a,b)=>{
                  return b.date - a.date
             })
             break  
        case 'rate':
             nextItems.sort((a,b)=>{
                  return b.rate.rate - a.rate.rate
             })
             break
        case 'featured':  
        nextItems.sort((a,b)=>{
             return b.featured - a.featured
        })
               break                          
        default :
        break
   }
   return nextItems
}

function price(p){
         let o = 0 
         if(p.dis){
            o = p.price - (p.price*p.dis/100)
            o = o.toFixed(2)
            return o
        }  
         return p.price  
}

const changeFilterList = (list,val)=>{
      let s = new Set(list)
      if(s.has(val)){ 
        s.delete(val)
        list = Array.from(s)
      }
      else
        list = [...list,val]
      return list
}

export {handleSortItemsChangeSwitch,handleItemsChangeSwitch,changeFilterList}