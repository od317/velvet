import items from "./items"


const fun = (searchq)=>{
  let res = items.filter(i=>{
    return i.type === searchq
  }).map(i=>{
    return i.id
  }) 
  return res
}

export default fun